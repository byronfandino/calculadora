var primerChar;
var calculadora = {
    teclaSeccion: document.querySelectorAll(".tecla"),
    display: document.getElementById("display"),
    funcionTecla : function funcionTecla(elemento, evento, funcion){
        elemento.addEventListener(evento, funcion, false);
    }
}
var resultado = calculadora.display;

function validarTeclaNum(num){
    if (resultado.textContent=="0"){
        resultado.innerHTML= num;
    }else{
        resultado.innerHTML= resultado.textContent + num;
    }
}

function iniciar(){
    /*---------------Animación reducir tamaño de los botones-------------------*/
    for (var i = 0; i<calculadora.teclaSeccion.length; i++){
            calculadora.funcionTecla(calculadora.teclaSeccion[i], "mousedown", function(){
                this.style="border:4px solid transparent";
            })
            calculadora.funcionTecla(calculadora.teclaSeccion[i], "mouseup", function(){
                this.style="border:0px";
            })
        }

    /*---------------Asignar el valor de cada tecla------------------------------*/
    //tecla ON
    calculadora.funcionTecla(calculadora.teclaSeccion[0], "click", function(){
        resultado.innerHTML= 0;
    });
    
    //tecla Cambio de signo
    calculadora.funcionTecla(calculadora.teclaSeccion[1], "click", function(){
        if (resultado.textContent!="0"){
            primerChar=resultado.textContent;
            //Se verifica si la primera posición contiene el signo -
            if (primerChar[0]=="-"){
                //Se procede a eliminar la primera posición del string
                resultado.innerHTML = primerChar.substr(1);
            }else{
                resultado.innerHTML = "-" + resultado.textContent
            }
        }
    });
    
    //tecla dividido
    calculadora.funcionTecla(calculadora.teclaSeccion[3], "click", function(){
        // falta por asignar
    });

    //tecla multiplicar
    calculadora.funcionTecla(calculadora.teclaSeccion[7], "click", function(){
        // falta por asignar
    });
    
    //tecla restar
    calculadora.funcionTecla(calculadora.teclaSeccion[11], "click", function(){
        // falta por asignar
    });
    
    //tecla punto
    calculadora.funcionTecla(calculadora.teclaSeccion[16], "click", function(){
        // falta por asignar
    });

    //tecla igual
    calculadora.funcionTecla(calculadora.teclaSeccion[17], "click", function(){
        // falta por asignar
    });

    //tecla suma
    calculadora.funcionTecla(calculadora.teclaSeccion[18], "click", function(){
        // falta por asignar
    });
    
    //tecla 7
    calculadora.funcionTecla(calculadora.teclaSeccion[4], "click", function(){
       validarTeclaNum(7);
    });
    
    //tecla 8
    calculadora.funcionTecla(calculadora.teclaSeccion[5], "click", function(){
        validarTeclaNum(8);
    });

    //tecla 9
    calculadora.funcionTecla(calculadora.teclaSeccion[6], "click", function(){
        validarTeclaNum(9);
    });

    //tecla 4
    calculadora.funcionTecla(calculadora.teclaSeccion[8], "click", function(){
        validarTeclaNum(4);
    });
    
    //tecla 5
    calculadora.funcionTecla(calculadora.teclaSeccion[9], "click", function(){
        validarTeclaNum(5);
    });
    
    //tecla 6
    calculadora.funcionTecla(calculadora.teclaSeccion[10], "click", function(){
        validarTeclaNum(6);
    });
    
    //tecla 1
    calculadora.funcionTecla(calculadora.teclaSeccion[12], "click", function(){
        validarTeclaNum(1);
    });
    
    //tecla 2
    calculadora.funcionTecla(calculadora.teclaSeccion[13], "click", function(){
        validarTeclaNum(2);
    });
    
    //tecla 3
    calculadora.funcionTecla(calculadora.teclaSeccion[14], "click", function(){
        validarTeclaNum(3);
    });
    
    //tecla 0
    calculadora.funcionTecla(calculadora.teclaSeccion[15], "click", function(){
        validarTeclaNum(0);
    });
}

iniciar();



