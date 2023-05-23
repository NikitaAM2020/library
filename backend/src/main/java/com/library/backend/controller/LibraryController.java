package com.library.backend.controller;

import com.library.backend.exception.BookNotFoundException;
import com.library.backend.model.Library;
import com.library.backend.repository.LibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Book;
import java.util.List;

@RestController
@RequestMapping("/books")
@CrossOrigin("http://localhost:3000")
public class LibraryController {
    @Autowired
    private LibraryRepository libraryRepository;

    @PostMapping("/add")
    Library add(@RequestBody Library library) {
        return libraryRepository.save(library);
    }

    @GetMapping("/getAll")
    List<Library> getAllBooks() {
        return libraryRepository.findAll();
    }

    @GetMapping("/book/{id}")
    Library getBookById(@PathVariable int id) {
        return libraryRepository.findById(id)
                .orElseThrow(() -> new BookNotFoundException(id));
    }

    @PutMapping("/book/{id}")
    Library updateBook(@RequestBody Library newBook, @PathVariable int id) {
        return libraryRepository.findById(id)
                .map(book -> {
                    book.setBookname(newBook.getBookname());
                    book.setAuthor(newBook.getAuthor());
                    book.setYear(newBook.getYear());
                    book.setNumber(newBook.getNumber());
                    return libraryRepository.save(book);
                }).orElseThrow(() -> new BookNotFoundException(id));
    }

    @DeleteMapping("/book/{id}")
    String deleteBook(@PathVariable int id) {
        if (!libraryRepository.existsById(id)) {
            throw new BookNotFoundException(id);
        }
        libraryRepository.deleteById(id);
        return "Book with id " + id + " has been deleted success.";
    }
}
