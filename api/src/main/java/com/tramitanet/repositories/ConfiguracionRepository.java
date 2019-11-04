/**
 * 
 */
package com.tramitanet.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tramitanet.entities.ConfiguracionEntity;

/**
 * @author evomatik
 *
 */
@Repository
public interface ConfiguracionRepository extends JpaRepository<ConfiguracionEntity, Long>{
	
	public ConfiguracionEntity findByCodigo(String codigo);
	
}
