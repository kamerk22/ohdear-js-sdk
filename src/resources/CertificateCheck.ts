import { CertificateCheckEnum } from '../enums/CertificateCheckEnum'

/**
 * CertificateCheck resource.
 *
 * @export
 * @class CertificateCheck
 */
export class CertificateCheck {
	/**
	 * The type of check performed on certificate.
	 *
	 * @type {CertificateCheckEnum} eg: notFound,expiresSoon,invalidChain,coversWrongDomain,doesNotConnectWithRootCertificate,notYetActive,isSelfSigned,usesInvalidHash,hasExpired,hasChanged
	 * @memberof CertificateCheck
	 */
	public type: CertificateCheckEnum
	/**
	 * The label of check
	 *
	 * @type {string}
	 * @memberof CertificateCheck
	 */
	public label: string
	/**
	 * The check is passed or not.
	 *
	 * @type {boolean}
	 * @memberof CertificateCheck
	 */
	public passed: boolean

	/**
	 * Creates an instance of CertificateCheck.
	 *
	 * @param {*} check
	 * @memberof CertificateCheck
	 */
	constructor(check: any) {
		this.type = check.type
		this.label = check.label
		this.passed = check.passed
	}
}
