/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly PUBLIC_UNLEASH_URL: string;
	readonly PUBLIC_UNLEASH_FRONTEND_TOKEN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
