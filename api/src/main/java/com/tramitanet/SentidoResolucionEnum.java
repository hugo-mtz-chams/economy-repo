/**
 * 
 */
package com.tramitanet;

/**
 * @author evomatik
 *
 */
public enum SentidoResolucionEnum {
	ACEPTADO("Aceptado"), RECHAZADO("Rechazado"), EN_DICTAMEN("En Dictamen");
	
	SentidoResolucionEnum(String label){
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
