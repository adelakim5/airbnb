package com.codesquad21.team07.airbnb.dto.response;

public class ErrorDto<T> {

    private final String error;

    ErrorDto(String error) {
        this.error = error;
    }

    public static ErrorDto<?> cause(Throwable throwable) {
        return cause(throwable.getMessage());
    }

    public static ErrorDto<?> cause(String message) {
        return new ErrorDto<>(message);
    }

    public String getError() {
        return error;
    }

    @Override
    public String toString() {
        return "Error{" +
                "error='" + error + '\'' +
                '}';
    }
}
