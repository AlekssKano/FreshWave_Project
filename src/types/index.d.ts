export {}; // Указываем, что это модуль TypeScript

declare global {
    interface Window {
        gtag: (event: string, action: string, params: Record<string, any>) => void;
    }
}