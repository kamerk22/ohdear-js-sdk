export const error1 = {
	message: 'The given data was invalid.',
	errors: {
		url: ['The url field is required.'],
		team_id: ['The team id field is required.']
	}
}

export const error2 = {
	message: 'The given data was invalid.',
	errors: {
		url: ['You should enter a url that starts with either "http://" or "https://".'],
		team_id: ['You do not belong to that team.']
	}
}
