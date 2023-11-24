package com.project.Project.repository;

import com.project.Project.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioUsuario extends JpaRepository<Usuario,Long>{
}
