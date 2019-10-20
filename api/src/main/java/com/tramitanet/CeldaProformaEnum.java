/**
 * 
 */
package com.tramitanet;

import java.util.Date;

/**
 * @author evomatik
 *
 */
public enum CeldaProformaEnum {
	ID(-1,"idProforma"),ANALISTA(0,"idAnalista"),CAPTURISTA(1,"idCapturista"),PROFORMA(2,"numProforma"),NUM_REFERENCIA(3,"numReferencia"),FECHA_CAPTURA(4,"fechaIngreso"),
	DESCRIPCION(5,"descripcion"),NUN_MODELO(6,"numModelo"),ADUANA(7,"aduana"), FRACCION(8,"fraccion"), NUMERO_FACTURA(9,"numFactura"),
	FECHA_FACTURA(10,"fechaFactura"),UMC(11,"umc"), CANTIDAD_UMC(12,"cantidad"), FACTOR_CONV(13,"factor"), CANTIDAD_UMT(14,"cantidadUmt"),
	VALOR_ANT_DESC(15,"valorAntDesc"),FACTOR_DESC(16,"factorDesc"),MONEDA(17,"moneda"),VALOR_MERCANCIA(18,"valorMercancia"),PRECIO_UNITARIO(19,"precioUnitario"),
	PAIS_EXPORTADOR(20,"paisExportador"),PAIS_ORIGEN(21,"paisOrigen"),VALOR_TOTAL(22,"valorTotal"),VALID_PRECIO(23,"validPrecioTotal"),NOMBRE_EXORTADOR(24,"nombreExportador"), DOMICILIO(25,"domicilio"),
	OBSERVACIONES(26,"observaciones"),FRACCION_MALA(27,"fraccionMala"),PRECIO_MINIMO(28,"precioMinimo"),FA_VETADA(29,"faVetada"), PRECIO_ESTIMADO(30,"precioEstimado"),
	PREDICTAMEN(31,"predictamen"), NUMERO_SOLICITID(32,"numeroSolicitud"), PERMISO(33,"permiso"),INICIO_VIGENCIA(34,"inicioVigencia"), 
	CLAVE_CLIENTE(35,"claveCliente"), ESTATUS(36,"estatus"), UNKNOWN(99,"unknown");	
	
	private Integer id;
	private String columnName;
	
	CeldaProformaEnum(Integer id, String columnName){
		this.id = id;
		this.columnName = columnName;
	}
	
	public static CeldaProformaEnum getById(Integer id) {
	    for(CeldaProformaEnum e : values()) {
	        if(e.id.equals(id)) return e;
	    }
	    return UNKNOWN;
	}
	
	public static CeldaProformaEnum getByColumnName(String columnName) {
	    for(CeldaProformaEnum e : values()) {
	        if(e.columnName.equals(columnName)) return e;
	    }
	    return UNKNOWN;
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
