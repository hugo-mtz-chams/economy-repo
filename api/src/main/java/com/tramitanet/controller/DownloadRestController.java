/**
 * 
 */
package com.tramitanet.controller;

import java.io.ByteArrayInputStream;
import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;

import javax.servlet.ServletContext;

import org.apache.tomcat.util.http.fileupload.ByteArrayOutputStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tramitanet.FileRepositoryConstant;

/**
 * @author evomatik
 *
 */
@RestController
@CrossOrigin(origins = {"http://localhost:4200","http://167.71.90.199:4200"})
@RequestMapping("/tramitanet/download")
public class DownloadRestController {
	
	@Autowired
	ServletContext context;
 
	@RequestMapping(value = "/{folder}/{fileName}", method = RequestMethod.GET, produces = "application/pdf")
	public ResponseEntity<InputStreamResource> download(@PathVariable("folder") String folder, @PathVariable("fileName") String fileName) throws IOException {
	  System.out.println("Calling Download:- " + fileName);
	  String file =FileRepositoryConstant.ROOT_FOLDER_PATH+"/"+folder+"/"+fileName;
	  File archivo = new File(file);
	  
	  FileInputStream fis = new FileInputStream(archivo);
      //System.out.println(file.exists() + "!!");
      //InputStream in = resource.openStream();
      ByteArrayOutputStream bos = new ByteArrayOutputStream();
      byte[] buf = new byte[1024];
      try {
          for (int readNum; (readNum = fis.read(buf)) != -1;) {
              bos.write(buf, 0, readNum); //no doubt here is 0
              //Writes len bytes from the specified byte array starting at offset off to this byte array output stream.
              System.out.println("read " + readNum + " bytes,");
          }
      } catch (IOException ex) {
          ex.printStackTrace();
      }
      byte[] bytes = bos.toByteArray();
	  
	  ByteArrayInputStream baos = new ByteArrayInputStream(bytes);
	  HttpHeaders headers = new HttpHeaders();
	  headers.setContentType(MediaType.parseMediaType("application/pdf"));
	  headers.add("Access-Control-Allow-Headers", "Content-Type");
	  headers.add("Content-Disposition", "filename=" + fileName);
	  headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
	  headers.add("Pragma", "no-cache");
	  headers.add("Expires", "0");
	 
	  return ResponseEntity
              .ok()
              .headers(headers)
              .body(new InputStreamResource(baos));
	 
	}
}
