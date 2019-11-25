/**
 * 
 */
package com.tramitanet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.tramitanet.dao.ErroresService;
import com.tramitanet.model.ArchivoDTO;
import com.tramitanet.model.ArchivoValidacion;
import com.tramitanet.model.ErrorValidacion;
import com.tramitanet.service.FileProcesorService;
import com.tramitanet.service.FileRepositoryService;

/**
 * @author evomatik
 *
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/tramitanet")
public class FileProcessingController {
	
	@Autowired
	FileProcesorService fileProcesorService;
	
	@Autowired
	ErroresService errorService;
	
	@Autowired
	FileRepositoryService fileRepositoryService;
	
	@PostMapping("/proformas/validacion/procesaArchivo")
	public ArchivoValidacion procesaArchivo(@RequestParam("file") MultipartFile file){
		return fileProcesorService.uploadValidationDataFile(file);
	}
	
	@GetMapping("/proformas/validacion/errores/archivo/{idArchivo}")
	public List<ErrorValidacion> listarErroresArchivo(@PathVariable("idArchivo") Long idArchivo){
		List<ErrorValidacion> result = errorService.findErroresByArchivo(idArchivo); 
		return CollectionUtils.isEmpty(result) ? null : result;
	}
	
	
	@GetMapping("/archivos/listar")
	public List<ArchivoDTO> listarArchivos(){
		List<ArchivoDTO> archivos = fileRepositoryService.listarFilesAndFolder();
		return CollectionUtils.isEmpty(archivos) ? null : archivos;
	}
	
	@GetMapping("/archivos/listar/{folderName}")
	public List<ArchivoDTO> listarFolderArchivos(@PathVariable("folderName") String folderName){
		List<ArchivoDTO> archivos = fileRepositoryService.listarFilesAndFolder(folderName);
		return CollectionUtils.isEmpty(archivos) ? null : archivos;
	}
	
	@PostMapping("/archivos/adjuntar")
	public void adjuntarArchivos(@RequestParam("file") MultipartFile file, @RequestParam("destinationFolder") String destinationFolder,
			@RequestParam("fileName") String fileName){
		fileRepositoryService.uploadCedulaTramite(file, destinationFolder, fileName);
	}
}
