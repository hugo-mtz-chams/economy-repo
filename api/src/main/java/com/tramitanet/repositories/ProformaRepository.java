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
import com.tramitanet.model.Reference;

/**
 * @author evomatik
 *
 */
@Repository
public interface ProformaRepository extends JpaRepository<ProformaEntity, Long>{
	public List<ProformaEntity> findByClaveCliente(String claveCliente);
	
	@Query("SELECT new com.tramitanet.model.EstatusTramiteCliente( count(p.idProforma) as numeroTramites, p.estatus, p.claveCliente ) from ProformaEntity p where p.claveCliente = :claveCliente group by p.estatus, p.claveCliente")
	public List<EstatusTramiteCliente> findTramitesByEstatusAndCliente(@Param("claveCliente") String claveCliente);
	
	public List<ProformaEntity> findByNumReferenciaAndFechaIngreso(String numReferencia, String fechaIngreso);
	
	@Query("SELECT new com.tramitanet.model.Reference (" + 
			"  p.numReferencia, " + 
			"  COUNT(1), " + 
			"  sum(case when p.estatus = 'Aprobado' then 1 else 0 end) AS Aprobados, " + 
			"  sum(case when p.estatus = 'Rechazado' then 1 else 0 end) AS Rechazados, " + 
			"  sum(case when p.estatus = 'En proceso' then 1 else 0 end) AS EnProceso, " + 
			"  sum(case when p.estatus = 'En espera' then 1 else 0 end) AS EnEspera )" + 
			"FROM ProformaEntity p where p.claveCliente=:claveCliente and fecha_ingreso = :fechaIngreso group by num_referencia")
	public List<Reference> findReferenciasByCliente(@Param("claveCliente") String claveCliente, @Param("fechaIngreso") String fechaIngreso);
}
