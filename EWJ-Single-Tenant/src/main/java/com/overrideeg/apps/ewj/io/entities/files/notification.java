package com.overrideeg.apps.ewj.io.entities.files;

import com.overrideeg.apps.ewj.io.valueObjects.OMasterTransaction;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

@Entity
public class notification extends OMasterTransaction {

    private String title;
    private String body;
    @ManyToOne(fetch = FetchType.EAGER)
    private employee recipient;
    @ManyToOne(fetch = FetchType.EAGER)
    private location locationReceiver;

    public String getTitle () {
        return title;
    }

    public void setTitle ( String title ) {
        this.title = title;
    }

    public String getBody () {
        return body;
    }

    public void setBody ( String body ) {
        this.body = body;
    }

    public employee getRecipient () {
        return recipient;
    }

    public void setRecipient ( employee recipient ) {
        this.recipient = recipient;
    }

    public location getLocationReceiver () {
        return locationReceiver;
    }

    public void setLocationReceiver ( location locationReceiver ) {
        this.locationReceiver = locationReceiver;
    }
}
