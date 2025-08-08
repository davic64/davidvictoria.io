export interface Post {
  _id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime?: number;
  excerpt?: string;
  body: string;
  mainImage?: string;
}

export const mockPosts: Post[] = [
  {
    _id: '1',
    title: 'Introducción a Astro: El futuro del desarrollo web estático',
    slug: 'introduccion-a-astro',
    category: 'Web Development',
    date: '2024-01-15',
    readTime: 8,
    excerpt: 'Descubre por qué Astro está revolucionando la forma en que construimos sitios web estáticos con su arquitectura de islas y optimización automática.',
    body: `
      <p>Astro es un framework moderno que está cambiando la forma en que pensamos sobre el desarrollo web estático. Con su arquitectura única y enfoque en la performance, Astro permite crear sitios web increíblemente rápidos.</p>
      
      <h2>¿Qué hace especial a Astro?</h2>
      
      <p>La principal ventaja de Astro es su arquitectura de islas (Island Architecture), que permite cargar JavaScript de forma selectiva solo donde es necesario.</p>
      
      <h3>Características principales:</h3>
      <ul>
        <li>Zero JavaScript por defecto</li>
        <li>Hidratación parcial</li>
        <li>Soporte para múltiples frameworks</li>
        <li>Optimización automática</li>
      </ul>
      
      <p>En los próximos artículos exploraremos más a fondo estas características y cómo implementarlas en proyectos reales.</p>
    `,
    mainImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
  },
  {
    _id: '2',
    title: 'Estructura de Datos en JavaScript: Arrays y Objetos',
    slug: 'estructuras-datos-javascript',
    category: 'JavaScript',
    date: '2024-01-10',
    readTime: 12,
    excerpt: 'Una guía completa sobre las estructuras de datos fundamentales en JavaScript y cuándo usar cada una.',
    body: `
      <p>Las estructuras de datos son fundamentales en programación. En JavaScript, las dos estructuras más importantes son los arrays y los objetos.</p>
      
      <h2>Arrays en JavaScript</h2>
      
      <p>Los arrays son estructuras de datos ordenadas que permiten almacenar múltiples valores:</p>
      
      <pre><code>const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];</code></pre>
      
      <h3>Métodos útiles de arrays:</h3>
      <ul>
        <li><code>push()</code> - Agregar elementos al final</li>
        <li><code>pop()</code> - Remover el último elemento</li>
        <li><code>map()</code> - Transformar cada elemento</li>
        <li><code>filter()</code> - Filtrar elementos</li>
      </ul>
      
      <h2>Objetos en JavaScript</h2>
      
      <p>Los objetos son colecciones de pares clave-valor que permiten modelar entidades del mundo real:</p>
      
      <pre><code>const person = {
  name: 'David',
  age: 30,
  profession: 'Developer'
};</code></pre>
      
      <p>Dominar estas estructuras es esencial para cualquier desarrollador JavaScript.</p>
    `,
    mainImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80'
  },
  {
    _id: '3',
    title: 'Algoritmos de Búsqueda: Linear vs Binary Search',
    slug: 'algoritmos-busqueda-linear-binary',
    category: 'Algoritmos',
    date: '2024-01-05',
    readTime: 15,
    excerpt: 'Comparamos dos algoritmos fundamentales de búsqueda y analizamos su complejidad temporal.',
    body: `
      <p>Los algoritmos de búsqueda son fundamentales en ciencias de la computación. Hoy veremos dos de los más importantes: búsqueda lineal y búsqueda binaria.</p>
      
      <h2>Búsqueda Lineal</h2>
      
      <p>La búsqueda lineal examina cada elemento de forma secuencial hasta encontrar el valor buscado:</p>
      
      <pre><code>function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}</code></pre>
      
      <p><strong>Complejidad temporal:</strong> O(n)</p>
      
      <h2>Búsqueda Binaria</h2>
      
      <p>La búsqueda binaria funciona en arrays ordenados, dividiendo el espacio de búsqueda a la mitad en cada iteración:</p>
      
      <pre><code>function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}</code></pre>
      
      <p><strong>Complejidad temporal:</strong> O(log n)</p>
      
      <h2>¿Cuándo usar cada uno?</h2>
      
      <ul>
        <li><strong>Búsqueda lineal:</strong> Arrays pequeños o no ordenados</li>
        <li><strong>Búsqueda binaria:</strong> Arrays grandes y ordenados</li>
      </ul>
      
      <p>La elección del algoritmo correcto puede marcar una gran diferencia en el rendimiento de tu aplicación.</p>
    `,
    mainImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    _id: '4',
    title: 'CSS Grid vs Flexbox: Cuándo usar cada uno',
    slug: 'css-grid-vs-flexbox',
    category: 'CSS',
    date: '2024-01-02',
    readTime: 10,
    excerpt: 'Una comparación práctica entre CSS Grid y Flexbox con ejemplos reales de cuándo usar cada tecnología.',
    body: `
      <p>CSS Grid y Flexbox son dos tecnologías poderosas para crear layouts, pero cada una tiene sus fortalezas específicas.</p>
      
      <h2>CSS Grid: Para layouts bidimensionales</h2>
      
      <p>CSS Grid es ideal cuando necesitas controlar tanto filas como columnas:</p>
      
      <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}</code></pre>
      
      <h3>Casos de uso para Grid:</h3>
      <ul>
        <li>Layouts de página completa</li>
        <li>Galerías de imágenes</li>
        <li>Dashboards complejos</li>
        <li>Cualquier diseño que requiera control preciso de filas y columnas</li>
      </ul>
      
      <h2>Flexbox: Para layouts unidimensionales</h2>
      
      <p>Flexbox es perfecto para alinear elementos en una sola dimensión:</p>
      
      <pre><code>.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}</code></pre>
      
      <h3>Casos de uso para Flexbox:</h3>
      <ul>
        <li>Navegación horizontal</li>
        <li>Centrado de elementos</li>
        <li>Distribución de espacio</li>
        <li>Componentes UI lineales</li>
      </ul>
      
      <h2>¿Por qué no ambos?</h2>
      
      <p>En muchos casos, la mejor solución es combinar ambas tecnologías. Usa Grid para el layout principal y Flexbox para los componentes individuales.</p>
      
      <p>Recuerda: Grid para layouts bidimensionales, Flexbox para unidimensionales.</p>
    `,
    mainImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    _id: '5',
    title: 'TypeScript: Mejores prácticas para proyectos grandes',
    slug: 'typescript-mejores-practicas',
    category: 'TypeScript',
    date: '2023-12-28',
    readTime: 20,
    excerpt: 'Guía avanzada sobre las mejores prácticas de TypeScript para mantener código escalable y mantenible.',
    body: `
      <p>TypeScript es esencial para proyectos grandes. Aquí te comparto las mejores prácticas que he aprendido trabajando en equipos de desarrollo.</p>
      
      <h2>1. Configuración estricta del compilador</h2>
      
      <p>Siempre usa configuraciones estrictas en tu <code>tsconfig.json</code>:</p>
      
      <pre><code>{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}</code></pre>
      
      <h2>2. Usa interfaces sobre types cuando sea posible</h2>
      
      <p>Las interfaces son más extensibles y performantes:</p>
      
      <pre><code>// Prefiere esto
interface User {
  id: string;
  name: string;
  email: string;
}

// Sobre esto
type User = {
  id: string;
  name: string;
  email: string;
}</code></pre>
      
      <h2>3. Aprovecha los utility types</h2>
      
      <p>TypeScript incluye tipos utilitarios poderosos:</p>
      
      <pre><code>// Pick solo las propiedades que necesitas
type UserPreview = Pick<User, 'id' | 'name'>;

// Hace todas las propiedades opcionales
type PartialUser = Partial<User>;

// Omite propiedades específicas
type UserWithoutId = Omit<User, 'id'>;</code></pre>
      
      <h2>4. Organiza tus tipos</h2>
      
      <p>Mantén tus definiciones de tipos organizadas en archivos separados:</p>
      
      <pre><code>// types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

// types/api.ts
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}</code></pre>
      
      <h2>5. Usa generic constraints</h2>
      
      <p>Los constraints te permiten crear funciones más flexibles pero seguras:</p>
      
      <pre><code>function updateEntity<T extends { id: string }>(
  entity: T,
  updates: Partial<T>
): T {
  return { ...entity, ...updates };
}</code></pre>
      
      <p>Estas prácticas te ayudarán a escribir código TypeScript más robusto y mantenible.</p>
    `,
    mainImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    _id: '6',
    title: 'React Hooks: useEffect y sus dependencias',
    slug: 'react-hooks-useeffect-dependencias',
    category: 'React',
    date: '2023-12-20',
    readTime: 14,
    excerpt: 'Domina useEffect y el manejo correcto de dependencias para evitar bugs comunes en React.',
    body: `
      <p>useEffect es uno de los hooks más importantes en React, pero también uno de los más malentendidos. Vamos a aclarar cómo usarlo correctamente.</p>
      
      <h2>Entendiendo useEffect</h2>
      
      <p>useEffect te permite realizar efectos secundarios en componentes funcionales:</p>
      
      <pre><code>import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(\`/api/users/\${userId}\`);
      const userData = await response.json();
      setUser(userData);
    }
    
    fetchUser();
  }, [userId]); // ← Array de dependencias
  
  return <div>{user?.name}</div>;
}</code></pre>
      
      <h2>El array de dependencias</h2>
      
      <p>El segundo parámetro de useEffect es crucial:</p>
      
      <h3>Sin dependencias - Se ejecuta en cada render</h3>
      <pre><code>useEffect(() => {
  console.log('Se ejecuta siempre');
}); // ← Sin array de dependencias</code></pre>
      
      <h3>Array vacío - Se ejecuta solo una vez</h3>
      <pre><code>useEffect(() => {
  console.log('Se ejecuta solo al montar');
}, []); // ← Array vacío</code></pre>
      
      <h3>Con dependencias - Se ejecuta cuando cambian</h3>
      <pre><code>useEffect(() => {
  console.log('Se ejecuta cuando userId cambia');
}, [userId]); // ← Con dependencia</code></pre>
      
      <h2>Reglas importantes</h2>
      
      <ol>
        <li><strong>Incluye todas las dependencias:</strong> Si usas una variable dentro del efecto, inclúyela en las dependencias.</li>
        <li><strong>Usa ESLint plugin:</strong> <code>eslint-plugin-react-hooks</code> te ayudará a detectar dependencias faltantes.</li>
        <li><strong>Limpia efectos cuando sea necesario:</strong> Retorna una función de limpieza para cancelar suscripciones.</li>
      </ol>
      
      <h2>Función de limpieza</h2>
      
      <pre><code>useEffect(() => {
  const subscription = api.subscribe(userId, handleUpdate);
  
  return () => {
    subscription.unsubscribe(); // ← Función de limpieza
  };
}, [userId]);</code></pre>
      
      <p>Dominar useEffect es esencial para escribir componentes React eficientes y libres de bugs.</p>
    `,
    mainImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];