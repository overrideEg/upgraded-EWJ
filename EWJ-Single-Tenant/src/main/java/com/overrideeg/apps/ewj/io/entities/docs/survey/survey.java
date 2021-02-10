package com.overrideeg.apps.ewj.io.entities.docs.survey;

import com.overrideeg.apps.ewj.enums.surveyType;
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
public class survey extends OMasterFile {
    @Embedded
    private translated description;
    private String image;
    @Enumerated(EnumType.STRING)
    private surveyType type;
    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    private cronExpression cronExpression;
    private Double affectPercent;

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

    public surveyType getType () {
        return type;
    }

    public void setType ( surveyType type ) {
        this.type = type;
    }

    public com.overrideeg.apps.ewj.io.entities.docs.survey.cronExpression getCronExpression () {
        return cronExpression;
    }

    public void setCronExpression ( com.overrideeg.apps.ewj.io.entities.docs.survey.cronExpression cronExpression ) {
        this.cronExpression = cronExpression;
    }


    public Double getAffectPercent() {
        return affectPercent;
    }

    public void setAffectPercent(Double affectPercent) {
        this.affectPercent = affectPercent;
    }
}
