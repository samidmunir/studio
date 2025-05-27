package com.bittrail.repository;

import com.bittrail.model.LearningPath;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LearningPathRepository extends MongoRepository<LearningPath, String> {
}