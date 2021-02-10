package com.overrideeg.apps.ewj.io.valueObjects;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.util.Date;
import java.util.UUID;

@MappedSuperclass
@JsonInclude(JsonInclude.Include.NON_NULL)
public class OMasterTransaction {
    @Id
    @Column(length = 16)
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private UUID id;
    @CreatedDate
    private Date createdAt;
    @UpdateTimestamp
    private Date updatedAt;

    public UUID getId () {
        return id;
    }

    public void setId ( UUID id ) {
        this.id = id;
    }

    public Date getCreatedAt () {
        return createdAt;
    }

    public void setCreatedAt ( Date createdAt ) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt () {
        return updatedAt;
    }

    public void setUpdatedAt ( Date updatedAt ) {
        this.updatedAt = updatedAt;
    }
}
