import {expect, test} from "vitest"
import {mount} from "@vue/test-utils"
import VsRadioField from "./VsRadioField.vue"

test("Check that rendered only input if no props set", () => {
    const wrapper = mount(VsRadioField)
    expect(wrapper.findAll("*").length).eq(1)
    expect(wrapper.find("input").exists()).toBe(true)
    expect(wrapper.find("input").classes()).eqls(["form-check-input"])
    expect(wrapper.find("input").attributes().type).eq("radio")
})

test("Attributes inheritance", () => {
    const wrapper = mount(VsRadioField, {
        attrs: {
            name: "test_checkbox_name",
        }
    })
    expect(wrapper.find("input").attributes().name).eq("test_checkbox_name")
})

test("Prop: wrapper-attrs", () => {
    const wrapper = mount(VsRadioField, {
        attrs: {
            wrapperAttrs: {
                class: "test-checkbox-wrapper-class"
            },
            label: "Test label"
        }
    })
    expect(wrapper.find(".form-check").classes()).eqls(["form-check", "test-checkbox-wrapper-class"])
})

test("Prop: label", () => {
    const wrapper = mount(VsRadioField, {
        props: {
            label: "Test label"
        }
    })
    expect(wrapper.find("input").exists()).toBe(true)
    expect(wrapper.find("label").text()).toBe("Test label")
})

test("Prop: value", () => {
    const wrapper = mount(VsRadioField, {
        props: {
            modelValue: "1",
            value: "1"
        }
    })

    expect(wrapper.find("input").element.checked).toBe(true)
})

test("Prop: inline", () => {
    const wrapper = mount(VsRadioField, {
        props: {
            inline: true,
            label: "Test label"
        }
    })

    expect(wrapper.find("div").classes()).eqls(["form-check", "form-check-inline"])
})

test("Prop: reverse", () => {
    const wrapper = mount(VsRadioField, {
        props: {
            reverse: true,
            label: "Test label"
        }
    })

    expect(wrapper.find("div").classes()).eqls(["form-check", "form-check-reverse"])
})

test("Prop: button", () => {
    const wrapper = mount(VsRadioField, {
        props: {
            button: true,
            label: "Test label"
        }
    })

    expect(wrapper.find("div").exists()).eq(false)
    expect(wrapper.find("input").classes()).eqls(["btn-check"])
    expect(wrapper.find("label").classes()).eqls(["btn"])
})

test("Prop: button-variant", () => {
    const wrapper = mount(VsRadioField, {
        props: {
            button: true,
            buttonVariant: "primary",
            label: "Test label"
        }
    })

    expect(wrapper.find("div").exists()).eq(false)
    expect(wrapper.find("input").classes()).eqls(["btn-check"])
    expect(wrapper.find("label").classes()).eqls(["btn", "btn-primary"])
})

test("Prop: strict", () => {
    const wrapper = mount(VsRadioField, {
        props: {
            modelValue: 100,
            value: "100",
            uncheckedValue: "-1"
        }
    })
    expect(wrapper.find("input").element.checked).toBe(false)

    const wrapper2 = mount(VsRadioField, {
        props: {
            modelValue: "100",
            value: "100",
            uncheckedValue: "-1"
        }
    })
    expect(wrapper2.find("input").element.checked).toBe(true)

    const wrapper3 = mount(VsRadioField, {
        props: {
            modelValue: 100,
            value: "100",
            uncheckedValue: "-1",
            strict: false
        }
    })
    expect(wrapper3.find("input").element.checked).toBe(true)
})