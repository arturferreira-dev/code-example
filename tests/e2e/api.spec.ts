import {describe, it, expect, beforeAll, afterAll, jest } from '@jest/globals'
import { app } from '../../src/app'
import http from 'node:http'
import { Person } from '../../src/domain/person.entity'

describe('API', () => {
    let HOST: string
    let server: http.Server
    beforeAll(async () => {
        server = app.listen()
        const { port } = server.address() as any
        
        expect(port).toBeDefined()
        HOST = `http://localhost:${port}`
        expect(HOST).toBeDefined()
    })
    afterAll(async () => {
        server.closeAllConnections()
        await new Promise((resolve, reject)=>server.close((err)=> err ? reject(err): resolve("ok")))
    })
    it('should return 200', async () => {
        const response = await fetch(HOST)
        expect(response.status).toBe(200)
    })

    it('should return 500', async () => {
        jest.spyOn(Person.prototype, 'validate').mockImplementation(() => { throw new Error() })
        const response = await fetch(`${HOST}`)
        expect(response.status).toBe(500)
    })

    it('should return 404', async () => {
        const response = await fetch(`${HOST}/any_not_found_page`)
        expect(response.status).toBe(404)
    })
    
    
})