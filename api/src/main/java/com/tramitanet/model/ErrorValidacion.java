/**
 * 
 */
package com.tramitanet.model;

import com.tramitanet.entities.ProformaEntity;

/**
 * @author evomatik
 *
 */
public class ErrorValidacion {
	
	private Long idErrorValidacion;
	
	private String campoInvalido;
	
	private String valorProforma;
	
	private String valorReportado;
	
	private Long idProforma;
	
	private ProformaEntity proforma;

	/**
	 * @return the idErrorValidacion
	 */
	public Long getIdErrorValidacion() {
		return idErrorValidacion;
	}

	/**
	 * @param idErrorValidacion the idErrorValidacion to set
	 */
	public void setIdErrorValidacion(Long idErrorValidacion) {
		this.idErrorValidacion = idErrorValidacion;
	}

	/**
	 * @return the campoInvalido
	 */
	public String getCampoInvalido() {
		return campoInvalido;
	}

	/**
	 * @param campoInvalido the campoInvalido to set
	 */
	public void setCampoInvalido(String campoInvalido) {
		this.campoInvalido = campoInvalido;
	}

	/**
	 * @return the valorProforma
	 */
	public String getValorProforma() {
		return valorProforma;
	}

	/**
	 * @param valorProforma the valorProforma to set
	 */
	public void setValorProforma(String valorProforma) {
		this.valorProforma = valorProforma;
	}

	/**
	 * @return the valorReportado
	 */
	public String getValorReportado() {
		return valorReportado;
	}

	/**
	 * @param valorReportado the valorReportado to set
	 */
	public void setValorReportado(String valorReportado) {
		this.valorReportado = valorReportado;
	}

	/**
	 * @return the idProforma
	 */
	public Long getIdProforma() {
		return idProforma;
	}

	/**
	 * @param idProforma the idProforma to set
	 */
	public void setIdProforma(Long idProforma) {
		this.idProforma = idProforma;
	}

	/**
	 * @return the proforma
	 */
	public ProformaEntity getProforma() {
		return proforma;
	}

	/**
	 * @param proforma the proforma to set
	 */
	public void setProforma(ProformaEntity proforma) {
		this.proforma = proforma;
	}
	
	

}
