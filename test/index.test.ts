import { hello } from '../src';

describe('hello', () => {
    test('it says hello', () => {
        expect(hello('world')).toBe('Hello world!');
    });
});
