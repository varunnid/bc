function submitTransaction(){
    $.post( "/getData", function( data ) {
       console.log(data);
      });

}