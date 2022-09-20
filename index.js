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
// Do not try to edit please
var form = document.getElementById("my-form");
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Thanks for your submission!";
      status.style.textAlign = "center";
      status.style.marginTop="5%";
      status.style.fontWeight="800";
      status.style.fontSize="larger";
      status.style.color="#00629b";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
      status.style.backgroundColor = "#ff7878";
    });
}
form.addEventListener("submit", handleSubmit);
