<template>
	<div>
		<p>Current route: {{ route.path }}</p>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>
