package com.codesquad21.team07.airbnb.service;

import com.codesquad21.team07.airbnb.domain.City;
import com.codesquad21.team07.airbnb.repository.MyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityService {

    private final MyRepository<City> cityRepository;

    public CityService(MyRepository<City> cityRepository) {
        this.cityRepository = cityRepository;
    }

    public List<City> findAll(){
        return cityRepository.findAll();
    }

}
