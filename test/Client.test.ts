import { Client } from './../src/Client'
const nock = require('nock')
const api = new Client({
	baseURL: 'http://localhost',
	timeout: 3000
})

it('should throw an error 422', async () => {
	nock('http://localhost')
		.get('/422')
		.reply(422)
	await expect(api.get('/422')).rejects.toThrow()
})

it('should throw an error 400', async () => {
	nock('http://localhost')
		.get('/400')
		.reply(400)
	await expect(api.get('/400')).rejects.toThrow()
})

it('should throw an error 404', async () => {
	nock('http://localhost')
		.get('/404')
		.reply(404)
	nock('http://localhost')
		.post('/404')
		.reply(404)
	nock('http://localhost')
		.delete('/404')
		.reply(404)
	await expect(api.get('/404')).rejects.toThrow()
	await expect(api.post('/404', {})).rejects.toThrow()
	await expect(api.delete('/404')).rejects.toThrow()
})

it('should throw an error', async () => {
	await expect(api.get('h://fake')).rejects.toThrow()
})

it('should throw an error', async () => {
	await expect(api.get('http://x.iamgoingtoreject')).rejects.toThrow()
})
