import { randomUUID } from 'node:crypto'
export type BaseType = {
    id?: string
}
export class BaseEntity {
   id: string
   protected errors: string[] = [];
   constructor(id?: string) {
    this.id = !id ? randomUUID() : id
    this.errors = []
   }
   getErrors() {
        return this.errors
    }
    get isValid() {
        return this.errors.length === 0
    }

    get [Symbol.toStringTag]() {
        return this.constructor.name
    }

    toJSON() {
        const { errors, ...json } = this
        return json
    }

}