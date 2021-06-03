package com.codesquad21.team07.airbnb.service;

import com.codesquad21.team07.airbnb.dtoGroup.response.LocationDTO;
import com.codesquad21.team07.airbnb.repository.LocationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {
    private final LocationRepository locationRepository;

    public LocationService(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    public List<LocationDTO> findByAddress(String address) {
        return locationRepository.findByAddress(address);
    }
}
