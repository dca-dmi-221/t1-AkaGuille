class Buttons{
    constructor({type, 
        x, 
        y}){
        this.type = type;
        this.x = x;
        this.y = y;
    }

    show(){
        createButton(this.type);
        
    }
}