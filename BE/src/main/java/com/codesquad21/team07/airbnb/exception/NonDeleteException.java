package com.codesquad21.team07.airbnb.exception;

public class NonDeleteException extends RuntimeException {
    public NonDeleteException() {
        super("삭제할 예약 데이터가 없습니다.");
    }

    public NonDeleteException(String message) {
        super(message);
    }
}
