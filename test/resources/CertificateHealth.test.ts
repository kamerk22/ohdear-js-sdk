import OhDear from '../../src/OhDear'
import { certificateHealthResponse } from '../mock/success'
import CertificateHealth from '../../src/resources/CertificateHealth'
const nock = require('nock')

describe('Test Certificate Health Module', () => {
	it('should return certificate health of site', async () => {
		nock('https://ohdear.app')
			.get('/api/certificate-health/1')
			.reply(200, certificateHealthResponse)

		let certificateHealth = await new OhDear('Test').CertificateHealth.certificateHealth(1)
		expect(certificateHealth).toBeInstanceOf(CertificateHealth)
	})
})
