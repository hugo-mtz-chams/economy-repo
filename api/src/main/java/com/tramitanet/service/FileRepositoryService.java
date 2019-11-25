/**
 * 
 */
package com.tramitanet.service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.tramitanet.model.ArchivoDTO;

/**
 * @author evomatik
 *
 */
@Service
public class FileRepositoryService {
	
	public List<ArchivoDTO> listarFilesAndFolder() {
		List<ArchivoDTO> archivos = null;
		File carpeta = new File("/Users/evomatik/tramitanet/archivos");
		File[] files = carpeta.listFiles();
		if (files == null || files.length == 0) {
		 System.out.println("No hay elementos dentro de la carpeta actual");
		 return null;
		}
		else {
			archivos = new ArrayList<ArchivoDTO>();
			for (int i=0; i< files.length; i++) {
				 System.out.println(files[i]);
				 ArchivoDTO a = new ArchivoDTO();
				 a.setNombreArchivo(files[i].getName());
				 a.setFolder(files[i].getParent());
				 archivos.add(a);
			}
		}
		return archivos;
	}
}
