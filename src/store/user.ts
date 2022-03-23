import { defineStore } from 'pinia';
import User from '@/models/User'

export const useUserStore = defineStore('user', {
	state: () => ({
		user: new User(),
	}),
});
