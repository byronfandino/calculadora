var caracter, num1=0, num2=0, total = 0, ultOperacion="", operIgual="", teclaIgual=0;
var calculadora = {
    teclaSeccion: document.querySelectorAll(".tecla"),
    display: document.getElementById("display"),
    funcionTecla : function (elemento, evento, funcion){
        elemento.addEventListener(evento, funcion, false);
    },
    suma: function(n1, n2){
        return n1+n2;
    },
    resta: function(n1, n2){
        return n1-n2;
    },
    multip: function(n1, n2){
        return n1*n2;
    },
    division: function(n1, n2){
            return n1/n2;
    },
    igual: function(n1, n2){

        if (operIgual=="suma"){
            total = calculadora.suma (n1, n2);

        }else if(operIgual=="resta"){
            total = calculadora.resta(n1, n2);
            
        }else if(operIgual=="multiplicacion"){
            total = calculadora.multip(n1, n2);

        }else if(operIgual=="division"){
            total = calculadora.division(n1, n2);
        }
        num1=total;
        verificarTotal();  
    }
}
var resultado = calculadora.display;

function asignarTeclaNum(numero){
    if (resultado.textContent!="ERROR!"){
        if (resultado.textContent=="0"){
            resultado.innerHTML= numero;
        }else{
            //Verificar si el punto se encuentra en alguna posición
            var punto = resultado.textContent.indexOf(".");
            
            //Si el punto no está entonces regresará un valor negativo
            if (punto<0){
                //Se restringe hasta 8 la cantidad de digitos
                if (resultado.textContent.length < 8){
                    resultado.innerHTML= resultado.textContent + numero;
                }
            }else{
                //Pero si el punto está se amplia en 1 la cantidad de digitos aceptada
                if (resultado.textContent.length < 9){
                    resultado.innerHTML= resultado.textContent + numero;
                }
            }
        }

    }
}

function asignarOperacion(operacion){
    /*Si la variable ultOperacion no está vacia es porque ya se había asignado el primer
      numero a la variable num1, y nos queda enviar el segundo valor a la variable num2*/
      if (ultOperacion!=""){
    
        num2=parseFloat(resultado.textContent);
        
        if (ultOperacion == operacion){
            console.log("----BLOQUE 1-----");
            console.log("num1 = ", num1);
            console.log("ultOperacion es:", ultOperacion);
            console.log("Operacion por parametro es:", operacion);
            if (ultOperacion=="suma"){
                total = calculadora.suma (num1, num2);                        
            }
            if (ultOperacion=="resta"){
                total = calculadora.resta (num1, num2);                        
            }
            if(ultOperacion=="multiplicacion"){
                total = calculadora.multip (num1, num2);                        
            }
            if(ultOperacion=="division"){
                total = calculadora.division (num1, num2);                        
            }
            num1= total;
            resultado.innerHTML="";
            console.log("num2 = ", num2);
            console.log("La última operación ejecutada es: ", ultOperacion)
            console.log("El total es: ", total);
            console.log("El nuevo valor de num1 es = ", num1);
            console.log("------------------------------------------------");
        }else{
            console.log("----BLOQUE 2-----");
            console.log("ultOperacion es:", ultOperacion);
            console.log("Operacion por parametro es:", operacion);
            if (ultOperacion=="suma"){
                total = calculadora.suma (num1, num2);
                console.log("Se ejecutó la operación pendiente: ", ultOperacion)
                ultOperacion=operacion;
            }else if (ultOperacion=="resta"){
                total = calculadora.resta (num1, num2);                        
                console.log("Se ejecutó la operación pendiente: ", ultOperacion)
                ultOperacion=operacion;                        
            }else if(ultOperacion=="multiplicacion"){
                total = calculadora.multip (num1, num2);                        
                console.log("Se ejecutó la operación pendiente: ", ultOperacion)
                ultOperacion=operacion;                        
            }else if(ultOperacion=="division"){
                total = calculadora.division (num1, num2);                        
                console.log("Se ejecutó la operación pendiente: ", ultOperacion)
                ultOperacion=operacion;                        
            }
            num1= total;
            resultado.innerHTML="";
            console.log("num2 = ", num2);
            console.log("El total es: ", total);
            console.log("Ahora num1 es: ", num1);
            console.log("------------------------------------------------");
        }
    }
    
    /*Si la variable ultOperacion está vacía
    es porque no se ha digitado el primer número
    por lo tanto se agrega el numero a la variable num1*/
    if (ultOperacion==""){
        num1=parseFloat(resultado.textContent);
        console.log("num1 = ", num1);
        ultOperacion=operacion;
        resultado.innerHTML = "";
    }
    teclaIgual=0;
}

function verificarTotal(){

    if (total==Infinity || total=="-Infinity"){
        console.log("El total es: ", total);
        alert("Al dividir un numero entre 0 su resultado es Indeterminado");
        resultado.innerHTML="ERROR!";
    }else{
        //1. pasamos a string el valor de la variable total
        var totalString = total.toString();
        console.log("totalString = ", totalString);
    
        //3.Verificar si el punto se encuentra en alguna posición
        var punto =  totalString.indexOf(".");

        //4. Si el punto no está entonces regresará un valor negativo
        if (punto<0){
    
            //5. Verificamos si supera los 8 caracteres
            if (totalString.length > 8){
                //devolvemos 8 caracteres sin punto
            resultado.innerHTML = total.toPrecision(8);
            }else{
                resultado.innerHTML= total;
            }
        }else{
            if (totalString.length>9){
                //devolvemos 8 caracteres incluyendo el punto
                resultado.innerHTML = total.toPrecision(8);
            }else{
                resultado.innerHTML= total;
            }
        }
        console.log("La última operación ejecutada es: ", operIgual)
        console.log("El total es: ", total);
        console.log("------------------------------------------------");
    }
}

function iniciar(){
    /*---------------Animación reducir y reestablecer tamaño de los botones-------------------*/
    for (var i = 0; i<calculadora.teclaSeccion.length; i++){
            calculadora.funcionTecla(calculadora.teclaSeccion[i], "mousedown", function(){
                this.style="border:4px solid transparent";
            })
            calculadora.funcionTecla(calculadora.teclaSeccion[i], "mouseup", function(){
                this.style="border:0px";
            })
        }

    /*---------------Asignar el valor de cada tecla al evento click-------------------------*/
    //tecla suma
    calculadora.funcionTecla(calculadora.teclaSeccion[18], "click", function(){
        if (resultado.textContent != "" && resultado.textContent != "ERROR!"){
            asignarOperacion("suma");
        }
    });

    //tecla restar
    calculadora.funcionTecla(calculadora.teclaSeccion[11], "click", function(){
        if (resultado.textContent != "" && resultado.textContent != "ERROR!"){
            asignarOperacion("resta");
        }
    });
    
    //tecla multiplicar
    calculadora.funcionTecla(calculadora.teclaSeccion[7], "click", function(){
        if (resultado.textContent != "" && resultado.textContent != "ERROR!"){
            asignarOperacion("multiplicacion");
    }
    });
    
    //tecla division
    calculadora.funcionTecla(calculadora.teclaSeccion[3], "click", function(){
        if (resultado.textContent != ""&& resultado.textContent != "ERROR!" ){
            asignarOperacion("division");
        }     
    });
    
    //tecla ON
    calculadora.funcionTecla(calculadora.teclaSeccion[0], "click", function(){
        resultado.innerHTML= 0;
        num1=0;
        num2=0;
        caracter = "";
        total=0;
        ultOperacion="";
        teclaIgual=0;
        operIgual="";
        console.clear();
    });

    //tecla Cambio de signo
    calculadora.funcionTecla(calculadora.teclaSeccion[1], "click", function(){
        if (resultado.textContent!="0" && resultado.textContent !="" && resultado.textContent != "ERROR!"){
            caracter=resultado.textContent;
            //Se verifica si la primera posición contiene el signo -
            if (caracter[0]=="-"){
                //Se procede a eliminar la primera posición del string
                num1=num1*(-1);
                resultado.innerHTML = caracter.substr(1);
            }else{
                num1=num1*(-1);
                resultado.innerHTML = "-" + resultado.textContent
            }
        }
    });

    //tecla punto
    calculadora.funcionTecla(calculadora.teclaSeccion[16], "click", function(){
        if (resultado.textContent != "ERROR!"){
            
                    //Verificar si el punto se encuentra en alguna posición
                    var punto = resultado.textContent.indexOf(".");
                    
                    //Si el punto no está entonces regresará un valor negativo
                    if (punto<0){
                        if (resultado.textContent.length <= 7){
                            /*Si el display está vacío o su contenido es 0, 
                              debe agregar '0.' en el display, de lo contrario
                              solo se agrega el punto a la derecha del numero*/
                            if(resultado.textContent=="" || resultado.textContent == "0"){
                                resultado.textContent="0.";
                            }else{
                                resultado.innerHTML = resultado.textContent + "."
                            }
                        }
                    }
        }

    });

    //tecla igual
    calculadora.funcionTecla(calculadora.teclaSeccion[17], "click", function(){
        /*1. Si la variable ultOperacion está vacía es porque no se ha realizado
             ninguna operacion por ende no se ejecuta nada*/ 
             
        console.log("ultOperacion = ", ultOperacion);
        if (ultOperacion!="" && teclaIgual==0){

            /*Al presionar la tecla igual, se debe ejecutar la última operación 
            pendiente por realizar*/
            
            num2=parseFloat(resultado.textContent);
            operIgual=ultOperacion;
            ultOperacion="";
            calculadora.igual(num1, num2);
            
            teclaIgual++;
        }else{
            /*Como cada una de las teclas de los operadores asigna 0 a la variable
              teclaIgual, entonces si su valor es igual o mayor a 1 es porque
              no se ha realizado una operación diferente después de haber oprimido la
              tecla igual y ejecutamos la última operación nuevamente*/
    
            calculadora.igual(num1, num2);
            teclaIgual++;
        }
    });

    /***NUMEROS***/
    //tecla 1
    calculadora.funcionTecla(calculadora.teclaSeccion[12], "click", function(){
        asignarTeclaNum(1);
    });
    
    //tecla 2
    calculadora.funcionTecla(calculadora.teclaSeccion[13], "click", function(){
        asignarTeclaNum(2);
    });
    
    //tecla 3
    calculadora.funcionTecla(calculadora.teclaSeccion[14], "click", function(){
        asignarTeclaNum(3);
    });
    
    //tecla 4
    calculadora.funcionTecla(calculadora.teclaSeccion[8], "click", function(){
        asignarTeclaNum(4);
    });
    
    //tecla 5
    calculadora.funcionTecla(calculadora.teclaSeccion[9], "click", function(){
        asignarTeclaNum(5);
    });
    
    //tecla 6
    calculadora.funcionTecla(calculadora.teclaSeccion[10], "click", function(){
        asignarTeclaNum(6);
    });
            
    //tecla 7
    calculadora.funcionTecla(calculadora.teclaSeccion[4], "click", function(){
       asignarTeclaNum(7);
    });
    
    //tecla 8
    calculadora.funcionTecla(calculadora.teclaSeccion[5], "click", function(){
        asignarTeclaNum(8);
    });

    //tecla 9
    calculadora.funcionTecla(calculadora.teclaSeccion[6], "click", function(){
        asignarTeclaNum(9);
    });

    //tecla 0
    calculadora.funcionTecla(calculadora.teclaSeccion[15], "click", function(){
        asignarTeclaNum(0);
    });
}

iniciar();