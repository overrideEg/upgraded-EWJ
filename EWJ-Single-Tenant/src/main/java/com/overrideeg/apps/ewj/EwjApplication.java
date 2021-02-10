package com.overrideeg.apps.ewj;

import com.overrideeg.apps.ewj.utils.FileStorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableCaching
@EntityScan(basePackages = {"com.overrideeg.apps.ewj.io.entities"})
@EnableJpaAuditing
@EnableConfigurationProperties({FileStorageProperties.class})
@EnableTransactionManagement
@EnableGlobalMethodSecurity(prePostEnabled = true, proxyTargetClass = true)
public class EwjApplication {

    public static void main ( String[] args ) {
        SpringApplication.run(EwjApplication.class, args);
    }

}
