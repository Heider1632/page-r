<template>
    <main>
       <!-- Hero Section-->
    <section class="hero">
      <div class="container text-center">
        <!-- breadcrumb-->
        <nav aria-label="breadcrumb" class="d-flex justify-content-center">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link class="animsition-link" to="/">Home</router-link>
            </li>
            <li aria-current="page" class="breadcrumb-item active">Admin </li>
          </ol>
        </nav>
        <h1 class="hero-heading">Bienvenido Administrador</h1>
        <div class="row">
          <div class="col-lg-7 mx-auto">
            <p class="lead text-muted">Aquí puedes añadir todo lo necesario para la pagina web.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <legend>Add researc</legend>
                    <label>Title</label>
                    <input type="text" v-model="title">
                    <label>Body Text</label>
                    <textarea v-model="text">
                    </textarea>

                    <button class="btn btn-primary" @click="uploadResearch()">Push</button>
                </div>
            </div>
        </div>
    </section>
    </main>
</template>
<style>

</style>
<script>
import firebase from 'firebase'
export default {
    data(){
        return{
            people: {
                name: '',
                lastname: '',
                area: '',
                title: '',
            },
            reserach: {
                title: '',
                text: ''
            }
        }
    },
    methods: {

        uploadPeolple(){
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`people/foto/${file.name}`);
        const task = storageRef.put(file);

             task.on('state_changed', snapshot => {
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                this.setState({
                    uploadValue: percentage
                })
                }, error => {
                    console.log(error.message)
                }, () => storageRef.getDownloadURL().then(url => {
                    const record = {
                        name: this.people.name,
                        lastname: this.people.lastnamename,
                        area: this.people.area,
                        tittle: this.people.title,
                        departament: 'Department of Educational Informatics (Departamento de Informática Educativa)',
                        university: 'Universidad de Córdoba',
                        photo: url
                };

                const dbRef = firebase.database().ref('people');
                const newPeople = dbRef.push();
                newPeople.set(record);
            }));
        },

        uploadResearch(){
            const researchRef = firebase.database().ref('/research');

            researchRef.push({
                title: this.research.title,
                text:this.reserach.text
            })

            location.reload();
        }
    }
    
}
</script>
