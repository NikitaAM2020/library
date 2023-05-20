package com.library.backend.service;

import com.library.backend.model.Library;
import com.library.backend.repository.LibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LibraryServiceImpl implements LibraryService{
    @Autowired
    private LibraryRepository libraryRepository;

    @Override
    public Library saveLibrary(Library library) {
        return libraryRepository.save(library);
    }

    @Override
    public List<Library> getAllBooks() {
        return libraryRepository.findAll();
    }
}
