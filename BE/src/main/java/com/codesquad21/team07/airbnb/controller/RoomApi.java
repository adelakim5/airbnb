package com.codesquad21.team07.airbnb.controller;

import com.codesquad21.team07.airbnb.domain.Room;
import com.codesquad21.team07.airbnb.dtoGroup.request.SearchRoom;
import com.codesquad21.team07.airbnb.dtoGroup.response.RoomDTO;
import com.codesquad21.team07.airbnb.dtoGroup.response.RoomList;
import com.codesquad21.team07.airbnb.service.RoomService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.LinkedHashMap;
import java.util.Map;

@RestController
@RequestMapping("api")
public class RoomApi {

    private final RoomService roomService;

    public RoomApi(RoomService roomService) {
        this.roomService = roomService;
    }

    @GetMapping("rooms/{id}")
    public RoomDTO getRoom(@PathVariable Long id) {
        return roomService.findRoomDtoByRoomId(id);
    }

    @GetMapping("rooms")
    public RoomList viewAccommodationsByConditions(@Valid SearchRoom searchRoom) {
        return roomService.findByConditions(searchRoom);
    }

    @GetMapping("/rooms/{roomId}/estimate")
    public Map<String, Long> calculatePrice(@PathVariable Long roomId, @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkIn, @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkOut, @RequestParam Integer numOfPeople) {

        Map<String, Long> estimateMap = new LinkedHashMap<>();

        // 두 날짜간 주 차이
        long days = ChronoUnit.DAYS.between(checkIn, checkOut) - 1;
        long weeks = ChronoUnit.WEEKS.between(checkIn, checkOut);
        Room room = roomService.findRoomByRoomId(roomId);

        // 숙박비
        long feePerNight = room.getRentalFeePerNight();
        long totalPrice = feePerNight * days;
        long tempTotalPrice = feePerNight * days;


        estimateMap.put(feePerNight + "원x" + days + "박", totalPrice);

        if (weeks > 0 && weeks < 4) {
            tempTotalPrice = (long) ((tempTotalPrice * room.getWeeklyPriceFactor()) * weeks);
            int rate = (int) (room.getWeeklyPriceFactor() * 100);
            estimateMap.put(rate + "% 주 단위 요금 할인", tempTotalPrice);
        } else if (weeks >= 4){
            long months = ChronoUnit.MONTHS.between(checkIn, checkOut);
            tempTotalPrice = (long) ((tempTotalPrice * room.getMonthlyPriceFactor()) * months);
            int rate = (int) (room.getMonthlyPriceFactor() * 100);
            estimateMap.put(rate + "% 월 단위 요금 할인", tempTotalPrice);
        }

        int cleanFee = (int) (tempTotalPrice*0.002);
        int serviceFee = (int) (tempTotalPrice*0.005);
        int etcTax = (int) (tempTotalPrice*0.001);


        estimateMap.put("청소비", (long) cleanFee);
        estimateMap.put("서비스 수수료", (long) serviceFee);
        estimateMap.put("숙박세와 수수료", (long) etcTax);

        totalPrice = totalPrice - tempTotalPrice + cleanFee + serviceFee + etcTax;

        estimateMap.put("합계", (long) totalPrice);

        return estimateMap;
    }

}
