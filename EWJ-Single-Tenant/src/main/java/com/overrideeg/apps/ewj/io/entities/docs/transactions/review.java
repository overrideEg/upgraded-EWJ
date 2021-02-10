package com.overrideeg.apps.ewj.io.entities.docs.transactions;

import com.overrideeg.apps.ewj.io.entities.files.employee;
import com.overrideeg.apps.ewj.io.entities.files.location;
import com.overrideeg.apps.ewj.io.valueObjects.OMasterTransaction;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

@Entity
public class review extends OMasterTransaction {
    @ManyToOne(fetch = FetchType.EAGER)
    private employee employee;
    @ManyToOne(fetch = FetchType.EAGER)
    private location location;
    private Integer review;
    private Boolean critical;

    public com.overrideeg.apps.ewj.io.entities.files.employee getEmployee () {
        return employee;
    }

    public void setEmployee ( com.overrideeg.apps.ewj.io.entities.files.employee employee ) {
        this.employee = employee;
    }

    public com.overrideeg.apps.ewj.io.entities.files.location getLocation () {
        return location;
    }

    public void setLocation ( com.overrideeg.apps.ewj.io.entities.files.location location ) {
        this.location = location;
    }

    public Integer getReview () {
        return review;
    }

    public void setReview ( Integer review ) {
        this.review = review;
    }

    public Boolean getCritical () {
        return critical;
    }

    public void setCritical ( Boolean critical ) {
        this.critical = critical;
    }
}
