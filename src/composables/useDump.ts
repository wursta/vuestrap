export default function useDump() {
    const printVar = (val: unknown): string => {
        if (val === null) {
            return "null"
        }

        if (val === undefined) {
            return "undefined"
        }

        if (Array.isArray(val)) {
            return "[" + val.toString() + "]"
        }

        return val.toString()
    }
    return {printVar}
}