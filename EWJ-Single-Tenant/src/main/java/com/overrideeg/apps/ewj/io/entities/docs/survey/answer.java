package com.overrideeg.apps.ewj.io.entities.docs.survey;

import com.overrideeg.apps.ewj.io.valueObjects.OMasterTransaction;
import com.overrideeg.apps.ewj.io.valueObjects.translated;

import javax.persistence.*;

@Entity
@AttributeOverrides({
        @AttributeOverride(name = "text.ar", column = @Column(name = "text_ar")),
        @AttributeOverride(name = "text.en", column = @Column(name = "text_en"))
})
public class answer extends OMasterTransaction {
    @Embedded
    private translated text;
    private String image;
    private Integer weight;

    public translated getText () {
        return text;
    }

    public void setText ( translated text ) {
        this.text = text;
    }

    public String getImage () {
        return image;
    }

    public void setImage ( String image ) {
        this.image = image;
    }

    public Integer getWeight () {
        return weight;
    }

    public void setWeight ( Integer weight ) {
        this.weight = weight;
    }
}
