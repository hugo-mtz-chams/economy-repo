/**
 * 
 */
package com.tramitanet.dao;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tramitanet.entities.ProformaEntity;
import com.tramitanet.model.EstatusTramiteCliente;
import com.tramitanet.model.Proforma;
import com.tramitanet.model.Reference;
import com.tramitanet.repositories.ProformaRepository;

/**
 * @author evomatik
 *
 */
@Service
public class ProformaDAO {
	
	@Autowired
	ProformaRepository proformaRepository;
	
	
	public Proforma saveOrUpdate(Proforma proforma) {
		ProformaEntity entity = new ProformaEntity(); 
		BeanUtils.copyProperties(proforma, entity);
		proformaRepository.save(entity);
		BeanUtils.copyProperties(entity, proforma);
		return proforma;
	}
	
	public Proforma updateDatosPermiso(Proforma proforma) {
		Optional<ProformaEntity> entity = proformaRepository.findById(proforma.getIdProforma());
		if(entity.isPresent()) {
			ProformaEntity pe = entity.get();
			pe.setNumeroSolicitud(proforma.getNumeroSolicitud());
			pe.setPermiso(proforma.getPermiso());
			pe.setInicioVigencia(proforma.getInicioVigencia());
			proformaRepository.save(entity.get());
		}
		return proforma;
	}
	
	public List<Proforma> findByClaveCliente(String claveCliente){
		List<ProformaEntity> entities = proformaRepository.findByClaveCliente(claveCliente);
		List<Proforma> proformas = new ArrayList<Proforma>();
		for(ProformaEntity entity : entities) {
			Proforma p = new Proforma();
			BeanUtils.copyProperties(entity, p);
			proformas.add(p);
		}
		return proformas;
	}
	
	public List<Proforma> findAll() {
		List<ProformaEntity> entities = proformaRepository.findAll();
		List<Proforma> proformas = new ArrayList<Proforma>();
		for(ProformaEntity entity : entities) {
			Proforma p = new Proforma();
			BeanUtils.copyProperties(entity, p);
			proformas.add(p);
		}
		return proformas;
	}
	
	public Proforma findById(Long id) {
		Proforma p = new Proforma();
		
		Optional<ProformaEntity> entity = proformaRepository.findById(id);
		
		if(entity!=null) {
			BeanUtils.copyProperties(entity, p);
			return p;
		}
		return null;
	}
	
	
	/**
	 * Retorna todas las proformas del cliente
	 * @param claveCliente
	 * @return List<EstatusTramiteCliente>
	 */
	public List<EstatusTramiteCliente> findTramitesByClient(String claveCliente){
		List<EstatusTramiteCliente> resumenTramites = proformaRepository.findTramitesByEstatusAndCliente(claveCliente);
		return resumenTramites;
	}
	
	/**
	 * Retorna todas las proformas del cliente
	 * @param claveCliente
	 * @return List<EstatusTramiteCliente>
	 */
	public List<EstatusTramiteCliente> findTramitesByClientAndFechaIngreso(String claveCliente, Date fechaIngreso){
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String fechaIngresoStr = sdf.format(fechaIngreso);
		List<EstatusTramiteCliente> resumenTramites = proformaRepository.findTramitesByEstatusAndClienteAndFechaIngreso(claveCliente, fechaIngresoStr);
		
		//Se agrega un elemento con el total de referencias
		long totalReferenceByDate = proformaRepository.findTotalReferenciasByDate(claveCliente, fechaIngresoStr);
		EstatusTramiteCliente totalReferencia = new EstatusTramiteCliente(totalReferenceByDate, "Referencias", claveCliente);
		resumenTramites.add(totalReferencia);
		
		long totaltramitesByDate = proformaRepository.findTotalTramitesByDate(claveCliente, fechaIngresoStr);
		EstatusTramiteCliente totalTramites = new EstatusTramiteCliente(totaltramitesByDate, "Tramites", claveCliente);
		resumenTramites.add(totalTramites);

		return resumenTramites;
	}
	
	
	
	/**
	 * Retorna todos los numeros de referencia con lso totales de tramites y subtotales por estado de trámite
	 * 
	 * @param claveCliente
	 * @param fechaIngreso
	 * @return List<Reference>
	 */
	public List<Reference> findReferenceNumbersByClientAndDate(String claveCliente, Date fechaIngreso){
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		String fecha = dateFormat.format(fechaIngreso);
		return proformaRepository.findReferenciasByCliente(claveCliente, fecha);
	}
	
	public List<Proforma> findTramitesByReferenceAndDate(String numReferencia, Date fechaIngreso, String claveCliente){
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		String fecha = dateFormat.format(fechaIngreso);
		List<ProformaEntity> resumenTramites = proformaRepository.findByNumReferenciaAndFechaIngreso(numReferencia, fecha, claveCliente);
		
		List<Proforma> proformas = new ArrayList<Proforma>();
		for(ProformaEntity entity : resumenTramites) {
			Proforma p = new Proforma();
			BeanUtils.copyProperties(entity, p);
			proformas.add(p);
		}
		return proformas;
	}
	
	/**
	 * Retorna los registros de tabla proforma asignados a un capturista con base en la fecha seleccionada
	 * @param numReferencia 
	 * @param fechaIngreso
	 * @param claveCliente
	 * @return
	 */
	public List<Proforma> findTramitesByCapturistaAndDate(String fechaIngreso, String claveCapturista){
		List<ProformaEntity> resumenTramites = proformaRepository.findByCapturistaAndFechaIngreso(claveCapturista, fechaIngreso);
		
		List<Proforma> proformas = new ArrayList<Proforma>();
		for(ProformaEntity entity : resumenTramites) {
			Proforma p = new Proforma();
			BeanUtils.copyProperties(entity, p);
			proformas.add(p);
		}
		return proformas;
	}
	
	/**
	 * Retorna los registros de tabla proforma asignados a un capturista con base en la fecha seleccionada
	 * @param numReferencia 
	 * @param fechaIngreso
	 * @param claveCliente
	 * @return
	 */
	public List<Proforma> findTramitesByAnalistaAndDate(String fechaIngreso, String claveAnalista){
		List<ProformaEntity> resumenTramites = proformaRepository.findByAnalistaAndFechaIngreso(claveAnalista, fechaIngreso);
		
		List<Proforma> proformas = new ArrayList<Proforma>();
		for(ProformaEntity entity : resumenTramites) {
			Proforma p = new Proforma();
			BeanUtils.copyProperties(entity, p);
			proformas.add(p);
		}
		return proformas;
	}
	
	/**
	 * 
	 */
	public ProformaDAO() {
		// TODO Auto-generated constructor stub
	}

}
