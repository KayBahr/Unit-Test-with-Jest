const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const {fromEuroToDollar} = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.2;

    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("One dollar should be about 133.9 yen", function(){
    const {fromDollarToYen} = require('./app.js');

    const yen = fromDollarToYen(3);

    const expected = 3 * 133.9;

    expect(fromDollarToYen(3)).toBeCloseTo(401.7);
});

test("One yen should be around 0.006 pounds", function(){
    const {fromYenToPound} = require('./app.js');

    const pound = fromYenToPound(650);

    const expected = 650 / 166.3;

    expect(fromYenToPound(650)).toBeCloseTo(3.91);
});