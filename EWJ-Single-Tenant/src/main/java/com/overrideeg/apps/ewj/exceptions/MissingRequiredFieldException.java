/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.overrideeg.apps.ewj.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class MissingRequiredFieldException extends RuntimeException {

    /**
     *
     */
    private static final long serialVersionUID = 8572555138218832901L;

    public MissingRequiredFieldException() {
        super();
    }

    public MissingRequiredFieldException(final String message) {
        super(message);
    }

    public MissingRequiredFieldException(final String message, final Throwable cause) {
        super(message, cause);
    }

    public MissingRequiredFieldException(final Throwable cause) {
        super(cause);
    }

    protected MissingRequiredFieldException(final String message, final Throwable cause, final boolean enableSuppression, final boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
