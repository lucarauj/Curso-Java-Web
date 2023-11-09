
 function validar() {
	let nome = formContato.nome.value;
	let telefone = formContato.telefone.value;
	
	if(nome === '') {
		alert('Nome é obrigatório');
		formContato.nome.focus();
		return false;
	} else if(telefone === '') {
		alert('Telefone é obrigatório');
		formContato.telefone.focus();
		return false;
	} else {
		document.forms["formContato"].submit();
	}
}