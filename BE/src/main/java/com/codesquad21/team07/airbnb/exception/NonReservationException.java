package com.codesquad21.team07.airbnb.exception;

public class NonReservationException extends RuntimeException {
    public NonReservationException() {
        super("이미 예약이 있습니다.");
    }

    public NonReservationException(String message) {
        super(message);
    }
}
