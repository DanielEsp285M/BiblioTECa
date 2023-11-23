create database BiblioTECa;
use BiblioTECa;

create table Libros
(
	idLibro int auto_increment not null PRIMARY KEY,
    Titulo varchar(100),
    Autor varchar(50),
    ISBN varchar(19),
    Editorial varchar(50),
    Anio_Publi int,
    Cant_Disp int,
    Sinopsis varchar(150),
    Categorias varchar(100),
    Etiquetas varchar(150)
);

create table Usuarios
(
	idUsuario int auto_increment not null primary KEY,
    Nombre varchar(50),
    ApellidoP varchar(50),
    ApellidoM varchar(50),
    TipoUsu varchar(10),
    CantidadLibros int
);

INSERT INTO Libros (Titulo, Autor, ISBN, Editorial, Anio_Publi, Cant_Disp, Sinopsis, Categorias, Etiquetas)
VALUES 
('Prueba', 'Felipe Peralta', 'ISBN0-5569-5356-8', 'Pueblito Chido', 2007, 10, 'Mucho texto......................', 'SCI-FI, TERROR', 'Terror, Romance');

INSERT INTO Usuarios (Nombre, ApellidoP, ApellidoM, TipoUsu, CantidadLibros)
values
('Daniel', 'Espino', 'Morales', 'Admin', 10);

select*from libros;
select*from usuarios;