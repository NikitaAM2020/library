package com.library.backend.exception;

public class BookNotFoundException extends RuntimeException {
    public BookNotFoundException(int id) {
        super("Could not found the book with id " + id);
    }
}
