/*
 * Copyright (c) 2020. overrideeg.ocm.
 */

package com.overrideeg.apps.ewj.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class MyFileNotFoundException extends RuntimeException {
    /**
     *
     */
    private static final long serialVersionUID = 3028679522970508412L;

    public MyFileNotFoundException() {
        super();
    }

    public MyFileNotFoundException(String message) {
        super(message);
    }

    public MyFileNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public MyFileNotFoundException(Throwable cause) {
        super(cause);
    }

    protected MyFileNotFoundException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
