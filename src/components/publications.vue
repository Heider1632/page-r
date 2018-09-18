<template>
 <main>
      <section>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-10 mx-auto" v-for="(p, index, key) in publications" :key="key">
                <h1 align="center">{{ p.year }} </h1>
                <blockquote class="blockquote mb-5 text-left">
                    {{ p.ref }}
                <strong><a :href="p.link" target="_blank">Leer más</a></strong>
                </blockquote>
                </div>
            </div>
        </div>
    </section>
 </main>
</template>
<style>

</style>
<script>
import firebase from 'firebase';
export default {
     data(){
        return{
            publications: []
        }
    },
    created(){
        firebase.database().ref('publications')
            .on('value', snapshot => this.cargar(snapshot.val()))
    },

    methods: {
        cargar(publications){
            this.publications = []; 

            for(let key in publications){

                this.publications.push({
                    ref: publications[key].ref,
                    year: publications[key].year,
                    link: publications[key].link
                });
            }
        }
    }
    
}
</script>

