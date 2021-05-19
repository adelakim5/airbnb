package com.codesquad21.team07.airbnb.Domain;

public class Province {

    private final Long id;

    private final String name;

    private final String thumbnail;

    private final Double latitude; //INFO. Room 중에서 인기도 1순위의 좌표로 업데이트한다.

    private final Double longitude;


    public Province(Long id, String name, String thumbnail, Double latitude, Double longitude) {
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
