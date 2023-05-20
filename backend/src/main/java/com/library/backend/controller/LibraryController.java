package com.library.backend.controller;

import com.library.backend.model.Library;
import com.library.backend.service.LibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class LibraryController {
    @Autowired
    private LibraryService libraryService;

    @PostMapping("/add")
    public String add(@RequestBody Library library) {
        libraryService.saveLibrary(library);
        return "New book is added";
    }

    @GetMapping("/getAll")
    public List<Library> getAllBooks(){
        return libraryService.getAllBooks();
    }

}
