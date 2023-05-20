package com.library.backend.repository;

import com.library.backend.model.Library;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LibraryRepository extends JpaRepository<Library,Integer> {
}
