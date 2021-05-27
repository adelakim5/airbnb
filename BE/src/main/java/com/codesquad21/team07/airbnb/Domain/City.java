package com.codesquad21.team07.airbnb.Domain;

public class City {

    private final Long id;

    private final String name;

    private final String thumbnail;

    private final Double latitude; //INFO. Room 중에서 인기도 1순위의 좌표로 업데이트한다.

    private final Double longitude;


    //TODO. 인기 여행지의 지역을  나타내는 클래스이므로, 위도, 경도는 해당 지역의 숙소 리스트중에서 별점이 가장 높은 숙소의 좌표로 업데이트한다.
    public City(Long id, String name, String thumbnail, Double latitude, Double longitude) {
        this.id = id;
        this.name = name;
        this.thumbnail = thumbnail;
        this.latitude = latitude;
        this.longitude = longitude;
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
}
