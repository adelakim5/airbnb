package com.codesquad21.team07.airbnb.controller;

import com.codesquad21.team07.airbnb.dtoGroup.response.ErrorDto;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalApiExceptionHandler {

    @ExceptionHandler({BindException.class})
    @ResponseStatus(code = HttpStatus.BAD_REQUEST)
    public ErrorDto<?> processValidationError(BindException exception) {
        BindingResult bindingResult = exception.getBindingResult();

        StringBuilder builder = new StringBuilder();
        for (FieldError fieldError : bindingResult.getFieldErrors()) {
            builder.append("[");
            builder.append(fieldError.getField());
            builder.append("](은)는 ");
            builder.append(fieldError.getDefaultMessage());
            builder.append(" 입력된 값: [");
            builder.append(fieldError.getRejectedValue());
            builder.append("]");
        }
        return ErrorDto.cause(builder.toString());
    }
    @ExceptionHandler({RuntimeException.class})
    @ResponseStatus(code = HttpStatus.BAD_REQUEST)
    public ErrorDto<?> generalHandler(RuntimeException exception) {
        return ErrorDto.cause(exception);
    }


}
