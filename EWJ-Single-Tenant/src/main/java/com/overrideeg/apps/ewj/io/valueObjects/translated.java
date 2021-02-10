/*
 * Copyright (c) 2020. overrideeg.ocm.
 */

package com.overrideeg.apps.ewj.io.valueObjects;

import javax.persistence.Embeddable;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

/**
 * translate embeddable object
 * here 2 languages and can add more
 * arabic , english
 */
@Embeddable
public class translated {
    private String ar;
    private String en;

    public translated ( String ar, String en) {
        this.ar = ar;
        this.en = en;
    }

    public translated () {
    }

    @PrePersist()
    public void PrePersist() {
        checkNulls();

    }
    @PreUpdate
    public void PreUpdate() {
        checkNulls();
    }
    private void checkNulls () {
        if ((getAr() == null || getAr().equals("")) && getEn() != null)
            setAr(getEn());
        if ((getEn() == null || getEn().equals("")) && getAr() != null)
            setEn(getAr());
        if ((getAr() == null || getAr().equals("")))
            setAr(getEn());
    }



    public String getAr() {
        return ar;
    }

    public void setAr(String ar) {
        this.ar = ar;
    }

    public String getEn() {
        return en;
    }

    public void setEn(String en) {
        this.en = en;
    }


}
