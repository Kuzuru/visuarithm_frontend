<template>
	<div v-if="data" class="flex flex-col gap-4 h-screen justify-center items-center">
		<div class="relative group flex items-center leading-[150px] text-9xl text-amber-400 font-medium">
			<nuxt-img class="absolute left-1/2 top-0 -translate-y-full -translate-x-1/2 h-20"
					  src="emoji/frowning_face.svg"/>
			<div class="flex group items-center gap-2 cursor-pointer" @click="goHome">
				<RightArrowSvg class="scale-[2] opacity-0 duration-200 group-hover:opacity-100"/>
				<span class="duration-200 group-hover:translate-x-[24px]">{{ data.error.statusCode }}</span>
			</div>
		</div>
		<div class="text-2xl font-medium">Данной страницы не существует...</div>
	</div>
</template>

<script setup lang="ts">
import { useError } from "#app";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import RightArrowSvg from "~/components/shared/arrows/RightArrowSvg.vue";

const data = ref();
const router = useRouter();

onMounted(() => {
	data.value = {
		error: useError().value
	};
});

const goHome = () => {
	router.push("/");
};
</script>
