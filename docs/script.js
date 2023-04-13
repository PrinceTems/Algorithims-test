
    
    
function add() {


    var val1 = +document.getElementById("int1").value;
    var val2 = +document.getElementById("int2").value;

    let ans = val1 + val2;
    let g = ans.toFixed(2);
        
    
        
     if(val1 == " " || val2 == " ") {
        return newFunction();

        function newFunction() {
            document.getElementById("ans").innerHTML = " Complete box values!!";
    
         }
     }
     
     else if(val1==val1 && val2==val2) {
         return trueFunction();
         
         function trueFunction() {
             document.getElementById("ans").innerHTML = `Ans ${g}`;
        }
    }

     else {
         return thisfunction();
         function thisfunction(){
             document.getElementById("ans").innerHTML = "Error!!";
         }
    }
    

}
    



    
    


