<script lang="ts">
	import { onMount } from 'svelte';
	import '../style/page.scss';
	import { useFlag, useFlagsStatus, useVariant } from '@unleash/proxy-client-svelte';

	const enabled = useFlag('test')
	const { flagsReady } = useFlagsStatus()
	let featureEnabled = $derived($enabled)

	//feature on-off에 따라 return되는 객체
	const variant = useVariant('test');

	$effect(()=>{
		console.log("...enabled", $enabled)
		if ($variant){
			console.log(">>>>>>>>>>>>variant 출력", $variant)
			console.log(">>>>>>>>>>>>variant name", $variant.name)
		}
	})
</script>

<svelte:head>
	<title>Unleash Feature Flag Practice</title>
</svelte:head>


<div class="feature-page">
	<div class="status-banner">
		<span class="status-label">{featureEnabled ? 'Unleash On' : 'Unleash Off'}</span>
	</div>
	

	<section class="feature-hero" aria-label="feature flag practice">
		<h1>feature flag!</h1>
	</section>
</div>
