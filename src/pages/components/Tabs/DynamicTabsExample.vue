<template>

  <ExampleTabsCard section-id="dynamic-tabs" title="Dynamic tabs" :code="codeExample">
    <p>
      You can simply customize tabs bar to add buttons or other content before, after or between <code>vs-tab</code>
      components.
      By default, <code>vs-tabs</code> rendered with <code>ul</code> tag and <code>vs-tab</code> with <code>li</code>
      tag.
      You can change tags to <code>div</code> with <code>tag</code> prop and then add button to the end of tab bar.
    </p>
    <vs-tabs tag="div" class="align-items-center">
      <vs-tab
          v-for="tab in tabs" :key="`custom_tab_${tab.id}` " :title="tab.title" tag="div" content-class="mt-3"
          :active="tab.active">
        <div class="d-flex align-items-center">
          <div>{{ tab.content }}</div>
          <button class="btn ms-auto btn-sm btn-outline-danger" @click="removeTab(tab)">Remove tab</button>
        </div>
      </vs-tab>
      <div class="nav-item ms-auto">
        <button class="btn btn-outline-primary" @click="addTab">Add</button>
      </div>
      <template #empty>
        <p class="text-center mt-3">There are no open tabs.<br/>Open a new tab using the "Add" button above.</p>
      </template>
    </vs-tabs>
  </ExampleTabsCard>
</template>

<script setup lang="ts">
import {VsTabs, VsTab} from "@lib"
import ExampleTabsCard from "../../../components/ExampleTabsCard.vue"
import {computed, ref} from "vue"

type TabType = { id: number, title: string, content: string, active: boolean };
const tabs = ref<TabType[]>([])
const i = ref(1)
const addTab = () => {
    const isActive = tabs.value.length === 0
    tabs.value.push({
        id: Math.random(),
        title: "Tab " + i.value,
        content: "Tab " + i.value + " content",
        active: isActive
    })
    i.value = i.value + 1
}

const removeTab = (tab: TabType) => {
    const tabIndex = tabs.value.indexOf(tab)
    if (tabIndex !== -1) {
        tabs.value.splice(tabIndex, 1)
    }
}

const codeExample = computed(() => {
    return `<vs-tabs tag="div" class="align-items-center">
  <vs-tab
      v-for="tab in tabs"
      :key="tab.id"
      :title="tab.title"
       :active="tab.active"
       tag="div">
    {{ tab.content }}
  </vs-tab>
  <div class="nav-item ms-auto">
    <button class="btn btn-outline-primary" @click="addTab">Add</button>
  </div>
  <template #empty>
    <p class="text-center mt-3">There are no open tabs.<br/>Open a new tab using the "Add" button above.</p>
  </template>
  </vs-tabs>`
})
</script>