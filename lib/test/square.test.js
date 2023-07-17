const { test } = require('node:test');
const Square = require('../square');

//create Square testing suite
describe('Square', () => {
    //test setColor with color as text
    describe('setColor', () => { 
        it('should set the color to blue', () => {
            // Arrange
            const expected = '<rect width="100%" height="100%" fill="blue" />';
            const testMe = new Square();

            // Act
            testMe.setColor('blue');

            // Assert
            expect(testMe.render()).toEqual(expected);
            
        });
    });
});


describe('Square', () => {
    //test setColor with color as hexidemical
    describe('setColor', () => { 
        it('should set the color to #0000FF (blue)', () => {
            // Arrange
            const expected = '<rect width="100%" height="100%" fill="#0000FF" />';
            const testMe = new Square();

            // Act
            testMe.setColor('#0000FF');

            // Assert
            expect(testMe.render()).toEqual(expected);
            
        });
    });
});

