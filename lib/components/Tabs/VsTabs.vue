<template>
  <component :is="tag" class="nav nav-tabs" :class="navClasses" role="tablist">
    <slot/>
  </component>
  <div class="tab-content">
    <div
        v-for="tab in tabsModel.tabs"
        :key="`tab_${tab.id}`"
        class="tab-pane"
        :class="{'active': tabsModel.activeId === tab.id}" role="tabpanel">
      <component :is="tab.content"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, provide, reactive} from "vue"
import {TabsProps} from "./Props"
import {DynamicTagProps} from "../DynamicTagProps"
import {CommonHtmlTagProps} from "../CommonHtmlTagProps"
import {VsTabsModel} from "./VsTabs.model"

const props = withDefaults(defineProps<TabsProps & DynamicTagProps & CommonHtmlTagProps>(), {
    tag: "ul"
})

const navClasses = computed(() => {
    const c: { [key: string]: boolean } = {}
    if (props.class) {
        c[props.class] = true
    }
    return c
})

const tabsModel = reactive(new VsTabsModel())
provide("vsTabsModel", tabsModel)
</script>