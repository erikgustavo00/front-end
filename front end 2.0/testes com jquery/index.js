$(function(){
    verificarclickmenu()
    function verificarclickmenu(){
        $('a').click(function(){
            var href = $(this).attr('href');
             $.ajax({
                    'beforeSend': function(){
                        console.log("antes de enviar");
                    },
                    'url':href,

                    'success':function(data){
                       // $('#conteiner').html(data);
                       $(data).appendTo('#conteiner').slideToggle(5000);
                    }    
            })
           
            return false;
        })
            
        
    }
});
 
 