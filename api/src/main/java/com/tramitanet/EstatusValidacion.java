/**
 * 
 */
package com.tramitanet;

/**
 * @author evomatik
 *
 */
public enum EstatusValidacion {
	APROBADO("Aprobado"),ERROR("Error");
	
	EstatusValidacion(String estatus){
		this.estatus=estatus;
	}
	
	private String estatus;

	/**
	 * @return the estatus
	 */
	public String getEstatus() {
		return estatus;
	}

	/**
	 * @param estatus the estatus to set
	 */
	public void setEstatus(String estatus) {
		this.estatus = estatus;
	}
	
			
}
