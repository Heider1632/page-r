<template>
 <!-- navbar-->
    <header class="header">
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container"><a href="./" class="navbar-brand">
          <img src="src/assets/img/logo.svg" alt="" class="img-fluid"></a>
          <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right">Menu<i class="fa fa-bars ml-2"></i></button>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
                  <!-- Link-->
                  <li class="nav-item"> <a href="index.html" class="nav-link active">Home</a></li>
                  <!-- Link-->
                  <li class="nav-item"> <a href="faq.html" class="nav-link">FAQ</a></li>
                  <!-- Link-->
                  <li class="nav-item"> <a href="contact.html" class="nav-link">Contact</a></li>
                  <!-- Link-->
                  <li class="nav-item"> <a href="text.html" class="nav-link">Text Page</a></li>
              <li class="nav-item dropdown"><a id="pages" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">Dropdown</a>
                <div class="dropdown-menu"><a href="faq.html" class="dropdown-item">FAQ</a><a href="contact.html" class="dropdown-item">Contact</a><a href="text.html" class="dropdown-item">Text Page</a></div>
              </li>
            </ul><a href="#" data-toggle="modal" data-target="#login" class="btn btn-primary navbar-btn ml-0 ml-lg-3">Login </a>
          </div>
        </div>
      </nav>
    </header>
</template>
<style type="text/css">
/*
* =====================================================
*     NAVBAR
* =====================================================
*/
nav.navbar {
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}

nav.navbar.active {
  background: #fff;
  -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.08);
}

nav.navbar .dropdown-menu {
  margin-top: 1.4rem;
}

/* NAVBAR MEDIAQUERY */
@media (max-width: 991.98px) {
  nav.navbar {
    background: #fff;
    -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.08);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.08);
  }
  nav.navbar .dropdown-menu {
    -webkit-box-shadow: none;
    box-shadow: none;
    margin-top: 0;
    margin-bottom: 1rem;
  }
}
</style>
