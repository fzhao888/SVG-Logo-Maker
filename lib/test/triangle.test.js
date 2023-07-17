const Triangle = require('../triangle'); 

// creates Triangle testing suite
describe('Triangle', () => {
    describe('setColor', () => {
        it('should set the color to blue', () => {
            // Arrange
            const expected = '<polygon points="150, 18 244, 182 56, 182" fill="blue">';
            const testMe =  new Triangle(); 

            // Act
            testMe.setColor('blue');

            // Assert
            expect(testMe.render()).toEqual(expected);
        });
    });
});

describe('Triangle', () => {
    describe('setColor', () => {
        it('should set the color to #0000FF (blue)', () => {
            // Arrange
            const expected = '<polygon points="150, 18 244, 182 56, 182" fill="#0000FF">';
            const testMe =  new Triangle(); 

            // Act
            testMe.setColor('#0000FF');

            // Assert
            expect(testMe.render()).toEqual(expected);
        });
    });
});
 
 