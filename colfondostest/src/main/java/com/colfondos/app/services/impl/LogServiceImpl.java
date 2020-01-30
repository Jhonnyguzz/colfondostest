package com.colfondos.app.services.impl;

import com.colfondos.app.models.Log;
import com.colfondos.app.repositories.LogRepository;
import com.colfondos.app.services.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LogServiceImpl implements LogService {

    private LogRepository logRepository;

    @Autowired
    public LogServiceImpl(LogRepository logRepository) {
        this.logRepository = logRepository;
    }

    @Override
    public void saveLog(Log log) {
        logRepository.save(log);
    }

}
