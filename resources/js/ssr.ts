import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { renderToString } from '@vue/server-renderer';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createSSRApp, h } from 'vue';
import { route as ziggyRoute, type Config, type Router } from 'ziggy-js';
import type { SharedData } from './types';

// Объявляем global для SSR
declare const global: {
    route: (name?: string, params?: any, absolute?: boolean, config?: Config) => string | Router;
};

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        title: (title) => title,
        resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob('./pages/**/*.vue')) as Promise<any>,
        setup({ App, props, plugin }) {
            const app = createSSRApp({ render: () => h(App, props) });

            // Configure Ziggy for SSR...
            const pageProps = page.props as unknown as SharedData;
            const ziggyConfig = {
                ...pageProps.ziggy,
                location: new URL(pageProps.ziggy.location),
            };

            // Create route function with proper overloads...
            const route = function(name?: string, params?: any, absolute?: boolean): string | Router {
                if (name === undefined) {
                    return ziggyRoute(undefined, undefined, absolute, ziggyConfig) as Router;
                }
                return ziggyRoute(name, params, absolute, ziggyConfig) as string;
            } as any;

            // Make route function available globally...
            app.config.globalProperties.route = route;

            // Make route function available globally for SSR...
            if (typeof window === 'undefined') {
                global.route = route;
            }

            app.use(plugin);

            return app;
        },
    }),
);
