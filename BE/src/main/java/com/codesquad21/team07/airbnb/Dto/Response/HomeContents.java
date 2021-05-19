package com.codesquad21.team07.airbnb.Dto.Response;

import com.codesquad21.team07.airbnb.Domain.Province;
import com.codesquad21.team07.airbnb.Domain.Theme;

import java.util.ArrayList;
import java.util.List;

public class HomeContents {

    private List<Province> province = new ArrayList<>();
    private List<Theme> theme = new ArrayList<>();

    public HomeContents(List<Province> province, List<Theme> theme) {
        this.province = province;
        this.theme = theme;
    }

    public List<Province> getCity() {
        return province;
    }

    public List<Theme> getTheme() {
        return theme;
    }
}
