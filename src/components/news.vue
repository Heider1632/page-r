<template>
    <main>
     <!-- How it works Section-->
    <section class="bg-gray">
      <div class="container text-center text-lg-left">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <h2 class="divider-heading">Welcome to news</h2>
            <div class="row">
              <div class="col-lg-10">
                <p class="lead divider-subtitle mt-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing. Vitae animi mollitia cumque sunt soluta. consectetur adipisicing.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-5 mt-5 mt-lg-0"><img src="https://d19m59y37dris4.cloudfront.net/appton/1-0/img/illustration-2.svg" alt="" class="divider-image img-fluid"></div>
        </div>
      </div>
    </section>
    <!-- News Section-->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- sidebar-->
            <aside class="sidebar">
            <div class="search mb-4">
              <form action="#" class="search-form">
                <div class="form-group">
                  <input type="search" name="search" placeholder="Search" class="form-control">
                  <button type="submit"> <i class="fa fa-search"></i></button>
                </div>
              </form>
            </div>
            </aside>
          </div>
        </div>
        <div class="row"> 
          <div class="col-lg-12">   
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
        </div>
        </div>
        </section>
    </main>
</template>
<script>
import firebase from 'firebase'
export default {
    data(){
      return{
          news: []
        }
    },
    created(){
      firebase.database().ref('new')
            .on('value', snapshot => this.cargar(snapshot.val()))
    },
    methods:{
       cargar(researchs){
            this.news = []; 

            for(let key in news){

                this.news.push({
                    title: news[key].title,
                    body: news[key].body,
                    picture: news[key].picture
                });
            }
        }
    }
}

</script>

<style>
/*
* =====================================================
*     FAQ SECTION
* =====================================================
*/
.accordion-custom .card {
  border-radius: 0;
  border: none;
  margin-bottom: 1.3rem;
  background: linear-gradient(45deg, #0069d9, #0069d9);
}

.accordion-custom .card-header {
  border: none;
  padding: 0;
  background: none;
}

.accordion-custom .card-header button {
  color: #333;
  text-transform: none !important;
  background: none;
  display: block;
  border: none;
  padding: 1.5rem 2.1rem;
  cursor: pointer;
  width: 100%;
  text-align: left;
  background: #f5f5f5;
  outline: none;
}

.accordion-custom .card-header button[aria-expanded='true'] {
  background: none;
  color: #fff;
}

.accordion-custom .card-header button:hover, .accordion-custom .card-header button:focus {
  text-decoration: none;
}

.accordion-custom .accordion-heading {
  font-size: 1.05rem;
}

.accordion-custom .accordion-heading i {
  font-size: 2.2rem;
  margin-right: 1.5rem;
}

.accordion-custom .card-body {
  color: #fff;
  padding: 2rem 2.1rem;
  padding-top: 0.7rem;
  font-weight: 300;
  font-size: 0.9rem;
  line-height: 1.7rem;
}

/*
* =====================================================
*     SIDEBAR
* =====================================================
*/
.sidebar .search .form-group {
  position: relative;
}

.sidebar .search .form-control {
  background: #f5f5f5;
  border: 1px solid transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  padding: 1.3rem 2rem;
}

.sidebar .search .form-control:focus {
  border-color: #0069d9;
}

.sidebar .search .form-control:focus + button {
  background: #0069d9;
  color: #fff;
  border-color: #0069d9;
}

.sidebar .search button {
  width: 4rem;
  text-align: center;
  line-height: 2.7rem;
  height: 100%;
  background: #f2f2f2;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  color: #aaa;
  border: 1px solid transparent;
  border-left: 0;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.sidebar-widget {
  padding: 2.5rem;
}

.categories-link {
  color: #777;
  text-decoration: none;
  margin-bottom: 0.5rem;
}

.categories-link:hover {
  color: #0069d9;
  text-decoration: none;
}

.tag-link {
  color: #777;
  padding: 0.5rem 1.2rem;
  background: #fff;
  margin: 0.2rem;
}

.tag-link:hover {
  background: #0069d9;
  color: #fff;
  text-decoration: none;
}
</style>
<script>
import divider from './sections/divider'
export default {
    name: 'news',
    components: { divider} 
    
}
</script>
