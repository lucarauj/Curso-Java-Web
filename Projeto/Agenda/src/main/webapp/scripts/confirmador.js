
 function confirmar(idcon) {
	let resposta = confirm("Confirma a exclusão?");
	
	if(resposta === true) {
		window.location.href = "delete?idcon=" + idcon;
	};
}