<template lang="pug">
.popup-picker.shadow.p-2
	.popover-header
		.header
			el-button( type="info" plain @click="$emit('leftArrowIsClicked')" )
				el-icon( :disabled="leftArrowDisabled" )
					arrow-left
			el-button.head.fw-bold.text-black( type="info" plain )
				slot( name="head" )
			el-button( type="info" plain @click="$emit('rightArrowIsClicked')" )
				el-icon( :disabled="rightArrowDisabled" )
					arrow-right
		.subheader.mt-2
			slot( name="subheader" )
	.popover-body( :style="{ 'grid-template-columns': `repeat(${columnCount}, 1fr)` }" )
		el-button.text-center.btn.btn-sm.m-1( v-for="(dayInfo, index) in bodyItems" :key="index" :type="(dayInfo.selected) ? 'primary' : ''" :disabled="dayInfo.disabled" style="padding: 0; margin-left: 0" @click="$emit('dayIsSelected', dayInfo)" ) {{ dayInfo.display}}
</template>

<script lang="ts">
	import {defineComponent} from "vue";
	import type {PropType} from "vue";
	import Arrows from "./icons/Arrows.vue";
	import type {Item} from "./PopupPicker";

	export default defineComponent({
		name: "PopupPicker",
		props: {
			columnCount: {
				type: Number,
				default: 7,
			},
			leftArrowDisabled: {
				type: Boolean,
				deafult: false,
			},
			rightArrowDisabled: {
				type: Boolean,
				deafult: false,
			},
			rightArrowIsClicked: {
				type: Boolean,
				deafult: false,
			},
			headingClickable: {
				type: Boolean,
				default: false,
			},
			bodyItems: {
				type: Array as PropType<Item[]>,
				default: () => new Array<Item>(),
			},
		},
		components: {Arrows},
	});
</script>

<style lang="scss" scoped>
	.popup-picker {
		width: 100%;
		max-width: 300px;
		border-radius: 5px;
	}

	.popover-body {
		display: grid;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.head {
			flex-grow: 1;
		}
	}

	.subheader {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
	}
</style>
