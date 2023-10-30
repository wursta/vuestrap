import {computed} from "vue"
import {AnimateProps} from "../components/AnimateProps"

export default function useTransition(props: AnimateProps) {
    const computeTransName = (defaultName: string) => {
        return computed(() => {
            if (!props.animate) {
                return ""
            }
            return defaultName
        })
    }

    return {
        computeTransName
    }
}