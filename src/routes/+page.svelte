<script lang="ts">
	import { onMount } from 'svelte';
	import '../style/page.scss';
	import {
		useFlag,
		useFlagsStatus,
		useVariant,
		useUnleashContext,
		useUnleashClient
	} from '@unleash/proxy-client-svelte';

	const enabled = useFlag('test');
	// const updateContext = useUnleashContext();
	const client = useUnleashClient();

	const { flagsReady } = useFlagsStatus();
	let featureEnabled = $derived($enabled);

	// feature on-off에 따라 return되는 객체
	const variant = useVariant('test');

	// onMount(async () => {
	// 	await updateContext({
	// 		properties: {
	// 			userLocation: '서울특별시' // parameters.locations.includes(context.properties.userLocation)의 동작 원리라 생각
	// 		}
	// 	});
	// });

	$effect(() => {
		console.log('...enabled', $enabled);
		console.log('...flagsReady', $flagsReady);
		console.log('>>>>>>>>>>client', client?.getContext());
		if ($variant) {
			console.log('>>>>>>>>>>>>variant 출력', $variant);
			console.log('>>>>>>>>>>>>variant name', $variant.name);
		}
	});
</script>

<svelte:head>
	<title>Unleash Feature Flag Practice</title>
</svelte:head>

<div class="feature-page">
	<div class="status-banner">
		<span class="status-label">{featureEnabled ? 'Unleash On' : 'Unleash Off'}</span>
	</div>

	<section class="feature-hero" aria-label="feature flag practice">
		{#if $variant.enabled && $variant?.payload?.value}
			<h1>현재 집단의 value는 {$variant.payload.value}</h1>
		{:else}
			<h1>Feature flag test</h1>
		{/if}
	</section>
</div>
