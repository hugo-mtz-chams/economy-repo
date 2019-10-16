/**
 * 
 */
package com.tramitanet;

/**
 * @author evomatik
 *
 */
public enum CeldaProformaEnum {
	ANALISTA(0),CAPTURISTA(1),PROFORMA(2),NUM_REFERENCIA(3),FECHA_CAPTURA(4),
	DESCRIPCION(5),NUN_MODELO(6),ADUANA(7), FRACCION(8), NUMERO_FACTURA(9),
	FECHA_FACTURA(10),UMC(11), CANTIDAD_UMC(12), FACTOR_CONV(13), CANTIDAD_UMT(14),
	VALOR_ANT_DESC(15),FACTOR_DESC(16),MONEDA(17),VALOR_MERCANCIA(18),PRECIO_UNITARIO(19),
	PAIS_EXPORTADOR(20),PAIS_ORIGEN(21),VALOR_TOTAL(22),VALID_PRECIO(23),NOMBRE_EXORTADOR(24), DOMICILIO(25),
	OBSERVACIONES(26),FRACCION_MALA(27),PRECIO_MINIMO(28),FA_VETADA(29), PRECIO_ESTIMADO(30),
	PREDICTAMEN(31), NUMERO_SOLICITID(32), PERMISO(33),INICIO_VIGENCIA(34), 
	CLAVE_CLIENTE(35), ESTATUS(36), UNKNOWN(99);
	
	private Integer id;
	
	CeldaProformaEnum(Integer id){
		this.id = id;
	}
	
	public static CeldaProformaEnum getById(Integer id) {
	    for(CeldaProformaEnum e : values()) {
	        if(e.id.equals(id)) return e;
	    }
	    return UNKNOWN;
	}
	
}
