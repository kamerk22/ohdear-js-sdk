import { CertificateCheck } from './CertificateCheck'

export class CertificateHealth {
	public certificateDetails: []
	public certificateChecks: CertificateCheck[]
	public certificateChainIssuers: string

	constructor(certificateHealth: any) {
		this.certificateDetails = certificateHealth.certificate_details
		this.certificateChecks = certificateHealth.certificate_checks.map(
			(i: any) => new CertificateCheck(i)
		)
		this.certificateChainIssuers = certificateHealth.certificate_chain_issuers
	}
}
