package com.library.backend.service;

import com.library.backend.model.Library;

import java.util.List;

public interface LibraryService {
    public Library saveLibrary(Library library);
    public List<Library> getAllBooks();
}
