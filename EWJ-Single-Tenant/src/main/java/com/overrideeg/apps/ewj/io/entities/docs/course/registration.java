package com.overrideeg.apps.ewj.io.entities.docs.course;

import com.overrideeg.apps.ewj.io.entities.files.employee;
import com.overrideeg.apps.ewj.io.valueObjects.OMasterTransaction;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
public class registration extends OMasterTransaction {
    @ManyToOne
    private course course;
    @ManyToOne
    private employee employee;

    public com.overrideeg.apps.ewj.io.entities.docs.course.course getCourse () {
        return course;
    }

    public void setCourse ( com.overrideeg.apps.ewj.io.entities.docs.course.course course ) {
        this.course = course;
    }

    public com.overrideeg.apps.ewj.io.entities.files.employee getEmployee () {
        return employee;
    }

    public void setEmployee ( com.overrideeg.apps.ewj.io.entities.files.employee employee ) {
        this.employee = employee;
    }
}
