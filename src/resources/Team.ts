/**
 * Team resource.
 *
 * @export
 * @class Team
 */
export class Team {
	/**
	 * The id of the team.
	 *
	 * @type {number}
	 * @memberof Team
	 */
	public id: number
	/**
	 * The name of the team.
	 *
	 * @type {string}
	 * @memberof Team
	 */
	public name: string

	/**
	 * Creates an instance of Team.
	 *
	 * @param {*} team
	 * @memberof Team
	 */
	constructor(team: any) {
		this.id = team.id
		this.name = team.name
	}
}

export default Team
