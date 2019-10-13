/**
 * @author HUGO ARMANDO MARTINEZ
 * @date  2019-10-13
 */
package com.tramitanet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

/**
 * @author evomatik
 *
 */
@SpringBootApplication
@EnableJpaAuditing
public class TramitanetMainApplication {

	public static void main(String[] args) {
		SpringApplication.run(TramitanetMainApplication.class, args);
	}

}
