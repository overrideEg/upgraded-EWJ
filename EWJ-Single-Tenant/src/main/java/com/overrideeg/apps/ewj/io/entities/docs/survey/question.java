package com.overrideeg.apps.ewj.io.entities.docs.survey;

import com.overrideeg.apps.ewj.io.entities.docs.course.exam;
import com.overrideeg.apps.ewj.io.valueObjects.OMasterTransaction;
import com.overrideeg.apps.ewj.io.valueObjects.translated;

import javax.persistence.*;
import java.util.List;

@Entity
@AttributeOverrides({
        @AttributeOverride(name = "text.ar", column = @Column(name = "text_ar")),
        @AttributeOverride(name = "text.en", column = @Column(name = "text_en"))
})
public class question extends OMasterTransaction {
    @Embedded
    private translated text;
    @ManyToOne(fetch = FetchType.EAGER)
    private survey survey;
    @ManyToOne(fetch = FetchType.EAGER)
    private exam exam;
    @ManyToOne
    private question dependOn;
    @ManyToOne
    private answer dependOnAnswer;
    @OneToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL,orphanRemoval = true)
    private List<answer> answers;

    public translated getText () {
        return text;
    }

    public void setText ( translated text ) {
        this.text = text;
    }

    public com.overrideeg.apps.ewj.io.entities.docs.survey.survey getSurvey () {
        return survey;
    }

    public void setSurvey ( com.overrideeg.apps.ewj.io.entities.docs.survey.survey survey ) {
        this.survey = survey;
    }

    public com.overrideeg.apps.ewj.io.entities.docs.course.exam getExam () {
        return exam;
    }

    public void setExam ( com.overrideeg.apps.ewj.io.entities.docs.course.exam exam ) {
        this.exam = exam;
    }

    public List<answer> getAnswers () {
        return answers;
    }

    public void setAnswers ( List<answer> answers ) {
        this.answers = answers;
    }

    public question getDependOn() {
        return dependOn;
    }

    public void setDependOn(question dependOn) {
        this.dependOn = dependOn;
    }

    public answer getDependOnAnswer() {
        return dependOnAnswer;
    }

    public void setDependOnAnswer(answer dependOnAnswer) {
        this.dependOnAnswer = dependOnAnswer;
    }
}
