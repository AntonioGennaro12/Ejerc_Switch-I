const pagina            = document.querySelector("body");
const selectOpcionColor = document.querySelector("select");

function cambioEstetica() {
    
    switch (selectOpcionColor.value) {
        case "color-1":
            pagina.style.color = "white";
            pagina.style.backgroundColor = "black";
            break;
        case "color-2":
            pagina.style.color = "violet";
            pagina.style.backgroundColor = "green";
            break;
        case "color-3":
            pagina.style.color = "pink";
            pagina.style.backgroundColor = "brown";
            break;
        default:
            pagina.style.color = "blue";
            pagina.style.backgroundColor = "white";
    }

}