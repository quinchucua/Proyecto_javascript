/**
 * Función para manejar toda la logica de control de versiones
 */
var a2,b2,c2;
var texto,comando;
function versionerActionsController() {
    a2 = document.getElementById("ver-text");
    b2 = document.getElementById("commander");
    b2.addEventListener("click",accion,true);
    c2 = document.getElementById("inp-command");
    

}
function accion(){
    texto = a2.value;
    comando = c2.value;

    alert(texto +" "+comando);
}