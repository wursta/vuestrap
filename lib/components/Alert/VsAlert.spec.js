import {mount} from "@vue/test-utils"
import VsAlert from "./VsAlert.vue"
import {expect, test} from "vitest"

test("Display alert", () => {
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
            dismissible: true
        }
    })

    expect(wrapper.classes()).eqls(["alert", "alert-primary", "alert-dismissible"])
})