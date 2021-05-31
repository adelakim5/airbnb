package com.codesquad21.team07.airbnb.controller;

import com.codesquad21.team07.airbnb.dto.request.SearchRequestDto;
import com.codesquad21.team07.airbnb.dto.response.RoomList;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;

@RestController
@RequestMapping("api")
public class AccommodationApi {

    @GetMapping("/rooms")
    public RoomList viewAccommodationsByConditions(@Valid SearchRequestDto searchRequestDto) {

    }

}
