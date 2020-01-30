package com.colfondos.app.repositories;

import com.colfondos.app.models.Log;
import org.springframework.data.repository.CrudRepository;

public interface LogRepository extends CrudRepository<Log, String> {
}
