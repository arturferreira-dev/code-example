import { describe, it, expect } from '@jest/globals'
import { Person } from '../../../../src/domain/person.entity'

describe('Person entity', () => {
    it('should create a person', () => {
        const person = new Person({ name: 'John Doe', age: 30 })
        expect(person.name).toBe('John Doe')
        expect(person.age).toBe(30)
        expect(person.isValid).toEqual(true)
        expect(person.getErrors()).toEqual([])
    })
    it('thrown an error if name is not provided', () => {
        const person = new Person({ name: '', age: 30 })
        expect(person.getErrors().length).toEqual(1)
        expect(person.isValid).toEqual(false)
        expect(person.getErrors()[0]).toEqual('name is required')
    })
    it('thrown an error if name is not provided', () => {
        const person = new Person({ name: 'John Doe', age: 0 })
        expect(person.isValid).toEqual(false)
        expect(person.getErrors().length).toEqual(1)
        expect(person.getErrors()[0]).toEqual('age is required')
    })
})