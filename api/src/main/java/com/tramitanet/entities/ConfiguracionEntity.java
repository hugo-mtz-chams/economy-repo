/**
 * 
 */
package com.tramitanet.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * @author evomatik
 *
 */
@Entity
@Table(name="Configuracion")
public class ConfiguracionEntity {
	
	@Column(name="id_configuracion")
	private Integer idConfiguracion;
	
	@Column(name="codigo")
	private String codigo;
	
	@Column(name="valor")
	private String valor;

	/**
	 * @return the idConfiguracion
	 */
	public Integer getIdConfiguracion() {
		return idConfiguracion;
	}

	/**
	 * @param idConfiguracion the idConfiguracion to set
	 */
	public void setIdConfiguracion(Integer idConfiguracion) {
		this.idConfiguracion = idConfiguracion;
	}

	/**
	 * @return the codigo
	 */
	public String getCodigo() {
		return codigo;
	}

	/**
	 * @param codigo the codigo to set
	 */
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	/**
	 * @return the valor
	 */
	public String getValor() {
		return valor;
	}

	/**
	 * @param valor the valor to set
	 */
	public void setValor(String valor) {
		this.valor = valor;
	}
	
	
}
