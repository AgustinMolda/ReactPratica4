export default class Input{
 
    constructor(partentID, type){
        this.partentID = partentID;
        this.type = type;

    }
    //importante leer Read me
    render(){
        let app = document.getElementById(this.partentID);

        const myInput =  app.innerHTML + "<input type " + type +">";
    }

}