package com.tramitanet.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tramitanet.entities.ErrorValidacionEntity;
import com.tramitanet.model.ErrorValidacion;
import com.tramitanet.repositories.ErrorValidacionRepository;

@Service
public class ErroresService {
	
	@Autowired
	ErrorValidacionRepository errorRepository;
	
	public List<ErrorValidacion> findErroresByArchivo(Long idArchivo) {
		List<ErrorValidacionEntity> erroresEntity = errorRepository.findByIdArchivoValidacion(idArchivo);
		List<ErrorValidacion> errores = new ArrayList<ErrorValidacion>();
		for(ErrorValidacionEntity e : erroresEntity) {
			ErrorValidacion ev = new ErrorValidacion();
			BeanUtils.copyProperties(e, ev);
			errores.add(ev);
		}
		return errores;
	}
}
