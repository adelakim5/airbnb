package com.codesquad21.team07.airbnb.dto.response;

import java.util.ArrayList;
import java.util.List;

public class RoomList {

    private List<RoomDTO> rooms;

    public RoomList() {
        this.rooms = new ArrayList<>();
    }

    public List<RoomDTO> getRooms() {
        return rooms;
    }

    public void add(RoomDTO room){
        this.rooms.add(room);
    }
}
