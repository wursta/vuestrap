import {expect, test} from "vitest"
import {mount, VueWrapper} from "@vue/test-utils"
import VsTextField from "./VsTextField.vue"
import {InputFieldValueType} from "./InputFieldProps"

test("Check that rendered only input if no props set", () => {
    const wrapper = mount(VsTextField)
    expect(wrapper.findAll("*").length).eq(1)
    expect(wrapper.find("input").exists()).toBe(true)
    expect(wrapper.find("input").classes()).eqls(["form-control"])
    expect(wrapper.find("input").attributes().type).eq("text")
})

test("Attributes inheritance", () => {
    const wrapper = mount(VsTextField, {
        attrs: {
            pattern: "\\w{3,6}"
        }
    })
    expect(wrapper.find("input").attributes().pattern).eq("\\w{3,6}")

    const wrapper2 = mount(VsTextField, {
        props: {
            inputType: "number"
        },
        attrs: {
            min: "0",
            max: "10",
            step: "0.1"
        }
    })
    expect(wrapper2.find("input").attributes().min).eq("0")
    expect(wrapper2.find("input").attributes().max).eq("10")
    expect(wrapper2.find("input").attributes().step).eq("0.1")
})

test("Label and input elements order", () => {
    const wrapper = mount(VsTextField, {
        props: {
            label: "Test label"
        }
    })
    expect(wrapper.findAll("*")[0].element.tagName).eq("LABEL")
    expect(wrapper.findAll("*")[1].element.tagName).eq("INPUT")
})
test("Prop: Id", () => {
    const randomId = "test-id-" + Math.random()
    const wrapper = mount(VsTextField, {
        props: {
            id: randomId,
            label: "Test label"
        }
    })
    expect(wrapper.find("input").attributes().id).eq(randomId)
    expect(wrapper.find("label").attributes().for).eq(randomId)
})
test("Prop: Label", () => {
    const wrapper = mount(VsTextField, {
        props: {
            label: "Test label"
        }
    })
    expect(wrapper.find("input").exists()).toBe(true)
    expect(wrapper.find("label").text()).toBe("Test label")
})

test("Prop: Hint", () => {
    const wrapper = mount(VsTextField, {
        props: {
            hint: "Test hint"
        }
    })
    expect(wrapper.find("input").exists()).toBe(true)
    expect(wrapper.find(".form-text").text()).toBe("Test hint")
})

test("Prop: Floating labels", () => {
    const wrapper = mount(VsTextField, {
        props: {
            floatingLabel: true,
            label: "Test label"
        }
    })
    expect(wrapper.find(".form-floating").exists()).toBe(true)
    expect(wrapper.find(".form-floating").findAll("*")[0].element.tagName).eq("INPUT")
    expect(wrapper.find(".form-floating").findAll("*")[1].element.tagName).eq("LABEL")
    expect(wrapper.find(".form-floating").findAll("*")[1].text()).eq("Test label")
})

test("Prop: Input type", () => {
    const wrapper = mount(VsTextField, {
        props: {
            inputType: "password"
        }
    })
    expect(wrapper.find("input").attributes().type).eq("password")
})

test("Prop: PlainText", () => {
    const wrapper = mount(VsTextField, {
        props: {
            plainText: true
        }
    })
    expect(wrapper.find("input").classes()).eqls(["form-control-plaintext"])
})

test("Prop: ModelValue", () => {
    const wrapper = mount(VsTextField, {
        props: {
            modelValue: "Test value"
        }
    })
    expect(wrapper.find("input").element.value).eq("Test value")
})

test("Slot: default", () => {
    const wrapper = mount(VsTextField, {
        slots: {
            default: "Test label"
        }
    })
    expect(wrapper.find("label").text()).eq("Test label")
})

test("Slot: hint", () => {
    const wrapper = mount(VsTextField, {
        slots: {
            hint: "Test hint"
        }
    })
    expect(wrapper.find(".form-text").text()).eq("Test hint")
})

test("Slot: prepend", () => {
    const wrapper = mount(VsTextField, {
        slots: {
            prepend: `
                <span class="input-group-text">Test prepend</span>
            `
        }
    })
    expect(wrapper.find(".input-group").find(".input-group-text").text()).eq("Test prepend")
})

test("Prop: prepend", () => {
    const wrapper = mount(VsTextField, {
        props: {
            prepend: "Test prepend"
        }
    })
    expect(wrapper.find(".input-group").find(".input-group-text").text()).eq("Test prepend")
})

test("Slot: append", () => {
    const wrapper = mount(VsTextField, {
        slots: {
            append: `
                <span class="input-group-text">Test append</span>
            `
        }
    })
    expect(wrapper.find(".input-group").find(".input-group-text").text()).eq("Test append")
})

test("Prop: append", () => {
    const wrapper = mount(VsTextField, {
        props: {
            append: "Test append"
        }
    })
    expect(wrapper.find(".input-group").find(".input-group-text").text()).eq("Test append")
})

test("Validation: Required rule", async () => {
    const wrapper: VueWrapper = mount(VsTextField, {
        props: {
            modelValue: "Test",
            rules: ["required"],
            "onUpdate:model-value": (value: InputFieldValueType) => wrapper.setProps({modelValue: value})
        }
    })

    await wrapper.find("input").setValue("")
    expect(wrapper.find("input").classes().indexOf("is-invalid")).toBeGreaterThan(-1)
    expect(wrapper.find(".invalid-feedback").exists()).toBe(true)
    expect(wrapper.find(".invalid-feedback").text()).eq("Required validator error")

    await wrapper.find("input").setValue("Test")
    expect(wrapper.find("input").classes().indexOf("is-valid")).eq(-1)

    await wrapper.setProps({markValid: true})
    expect(wrapper.find("input").classes().indexOf("is-valid")).toBeGreaterThan(-1)
    expect(wrapper.find(".invalid-feedback").exists()).toBe(false)
    expect(wrapper.find(".valid-feedback").exists()).toBe(false)

    await wrapper.setProps({validMessage: "It's ok!"})
    expect(wrapper.find(".valid-feedback").exists()).toBe(true)
    expect(wrapper.find(".valid-feedback").text()).eq("It's ok!")
})