import { Team } from './Team'

/**
 * User resource.
 *
 * @export
 * @class User
 */
export class User {
	/**
	 * The id of the user.
	 *
	 * @type {number}
	 * @memberof User
	 */
	public id: number
	/**
	 * The name of the user.
	 *
	 * @type {string}
	 * @memberof User
	 */
	public name: string
	/**
	 * The email address of the user.
	 *
	 * @type {string}
	 * @memberof User
	 */
	public email: string
	/**
	 * The photo url of the user.
	 *
	 * @type {string}
	 * @memberof User
	 */
	public photoUrl: string
	/**
	 * The teams this user belongs to.
	 *
	 * @type {Team[]}
	 * @memberof User
	 */
	public teams: Team[]

	/**
	 * Creates an instance of User.
	 *
	 * @param {*} user
	 * @memberof User
	 */
	constructor(user: any) {
		this.id = user.id
		this.name = user.name
		this.email = user.email
		this.photoUrl = user.photo_url
		this.teams = user.teams.map((i: any) => new Team(i))
	}
}

export default User
