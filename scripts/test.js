describe("pow", function () {

    describe("возводит x в степень 3", function () {
        function makeTest(x) {
            let expected = x ** 3;

            it(` ${x} в степени 3 будет ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x < 5; x++) {
            makeTest(x);
        }
    });

    it ("Для отрицательных n возвращает NaN", function() {
        assert.isNaN(pow(2, -1));
    });

    it ("Для дробных n возвращает NaN", function () {
        assert.isNaN(pow(2, 1.5));
    });
});