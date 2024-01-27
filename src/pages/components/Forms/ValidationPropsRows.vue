<template>
  <tr>
    <td>vid</td>
    <td><code>String</code></td>
    <td>Use to set validation identifier. This id will be used as key in <code>errors</code> map when use <code>useValidation</code> composable.</td>
  </tr>
  <tr>
    <td>rules</td>
    <td><code>String</code> or <code>String[]</code></td>
    <td>Validation rule code or array of rules codes</td>
  </tr>
  <tr>
    <td>mark-valid</td>
    <td><code>Boolean</code></td>
    <td>If set to true, class <code>is-valid</code> will be applied to input if value is valid.</td>
  </tr>
  <tr>
    <td>valid-message</td>
    <td><code>String</code></td>
    <td>Use to set <code>valid-feedback</code> for input. If used, <code>markValid</code> will be applied too.</td>
  </tr>
  <tr>
    <td>mark-invalid</td>
    <td><code>Boolean</code></td>
    <td>If set to true, class <code>is-invalid</code> will be applied to input if value is invalid.</td>
  </tr>
  <tr>
    <td>invalid-message</td>
    <td><code>String</code></td>
    <td>Use to customize <code>invalid-feedback</code> for input. If used, <code>markInvalid</code> will be applied too. By default, it use error messages from rules.</td>
  </tr>
  <tr>
    <td>tooltip-feedback</td>
    <td><code>Boolean</code></td>
    <td>Swap the <code>.{valid|invalid}-feedback</code> classes for <code>.{valid|invalid}-tooltip</code> classes to display validation feedback in a styled tooltip.</td>
  </tr>
  <tr>
    <td>immediate</td>
    <td><code>Boolean</code></td>
    <td>Use to validate field on mount.</td>
  </tr>
</template>
