class JQuery{

    constructor(){

        this.recorrido = false;

    }


    mostrarParrafos(){
        $("p").show();
    }

    ocultarParrafos(){
        $("p").hide();
    }

    modificaH1(){
        $("h1").text("H1 modificados con el botón de Modificar H1. ");
    }

    añadirDespuésH3(){
        $("h3").after("<p> Parrafo añadido con el botón Añadir después de H3. </p>");
       
    }

    eliminarP(){
        $("p").remove();
    }

    recorrerDOM() {
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> tipo elemento : <" + $(this).get(0).tagName +"> valor: "));
        });
    }

    sumarCeldas(){
           
            const filas=document.querySelectorAll("table tbody tr");
        
            filas.forEach((fila) => {
        
            const tds=fila.querySelectorAll("td");
        
            let total=0;
        
            for(let i=1; i<tds.length-1; i++) {
        
                total+=parseFloat(tds[i].innerHTML);
        
            }
        
            tds[tds.length-1].innerHTML=total.toFixed(2);
        
            });
        
            const columnas=document.querySelectorAll("table thead tr th");
        
            const totalFila=document.querySelectorAll("table tfoot tr td");

        
            for(let i=1; i<columnas.length; i++) {
        
                let total=0;
        
                filas.forEach((fila) => {
        
                    total+=parseFloat(fila.querySelectorAll("td")[i].innerHTML);
        
                });
        
                totalFila[i].innerHTML=total.toFixed(2);
        
            }

    }




}

var jq = new JQuery();