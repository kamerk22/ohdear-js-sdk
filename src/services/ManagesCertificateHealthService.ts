import { ApiService } from './ApiService'
import { CertificateHealth } from '../resources/CertificateHealth'

/**
 * Manages certificate health service.
 *
 * @export
 * @class ManageCertificateHealthService
 * @extends {ApiService}
 */
export class ManageCertificateHealthService extends ApiService {
	/**
	 * Get the certificate health of site.
	 *
	 * @param {number} siteId
	 * @returns {Promise<CertificateHealth>}
	 * @memberof ManageCertificateHealthService
	 */
	public async certificateHealth(siteId: number): Promise<CertificateHealth> {
		const res = await this.client.get(`certificate-health/${siteId}`)
		return new CertificateHealth(res)
	}
}
