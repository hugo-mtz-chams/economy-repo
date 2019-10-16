/**
 * 
 */
package com.tramitanet.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Iterator;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.tramitanet.CeldaProformaEnum;
import com.tramitanet.dao.ProformaDAO;
import com.tramitanet.model.Proforma;

/**
 * @author evomatik
 *
 */
@Service
public class FileProcesorService {
	
	@Autowired
	ProformaDAO proformaService;
	
	public void procesar() {
		
		try {
			
			FileInputStream file = new FileInputStream(new File("/Users/evomatik/Proformas/Mascara_11_OCT.xlsx"));
			
			//Get the workbook instance for XLS file 
			XSSFWorkbook workbook = new XSSFWorkbook(file);

			//Get first sheet from the workbook
			XSSFSheet sheet = workbook.getSheetAt(0);
			int lastRow = sheet.getLastRowNum();
			
			System.err.println("Last rownum: " + lastRow);
			//Iterate through each rows from first sheet
			Iterator<Row> rowIterator = sheet.iterator();
			int rownum = 0;
			while(rowIterator.hasNext()) {
				Row row = rowIterator.next();
				
				if(rownum==0) {
					rownum++;
					continue;
				}else if(rownum>200) {
					break;
				}
				
				System.err.println("Fila : " +rownum);
				int numCelda=0;
				//For each row, iterate through each columns
				Iterator<Cell> cellIterator = row.cellIterator();
				Proforma p = new Proforma();

				while(cellIterator.hasNext()) {
					
					Cell cell = cellIterator.next();
					CeldaProformaEnum elemento = CeldaProformaEnum.getById(numCelda);
					
					switch(elemento) {
					case ANALISTA: 
						p.setIdAnalista(cell.getStringCellValue());
						break;
					case CAPTURISTA: 
						p.setIdCapturista(cell.getStringCellValue());
						break; 
					case PROFORMA:
						Double numero = new Double(cell.getNumericCellValue());
						p.setNumProforma(numero.intValue());
						break;
					case NUM_REFERENCIA:
						p.setNumReferencia(processAndReturnValueAsString(cell));
						break;
					case FECHA_CAPTURA: 
						p.setFechaIngreso(cell.getDateCellValue());
						break;
					case DESCRIPCION: 
						p.setDescripcion(cell.getStringCellValue());
						break;
					case NUN_MODELO: 
						p.setNumModelo(cell.getStringCellValue());
						break;
					case ADUANA: 
						p.setAduana(cell.getStringCellValue());
						break; 
					case FRACCION: 
						Double fraccion = new Double(cell.getNumericCellValue());
						Long fraccionL = new Long(fraccion.longValue());
						p.setFraccion(fraccionL.toString());
						break; 
					case NUMERO_FACTURA: 
						p.setNumFactura(processAndReturnValueAsString(cell));
						break;
					case FECHA_FACTURA: 
						p.setFechaFactura(cell.getDateCellValue());
						break;
					case UMC: 
						p.setUmc(cell.getStringCellValue());
						break; 
					case CANTIDAD_UMC:
						Double cantidadUmc = new Double(cell.getNumericCellValue());
						p.setCantidad(cantidadUmc.intValue());
						break; 
					case FACTOR_CONV: 
						Double factor = new Double(cell.getNumericCellValue());
						p.setFactor(factor.intValue());
						break; 
					case CANTIDAD_UMT: 
						Double cantidadUmt = new Double(cell.getNumericCellValue());
						p.setCantidadUmt(cantidadUmt.longValue());
						break;
					case VALOR_ANT_DESC: 
						p.setValorAntDesc(cell.getNumericCellValue());
						break;
					case FACTOR_DESC: 
						p.setFactorDesc(cell.getNumericCellValue());
						break;
					case MONEDA: 
						p.setMoneda(cell.getStringCellValue());
						break;
					case VALOR_MERCANCIA: 
						p.setValorMercancia(cell.getNumericCellValue());
						break;
					case PRECIO_UNITARIO: 
						p.setPrecioUnitario(cell.getNumericCellValue());
						break;
					case PAIS_EXPORTADOR: 
						p.setPaisExportador(cell.getStringCellValue());
						break;
					case PAIS_ORIGEN: 
						p.setPaisOrigen(cell.getStringCellValue());
						break;
					case VALOR_TOTAL: 
						p.setValorTotal(cell.getNumericCellValue());
						break;
					case VALID_PRECIO: 
						p.setValidPrecioTotal(cell.getStringCellValue());
						break;
					case NOMBRE_EXORTADOR: 
						p.setNombreExportador(cell.getStringCellValue());
						break; 
					case DOMICILIO: 
						p.setDomicilio(cell.getStringCellValue());
						break;
					case OBSERVACIONES: 
						p.setObservaciones(cell.getStringCellValue());
						break;
					case FRACCION_MALA: 
						Double fraccionMala = new Double(cell.getNumericCellValue());
						Long fraccionMalaL = new Long(fraccionMala.longValue());
						p.setFraccionMala(fraccionMalaL.toString());
						break;
					case PRECIO_MINIMO: 
						p.setPrecioMinimo(cell.getNumericCellValue());
						break;
					case FA_VETADA: 
						p.setFaVetada(cell.getStringCellValue());
						break;
					case PRECIO_ESTIMADO: 
						p.setPrecioEstimado(cell.getNumericCellValue());
						break;
					case PREDICTAMEN: 
						p.setPredictamen(cell.getStringCellValue());
						break; 
					case NUMERO_SOLICITID: 
						p.setNumeroSolicitud(cell.getStringCellValue());
						break; 
					case PERMISO: 
						p.setPermiso(cell.getStringCellValue());
						break;
					case INICIO_VIGENCIA: 
						p.setInicioVigencia(cell.getDateCellValue());
						break;
					case CLAVE_CLIENTE: 
						p.setClaveCliente(cell.getStringCellValue());
						break; 
					case ESTATUS: 
						p.setEstatus(cell.getStringCellValue());
						break; 
					case UNKNOWN: break;
					}
					debugProcesing(cell);
					
					numCelda++;
				}
				System.err.println("INSERTING");
				if(	!StringUtils.isEmpty( p.getIdAnalista() )  && 
					!StringUtils.isEmpty( p.getIdCapturista() )  && 
					!StringUtils.isEmpty( p.getNumProforma() ) &&
					!StringUtils.isEmpty( p.getNumReferencia() ) ) {
					proformaService.saveOrUpdate(p);
				}
				rownum++;
			}
			file.close();
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	private void debugProcesing(Cell cell) {
		
		switch(cell.getCellType()) {
			case BOOLEAN:
				System.out.print(cell.getBooleanCellValue() + "\t\t");
				break;
			case NUMERIC:
				System.out.print(cell.getNumericCellValue() + "\t\t");
				break;
			case STRING:
				System.out.print(cell.getStringCellValue() + "\t\t");
				break;
			case FORMULA:
				System.out.print(cell.getCellFormula() + "\t\t");
				break;
			case ERROR:
				System.out.print(cell.getErrorCellValue() + "\t\t");
				break;
			case BLANK:
				System.out.print("BLANK_CELL" + "\t\t");
				break;
			case _NONE:
				System.out.print(cell.getCellComment() + "\t\t");
				break;
		}
	}
	
	private String processAndReturnValueAsString(Cell cell) {
		String value ="";
		switch(cell.getCellType()) {
			case BOOLEAN:
				value = (new Boolean(cell.getBooleanCellValue())).toString();
				break;
			case NUMERIC:
				Double numero = new Double(cell.getNumericCellValue());
				Long numeroL = new Long(numero.longValue());
				value = numeroL.toString();
				break;
			case STRING:
				value = cell.getStringCellValue();
				break;
			case FORMULA:
				value = cell.getStringCellValue();
				break;
			case ERROR:
				value = "ERROR";
				break;
			case BLANK:
				value="";
				break;
			case _NONE:
				value="";
				break;
		}
		
	return value;
	}
	
	/**
	 * 
	 */
	public FileProcesorService() {
		// TODO Auto-generated constructor stub
	}

}
