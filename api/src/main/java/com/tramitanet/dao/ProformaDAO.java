/**
 * 
 */
package com.tramitanet.dao;

import java.util.ArrayList;
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
	
	public List<EstatusTramiteCliente> findTramitesByClient(String claveCliente){
		List<EstatusTramiteCliente> resumenTramites = proformaRepository.findTramitesByEstatusAndCliente(claveCliente);
		return resumenTramites;
	}
	
	public List<Reference> findReferenceNumbersByClientAndDate(String claveCliente){
		return proformaRepository.findReferenciasByCliente(claveCliente);
	}
	
	/**
	 * 
	 */
	public ProformaDAO() {
		// TODO Auto-generated constructor stub
	}

}
