import {Validator} from "../types/Validator"

const validator: Validator = {
    validate: async (value: unknown) => {
        if (value === null || value === undefined || value === "") {
            return ["Required validator error"]
        }

        return true
    }
}
export default validator