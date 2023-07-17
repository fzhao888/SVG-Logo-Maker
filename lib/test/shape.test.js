const Shape = require('../shape');

// create Shape testing suite
describe('Shape', () => {
    // // test render throws error
    describe('render', () => {
        it('should throw an error when the render is called', () => {
            // Arrange
            const testMe = new Shape();
            const err = new Error("Child class must implement render() method.");

            // Act  && Assert
            expect(() => testMe.render()).toThrowError(err);

        });
    });

});



