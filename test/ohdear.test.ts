import OhDear from './../src/OhDear'

it('should return a OhDear Object', () => {
	expect(new OhDear('Test')).toBeInstanceOf(OhDear)
})
