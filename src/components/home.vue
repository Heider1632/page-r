<template>
<main>
  <!-- Hero Section-->
  <section class="hero">
    <div class="container mb-5">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h1 class="hero-heading mb-0">Welcome to CI&CC</h1>
          <div class="row">
            <div class="col-lg-10">
              <p class="lead text-muted mt-4 mb-4" align="justify">
                Welcome to CI&CC, the research group on Cognitive Informatics and Cognitive Computing of the Department of Educational Informatics at Universidad de Córdoba - Montería. Our main area of interest is the design of cognitive and metacognitive systems for use in education. 
              </p>

              <br />
              <p class="lead text-muted mt-4 mb-4" align="justify">
                Cognitive Informatics: Cognitive Informatics (CI) is a multidisciplinary research area of computer science that investigates the information processing methods of the brain and natural intelligence and their engineering applications in cognitive computing.
              </p>
              
              <br />
              <p class="lead text-muted mt-4 mb-4" align="justify">
                Cognitive computing: Cognitive Computing (CC) is a computing paradigm based on cognitive informatics wich aims to desig computational systems that simulate or augment the internal information processing methods of the brain and natural intelligence.
              </p>
            </div>
          </div>

        </div>
        <div class="col-lg-6"><img src="../assets/img/illustration-hero.svg" alt="..." class="hero-image img-fluid d-none d-lg-block"></div>
      </div>
    </div>
  </section>
    <intro />
  </main>
</template>
<script>
import intro from './sections/intro'
export default {
  name: 'home',
  components: { intro },
  data(){
    return {

    }
  }
}
</script>

<style type="text/css">
/* =====================================================
*     HERO SECTION
* =====================================================
*/
.hero {
  padding: 7rem 0;
  background: url(../assets/img/hero-bg.svg) no-repeat;
  background-size: cover;
  background-position: bottom left;
}

.subscription-form .form-group {
  position: relative;
}

.subscription-form .form-group button {
  position: absolute;
  top: 0.375rem;
  right: 0.4rem;
  border-radius: 0;
}

.subscription-form input::-moz-placeholder {
  font-weight: 300;
  font-size: 0.9rem;
  color: #aaa;
}

.subscription-form input::-webkit-input-placeholder {
  font-weight: 300;
  font-size: 0.9rem;
  color: #aaa;
}

.subscription-form input:-ms-input-placeholder {
  font-weight: 300;
  font-size: 0.9rem;
  color: #aaa;
}

/* HERO MEDIAQUERY */
@media (max-width: 991.98px) {
  .hero {
    padding: 5rem 0 7rem;
    padding-top: 8rem;
  }
  .subscription-form .form-group {
    position: static;
  }
  .subscription-form .form-group button {
    position: static;
    width: 100%;
    margin-top: 0.5rem;
  }
}
</style>
