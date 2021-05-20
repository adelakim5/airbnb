package com.codesquad21.team07.airbnb.Controller;

import com.codesquad21.team07.airbnb.Domain.City;
import com.codesquad21.team07.airbnb.Domain.Theme;
import com.codesquad21.team07.airbnb.Dto.Response.HomeContents;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api")
public class HomeApi {

    @GetMapping("home")
    private HomeContents home() {
        City city1 = new City(1L, "서울", "http://imgurl", 12.2, 5.3);
        City city2 = new City(2L, "의정부시", "http://imgurl", 32.2, 15.3);
        City city3 = new City(3L, "대구", "http://imgurl", 42.2, 55.3);

        Theme theme1 = new Theme(1L, "자연생활을 만끽할 수 있는 숙소","http://imgurl");
        Theme theme2 = new Theme(2L, "독특한 공간","http://imgurl");
        Theme theme3 = new Theme(3L, "반려동물을 위한 공간","http://imgurl");


        List<City> cities = new ArrayList<>();
        cities.add(city1);
        cities.add(city2);
        cities.add(city3);

        List<Theme> themes = new ArrayList<>();
        themes.add(theme1);
        themes.add(theme2);
        themes.add(theme3);

        return new HomeContents(cities,themes);
    }

}
