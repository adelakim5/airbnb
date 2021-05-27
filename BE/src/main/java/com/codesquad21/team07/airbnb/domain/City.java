package com.codesquad21.team07.airbnb.domain;

import com.codesquad21.team07.airbnb.dto.response.CityDTO;

public class City {

    private final Long id;

    private final String name;

    private final String thumbnail;

    private final Double latitude; //INFO. Room 중에서 인기도 1순위의 좌표로 업데이트한다.

    private final Double longitude;


    //TODO. 인기 여행지의 지역을  나타내는 클래스이므로, 위도, 경도는 해당 지역의 숙소 리스트중에서 별점이 가장 높은 숙소의 좌표로 업데이트한다.
    public City(CityDTO cityDto){
        this.id = cityDto.getId();
        this.name = cityDto.getName();
        this.thumbnail = cityDto.getThumbnail();
        this.latitude = cityDto.getLatitude();
        this.longitude = cityDto.getLongitude();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public Double getLatitude() {
        return latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public static City update(CityDTO cityDto){ //INFO. 도메인 모델을 이렇게 써도 되는건지 모르겠다..
        return new City(cityDto);
    }

}
