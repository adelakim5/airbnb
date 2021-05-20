package com.codesquad21.team07.airbnb.Dto.Response;

import java.util.ArrayList;
import java.util.List;

public class SearchCity {

    private final List<CityInfo> cityInfoList;

    public SearchCity() {
        this.cityInfoList = new ArrayList<>();
    }

    public List<CityInfo> getCityInfoList() {
        return cityInfoList;
    }

    public void add(CityInfo cityInfo){
        cityInfoList.add(cityInfo);
    }
}
