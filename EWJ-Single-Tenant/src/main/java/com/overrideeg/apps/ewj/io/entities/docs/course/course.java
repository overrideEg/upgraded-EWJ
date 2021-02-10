package com.overrideeg.apps.ewj.io.entities.docs.course;

import com.overrideeg.apps.ewj.io.valueObjects.OMasterFile;
import com.overrideeg.apps.ewj.io.valueObjects.translated;

import javax.persistence.*;

@Entity
@AttributeOverrides({
        @AttributeOverride(name = "name.ar", column = @Column(name = "name_ar")),
        @AttributeOverride(name = "name.en", column = @Column(name = "name_en")),
        @AttributeOverride(name = "description.en", column = @Column(name = "description_en")),
        @AttributeOverride(name = "description.en", column = @Column(name = "description_en")),
})
public class course extends OMasterFile {
    @Embedded
    private translated description;
    private String image;
    private String url;
    private Integer successPercent;
    private Integer attendancePercent;
    private Integer examPercent;

    public translated getDescription () {
        return description;
    }

    public void setDescription ( translated description ) {
        this.description = description;
    }

    public String getImage () {
        return image;
    }

    public void setImage ( String image ) {
        this.image = image;
    }

    public String getUrl () {
        return url;
    }

    public void setUrl ( String url ) {
        this.url = url;
    }

    public Integer getSuccessPercent () {
        return successPercent;
    }

    public void setSuccessPercent ( Integer successPercent ) {
        this.successPercent = successPercent;
    }

    public Integer getAttendancePercent () {
        return attendancePercent;
    }

    public void setAttendancePercent ( Integer attendancePercent ) {
        this.attendancePercent = attendancePercent;
    }

    public Integer getExamPercent () {
        return examPercent;
    }

    public void setExamPercent ( Integer examPercent ) {
        this.examPercent = examPercent;
    }
}
