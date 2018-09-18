<template>
 <main>
    <section>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-10 mx-auto" v-for="(r, index, key) in researchs" :key="key">
                <strong>{{ r.title }}</strong>
                <blockquote class="blockquote mb-5 text-left">
                    {{ r.text }}
                </blockquote>
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
            researchs: []
        }
    },
    created(){
        firebase.database().ref('research')
            .on('value', snapshot => this.cargar(snapshot.val()))
    },
    methods: {
        cargar(researchs){
            this.researchs = []; 

            for(let key in researchs){

                this.researchs.push({
                    title: researchs[key].title,
                    text: researchs[key].text,
                });
            }
        }
    }
    
}
</script>

<style>

</style>

