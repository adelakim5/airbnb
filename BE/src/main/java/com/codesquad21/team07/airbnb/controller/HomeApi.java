package com.codesquad21.team07.airbnb.controller;

import com.codesquad21.team07.airbnb.domain.Location;
import com.codesquad21.team07.airbnb.dto.response.HomeContents;
import com.codesquad21.team07.airbnb.dto.response.SearchCity;
import com.codesquad21.team07.airbnb.service.CityService;
import com.codesquad21.team07.airbnb.service.ThemeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Api(tags = {"HomeApi"})
@RestController
@RequestMapping("api")
public class HomeApi {

    private final CityService cityService;
    private final ThemeService themeService;

    public HomeApi(CityService cityService, ThemeService themeService) {
        this.cityService = cityService;
        this.themeService = themeService;
    }

    @ApiOperation(value = "홈 카테고리", notes = "지역별 또는 테마별로 제공합니다.")
    @GetMapping
    public HomeContents home() {
        return new HomeContents(cityService.findAll(), themeService.findAll());
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
