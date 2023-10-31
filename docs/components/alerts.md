# Alerts

## Overview

Simple alert is added as follows.
Content of alert is set through the slot, so you can place whatever you want inside it.

```vue
<vs-alert variant="primary">Simple alert!</vs-alert>
```

## Visible state

You can use `show` prop to control the visibility state of the alert. 
By default, alerts are **shown**. The `v-model:show` prop accepts boolean `true` or `false`.

```vue
<vs-alert :show="show" variant="danger">It's a danger!</vs-alert>
```

### v-model:show

You can use `v-model:show` prop to create two-way data bindings  on the `show` prop. It is useful, when you use dismissible, because when user close the alert, your variable will be updated. 

```vue
<vs-alert v-model:show="show" variant="danger">It's a danger!</vs-alert>
```

## Dismissing 

You can use `dismissible` prop for dismissing alert. This prop add a close button to the alert.
Usually this prop is used with `v-model:show` prop.
You also can use `closeBtnTitle` prop to set close button title.

```vue
<vs-alert v-model:show="show" variant="danger" close-btn-title="Ok, close it" dismissible>It's a danger!</vs-alert>
```

