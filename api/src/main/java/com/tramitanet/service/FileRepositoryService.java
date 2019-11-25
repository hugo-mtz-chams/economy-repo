/**
 * 
 */
package com.tramitanet.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.tramitanet.model.ArchivoDTO;

/**
 * @author evomatik
 *
 */
@Service
public class FileRepositoryService {
	
	String ROOT_FOLDER = "/Users/evomatik/tramitanet/archivos";
	
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
				 a.setDirectory(files[i].isDirectory());
				 a.setFile(files[i].isFile());
				 a.setArchivo(files[i]);
				 archivos.add(a);
			}
		}
		return archivos;
	}
	
	public List<ArchivoDTO> listarFilesAndFolder(String folder) {
		List<ArchivoDTO> archivos = null;
		String path = ROOT_FOLDER+"/"+folder;
		File carpeta = new File(path);
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
				 a.setDirectory(files[i].isDirectory());
				 a.setFile(files[i].isFile());
				 a.setArchivo(files[i]);
				 archivos.add(a);
			}
		}
		return archivos;
	}
	
	
	public void uploadCedulaTramite(MultipartFile multipartFile, String destinationFolder, String fileName) {
		try {
			FileInputStream file =(FileInputStream) multipartFile.getInputStream();
			String[] folders = destinationFolder.split("/");
			int num=0;
			StringBuffer path = new StringBuffer();
			
			for(String folder :folders) {
				if(num != 0) {
					path.append(folder).append("/");
				}
				num++;	
			}
			String uploadedFolder = ROOT_FOLDER+'/'+path.toString();
			String targetFilePath = uploadedFolder+fileName;
			File targetFile = new File(targetFilePath);
		    OutputStream outputStream = new FileOutputStream(targetFile);
		    int read;
            byte[] bytes = new byte[1024];

            while ((read = file.read(bytes)) != -1) {
                outputStream.write(bytes, 0, read);
            }
            outputStream.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
