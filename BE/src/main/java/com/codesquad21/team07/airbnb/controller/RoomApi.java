package com.codesquad21.team07.airbnb.controller;

import com.codesquad21.team07.airbnb.dto.request.SearchRoom;
import com.codesquad21.team07.airbnb.dto.response.RoomDTO;
import com.codesquad21.team07.airbnb.dto.response.RoomList;
import com.codesquad21.team07.airbnb.service.RoomService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("api")
public class RoomApi {

    private RoomService roomService;

    public RoomApi(RoomService roomService) {
        this.roomService = roomService;
    }

    @GetMapping("/rooms/{id}")
    public RoomDTO test(@PathVariable Long id) {
        return roomService.findRoomByRoomId(id);
    }

    @GetMapping("/rooms")
    public RoomList viewAccommodationsByConditions(@Valid SearchRoom searchRoom) {
        return roomService.findByConditions(searchRoom);
    }

}
