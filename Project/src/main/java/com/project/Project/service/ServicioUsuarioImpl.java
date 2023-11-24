package com.project.Project.service;

import com.project.Project.model.Usuario;
import com.project.Project.repository.RepositorioUsuario;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class ServicioUsuarioImpl implements ServicioUsuario{

    private final RepositorioUsuario repositorioUsuario;
    @Override
    public Usuario guardarUsuario(Usuario usuario) {
        return repositorioUsuario.save(usuario);
    }

    @Override
    public Usuario obtenerUsuario(Long idUsuario) {
        return repositorioUsuario.findById(idUsuario).orElseThrow(() -> {throw new RuntimeException();});
    }

    @Override
    public Usuario usuarioAModificar(Long id, Usuario usuarioModificar) {
        Usuario usuarioBuscado = repositorioUsuario.findById(id).get();
        usuarioBuscado.setDireccion(usuarioModificar.getDireccion());
        repositorioUsuario.save(usuarioBuscado);
        return repositorioUsuario.save(usuarioBuscado);
    }

    @Override
    public boolean eliminarUsuario(Long id) {

        try {
            repositorioUsuario.deleteById(id);
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
