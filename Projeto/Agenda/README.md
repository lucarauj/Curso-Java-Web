# Projeto Agenda de Contatos

<br>

<br>

## Tecnologias utilizadas

- Servidor Tomcat
- Java EE - Servlet e JSP
- Eclipse IDE
- MVC(Model View Controller)
- PostgreSQL
- JDBC(Java Database Connectivity)
- iText
- HTML, CSS, JavaScript

## Criando a tabela de contatos no PostgreSQL

```
create table contatos (
	idcon serial primary key,
	nome varchar(50) not null,
	fone varchar(15) not null,
	email varchar(50)
);
```
