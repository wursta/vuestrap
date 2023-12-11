import {expect, test} from "vitest"
import {mount} from "@vue/test-utils"
import VsRangeField from "./VsRangeField.vue"

test("Check that rendered only input if no props set", () => {
    const wrapper = mount(VsRangeField)
    expect(wrapper.findAll("*").length).eq(1)
    expect(wrapper.find("input").exists()).toBe(true)
    expect(wrapper.find("input").classes()).eqls(["form-range"])
    expect(wrapper.find("input").attributes().type).eq("range")
})

test("Attributes inheritance", () => {
    const wrapper = mount(VsRangeField, {
        attrs: {
            min: "0",
            max: "10",
        }
    })
    expect(wrapper.find("input").attributes().min).eq("0")
    expect(wrapper.find("input").attributes().max).eq("10")
})

test("Label and input elements order", () => {
    const wrapper = mount(VsRangeField, {
        props: {
            label: "Test label"
        }
    })
    expect(wrapper.findAll("*")[0].element.tagName).eq("LABEL")
    expect(wrapper.findAll("*")[1].element.tagName).eq("INPUT")
})
test("Prop: Id", () => {
    const randomId = "test-id-" + Math.random()
    const wrapper = mount(VsRangeField, {
        props: {
            id: randomId,
            label: "Test label"
        }
    })
    expect(wrapper.find("input").attributes().id).eq(randomId)
    expect(wrapper.find("label").attributes().for).eq(randomId)
})
test("Prop: Label", () => {
    const wrapper = mount(VsRangeField, {
        props: {
            label: "Test label"
        }
    })
    expect(wrapper.find("input").exists()).toBe(true)
    expect(wrapper.find("label").text()).toBe("Test label")
})

test("Prop: Hint", () => {
    const wrapper = mount(VsRangeField, {
        props: {
            hint: "Test hint"
        }
    })
    expect(wrapper.find("input").exists()).toBe(true)
    expect(wrapper.find(".form-text").text()).toBe("Test hint")
})

test("Prop: ModelValue", () => {
    const wrapper = mount(VsRangeField, {
        props: {
            modelValue: 5
        }
    })
    expect(wrapper.find("input").element.value).eq(5)
})

test("Slot: default", () => {
    const wrapper = mount(VsRangeField, {
        slots: {
            default: "Test label"
        }
    })
    expect(wrapper.find("label").text()).eq("Test label")
})

test("Slot: hint", () => {
    const wrapper = mount(VsRangeField, {
        slots: {
            hint: "Test hint"
        }
    })
    expect(wrapper.find(".form-text").text()).eq("Test hint")
})