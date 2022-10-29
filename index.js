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

$(function(){
  $(document).bind("resize",function(){
   if($(this).width()<480){
     $(".connect").removeClass('shadow-sm');
   }
   else{
     $('.connect').addClass('shadow-sm');
   }
  }).resize();
});

$(".extra").hide();
$("#gallery-more").click(function(){


  if($("#gallery-more").html()==="show more..."){
  $(".extra").show(700);
  $("#gallery-more").html("show less");
  
  }
  else{
    $(".extra").hide(700);
    $("#gallery-more").html("show more...");
  }
});






// OWL CAROUSEL

// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 20,
//   nav: true,
//   autoplay: true,
//   center: true,
//   autoplayTimeout: 5000,
//   autoplayHoverPause: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 2,
//     },
//     1000: {
//       items: 3,
//     },
//   },
// });

// READ MORE BUTTON
let noOfCharac = 600;
      let contents = document.querySelectorAll(".content");
      contents.forEach((content) => {
        //if length is less than noOfCharac...
        //then hide read more button
        if (content.textContent.length < noOfCharac) {
          content.nextElementSibling.style.display = "none";
        } else {
          let displayText = content.textContent.slice(0, noOfCharac);
          let moreText = content.textContent.slice(noOfCharac);
          content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
        }
      });
      //readMore function
      function readMore(btn) {
        let post = btn.parentElement;
        post.querySelector(".dots").classList.toggle("hide");
        post.querySelector(".more").classList.toggle("hide");
        btn.textContent == "Read More"
          ? (btn.textContent = "Read Less")
          : (btn.textContent = "Read More");
      }

