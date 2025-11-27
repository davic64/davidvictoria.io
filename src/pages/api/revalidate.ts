import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Verificar el secreto para seguridad
    const authHeader = request.headers.get('Authorization');
    const expectedSecret = import.meta.env.REVALIDATION_SECRET;
    
    if (expectedSecret && authHeader !== `Bearer ${expectedSecret}`) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Aquí podrías integrar con tu plataforma de deploy (Vercel, Netlify, etc.)
    // para trigger un rebuild automático
    const rebuildUrl = import.meta.env.REBUILD_WEBHOOK_URL;
    
    if (rebuildUrl) {
      try {
        const rebuildResponse = await fetch(rebuildUrl, { method: 'POST' });
        if (!rebuildResponse.ok) {
          throw new Error(`Rebuild failed: ${rebuildResponse.status}`);
        }
      } catch (error) {
        console.error('Rebuild webhook error:', error);
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Revalidation triggered',
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  } catch (error) {
    console.error('Revalidation error:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  }), {
    status: 200,
    headers: { 
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  });
}