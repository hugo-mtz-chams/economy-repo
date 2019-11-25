/**
 * 
 */
package com.tramitanet.controller;

import java.io.ByteArrayInputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.tramitanet.dao.ProformaDAO;
import com.tramitanet.model.EstatusTramiteCliente;
import com.tramitanet.model.Proforma;
import com.tramitanet.model.Reference;
import com.tramitanet.service.FileProcesorService;

/**
 * @author evomatik
 *
 */
@CrossOrigin(origins = "http://localhost:4200")
//@CrossOrigin(origins = "http://167.71.90.199:4200")
@RestController
@RequestMapping("/tramitanet")
public class ProformaController {

	@Autowired
	ProformaDAO proformaService;
	
	@Autowired
	FileProcesorService fileProcesorService;
	
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
	
	@GetMapping("/proformas/cliente/{claveCliente}/resumen/{fechaIngreso}")
	public List<EstatusTramiteCliente> findTotalsByClientAndDate(@PathVariable("claveCliente") String claveCliente, @PathVariable("fechaIngreso") String fechaIngreso) {
		Date fecha;
		try {
			fecha = new SimpleDateFormat("dd-MM-yyyy").parse(fechaIngreso);
			List<EstatusTramiteCliente> resumen = proformaService.findTramitesByClientAndFechaIngreso(claveCliente, fecha);
			if(CollectionUtils.isEmpty(resumen)) {
				return null;
			}
			return resumen; 
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return null; 
	}
	
	@GetMapping("/proformas/cliente/{claveCliente}/referencias/{fechaIngreso}")
	public List<Reference> findTotalReferencesByClient(@PathVariable("claveCliente") String claveCliente, @PathVariable("fechaIngreso") String fechaIngreso) {
		try {
			Date fecha = new SimpleDateFormat("dd-MM-yyyy").parse(fechaIngreso);
			List<Reference> resumen = proformaService.findReferenceNumbersByClientAndDate(claveCliente, fecha);
			if(CollectionUtils.isEmpty(resumen)) {
				return null;
			}
			
			return resumen; 
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		
		return null; 
	}
	
	@GetMapping("/proformas/cliente/{claveCliente}/referencia/{numReferencia}/{fechaIngreso}")
	public List<Proforma> findTramitesByReferenciaAndFechaIngreso(@PathVariable("claveCliente") String claveCliente, 
			@PathVariable("numReferencia") String numReferencia,
			@PathVariable("fechaIngreso") String fechaIngreso) {
		
		try {
			Date fecha = new SimpleDateFormat("dd-MM-yyyy").parse(fechaIngreso);
			List<Proforma> resumen = proformaService.findTramitesByReferenceAndDate(numReferencia, fecha, claveCliente);
			if(CollectionUtils.isEmpty(resumen)) {
				return null;
			}
			return resumen;
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	
	@GetMapping("/proformas/capturista/{claveCapturista}/{fechaIngreso}")
	public List<Proforma> findTramitesByCapturistaAndFechaIngreso(@PathVariable("claveCapturista") String claveCapturista, 
			@PathVariable("fechaIngreso") String fechaIngreso) {
			Date fecha = null;
			String fechaIngresoStr = "";
			try {	
				fecha = new SimpleDateFormat("dd-MM-yyyy").parse(fechaIngreso);
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
				fechaIngresoStr = sdf.format(fecha);
				
			} catch (ParseException e) {
				e.printStackTrace();
			}

			List<Proforma> resumen = proformaService.findTramitesByCapturistaAndDate(fechaIngresoStr,claveCapturista);
			if(CollectionUtils.isEmpty(resumen)) {
				return null;
			}
			return resumen;
		
	}
	
	@GetMapping("/proformas/analista/{claveAnalista}/{fechaIngreso}")
	public List<Proforma> findTramitesByAnalistaAndFechaIngreso(@PathVariable("claveAnalista") String claveAnalista, 
			@PathVariable("fechaIngreso") String fechaIngreso) {
			Date fecha = null;
			String fechaIngresoStr = "";
			try {
				fecha = new SimpleDateFormat("dd-MM-yyyy").parse(fechaIngreso);
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
				fechaIngresoStr = sdf.format(fecha);
				
			} catch (ParseException e) {
				e.printStackTrace();
			}

			List<Proforma> resumen = proformaService.findTramitesByAnalistaAndDate(fechaIngresoStr,claveAnalista);
			if(CollectionUtils.isEmpty(resumen)) {
				return null;
			}
			return resumen;
		
	}
	
	@GetMapping( path =  "/proformas/capturista/archivo/{claveCapturista}/{fechaIngreso}", produces = "application/vnd.ms-excel;charset=UTF-8")
	public ResponseEntity<InputStreamResource> generaArchivoCapturista(@PathVariable("claveCapturista") String claveCapturista, 
			@PathVariable("fechaIngreso") String fechaIngreso){
		
		Date fecha = null;
		String fechaIngresoStr = "";
		try {
			fecha = new SimpleDateFormat("dd-MM-yyyy").parse(fechaIngreso);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			fechaIngresoStr = sdf.format(fecha);
			
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		ByteArrayInputStream in = null;
		try {
			in = fileProcesorService.generarArchivoProformasParaCapturista(claveCapturista, fechaIngresoStr);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().build();
		}
		String fechaDescarga = new SimpleDateFormat("dd-MM-yyyyHHmmss").format(Calendar.getInstance().getTime());
		String fileName = claveCapturista+"_"+fechaIngreso+"_"+fechaDescarga;
		HttpHeaders headers = new HttpHeaders();
		headers.add("Content-Disposition", "attachment; filename="+fileName);
		headers.setContentType(MediaType.parseMediaType("application/vnd.ms-excel"));


     return ResponseEntity
                  .ok()
                  .headers(headers)
                  .body(new InputStreamResource(in));
	}
	
	@GetMapping( path =  "/proformas/analista/archivo/{claveAnalista}/{fechaIngreso}", produces = "application/vnd.ms-excel;charset=UTF-8")
	public ResponseEntity<InputStreamResource> generaArchivoAnalista(@PathVariable("claveAnalista") String claveAnalista, 
			@PathVariable("fechaIngreso") String fechaIngreso){
		
		Date fecha = null;
		String fechaIngresoStr = "";
		try {
			fecha = new SimpleDateFormat("dd-MM-yyyy").parse(fechaIngreso);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			fechaIngresoStr = sdf.format(fecha);
			
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		ByteArrayInputStream in = null;
		try {
			in = fileProcesorService.generarArchivoProformasParaAnalista(claveAnalista, fechaIngresoStr);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().build();
		}
		String fechaDescarga = new SimpleDateFormat("dd-MM-yyyyHHmmss").format(Calendar.getInstance().getTime());
		String fileName = claveAnalista+"_"+fechaIngreso+"_"+fechaDescarga;
		HttpHeaders headers = new HttpHeaders();
		headers.add("Content-Disposition", "attachment; filename="+fileName);
		headers.setContentType(MediaType.parseMediaType("application/vnd.ms-excel"));


     return ResponseEntity
                  .ok()
                  .headers(headers)
                  .body(new InputStreamResource(in));
	}
	
	
	@PostMapping("/proformas/procesaArchivo")
	public void procesaArchivo(@RequestParam("file") MultipartFile file){
		fileProcesorService.procesar(file);
	}
	
	@PostMapping("/proformas/actualiza/archivo/tramites")
	public void procesaActualizacionArchivo(@RequestParam("file") MultipartFile file){
		fileProcesorService.actualizaDatosDelPermiso(file);
	}
}
