export default function useDump() {
    const printVar = (val: unknown): string => {
        if (val instanceof Map) {
            const obj: {[key: string]: unknown} = {}
            val.forEach((v, key) => obj[key] = v)
            return JSON.stringify(obj, null, 2)
        } else {
            return JSON.stringify(val, null, 2)
        }
    }
    return {printVar}
}