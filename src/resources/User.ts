import { Team } from './Team'

export class User {
	public id: number
	public name: string
	public email: string
	public photoUrl: string
	public teams: Team[]

	constructor(user: any) {
		this.id = user.id
		this.name = user.name
		this.email = user.email
		this.photoUrl = user.photo_url
		this.teams = user.teams.map((i: any) => new Team(i))
	}
}
