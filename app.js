$(document).ready(function(){
console.log("hi there");

var randomProperty=randomNumber(100,10000);
var randomSquareFoot=randomNumber(500,10000);
var randomPrice=randomNumber(1,35);


 
 //generateProperty();
//  randomProperty=randomNumber(100,10000);
//  randomSquareFoot=randomNumber(500,10000);
//  randomPrice=randomNumber(1,35);
// $("#container").append("<div class='property backgroundContainer'></div>");
//   var $el=$("#container").children().last();

//   $el.append("<p>Property ID: "+randomProperty+"</p>");
//    $el.append("<p> "+randomSquareFoot+" Sq.ft</p>");
//     $el.append("<p> $"+randomPrice+" /sq.ft</p>");
//      $el.append("<button class='removeButton'>Remove</button>");
//      $el.addClass(".backgroundContainer");
//      var delayTime=i *100;
//      $el.hide().delay(delayTime).slideDown();


$(".genkey").on("click", function(){
	generateProperty();

});

$("#container").on("click",".removeButton", function(){
	$(this).parent().slideUp(100);
	//$(this).parent().delay(100).remove();
	console.log("im clicking you")
});



function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function generateProperty(){

 randomProperty=randomNumber(100,10000);
 randomSquareFoot=randomNumber(500,10000);
 randomPrice=randomNumber(1,35);
$("#container").append("<div class='property backgroundContainer'></div>");
  var $el=$("#container").children().last();

  $el.append("<p>Property ID: "+randomProperty+"</p>");
   $el.append("<p> "+randomSquareFoot+" Sq.ft</p>");
    $el.append("<p> $"+randomPrice+" /sq.ft</p>");
     $el.append("<button class='removeButton'>Remove</button>");
     $el.addClass(".backgroundContainer");
    
     $el.hide().delay(100).slideDown();
    

};


});