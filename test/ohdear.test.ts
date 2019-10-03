import OhDear from '../src/Ohdear'

it('should return a OhDear Object', () => {
	expect(new OhDear('Test')).toBeInstanceOf(OhDear)
})
