import {expect, test} from "vitest"
import {mount} from "@vue/test-utils"
import VsNumberField from "./VsNumberField.vue"

test("Check that rendered only input if no props set", () => {
    const wrapper = mount(VsNumberField)
    expect(wrapper.findAll("*").length).eq(1)
    expect(wrapper.find("input").exists()).toBe(true)
    expect(wrapper.find("input").classes()).eqls(["form-control"])
    expect(wrapper.find("input").attributes().type).eq("number")
})

test("Attributes inheritance", () => {
    const wrapper = mount(VsNumberField, {
        attrs: {
            min: "0",
            max: "10",
            step: "0.1"
        }
    })
    expect(wrapper.find("input").attributes().min).eq("0")
    expect(wrapper.find("input").attributes().max).eq("10")
    expect(wrapper.find("input").attributes().step).eq("0.1")
})

test("Label and input elements order", () => {
    const wrapper = mount(VsNumberField, {
        props: {
            label: "Test label"
        }
    })
    expect(wrapper.findAll("*")[0].element.tagName).eq("LABEL")
    expect(wrapper.findAll("*")[1].element.tagName).eq("INPUT")
})
test("Prop: Id", () => {
    const randomId = "test-id-" + Math.random()
    const wrapper = mount(VsNumberField, {
        props: {
            id: randomId,
            label: "Test label"
        }
    })
    expect(wrapper.find("input").attributes().id).eq(randomId)
    expect(wrapper.find("label").attributes().for).eq(randomId)
})
test("Prop: Label", () => {
    const wrapper = mount(VsNumberField, {
        props: {
            label: "Test label"
        }
    })
    expect(wrapper.find("input").exists()).toBe(true)
    expect(wrapper.find("label").text()).toBe("Test label")
})

test("Prop: Hint", () => {
    const wrapper = mount(VsNumberField, {
        props: {
            hint: "Test hint"
        }
    })
    expect(wrapper.find("input").exists()).toBe(true)
    expect(wrapper.find(".form-text").text()).toBe("Test hint")
})

test("Prop: Floating labels", () => {
    const wrapper = mount(VsNumberField, {
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

test("Prop: PlainText", () => {
    const wrapper = mount(VsNumberField, {
        props: {
            plainText: true
        }
    })
    expect(wrapper.find("input").classes()).eqls(["form-control-plaintext"])
})

test("Prop: ModelValue", () => {
    const wrapper = mount(VsNumberField, {
        props: {
            modelValue: "Test value"
        }
    })
    expect(wrapper.find("input").element.value).eq("Test value")
})

test("Slot: default", () => {
    const wrapper = mount(VsNumberField, {
        slots: {
            default: "Test label"
        }
    })
    expect(wrapper.find("label").text()).eq("Test label")
})

test("Slot: hint", () => {
    const wrapper = mount(VsNumberField, {
        slots: {
            hint: "Test hint"
        }
    })
    expect(wrapper.find(".form-text").text()).eq("Test hint")
})

test("Slot: prepend", () => {
    const wrapper = mount(VsNumberField, {
        slots: {
            prepend: `
                <span class="input-group-text">Test prepend</span>
            `
        }
    })
    expect(wrapper.find(".input-group").find(".input-group-text").text()).eq("Test prepend")
})

test("Slot: append", () => {
    const wrapper = mount(VsNumberField, {
        slots: {
            append: `
                <span class="input-group-text">Test append</span>
            `
        }
    })
    expect(wrapper.find(".input-group").find(".input-group-text").text()).eq("Test append")
})