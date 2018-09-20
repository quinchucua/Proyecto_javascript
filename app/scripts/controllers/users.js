/**
 * Función para agregar toda la logica de la administración 
 * usuarios
 */

Users={"first_name":"","Last_name":"","email":"","profession":""}
function usersActionsController() {
    var a = document.querySelector("#guardar");
    a.addEventListener("click",Guardar);
      
}

    

    function Guardar(){
        b= document.getElementById("usuario");
        c = document.getElementById("mostrar");
        d = document.getElementById("tabla");
        usuario=b.value;
        nombre = usuario.split(" ");
        Users["first_name"]=nombre[0];
        Users["Last_name"]=nombre[1];
        Users["email"]=document.getElementById("email").value;
        Users["profesion"]=document.getElementById("profesion").value;
        alert(Users.first_name+" nombre");
        alert(Users.Last_name+ " Apellido");
        alert(Users.email+ " correo");
        alert(Users.profesion);
        d.style.display= 'block';
        c.innerHTML=usuario;
        b.value="";

        
    
   }