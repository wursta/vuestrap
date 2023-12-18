export default function useDump() {
    const printVar = (val: unknown): string => {
        return JSON.stringify(val, null, 2)
        // if (val === null) {
        //     return "null"
        // }
        //
        // if (val === undefined) {
        //     return "undefined"
        // }
        //
        // if (typeof val === "object" || Array.isArray(val)) {
        //     return JSON.stringify(val, null, 2)
        // }
        //
        // return val.toString()
    }
    return {printVar}
}