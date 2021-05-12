CREATE DATABASE superquadros;
USE superquadros;

CREATE TABLE quadros(
	id int auto_increment not null,
    title varchar(255),
    height int not null,
    width int not null,
    price double,
    img varchar(255),
    PRIMARY KEY(id)
);



INSERT INTO quadros (title, height, width, price, img) VALUES ('O Grito', 100, 100, 10500.00, 'https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2020/09/o-grito.jpg');
INSERT INTO quadros (title, height, width, price, img) VALUES ('Monalisa', 100, 200, 25000.00, 'http://s2.glbimg.com/-X4_ye5KGlXA4Nezwyl-A7vxpwU=/e.glbimg.com/og/ed/f/original/2014/05/06/mona.jpg');
INSERT INTO quadros (title, height, width, price, img) VALUES ('A Noite Estrelada', 90, 150, 30000.00, 'https://cache.quantocustaviajar.com/blog/wp-content/uploads/2020/04/a-persistencia-da-memoria-1024x688.png');
INSERT INTO quadros (title, height, width, price, img) VALUES ('Latas de Sopa Campbell', 100, 100, 10000.00, 'https://cache.quantocustaviajar.com/blog/wp-content/uploads/2020/04/noite-estrelada.jpg');
INSERT INTO quadros (title, height, width, price, img) VALUES ('Abaporu', 100, 100, 10000.00, 'https://cache.quantocustaviajar.com/blog/wp-content/uploads/2020/04/abaporu-tarsila-do-amaral.png');
INSERT INTO quadros (title, height, width, price, img) VALUES ('A Persistência da Memória', 100, 100, 5000, 'https://cache.quantocustaviajar.com/blog/wp-content/uploads/2020/04/las-meninas-velazquez.jpg');
