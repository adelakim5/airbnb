package com.codesquad21.team07.airbnb.Controller;

import com.codesquad21.team07.airbnb.Domain.City;
import com.codesquad21.team07.airbnb.Domain.Location;
import com.codesquad21.team07.airbnb.Domain.Theme;
import com.codesquad21.team07.airbnb.Dto.Response.HomeContents;
import com.codesquad21.team07.airbnb.Dto.Response.SearchCity;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@Api(tags = {"HomeApi"})
@RestController
@RequestMapping("api")
public class HomeApi {

    @ApiOperation(value = "홈 카테고리", notes = "지역별 또는 테마별로 제공합니다.")
    @GetMapping
    public HomeContents home() {

        City[] cities = new City[7];
        cities[0] = new City(1L, "서울", "https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=240", 12.2, 5.3);
        cities[1] = new City(2L, "인천", "https://a0.muscache.com/im/pictures/31e445ed-8b69-477b-aefd-d04dae6d0bb1.jpg?im_q=medq&im_w=240", 32.2, 15.3);
        cities[2] = new City(3L, "의정부시", "https://a0.muscache.com/im/pictures/f98fbb2e-9e10-4514-b4a7-02c467e1da03.jpg?im_q=medq&im_w=240", 42.2, 55.3);
        cities[3] = new City(4L, "대구", "https://a0.muscache.com/im/pictures/a0eb36e7-b468-4c5e-93b2-819e793563b2.jpg?im_q=medq&im_w=240", 42.2, 55.3);
        cities[4] = new City(5L, "광주", "https://a0.muscache.com/im/pictures/087a8dff-a609-4084-86db-f45051c6f23a.jpg?im_q=medq&im_w=240", 42.2, 55.3);
        cities[5] = new City(6L, "수원시", "https://a0.muscache.com/im/pictures/926d56aa-8b36-4138-8eae-ad991868b858.jpg?im_q=medq&im_w=240", 42.2, 55.3);
        cities[6] = new City(7L, "울산", "https://a0.muscache.com/im/pictures/76e5f1c6-a788-418c-a28b-f0ee29cffd41.jpg?im_q=medq&im_w=240", 42.2, 55.3);

        Theme[] themes = new Theme[4];
        themes[0] = new Theme(1L, "자연생활을 만끽할 수 있는 숙소", "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480");
        themes[1] = new Theme(2L, "독특한 공간", "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480");
        themes[2] = new Theme(3L, "집 전체", "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480");
        themes[3] = new Theme(4L, "반려동물 동반 가능", "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480");


        List<City> cityList = new ArrayList<>(Arrays.asList(cities));
        List<Theme> themeList = new ArrayList<>(Arrays.asList(themes));

        return new HomeContents(cityList, themeList);
    }


    @GetMapping("/search/{location}")
    public SearchCity searchSeoul(@PathVariable String location) {

        SearchCity searchCity = new SearchCity();

        if (location.equals("인천")) {

            Location address = new Location(1L, "인천광역시", "남동구", "구월동", "", 12.2, 5.3);
            Location address2 = new Location(2L, "인천광역시", "계양구", "서운동", "", 22.2, 25.3);
            Location address3 = new Location(3L, "인천광역시", "서구", "연희동", "", 32.2, 35.3);
            Location address4 = new Location(4L, "인천광역시", "강화군", "화도면", "흥왕리", 42.2, 45.3);

            searchCity.add(address);
            searchCity.add(address2);
            searchCity.add(address3);
            searchCity.add(address4);
        }
        return searchCity;
    }

    @GetMapping("/search/priceList")
    public Map<String, Map<Integer, Integer>> getPriceList() {
        Map<Integer, Integer> prices = new HashMap<>();

        Random random = new Random();

        for (int i = 11000; i < 300000; i += 1000) {
            int val = (int) (random.nextGaussian() * 25 + 2);

            if (val > 0) {
                prices.put(i, val);
            } else {
                prices.put(i, 0);
            }

        }

        Map<String, Map<Integer, Integer>> wrappingPriceList = new HashMap<>();
        wrappingPriceList.put("price-list", prices);

        return wrappingPriceList;
    }


}
