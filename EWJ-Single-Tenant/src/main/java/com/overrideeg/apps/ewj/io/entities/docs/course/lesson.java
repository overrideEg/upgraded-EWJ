package com.overrideeg.apps.ewj.io.entities.docs.course;

import com.overrideeg.apps.ewj.enums.lessonType;
import com.overrideeg.apps.ewj.io.valueObjects.OMasterFile;
import com.overrideeg.apps.ewj.io.valueObjects.translated;
import com.overrideeg.apps.ewj.io.valueObjects.translatedLob;

import javax.persistence.*;

@Entity
@AttributeOverrides({
        @AttributeOverride(name = "name.ar", column = @Column(name = "name_ar")),
        @AttributeOverride(name = "name.en", column = @Column(name = "name_en")),
        @AttributeOverride(name = "description.en", column = @Column(name = "description_en")),
        @AttributeOverride(name = "description.en", column = @Column(name = "description_en")),
        @AttributeOverride(name = "tutorialText.ar", column = @Column(name = "tutorialText_ar")),
        @AttributeOverride(name = "tutorialText.en", column = @Column(name = "tutorialText_en")),
})
public class lesson extends OMasterFile {
    @Enumerated(EnumType.STRING)
    private lessonType type;
    @Embedded
    private translated description;
    @ManyToOne(fetch = FetchType.EAGER)
    private course course;
    private String pdfUrl;
    private String videoUrl;
    @Embedded
    private translatedLob tutorialText;

    public lessonType getType () {
        return type;
    }

    public void setType ( lessonType type ) {
        this.type = type;
    }

    public translated getDescription () {
        return description;
    }

    public void setDescription ( translated description ) {
        this.description = description;
    }

    public com.overrideeg.apps.ewj.io.entities.docs.course.course getCourse () {
        return course;
    }

    public void setCourse ( com.overrideeg.apps.ewj.io.entities.docs.course.course course ) {
        this.course = course;
    }

    public String getPdfUrl () {
        return pdfUrl;
    }

    public void setPdfUrl ( String pdfUrl ) {
        this.pdfUrl = pdfUrl;
    }

    public String getVideoUrl () {
        return videoUrl;
    }

    public void setVideoUrl ( String videoUrl ) {
        this.videoUrl = videoUrl;
    }

    public translatedLob getTutorialText () {
        return tutorialText;
    }

    public void setTutorialText ( translatedLob tutorialText ) {
        this.tutorialText = tutorialText;
    }
}
