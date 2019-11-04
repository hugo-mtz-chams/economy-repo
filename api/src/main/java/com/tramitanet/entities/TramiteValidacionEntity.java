/**
 * 
 */
package com.tramitanet.entities;

import java.util.Date;

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
@Table(name="Tramites_Validacion")
public class TramiteValidacionEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_tramite")
	private Long idTramite;
	
	@Column(name="Folio_Tramite")
	private String folioTramite;
	
	@Column(name="Estatus_Tramite")
	private String estatusTramite;
	
	@Column(name="Cantidad_UMC")
	private Long cantidadUMC;
	
	@Column(name="Cantidad_UMT")
	private Long cantidadUMT;
	
	@Column(name="Desc_Mercancia")
	private String descMercancia;
	
	@Column(name="Numero_Factura")
	private String numFactura;
	
	@Column(name="Fec_Factura")
	private Date fecFactura;
	
	@Column(name="Sentido_Dictamen")
	private String sentidoDictamen;
	
	@Column(name="Pais_Origen")
	private String paisOrigen;
	
	@Column(name="Pais_Destino")
	private String paisDestino;
	
	@Column(name="Moneda_Comercial")
	private String monedaComercial;
	
	@Column(name="Precio_Unitario")
	private Double precioUnitario;
	
	@Column(name="Fraccion")
	private String fraccion;
	
	@Column(name="Razon_Social_Exp")
	private String razonSocialExp;
	
	@Column(name="Domicilio_Exp")
	private String domicilioExp;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_archivo")
	private ArchivoValidacionEntity archivo;

	/**
	 * @return the idTramite
	 */
	public Long getIdTramite() {
		return idTramite;
	}

	/**
	 * @param idTramite the idTramite to set
	 */
	public void setIdTramite(Long idTramite) {
		this.idTramite = idTramite;
	}

	/**
	 * @return the folioTramite
	 */
	public String getFolioTramite() {
		return folioTramite;
	}

	/**
	 * @param folioTramite the folioTramite to set
	 */
	public void setFolioTramite(String folioTramite) {
		this.folioTramite = folioTramite;
	}

	/**
	 * @return the estatusTramite
	 */
	public String getEstatusTramite() {
		return estatusTramite;
	}

	/**
	 * @param estatusTramite the estatusTramite to set
	 */
	public void setEstatusTramite(String estatusTramite) {
		this.estatusTramite = estatusTramite;
	}

	/**
	 * @return the cantidadUMC
	 */
	public Long getCantidadUMC() {
		return cantidadUMC;
	}

	/**
	 * @param cantidadUMC the cantidadUMC to set
	 */
	public void setCantidadUMC(Long cantidadUMC) {
		this.cantidadUMC = cantidadUMC;
	}

	/**
	 * @return the cantidadUMT
	 */
	public Long getCantidadUMT() {
		return cantidadUMT;
	}

	/**
	 * @param cantidadUMT the cantidadUMT to set
	 */
	public void setCantidadUMT(Long cantidadUMT) {
		this.cantidadUMT = cantidadUMT;
	}

	/**
	 * @return the descMercancia
	 */
	public String getDescMercancia() {
		return descMercancia;
	}

	/**
	 * @param descMercancia the descMercancia to set
	 */
	public void setDescMercancia(String descMercancia) {
		this.descMercancia = descMercancia;
	}

	/**
	 * @return the numFactura
	 */
	public String getNumFactura() {
		return numFactura;
	}

	/**
	 * @param numFactura the numFactura to set
	 */
	public void setNumFactura(String numFactura) {
		this.numFactura = numFactura;
	}

	/**
	 * @return the fecFactura
	 */
	public Date getFecFactura() {
		return fecFactura;
	}

	/**
	 * @param fecFactura the fecFactura to set
	 */
	public void setFecFactura(Date fecFactura) {
		this.fecFactura = fecFactura;
	}

	/**
	 * @return the sentidoDictamen
	 */
	public String getSentidoDictamen() {
		return sentidoDictamen;
	}

	/**
	 * @param sentidoDictamen the sentidoDictamen to set
	 */
	public void setSentidoDictamen(String sentidoDictamen) {
		this.sentidoDictamen = sentidoDictamen;
	}

	/**
	 * @return the paisOrigen
	 */
	public String getPaisOrigen() {
		return paisOrigen;
	}

	/**
	 * @param paisOrigen the paisOrigen to set
	 */
	public void setPaisOrigen(String paisOrigen) {
		this.paisOrigen = paisOrigen;
	}

	/**
	 * @return the paisDestino
	 */
	public String getPaisDestino() {
		return paisDestino;
	}

	/**
	 * @param paisDestino the paisDestino to set
	 */
	public void setPaisDestino(String paisDestino) {
		this.paisDestino = paisDestino;
	}

	/**
	 * @return the monedaComercial
	 */
	public String getMonedaComercial() {
		return monedaComercial;
	}

	/**
	 * @param monedaComercial the monedaComercial to set
	 */
	public void setMonedaComercial(String monedaComercial) {
		this.monedaComercial = monedaComercial;
	}

	/**
	 * @return the precioUnitario
	 */
	public Double getPrecioUnitario() {
		return precioUnitario;
	}

	/**
	 * @param precioUnitario the precioUnitario to set
	 */
	public void setPrecioUnitario(Double precioUnitario) {
		this.precioUnitario = precioUnitario;
	}

	/**
	 * @return the fraccion
	 */
	public String getFraccion() {
		return fraccion;
	}

	/**
	 * @param fraccion the fraccion to set
	 */
	public void setFraccion(String fraccion) {
		this.fraccion = fraccion;
	}

	/**
	 * @return the razonSocialExp
	 */
	public String getRazonSocialExp() {
		return razonSocialExp;
	}

	/**
	 * @param razonSocialExp the razonSocialExp to set
	 */
	public void setRazonSocialExp(String razonSocialExp) {
		this.razonSocialExp = razonSocialExp;
	}

	/**
	 * @return the domicilioExp
	 */
	public String getDomicilioExp() {
		return domicilioExp;
	}

	/**
	 * @param domicilioExp the domicilioExp to set
	 */
	public void setDomicilioExp(String domicilioExp) {
		this.domicilioExp = domicilioExp;
	}

	/**
	 * @return the archivo
	 */
	public ArchivoValidacionEntity getArchivo() {
		return archivo;
	}

	/**
	 * @param archivo the archivo to set
	 */
	public void setArchivo(ArchivoValidacionEntity archivo) {
		this.archivo = archivo;
	}
	
	
}
