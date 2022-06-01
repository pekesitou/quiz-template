        //arreglo respuestas correctas uwuwuwuwuwu
        let correctas = [1,2,1,3,3,1,2,2,2]
        //arreglo dnd se guardan las rspuestas dl usuario
        let opcion_elegida=[];
        
        let cantidad_correctas=0;
        
            //fnc q toma el num d preg / input elegido d la preg
            function respuesta(num_pregunta, seleccionada) {
                //guarda la respuesta elegida
                opcion_elegida[num_pregunta] = seleccionada.value;
        
                //el sg codigo = color blnco
                //fondo inputs = elegir opcion
                //id d seleccion section correspondiente
                ud="p" + num_pregunta;
            
                labels = document.getElementById(id).childNodes;
                labels[3].style.backgroundColor = "white";
                labels[5].style.backgroundColor = "white";
                labels[7].style.backgroundColor = "white";
        
                //color label seleccionado
                seleccionada.parentNode.style.backgroundColor = "#cec0fc";
            }
        
            //funcion respuestas correctas
            function corregir() {
                cantidad_correctas = 0;
                for(i=0; i < correctas.length;i++) {
                    if(correctas[i]==opcion_elegida[i]) {
                        cantidad_correctas++;
                    }
                }
        
                document.getElementById("resultado").innerHTML = cantidad_correctas;
            }