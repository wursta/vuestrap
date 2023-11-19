<template>
  <nav class="vuestrap-docs-sidebar-nav w-100">
    <ul class="list-unstyled mb-0 pb-3 pb-md-2 pe-lg-2">
      <li class="py-2">
        <h3 class="h5 mb-1 pb-2">Getting started</h3>
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link to="/plugin" class="nav-link px-0 py-2 vuestrap-docs-sidebar-nav-section" @click="toggleContentSidebar">
              <NavigationArrowIcon class="icon"/>
              Plugin
            </router-link>
            <ul
                v-if="isRouteStartsWith('/plugin')"
                class="nav flex-column border-start ps-3 ms-2 mb-2">
              <li class="nav-item">
                <router-link to="/plugin/install" class="nav-link fs-sm py-1 ps-1 pe-0 mb-1" @click="toggleContentSidebar">Install</router-link>
                <router-link to="/plugin/locale" class="nav-link fs-sm py-1 ps-1 pe-0 mb-1" @click="toggleContentSidebar">Locale</router-link>
                <router-link to="/plugin/options" class="nav-link fs-sm py-1 ps-1 pe-0 mb-1" @click="toggleContentSidebar">Options</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="py-2">
        <h3 class="h5 mb-1 pb-2">Components</h3>
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link to="/components/alerts" class="nav-link px-0 py-2 vuestrap-docs-sidebar-nav-section" @click="toggleContentSidebar">
              <NavigationArrowIcon class="icon"/>
              Alerts
            </router-link>
            <ul
                v-if="isRouteStartsWith('/components/alerts')"
                class="nav flex-column border-start ps-3 ms-2 mb-2">
              <li class="nav-item">
                <router-link to="/components/alerts/basic-example" class="nav-link fs-sm py-1 ps-1 pe-0 mb-1" @click="toggleContentSidebar">Basic example</router-link>
                <router-link to="/components/alerts/visibility" class="nav-link fs-sm py-1 ps-1 pe-0 mb-1" @click="toggleContentSidebar">Visibilty</router-link>
                <router-link to="/components/alerts/dismissing" class="nav-link fs-sm py-1 ps-1 pe-0 mb-1" @click="toggleContentSidebar">Dismissing</router-link>
                <router-link to="/components/alerts/animate" class="nav-link fs-sm py-1 ps-1 pe-0 mb-1" @click="toggleContentSidebar">Animate</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/components/tabs" class="nav-link px-0 py-2 vuestrap-docs-sidebar-nav-section">
              <NavigationArrowIcon class="icon"/>
              Tabs
            </router-link>
            <ul
                v-if="isRouteStartsWith('/components/tabs')"
                class="nav flex-column border-start ps-3 ms-2 mb-2 vuestrap-docs-sidebar-nav-subsection">
              <li class="nav-item">
                <a class="nav-link fs-sm py-1 ps-1 pe-0 mb-1">Basic example</a>
                <a class="nav-link fs-sm py-1 ps-1 pe-0 mb-1">Visibilty</a>
                <a class="nav-link fs-sm py-1 ps-1 pe-0 mb-1">Dismissing</a>
                <a class="nav-link fs-sm py-1 ps-1 pe-0 mb-1">Animate</a>
              </li>
            </ul>
          </li>
<!--          <li>-->
<!--            <router-link to="/components/tabs">Tabs</router-link>-->
<!--          </li>-->
        </ul>

      </li>


<!--      <li class="bd-links-group py-2">-->
<!--        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">-->
<!--          &lt;!&ndash;        <svg class="bi me-2" style="color: var(&#45;&#45;bs-indigo);" aria-hidden="true"><use xlink:href="#book-half"></use></svg>&ndash;&gt;-->
<!--          Getting started-->
<!--        </strong>-->

<!--        <ul class="list-unstyled fw-normal pb-2 small">-->
<!--          <li><a href="/docs/5.3/getting-started/introduction/" class="bd-links-link d-inline-block rounded">Introduction</a>-->
<!--          </li>-->
<!--          <li><a href="/docs/5.3/getting-started/download/" class="bd-links-link d-inline-block rounded">Download</a>-->
<!--          </li>-->
<!--          <li><a href="/docs/5.3/getting-started/contents/" class="bd-links-link d-inline-block rounded">Contents</a>-->
<!--          </li>-->
<!--          <li><a href="/docs/5.3/getting-started/browsers-devices/" class="bd-links-link d-inline-block rounded">Browsers-->
<!--            &amp; devices</a></li>-->
<!--          <li><a-->
<!--              href="/docs/5.3/getting-started/javascript/"-->
<!--              class="bd-links-link d-inline-block rounded">JavaScript</a></li>-->
<!--          <li><a href="/docs/5.3/getting-started/webpack/" class="bd-links-link d-inline-block rounded">Webpack</a></li>-->
<!--          <li><a href="/docs/5.3/getting-started/parcel/" class="bd-links-link d-inline-block rounded">Parcel</a></li>-->
<!--          <li><a href="/docs/5.3/getting-started/vite/" class="bd-links-link d-inline-block rounded">Vite</a></li>-->
<!--          <li><a href="/docs/5.3/getting-started/accessibility/" class="bd-links-link d-inline-block rounded">Accessibility</a>-->
<!--          </li>-->
<!--          <li><a href="/docs/5.3/getting-started/rfs/" class="bd-links-link d-inline-block rounded">RFS</a></li>-->
<!--          <li><a href="/docs/5.3/getting-started/rtl/" class="bd-links-link d-inline-block rounded">RTL</a></li>-->
<!--          <li><a-->
<!--              href="/docs/5.3/getting-started/contribute/"-->
<!--              class="bd-links-link d-inline-block rounded">Contribute</a></li>-->
<!--        </ul>-->
<!--      </li>-->
<!--      <li class="bd-links-group py-2">-->
<!--        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">-->
<!--          &lt;!&ndash;        <svg class="bi me-2" style="color: var(&#45;&#45;bs-pink);" aria-hidden="true"><use xlink:href="#palette2"></use></svg>&ndash;&gt;-->
<!--          Customize-->
<!--        </strong>-->

<!--        <ul class="list-unstyled fw-normal pb-2 small">-->
<!--          <li><a href="/docs/5.3/customize/overview/" class="bd-links-link d-inline-block rounded">Overview</a></li>-->
<!--          <li><a href="/docs/5.3/customize/sass/" class="bd-links-link d-inline-block rounded">Sass</a></li>-->
<!--          <li><a href="/docs/5.3/customize/options/" class="bd-links-link d-inline-block rounded">Options</a></li>-->
<!--          <li><a-->
<!--              href="/docs/5.3/customize/color/" class="bd-links-link d-inline-block rounded active"-->
<!--              aria-current="page">Color</a></li>-->
<!--          <li><a href="/docs/5.3/customize/color-modes/" class="bd-links-link d-inline-block rounded">Color modes</a>-->
<!--          </li>-->
<!--          <li><a href="/docs/5.3/customize/components/" class="bd-links-link d-inline-block rounded">Components</a></li>-->
<!--          <li><a href="/docs/5.3/customize/css-variables/" class="bd-links-link d-inline-block rounded">CSS-->
<!--            variables</a></li>-->
<!--          <li><a href="/docs/5.3/customize/optimize/" class="bd-links-link d-inline-block rounded">Optimize</a></li>-->
<!--        </ul>-->
<!--      </li>-->
<!--      <li class="bd-links-group py-2">-->
<!--        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">-->
<!--          &lt;!&ndash;        <svg class="bi me-2" style="color: var(&#45;&#45;bs-teal);" aria-hidden="true"><use xlink:href="#grid-fill"></use></svg>&ndash;&gt;-->
<!--          Layout-->
<!--        </strong>-->

<!--        <ul class="list-unstyled fw-normal pb-2 small">-->
<!--          <li><a href="/docs/5.3/layout/breakpoints/" class="bd-links-link d-inline-block rounded">Breakpoints</a></li>-->
<!--          <li><a href="/docs/5.3/layout/containers/" class="bd-links-link d-inline-block rounded">Containers</a></li>-->
<!--          <li><a href="/docs/5.3/layout/grid/" class="bd-links-link d-inline-block rounded">Grid</a></li>-->
<!--          <li><a href="/docs/5.3/layout/columns/" class="bd-links-link d-inline-block rounded">Columns</a></li>-->
<!--          <li><a href="/docs/5.3/layout/gutters/" class="bd-links-link d-inline-block rounded">Gutters</a></li>-->
<!--          <li><a href="/docs/5.3/layout/utilities/" class="bd-links-link d-inline-block rounded">Utilities</a></li>-->
<!--          <li><a href="/docs/5.3/layout/z-index/" class="bd-links-link d-inline-block rounded">Z-index</a></li>-->
<!--          <li><a href="/docs/5.3/layout/css-grid/" class="bd-links-link d-inline-block rounded">CSS Grid</a></li>-->
<!--        </ul>-->
<!--      </li>-->
<!--      <li class="bd-links-group py-2">-->
<!--        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">-->
<!--          &lt;!&ndash;        <svg class="bi me-2" style="color: var(&#45;&#45;bs-gray);" aria-hidden="true"><use xlink:href="#file-earmark-richtext"></use></svg>&ndash;&gt;-->
<!--          Content-->
<!--        </strong>-->

<!--        <ul class="list-unstyled fw-normal pb-2 small">-->
<!--          <li><a href="/docs/5.3/content/reboot/" class="bd-links-link d-inline-block rounded">Reboot</a></li>-->
<!--          <li><a href="/docs/5.3/content/typography/" class="bd-links-link d-inline-block rounded">Typography</a></li>-->
<!--          <li><a href="/docs/5.3/content/images/" class="bd-links-link d-inline-block rounded">Images</a></li>-->
<!--          <li><a href="/docs/5.3/content/tables/" class="bd-links-link d-inline-block rounded">Tables</a></li>-->
<!--          <li><a href="/docs/5.3/content/figures/" class="bd-links-link d-inline-block rounded">Figures</a></li>-->
<!--        </ul>-->
<!--      </li>-->
<!--      <li class="bd-links-group py-2">-->
<!--        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">-->
<!--          &lt;!&ndash;        <svg class="bi me-2" style="color: var(&#45;&#45;bs-blue);" aria-hidden="true"><use xlink:href="#ui-radios"></use></svg>&ndash;&gt;-->
<!--          Forms-->
<!--        </strong>-->

<!--        <ul class="list-unstyled fw-normal pb-2 small">-->
<!--          <li><a href="/docs/5.3/forms/overview/" class="bd-links-link d-inline-block rounded">Overview</a></li>-->
<!--          <li><a href="/docs/5.3/forms/form-control/" class="bd-links-link d-inline-block rounded">Form control</a></li>-->
<!--          <li><a href="/docs/5.3/forms/select/" class="bd-links-link d-inline-block rounded">Select</a></li>-->
<!--          <li><a href="/docs/5.3/forms/checks-radios/" class="bd-links-link d-inline-block rounded">Checks &amp;-->
<!--            radios</a></li>-->
<!--          <li><a href="/docs/5.3/forms/range/" class="bd-links-link d-inline-block rounded">Range</a></li>-->
<!--          <li><a href="/docs/5.3/forms/input-group/" class="bd-links-link d-inline-block rounded">Input group</a></li>-->
<!--          <li><a href="/docs/5.3/forms/floating-labels/" class="bd-links-link d-inline-block rounded">Floating-->
<!--            labels</a></li>-->
<!--          <li><a href="/docs/5.3/forms/layout/" class="bd-links-link d-inline-block rounded">Layout</a></li>-->
<!--          <li><a href="/docs/5.3/forms/validation/" class="bd-links-link d-inline-block rounded">Validation</a></li>-->
<!--        </ul>-->
<!--      </li>-->
<!--      <li class="bd-links-group py-2">-->
<!--        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">-->
<!--          &lt;!&ndash;        <svg class="bi me-2" style="color: var(&#45;&#45;bs-cyan);" aria-hidden="true"><use xlink:href="#menu-button-wide-fill"></use></svg>&ndash;&gt;-->
<!--          Components-->
<!--        </strong>-->

<!--        <ul class="list-unstyled fw-normal pb-2 small">-->
<!--          <li><a href="/docs/5.3/components/accordion/" class="bd-links-link d-inline-block rounded">Accordion</a></li>-->
<!--          <li><a href="/docs/5.3/components/alerts/" class="bd-links-link d-inline-block rounded">Alerts</a></li>-->
<!--          <li><a href="/docs/5.3/components/badge/" class="bd-links-link d-inline-block rounded">Badge</a></li>-->
<!--          <li><a href="/docs/5.3/components/breadcrumb/" class="bd-links-link d-inline-block rounded">Breadcrumb</a>-->
<!--          </li>-->
<!--          <li><a href="/docs/5.3/components/buttons/" class="bd-links-link d-inline-block rounded">Buttons</a></li>-->
<!--          <li><a href="/docs/5.3/components/button-group/" class="bd-links-link d-inline-block rounded">Button group</a>-->
<!--          </li>-->
<!--          <li><a href="/docs/5.3/components/card/" class="bd-links-link d-inline-block rounded">Card</a></li>-->
<!--          <li><a href="/docs/5.3/components/carousel/" class="bd-links-link d-inline-block rounded">Carousel</a></li>-->
<!--          <li><a href="/docs/5.3/components/close-button/" class="bd-links-link d-inline-block rounded">Close button</a>-->
<!--          </li>-->
<!--          <li><a href="/docs/5.3/components/collapse/" class="bd-links-link d-inline-block rounded">Collapse</a></li>-->
<!--          <li><a href="/docs/5.3/components/dropdowns/" class="bd-links-link d-inline-block rounded">Dropdowns</a></li>-->
<!--          <li><a href="/docs/5.3/components/list-group/" class="bd-links-link d-inline-block rounded">List group</a>-->
<!--          </li>-->
<!--          <li><a href="/docs/5.3/components/modal/" class="bd-links-link d-inline-block rounded">Modal</a></li>-->
<!--          <li><a href="/docs/5.3/components/navbar/" class="bd-links-link d-inline-block rounded">Navbar</a></li>-->
<!--          <li><a href="/docs/5.3/components/navs-tabs/" class="bd-links-link d-inline-block rounded">Navs &amp; tabs</a>-->
<!--          </li>-->
<!--          <li><a href="/docs/5.3/components/offcanvas/" class="bd-links-link d-inline-block rounded">Offcanvas</a></li>-->
<!--          <li><a href="/docs/5.3/components/pagination/" class="bd-links-link d-inline-block rounded">Pagination</a>-->
<!--          </li>-->
<!--          <li><a href="/docs/5.3/components/placeholders/" class="bd-links-link d-inline-block rounded">Placeholders</a>-->
<!--          </li>-->
<!--          <li><a href="/docs/5.3/components/popovers/" class="bd-links-link d-inline-block rounded">Popovers</a></li>-->
<!--          <li><a href="/docs/5.3/components/progress/" class="bd-links-link d-inline-block rounded">Progress</a></li>-->
<!--          <li><a href="/docs/5.3/components/scrollspy/" class="bd-links-link d-inline-block rounded">Scrollspy</a></li>-->
<!--          <li><a href="/docs/5.3/components/spinners/" class="bd-links-link d-inline-block rounded">Spinners</a></li>-->
<!--          <li><a href="/docs/5.3/components/toasts/" class="bd-links-link d-inline-block rounded">Toasts</a></li>-->
<!--          <li><a href="/docs/5.3/components/tooltips/" class="bd-links-link d-inline-block rounded">Tooltips</a></li>-->
<!--        </ul>-->
<!--      </li>-->
<!--      <li class="bd-links-group py-2">-->
<!--        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">-->
<!--          &lt;!&ndash;        <svg class="bi me-2" style="color: var(&#45;&#45;bs-orange);" aria-hidden="true"><use xlink:href="#magic"></use></svg>&ndash;&gt;-->
<!--          Helpers-->
<!--        </strong>-->

<!--        <ul class="list-unstyled fw-normal pb-2 small">-->
<!--          <li><a href="/docs/5.3/helpers/clearfix/" class="bd-links-link d-inline-block rounded">Clearfix</a></li>-->
<!--          <li><a href="/docs/5.3/helpers/color-background/" class="bd-links-link d-inline-block rounded">Color &amp;-->
<!--            background</a></li>-->
<!--          <li><a href="/docs/5.3/helpers/colored-links/" class="bd-links-link d-inline-block rounded">Colored links</a>-->
<!--          </li>-->
<!--          <li><a href="/docs/5.3/helpers/focus-ring/" class="bd-links-link d-inline-block rounded">Focus ring</a></li>-->
<!--          <li><a href="/docs/5.3/helpers/icon-link/" class="bd-links-link d-inline-block rounded">Icon link</a></li>-->
<!--          <li><a href="/docs/5.3/helpers/position/" class="bd-links-link d-inline-block rounded">Position</a></li>-->
<!--          <li><a href="/docs/5.3/helpers/ratio/" class="bd-links-link d-inline-block rounded">Ratio</a></li>-->
<!--          <li><a href="/docs/5.3/helpers/stacks/" class="bd-links-link d-inline-block rounded">Stacks</a></li>-->
<!--          <li><a href="/docs/5.3/helpers/stretched-link/" class="bd-links-link d-inline-block rounded">Stretched-->
<!--            link</a></li>-->
<!--          <li><a href="/docs/5.3/helpers/text-truncation/" class="bd-links-link d-inline-block rounded">Text-->
<!--            truncation</a></li>-->
<!--          <li><a href="/docs/5.3/helpers/vertical-rule/" class="bd-links-link d-inline-block rounded">Vertical rule</a>-->
<!--          </li>-->
<!--          <li><a href="/docs/5.3/helpers/visually-hidden/" class="bd-links-link d-inline-block rounded">Visually-->
<!--            hidden</a></li>-->
<!--        </ul>-->
<!--      </li>-->
<!--      <li class="bd-links-group py-2">-->
<!--        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">-->
<!--          &lt;!&ndash;        <svg class="bi me-2" style="color: var(&#45;&#45;bs-red);" aria-hidden="true"><use xlink:href="#braces-asterisk"></use></svg>&ndash;&gt;-->
<!--          Utilities-->
<!--        </strong>-->

<!--        <ul class="list-unstyled fw-normal pb-2 small">-->
<!--          <li><a href="/docs/5.3/utilities/api/" class="bd-links-link d-inline-block rounded">API</a></li>-->
<!--          <li><a href="/docs/5.3/utilities/background/" class="bd-links-link d-inline-block rounded">Background</a></li>-->
<!--          <li><a href="/docs/5.3/utilities/borders/" class="bd-links-link d-inline-block rounded">Borders</a></li>-->
<!--          <li><a href="/docs/5.3/utilities/colors/" class="bd-links-link d-inline-block rounded">Colors</a></li>-->
<!--          <li><a href="/docs/5.3/utilities/display/" class="bd-links-link d-inline-block rounded">Display</a></li>-->
<!--          <li><a href="/docs/5.3/utilities/flex/" class="bd-links-link d-inline-block rounded">Flex</a></li>-->
<!--          <li><a href="/docs/5.3/utilities/float/" class="bd-links-link d-inline-block rounded">Float</a></li>-->
<!--          <li><a href="/docs/5.3/utilities/interactions/" class="bd-links-link d-inline-block rounded">Interactions</a>-->
<!--          </li>-->
<!--          <li><a href="/docs/5.3/utilities/link/" class="bd-links-link d-inline-block rounded">Link</a></li>-->
<!--          <li><a href="/docs/5.3/utilities/object-fit/" class="bd-links-link d-inline-block rounded">Object fit</a></li>-->
<!--          <li><a href="/docs/5.3/utilities/opacity/" class="bd-links-link d-inline-block rounded">Opacity</a></li>-->
<!--          <li><a href="/docs/5.3/utilities/overflow/" class="bd-links-link d-inline-block rounded">Overflow</a></li>-->
<!--          <li><a href="/docs/5.3/utilities/position/" class="bd-links-link d-inline-block rounded">Position</a></li>-->
<!--          <li><a href="/docs/5.3/utilities/shadows/" class="bd-links-link d-inline-block rounded">Shadows</a></li>-->
<!--          <li><a href="/docs/5.3/utilities/sizing/" class="bd-links-link d-inline-block rounded">Sizing</a></li>-->
<!--          <li><a href="/docs/5.3/utilities/spacing/" class="bd-links-link d-inline-block rounded">Spacing</a></li>-->
<!--          <li><a href="/docs/5.3/utilities/text/" class="bd-links-link d-inline-block rounded">Text</a></li>-->
<!--          <li><a href="/docs/5.3/utilities/vertical-align/" class="bd-links-link d-inline-block rounded">Vertical-->
<!--            align</a></li>-->
<!--          <li><a href="/docs/5.3/utilities/visibility/" class="bd-links-link d-inline-block rounded">Visibility</a></li>-->
<!--          <li><a href="/docs/5.3/utilities/z-index/" class="bd-links-link d-inline-block rounded">Z-index</a></li>-->
<!--        </ul>-->
<!--      </li>-->
<!--      <li class="bd-links-group py-2">-->
<!--        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">-->
<!--          &lt;!&ndash;        <svg class="bi me-2" style="color: var(&#45;&#45;bs-blue);" aria-hidden="true"><use xlink:href="#tools"></use></svg>&ndash;&gt;-->
<!--          Extend-->
<!--        </strong>-->

<!--        <ul class="list-unstyled fw-normal pb-2 small">-->
<!--          <li><a href="/docs/5.3/extend/approach/" class="bd-links-link d-inline-block rounded">Approach</a></li>-->
<!--          <li><a href="/docs/5.3/extend/icons/" class="bd-links-link d-inline-block rounded">Icons</a></li>-->
<!--        </ul>-->
<!--      </li>-->
<!--      <li class="bd-links-group py-2">-->
<!--        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">-->
<!--          &lt;!&ndash;        <svg class="bi me-2" style="color: var(&#45;&#45;bs-indigo);" aria-hidden="true"><use xlink:href="#globe2"></use></svg>&ndash;&gt;-->
<!--          About-->
<!--        </strong>-->

<!--        <ul class="list-unstyled fw-normal pb-2 small">-->
<!--          <li><a href="/docs/5.3/about/overview/" class="bd-links-link d-inline-block rounded">Overview</a></li>-->
<!--          <li><a href="/docs/5.3/about/team/" class="bd-links-link d-inline-block rounded">Team</a></li>-->
<!--          <li><a href="/docs/5.3/about/brand/" class="bd-links-link d-inline-block rounded">Brand</a></li>-->
<!--          <li><a href="/docs/5.3/about/license/" class="bd-links-link d-inline-block rounded">License</a></li>-->
<!--          <li><a href="/docs/5.3/about/translations/" class="bd-links-link d-inline-block rounded">Translations</a></li>-->
<!--        </ul>-->
<!--      </li>-->
<!--      <li class="bd-links-span-all mt-1 mb-3 mx-4 border-top"></li>-->
<!--      <li class="bd-links-span-all">-->
<!--        <a href="/docs/5.3/migration/" class="bd-links-link d-inline-block rounded small ">-->
<!--          Migration-->
<!--        </a>-->
<!--      </li>-->
    </ul>
  </nav>
  <!--  <nav>-->
  <!--    <strong>Components</strong>-->
  <!--    <ul class="list-unstyled small">-->
  <!--      <li><router-link to="/components/alerts">Alerts</router-link></li>-->
  <!--      <li><router-link to="/components/tabs">Tabs</router-link></li>-->
  <!--    </ul>-->
  <!--  </nav>-->
</template>
<script setup lang="ts">
import NavigationArrowIcon from "../icons/NavigationArrowIcon.vue"
import {useRoute} from "vue-router"
import {useContentSidebarStore} from "../stores/ContentSidebarStore"

const route = useRoute()

const isRouteStartsWith = (str: string): boolean => {
    return route.matched.some(({ path }) => path.startsWith(str))
}

const contentSidebarStore = useContentSidebarStore()
const toggleContentSidebar = () => {
    contentSidebarStore.sidebarShow = !contentSidebarStore.sidebarShow
}
</script>