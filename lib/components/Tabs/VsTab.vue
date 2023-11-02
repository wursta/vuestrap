<template>
  <component :is="tag" class="nav-item" role="presentation">
    <button v-if="!slots.title" class="nav-link" :class="{'active': localActive}" @click="onActivateTab">
      {{ title }}
    </button>
    <component :is="slots.title" v-else :active="localActive" :click="onActivateTab"/>
  </component>
</template>

<script lang="ts" setup>
import {TabProps} from "./Props"
import {computed, inject} from "vue"
import {DynamicTagProps} from "../DynamicTagProps"
import {VsTabModel, VsTabsModel} from "./VsTabs.model"

const props = withDefaults(defineProps<TabProps & DynamicTagProps>(), {
    active: false,
    tag: "li"
})

const slots = defineSlots<{
  title(props: { active: boolean, click: () => void }): void,
  default(): void
}>()

const tabsModel = inject<VsTabsModel>("vsTabsModel", new VsTabsModel())

const tab = new VsTabModel(slots.default)
tabsModel.tabs.push(tab)
if (props.active) {
    tabsModel.activeId = tab.id
}

// Active
const localActive = computed(() => {
    return tabsModel.activeId === tab.id
})
const onActivateTab = () => {
    tabsModel.activeId = tab.id
}
</script>