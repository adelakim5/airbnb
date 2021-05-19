package com.codesquad21.team07.airbnb.Controller;

import com.codesquad21.team07.airbnb.Domain.Address;
import com.codesquad21.team07.airbnb.Domain.Province;
import com.codesquad21.team07.airbnb.Domain.Theme;
import com.codesquad21.team07.airbnb.Domain.Town;
import com.codesquad21.team07.airbnb.Dto.Response.HomeContents;
import com.codesquad21.team07.airbnb.Dto.Response.SearchContents;
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

    @GetMapping("/search")
    public List<SearchContents> searchCity() {
        Province seoul = new Province(1L, "서울특별시", "http://imgurl", 12.2, 5.3);
        Town town = new Town(1L, seoul.getId(), "서초구");
        Address address = new Address(1L, town.getId(), "양재1동", 12.2, 5.3);
        Address address2 = new Address(2L, town.getId(), "양재2동", 22.2, 15.3);

        List<Address> addresses = new ArrayList<>();
        addresses.add(address);
        addresses.add(address2);

        SearchContents searchContents = new SearchContents(seoul,town,addresses);

        Province incheon = new Province(2L, "인천광역시", "http://imgurl", 32.2, 5.3);
        Town namdonggu = new Town(1L, incheon.getId(), "남동구");
        Address guwol = new Address(1L, town.getId(), "구월동", 12.2, 5.3);

        List<Address> addresses2 = new ArrayList<>();
        addresses2.add(guwol);

        SearchContents searchContents2 = new SearchContents(incheon,namdonggu,addresses2);


        List<SearchContents> result = new ArrayList<>();

        result.add(searchContents);
        result.add(searchContents2);

        return result;
    }

    @GetMapping("/search/서울")
    public SearchContents searchSeoul() {
        Province seoul = new Province(1L, "서울특별시", "http://imgurl", 12.2, 5.3);
        Town town = new Town(1L, seoul.getId(), "서초구");
        Address address = new Address(1L, town.getId(), "양재1동", 12.2, 5.3);
        Address address2 = new Address(2L, town.getId(), "양재2동", 22.2, 15.3);

        List<Address> addresses = new ArrayList<>();
        addresses.add(address);
        addresses.add(address2);

        SearchContents searchContents = new SearchContents(seoul,town,addresses);

        return searchContents;
    }

}
