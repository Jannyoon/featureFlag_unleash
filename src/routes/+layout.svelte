<script lang="ts">
	import { browser } from '$app/environment';
	import { PUBLIC_UNLEASH_FRONTEND_TOKEN, PUBLIC_UNLEASH_URL } from '$env/static/public';
	import favicon from '$lib/assets/favicon.svg';
	import FlagProvider from '@unleash/proxy-client-svelte';
	import type { IStorageProvider } from '@unleash/proxy-client-svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	// const storageProvider: IStorageProvider = {
	// 	async save(name, data) {
	// 		if (!browser) return;

	// 		sessionStorage.setItem(name, JSON.stringify(data));
	// 	},
	// 	async get(name) {
	// 		if (!browser) return undefined;

	// 		const value = sessionStorage.getItem(name);
	// 		return value ? JSON.parse(value) : undefined;
	// 	}
	// };

	const config = {
		url: PUBLIC_UNLEASH_URL,
		clientKey: PUBLIC_UNLEASH_FRONTEND_TOKEN,
		refreshInterval: 5,
		metricsInterval: 5,
		appName: '111', //나만 알아볼 수 있는 고유 네임. unleash 플랫폼과 무관함
		context: { properties: { userLocale: '광주광역시'}}
		// storageProvider
	};

	onMount(() => {
		console.log('>>>>>>config', config);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<FlagProvider {config}>
	{@render children()}
</FlagProvider>
