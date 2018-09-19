/**
 * Función para manejar toda la logica de control de versiones
 */

var Commits ={"messaje":"" ,"hash":"","text_version":"","user_id":"" };
var id =0;

function versionerActionsController() {
    a2 = document.getElementById("ver-text");
    b2 = document.getElementById("commander");
    c2 = document.getElementById("inp-command");
    b2.addEventListener("click",accion,true);
    usu="";
    

}
function accion(){
    hash = GenerarHash();
    
    id = asignarid();
    alert(id);
    alert(hash); 
    vc = c2.value;
    var comando = vc.split(" -m");    
    if(comando[0] == "commit"){
        Commits["messaje"] = a2.value;
        Commits["hash"]=hash;
        Commits["user_id"]=id;
        Commits["text_version"]=comando[1];
        alert(Commits);
        alert(Commits.hash);
    }

    }
    function GenerarHash() {
        var letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        con =Math.round(aleatorionum(100,1000));
        con2 =Math.round(aleatorionum(100,1000));
        index = Math.round(aleatorioletra(0,26));
        index2 = Math.round(aleatorioletra(0,26));
        hash1= con+letras[index]+letras[index2]+con2;

        function aleatorionum(min, max) {
            return Math.random() * (max - min) + min; 
          }
          function aleatorioletra(min, max) {
            return Math.random() * (max - min) + min; 
          }
          return hash1;

     }
     function asignarid(){
         var cont = 0;
       if (Users.first_name!=""){
           
           if (usu == Users.first_name ){
               
                return id;
           }else{ 
            usu = Users.first_name;         
           if(id>0){
               cont=id+1;
            }else {
                cont++;
            }}
           
           return cont;
       }
       alert ("no se ha iniciado sesion") ;
       return 0;
     }