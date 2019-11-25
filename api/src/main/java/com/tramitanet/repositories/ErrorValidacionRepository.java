/**
 * 
 */
package com.tramitanet.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tramitanet.entities.ErrorValidacionEntity;

/**
 * @author evomatik
 *
 */
public interface ErrorValidacionRepository extends JpaRepository<ErrorValidacionEntity, Long>{
	public List<ErrorValidacionEntity> findByIdArchivoValidacion(Long idArchivoValidacion);
}
