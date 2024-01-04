import { describe, it, expect } from '@jest/globals'
import { BaseEntity } from '../../../../src/domain/base.entity'

describe('Base Entity', () => {
    it('should create a base entity without id', () => {
        const base = new BaseEntity()
        expect(base.id).toBeDefined()
    })
    it('should create a base entity with id', () => {
        const base = new BaseEntity('any_id')
        expect(base.id).toBeDefined()
        expect(base.id).toBe('any_id')
    })
    it('should change the prototype Symbol.toStringTag', () => {
        const expected = Object.prototype.toString.call(new BaseEntity())
        expect(expected).toBe('[object BaseEntity]')
    })
    it('should remove errors from the entity toJSON', () => {
        const expected = new BaseEntity()
        expect(expected.toJSON()).not.toHaveProperty('errors')
        expect(expected.toJSON()).not.toHaveProperty('getErrors')
    })
})