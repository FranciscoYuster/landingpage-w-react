import React from 'react';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Start Bootstrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        <a class="nav-link disabled" href="#">Nosotros</a>
        <a class="nav-link disabled" href="#">Servicios</a>
        <a class="nav-link disabled" href='#'>Contacto</a>
      </div>
    </div>
  </div>
</nav>
  );
}

export default Navbar;