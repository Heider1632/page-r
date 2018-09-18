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
              <div class="box text-center" v-for="(p, index, key) in peoples" :key="key">
                <div class="icon d-flex align-items-end">
                    <img :src="p.image" :alt="p.name" class="img-fluid peoplephoto">
                </div>
                <h3 class="h4">{{ p.title }}</h3>
                <p class="text-small font-weight-light">{{ p.area }}</p>
                <p class="text-small font-weight-light">{{ p.university }}</p>
              </div>
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
            peoples: []
        }
    },
    created(){
        firebase.database().ref('people').on('value', snapshot => {
            this.cargarPeople(snapshot.val())
        });
    },

    methods: {
      cargarPeople(peoples){
        this.peoples = [];

        for (let key in peoples){
          this.peoples.push({
            image: peoples[key].image,
            name: peoples[key].name,
            lastname: peoples[key].lastname,
            title: peoples[key].title,
            departament: peoples[key].departament,
            area: peoples[key].area,
            university: peoples[key].university,
          });
        }
      }
    }
}
</script>
<style scoped>
.peoplephoto{
  width: 250px;
  height: 250px;
  border-radius: 50px;
}
</style>

