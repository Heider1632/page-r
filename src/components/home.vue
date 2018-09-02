<template>
  <!-- Hero Section-->
  <section class="hero">
    <div class="container mb-5">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h1 class="hero-heading mb-0">Move work <br> forward</h1>
          <div class="row">
            <div class="col-lg-10">
              <p class="lead text-muted mt-4 mb-4">Lorem ipsum dolor sit amet, consectetur. Eiusmod tempor incididunt.</p>
            </div>
          </div>
          <form action="#" class="subscription-form">
            <div class="form-group">
              <input type="email" name="email" placeholder="Name@company.com" class="form-control">
              <button type="submit" class="btn btn-primary">Get Started</button>
            </div>
          </form>
        </div>
        <div class="col-lg-6"><img src="../assets/img/illustration-hero.svg" alt="..." class="hero-image img-fluid d-none d-lg-block"></div>
      </div>
    </div>
  </section>
</template>
<style type="text/css">
/* =====================================================
*     HERO SECTION
* =====================================================
*/
.hero {
  padding: 12.5rem 0;
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
