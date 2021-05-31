DROP DATABASE airbnb;
CREATE DATABASE IF NOT EXISTS airbnb CHARACTER SET utf8;
USE airbnb;

CREATE TABLE IF NOT EXISTS Location
(
    id           BIGINT PRIMARY KEY AUTO_INCREMENT,
    city         VARCHAR(45)    NOT NULL COMMENT '특별시/광역시/도',
    district     VARCHAR(45)    NOT NULL COMMENT '군/구',
    latitude     DECIMAL(10, 5) NOT NULL COMMENT '위도',
    longitude    DECIMAL(10, 5) NOT NULL COMMENT '경도'
);

CREATE TABLE IF NOT EXISTS User
(
    id                BIGINT PRIMARY KEY AUTO_INCREMENT,
    name              varchar(45),
    email             varchar(100),
    profile_image_url varchar(200)
);

CREATE TABLE IF NOT EXISTS Theme
(
    id        BIGINT PRIMARY KEY AUTO_INCREMENT,
    title      VARCHAR(30)  NOT NULL,
    thumbnail VARCHAR(300) NOT NULL COMMENT '미리보기 이미지 링크'
);

CREATE TABLE IF NOT EXISTS City
(
    id        BIGINT PRIMARY KEY AUTO_INCREMENT,
    name      VARCHAR(45)    NOT NULL COMMENT '인기여행지 지역이름',
    thumbnail VARCHAR(300)   NOT NULL COMMENT '인기여행지 썸네일',
    latitude  DECIMAL(10, 5) NOT NULL COMMENT '위도',
    longitude DECIMAL(10, 5) NOT NULL COMMENT '경도'
);

CREATE TABLE IF NOT EXISTS Theme
(
    id        BIGINT PRIMARY KEY AUTO_INCREMENT,
    title     VARCHAR(45)  NOT NULL,
    thumbnail VARCHAR(300) NOT NULL
);

CREATE TABLE IF NOT EXISTS Host
(
    id                BIGINT PRIMARY KEY AUTO_INCREMENT,
    name              VARCHAR(45) UNIQUE NOT NULL COMMENT '닉네임 중복금지',
    picture_url VARCHAR(200)  NOT NULL COMMENT '호스트 프로필 사진'
);

CREATE TABLE IF NOT EXISTS Room
(
    id                     BIGINT PRIMARY KEY AUTO_INCREMENT,
    location_id            BIGINT UNIQUE NOT NULL COMMENT '숙소 위치 id',
    host_id                BIGINT UNIQUE NOT NULL COMMENT '숙소 주인 id',
    theme_id               BIGINT UNIQUE NOT NULL COMMENT '숙소 테마',
    latitude               BIGINT DEFAULT 0 COMMENT '위도',
    longitude              BIGINT DEFAULT 0 COMMENT '경도',
    name                   VARCHAR(145) COMMENT '숙소 이름',
    room_and_property_type VARCHAR(45) COMMENT '개인실, 집전체..',
    avg_rating             DECIMAL(3, 2) COMMENT '숙소 평점',
    rental_fee_per_night   INT COMMENT '1박 비용',
    weekly_price_factor    INT COMMENT '주단위 결제 할인율',
    monthly_price_factor   INT COMMENT '월단위 결제 할인율',
    description            VARCHAR(200) COMMENT '숙소 상세정보',
    person_capacity        INT COMMENT '최대인원',
    bedrooms               INT COMMENT '침실수, 0개면 원룸',
    beds                   INT COMMENT '침대수',
    bathrooms              INT COMMENT '욕실수',
    CONSTRAINT room_theme_fk FOREIGN KEY (theme_id) REFERENCES Theme (id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT room_location_fk FOREIGN KEY (location_id) REFERENCES Location (id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT room_host_fk FOREIGN KEY (host_id) REFERENCES Host (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Image
(
    id      BIGINT PRIMARY KEY AUTO_INCREMENT,
    room_id BIGINT       NOT NULL,
    type    VARCHAR(45)  NOT NULL COMMENT '이미지 종류: Big,Thumbnail..',
    url     VARCHAR(300) NOT NULL,
    FOREIGN KEY (room_id) REFERENCES Room (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Amenity
(
    id      BIGINT PRIMARY KEY AUTO_INCREMENT,
    room_id BIGINT NOT NULL,
    name    VARCHAR(30),
    FOREIGN KEY (room_id) REFERENCES Room (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Reservation
(
    id        BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '예약번호',
    room_id   BIGINT   NOT NULL COMMENT '방 번호',
    user_id   BIGINT   NOT NULL COMMENT '예약한 유저가 누구인지?',
    check_in  DATETIME NOT NULL,
    check_out DATETIME NOT NULL,
    FOREIGN KEY (room_id) REFERENCES Room (id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES User (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Review
(
    id          BIGINT PRIMARY KEY AUTO_INCREMENT,
    room_id     BIGINT NOT NULL,
    user_id     BIGINT UNIQUE NOT NULL COMMENT '리뷰한 유저가 누구인지?, 리뷰 한개만 작성되게 유니크',
    content     VARCHAR(300),
    star_rating DECIMAL(3,2),
    FOREIGN KEY (room_id) REFERENCES Room (id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES User (id) ON UPDATE CASCADE ON DELETE CASCADE
);
