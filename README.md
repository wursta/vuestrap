# Vuestrap

**Vue components framework based on Bootstrap 5**


## Introduction
This framework provides a convenient way to create interfaces based on Bootstrap 5 components using all the features of Vue 3.
Some highlights include:
- All the power of Bootstrap 5
- Components hide the html-layout features in bootstrap components(e.g. input-groups, floating labels , validation feedbacks and etc.), which makes your component templates more readable
- No dependencies on other libraries except Vue and Bootstrap

## Installation

Create Vue app ([Vue docs](https://vuejs.org/guide/quick-start#creating-a-vue-application))
```
 npm create vue@latest
```

Add Bootstrap 5 ([Bootstap vite setup docs](https://getbootstrap.com/docs/5.3/getting-started/vite/#setup))

```
npm i bootstrap
npm i --save-dev sass
```

Add Vuestrap
```
npm i vuestrap-b5
```

Add vuestrap plugin to app
```js
// main.js
import {createApp} from "vue"
import App from "./App.vue"
import {VuestrapPlugin} from "vuestrap-b5"
import './style.scss'

createApp(App)    
    .use(VuestrapPlugin)
    .mount("#app")
```

Add vuestrap and bootstrap styles ([Boostrap customization docs](https://getbootstrap.com/docs/5.3/customize/sass/#importing))
```scss
@import "../node_modules/vustrap-b5/scss/vuestrap";
@import "../node_modules/bootstrap/scss/bootstrap";
```
