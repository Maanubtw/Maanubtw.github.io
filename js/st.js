$(function(){
	$("#btnEnviar").click(function(){
		var nome = $("#txtNome").val();
		/*alert("Bem Vindo (a)" +nome);*/
		alert("Sua mensagem foi enviada com sucesso "+nome);
	});
});

$(function(){
	$("#btnEnviar").click(function(){
		var nome = $("#txtNome").val();
	
	});
	$("li").click(function(){
		$(this).hide();
		
	});
	$('#boxEsconder').hide();
	$("#btnEsconder").click(function(){
		$("#boxEsconder").toggle(1000);
	});

		
});