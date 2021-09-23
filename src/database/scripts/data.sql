-- genero

INSERT INTO generos (id, name) VALUES (1, 'ROCK ARGENTINO'); -- 
INSERT INTO generos (id, name) VALUES (2, 'CUARTETO CORDOBES'); -- 
INSERT INTO generos (id, name) VALUES (3, 'CUMBIA'); -- 

-- artista

INSERT INTO artistas (id, nombre, apellido) VALUES (1, 'ANDRES', 'MARTINEZ'); -- 
INSERT INTO artistas (id, nombre, apellido) VALUES (2, 'RODRIGO', 'BUENO'); -- 
INSERT INTO artistas (id, nombre, apellido) VALUES (3, 'LEO', 'MATTIOLI'); -- 

-- albumes

INSERT INTO albumes (id, nombre, duracion) VALUES (1, 'VERDE PAISAJE DEL INFIERNO', '89'); -- 
INSERT INTO albumes (id, nombre, duracion) VALUES (2, 'LA MANO DE DIOS', '76'); -- 
INSERT INTO albumes (id, nombre, duracion) VALUES (3, 'AY AMOR', '59'); -- 

-- canciones

INSERT INTO canciones (id, titulo, duracion, genero_id, album_id, artista_id) VALUES (0, 'MARIA Y JOSE', '3.12', 1, 1, 1); -- 
INSERT INTO canciones (id, titulo, duracion, genero_id, album_id, artista_id) VALUES (1, 'LABIOS DE SEDA', '2.32', 1, 1, 1); -- 
INSERT INTO canciones (id, titulo, duracion, genero_id, album_id, artista_id) VALUES (2, 'LUZ DE MARFIL', '1.42', 1, 1, 1); -- 
INSERT INTO canciones (id, titulo, duracion, genero_id, album_id, artista_id) VALUES (3, 'LA MANO DE DIOS', '3.42', 2, 2, 2); -- 
INSERT INTO canciones (id, titulo, duracion, genero_id, album_id, artista_id) VALUES (4, 'CABECITA', '5.42', 2, 2, 2); -- 
INSERT INTO canciones (id, titulo, duracion, genero_id, album_id, artista_id) VALUES (5, 'TODO ME LLEVA A TI', '4.22', 2, 2, 2); -- 
INSERT INTO canciones (id, titulo, duracion, genero_id, album_id, artista_id) VALUES (6, 'AY AMOR', '2.42', 3, 3, 3); -- 
INSERT INTO canciones (id, titulo, duracion, genero_id, album_id, artista_id) VALUES (7, 'ME PREOCUPA SIN TI', '2.42', 3, 3, 3); -- 
INSERT INTO canciones (id, titulo, duracion, genero_id, album_id, artista_id) VALUES (8, 'TE NECESITO', '1.42', 3, 3, 3); -- 
INSERT INTO canciones (id, titulo, duracion, genero_id, album_id, artista_id) VALUES (9, 'CUENTALE', '2.42', 3, 3, 3); -- 
