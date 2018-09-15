/**
 * Función para agregar toda la logica de la administración 
 * usuarios
 */
var a,b,c,d;
function usersActionsController() {
    var a = document.querySelector("#guardar");
    a.addEventListener("click",Guardar);
      
}

    

    function Guardar(){
       
        var b= document.getElementById("usuario");
        var c = document.getElementById("mostrar")
        var d = document.getElementById("tabla");
        d.style.display= 'block';
        c.innerHTML=b.value;
        b.value="";

        
    
   }