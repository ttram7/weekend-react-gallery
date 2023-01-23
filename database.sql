CREATE TABLE photos (
	id SERIAL PRIMARY KEY,
	path VARCHAR(50) NOT NULL,
	title VARCHAR (80) NOT NULL,
	description VARCHAR (150) NOT NULL,
	likes NUMERIC (10) NOT NULL
);

INSERT INTO photos (path, title, description, likes)
VALUES ('images/balance.jpg','Balance','Photo of rocks of various sizes being stacked on top of each other.', 0),
    ('images/goat_small.jpg','Small Goat', 'Photo of a goat taken at Glacier National Park.', 0),
    ('images/read_coffee.jpg','Book and Coffee','Photo of an open book next to a cup of coffee on a wooden table.',0);