/**
 * Certificate check enum.
 *
 * @export
 * @enum {number}
 */
export enum CertificateCheckEnum {
	'notFound',
	'expiresSoon',
	'invalidChain',
	'coversWrongDomain',
	'doesNotConnectWithRootCertificate',
	'notYetActive',
	'isSelfSigned',
	'usesInvalidHash',
	'hasExpired',
	'hasChanged'
}
