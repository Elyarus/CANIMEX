DROP SCHEMA IF EXISTS `canimex`;
CREATE SCHEMA IF NOT EXISTS `canimex`;
USE `canimex`;

DROP TABLE IF EXISTS directores_peliculas;
DROP TABLE IF EXISTS peliculas;
DROP TABLE IF EXISTS directores;


CREATE TABLE IF NOT EXISTS peliculas (
    id_pelicula INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    genero VARCHAR(50),
    editorial VARCHAR(255) NOT NULL,
    sinopsis TEXT,
    imagen TEXT,
    duracion INT
);

CREATE TABLE IF NOT EXISTS directores (
    id_director INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS directores_peliculas (
    id_pelicula INT,
    id_director INT,
    PRIMARY KEY (id_pelicula, id_director),
    FOREIGN KEY (id_pelicula) REFERENCES peliculas(id_pelicula) ON DELETE CASCADE,
    FOREIGN KEY (id_director) REFERENCES directores(id_director) ON DELETE CASCADE
);

INSERT INTO peliculas (titulo, genero, editorial, sinopsis, duracion) 
VALUES 
('Cowboy Bebop', 'Accion', 'Sunrise', 'In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as \"Cowboys\". The ragtag team aboard the spaceship Bebop are two such individuals.\nMellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member''s dark and mysterious past little by little. \nWell-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after.\n\n(Source: MAL Rewrite)', 26)
, ('Trigun', 'Ciencia Ficción', 'Madhouse', 'Vash the Stampede is the man with a $$60,000,000 bounty on his head. The reason: he''s a merciless villain who lays waste to all those that oppose him and flattens entire cities for fun, garnering him the title \"The Humanoid Typhoon.\" He leaves a trail of death and destruction wherever he goes, and anyone can count themselves dead if they so much as make eye contact—or so the rumors say. In actuality, Vash is a huge softie who claims to have never taken a life and avoids violence at all costs.\nWith his crazy doughnut obsession and buffoonish attitude in tow, Vash traverses the wasteland of the planet Gunsmoke, all the while followed by two insurance agents, Meryl Stryfe and Milly Thompson, who attempt to minimize his impact on the public. But soon, their misadventures evolve into life-or-death situations as a group of legendary assassins are summoned to bring about suffering to the trio. Vash''s agonizing past will be unraveled and his morality and principles pushed to the breaking point.\n[Written by MAL Rewrite]', 26)
, ('Slayers', 'Fantasía', 'SoftX', 'Powerful, avaricious sorceress Lina Inverse travels around the world, stealing treasures from bandits who cross her path. Her latest victims, a band of thieves, wait in ambush in a forest, thirsting for revenge. When Lina is about to effortlessly pummel her would-be attackers, the swordsman Gourry Gabriev suddenly announces his presence. Assuming Lina to be a damsel in distress, the foolish yet magnanimous man confronts the brigands in order to rescue her. After defeating them posthaste, the oblivious cavalier decides to escort Lina to Atlas City. Though not very keen on this idea, she ends up accepting his offer. However, without realizing it, Lina has chanced upon a mighty magical item among her most recent spoils. Now two mysterious men are hunting the young magician and her self-proclaimed guardian to obtain this powerful object for apparently nefarious purposes. This way they begin their adventure, one where the fate of the world itself may be at stake.\n[Written by MAL Rewrite]', 26)
;

INSERT INTO directores (nombre, apellido)
VALUES
-- Cowboy Bebop
('Shinichiro','Watanabe'),
-- Slayers
('Takashi','Watanabe'),
-- Trigun
('Satoshi','Nishimura')
;

-- directores_peliculas
INSERT INTO directores_peliculas (id_pelicula, id_director) VALUES
(1, 1),
(2, 3),
(3, 2);

COMMIT;

SELECT * FROM peliculas;