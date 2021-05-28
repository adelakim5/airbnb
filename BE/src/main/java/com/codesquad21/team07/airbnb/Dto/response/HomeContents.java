package com.codesquad21.team07.airbnb.dto.response;

import com.codesquad21.team07.airbnb.domain.City;
import com.codesquad21.team07.airbnb.domain.Theme;

import java.util.ArrayList;
import java.util.List;

public class HomeContents {

    private List<City> city = new ArrayList<>();
    private List<Theme> theme = new ArrayList<>();

    public HomeContents(List<City> city, List<Theme> theme) {
        this.city = city;
        this.theme = theme;
    }

    public List<City> getCity() {
        return city;
    }

    public List<Theme> getTheme() {
        return theme;
    }
}
