export default class Button{
    
    
    constructor(partentID, text){
        this.partentID = partentID;
        this.text = text;
    }
    //importante leer Read me

    render(){
            let app = document.getElementById(this.partentID);

            const Buton = app.innerHTML + "<button> " + text + " </bnutton>";
    }


    
}