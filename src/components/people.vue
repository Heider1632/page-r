<template>
 <main>
   <!-- Integrations Section-->
    <section>
      <div class="container">
        <div class="text-center">
          <h2>People</h2>
        </div>
        <div class="integrations mt-5">
          <div class="row">
            <div class="col-lg-4">
              <!--<div class="box text-center" :people="people" v-for="people in peoples">
                <div class="icon d-flex align-items-end">
                    <img src="{{ people.photo }}" alt="{{ people }}" class="img-fluid">
                </div>
                <h3 class="h4">{{ people }}</h3>
                <p class="text-small font-weight-light">{{ people }}</p>
                <p class="text-small font-weight-light">{{ people }}</p>
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </section>
 </main>
</template>
<script>
import firebase from 'firebase';
export default {
    data(){
        return{
            people: []
        }
    },
    created(){
        firebase.database().ref('people').on('child_added', snapshot => {
            this.people.concat(snapshot.val())
        });
    }
}
</script>
