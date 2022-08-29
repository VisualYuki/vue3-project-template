<template lang="pug">
div
	input.form-control.cursor-pointer.w-auto( type="text" :placeholder="placeholder" :disabled="disabled" )
	day-picker( @dayIsSelected="updateDate" :selectedDay="selectedDay" )
</template>

<script lang="ts">
	import {defineComponent} from "vue";
	import type {PropType} from "vue";
	import DayPicker from "./DayPicker.vue";
	import type {Item} from "./PopupPicker";
	//import {startOfToday, getYear, getMonth, addMonths, subMonths} from "date-fns";

	//const today = startOfToday();

	export default defineComponent({
		components: {DayPicker},
		props: {
			startView: {
				type: String as PropType<"time" | "day" | "month" | "year">,
				default: "day",
			},
			placeholder: {
				type: String,
				default: "",
			},
			disabled: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				//selectedYear: getYear(today),
				//selectedMonth: getMonth(today),
				//selectedDay: undefined,
				selectedDay: undefined as Date | undefined,
				//displayDate: today,
			};
		},
		computed: {
			//selectedDate(): Date {
			//	return new Date(this.selectedYear, this.selectedMonth, this.selectedDay);
			//},
		},
		methods: {
			updateDate(dayInfo: Item) {
				this.selectedDay = dayInfo.date;
				//this.displayDate.setDate(+dayInfo.display);
			},

			//updateDate() {

			//}
		},
	});
</script>

<style lang="scss" scoped></style>
