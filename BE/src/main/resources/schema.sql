DROP TABLE IF EXISTS Location;
DROP TABLE IF EXISTS City;
DROP TABLE IF EXISTS Theme;
DROP TABLE IF EXISTS Room;

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
    id        BIGINT PRIMARY KEY AUTO_INCREMENT,
    name      VARCHAR(45)  NOT NULL comment '인기여행지 지역이름',
    thumbnail VARCHAR(300) NOT NULL comment '인기여행지 썸네일',
    latitude  BIGINT DEFAULT 0 comment '위도',
    longitude BIGINT DEFAULT 0 comment '경도'
);

CREATE TABLE IF NOT EXISTS Theme
(
    id        BIGINT PRIMARY KEY AUTO_INCREMENT,
    title     VARCHAR(45)  NOT NULL,
    thumbnail VARCHAR(300) NOT NULL
);

CREATE TABLE IF NOT EXISTS Room
(
    id                   BIGINT PRIMARY KEY AUTO_INCREMENT,
    location_id          BIGINT NOT NULL comment '숙소 위치',
    host_id              BIGINT NOT NULL comment '숙소 주인',
    theme_id             BIGINT comment '숙소 테마',
    latitude             BIGINT DEFAULT 0 comment '위도',
    longitude            BIGINT DEFAULT 0 comment '경도',
    name                 VARCHAR(45) comment '숙소 이름',
    rental_fee_per_night INT comment '1박 비용',
    weekly_price_factor  INT comment '주단위 결제 할인율',
    monthly_price_factor INT comment '월단위 결제 할인율',
    description          VARCHAR(200) comment '숙소 상세정보',
    person_capacity      INT comment '최대인원',
    bedrooms             INT comment '침실수, 0개면 원룸',
    beds                 INT comment '침대수',
    bathrooms            INT comment '욕실수'
);
