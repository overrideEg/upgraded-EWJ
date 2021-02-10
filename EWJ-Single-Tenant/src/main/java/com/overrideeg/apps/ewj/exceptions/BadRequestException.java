package com.overrideeg.apps.ewj.exceptions;

import org.apache.logging.log4j.util.Supplier;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class BadRequestException extends RuntimeException implements Supplier<BadRequestException> {


    /**
     *
     */
    private static final long serialVersionUID = -955761880237353580L;

    public BadRequestException() {
        super();
    }

    public BadRequestException(String message, Throwable cause) {
        super(message, cause);
    }

    public BadRequestException(Throwable cause) {
        super(cause);
    }

    protected BadRequestException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }


    public BadRequestException(String message) {
        super(message);
    }

    @Override
    public BadRequestException get () {
        return this;
    }
}
