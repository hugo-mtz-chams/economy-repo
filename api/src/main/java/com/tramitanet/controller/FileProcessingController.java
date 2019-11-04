/**
 * 
 */
package com.tramitanet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.tramitanet.service.FileProcesorService;

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
	
	
	@PostMapping("/proformas/validacion/procesaArchivo")
	public void procesaArchivo(@RequestParam("file") MultipartFile file){
		fileProcesorService.uploadValidationDataFile(file);
	}
	
}
