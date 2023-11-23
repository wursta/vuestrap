<template>
  <table class="table table-bordered table-striped caption-top">
    <caption><code>vs-tabs</code> component props</caption>
    <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>pills</td>
      <td><code>Boolean</code></td>
      <td>Add nav-pills class to navbar</td>
    </tr>
    <DynamicTagPropsRows />
    <CommonHtmlTagPropsRows />
    <AnimatePropsRows />
    </tbody>
  </table>

  <table class="table table-bordered table-striped caption-top">
    <caption><code>vs-tabs</code> component slots</caption>
    <thead>
    <tr>
      <th>Slot name</th>
      <th>Exposed properties</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>default</td>
      <td>&mdash;</td>
      <td>Main slot for <code>vs-tabs</code> and other components</td>
    </tr>
    <tr>
      <td>empty</td>
      <td>&mdash;</td>
      <td>Slot for content if no <code>vs-tabs</code> in default slot registered</td>
    </tr>
    </tbody>
  </table>

  <table class="table table-bordered table-striped caption-top">
    <caption><code>vs-tab</code> component</caption>
    <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>title</td>
      <td><code>String</code></td>
      <td>Tab title</td>
    </tr>
    <tr>
      <td>active</td>
      <td><code>Boolean</code></td>
      <td>When set to <code>true</code>, places the component in the active state with active styling</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td><code>Boolean</code></td>
      <td>When set to <code>true</code>, disables the component's functionality and places it in a disabled state</td>
    </tr>
    <tr>
      <td>content-class</td>
      <td><HtmlTagClassType /></td>
      <td><HtmlTagClassDescription>Specify class applied to tab-pane.</HtmlTagClassDescription></td>
    </tr>
    <DynamicTagPropsRows />
    </tbody>
  </table>

  <table class="table table-bordered table-striped caption-top">
    <caption><code>vs-tab</code> component slots</caption>
    <thead>
    <tr>
      <th>Slot name</th>
      <th>Exposed properties</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>default</td>
      <td>&mdash;</td>
      <td>Main slot for <code>tab-pane</code> content</td>
    </tr>
    <tr>
      <td>title</td>
      <td>
        <code>active</code>: Indicates if tab is active<br />
        <code>click</code>: Method for activating tab<br />
      </td>
      <td>Slot for customizing tab title. It rendered <strong>instead of</strong> nav-link button</td>
    </tr>
    <tr>
      <td>title</td>
      <td>
        <code>active</code>: Indicates if tab is active<br />
      </td>
      <td>Slot for customizing tab title. It rendered <strong>inside</strong> nav-link button</td>
    </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import AnimatePropsRows from "../AnimatePropsRows.vue"
import DynamicTagPropsRows from "../DynamicTagPropsRows.vue"
import CommonHtmlTagPropsRows from "../CommonHtmlTagPropsRows.vue"
import HtmlTagClassType from "../../../components/HtmlTagClassType.vue"
import HtmlTagClassDescription from "../../../components/HtmlTagClassDescription.vue"
</script>