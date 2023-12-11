<template>
  <tr>
    <td>id</td>
    <td><code>String</code></td>
    <td>Use to set <code>id</code> attribute on <code>input</code> element and <code>for</code> attribute on <code>label</code> element</td>
  </tr>
  <tr>
    <td>label</td>
    <td><code>String</code></td>
    <td>Use to set the content of the generated <code>label</code> element. For customizing you can use default slot</td>
  </tr>
  <tr>
    <td>hint</td>
    <td><code>String</code></td>
    <td>Use to set the content of the generated <code>form-text</code> element. For customizing you can use named slot <code>hint</code></td>
  </tr>
  <tr>
    <td class="text-nowrap">floating-label</td>
    <td><code>Boolean</code></td>
    <td>Wrap a pair of <code>input</code> and <code>label</code> elements in <code>.form-floating</code> to enable floating labels. A <code>placeholder</code> attribute is required.</td>
  </tr>
</template>