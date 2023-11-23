<template>
  <component :is="tag" class="nav-item" role="presentation">
    <button
        v-if="!slots.title" class="nav-link" :class="{'active': localActive, 'disabled': disabled}"
        @click="onActivateTab">
      <component :is="slots.titleText" v-if="slots.titleText" :active="localActive"/>
      <template v-else>{{ title }}</template>
    </button>
    <component :is="slots.title" v-else :active="localActive" :click="onActivateTab"/>
  </component>
</template>

<script lang="ts" setup>
import {TabProps} from "./Props"
import {computed, inject, onUnmounted} from "vue"
import {DynamicTagProps} from "../DynamicTagProps"
import {VsTabModel, VsTabsModel} from "./VsTabs.model"

const props = withDefaults(defineProps<TabProps & DynamicTagProps>(), {
    active: false,
    disabled: false,
    tag: "li",
    contentClass: ""
})

const slots = defineSlots<{
  title(props: { active: boolean, click: () => void }): void,
  titleText(props: { active: boolean }): void,
  default(): void
}>()

const tabsModel = inject<VsTabsModel>("vsTabsModel", new VsTabsModel())

const tab = new VsTabModel(slots.default)

tabsModel.tabs.push(tab)
if (props.active) {
    tabsModel.activeId = tab.id
}
if (props.contentClass) {
    tab.contentClass = props.contentClass
}

// Active
const localActive = computed(() => {
    return tabsModel.activeId === tab.id
})

// const localDisabled = computed(() => {
//
// })
const onActivateTab = () => {
    tabsModel.activeId = tab.id
}


onUnmounted(() => {
    const tabIndex = tabsModel.tabs.indexOf(tab)
    if (tabIndex !== -1) {
        tabsModel.tabs.splice(tabIndex, 1)
    }

    if (tabsModel.activeId === tab.id && tabsModel.tabs.length > 0) {
        tabsModel.activeId = tabsModel.tabs[0].id
    } else {
        tabsModel.activeId = ""
    }
})
</script>