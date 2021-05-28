package com.codesquad21.team07.airbnb.controller;

import com.codesquad21.team07.airbnb.dto.response.HomeContents;
import com.codesquad21.team07.airbnb.dto.response.LocationDTO;
import com.codesquad21.team07.airbnb.dto.response.SearchCity;
import com.codesquad21.team07.airbnb.service.CityService;
import com.codesquad21.team07.airbnb.service.LocationService;
import com.codesquad21.team07.airbnb.service.ThemeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

@Api(tags = {"HomeApi"})
@RestController
@RequestMapping("api")
public class HomeApi {

    private final CityService cityService;
    private final ThemeService themeService;
    private final LocationService locationService;

    public HomeApi(CityService cityService, ThemeService themeService, LocationService locationService) {
        this.cityService = cityService;
        this.themeService = themeService;
        this.locationService = locationService;
    }

    @ApiOperation(value = "홈 카테고리", notes = "지역별 또는 테마별로 제공합니다.")
    @GetMapping
    public HomeContents home() {
        return new HomeContents(cityService.findAll(), themeService.findAll());
    }


    @GetMapping("/search/{location}")
    public SearchCity searchSeoul(@PathVariable String location) {

        List<LocationDTO> locationDTO = locationService.findByAddress(location);
        SearchCity searchCity = new SearchCity(locationDTO);

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
