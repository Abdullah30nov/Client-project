function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function validateInput(input) { if (input.value.length > 11) { input.value = input.value.slice(0, 11); } }

function alert(){
  var input = document.querySelectorAll("input");
  console.log(input.value)
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });
}

// \
// function delformdata(){
//   var formtext = document.getElementById("form");
//   formtext.innerHTML = ""
//   console.log(formtext)

// }