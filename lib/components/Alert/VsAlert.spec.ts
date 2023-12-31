import {mount} from "@vue/test-utils"
import VsAlert from "./VsAlert.vue"
import {expect, test} from "vitest"

test("Prop: variant", () => {
    const wrapper = mount(VsAlert, {
        props: {
            variant: "primary"
        }
    })
    expect(wrapper.find(".alert").classes()).eqls(["alert", "alert-primary"])
})

test("Prop: closeBtnTitle", () => {
    const wrapper = mount(VsAlert, {
        props: {
            variant: "primary",
            dismissible: true,
            closeBtnTitle: "Close me"
        }
    })
    expect(wrapper.find(".btn-close").exists()).toBe(true)
    expect(wrapper.find(".btn-close").attributes().title).eq("Close me")
})

test("Prop: dismissible", () => {
    const wrapper = mount(VsAlert, {
        props: {
            variant: "primary",
            dismissible: true,
            show: true
        }
    })

    expect(wrapper.find(".alert").classes()).eqls(["alert", "alert-primary", "alert-dismissible"])
    expect(wrapper.find(".btn-close").exists()).toBe(true)

    wrapper.find(".btn-close").trigger("click")
    wrapper.vm.$nextTick(() => {
        expect(wrapper.emitted()["update:show"]).toBeTruthy()
        expect(wrapper.emitted()["update:show"][0]).toEqual([false])
    })
})