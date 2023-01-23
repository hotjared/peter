const okButton = document.querySelector(".okbutton");
var fish = document.querySelector(".fish");

okButton.addEventListener("click", function() {
    fish.remove();
    console.log("hi");
})
