$('#passbutton').click(function(){
	$("#opening").css("display","none");
	var removeDiv=document.getElementById("openingvideo");
	var parent=removeDiv.parentNode;
	parent.removeChild(removeDiv);


});
var textarray=[">>  Hello, My name is Jiu and Im going to travel this world!", ">>  My goal is to beat everyone and catch Pokemon as much as I can.",">>  No matter where I am, in tall grass or behind a rock, I will find you.",">>  Pokemon, gonna catch \'em all!",">>  Press the PASS button" ];
var k=0;
$('#nextbutton').click(function(){

	changetext=textarray[k];
	$('#textmessage').html(changetext);
	k++;

});

