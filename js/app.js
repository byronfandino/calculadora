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
        if (n2==0){
            return n1/n2;
        }else{
            return n1/n2;
        }
    },
    igual: function(n1, n2){

        if (operIgual=="suma"){
            total = calculadora.suma (n1, n2);
            num1 = total;
            verificarTotal();
            
        }else if(operIgual=="resta"){
            total = calculadora.resta(n1, n2);
            num1= total;
            verificarTotal();
            
        }else if(operIgual=="multiplicacion"){
            total = calculadora.multip(n1, n2);
            num1= total;
            verificarTotal();

        }else if(operIgual=="division"){
            total = calculadora.division(n1, n2);
            num1= total;
            verificarTotal();
        }  
    }
}
var resultado = calculadora.display;

function asignarTeclaNum(numero){
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

function verificarTotal(){

    if (total==Infinity || total==NaN){
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
        
        /*Primero verificamos que si presionó la tecla suma
        es porque ya había digitado algún número*/
        if (resultado.textContent != ""){

            /*Si la variable ultOperacion no está vacia es porque ya se había asignado el primer
              numero a la variable num1, y nos queda enviar el segundo valor a la variable num2*/
            if (ultOperacion!=""){

                num2=parseFloat(resultado.textContent);
                console.log("num1 = ", num1);
                console.log("num2 = ", num2);
                
                if (ultOperacion=="suma"){

                    total = calculadora.suma (num1, num2);
                    num1= total;
                    resultado.innerHTML="";
                    console.log("La última operación ejecutada es: ", ultOperacion)
                    console.log("El total es: ", total);
                    console.log("------------------------------------------------");

                    //se debe ejecutar la operacion que se encuentra en la variable ultOperacion
                    // Y luego queda en la opción de suma esperando digitar el segundo numero

                }else if(ultOperacion=="resta"){
                    total = calculadora.resta(num1, num2);
                    console.log("Se ejecutó la operación pendiente: ", ultOperacion)
                    console.log("El total es: ", total);
                    num1= total;
                    ultOperacion="suma";
                    resultado.innerHTML="";
                    console.log("------------------------------------------------");

                }else if(ultOperacion=="multiplicacion"){
                    total = calculadora.multip(num1, num2);
                    console.log("Se ejecutó la operación pendiente: ", ultOperacion)
                    console.log("El total es: ", total);
                    num1= total;
                    ultOperacion="suma";
                    resultado.innerHTML="";
                    console.log("------------------------------------------------");

                }else if(ultOperacion=="division"){
                    total = calculadora.division(num1, num2);
                    console.log("Se ejecutó la operación pendiente: ", ultOperacion)
                    console.log("El total es: ", total);
                    num1= total;
                    ultOperacion="suma";
                    resultado.innerHTML="";
                    console.log("------------------------------------------------");
                }
            }

            /*Si la variable ultOperacion está vacía
            es porque no se ha digitado el primer número
            por lo tanto se agrega el numero a la variable num1*/

            if (ultOperacion==""){
                num1=parseFloat(resultado.textContent);
                console.log("num1 = ", num1);
                ultOperacion="suma";
                resultado.innerHTML = "";
            }
            teclaIgual=0;
        }
    });

    //tecla restar
    calculadora.funcionTecla(calculadora.teclaSeccion[11], "click", function(){
        
        /*Primero verificamos que si presionó la tecla restar
        es porque ya había digitado algún número*/
        if (resultado.textContent != ""){

            /*Si la variable ultOperacion no está vacia es porque ya se había asignado el primer
              numero a la variable num1, y nos queda enviar el segundo valor a la variable num2*/
            if (ultOperacion!=""){
                num2=parseFloat(resultado.textContent);
                console.log("num1 = ", num1);
                console.log("num2 = ", num2);
                                
                if (ultOperacion=="resta"){
                    total = calculadora.resta (num1, num2);
                    num1= total;
                    resultado.innerHTML="";
                    console.log("La última operación ejecutada es: ", ultOperacion)
                    console.log("El total es: ", total);
                    console.log("------------------------------------------------");

                    /*En caso de que la ultima operacion no sea resta, entonces se debe ejecutar 
                      la operacion que se encuentra en la variable ultOperacion
                      Y luego queda en la opción de resta esperando digitar el segundo numero*/
                }else if(ultOperacion=="suma"){
                    total = calculadora.suma(num1, num2);
                    console.log("Se ejecutó la operación pendiente: ", ultOperacion)
                    console.log("El total es: ", total);
                    num1= total;
                    ultOperacion="resta";
                    resultado.innerHTML="";
                    console.log("------------------------------------------------");

                }else if(ultOperacion=="multiplicacion"){
                    total = calculadora.multip(num1, num2);
                    console.log("Se ejecutó la operación pendiente: ", ultOperacion)
                    console.log("El total es: ", total);
                    num1= total;
                    ultOperacion="resta";
                    resultado.innerHTML="";
                    console.log("------------------------------------------------");

                }else if(ultOperacion=="division"){
                    total = calculadora.division(num1, num2);
                    console.log("Se ejecutó la operación pendiente: ", ultOperacion)
                    console.log("El total es: ", total);
                    num1= total;
                    ultOperacion="resta";
                    resultado.innerHTML="";
                    console.log("------------------------------------------------");
                }            
            }

            /*Si la variable ultOperacion está vacía
            es porque no se ha digitado el primer número
            por lo tanto se agrega el numero a la variable num1*/
            if (ultOperacion==""){
                num1=parseFloat(resultado.textContent);
                console.log("num1 = ", num1);
                ultOperacion="resta";
                resultado.innerHTML = "";
            }
            teclaIgual=0;
        }
    });
    
    //tecla multiplicar
    calculadora.funcionTecla(calculadora.teclaSeccion[7], "click", function(){

        /*Primero verificamos que si presionó la tecla multiplicacion
        es porque ya había digitado algún número*/
        if (resultado.textContent != ""){

            /*Si la variable ultOperacion no está vacia es porque ya se había asignado el primer
              numero a la variable num1, y nos queda enviar el segundo valor a la variable num2*/
            if (ultOperacion!=""){
                num2=parseFloat(resultado.textContent);
                console.log("num1 = ", num1);
                console.log("num2 = ", num2);
                
                if (ultOperacion=="multiplicacion"){
                    total = calculadora.multip (num1, num2);
                    num1= total;
                    resultado.innerHTML="";
                    console.log("La última operación ejecutada es: ", ultOperacion)
                    console.log("El total es: ", total);
                    console.log("------------------------------------------------");

                    //se debe ejecutar la operacion que se encuentra en la variable ultOperacion
                    // Y luego queda en la opción de multiplicacion esperando digitar el segundo numero
                }else if(ultOperacion=="resta"){
                    total = calculadora.resta(num1, num2);
                    console.log("Se ejecutó la operación pendiente: ", ultOperacion)
                    console.log("El total es: ", total);
                    num1= total;
                    ultOperacion="multiplicacion";
                    resultado.innerHTML="";
                    console.log("------------------------------------------------");

                }else if(ultOperacion=="suma"){
                    total = calculadora.suma(num1, num2);
                    console.log("Se ejecutó la operación pendiente: ", ultOperacion)
                    console.log("El total es: ", total);
                    num1= total;
                    ultOperacion="multiplicacion";
                    resultado.innerHTML="";
                    console.log("------------------------------------------------");

                }else if(ultOperacion=="division"){
                    total = calculadora.division(num1, num2);
                    console.log("Se ejecutó la operación pendiente: ", ultOperacion)
                    console.log("El total es: ", total);
                    num1= total;
                    ultOperacion="multiplicacion";
                    resultado.innerHTML="";
                    console.log("------------------------------------------------");
                }            
            }

            /*Si la variable ultOperacion está vacía
            es porque no se ha digitado el primer número
            por lo tanto se agrega el numero a la variable num1*/
            if (ultOperacion==""){
                num1=parseFloat(resultado.textContent);
                console.log("num1 = ", num1);
                ultOperacion="multiplicacion";
                resultado.innerHTML = "";
            }
            teclaIgual=0;
        }
    });
    
    //tecla dividido
    calculadora.funcionTecla(calculadora.teclaSeccion[3], "click", function(){
        /*Primero verificamos que si presionó la tecla division
        es porque ya había digitado algún número*/
        if (resultado.textContent != ""){
            
            /*Si la variable ultOperacion no está vacia es porque ya se había asignado el primer
              numero a la variable num1, y nos queda enviar el segundo valor a la variable num2*/
            if (ultOperacion!=""){
                num2=parseFloat(resultado.textContent);
                console.log("num1 = ", num1);
                console.log("num2 = ", num2);
                
                if (ultOperacion=="division"){
                    total = calculadora.division (num1, num2);
                    num1= total;
                    resultado.innerHTML="";
                    console.log("La última operación ejecutada es: ", ultOperacion)
                    console.log("El total es: ", total);
                    console.log("------------------------------------------------");

                    //se debe ejecutar la operacion que se encuentra en la variable ultOperacion
                    // Y luego queda en la opción de division esperando digitar el segundo numero
                }else if(ultOperacion=="resta"){
                    total = calculadora.resta(num1, num2);
                    console.log("Se ejecutó la operación pendiente: ", ultOperacion)
                    console.log("El total es: ", total);
                    num1= total;
                    ultOperacion="division";
                    resultado.innerHTML="";
                    console.log("------------------------------------------------");

                }else if(ultOperacion=="multiplicacion"){
                    total = calculadora.multip(num1, num2);
                    console.log("Se ejecutó la operación pendiente: ", ultOperacion)
                    console.log("El total es: ", total);
                    num1= total;
                    ultOperacion="division";
                    resultado.innerHTML="";
                    console.log("------------------------------------------------");

                }else if(ultOperacion=="suma"){
                    total = calculadora.suma(num1, num2);
                    console.log("Se ejecutó la operación pendiente: ", ultOperacion)
                    console.log("El total es: ", total);
                    num1= total;
                    ultOperacion="division";
                    resultado.innerHTML="";
                    console.log("------------------------------------------------");
                }            
            }

            /*Si la variable ultOperacion está vacía
            es porque no se ha digitado el primer número
            por lo tanto se agrega el numero a la variable num1*/
            if (ultOperacion==""){
                num1=parseFloat(resultado.textContent);
                console.log("num1 = ", num1);
                ultOperacion="division";
                resultado.innerHTML = "";
            }
            teclaIgual=0;
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
        if (resultado.textContent!="0" && resultado.textContent !=""){
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

    });

    //tecla igual
    calculadora.funcionTecla(calculadora.teclaSeccion[17], "click", function(){
        /*1. Si la variable ultOperacion está vacía es porque no se ha realizado
             ninguna operacion por ende no se ejecuta nada*/ 

        if (ultOperacion!=""){
            //2. Se verifica que no haya ningún error ocasionado por dividir algún valor entre 0
            if (total==Infinity || total== NaN){
                resultado.innerHTML="ERROR!";
                alert("Al dividir por 0 se obtiene un resultado Indeterminado");
            }else{
                
                /*Se verifica si se presionó la tecla igual anteriormente, es decir,
                  si su valor es mayor a 0*/
                if (teclaIgual>=1){

                    /*Como cada una de las teclas de los operadores asigna 0 a la variable
                      teclaIgual, entonces si su valor es igual o mayor a 1 es porque
                      no se ha realizado una operación diferente después de haber oprimido la
                      tecla igual y ejecutamos la última operación nuevamente*/

                    calculadora.igual(num1, num2);
                    teclaIgual++;
                }else{

                    /*Al presionar la tecla igual, se debe ejecutar la última operación 
                      pendiente por realizar*/
                    
                    num2=parseFloat(resultado.textContent);
                    operIgual=ultOperacion;
                    ultOperacion="";
                    console.log("num1 = ", num1);
                    console.log("num2 = ", num2);                    
                    calculadora.igual(num1, num2);

                    teclaIgual++;
                }
            }
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