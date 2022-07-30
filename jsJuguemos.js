/* ------------- para rompecabezas ---------------- */

let items = document.querySelectorAll('img')
let destino1 = document.querySelector("#cajasoltar1")
let destino2 = document.querySelector("#cajasoltar2")
let destino3 = document.querySelector("#cajasoltar3")


/* -- en las imagenes a trasladar -- */

for(var i=0; i<items.length; i++){
    items[i].addEventListener('dragstart', inicioTraslado)
    items[i].addEventListener('dragend', finTraslado);
}

function inicioTraslado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('src'));
}

function finTraslado(e){
    elemento=e.target;
    elemento.style.visibility="hidden";
}

destino1.addEventListener('dragenter', function(e){
    e.preventDefault()
});
destino1.addEventListener('dragover', function(e){
    e.preventDefault()
});
destino1.addEventListener('drop', soltado1);

function soltado1(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    destino1.innerHTML=`<img src="${id}" style="height:420px" width="290px">`
}

destino2.addEventListener('dragenter', function(e){
    e.preventDefault()
});
destino2.addEventListener('dragover', function(e){
    e.preventDefault()
});
destino2.addEventListener('drop', soltado2);

function soltado2(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    destino2.innerHTML=`<img src="${id}" style="height:420px" width="290px">`
}

destino3.addEventListener('dragenter', function(e){
    e.preventDefault()
});
destino3.addEventListener('dragover', function(e){
    e.preventDefault()
});
destino3.addEventListener('drop', soltado3);

function soltado3(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    destino3.innerHTML=`<img src="${id}" style="height:420px" width="290px">`
}

function reiniciar() {
    window.location.reload();
}





