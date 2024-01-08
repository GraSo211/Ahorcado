function crearHorca(){
    var horca =new Image();
    horca.src = "horca.png"
    horca.onload = function(){
        pincel.scale(0.5,0.5)
        pincel.drawImage(horca,600,100)
    }
}

function sortearPalabra(){
    var aleatorio = palabras[Math.floor(Math.random() * palabras.length)];
    return aleatorio;
}


function crearLineasPalabra(palabra){
    pincel.fillStyle="black";
    pincel.font = "100px Arial";
    switch(palabra.length){
        case 3:
            pincel.fillRect(290, 400, 50, 3);
            pincel.fillRect(390, 400, 50, 3);
            pincel.fillRect(490, 400, 50, 3);
            break;

        case 4:
            pincel.fillRect(250, 400, 50, 3);
            pincel.fillRect(350, 400, 50, 3);
            pincel.fillRect(450, 400, 50, 3);
            pincel.fillRect(550, 400, 50, 3);
            break;
        
        case 5:
            pincel.fillRect(200, 400, 50, 3);
            pincel.fillRect(300, 400, 50, 3);
            pincel.fillRect(400, 400, 50, 3);
            pincel.fillRect(500, 400, 50, 3);
            pincel.fillRect(600, 400, 50, 3);
            break;

        case 6:
            pincel.fillRect(150, 400, 50, 3);
            pincel.fillRect(250, 400, 50, 3);
            pincel.fillRect(350, 400, 50, 3);
            pincel.fillRect(450, 400, 50, 3);
            pincel.fillRect(550, 400, 50, 3);
            pincel.fillRect(650, 400, 50, 3);
            break;

        case 7:
            pincel.fillRect(100, 400, 50, 3);
            pincel.fillRect(200, 400, 50, 3);
            pincel.fillRect(300, 400, 50, 3);
            pincel.fillRect(400, 400, 50, 3);
            pincel.fillRect(500, 400, 50, 3);
            pincel.fillRect(600, 400, 50, 3);
            pincel.fillRect(700, 400, 50, 3);
            break;

        case 8:
            pincel.fillRect(50, 400, 50, 3);
            pincel.fillRect(150, 400, 50, 3);
            pincel.fillRect(250, 400, 50, 3);
            pincel.fillRect(350, 400, 50, 3);
            pincel.fillRect(450, 400, 50, 3);
            pincel.fillRect(550, 400, 50, 3);
            pincel.fillRect(650, 400, 50, 3);
            pincel.fillRect(750, 400, 50, 3);
            break;

    }
}

function dibujarLetraCorrecta(palabra, letra, i){
    pincel.fillStyle = "blue";


    switch(palabra.length){
        case 3:
            if(i == 0){
                pincel.fillText(letra, 595, 790);
            }else if(i == 1){
                pincel.fillText(letra, 795,790);
            }else{
                pincel.fillText(letra, 995,790);
            }
            break;

        case 4:
            if(i == 0){
                pincel.fillText(letra, 510,790);
            }else if(i == 1){
                pincel.fillText(letra, 725,790);
            }else if(i == 2){
                pincel.fillText(letra, 918,790);
            }else{
                pincel.fillText(letra, 1115,790);
            }
            break;
        
        case 5:
            if(i == 0){
                pincel.fillText(letra, 415,790);
            }else if(i == 1){
                pincel.fillText(letra, 610,790);
            }else if(i == 2){
                pincel.fillText(letra, 825,790);
            }else if(i == 3){
                pincel.fillText(letra, 1018,790);
            }else{
                pincel.fillText(letra, 1220,790);
            }
            break;

        case 6:
            if(i == 0){
                pincel.fillText(letra, 310,790);
            }else if(i == 1){
                pincel.fillText(letra, 510,790);
            }else if(i == 2){
                pincel.fillText(letra, 725,790);
            }else if(i == 3){
                pincel.fillText(letra, 918,790);
            }else if(i == 4){
                pincel.fillText(letra, 1120,790);
            }else{
                pincel.fillText(letra, 1320,790);
            }
            break;

        case 7:
            if(i == 0){
                pincel.fillText(letra, 208,790);
            }else if(i == 1){
                pincel.fillText(letra, 415,790);
            }else if(i == 2){
                pincel.fillText(letra, 625,790);
            }else if(i == 3){
                pincel.fillText(letra, 818,790);
            }else if(i == 4){
                pincel.fillText(letra, 1015,790);
            }else if(i == 5){
                pincel.fillText(letra, 1220,790);
            }else{
                pincel.fillText(letra, 1420,790);
            }
            break;

        case 8:
            if(i == 0){
                pincel.fillText(letra, 110,790);
            }else if(i == 1){
                pincel.fillText(letra, 310,790);
            }else if(i == 2){
                pincel.fillText(letra, 525,790);
            }else if(i == 3){
                pincel.fillText(letra, 720,790);
            }else if(i == 4){
                pincel.fillText(letra, 915,790);
            }else if(i == 5){
                pincel.fillText(letra, 1120,790);
            }else if(i == 6){
                pincel.fillText(letra, 1315,790);
            }else{
                pincel.fillText(letra, 1510,790);
            }
            break;

    }
}   

function dibujarLetraIncorrecta(letra, error){
    pincel.fillStyle = "black";
    switch(error){
        case 0:
            pincel.fillText(letra, 300, 1000);
            break;
        case 1:
            pincel.fillText(letra, 500, 1000);
            break
        case 2:
            pincel.fillText(letra, 700, 1000);
            break
        case 3:
            pincel.fillText(letra, 900, 1000);
            break
        case 4:
            pincel.fillText(letra, 1100, 1000);
            break
        case 5:
            pincel.fillText(letra, 1300, 1000);
            break
    }    
}

function dibujarHorca(errores){
    switch(errores){
        case 0:
        //cabeza
        var cabeza = new Image();
        cabeza.src = "cabeza.png";
        cabeza.onload = function(){
        pincel.drawImage(cabeza, 905, 325, 120, 100)
        }
        break;

        case 1:
        //cuerpo
        var cuerpo = new Image();
        cuerpo.src = "cuerpo.png";
        cuerpo.onload = function(){
        pincel.drawImage(cuerpo, 900, 425, 130, 140)
        }
        break;
        
        case 2:
        //mano izq
        var brazo = new Image();
        brazo.src = "brazo.png";
        brazo.onload = function(){
        pincel.drawImage(brazo, 823, 426, 80, 170)
        }
        break;

        case 3:
        //mano der
        var brazo1 = new Image();
        brazo1.src = "brazo1.png";
        brazo1.onload = function(){
        pincel.drawImage(brazo1, 1030, 424, 60, 170)
        }
        break;

        case 4:
        //pie izq
        var pierna = new Image();
        pierna.src = "pierna.png";
        pierna.onload = function(){
        pincel.drawImage(pierna, 897, 560  , 60, 140)
        }
        break;

        case 5:
        //pie der
        var pierna1 = new Image();
        pierna1.src = "pierna1.png";
        pierna1.onload = function(){
        pincel.drawImage(pierna1, 971, 560, 60, 140)
        }
        break;

    }
    
}

function derrota(palabra){
    Swal.fire({
        title: "DERROTA",
        text: "La palabra era "+palabra+ ". Mas Suerte la Proxima Vez...",
        icon: "error",
        confirmButtonText: "Volver al Inicio",
        backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true,
        customClass:{
            title: "tituloDerrota",
            closeButton: "botonDerrota"
        },
        confirmButtonColor:"#c20000",
        color: "#c20000"
    }).then(function(){
        window.location= "index.html"
    })
}

function victoria(){
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
    Swal.fire({
        title: "VICTORIA",
        text: "Felicidades...Ganaste!",
        icon: "success",
        confirmButtonText: "Volver al Inicio",
        backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true,
        customClass:{
            title: "tituloVictoria",
            closeButton: "botonVictoria"
        },
        confirmButtonColor:"#258d19",
        color: "#258d19"
    }).then(function(){
        window.location= "index.html"
    })  
}

function agregarPalabra(){
    Swal.fire({
        icon: "info",
        title: 'Ingrese una palabra: ',
        footer: "&#9888; Solo mayusculas y palabras menores a los 8 caracteres.",
        confirmButtonText: "Agregar",
        width: 600,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true,
        padding: '3em',
        color: '#716add',
        backdrop: `
        rgba(0,0,123,0.4)
        url("nyan-cat.gif")
        left top
        no-repeat
        `,  
        input:"text"
        }).then((palabra) =>{
            console.log(palabra.value);
            var res = /^\p{Lu}{3,8}$/gu.test(palabra.value);
            if(res){
                Swal.fire({
                    title: "Palabra agregada"
                })
                palabras.push(palabra.value);
            }else{
                Swal.fire({
                    title: "Palabra escrita en formato incorrecto"
                })
            }

        });


}

function registrarTeclas(palabra){
    var letraCorrecta = 0; 
    var letraUsada = [];
    window.addEventListener('keydown', function(e){
        var letraPresionada = e.key.toUpperCase()
        if(letraUsada.includes(letraPresionada)){
        }
        else{
            if(abecedario.includes(letraPresionada)){
                if(palabra.includes(letraPresionada)){       
                    for(var i = 0; i < palabra.length; i++){
                        if(letraPresionada == palabra[i]){
                            ++letraCorrecta;
                            dibujarLetraCorrecta(palabra, letraPresionada, i);
                            letraUsada.push(letraPresionada);
                        }
                        if(letraCorrecta == palabra.length){
                            victoria(palabra);
                        }
                    }
                }else{
                    dibujarHorca(error);
                    dibujarLetraIncorrecta(letraPresionada, error);
                    error++;
                    letraUsada.push(letraPresionada);
                    if(error == 6){
                        derrota(palabra);
                    }
                    
                }
            }
        }

    }) 

}

function iniciarJuego(){
        document.getElementById("iniciar").style.display = "none";
        document.getElementById("agregar").style.display = "none";
        crearHorca();
        var palabra = sortearPalabra();
        crearLineasPalabra(palabra);
        registrarTeclas(palabra)
}   

var palabras= ["PALABRA", "COMIDA", "PERRO", "GATO", "ANIMAL", "RICHARD","SOL", "COCO", "PATO", "MICAELA","PIZZA","CARRO","AVION","MOTO","PASTEL","LECHE","CHOCOLATE","CASA","MONTAÑA","MANZANA","PIÑA","LIBRO","CANCION","TELEFONO","CIUDAD","ACTOR","LAMPARA","COCINA","COCINERO","POLICIA","PALMERA","COCO","TELEVISION","PELICULA","PANADERO","EDIFICIO","PELOTA","JUGO","TECLADO","RATON","CAMA","TECHO","SUELO","CABLE","INTERNET","FOTO","PLANTA","MUÑECA","ZAPATO","VENTILADOR","CORTINA","CUADRO","PUERTA","ESPEJO","ESTATUA","BARCO","CAJA","ARAÑA","CUCHARA","LICUADORA","HORNO","ORANGUTAN","RELOJ","OSO","VASO","PLATO","TAZON","AVENA","BAÑO","PLAYA","SOL","LUNA","CANELA","FRESA","CEREZA","CORAZON","CELULAR", "PARLANTE", "TECLADO", "MESSI","AHORCADO","CAMA", "ESTERNON", "PIERNA", "FUTBOL"];
var abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var pantalla = document.getElementById("canvas");
var pincel = pantalla.getContext("2d");




var error = 0




