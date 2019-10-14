/**
 * 
 */
package com.tramitanet.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.tramitanet.entities.ProformaEntity;
import com.tramitanet.model.EstatusTramiteCliente;

/**
 * @author evomatik
 *
 */
@Repository
public interface ProformaRepository extends JpaRepository<ProformaEntity, Long>{
	public List<ProformaEntity> findByClaveCliente(String claveCliente);
	
	@Query("SELECT new com.tramitanet.model.EstatusTramiteCliente( count(p.idProforma) as numeroTramites, p.estatus, p.claveCliente ) from ProformaEntity p where p.claveCliente = :claveCliente group by p.estatus, p.claveCliente")
	public List<EstatusTramiteCliente> findTramitesByEstatusAndCliente(@Param("claveCliente") String claveCliente);
}
