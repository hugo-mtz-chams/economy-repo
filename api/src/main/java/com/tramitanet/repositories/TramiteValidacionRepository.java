/**
 * 
 */
package com.tramitanet.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tramitanet.entities.TramiteValidacionEntity;

/**
 * @author evomatik
 *
 */
@Repository
public interface TramiteValidacionRepository extends JpaRepository<TramiteValidacionEntity, Long>{

}
