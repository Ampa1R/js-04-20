const { pow } = require('../script');

describe('Функция pow', () => {
    it('должна вернуть 9 при аргументах 3, 2', () => {
        expect( pow(3, 2) ).toBe(9);
    });

    it('должна возвращать null при аргументах null, 2', () => {
        expect( pow(null, 2) ).toBeNull();
    });

    it('должна возвращать null при аргументах 2, null', () => {
        expect( pow(2, null) ).toBeNull();
    });
});
