/*
 * Copyright (c) 2020. overrideeg.ocm.
 */

package com.overrideeg.apps.ewj.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.UNAUTHORIZED)
public class InvalidJwtAuthenticationException extends AuthenticationException {

    /**
     *
     */
    private static final long serialVersionUID = 722665162015010130L;

    public InvalidJwtAuthenticationException(String e) {
        super(e);
    }
}
