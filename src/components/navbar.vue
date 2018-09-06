<template>
 <!-- navbar-->
    <header class="header">
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container"><a href="./" class="navbar-brand">
          <img src="../assets/img/logo.png" alt="" class="img-fluid"></a>
          <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right">Menu<i class="fa fa-bars ml-2"></i></button>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
                  <!-- Link-->
                  <li class="nav-item"> 
                    <router-link class="nav-link active" to="/">Home</router-link>
                  </li>
                  <!-- Link-->
                  <li class="nav-item"> 
                    <router-link class="nav-link" to="/research">Research</router-link>
                  </li>
                  <!-- Link-->
                  <li class="nav-item"> 
                    <router-link class="nav-link" to="/publications">Publications</router-link>
                  </li>
                  <!-- Link-->
                  <li class="nav-item"> 
                    <router-link class="nav-link" to="/people">People</router-link>
                  </li>
                  <!-- Link-->
                  <li class="nav-item"> 
                    <router-link class="nav-link" to="/news">News</router-link>
                  </li>
                  <!-- Link-->
                  <li class="nav-item"> 
                    <router-link class="nav-link" to="/contact">Contact</router-link>
                  </li>
                  <li v-if="isLoggedIn" class="nav-item dropdown">
                    <a id="pages" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">Admin</a>
                  <div class="dropdown-menu">
                      <router-link class="dropdown-item" to="/config">Config</router-link>
                      <a class="dropdown-item" v-on:click="logout"><a>Logout</a></a>
                  </div>
                  </li>
                  <li v-else class="nav-item">
                    <router-link class="dropdown-item" to="/login">Acceder</router-link>
                  </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
</template>
<script>
import firebase from 'firebase';
export default {
  name: 'navbar',
  data(){
    return{
      isLoggedIn: false,
      currentUser: false
    }
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    }
  }
  
}
</script>

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
