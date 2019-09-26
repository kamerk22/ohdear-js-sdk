import { ApiService } from './ApiService'
import { CertificateHealth } from '../resources/CertificateHealth'

export class ManageCertificateHealthService extends ApiService {
	public async certificateHealth(siteId: number): Promise<CertificateHealth> {
		const res = await this.client.get(`certificate-health/${siteId}`)
		return new CertificateHealth(res)
	}
}
