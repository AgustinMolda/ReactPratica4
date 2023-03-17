export default class Table{
    constructor(parentID,rows, column){
        this.parentID = parentID;
        this.rows = rows;
        this.column = column;
    }

    render(){
        let app = document.getElementById(this.parentID);
        
        if(rows == 1 && this.column == 1){
            const table = app.innerHTML + "<table> <tr><td></td> </tr> </table> "; 
        }

        if(rows == 2 && this.column == 2){
            const table = app.innerHTML + "<table> <tr><td></td></tr>  <tr><td></td></tr> </table> "; 
        }


        if(rows == 3 && this.column == 3){
            const table = app.innerHTML + "<table> <tr><td></td></tr>   <tr><td></td></tr>  <tr><td></td></tr> </table> "; 
        }
      
      
      


    }


}