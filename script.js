var addListButton = document.getElementById("add-list");

addListButton.addEventListener("click", function() {
	console.log("button clicked");

	var addListPopUp = document.getElementById("add-list-popup");
	addListPopUp.style.display = "flex";

});

var removeListButton = document.getElementById("remove-list-pop");
console.log(removeListButton);

removeListButton.addEventListener("click",function(){
	var addListPopUp = document.getElementById("add-list-popup");
	addListPopUp.style.display = "none";
});


var addItemButton = document.getElementById("add-item");

addItemButton.addEventListener("click", function(){
	console.log("item button clicked")

	var addItemPopUp = document.getElementById("add-item-popup");
	addItemPopUp.style.display = "flex";
});

var removeItemButton = document.getElementById("remove-item-pop");
console.log(removeItemButton);

removeItemButton.addEventListener("click",function(){
	var addItemPopUp = document.getElementById("add-item-popup");
	addItemPopUp.style.display = "none";
});
