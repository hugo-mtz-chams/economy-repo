/**
 * 
 */
package com.tramitanet.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;



/**
 * The persistent class for the Proforma database table.
 * 
 */
@Entity
@Table(name="Proforma")
public class ProformaEntity {

	/**
	 * Default constructor
	 */
	public ProformaEntity() {
	}
	
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="id_proforma")
	private Long idProforma;

	private String aduana;

	private Integer cantidad;

	@Column(name="cantidad_umt")
	private String cantidadUmt;

	private String descripcion;

	private String domicilio;

	@Column(name="fa_vetada")
	private String faVetada;

	private Integer factor;

	@Column(name="factor_desc")
	private Double factorDesc;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="fecha_factura")
	private Date fechaFactura;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="fecha_ingreso")
	private Date fechaIngreso;

	private String fraccion;

	@Column(name="fraccion_mala")
	private String fraccionMala;

	@Column(name="id_analista")
	private String idAnalista;

	@Column(name="id_capturista")
	private String idCapturista;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="inicio_vigencia")
	private Date inicioVigencia;

	private String moneda;

	@Column(name="nombre_exportador")
	private String nombreExportador;

	@Column(name="num_factura")
	private String numFactura;

	@Column(name="num_modelo")
	private String numModelo;

	@Column(name="num_proforma")
	private Integer numProforma;

	@Column(name="num_referencia")
	private String numReferencia;

	@Column(name="numero_solicitud")
	private String numeroSolicitud;

	private String observaciones;

	@Column(name="pais_exportador")
	private String paisExportador;

	@Column(name="pais_origen")
	private String paisOrigen;

	private String permiso;

	@Column(name="precio_estimado")
	private Double precioEstimado;

	@Column(name="precio_minimo")
	private Double precioMinimo;

	@Column(name="precio_unitario")
	private String precioUnitario;

	private String predictamen;

	private String umc;

	@Column(name="valid_precio_total")
	private String validPrecioTotal;

	@Column(name="valor_ant_desc")
	private Double valorAntDesc;

	@Column(name="valor_mercancia")
	private Double valorMercancia;

	@Column(name="valor_total")
	private Double valorTotal;
	
	@Column(name="clave_cliente")
	private String claveCliente;

	public Long getIdProforma() {
		return this.idProforma;
	}

	public void setIdProforma(Long idProforma) {
		this.idProforma = idProforma;
	}

	public String getAduana() {
		return this.aduana;
	}

	public void setAduana(String aduana) {
		this.aduana = aduana;
	}

	public Integer getCantidad() {
		return this.cantidad;
	}

	public void setCantidad(Integer cantidad) {
		this.cantidad = cantidad;
	}

	public String getCantidadUmt() {
		return this.cantidadUmt;
	}

	public void setCantidadUmt(String cantidadUmt) {
		this.cantidadUmt = cantidadUmt;
	}

	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getDomicilio() {
		return this.domicilio;
	}

	public void setDomicilio(String domicilio) {
		this.domicilio = domicilio;
	}

	public String getFaVetada() {
		return this.faVetada;
	}

	public void setFaVetada(String faVetada) {
		this.faVetada = faVetada;
	}

	public Integer getFactor() {
		return this.factor;
	}

	public void setFactor(Integer factor) {
		this.factor = factor;
	}

	public Double getFactorDesc() {
		return this.factorDesc;
	}

	public void setFactorDesc(Double factorDesc) {
		this.factorDesc = factorDesc;
	}

	public Date getFechaFactura() {
		return this.fechaFactura;
	}

	public void setFechaFactura(Date fechaFactura) {
		this.fechaFactura = fechaFactura;
	}

	public Date getFechaIngreso() {
		return this.fechaIngreso;
	}

	public void setFechaIngreso(Date fechaIngreso) {
		this.fechaIngreso = fechaIngreso;
	}

	public String getFraccion() {
		return this.fraccion;
	}

	public void setFraccion(String fraccion) {
		this.fraccion = fraccion;
	}

	public String getFraccionMala() {
		return this.fraccionMala;
	}

	public void setFraccionMala(String fraccionMala) {
		this.fraccionMala = fraccionMala;
	}

	public String getIdAnalista() {
		return this.idAnalista;
	}

	public void setIdAnalista(String idAnalista) {
		this.idAnalista = idAnalista;
	}

	public String getIdCapturista() {
		return this.idCapturista;
	}

	public void setIdCapturista(String idCapturista) {
		this.idCapturista = idCapturista;
	}

	public Date getInicioVigencia() {
		return this.inicioVigencia;
	}

	public void setInicioVigencia(Date inicioVigencia) {
		this.inicioVigencia = inicioVigencia;
	}

	public String getMoneda() {
		return this.moneda;
	}

	public void setMoneda(String moneda) {
		this.moneda = moneda;
	}

	public String getNombreExportador() {
		return this.nombreExportador;
	}

	public void setNombreExportador(String nombreExportador) {
		this.nombreExportador = nombreExportador;
	}

	public String getNumFactura() {
		return this.numFactura;
	}

	public void setNumFactura(String numFactura) {
		this.numFactura = numFactura;
	}

	public String getNumModelo() {
		return this.numModelo;
	}

	public void setNumModelo(String numModelo) {
		this.numModelo = numModelo;
	}

	public Integer getNumProforma() {
		return this.numProforma;
	}

	public void setNumProforma(Integer numProforma) {
		this.numProforma = numProforma;
	}

	public String getNumReferencia() {
		return this.numReferencia;
	}

	public void setNumReferencia(String numReferencia) {
		this.numReferencia = numReferencia;
	}

	public String getNumeroSolicitud() {
		return this.numeroSolicitud;
	}

	public void setNumeroSolicitud(String numeroSolicitud) {
		this.numeroSolicitud = numeroSolicitud;
	}

	public String getObservaciones() {
		return this.observaciones;
	}

	public void setObservaciones(String observaciones) {
		this.observaciones = observaciones;
	}

	public String getPaisExportador() {
		return this.paisExportador;
	}

	public void setPaisExportador(String paisExportador) {
		this.paisExportador = paisExportador;
	}

	public String getPaisOrigen() {
		return this.paisOrigen;
	}

	public void setPaisOrigen(String paisOrigen) {
		this.paisOrigen = paisOrigen;
	}

	public String getPermiso() {
		return this.permiso;
	}

	public void setPermiso(String permiso) {
		this.permiso = permiso;
	}

	public Double getPrecioEstimado() {
		return this.precioEstimado;
	}

	public void setPrecioEstimado(Double precioEstimado) {
		this.precioEstimado = precioEstimado;
	}

	public Double getPrecioMinimo() {
		return this.precioMinimo;
	}

	public void setPrecioMinimo(Double precioMinimo) {
		this.precioMinimo = precioMinimo;
	}

	public String getPrecioUnitario() {
		return this.precioUnitario;
	}

	public void setPrecioUnitario(String precioUnitario) {
		this.precioUnitario = precioUnitario;
	}

	public String getPredictamen() {
		return this.predictamen;
	}

	public void setPredictamen(String predictamen) {
		this.predictamen = predictamen;
	}

	public String getUmc() {
		return this.umc;
	}

	public void setUmc(String umc) {
		this.umc = umc;
	}

	public String getValidPrecioTotal() {
		return this.validPrecioTotal;
	}

	public void setValidPrecioTotal(String validPrecioTotal) {
		this.validPrecioTotal = validPrecioTotal;
	}

	public Double getValorAntDesc() {
		return this.valorAntDesc;
	}

	public void setValorAntDesc(Double valorAntDesc) {
		this.valorAntDesc = valorAntDesc;
	}

	public Double getValorMercancia() {
		return this.valorMercancia;
	}

	public void setValorMercancia(Double valorMercancia) {
		this.valorMercancia = valorMercancia;
	}

	public Double getValorTotal() {
		return this.valorTotal;
	}

	public void setValorTotal(Double valorTotal) {
		this.valorTotal = valorTotal;
	}

	/**
	 * @return the claveCliente
	 */
	public String getClaveCliente() {
		return claveCliente;
	}

	/**
	 * @param claveCliente the claveCliente to set
	 */
	public void setClaveCliente(String claveCliente) {
		this.claveCliente = claveCliente;
	}


}
