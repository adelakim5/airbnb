
# 자동완성 검색 쿼리
# 정규표현식을 사용해서, 일부만 검색해도 찾을 수 있음
# 성능이 얼마나 나쁠지는 잘 모르겠음.
SELECT DISTINCT id, CONCAT_WS(',',city,district,neighborhood,town) AS 'location'
FROM Location
WHERE
    CONCAT(city,district,neighborhood,town) REGEXP '리';


# 필드별 출력
SELECT DISTINCT id, city,district,neighborhood,town AS 'location'
FROM Location
WHERE
        CONCAT(city,district,neighborhood,town) REGEXP '리';
