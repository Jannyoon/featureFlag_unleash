<script lang="ts">
	import '../style/page.scss';

	const featureEnabled = true;
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
