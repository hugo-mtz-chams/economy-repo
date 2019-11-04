/**
 * 
 */
package com.tramitanet.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tramitanet.entities.ArchivoValidacionEntity;
import com.tramitanet.entities.TramiteValidacionEntity;
import com.tramitanet.model.ArchivoValidacion;
import com.tramitanet.model.TramiteValidacion;
import com.tramitanet.repositories.ArchivoValidacionRepository;

/**
 * @author evomatik
 *
 */
@Service
public class ArchivoValidacionDAO {
	
	@Autowired
	ArchivoValidacionRepository repository;
	
	public ArchivoValidacion save(ArchivoValidacion dto) {
		ArchivoValidacionEntity entity = new ArchivoValidacionEntity();
		BeanUtils.copyProperties(dto, entity);
		List<TramiteValidacionEntity> tramiteEntities = new ArrayList<TramiteValidacionEntity>();
		for(TramiteValidacion t : dto.getTramites()) {
			TramiteValidacionEntity tramiteEntity = new TramiteValidacionEntity();
			BeanUtils.copyProperties(t, tramiteEntity);
			tramiteEntities.add(tramiteEntity);
		}
		entity.setTramites(tramiteEntities);
		repository.save(entity);
		
		List<TramiteValidacion> tsv = new ArrayList<TramiteValidacion>();
		for (TramiteValidacionEntity e :entity.getTramites()) {
			TramiteValidacion tv = new TramiteValidacion();
			BeanUtils.copyProperties(e, tv);
			tsv.add(tv);
		}
		dto.setIdArchivo(entity.getIdArchivo());
		dto.setFechaCarga(entity.getFechaCarga());
		dto.setTramites(tsv);
		return dto;
	}
}
