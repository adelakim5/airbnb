package com.codesquad21.team07.airbnb.Controller;

import com.codesquad21.team07.airbnb.Domain.Address;
import com.codesquad21.team07.airbnb.Domain.Province;
import com.codesquad21.team07.airbnb.Domain.Theme;
import com.codesquad21.team07.airbnb.Domain.Town;
import com.codesquad21.team07.airbnb.Dto.Response.CityInfo;
import com.codesquad21.team07.airbnb.Dto.Response.HomeContents;
import com.codesquad21.team07.airbnb.Dto.Response.SearchCity;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Api(tags = {"HomeApi"})
@RestController
@RequestMapping("api")
public class HomeApi {

    @ApiOperation(value = "홈 카테고리", notes = "지역별 또는 테마별로 제공합니다.")
    @GetMapping
    public HomeContents home() {

        Province[] provinces = new Province[7];
        provinces[0] = new Province(1L, "서울", "https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=240", 12.2, 5.3);
        provinces[1] = new Province(2L, "인천", "https://a0.muscache.com/im/pictures/31e445ed-8b69-477b-aefd-d04dae6d0bb1.jpg?im_q=medq&im_w=240", 32.2, 15.3);
        provinces[2] = new Province(3L, "의정부시", "https://a0.muscache.com/im/pictures/f98fbb2e-9e10-4514-b4a7-02c467e1da03.jpg?im_q=medq&im_w=240", 42.2, 55.3);
        provinces[3] = new Province(4L, "대구", "https://a0.muscache.com/im/pictures/a0eb36e7-b468-4c5e-93b2-819e793563b2.jpg?im_q=medq&im_w=240", 42.2, 55.3);
        provinces[4] = new Province(5L, "광주", "https://a0.muscache.com/im/pictures/087a8dff-a609-4084-86db-f45051c6f23a.jpg?im_q=medq&im_w=240", 42.2, 55.3);
        provinces[5] = new Province(6L, "수원시", "https://a0.muscache.com/im/pictures/926d56aa-8b36-4138-8eae-ad991868b858.jpg?im_q=medq&im_w=240", 42.2, 55.3);
        provinces[6] = new Province(7L, "울산", "https://a0.muscache.com/im/pictures/76e5f1c6-a788-418c-a28b-f0ee29cffd41.jpg?im_q=medq&im_w=240", 42.2, 55.3);

        Theme[] themes = new Theme[4];
        themes[0] = new Theme(1L, "자연생활을 만끽할 수 있는 숙소", "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480");
        themes[1] = new Theme(2L, "독특한 공간", "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480");
        themes[2] = new Theme(3L, "집 전체", "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480");
        themes[3] = new Theme(4L, "반려동물 동반 가능", "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480");


        List<Province> cityList = new ArrayList<>(Arrays.asList(provinces));
        List<Theme> themeList = new ArrayList<>(Arrays.asList(themes));

        return new HomeContents(cityList, themeList);
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
