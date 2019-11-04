/**
 * 
 */
package com.tramitanet.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * @author evomatik
 *
 */
@Entity
@Table(name="Archivo_Validacion")
public class ArchivoValidacionEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_archivo")
	private Long idArchivo;
	
	@Column(name="nombre_archivo")
	private String nombreArchivo;
	
	@Column(name="fecha_carga")
	private Date fechaCarga;
	
	@OneToMany(
	    mappedBy = "archivo",
        cascade = CascadeType.ALL,
        orphanRemoval = true
    )
	private List<TramiteValidacionEntity> tramites;

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
	public List<TramiteValidacionEntity> getTramites() {
		return tramites;
	}

	/**
	 * @param tramites the tramites to set
	 */
	public void setTramites(List<TramiteValidacionEntity> tramites) {
		this.tramites = tramites;
	}
	
	
	
}
