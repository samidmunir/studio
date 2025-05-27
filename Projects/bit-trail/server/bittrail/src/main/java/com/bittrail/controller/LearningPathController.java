package com.bittrail.controller;

import com.bittrail.model.LearningPath;
import com.bittrail.repository.LearningPathRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/learning-paths")
@CrossOrigin(origins = "*")
public class LearningPathController {
    @Autowired
    private LearningPathRepository repository;

    // GET all learning paths
    @GetMapping
    public List<LearningPath> getAllPaths() {
        return repository.findAll();
    }

    // CREATE a new learning path
    @PostMapping
    public LearningPath createPath(@RequestBody LearningPath path) {
        return repository.save(path);
    }

    // DELETE a learning path by ID
    @DeleteMapping("/{id}")
    public void deletePath(@PathVariable String id) {
        repository.deleteById(id);
    }
}