import { defineStore } from 'pinia';
import { useUserStore } from './user';
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router';

const userStore = useUserStore();

export const useUtils = defineStore('utils', {
	state: () => ({}),
	actions: {
		getUser() {
			return userStore.user;
		},
		requiresAuth(route: RouteLocationNormalizedLoaded) {
			const hasMeta = route && route.meta && route.meta.requiresAuth;
			return hasMeta ? route.meta.requiresAuth : false;
		},
	},
});
