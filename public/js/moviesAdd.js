window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', ()=>{
        titulo.style.color = "red"
    }) 

    let estadoSecreto = 0;
    let input = document.querySelector("#titulo")

    input.addEventListener('keypress', (e)=>{
        switch(e.key){
            case "S":
                if(estadoSecreto == 0){
                    estadoSecreto = 1;
                }else{
                    estadoSecreto = 0
                }
            break;
            case "E":
                if(estadoSecreto == 1){
                    estadoSecreto = 2
                }else if(estadoSecreto == 4){
                    estadoSecreto = 5
                }else{
                    estadoSecreto = 0
                }
            break;
            case "C":
                if(estadoSecreto == 2){
                    estadoSecreto = 3;
                }else{
                    estadoSecreto = 0
                }
            break;
            case "R":
                if(estadoSecreto == 3){
                    estadoSecreto = 4;
                }else{
                    estadoSecreto = 0
                }
            break;
            case "T":
                if(estadoSecreto == 5){
                    estadoSecreto = 6;
                }else{
                    estadoSecreto = 0
                }
            break;
            case "O":
                if(estadoSecreto == 6){
                    estadoSecreto = 0;
                    window.alert("SECRETO MAGICO")
                }else{
                    estadoSecreto = 0
                }
            break;
            default:
                estadoSecreto = 0;
            break;
        }
        console.log(estadoSecreto)
        console.log(e.key)
    })

}