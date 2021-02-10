package com.overrideeg.apps.ewj.io.entities.docs.course;

import com.overrideeg.apps.ewj.io.valueObjects.OMasterTransaction;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
public class exam extends OMasterTransaction {
    @ManyToOne
    private course course;
    private Integer successPercentage;

    public com.overrideeg.apps.ewj.io.entities.docs.course.course getCourse () {
        return course;
    }

    public void setCourse ( com.overrideeg.apps.ewj.io.entities.docs.course.course course ) {
        this.course = course;
    }

    public Integer getSuccessPercentage () {
        return successPercentage;
    }

    public void setSuccessPercentage ( Integer successPercentage ) {
        this.successPercentage = successPercentage;
    }
}
