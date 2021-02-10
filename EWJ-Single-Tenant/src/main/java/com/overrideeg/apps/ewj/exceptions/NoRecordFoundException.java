/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.overrideeg.apps.ewj.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.function.Supplier;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class NoRecordFoundException extends RuntimeException implements Supplier<NoRecordFoundException> {
    /**
     *
     */
    private static final long serialVersionUID = 6597766828602270786L;

    public NoRecordFoundException() {
        super();
    }

    public NoRecordFoundException(String message) {
        super(message);
    }

    public NoRecordFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public NoRecordFoundException(Throwable cause) {
        super(cause);
    }

    protected NoRecordFoundException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

    @Override
    public NoRecordFoundException get () {
        return this;
    }
}
