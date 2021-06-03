package com.codesquad21.team07.airbnb.dtoGroup.response;

import java.util.ArrayList;
import java.util.List;

public class SearchCity {

    private List<LocationDTO> locationList = new ArrayList<>();

    public SearchCity(List<LocationDTO> locationDTO) {
        this.locationList = locationDTO;
    }

    public List<LocationDTO> getLocationList() {
        return locationList;
    }
}
