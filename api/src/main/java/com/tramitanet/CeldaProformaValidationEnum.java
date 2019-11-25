/**
 * 
 */
package com.tramitanet;

/**
 * @author evomatik
 *
 */
public enum CeldaProformaValidationEnum {
	FOLIO_TRAMITE(0,"folioTramite"),
	ESTATUS_TRAMITE(1,"estatusTramite"),
	CANTIDAD_UMC(10,"cantidadUMC"),
	CANTIDAD_UMT(11,"cantidadUMT"),
	DESC_MERCANCIA(12,"descMercancia"),
	NUM_FACTURA(14,"numFactura"),
	FEC_FACTURA(15,"fecFactura"),
	SENTIDO_DICTAMEN(20,"sentidoDictamen"),
	PAIS_ORIGEN(23,"paisOrigen"),
	PAIS_DESTINO(24,"paisDestino"),
	MONEDA_COMERCIAL(30, "monedaComercial"),
	PRECIO_UNITARIO_USD(31, "precioUnitario"),
	FRACCION(33, "fraccion"),
	RAZON_SOCIAL_EXP(35, "razonSocialExp"),
	DOMICILIO_EXP(36, "domicilioExp"),
	UNKNOWN(99,"Desconocido");
	
	private Integer numCelda;
	private String columnName;
	
	CeldaProformaValidationEnum(Integer numCelda, String columna){
		this.numCelda = numCelda;
		this.columnName = columna;
	}

	public Integer getNumCelda() {
		return numCelda;
	}

	public void setNumCelda(Integer numCelda) {
		this.numCelda = numCelda;
	}

	public String getColumnName() {
		return columnName;
	}

	public void setColumnName(String columna) {
		this.columnName = columna;
	}
	
	public static CeldaProformaValidationEnum getById(Integer id) {
		for(CeldaProformaValidationEnum value : values()) {
			if(value.getNumCelda().equals(id)) {
				return value;
			}
		}
		return UNKNOWN;
	}
	
}
