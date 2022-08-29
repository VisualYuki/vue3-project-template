<template lang="pug">
.p-5
	date-picker( start-view="day" placeholder="placeholder1" )
	date-picker( start-view="day" placeholder="placeholder2" )
</template>

<script lang="ts">
	import datepicker from "./components/date-picker/DatePicker.vue";
	import {defineComponent} from "vue";

	export default defineComponent({
		components: {"date-picker": datepicker},
	});
</script>

<style scoped lang="scss"></style>
