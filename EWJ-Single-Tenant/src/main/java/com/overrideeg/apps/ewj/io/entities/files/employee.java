package com.overrideeg.apps.ewj.io.entities.files;

import com.overrideeg.apps.ewj.enums.gender;
import com.overrideeg.apps.ewj.io.valueObjects.OMasterFile;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Entity
@AttributeOverrides({
        @AttributeOverride(name = "name.ar", column = @Column(name = "name_ar")),
        @AttributeOverride(name = "name.en", column = @Column(name = "name_en"))
})
public class employee extends OMasterFile implements UserDetails {

    /* region basic data */
    @Column(unique = true,nullable = false)
    private String username;
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private gender gender;
    private String jobTitle;
    @Column(unique = true,nullable = false)
    private String mobile;
    @ManyToOne(fetch = FetchType.EAGER)
    private location location;
    private Date birthDate;
    private String fcmToken;
    private String tempCode;
   /* end region  */
    @Column(columnDefinition="tinyint(1) default 1")
    private boolean isAccountNonExpired;
    @Column(columnDefinition="tinyint(1) default 1")
    private boolean isAccountNonLocked;
    @Column(columnDefinition="tinyint(1) default 1")
    private boolean isCredentialsNonExpired;
    @Column(columnDefinition="tinyint(1) default 1")
    private boolean isEnabled;
    @ElementCollection(fetch = FetchType.EAGER)
    private Collection<GrantedAuthority> authorities;
    @Temporal(TemporalType.DATE)



    @Override
    public String getUsername () {
        return username;
    }

    public void setUsername ( String username ) {
        this.username = username;
    }

    public String getEmail () {
        return email;
    }

    public void setEmail ( String email ) {
        this.email = email;
    }

    @Override
    public String getPassword () {
        return password;
    }

    public void setPassword ( String password ) {
        this.password = password;
    }

    public com.overrideeg.apps.ewj.enums.gender getGender () {
        return gender;
    }

    public void setGender ( com.overrideeg.apps.ewj.enums.gender gender ) {
        this.gender = gender;
    }

    public String getJobTitle () {
        return jobTitle;
    }

    public void setJobTitle ( String jobTitle ) {
        this.jobTitle = jobTitle;
    }

    public String getMobile () {
        return mobile;
    }

    public void setMobile ( String mobile ) {
        this.mobile = mobile;
    }

    public com.overrideeg.apps.ewj.io.entities.files.location getLocation () {
        return location;
    }

    public void setLocation ( com.overrideeg.apps.ewj.io.entities.files.location location ) {
        this.location = location;
    }

    @Override
    public boolean isAccountNonExpired () {
        return isAccountNonExpired;
    }

    public void setAccountNonExpired ( boolean accountNonExpired ) {
        isAccountNonExpired = accountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked () {
        return isAccountNonLocked;
    }

    public void setAccountNonLocked ( boolean accountNonLocked ) {
        isAccountNonLocked = accountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired () {
        return isCredentialsNonExpired;
    }

    public void setCredentialsNonExpired ( boolean credentialsNonExpired ) {
        isCredentialsNonExpired = credentialsNonExpired;
    }

    @Override
    public boolean isEnabled () {
        return isEnabled;
    }

    public void setEnabled ( boolean enabled ) {
        isEnabled = enabled;
    }

    @Override
    public Collection<GrantedAuthority> getAuthorities () {
        return authorities;
    }

    public void setAuthorities ( Collection<GrantedAuthority> authorities ) {
        this.authorities = authorities;
    }

    public Date getBirthDate () {
        return birthDate;
    }

    public void setBirthDate ( Date birthDate ) {
        this.birthDate = birthDate;
    }

    public String getFcmToken () {
        return fcmToken;
    }

    public void setFcmToken ( String fcmToken ) {
        this.fcmToken = fcmToken;
    }

    public String getTempCode () {
        return tempCode;
    }

    public void setTempCode ( String tempCode ) {
        this.tempCode = tempCode;
    }

    @Override
    public String toString() {
        return "employee{" +
                "username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", gender=" + gender +
                ", jobTitle='" + jobTitle + '\'' +
                ", mobile='" + mobile + '\'' +
                ", location=" + location +
                ", birthDate=" + birthDate +
                ", fcmToken='" + fcmToken + '\'' +
                ", tempCode='" + tempCode + '\'' +
                ", isAccountNonExpired=" + isAccountNonExpired +
                ", isAccountNonLocked=" + isAccountNonLocked +
                ", isCredentialsNonExpired=" + isCredentialsNonExpired +
                ", isEnabled=" + isEnabled +
                ", authorities=" + authorities +
                '}';
    }
}
