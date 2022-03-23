<script setup lang="ts">
	import { useStore } from '@/store';
	import VitailseLogo from '@/assets/logo.png';
	useHead({
		title: 'Vueriendas',
	});

	const store = useStore();
	const { t } = useI18n();
</script>

<template>
	<div class="">

		<router-link
			:to="{ name: 'other-page' }"
			class="
				mt-5
				text-center
				hover:text-gray-200
				dark:hover:text-gray-500
				hover:underline
			"
			>{{ t('pages.other.menu') }}</router-link
		>
	</div>
</template>

<route lang="yaml">
name: home
</route>
