/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly HASHNODE_PUBLICATION_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
