package com.codesquad21.team07.airbnb.dto.response;

import com.codesquad21.team07.airbnb.domain.City;

public class CityDTO {

    private Long id;

    private String name;

    private String thumbnail;

    private Double latitude; //INFO. Room 중에서 인기도 1순위의 좌표로 업데이트한다.

    private Double longitude;

    public CityDTO() {
    } // JSON 데이터를 객체로 만드는 과정에서 어떤 생성자를 갖고 있는지 모르기 때문에 기본 생성자를 호출

    public CityDTO(City city) {
        this.id = city.getId();
        this.name = city.getName();
        this.thumbnail = city.getThumbnail();
        this.latitude = city.getLatitude();
        this.longitude = city.getLongitude();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public static CityDTO of(City city) {
        return new CityDTO(city);
    }
}
