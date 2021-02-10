package com.overrideeg.apps.ewj.io.entities.docs.transactions;

import com.overrideeg.apps.ewj.enums.specialRequestType;
import com.overrideeg.apps.ewj.io.entities.files.employee;
import com.overrideeg.apps.ewj.io.valueObjects.OMasterTransaction;

import javax.persistence.*;

@Entity
public class specialRequest extends OMasterTransaction {
    @Enumerated(EnumType.STRING)
    private specialRequestType type;
    @Lob
    private String message;
    @ManyToOne(fetch = FetchType.EAGER)
    private employee sender;

    public specialRequestType getType () {
        return type;
    }

    public void setType ( specialRequestType type ) {
        this.type = type;
    }

    public String getMessage () {
        return message;
    }

    public void setMessage ( String message ) {
        this.message = message;
    }

    public employee getSender () {
        return sender;
    }

    public void setSender ( employee sender ) {
        this.sender = sender;
    }
}
