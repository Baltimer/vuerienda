<script setup lang="ts"></script>
<template>
	<header>
		<app-header />
	</header>

	<main
		class="
			p-8
			dark:bg-gray-800 dark:text-white
			bg-white
			text-gray-800
			flex-1
		"
	>
		<router-view />
	</main>
</template>
