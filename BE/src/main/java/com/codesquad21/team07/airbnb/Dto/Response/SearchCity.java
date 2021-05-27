package com.codesquad21.team07.airbnb.Dto.Response;

import com.codesquad21.team07.airbnb.Domain.Location;

import java.util.ArrayList;
import java.util.List;

public class SearchCity {

    private final List<LocationDTO> locationList = new ArrayList<>();

    public List<LocationDTO> getLocationList() {
        return locationList;
    }

    public void add(Location location){
        this.locationList.add(LocationDTO.of(location));
    }
}
