package com.codesquad21.team07.airbnb.Controller;

import com.codesquad21.team07.airbnb.Domain.*;
import com.codesquad21.team07.airbnb.Dto.Response.CityInfo;
import com.codesquad21.team07.airbnb.Dto.Response.HomeContents;
import com.codesquad21.team07.airbnb.Dto.Response.SearchCity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api")
public class HomeApi {

    @GetMapping("home-category")
    private HomeContents home() {
        Province province1 = new Province(1L, "서울", "http://imgurl", 12.2, 5.3);
        Province province2 = new Province(2L, "의정부시", "http://imgurl", 32.2, 15.3);
        Province province3 = new Province(3L, "대구", "http://imgurl", 42.2, 55.3);

        Theme theme1 = new Theme(1L, "자연생활을 만끽할 수 있는 숙소", "http://imgurl");
        Theme theme2 = new Theme(2L, "독특한 공간", "http://imgurl");
        Theme theme3 = new Theme(3L, "반려동물을 위한 공간", "http://imgurl");


        List<Province> cities = new ArrayList<>();
        cities.add(province1);
        cities.add(province2);
        cities.add(province3);

        List<Theme> themes = new ArrayList<>();
        themes.add(theme1);
        themes.add(theme2);
        themes.add(theme3);

        return new HomeContents(cities, themes);
    }


    @GetMapping("/search/서울")
    public SearchCity searchSeoul() {
        Province seoul = new Province(1L, "서울특별시", "http://imgurl", 12.2, 5.3);
        Town town = new Town(1L, seoul.getId(), "강남구");
        Address address = new Address(1L, town.getId(), "", 12.2, 5.3);

        Town town2 = new Town(2L, seoul.getId(), "종로구");
        Address address2 = new Address(1L, town2.getId(), "", 22.2, 5.3);

        Town town3 = new Town(3L, seoul.getId(), "마포구");
        Address address3 = new Address(1L, town3.getId(), "", 32.2, 15.3);

        Town town4 = new Town(4L, seoul.getId(), "서초구");
        Address address4 = new Address(1L, town4.getId(), "양재동", 52.2, 115.3);


        CityInfo cityInfo = new CityInfo(seoul, town, address);
        CityInfo cityInfo2 = new CityInfo(seoul, town2, address2);
        CityInfo cityInfo3 = new CityInfo(seoul, town3, address3);
        CityInfo cityInfo4 = new CityInfo(seoul, town4, address4);

        SearchCity searchCity = new SearchCity();
        searchCity.add(cityInfo);
        searchCity.add(cityInfo2);
        searchCity.add(cityInfo3);
        searchCity.add(cityInfo4);

        return searchCity;
    }

}
