export class CertificateHealth {
	public certificateDetails: []
	public certificateChecks: string
	public certificateChainIssuers: string

	constructor(certificateHealth: any) {
		this.certificateDetails = certificateHealth.certificateDetails
		this.certificateChecks = certificateHealth.certificateChecks
		this.certificateChainIssuers = certificateHealth.certificateChainIssuers
	}
}
