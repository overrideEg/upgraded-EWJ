package com.overrideeg.apps.ewj.io.entities.docs.transactions;

import com.overrideeg.apps.ewj.io.entities.files.employee;
import com.overrideeg.apps.ewj.io.valueObjects.OMasterTransaction;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class employeeInContactWith  extends OMasterTransaction {
    @ManyToOne(fetch = FetchType.LAZY)
    private com.overrideeg.apps.ewj.io.entities.files.employee employee;
    @OneToMany(fetch = FetchType.LAZY)
    private List<employee> contacts;

    public com.overrideeg.apps.ewj.io.entities.files.employee getEmployee () {
        return employee;
    }

    public void setEmployee ( com.overrideeg.apps.ewj.io.entities.files.employee employee ) {
        this.employee = employee;
    }

    public List<com.overrideeg.apps.ewj.io.entities.files.employee> getContacts () {
        return contacts;
    }

    public void setContacts ( List<com.overrideeg.apps.ewj.io.entities.files.employee> contacts ) {
        this.contacts = contacts;
    }
}
