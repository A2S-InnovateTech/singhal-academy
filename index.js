document.getElementById("IX").style.display = "none";
document.getElementById("X").style.display = "none";
document.getElementById("XI").style.display = "none";
document.getElementById("XII").style.display = "none";

var opt;
var buttoninnerhtml;

document.querySelectorAll(".opt")[0].addEventListener("click", function () {
  opt = "IX";
  document.getElementById("IX").style.display = "block";
  document.getElementById("X").style.display = "none";
  document.getElementById("XI").style.display = "none";
  document.getElementById("XII").style.display = "none";
});

document.querySelectorAll(".opt")[1].addEventListener("click", function () {
  opt = "X";
  document.getElementById("IX").style.display = "none";
  document.getElementById("X").style.display = "block";
  document.getElementById("XI").style.display = "none";
  document.getElementById("XII").style.display = "none";
});

document.querySelectorAll(".opt")[2].addEventListener("click", function () {
  opt = "XI";
  document.getElementById("IX").style.display = "none";
  document.getElementById("X").style.display = "none";
  document.getElementById("XI").style.display = "block";
  document.getElementById("XII").style.display = "none";
});

document.querySelectorAll(".opt")[3].addEventListener("click", function () {
  opt = "XII";
  document.getElementById("IX").style.display = "none";
  document.getElementById("X").style.display = "none";
  document.getElementById("XI").style.display = "none";
  document.getElementById("XII").style.display = "block";
});

// document.getElementById("hidden-brand").style.display="none";
// document.getElementById("btn").addEventListener("click", () => {
//   var y = document.getElementById("btn").textContent;
//   if (y === "Online") {
//     document.getElementById("price").innerHTML = "1,000/-";
//     document.getElementById("btn").innerHTML = "Offline";
//     document.getElementById("btn").classList.remove("btn-success");
//     document.getElementById("btn").classList.add("btn-danger");
//     var x = document.getElementById("btn").textContent;
//   } else if (x === "Offline") {
//     document.getElementById("price").innerHTML = "500/-";
//     document.getElementById("btn").innerHTML = "Online";
//     document.getElementById("btn").classList.remove("btn-danger");
//     document.getElementById("btn").classList.add("btn-success");
//   }
// });
$("#btn").on("click", function () {
  if ($("#btn").text() === "Go Online") {
    $("#btn").text("Go Offline");
    $("#btn").removeClass("btn-success");
    $("#btn").addClass("btn-danger");
    $("#price").text("500/-");
  } else if ($("#btn").text() === "Go Offline") {
    $("#btn").text("Go Online");
    $("#btn").removeClass("btn-danger");
    $("#btn").addClass("btn-success");
    $("#price").text("1,000/-");
  }
});
