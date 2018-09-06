<template>
 <main>
    <section>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                <blockquote class="blockquote mb-5 text-left" :v-for="research in research">
                    {{ research.title}}
                    {{ research.text }}
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
            research: []
        }
    },
    created(){
        firebase.database().ref('research').on('child_added', snapshot => {
            this.research.concat(snapshot.val());
        });
    }
    
}
</script>

<style>

</style>

