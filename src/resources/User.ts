import { Team } from './Team'

export class User {
	public id: number
	public name: string
	public email: string
	public photoUrl: string
	public team: Team[]

	constructor(user: any) {
		this.id = user.id
		this.name = user.name
		this.email = user.email
		this.photoUrl = user.photo_url
		this.team = user.teams
	}
}
