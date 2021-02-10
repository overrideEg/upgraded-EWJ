package com.overrideeg.apps.ewj.io.valueObjects;

import javax.persistence.Embeddable;
import javax.persistence.Lob;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

@Embeddable
public class translatedLob {
    @Lob
    private String ar;
    @Lob
    private String en;

    public translatedLob ( String ar, String en) {
        this.ar = ar;
        this.en = en;
    }

    public translatedLob () {
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
