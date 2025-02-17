/// <reference types="vite/client" />

interface ImportMetaEnv {
    /**
     * 网站前缀
     */
    readonly VITE_BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}