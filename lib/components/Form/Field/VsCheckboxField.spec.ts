import {expect, test} from "vitest"
import {mount} from "@vue/test-utils"
import VsCheckboxField from "./VsCheckboxField.vue"
import {ModelValueType} from "./CheckboxFieldProps"

test("Check that rendered only input if no props set", () => {
    const wrapper = mount(VsCheckboxField)
    expect(wrapper.findAll("*").length).eq(1)
    expect(wrapper.find("input").exists()).toBe(true)
    expect(wrapper.find("input").classes()).eqls(["form-check-input"])
    expect(wrapper.find("input").attributes().type).eq("checkbox")
})

test("Attributes inheritance", () => {
    const wrapper = mount(VsCheckboxField, {
        attrs: {
            name: "test_checkbox_name",
        }
    })
    expect(wrapper.find("input").attributes().name).eq("test_checkbox_name")
})

test("Prop: wrapper-attrs", () => {
    const wrapper = mount(VsCheckboxField, {
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
    const wrapper = mount(VsCheckboxField, {
        props: {
            label: "Test label"
        }
    })
    expect(wrapper.find("input").exists()).toBe(true)
    expect(wrapper.find("label").text()).toBe("Test label")
})

test("Prop: value", () => {
    const wrapper = mount(VsCheckboxField, {
        props: {
            modelValue: "1",
            value: "1"
        }
    })

    expect(wrapper.find("input").element.checked).toBe(true)
})

test("Prop: array value", () => {
    const wrapper = mount(VsCheckboxField, {
        props: {
            modelValue: ["Apple"],
            value: "Apple"
        }
    })

    expect(wrapper.find("input").element.checked).toBe(true)
})

test("Prop: switch", () => {
    const wrapper = mount(VsCheckboxField, {
        props: {
            switch: true,
            label: "Test label"
        }
    })

    expect(wrapper.find("div").classes()).eqls(["form-check", "form-switch"])
})

test("Prop: inline", () => {
    const wrapper = mount(VsCheckboxField, {
        props: {
            inline: true,
            label: "Test label"
        }
    })

    expect(wrapper.find("div").classes()).eqls(["form-check", "form-check-inline"])
})

test("Prop: reverse", () => {
    const wrapper = mount(VsCheckboxField, {
        props: {
            reverse: true,
            label: "Test label"
        }
    })

    expect(wrapper.find("div").classes()).eqls(["form-check", "form-check-reverse"])
})

test("Prop: button", () => {
    const wrapper = mount(VsCheckboxField, {
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
    const wrapper = mount(VsCheckboxField, {
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

test("Prop: uncheckedValue", () => {
    let currentValue: ModelValueType = ""
    const wrapper = mount(VsCheckboxField, {
        props: {
            value: "100",
            uncheckedValue: "-1",
            "onUpdate:model-value": (value: ModelValueType) => currentValue = value
        }
    })
    wrapper.find("input").element.checked = true
    wrapper.find("input").trigger("input")
    expect(currentValue).eq("100")

    wrapper.find("input").element.checked = false
    wrapper.find("input").trigger("input")
    expect(currentValue).eq("-1")
})

test("Prop: strict", () => {
    const wrapper = mount(VsCheckboxField, {
        props: {
            modelValue: 100,
            value: "100",
            uncheckedValue: "-1"
        }
    })
    expect(wrapper.find("input").element.checked).toBe(false)

    const wrapper2 = mount(VsCheckboxField, {
        props: {
            modelValue: "100",
            value: "100",
            uncheckedValue: "-1"
        }
    })
    expect(wrapper2.find("input").element.checked).toBe(true)

    const wrapper3 = mount(VsCheckboxField, {
        props: {
            modelValue: 100,
            value: "100",
            uncheckedValue: "-1",
            strict: false
        }
    })
    expect(wrapper3.find("input").element.checked).toBe(true)
})

test("Prop: allowNull", () => {
    const wrapper = mount(VsCheckboxField, {
        props: {
            modelValue: null,
            allowNull: true
        }
    })

    expect(Object.prototype.hasOwnProperty.call(wrapper.find("input").attributes(), "indeterminate")).toBe(true)

    const wrapper2 = mount(VsCheckboxField, {
        props: {
            modelValue: null,
        }
    })

    expect(Object.prototype.hasOwnProperty.call(wrapper2.find("input").attributes(), "indeterminate")).toBe(false)
})