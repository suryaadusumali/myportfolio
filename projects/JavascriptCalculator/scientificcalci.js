$(function(){
    var $answer = $("#scn");
    var a;
    var b;
    function changeSign(input){
         if($answer.val.substring(0,1)=="-"){
             var w = $answer.val();
             w = w.val().substring(1,w.length);
         }
         else{
             var e = $answer.val();
             e ="-"+e;
         }            
    }
    
    $(".black ").on('click', function(){
        var res = $(this).val();
        console.log(res);
        console.log($("#scn").val());
        if(res === "SIN"){
            var e = Math.sin($("#scn").val() * Math.PI / 180);
            console.log(e);
            $("#scn").val(e);  
        }
        else if(res === "COS"){
            var e = Math.cos($("#scn").val() * Math.PI / 180);
            console.log(e);
            $("#scn").val(e);  
        }
        else if(res === "TAN"){
            var e = Math.tan($("#scn").val() * Math.PI / 180);
            console.log(e);
            $("#scn").val(e);  
        }
        else if(res === "ABS"){
            var e = Math.abs($answer.val());
            $answer.val(e);
        }
        else if(res === "Sqrt"){
            var e = Math.sqrt($answer.val());
            $answer.val(e);
        }
        else if(res === "%"){
            var b = $answer.val();
            console.log(b);
            var e = (b / 100 ) * $answer.val() ;
            $answer.val(e);
        }
        else if(res === "ln"){
             var e = Math.E($answer.val());
            $answer.val(e);
        }
        else if(res === "LOG"){
             var e = Math.log($answer.val());
            $answer.val(e);
        }
        else if(res === "¶"){   
            var e = $answer.val() * 3.14159265;
            $answer.val(e);
        }
        else if(res === "CLR"){
            $answer.val('');
        }
        else if(res === "("){
            console.log('0');
            $answer.val('(');
        }
        else if(res === ")"){
            $answer.val(')');
        }
        else if(res === "±"){
            var e = $answer.val() * -1;
            $answer.val(e);
        }
        else if(res === "EXP"){
            var e = Math.exp($answer.val());
            $answer.val(e);
        }
        else if(res === "x²"){
         var e = $answer.val() * 2;
            console.log(e);
            $answer.val(e);  
        }
        
        $('#scn').val(e);
    });
     $(".fraction ").on('click', function(){
            var x = 1 / $answer.val();
            $answer.val(x);
         });
    $('.delete').on('click', function(){
       var tot = $(this).val();
       if(tot === "DEL"){
           var el = $("#scn").val();
           el = el.substring(0, el.length - 1);
           $answer.val(el);
       }
    });
    
});