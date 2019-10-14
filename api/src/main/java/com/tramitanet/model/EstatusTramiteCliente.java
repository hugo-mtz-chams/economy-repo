/**
 * 
 */
package com.tramitanet.model;

/**
 * @author evomatik
 *
 */
public class EstatusTramiteCliente {

	private long numeroTramites;
	private String estatus;
	private String claveCliente;
	

	public EstatusTramiteCliente(long numeroTramites, String estatus, String claveCliente){
		this.numeroTramites = numeroTramites;
		this.estatus = estatus;
		this.claveCliente = claveCliente;
	}
	/**
	 * @return the numeroTramites
	 */
	public long getNumeroTramites() {
		return numeroTramites;
	}
	/**
	 * @param numeroTramites the numeroTramites to set
	 */
	public void setNumeroTramites(long numeroTramites) {
		this.numeroTramites = numeroTramites;
	}
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
