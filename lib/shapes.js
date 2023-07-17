class Shape{
    constructor(){
        this.color = ""; 
    }

    setColor(color){
        this.color = color;
    }

    render(){
        throw new Error("Child class must implement render() method.");
    }
}

module.exports = Shape;