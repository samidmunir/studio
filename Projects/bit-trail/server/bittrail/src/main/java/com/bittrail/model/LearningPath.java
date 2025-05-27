package com.bittrail.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "learningpaths")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LearningPath {
    @Id
    private String id;
    private String title;
    private String description;
}