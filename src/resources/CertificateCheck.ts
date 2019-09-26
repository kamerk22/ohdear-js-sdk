import { CertificateCheckEnum } from '../enums/CertificateCheckEnum'

export class CertificateCheck {
	public type: CertificateCheckEnum
	public label: string
	public passed: boolean

	constructor(check: any) {
		this.type = check.type
		this.label = check.label
		this.passed = check.passed
	}
}
