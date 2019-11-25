package com.tramitanet.model;

import java.io.File;

public class ArchivoDTO {
	
	private String folder;
	private String nombreArchivo;
	private String fecha;
	private boolean directory;
	private boolean file;
	private File archivo;
	/**
	 * @return the folder
	 */
	public String getFolder() {
		return folder;
	}
	/**
	 * @param folder the folder to set
	 */
	public void setFolder(String folder) {
		this.folder = folder;
	}
	/**
	 * @return the nombreArchivo
	 */
	public String getNombreArchivo() {
		return nombreArchivo;
	}
	/**
	 * @param nombreArchivo the nombreArchivo to set
	 */
	public void setNombreArchivo(String nombreArchivo) {
		this.nombreArchivo = nombreArchivo;
	}
	/**
	 * @return the fecha
	 */
	public String getFecha() {
		return fecha;
	}
	/**
	 * @param fecha the fecha to set
	 */
	public void setFecha(String fecha) {
		this.fecha = fecha;
	}
	/**
	 * @return the directory
	 */
	public boolean isDirectory() {
		return directory;
	}
	/**
	 * @param directory the directory to set
	 */
	public void setDirectory(boolean directory) {
		this.directory = directory;
	}
	/**
	 * @return the file
	 */
	public boolean isFile() {
		return file;
	}
	/**
	 * @param file the file to set
	 */
	public void setFile(boolean file) {
		this.file = file;
	}
	/**
	 * @return the archivo
	 */
	public File getArchivo() {
		return archivo;
	}
	/**
	 * @param archivo the archivo to set
	 */
	public void setArchivo(File archivo) {
		this.archivo = archivo;
	}
	
	
	
}
