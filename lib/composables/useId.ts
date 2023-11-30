import {computed} from "vue"
import {IdProps} from "../components/IdProps"

let currentId = 1
export default function useId(props: IdProps) {
    const id = () => {
        return "vs-" + currentId++
    }

    const computedId = computed(() => {
        if (props.id) {
            return props.id
        }

        return id()
    })

    return {
        id,
        computedId
    }
}