$(document).scroll(function()
{
   if($(this).scrollTop()>10)
   {
       $("#anim").removeClass("pad");
    }
    else{
        $("#anim").addClass("pad");
        
   }

})