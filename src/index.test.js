import { awesomeFunction } from './index';

describe('Basic test', () => {
	test('Test 1', () => {
		const res = awesomeFunction();

		expect(typeof res).toBe('string');
	});
});
