<script setup lang="ts">
	import { useUtils } from '@/store/utils'

	useHead({
		title: 'Other Pages'
	});

</script>

<template>
	<div>
		<p>{{ $t('pages.other.desc') }}</p>
		<router-link
			:to="{ name: 'home' }"
			class="
				mt-5
				hover:text-gray-200
				dark:hover:text-gray-500
				hover:underline
			"
			>{{ $t('pages.home') }}</router-link
		>
		<p></p>
	</div>
</template>

<style scoped></style>

<route lang="yaml">
name: other-page
meta:
  requiresAuth: true
</route>
