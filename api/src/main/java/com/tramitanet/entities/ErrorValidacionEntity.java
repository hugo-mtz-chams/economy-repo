/**
 * 
 */
package com.tramitanet.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * @author evomatik
 *
 */
@Entity
@Table(name="Error_Validacion")
public class ErrorValidacionEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_error_validacion")
	private Long idErrorValidacion;
	
	@Column(name="campo_invalido")
	private String campoInvalido;
	
	@Column(name="valor_proforma")
	private String valorProforma;
	
	@Column(name="valor_reportado")
	private String valorReportado;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="id_proforma")
	private ProformaEntity proforma;
	
	@Column(name="id_archivo")
	private Long idArchivoValidacion;
	
	/**
	 * @return the idArchivoValidacion
	 */
	public Long getIdArchivoValidacion() {
		return idArchivoValidacion;
	}

	/**
	 * @param idArchivoValidacion the idArchivoValidacion to set
	 */
	public void setIdArchivoValidacion(Long idArchivoValidacion) {
		this.idArchivoValidacion = idArchivoValidacion;
	}

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
