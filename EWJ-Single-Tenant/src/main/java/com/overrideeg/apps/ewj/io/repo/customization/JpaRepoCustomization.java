package com.overrideeg.apps.ewj.io.repo.customization;

import org.springframework.data.jpa.repository.support.JpaEntityInformation;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;

import javax.persistence.EntityManager;

@NoRepositoryBean
public class JpaRepoCustomization <T> extends SimpleJpaRepository<T, String>{
    /* Constant(s): */

    /* Instance variable(s): */
    protected EntityManager mEntityManager;
    private Class<T> inEntityType;

    /**
     * Creates a repository instance for the entity specified by the supplied entity
     * information that uses the supplied entity manager.
     * Constructor from superclass.
     *
     * @param inEntityInformation Entity information.
     * @param inEntityManager     Entity manager.
     */
    public JpaRepoCustomization(final JpaEntityInformation<T, ?> inEntityInformation,
                                           final EntityManager inEntityManager) {
        super(inEntityInformation, inEntityManager);
        mEntityManager = inEntityManager;
        this.inEntityType = inEntityInformation.getJavaType();
    }


    /**
     * Creates a repository instance for the supplied entity type that uses the
     * supplied entity manager.
     * Constructor from superclass.
     *
     * @param inEntityType    Entity type.
     * @param inEntityManager Entity manager.
     */
    public JpaRepoCustomization(final Class<T> inEntityType,
                                           final EntityManager inEntityManager) {
        super(inEntityType, inEntityManager);
        mEntityManager = inEntityManager;
    }


}
