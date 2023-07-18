const inquirer = require('inquirer');
const {join} = require('path');
const fs = require('fs/promises');
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square'); 
const Shape = require('./shape');

class CLI { 
    run() {
        // start of svg string taken from mdn web docs
        let svg = `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">`;

        // prompts user for text, color, and shape
        inquirer.
            prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Please enter up to three characters: ',
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Please enter text color (can be hexidecimal number): ',
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Please pick a shape: ',
                    choices:
                        [
                            'Circle',
                            'Triangle',
                            'Square'
                        ],
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Please enter shape color (can be hexidecimal number): ',
                },
                
            ])
            .then((data) => { 
                let shape = new Shape();
                // creates either a circle, triangle, or circle based on user input
                switch (data.shape) {
                    case 'Circle':
                        shape = new Circle();
                        break;

                    case 'Triangle':
                        shape = new Triangle();
                        break;

                    case 'Square':
                        shape = new Square();
                        break;
                }

                // adds color to svg
                shape.setColor(data.shapeColor);
                svg += `\n ${shape.render()}`;

                // adds text to svg
                svg += `\n <text x='50%' y='50%' fill='${data.textColor}' font-weight='bold' font-size='24px' text-anchor='middle' dominant-baseline='middle'> ${data.text.toUpperCase()} </text>`;

                // closes svg tag
                svg += `\n </svg>`;
                
              

                return svg;
            })
            .then((svg) => {
                // write file to logo.svg  
                fs.writeFile(
                    join(__dirname,'..','examples','logo.svg'), svg,
                    (err) => err ? console.log(err) : console.log('Successfully generated logo.svg.'), 
                );
            })
            .catch((err) => {
                console.log('Error detected. ');
                console.log(err);
            });
    }
}

module.exports = CLI;
