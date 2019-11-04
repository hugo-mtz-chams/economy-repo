/**
 * 
 */
package com.tramitanet.model;

import java.util.Date;
import java.util.List;

/**
 * @author evomatik
 *
 */
public class ArchivoValidacion {
	
	private Long idArchivo;
	
	private String nombreArchivo;
	
	private Date fechaCarga;
	
	private List<TramiteValidacion> tramites;

	/**
	 * @return the idArchivo
	 */
	public Long getIdArchivo() {
		return idArchivo;
	}

	/**
	 * @param idArchivo the idArchivo to set
	 */
	public void setIdArchivo(Long idArchivo) {
		this.idArchivo = idArchivo;
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
	 * @return the fechaCarga
	 */
	public Date getFechaCarga() {
		return fechaCarga;
	}

	/**
	 * @param fechaCarga the fechaCarga to set
	 */
	public void setFechaCarga(Date fechaCarga) {
		this.fechaCarga = fechaCarga;
	}

	/**
	 * @return the tramites
	 */
	public List<TramiteValidacion> getTramites() {
		return tramites;
	}

	/**
	 * @param tramites the tramites to set
	 */
	public void setTramites(List<TramiteValidacion> tramites) {
		this.tramites = tramites;
	}
	
	
	
}
