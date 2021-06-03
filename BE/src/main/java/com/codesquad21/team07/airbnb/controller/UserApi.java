package com.codesquad21.team07.airbnb.controller;

import com.codesquad21.team07.airbnb.domain.User;
import com.codesquad21.team07.airbnb.dtoGroup.request.ReservationDto;
import com.codesquad21.team07.airbnb.service.UserService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("api")
public class UserApi {

    private final UserService userService;

    public UserApi(UserService userService) {
        this.userService = userService;
    }

    // roomId와 체크인/체크아웃으로 예약할 수 있는지 확인할 수 있는 API
    @GetMapping("/rooms/{roomId}/reservations")
    public boolean checkReservationDate(@PathVariable Long roomId, @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkIn, @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkOut) {
        return userService.reservationAvailability(roomId, checkIn, checkOut);
    }

    @PostMapping("/rooms/{roomId}/reservations")
    @ResponseStatus(HttpStatus.CREATED)
    public String reservation(@PathVariable Long roomId, @RequestBody ReservationDto reservationDto) {

        //m 임시 유저
        User user = new User(3L, "네오", "neo@codsquad.com", "http://imgur.com/profile.png");

        Integer reservationId = userService.reservation(roomId, user.getId(), reservationDto);

        return "📣 예약번호 "+reservationId + "로 예약이 완료됐습니다.";
    }

    // TODO . OAuth2 구현시 URL 수정될 것임.
    @DeleteMapping("/rooms/{roomId}/reservations/{reservationId}/{userId}")
    public String deleteReservation(@PathVariable Long roomId, @PathVariable Long reservationId, @PathVariable  Long userId){
        userService.cancelReservation(roomId, userId, reservationId);

        return "📣 예약번호 "+reservationId + "의 예약이 삭제됐습니다.";
    }


}
