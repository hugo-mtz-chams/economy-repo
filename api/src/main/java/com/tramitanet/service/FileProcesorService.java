/**
 * 
 */
package com.tramitanet.service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tramitanet.CeldaProformaEnum;
import com.tramitanet.CeldaProformaValidationEnum;
import com.tramitanet.ConfiguracionEnum;
import com.tramitanet.EstatusTramiteEnum;
import com.tramitanet.SentidoResolucionEnum;
import com.tramitanet.dao.ArchivoValidacionDAO;
import com.tramitanet.dao.ProformaDAO;
import com.tramitanet.entities.ArchivoValidacionEntity;
import com.tramitanet.entities.ConfiguracionEntity;
import com.tramitanet.entities.ErrorValidacionEntity;
import com.tramitanet.entities.ProformaEntity;
import com.tramitanet.entities.TramiteValidacionEntity;
import com.tramitanet.model.ArchivoValidacion;
import com.tramitanet.model.Proforma;
import com.tramitanet.model.TramiteValidacion;
import com.tramitanet.repositories.ArchivoValidacionRepository;
import com.tramitanet.repositories.ConfiguracionRepository;
import com.tramitanet.repositories.ErrorValidacionRepository;
import com.tramitanet.repositories.ProformaRepository;
import com.tramitanet.repositories.TramiteValidacionRepository;

/**
 * @author evomatik
 *
 */
@Service
public class FileProcesorService {
	
	@Autowired
	ProformaDAO proformaService;
	
	@Autowired
	ProformaRepository proformaRepository;
	
	@Autowired
	ErrorValidacionRepository errorRepository;
	
	@Autowired
	ArchivoValidacionDAO archivoValidacionService;
	
	@Autowired
	ConfiguracionRepository configRepository;
	
	@Autowired
	TramiteValidacionRepository tramiteRepository;
	
	@Autowired
	ArchivoValidacionRepository archivoValidacionRepository;
	
	private Double factorPrecioUnitario = null;
	private String monedaBase = null;
	
	public void procesar(MultipartFile multipartFile) {
		
		try {
			
			FileInputStream file =(FileInputStream) multipartFile.getInputStream();
					//new FileInputStream(new File("/Users/evomatik/Proformas/Mascara_11_OCT.xlsx"));
			
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
						if(!ObjectUtils.isEmpty(cell.getNumericCellValue())) {
							Double numero = new Double(cell.getNumericCellValue());
							p.setNumProforma(numero.intValue());
						}else {
							p.setNumProforma(null);
						}
						break;
					case NUM_REFERENCIA:
						p.setNumReferencia(processAndReturnValueAsString(cell));
						break;
					case FECHA_CAPTURA: 
						Date fechaIngreso = cell.getDateCellValue();
						Calendar cal = Calendar.getInstance();
						cal.setTime(fechaIngreso);
						cal.set(Calendar.HOUR_OF_DAY,0);
						cal.set(Calendar.MINUTE,0);
						cal.set(Calendar.SECOND,0);
						cal.set(Calendar.MILLISECOND,0);
						
						p.setFechaIngreso(cal.getTime());
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
						Date fecVigencia = null;	
						if(cell.getCellType().equals(CellType.STRING)) {
							if(!StringUtils.isEmpty(cell.getStringCellValue())) {
								DateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
								try {
									fecVigencia = sdf.parse(cell.getStringCellValue());
								} catch (ParseException e) {
									e.printStackTrace();
								}
							}
						}else {
							fecVigencia = cell.getDateCellValue();
						}
						
						p.setInicioVigencia(fecVigencia);
						break;
					case CLAVE_CLIENTE: 
						p.setClaveCliente(cell.getStringCellValue());
						break; 
					case ESTATUS: 
						p.setEstatus(StringUtils.isEmpty(cell.getStringCellValue())?"En espera" : cell.getStringCellValue());
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
	 * Verifica si el tipo de dato es long o date para convertirlo y regresarlo en date
	 * @param entry
	 * @return Date
	 */
	private Date processAndReturnTypeAsDate(Map.Entry<String, Object> entry) {
		Date fecFactura = null;
		if(entry.getValue() instanceof Long) {
			Calendar cal = Calendar.getInstance();
			cal.setTimeInMillis((Long)entry.getValue());
			fecFactura = cal.getTime();
		}else if(entry.getValue() instanceof Date) {
			fecFactura = (Date)entry.getValue();
		}
		return fecFactura;
	}
	
	/**
	 * Procesa el archivo proporcionado actualizando solo los siguientes datos:
	 * 
	 * 1. Numero de solicitud
	 * 2. Permiso
	 * 3. Inicio de vigencia
	 * 
	 */
	public void actualizaDatosDelPermiso(MultipartFile multipartFile) {
		try {
			FileInputStream file =(FileInputStream) multipartFile.getInputStream();
			//new FileInputStream(new File("/Users/evomatik/Proformas/Mascara_11_OCT.xlsx"));
	
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
				int numCelda=-1;
				//For each row, iterate through each columns
				Iterator<Cell> cellIterator = row.cellIterator();
				Proforma p = new Proforma();

				while(cellIterator.hasNext()) {
					Cell cell = cellIterator.next();
					CeldaProformaEnum elemento = CeldaProformaEnum.getById(numCelda);
					
					switch(elemento) {
						case ID:
							Double d = new Double(cell.getNumericCellValue());
							p.setIdProforma(d.longValue());
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
						case UNKNOWN: 
							break;
						default:
							break;
					}
					debugProcesing(cell);
					
					numCelda++;
				}
				System.err.println("INSERTING");
				if(	!StringUtils.isEmpty( p.getIdProforma() ) ) {
					proformaService.updateDatosPermiso(p);
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
	
	/**
	 * Genera el archivo con los tramites añadiendo la columna id que permitira identificar posteriormente el registro
	 * para actualizar los datos de numero de referencia, inicio de vigencia y permiso
	 * @param claveCapturista identificador del capturista
	 * @param fecha fecha de ingreso de tramite
	 * @return archivo para el capturista
	 * @throws Exception
	 */
	
	public ByteArrayInputStream generarArchivoProformasParaCapturista(String claveCapturista, String fecha) throws Exception {
		List<Proforma> tramites = proformaService.findTramitesByCapturistaAndDate(fecha, claveCapturista);
		
		if(CollectionUtils.isEmpty(tramites)) {
			throw new Exception("No se cuenta con datos que exportar para la fecha seleccionada");
		}
		
		ByteArrayOutputStream out = new ByteArrayOutputStream();
        // Creamos el libro de trabajo de Excel formato OOXML
        Workbook workbook = new XSSFWorkbook();

        // La hoja donde pondremos los datos
        Sheet pagina = workbook.createSheet("Reporte de productos");
        
        //Helpers para dates
        CreationHelper createHelper = workbook.getCreationHelper();  
        CellStyle cellStyleDate = workbook.createCellStyle();  
        cellStyleDate.setDataFormat(  
            createHelper.createDataFormat().getFormat("dd/MM/yyyy")); 
        
        
        // Creamos el estilo paga las celdas del encabezado
        CellStyle style = workbook.createCellStyle();
        // Indicamos que tendra un fondo azul aqua
        // con patron solido del color indicado
        style.setFillForegroundColor(IndexedColors.AQUA.getIndex());
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);

        String[] titulos = {"ID","Analista","Capturista",
        		"No. Proforma","Número referencia","fecha captura","Descripcion","Número de Modelo","Aduana","Fracción","Número de factura",
        		"Fecha de Factura","UMC","Cantidad UMC","Factor conv","Cantidad UMT","Valor ant. Desc.","Factor desc.","Moneda Comerciallización",
        		"Valor mercancía","Precio Unitario","País Exportador","Pais Origen","Valor Total Valid.","PRECIO TOTAL","Nombre exportador","Domicilio",
        		"Observaciones","Fracción","PRECIO MINIMO","FA VETADA","PRECIO ESTIMADO","PRE-DICTAMEN","Númerodesolicitud","Permiso","Inicio vigencia",
        		"Clave Cliente","Estatus"};
        

        // Creamos una fila en la hoja en la posicion 0
        Row fila = pagina.createRow(0);

        // Creamos el encabezado
        for (int i = 0; i < titulos.length; i++) {
            // Creamos una celda en esa fila, en la posicion 
            // indicada por el contador del ciclo
            Cell celda = fila.createCell(i);

            // Indicamos el estilo que deseamos 
            // usar en la celda, en este caso el unico 
            // que hemos creado
            celda.setCellStyle(style);
            celda.setCellValue(titulos[i]);
        }

        // Ahora creamos una fila en la posicion 1
        int rowNum = 1;
        int numCelda=0;
        // Y colocamos los datos en esa fila
        for ( Proforma t : tramites) {
            fila = pagina.createRow(rowNum);
            ObjectMapper mapper = new ObjectMapper();
            Map<String,Object> celdas = mapper.convertValue(t, Map.class);
            
            for (Map.Entry<String, Object> entry : celdas.entrySet()) {
            	CeldaProformaEnum enumCelda = CeldaProformaEnum.getByColumnName(entry.getKey());
            	numCelda=enumCelda.getId()+1;
            	// Creamos una celda en esa fila, en la
                // posicion indicada por el contador del ciclo
            	Cell celda = fila.createCell(numCelda);
            	switch(enumCelda) {
            		case ID:
            			Double id = Double.valueOf(entry.getValue().toString());
              			celda.setCellValue(id);
            			break;
            		case INICIO_VIGENCIA:
            			celda.setCellStyle(cellStyleDate);
            			celda.setCellValue(processAndReturnTypeAsDate(entry));
            			break;
            		case FECHA_CAPTURA:
            			celda.setCellStyle(cellStyleDate);
            			celda.setCellValue(processAndReturnTypeAsDate(entry));
            			break;
            		case FECHA_FACTURA:
            			celda.setCellStyle(cellStyleDate);
            			celda.setCellValue(processAndReturnTypeAsDate(entry));
            			break;
            		default:
            			celda.setCellValue(entry.getValue().toString());
            			break;
            	}
            	debugProcesing(celda);
                
                
            }
            rowNum++;
        }

        // Ahora guardaremos el archivo
        try {
            // Creamos el flujo de salida de datos,
            // apuntando al archivo donde queremos 
            // almacenar el libro de Excel

            // Almacenamos el libro de 
            // Excel via ese 
            // flujo de datos
            workbook.write(out);
            
            // Cerramos el libro para concluir operaciones
            workbook.close();

        } catch (FileNotFoundException ex) {
        	ex.printStackTrace();
        } catch (IOException ex) {
        	ex.printStackTrace();
        }
        
        return new ByteArrayInputStream(out.toByteArray());
	}
	
	
	
	/**
	 * Genera el archivo con los tramites añadiendo la columna id que permitira identificar posteriormente el registro
	 * para actualizar los datos de numero de referencia, inicio de vigencia y permiso
	 * @param claveAnalista identificador del capturista
	 * @param fecha fecha de ingreso de tramite
	 * @return archivo para el capturista
	 * @throws Exception
	 */
	
	public ByteArrayInputStream generarArchivoProformasParaAnalista(String claveCapturista, String fecha) throws Exception {
		List<Proforma> tramites = proformaService.findTramitesByAnalistaAndDate(fecha, claveCapturista);
		
		if(CollectionUtils.isEmpty(tramites)) {
			throw new Exception("No se cuenta con datos que exportar para la fecha seleccionada");
		}
		
		ByteArrayOutputStream out = new ByteArrayOutputStream();
        // Creamos el libro de trabajo de Excel formato OOXML
        Workbook workbook = new XSSFWorkbook();

        // La hoja donde pondremos los datos
        Sheet pagina = workbook.createSheet("Reporte de productos");
        
        //Helpers para dates
        CreationHelper createHelper = workbook.getCreationHelper();  
        CellStyle cellStyleDate = workbook.createCellStyle();  
        cellStyleDate.setDataFormat(  
            createHelper.createDataFormat().getFormat("dd/MM/yyyy")); 
        
        
        // Creamos el estilo paga las celdas del encabezado
        CellStyle style = workbook.createCellStyle();
        // Indicamos que tendra un fondo azul aqua
        // con patron solido del color indicado
        style.setFillForegroundColor(IndexedColors.AQUA.getIndex());
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);

        String[] titulos = {"ID","Analista","Capturista",
        		"No. Proforma","Número referencia","fecha captura","Descripcion","Número de Modelo","Aduana","Fracción","Número de factura",
        		"Fecha de Factura","UMC","Cantidad UMC","Factor conv","Cantidad UMT","Valor ant. Desc.","Factor desc.","Moneda Comerciallización",
        		"Valor mercancía","Precio Unitario","País Exportador","Pais Origen","Valor Total Valid.","PRECIO TOTAL","Nombre exportador","Domicilio",
        		"Observaciones","Fracción","PRECIO MINIMO","FA VETADA","PRECIO ESTIMADO","PRE-DICTAMEN","Númerodesolicitud","Permiso","Inicio vigencia",
        		"Clave Cliente","Estatus"};
        

        // Creamos una fila en la hoja en la posicion 0
        Row fila = pagina.createRow(0);

        // Creamos el encabezado
        for (int i = 0; i < titulos.length; i++) {
            // Creamos una celda en esa fila, en la posicion 
            // indicada por el contador del ciclo
            Cell celda = fila.createCell(i);

            // Indicamos el estilo que deseamos 
            // usar en la celda, en este caso el unico 
            // que hemos creado
            celda.setCellStyle(style);
            celda.setCellValue(titulos[i]);
        }

        // Ahora creamos una fila en la posicion 1
        int rowNum = 1;
        int numCelda=0;
        // Y colocamos los datos en esa fila
        for ( Proforma t : tramites) {
            fila = pagina.createRow(rowNum);
            ObjectMapper mapper = new ObjectMapper();
            Map<String,Object> celdas = mapper.convertValue(t, Map.class);
            
            for (Map.Entry<String, Object> entry : celdas.entrySet()) {
            	CeldaProformaEnum enumCelda = CeldaProformaEnum.getByColumnName(entry.getKey());
            	numCelda=enumCelda.getId()+1;
            	// Creamos una celda en esa fila, en la
                // posicion indicada por el contador del ciclo
            	Cell celda = fila.createCell(numCelda);
            	switch(enumCelda) {
            		case ID:
            			Double id = Double.valueOf(entry.getValue().toString());
              			celda.setCellValue(id);
            			break;
            		case INICIO_VIGENCIA:
            			celda.setCellStyle(cellStyleDate);
            			celda.setCellValue(processAndReturnTypeAsDate(entry));
            			break;
            		case FECHA_CAPTURA:
            			celda.setCellStyle(cellStyleDate);
            			celda.setCellValue(processAndReturnTypeAsDate(entry));
            			break;
            		case FECHA_FACTURA:
            			celda.setCellStyle(cellStyleDate);
            			celda.setCellValue(processAndReturnTypeAsDate(entry));
            			break;
            		default:
            			celda.setCellValue(entry.getValue().toString());
            			break;
            	}
            	debugProcesing(celda);
                
                
            }
            rowNum++;
        }

        // Ahora guardaremos el archivo
        try {
            // Creamos el flujo de salida de datos,
            // apuntando al archivo donde queremos 
            // almacenar el libro de Excel

            // Almacenamos el libro de 
            // Excel via ese 
            // flujo de datos
            workbook.write(out);
            
            // Cerramos el libro para concluir operaciones
            workbook.close();

        } catch (FileNotFoundException ex) {
        	ex.printStackTrace();
        } catch (IOException ex) {
        	ex.printStackTrace();
        }
        
        return new ByteArrayInputStream(out.toByteArray());
	}
	
	public ArchivoValidacion uploadValidationDataFile(MultipartFile multipartFile) {
		ArchivoValidacion archivo = null;
		try {
			FileInputStream file =(FileInputStream) multipartFile.getInputStream();
			//new FileInputStream(new File("/Users/evomatik/Proformas/Mascara_11_OCT.xlsx"));
	
			//Get the workbook instance for XLS file 
			XSSFWorkbook workbook = new XSSFWorkbook(file);
		
			//Get first sheet from the workbook
			XSSFSheet sheet = workbook.getSheetAt(0);
			int lastRow = sheet.getLastRowNum();
			
			ConfiguracionEntity configElement = configRepository.findByCodigo(ConfiguracionEnum.FACTOR_USD_EUR.getCodigo());
			this.factorPrecioUnitario = new Double(configElement.getValor());
			
			configElement = configRepository.findByCodigo(ConfiguracionEnum.MONEDA_BASE.getCodigo());
			this.monedaBase = configElement.getValor();
			
			
			System.err.println("Last rownum: " + lastRow);
			//Iterate through each rows from first sheet
			Iterator<Row> rowIterator = sheet.iterator();
			int rownum = 0;
			
			List<TramiteValidacion> tramitesValidados = new ArrayList<TramiteValidacion>();
			
			archivo = new ArchivoValidacion();
			archivo.setNombreArchivo(multipartFile.getOriginalFilename());
			archivo = archivoValidacionService.save(archivo);
			
			while(rowIterator.hasNext()) {
				TramiteValidacion tramite = new TramiteValidacion();
				Row row = rowIterator.next();
				
				if(rownum==0) {
					rownum++;
					continue;
				}else if(rownum>200) {
					break;
				}
				
				System.err.println("Fila : " +rownum);
				int numCelda=-1;
				//For each row, iterate through each columns
				Iterator<Cell> cellIterator = row.cellIterator();
				
				
				while(cellIterator.hasNext()) {
					
					Cell cell = cellIterator.next();
					CeldaProformaValidationEnum elemento = CeldaProformaValidationEnum.getById(numCelda);
					
					switch(elemento) {
						case CANTIDAD_UMC:
							Double d = null;
							if(cell.getCellType().equals(CellType.STRING)) {
								d = new Double(cell.getStringCellValue());
							}else {
								d = new Double(cell.getNumericCellValue());
							}
							tramite.setCantidadUMC(d.intValue());
							break;
						case CANTIDAD_UMT:
							Double cantidadUmt = null;
							if(cell.getCellType().equals(CellType.STRING)) {
								cantidadUmt = new Double(cell.getStringCellValue());
							}else {
								cantidadUmt = new Double(cell.getNumericCellValue());
							}
							tramite.setCantidadUMT(cantidadUmt.longValue());
							break; 
						case DESC_MERCANCIA: 
							tramite.setDescMercancia(cell.getStringCellValue());
							break;
						case DOMICILIO_EXP: 
							tramite.setDomicilioExp(cell.getStringCellValue());
							break;
						case ESTATUS_TRAMITE: 
							tramite.setEstatusTramite(cell.getStringCellValue());
							break;
						case FEC_FACTURA:
							Date fecFactura = null;
							if(cell.getCellType().equals(CellType.STRING)) {
								DateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
								try {
									fecFactura = sdf.parse(cell.getStringCellValue());
								} catch (ParseException e) {
									e.printStackTrace();
								}
							}else {
								fecFactura = cell.getDateCellValue();
							}
							
							tramite.setFechaFactura(fecFactura);
							break;
						case FOLIO_TRAMITE: 
							tramite.setFolioTramite(cell.getStringCellValue());
							break;
						case FRACCION: 
							tramite.setFraccion(cell.getStringCellValue());
							break;
						case MONEDA_COMERCIAL: 
							tramite.setMoneda(cell.getStringCellValue());
							break;
						case NUM_FACTURA: 
							tramite.setNumFactura(cell.getStringCellValue());
							break;
						case PAIS_DESTINO: 
							tramite.setPaisDestino(cell.getStringCellValue());
							break;
						case PAIS_ORIGEN: 
							tramite.setPaisOrigen(cell.getStringCellValue());
							break;
						case PRECIO_UNITARIO_USD: 
							Double precioUnitario = null;
							if(cell.getCellType().equals(CellType.STRING)) {
								precioUnitario = new Double(cell.getStringCellValue());
							}else {
								precioUnitario = cell.getNumericCellValue();
							}
							tramite.setPrecioUnitario(precioUnitario);
							break;
						case RAZON_SOCIAL_EXP: 
							tramite.setRazonSocialExp(cell.getStringCellValue());
							break;
						case SENTIDO_DICTAMEN: 
							tramite.setSentidoDictamen(cell.getStringCellValue());
							break;
						case UNKNOWN: 
							break;
						default:
							break;
					}
					debugProcesing(cell);
					
					numCelda++;
				}
				validaFolio(tramite, archivo);
				almacenarTramiteValidado(tramite, archivo);
				
				tramitesValidados.add(tramite);
				rownum++;
			}
			file.close();
			System.err.println("INSERTING");
			archivo.setTramites(tramitesValidados);
			
			
			
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return archivo;
	}
	
	private void almacenarTramiteValidado(TramiteValidacion tramite, ArchivoValidacion archivo) {
		TramiteValidacionEntity tramiteEntity = new TramiteValidacionEntity();
		BeanUtils.copyProperties(tramite, tramiteEntity);
		Optional<ArchivoValidacionEntity> fileEntity = archivoValidacionRepository.findById(archivo.getIdArchivo());
		tramiteEntity.setArchivo(fileEntity.get());
		tramiteRepository.save(tramiteEntity);
	}
	
	private void validaFolio(TramiteValidacion tramite, ArchivoValidacion archivo) {
		Optional<ProformaEntity> proformaOpt = proformaRepository.findByNumeroSolicitud(tramite.getFolioTramite());
		
		if(proformaOpt.isPresent()) {
			ProformaEntity p = proformaOpt.get();
			validaDato(CeldaProformaValidationEnum.CANTIDAD_UMC.getColumnName(), tramite.getCantidadUMC(), p.getCantidad(), p.getIdProforma(), archivo.getIdArchivo());
			validaDato(CeldaProformaValidationEnum.CANTIDAD_UMT.getColumnName(), tramite.getCantidadUMT(), p.getCantidadUmt(), p.getIdProforma(), archivo.getIdArchivo());
			validaDato(CeldaProformaValidationEnum.DESC_MERCANCIA.getColumnName(), tramite.getDescMercancia(), p.getDescripcion(), p.getIdProforma(), archivo.getIdArchivo());
			validaDato(CeldaProformaValidationEnum.DOMICILIO_EXP.getColumnName(), tramite.getDomicilioExp(), p.getDomicilio(), p.getIdProforma(), archivo.getIdArchivo());
			validaDato(CeldaProformaValidationEnum.FEC_FACTURA.getColumnName(), tramite.getFechaFactura(), p.getFechaFactura(), p.getIdProforma(), archivo.getIdArchivo());
			validaDato(CeldaProformaValidationEnum.FOLIO_TRAMITE.getColumnName(), tramite.getFolioTramite(), p.getNumeroSolicitud(), p.getIdProforma(), archivo.getIdArchivo());
			validaDato(CeldaProformaValidationEnum.FRACCION.getColumnName(), tramite.getFraccion(), p.getFraccion(), p.getIdProforma(), archivo.getIdArchivo());
			validaDato(CeldaProformaValidationEnum.MONEDA_COMERCIAL.getColumnName(), tramite.getMoneda(), p.getMoneda(), p.getIdProforma(), archivo.getIdArchivo());
			validaDato(CeldaProformaValidationEnum.NUM_FACTURA.getColumnName(), tramite.getNumFactura(), p.getNumFactura(), p.getIdProforma(), archivo.getIdArchivo());
			validaDato(CeldaProformaValidationEnum.PAIS_DESTINO.getColumnName(), tramite.getPaisDestino(), p.getPaisExportador(), p.getIdProforma(), archivo.getIdArchivo());
			validaDato(CeldaProformaValidationEnum.PAIS_ORIGEN.getColumnName(), tramite.getPaisOrigen(), p.getPaisOrigen(), p.getIdProforma(), archivo.getIdArchivo());
			validaDato(CeldaProformaValidationEnum.RAZON_SOCIAL_EXP.getColumnName(), tramite.getRazonSocialExp(), p.getNombreExportador(), p.getIdProforma(), archivo.getIdArchivo());
						
			//Hay que aplicar factor si es que se registro en euros
			validaPrecioUnitario(p, tramite.getPrecioUnitario(), archivo.getIdArchivo());
			
			actualizaEstatus(p, tramite);	
		}
	}
	
	private void actualizaEstatus(ProformaEntity p, TramiteValidacion tramite) {
		if(	tramite.getEstatusTramite().equals(EstatusTramiteEnum.CONCLUIDO.getLabel()) ) {
			if(tramite.getSentidoDictamen().equalsIgnoreCase(SentidoResolucionEnum.ACEPTADO.getLabel())){
				p.setEstatus("Aprobado");
			}else if(tramite.getSentidoDictamen().equalsIgnoreCase(SentidoResolucionEnum.RECHAZADO.getLabel())) {
				p.setEstatus(SentidoResolucionEnum.RECHAZADO.getLabel());
			}
		}
		p.setSentidoDictamen(tramite.getSentidoDictamen());
	}
	
	private void validaPrecioUnitario(ProformaEntity p, Double precioUnitarioTarget, Long idArchivo) {
		Double precioUnitarioSource = null;
		
		if(!p.getMoneda().equalsIgnoreCase(this.monedaBase)) {
			precioUnitarioSource = p.getValorMercancia()*this.factorPrecioUnitario/p.getCantidadUmt();
			
			Double diferencia = precioUnitarioSource -  precioUnitarioTarget;
			if(diferencia>0.01) {
				registraError(CeldaProformaValidationEnum.PRECIO_UNITARIO_USD.getColumnName(), precioUnitarioTarget.toString(), precioUnitarioSource.toString(), p.getIdProforma(), idArchivo);
			}
		}
	}
	
	private void validaDato(String fieldName, String target, String source, Long idProforma, Long idArchivo) {
		String targetToEvaluate = target.replaceAll(" ", "").toLowerCase();
		String sourceToEvaluate = source.replaceAll(" ", "").toLowerCase();
		
		if(!targetToEvaluate.equals(sourceToEvaluate)) {
			registraError(fieldName, target, source, idProforma, idArchivo);
		}
	}
	
	private void validaDato(String fieldName, Integer target, Integer source, Long idProforma, Long idArchivo) {
		if(!target.equals(source)) {
			registraError(fieldName, target.toString(), source.toString(), idProforma, idArchivo);
		}
	}
	
	/**
	 * Valida precio unitario
	 * @param fieldName
	 * @param target
	 * @param source
	 * @param idProforma
	 */
	private void validaDato(String fieldName, Double target, Double source, Long idProforma, Long idArchivo) {
		if(!target.equals(source)) {
			registraError(fieldName, target.toString(), source.toString(), idProforma, idArchivo);
		}
	}
	
	private void validaDato(String fieldName, Date target, Date source, Long idProforma, Long idArchivo) {
		DateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd");  
		String targetDate = dateFormat.format(target);  
		
		String sourceDate = dateFormat.format(source);
		
		if(!target.equals(source)) {
			registraError(fieldName, targetDate, sourceDate, idProforma, idArchivo);
		}
	}
	
	private void validaDato(String fieldName, Long target, Long source, Long idProforma, Long idArchivo) {
		if(!target.equals(source)) {
			registraError(fieldName, target.toString(), source.toString(), idProforma, idArchivo);
		}
	}
	
	private void registraError(String fieldName, String target, String source, Long idProforma, Long idArchivo) {
		ErrorValidacionEntity error = new ErrorValidacionEntity();
		error.setCampoInvalido(fieldName);
		error.setValorProforma(source);
		error.setValorReportado(target);
		error.setIdArchivoValidacion(idArchivo);
		Optional<ProformaEntity> pEntity = proformaRepository.findById(idProforma);
		error.setProforma(pEntity.get());
		errorRepository.save(error);
	}
	
	/**
	 * 
	 */
	public FileProcesorService() {
		// TODO Auto-generated constructor stub
	}

}
