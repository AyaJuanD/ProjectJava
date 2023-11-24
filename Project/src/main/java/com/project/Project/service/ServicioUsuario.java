package com.project.Project.service;

import com.project.Project.model.Usuario;

import java.util.Optional;

public interface ServicioUsuario {
    Usuario guardarUsuario (Usuario usuario);
    Usuario obtenerUsuario(Long idUsuario);
    Usuario usuarioAModificar(Long id, Usuario usuarioModificar);
    boolean eliminarUsuario (Long id);
}
