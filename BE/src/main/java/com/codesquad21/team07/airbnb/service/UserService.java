package com.codesquad21.team07.airbnb.service;

import com.codesquad21.team07.airbnb.dtoGroup.request.ReservationDto;
import com.codesquad21.team07.airbnb.exception.NonDeleteException;
import com.codesquad21.team07.airbnb.exception.NonReservationException;
import com.codesquad21.team07.airbnb.repository.ReservationRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class UserService {
    private final ReservationRepository reservationRepository;

    public UserService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    public boolean reservationAvailability(Long roomdId, LocalDate checkIn, LocalDate checkOut) {
        return reservationRepository.findDuplicateCountByRoomIdAndDate(roomdId, checkIn, checkOut) == 0;
    }

    public Integer reservation(Long roomId, Long userId, ReservationDto reservationDto) {

        // TODO. userId 추가시 유저 검증 로직 필요

        if (!reservationAvailability(roomId, reservationDto.getCheckIn(), reservationDto.getCheckOut())) {
            throw new NonReservationException();
        }

        return reservationRepository.reservation(roomId, userId, reservationDto);
    }

    public void cancelReservation(Long roomId, Long userId, Long reservationId) {
        if (!findReservasionById(roomId, userId, reservationId)) {
            throw new NonDeleteException();
        }
        // TODO. userId 추가시 유저 검증 로직 필요
        reservationRepository.cancelReservation(roomId, reservationId, userId);
    }

    public boolean findReservasionById(Long roomId, Long userId, Long reservationId) {
        return (reservationRepository.findReservasionById(userId, roomId, reservationId)) != 0;
    }
}

