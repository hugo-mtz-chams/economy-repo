/**
 * 
 */
package com.tramitanet;

/**
 * @author evomatik
 *
 */
public enum ConfiguracionEnum {
	
	FACTOR_USD_EUR("FACTOR_USD_EUR",1),
	MONEDA_BASE("MONEDA_BASE",2);
	
	ConfiguracionEnum(String codigo, Integer id){
		this.codigo=codigo;
		this.id=id;
	}
	
	private String codigo;
	private Integer id;
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
	 * @return the id
	 */
	public Integer getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(Integer id) {
		this.id = id;
	}
	
}
