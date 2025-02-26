$(document).ready(function () {
    var num = [];
    var con=[];
    var click=0;

    $("#Listar").click(function (e) {
        e.preventDefault();
        click=click+1;
        var i=0;
        while(i<5){
       con.push(1);
       

       let Nombre = 'Estudiante' + AleatorioNombre(random(1,15));
       var Fecha_Nacimiento = new Date();
       Fecha_Nacimiento.setDate(random(1, 30));
       Fecha_Nacimiento.setMonth(random(1, 12));
       Fecha_Nacimiento.setFullYear(random(1990, 2005));
       var Fecha = Fecha_Nacimiento.getFullYear();
       var Fecha_Actual = new Date();
       var Edad = (parseInt((Fecha_Actual - Fecha_Nacimiento) / (1000 * 60 * 60 * 24 * 365)));
       let GeneroNum = random(1,2);
       let Genero;

       if(GeneroNum == 1){
          Genero = 'Mujer';
       }
       else{
           Genero = 'Hombre';
       }
     
       let Img;

       if(GeneroNum== 1 && Edad >= 18 ){
         Img='<img  src="./assets/img/usuario1.png" width="140" height="150">';
       }
       if(GeneroNum== 2 && Edad >= 18 ){
        Img='<img  src="./assets/img/usuario2.png" width="140" height="150">';
       }
       if(GeneroNum== 1 && Edad < 18 ){
        Img='<img  src="./assets/img/usuario3.png" width="140" height="150">';
       }
       if(GeneroNum== 2 && Edad < 18 ){
        Img='<img  src="./assets/img/usuario4.png" width="140" height="150">';
       }
       let Notas=[];
       let j=random(1, 5);
       let promedio=0;
       

       for(var k=0;k<j;k++){
        Notas.push((Math.random() * (5.0 - 0.0 ) + 0.0).toFixed(1));
        
       }
       var total = 0;

       Notas.forEach (function(numero){
        total += parseFloat(numero);
    });


       promedio=(parseFloat(total)/Notas.length).toFixed(1);

       let concepto;

       if(promedio >= 3.5 ){
         concepto='<img  src="./assets/img/aprobado.png" width="140" height="150">';
       }
       if(promedio < 3.5 ){
        concepto='<img  src="./assets/img/reprobado.png" width="140" height="150">';
       }
       

        let fila = `<tr>
        <td>${con.length}</td>
        <td>${Nombre}</td>
        <td>${Fecha}</td>
        <td>${Edad}</td>
        <td>${Genero}</td>
        <td>${Img}</td>
        <td>${Notas.toString()}</td>
        <td>${promedio}</td>
        <td>${concepto}</td>
    
      </tr>`

        $("table").append(fila)
       
       
  
        
       
      
       function random(min, max) {
       
        return Math.floor(Math.random() * (max - min + 1) + min);
      }


       function AleatorioNombre(aux) {

        var numero = aux;
        
        
        if(num.length <15 ){

            if($.inArray(numero, num) == -1){
                num.push(numero);
                return numero;
                
             } 
             else {
                return AleatorioNombre(random(1,15));
                
             }
        }
      
      

       
      }
      i++;
    }
     if(click == 3){
        $("#Listar").attr('disabled', true);
     }
      });
      $("#Recorrer").click(function (e) {
        e.preventDefault();
        let conta=0,contr=0;
        
        $("tr").each(function () { 
            if($(this).find("td").eq(7).html() >= 3.5){
             conta++;
            }
            if($(this).find("td").eq(7).html() < 3.5 ){
              contr++;
            } 
      
               
          });
            
            $("#Aprueban").text('Numero de Aprobados: '+conta);
            $("#Reprueban").text('Numero de Reprobados: '+contr);
            
      
      
    
        
            
        });
   
   

});