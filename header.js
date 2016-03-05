$( document ).ready(function() {
	$('#form1').hide();
	$('#form2').hide();
    $("#target").click(function(){
        $("#form2").hide();
		$("#form1").show();
    });	
    $("#target2").click(function(){
		$("#form1").hide();
        $("#form2").show();
    });	

});


