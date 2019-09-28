import { CertificateCheck } from './CertificateCheck'

/**
 * CertificateHealth resource.
 *
 * @export
 * @class CertificateHealth
 */
export class CertificateHealth {
	/**
	 * An array containing some details about the certificate itself
	 *
	 * @type {string[]}
	 * @memberof CertificateHealth
	 */
	public certificateDetails: string[]
	/**
	 * An array containing all the checks performed on the certificate
	 *
	 * @type {CertificateCheck[]}
	 * @memberof CertificateHealth
	 */
	public certificateChecks: CertificateCheck[]
	/**
	 * An array containing the names of all the issuers in the certificate chain.
	 *
	 * @type {string}
	 * @memberof CertificateHealth
	 */
	public certificateChainIssuers: string

	/**
	 * Creates an instance of CertificateHealth.
	 *
	 * @param {*} certificateHealth
	 * @memberof CertificateHealth
	 */
	constructor(certificateHealth: any) {
		this.certificateDetails = certificateHealth.certificate_details
		this.certificateChecks = certificateHealth.certificate_checks.map(
			(i: any) => new CertificateCheck(i)
		)
		this.certificateChainIssuers = certificateHealth.certificate_chain_issuers
	}
}

export default CertificateHealth
