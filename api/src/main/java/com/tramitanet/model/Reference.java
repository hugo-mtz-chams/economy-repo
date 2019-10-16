/**
 * 
 */
package com.tramitanet.model;

/**
 * @author evomatik
 *
 */
public class Reference {
	
	private String numReferencia;
	
	private long totalTramites;
	
	private long tramitesAceptados;
	
	private long tramitesRechazados;
	
	private long tramitesProceso;
	
	private long tramitesEspera;

	
	public Reference (String numReferencia, long totalTramites,long tramitesAceptados,long tramitesRechazados,long tramitesProceso, long tramitesEspera) {
		this.numReferencia = numReferencia;
		
		this.totalTramites = totalTramites;
		
		this.tramitesAceptados = tramitesAceptados;
		
		this.tramitesRechazados =tramitesRechazados;
		
		this.tramitesProceso = tramitesProceso;
		
		this.tramitesEspera = tramitesEspera;
	}
	
	/**
	 * 
	 */
	public Reference() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @return the numReferencia
	 */
	public String getNumReferencia() {
		return numReferencia;
	}

	/**
	 * @param numReferencia the numReferencia to set
	 */
	public void setNumReferencia(String numReferencia) {
		this.numReferencia = numReferencia;
	}

	/**
	 * @return the totalTramites
	 */
	public long getTotalTramites() {
		return totalTramites;
	}

	/**
	 * @param totalTramites the totalTramites to set
	 */
	public void setTotalTramites(long totalTramites) {
		this.totalTramites = totalTramites;
	}

	/**
	 * @return the tramitesAceptados
	 */
	public long getTramitesAceptados() {
		return tramitesAceptados;
	}

	/**
	 * @param tramitesAceptados the tramitesAceptados to set
	 */
	public void setTramitesAceptados(long tramitesAceptados) {
		this.tramitesAceptados = tramitesAceptados;
	}

	/**
	 * @return the tramitesRechazados
	 */
	public long getTramitesRechazados() {
		return tramitesRechazados;
	}

	/**
	 * @param tramitesRechazados the tramitesRechazados to set
	 */
	public void setTramitesRechazados(long tramitesRechazados) {
		this.tramitesRechazados = tramitesRechazados;
	}

	/**
	 * @return the tramitesProceso
	 */
	public long getTramitesProceso() {
		return tramitesProceso;
	}

	/**
	 * @param tramitesProceso the tramitesProceso to set
	 */
	public void setTramitesProceso(long tramitesProceso) {
		this.tramitesProceso = tramitesProceso;
	}

	/**
	 * @return the tramitesEspera
	 */
	public long getTramitesEspera() {
		return tramitesEspera;
	}

	/**
	 * @param tramitesEspera the tramitesEspera to set
	 */
	public void setTramitesEspera(long tramitesEspera) {
		this.tramitesEspera = tramitesEspera;
	}

}
