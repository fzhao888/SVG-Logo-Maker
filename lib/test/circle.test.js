const Circle = require('../circle');


// testing suit for Circle
describe('Circle', () => {
    //test setColor with color as text
    describe('setColor', () => {
        it('should set the color to blue',() => {
        // Arrange
            const expected = '<circle cx="150" cy="100" r="80" fill="blue" />'; 
            const testMe = new Circle();

        // Act
            testMe.setColor('blue');

        // Assert
            expect(testMe.render()).toEqual(expected);

        });
    });
});

// testing suit for Circle
describe('Circle', () => {
    //test setColor with color as hexidemical
    describe('setColor', () => {
        it('should set the color to #0000FF (blue)',() => {
        // Arrange
            const expected = '<circle cx="150" cy="100" r="80" fill="#0000FF" />'; 
            const testMe = new Circle();

        // Act
            testMe.setColor('#0000FF'); 

        // Assert
            expect(testMe.render()).toEqual(expected);

        });
    });
});