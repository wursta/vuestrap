<template>
  <component :is="tag" class="nav" :class="navClasses" role="tablist">
    <slot/>
  </component>
  <div v-if="tabsModel.tabs.length > 0" class="tab-content">
    <template
        v-for="tab in tabsModel.tabs"
        :key="`tab_${tab.id}`">
      <Transition name="fade" mode="in-out" :css="animate">
        <div
            v-if="tabsModel.activeId === tab.id"
            class="tab-pane fade active show" role="tabpanel" :class="tab.contentClass">
          <component :is="tab.content"/>
        </div>
      </Transition>
    </template>
  </div>
  <slot v-else-if="tabsModel.tabs.length === 0" name="empty"></slot>
</template>

<script lang="ts" setup>
import {computed, provide, reactive} from "vue"
import {TabsProps} from "./Props"
import {DynamicTagProps} from "../DynamicTagProps"
import {CommonHtmlTagProps} from "../CommonHtmlTagProps"
import {VsTabsModel} from "./VsTabs.model"
import {AnimateProps} from "../AnimateProps"

const props = withDefaults(defineProps<TabsProps & DynamicTagProps & CommonHtmlTagProps & AnimateProps>(), {
    pills: false,
    animate: true,
    tag: "ul"
})

const navClasses = computed(() => {
    const c: { [key: string]: boolean } = {}
    if (props.class) {
        c[props.class] = true
    }
    if (props.pills) {
        c["nav-pills"] = true
    } else {
        c["nav-tabs"] = true
    }
    return c
})

const tabsModel = reactive(new VsTabsModel())
provide("vsTabsModel", tabsModel)
</script>