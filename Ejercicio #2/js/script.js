$(document).ready(function () {
    
    $("#Listar").click(function (e) {
        e.preventDefault();
  
        var Nombre= $("#nombre").val() +' '+ $("#apellido").val();
        var fecha = new Date( $("#fecha").val());
  
        var Fecha_Actual = new Date();
        var Edad = (parseInt((Fecha_Actual - fecha) / (1000 * 60 * 60 * 24 * 365)));
  
        var Correo = $("#nombre").val().substring(0,1) + $("#apellido").val().replace(/ /g, "") + fecha.getFullYear() + '@elpoli.edu.co';
       
        
        let fila = `<tr>
  
            <td>${Nombre}</td>
            <td>${Edad}</td>
            <td>${Correo}</td>
            
          </tr>`
  
      $("table").append(fila)

      
      $("#nombre").val('');
      $("#apellido").val('');
      $("#fecha").val('');
        
  
      });
  
      
  
   

});