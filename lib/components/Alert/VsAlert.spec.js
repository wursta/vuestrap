import {mount} from "@vue/test-utils"
import VsAlert from "./VsAlert.vue"
import {expect, test} from "vitest"

test("Alert variants", () => {
    const wrapper = mount(VsAlert, {
        props: {
            variant: "primary"
        }
    })

    expect(wrapper.classes()).eqls(["alert", "alert-primary"])
})

test("Dismissible alert", () => {
    const wrapper = mount(VsAlert, {
        props: {
            variant: "primary",
            dismissible: true,
            closeBtnTitle: "Close me"
        }
    })

    expect(wrapper.classes()).eqls(["alert", "alert-primary", "alert-dismissible"])
    expect(wrapper.find(".btn-close").exists()).toBe(true)
    expect(wrapper.find(".btn-close").attributes().title).eq("Close me")
})