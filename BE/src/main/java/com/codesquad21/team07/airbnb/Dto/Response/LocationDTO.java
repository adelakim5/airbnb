package com.codesquad21.team07.airbnb.Dto.Response;

import com.codesquad21.team07.airbnb.Domain.Location;

public class LocationDTO {

    private final Long id;

    private final String address; //INFO. "인천광역시,남동구,구월동"

    private final Double latitude;

    private final Double logitude;

    public static LocationDTO of(Location location){
        return new LocationDTO(location);
    }

    public LocationDTO(Location location) {
        this.id = location.getId();
        this.address = concatAddress(location.getCity(),location.getDistrict(),location.getNeighborhood(),location.getTown());
        this.latitude = location.getLatitude();
        this.logitude = location.getLogitude();
    }

    //TODO. 인자가 너무많음 나중에 줄일 것, 빈 문자열일 경우에 대한 예외처리도 하기
    private String concatAddress(String city, String district, String neighborhood, String town) {
        if(!town.equals("")){
            return (city+","+district+","+neighborhood+","+town);
        }else{
            return (city+","+district+","+neighborhood);
        }
    }


    public Long getId() {
        return id;
    }

    public String getAddress() {
        return address;
    }

    public Double getLatitude() {
        return latitude;
    }

    public Double getLogitude() {
        return logitude;
    }
}
