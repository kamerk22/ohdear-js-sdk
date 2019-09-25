import { ApiService } from './ApiService'

export class ManageCertificateHealthService extends ApiService {
	public async certificateHealth(siteId: number) {
		try {
			const res = await this.client.get(`certificate-health/${siteId}`)

			console.log(res)
		} catch (error) {
			console.log(error)
		}
	}
}
