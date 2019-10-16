/**
 * 
 */
package com.tramitanet.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tramitanet.dao.ProformaDAO;
import com.tramitanet.model.EstatusTramiteCliente;
import com.tramitanet.model.Proforma;
import com.tramitanet.model.Reference;

/**
 * @author evomatik
 *
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/tramitanet")
public class ProformaController {

	@Autowired
	ProformaDAO proformaService;
	
	/**
	 * Retorna la lista de formas de un cliente, no se filtra por fecha
	 * se retornan todas las de la historia
	 * @param clientKey
	 * @return List<Proforma>
	 */
	@GetMapping("/proformas/cliente/{claveCliente}")
	public List<Proforma> findProformasByClient(@PathVariable("claveCliente") String clientKey){
		return proformaService.findByClaveCliente(clientKey);
	}
	
	/**
	 * Crea un nuevo registro de proforma y devuelve la proforma con el valor del
	 * identificador asignado
	 * @param proforma
	 * @return Proforma con id asignado
	 */
	@PostMapping("/proformas")
	public Proforma createProforma(@Valid @RequestBody Proforma proforma) {
		return proformaService.saveOrUpdate(proforma);
	}
	
	/**
	 * Retorna la lista de formas de un cliente, no se filtra por fecha
	 * se retornan todas las de la historia
	 * @param clientKey
	 * @return List<Proforma>
	 */
	@GetMapping("/proformas")
	public List<Proforma> findAllProformas(){
		return proformaService.findAll();
	}
	
	/**
	 * Retorna la lista de formas de un cliente, no se filtra por fecha
	 * se retornan todas las de la historia
	 * @param clientKey
	 * @return List<Proforma>
	 */
	@GetMapping("/proformas/{id}")
	public ResponseEntity<Proforma> findById(@PathVariable("id") Long id){
		
		Proforma proforma = proformaService.findById(id);
		if(ObjectUtils.isEmpty(proforma)) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok().body(proforma);
	}
	
	@PutMapping("/proformas")
	public ResponseEntity<Proforma> updateProforma(@Valid @RequestBody Proforma proforma) {
		Proforma validProforma = proformaService.findById(proforma.getIdProforma());
		if(ObjectUtils.isEmpty(validProforma)) {
			return ResponseEntity.notFound().build();
		}
		proforma = proformaService.saveOrUpdate(proforma);
		
		return ResponseEntity.ok().body(proforma); 
	}
	
	@GetMapping("/proformas/cliente/{claveCliente}/resumen")
	public List<EstatusTramiteCliente> findTotalsByClient(@PathVariable("claveCliente") String claveCliente) {
		List<EstatusTramiteCliente> resumen = proformaService.findTramitesByClient(claveCliente);
		if(CollectionUtils.isEmpty(resumen)) {
			return null;
		}
		return resumen; 
	}
	
	@GetMapping("/proformas/cliente/{claveCliente}/referencias")
	public List<Reference> findTotalReferencesByClient(@PathVariable("claveCliente") String claveCliente) {
		List<Reference> resumen = proformaService.findReferenceNumbersByClientAndDate(claveCliente);
		if(CollectionUtils.isEmpty(resumen)) {
			return null;
		}
		return resumen; 
	}
	
}
