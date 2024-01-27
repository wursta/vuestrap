<template>
  <ExampleTabsCard title="Input group" section-id="input-group" :code="exampleCode">
    <p>Place one add-on text or any other component on either side of an input using props <code>prepend/append</code> or using slots <code>prepend/append</code> and <code>prependText/appendText</code>.
      You may also place one on both sides of an input.</p>
    <div class="mb-3">
      <vs-text-field placeholder="Username" prepend="@" />
    </div>
    <div class="mb-3">
      <vs-text-field placeholder="Recipient's username" append="@example.com" />
    </div>
    <div class="mb-3">
      <vs-text-field label="Your vanity URL">
        <template #prepend>
          <span class="input-group-text">https://example.com/users/</span>
        </template>
        <template #hint>
          Customized <strong>help</strong> hint text
        </template>
      </vs-text-field>
    </div>
    <div class="mb-3">
      <vs-text-field placeholder="Username">
        <template #append>
          <span class="input-group-text">@</span>
          <vs-text-field placeholder="Server"/>
        </template>
      </vs-text-field>
    </div>
    <div class="mb-3">
      <vs-text-field>
        <template #append>
          <button class="btn btn-outline-secondary" type="button">Button</button>
        </template>
      </vs-text-field>
    </div>
  </ExampleTabsCard>
</template>

<script setup lang="ts">
import ExampleTabsCard from "../../../components/ExampleTabsCard.vue"
import {VsTextField} from "@lib"

const exampleCode = `<vs-text-field placeholder="Username" prepend="@" />

<vs-text-field placeholder="Recipient's username" append="@example.com" />

<vs-text-field label="Your vanity URL">
  <template #prependText>https://example.com/users/</template>
  <template #hint>
    Customized <strong>help</strong> hint text
  </template>
</vs-text-field>

<vs-text-field placeholder="Username">
  <template #append>
    <span class="input-group-text">@</span>
    <vs-text-field placeholder="Server"/>
  </template>
</vs-text-field>

<vs-text-field>
  <template #append>
    <button class="btn btn-outline-secondary" type="button">Button</button>
  </template>
</vs-text-field>`
</script>