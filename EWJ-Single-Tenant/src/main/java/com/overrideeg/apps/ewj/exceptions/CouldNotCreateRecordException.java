/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.overrideeg.apps.ewj.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.function.Supplier;

@ResponseStatus(value = HttpStatus.EXPECTATION_FAILED)
public class CouldNotCreateRecordException extends RuntimeException implements Supplier<CouldNotCreateRecordException> {


    /**
     *
     */
    private static final long serialVersionUID = 2207662055803592577L;

    public CouldNotCreateRecordException() {
        super();
    }

    public CouldNotCreateRecordException(String message, Throwable cause) {
        super(message, cause);
    }

    public CouldNotCreateRecordException(Throwable cause) {
        super(cause);
    }

    protected CouldNotCreateRecordException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }


    public CouldNotCreateRecordException(String message) {
        super(message);
    }

    @Override
    public CouldNotCreateRecordException get () {
        return this;
    }
}
