package com.codesquad21.team07.airbnb.controller;

import com.codesquad21.team07.airbnb.domain.ApiResult;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalApiExceptionHandler {
    @ExceptionHandler({
            RuntimeException.class
    })
    @ResponseStatus(code = HttpStatus.BAD_REQUEST)
    public ApiResult notAuthorizedException(RuntimeException exception) {
        return ApiResult.failed(exception);
    }
}
