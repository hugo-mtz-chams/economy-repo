/**
 * 
 */
package com.tramitanet.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tramitanet.entities.ArchivoValidacionEntity;

/**
 * @author evomatik
 *
 */
@Repository
public interface ArchivoValidacionRepository extends JpaRepository<ArchivoValidacionEntity, Long>{

}
