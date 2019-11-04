/**
 * 
 */
package com.tramitanet;

/**
 * @author evomatik
 *
 */
public enum EstatusTramiteEnum {
	CONCLUIDO("Concluido"),DESISTIDO("Desistido"),INICIADO("Iniciado");
	
	EstatusTramiteEnum(String label){
		this.label=label;
	}
	
	private String label;

	/**
	 * @return the label
	 */
	public String getLabel() {
		return label;
	}

	/**
	 * @param label the label to set
	 */
	public void setLabel(String label) {
		this.label = label;
	}
	
	
	
}
