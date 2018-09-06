<template>
    <main>
     <!-- How it works Section-->
    <section class="bg-gray">
      <div class="container text-center text-lg-left">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <h2 class="divider-heading">Curious how Appton <br>works for large</h2>
            <div class="row">
              <div class="col-lg-10">
                <p class="lead divider-subtitle mt-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing. Vitae animi mollitia cumque sunt soluta. consectetur adipisicing.</p>
              </div>
            </div><a href="#" class="btn btn-primary">Learn More</a>
          </div>
          <div class="col-lg-5 mt-5 mt-lg-0"><img src="https://d19m59y37dris4.cloudfront.net/appton/1-0/img/illustration-2.svg" alt="" class="divider-image img-fluid"></div>
        </div>
      </div>
    </section>
    <!-- News Section-->
    <section>
      <div class="container">
        <div class="row"> 
          <div class="col-lg-8">   
            <div id="accordion" class="faq accordion accordion-custom pb-5">
              <!-- question-->
              <div class="card">
                <div id="headingOne" class="card-header">
                  <h4 class="mb-0 accordion-heading">
                    <button data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" class="d-flex align-items-center"><i class="icon-light-bulb"></i><span>Anim pariatur cliche reprehenderit</span></button>
                  </h4>
                </div>
                <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordion" class="collapse show">
                  <div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</div>
                </div>
              </div>
              <!-- question        -->
              <div class="card">
                <div id="headingTwo" class="card-header">
                  <h4 class="mb-0 accordion-heading">
                    <button data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" class="d-flex align-items-center collapsed"><i class="icon-plug"></i><span> Wolf moon officia aute, non cupidatat?</span></button>
                  </h4>
                </div>
                <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordion" class="collapse">
                  <div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.</div>
                </div>
              </div>
              <!-- question-->
              <div class="card">
                <div id="headingThree" class="card-header">
                  <h4 class="mb-0 accordion-heading">
                    <button data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" class="d-flex align-items-center collapsed"><i class="icon-shield-settings"></i><span>Food truck quinoa nesciunt laborum?</span></button>
                  </h4>
                </div>
                <div id="collapseThree" aria-labelledby="headingThree" data-parent="#accordion" class="collapse">
                  <div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.</div>
                </div>
              </div>
              <!-- question            -->
              <div class="card">
                <div id="headingFour" class="card-header">
                  <h4 class="mb-0 accordion-heading">
                    <button data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" class="d-flex align-items-center collapsed"><i class="icon-stack-of-sheets"></i><span>Anim pariatur cliche reprehenderit?</span></button>
                  </h4>
                </div>
                <div id="collapseFour" aria-labelledby="headingFour" data-parent="#accordion" class="collapse">
                  <div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
                </div>
              </div>
            </div>
        </div>
          <!-- sidebar-->
          <aside class="sidebar col-lg-4 mt-5 mt-lg-0">
            <div class="search mb-4">
              <form action="#" class="search-form">
                <div class="form-group">
                  <input type="search" name="search" placeholder="Search" class="form-control">
                  <button type="submit"> <i class="fa fa-search"></i></button>
                </div>
              </form>
            </div>
            <div class="sidebar-widget mb-4">
              <h4 class="sidebar-widget-heading">Questions Categories</h4>
              <ul class="list-unstyled pl-0 mt-4">
                <li> <a href="#" class="categories-link">WordPress installation</a></li>
                <li><a href="#" class="categories-link">Troubleshooting</a></li>
                <li><a href="#" class="categories-link">Pricing &amp; Support</a></li>
                <li><a href="#" class="categories-link">Tips &amp; Tricks</a></li>
                <li><a href="#" class="categories-link">Managing Files</a></li>
              </ul>
            </div>
          </aside>
        </div>
        </div>
        </section>
        <divider />
    </main>
</template>
<style>

</style>
<script>
import divider from './sections/divider'
export default {
    name: 'news',
    components: { divider} 
    
}
</script>
