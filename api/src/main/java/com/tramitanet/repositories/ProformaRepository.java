/**
 * 
 */
package com.tramitanet.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tramitanet.entities.ProformaEntity;

/**
 * @author evomatik
 *
 */
@Repository
public interface ProformaRepository extends JpaRepository<ProformaEntity, Long>{
	public List<ProformaEntity> findByClaveCliente(String claveCliente);
}
