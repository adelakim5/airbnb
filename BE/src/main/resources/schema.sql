DROP TABLE IF EXISTS Location;
DROP TABLE IF EXISTS City;

CREATE TABLE IF NOT EXISTS Location
(
    id           BIGINT PRIMARY KEY AUTO_INCREMENT,
    city         VARCHAR(45)  NOT NULL comment '특별시/광역시/도',
    district     VARCHAR(45)  NOT NULL comment '군/구',
    neighborhood VARCHAR(100) NOT NULL comment '동/읍',
    town         VARCHAR(100) NOT NULL comment '면/리',
    latitude     BIGINT DEFAULT 0 comment '위도',
    longitude    BIGINT DEFAULT 0 comment '경도'
);


CREATE TABLE IF NOT EXISTS City
(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    thumbnail VARCHAR(300) NOT NULL,
    latitude BIGINT DEFAULT 0,
    longitude BIGINT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS Theme
(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    thumbnail VARCHAR(300) NOT NULL
);
