export class Team {
	public id: number
	public name: string

	constructor(team: any) {
		this.id = team.id
		this.name = team.name
	}
}
