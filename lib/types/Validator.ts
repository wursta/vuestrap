export type Validator = {
    validate: (value: unknown) => Promise<true | string[]>
}