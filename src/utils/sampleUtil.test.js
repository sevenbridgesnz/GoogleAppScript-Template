import addNumbers from './sampleUtil';

describe('sample util test', () => {

    beforeEach(() => {
    })

    afterEach(() => {
    })

    const testCases = [
        { a: 1, b: 2, expected: 3 },
        { a: 2, b: 2, expected: 4 },
        { a: 3, b: 2, expected: 5 }
    ]

    testCases.forEach(test => {
        it(`Should add two numbers ${test.a} and ${test.b} which should be ${test.expected}`, () => {
            const res = addNumbers(test.a, test.b);
            expect(res).toEqual(test.expected);
        });
    });
})
