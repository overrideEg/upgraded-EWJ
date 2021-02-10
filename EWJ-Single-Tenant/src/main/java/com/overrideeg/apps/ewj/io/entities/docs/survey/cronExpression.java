package com.overrideeg.apps.ewj.io.entities.docs.survey;

import com.overrideeg.apps.ewj.io.valueObjects.OMasterFile;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
@AttributeOverrides({
        @AttributeOverride(name = "name.ar", column = @Column(name = "name_ar")),
        @AttributeOverride(name = "name.en", column = @Column(name = "name_en")),
})
public class cronExpression extends OMasterFile {
    private Integer seconds;
    private Integer minutes;
    private Integer hours;
    private Integer dayOfMonth;
    private Integer month;
    private Integer dayOfWeek;

    public cronExpression ( Integer seconds, Integer minutes, Integer hours, Integer dayOfMonth, Integer month) {
        this.seconds = seconds;
        this.minutes = minutes;
        this.hours = hours;
        this.dayOfMonth = dayOfMonth;
        this.month = month;
    }

    public cronExpression ( Integer seconds, Integer minutes, Integer hours, Integer dayOfWeek ) {
        this.seconds = seconds;
        this.minutes = minutes;
        this.hours = hours;
        this.dayOfWeek = dayOfWeek;
    }

    public cronExpression () {
    }

    public Integer getSeconds () {
        return seconds;
    }

    public void setSeconds ( Integer seconds ) {
        this.seconds = seconds;
    }

    public Integer getMinutes () {
        return minutes;
    }

    public void setMinutes ( Integer minutes ) {
        this.minutes = minutes;
    }

    public Integer getHours () {
        return hours;
    }

    public void setHours ( Integer hours ) {
        this.hours = hours;
    }

    public Integer getDayOfMonth () {
        return dayOfMonth;
    }

    public void setDayOfMonth ( Integer dayOfMonth ) {
        this.dayOfMonth = dayOfMonth;
    }

    public Integer getMonth () {
        return month;
    }

    public void setMonth ( Integer month ) {
        this.month = month;
    }

    public Integer getDayOfWeek () {
        return dayOfWeek;
    }

    public void setDayOfWeek ( Integer dayOfWeek ) {
        this.dayOfWeek = dayOfWeek;
    }
}
