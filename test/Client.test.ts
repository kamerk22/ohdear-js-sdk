import { Client } from './../src/Client'
const nock = require('nock')
const api = new Client({
	baseURL: 'http://localhost',
	timeout: 3000
})

it('should throw an error 422', async () => {
	nock('http://localhost')
		.get('/')
		.reply(422)
	await expect(api.get('/')).rejects.toThrow()
	await expect(api.post('/', {})).rejects.toThrow()
	await expect(api.delete('/')).rejects.toThrow()
})

it('should throw an error 400', async () => {
	nock('http://localhost')
		.get('/')
		.reply(400)
	await expect(api.get('/')).rejects.toThrow()
	await expect(api.post('/', {})).rejects.toThrow()
	await expect(api.delete('/')).rejects.toThrow()
})

it('should throw an error 404', async () => {
	nock('http://localhost')
		.get('/')
		.reply(404)

	await expect(api.get('/')).rejects.toThrow()
	await expect(api.post('/', {})).rejects.toThrow()
	await expect(api.delete('/')).rejects.toThrow()
})

it('should throw an error', async () => {
	await expect(api.get('h://fake')).rejects.toThrow()
})

it('should throw an error', async () => {
	await expect(api.get('http://x.iamgoingtoreject')).rejects.toThrow()
})
