package com.overrideeg.apps.ewj.io.entities.files;

import com.overrideeg.apps.ewj.enums.locationType;
import com.overrideeg.apps.ewj.io.valueObjects.OMasterFile;

import javax.persistence.*;

@Entity
public class location extends OMasterFile {
    @Enumerated(EnumType.STRING)
    private locationType type;
    @ManyToOne(fetch = FetchType.LAZY)
    private location parent;
    private String phoneNumber;
    @OneToOne(fetch = FetchType.LAZY)
    private employee manager;
    private double affectOnParentPercent;


    public locationType getType () {
        return type;
    }

    public void setType ( locationType type ) {
        this.type = type;
    }

    public location getParent() {
        return parent;
    }

    public void setParent(location topEntity ) {
        this.parent = topEntity;
    }

    public String getPhoneNumber () {
        return phoneNumber;
    }

    public void setPhoneNumber ( String phoneNumber ) {
        this.phoneNumber = phoneNumber;
    }

    public employee getManager () {
        return manager;
    }

    public void setManager ( employee manager ) {
        this.manager = manager;
    }

    public double getAffectOnParentPercent() {
        return affectOnParentPercent;
    }

    public void setAffectOnParentPercent(double affectOnParentPercent) {
        this.affectOnParentPercent = affectOnParentPercent;
    }
}
