import App from '@/App.vue';
import { ViteSSG } from 'vite-ssg';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import '@/styles/index.css';
import User from '@/models/User'
const user = new User();

const routes = setupLayouts(generatedRoutes);
routes.forEach((route) => {
	route.beforeEnter = (to, from, next) => {
		next()
	}
})

export const createApp = ViteSSG(App, { routes }, async ctx => {
	Object.values(import.meta.globEager('./modules/*.ts')).map(i =>
		i.install?.(ctx)
	);
});
