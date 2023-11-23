import {mount} from "@vue/test-utils"
import {expect, test} from "vitest"
import VsTabs from "./VsTabs.vue"
import {defineComponent} from "vue"
import VsTab from "./VsTab.vue"

export default defineComponent({
    components: {VsTab}
})


test("No tab content if slot empty", () => {
    const wrapper = mount(VsTabs)
    expect(wrapper.find(".nav").exists()).toBe(true)
    expect(wrapper.find(".tab-content").exists()).toBe(false)
})

test("Prop: dynamic class to nav bar", () => {
    const wrapperWithCustomClass = mount(VsTabs, {
        props: {
            class: "nav-fill"
        }
    })
    expect(wrapperWithCustomClass.find(".nav-fill").exists()).toBe(true)
})
test("Prop: pills", () => {
    const wrapperWithoutPills = mount(VsTabs)
    expect(wrapperWithoutPills.find(".nav-pills").exists()).toBe(false)

    const wrapperWithPills = mount(VsTabs, {
        props: {
            pills: true
        }
    })
    expect(wrapperWithPills.find(".nav-pills").exists()).toBe(true)
})

test("Default slot: tabs", () => {
    const wrapper = mount(VsTabs, {
        global: {
            components: {
                VsTab,
            },
        },
        slots: {
            default: `
                <VsTab title="Test tab 1" active>Test tab content 1</VsTab>
                <VsTab title="Test tab 2">Test tab content 2</VsTab>
                <VsTab title="Disabled tab" disabled />
                <VsTab><template #titleText><strong>Test tab 3</strong></template>Test tab content 4</VsTab>
                <VsTab><template #title="{ active, click }"><button class="nav-link custom-nav-link" /></template>Test tab content 5</VsTab>
                <div class="nav-item ms-auto">
                    <button class="btn btn-outline-primary">Add</button>
                </div>
            `
        }
    })

    expect(wrapper.findAll(".nav .nav-item .nav-link").length).eq(5)

    expect(wrapper.find(".nav .nav-item .nav-link.active").exists()).toBe(true)
    expect(wrapper.find(".nav .nav-item .nav-link.active").text()).eq("Test tab 1")
    expect(wrapper.findAll(".nav .nav-item .nav-link.disabled").length).toBe(1)
    expect(wrapper.find(".nav .nav-item .btn").exists()).toBe(true)

    wrapper.findAll(".nav .nav-item").at(1)?.find(".nav-link").trigger("click")
    wrapper.vm.$nextTick(() => {
        expect(wrapper.find(".nav .nav-item .nav-link.active").text()).eq("Test tab 2")
    })

    expect(wrapper.findAll(".nav .nav-item").at(3)?.find("strong").exists()).toBe(true)
    expect(wrapper.findAll(".nav .nav-item").at(4)?.find(".custom-nav-link").exists()).toBe(true)
})