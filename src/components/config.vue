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
    <!-- Intro Section-->
   <section>
     <div class="container">
       <div class="row">
         <div class="col-lg-4 mx-auto mt-3"><img src="../assets/img/illustration-1.svg" alt="..." class="intro-image img-fluid"></div>
         <div class="col-lg-8 mx-auto mt-5">
             <legend>Research form</legend>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Title</span>
                </div>
                <input type="text" class="form-control" placeholder="title" aria-label="title" v-model="title" aria-describedby="basic-addon1">
            </div>

            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">With textarea</span>
                </div>
                    <textarea class="form-control" v-model="text" aria-label="Body text"></textarea>
                </div>
                <br>
                <div align="center">
                    <a href="#" class="btn btn-primary" @click="uploadResearch()">Send</a>
                </div>
         </div>
       </div>
     </div>
   </section>
    <!-- How it works Section-->
    <section class="bg-gray">
      <div class="container text-center text-lg-left">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <h2 class="divider-heading">People form</h2>
            <div class="row">
              <div class="col-lg-10">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">First and last name</span>
                    </div>
                    <input type="text" aria-label="First name" v-model="name" class="form-control">
                    <input type="text" aria-label="Last name" v-model="lastname" class="form-control">
                </div>
                <br>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Area and title person</span>
                    </div>
                    <input type="text" aria-label="area" v-model="area" class="form-control">
                    <input type="text" aria-label="title person" v-model="titleperson" class="form-control">
                </div>
              </div>

                <div class="form-group box-photo">
                    <label for="exampleFormControlFile1">Photo</label>
                    <input type="file" accept="image/*"  @change="detectFiles($event.target.files)" class="form-control-file">
                </div>

                <div class="progress-bar" :style="{ width: progressUpload + '%'}">{{ progressUpload }}</div>
            </div>
                <a href="#" class="btn btn-primary" @click="uploadPeople()">Send</a>
          </div>
          <div class="col-lg-5 mt-5 mt-lg-0"><img src="https://d19m59y37dris4.cloudfront.net/appton/1-0/img/illustration-2.svg" alt="" class="divider-image img-fluid"></div>
        </div>
      </div>
    </section>

     <!-- How it works Section-->
    <section class="bg-gray">
      <div class="container text-center text-lg-left">
        <div class="row align-items-center">
            <div class="row">
            <div class="col-lg-5 mt-5 mt-lg-0">
                <img src="https://d19m59y37dris4.cloudfront.net/appton/1-0/img/illustration-2.svg" alt="" class="divider-image img-fluid">
            </div>
            <div class="col-lg-7">
                <h2 class="divider-heading">Publications form</h2>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Text publications</span>
                    </div>
                        <textarea class="form-control" v-model="ref" aria-label="Body text"></textarea>
                    </div>
                    <br>
                    <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Year and link</span>
                    </div>
                    <input type="text" aria-label="year" v-model="year" class="form-control">
                    <input type="text" aria-label="link" v-model="link" class="form-control">
                </div>
                    <div align="center">
                        <a href="#" class="btn btn-primary" @click="uploadPublications()">Send</a>
                    </div>
                </div>    
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
            name: '',
            lastname: '',
            area: '',
            titleperson: '',
            title: '',
            text: '',
            ref: '',
            year: '',
            link: '',
            file: File,
            progressUpload: 0,
        }
    },
    methods: {
    detectFiles (fileList) {
      Array.from(Array(fileList.length).keys()).map( x => {
        this.uploadPeople(fileList[x])
      })
    },
    uploadPeople(file) {
        const storageRef = firebase.storage().ref();
        const uploadTask = storageRef.child(`people/${file.name}`)
            .put(file);
        
        const uploadRef = storageRef.child(`people/${file.name}`)
            .getDownloadURL().then(url => {
            console.log(url);

            const record = {
                name: this.name,
                lastname: this.lastname,
                area: this.area,
                titleperson: this.titleperson,
                image: url
            };

            const peopleRef = firebase.database().ref('/people');
            const newPeople = peopleRef.push();
            newPeople.set(record);

            this.progressUpload = 0;
            this.file = File;

            this.name = '';
            this.lastname = '';
            this.area = '';
            this.titleperson = '';
        });

        uploadTask.on('state_changed', (snapshot) => {
           this.progressUpload = Math.floor(snapshot.bytesTransferred / snapshot.totalBytes * 100)
        }, (error) => {
            console.log(error)
        })
    },
    uploadResearch(){
    const researchRef = firebase.database().ref('/research');

    researchRef.push({
        title: this.title,
        text:this.text
    })
        this.title = '';
        this.text = '';
    },

  uploadPublications(){
    const publicationsRef = firebase.database().ref('publications');

    publicationsRef.push({
        ref: this.ref,
        year: this.year,
        link: this.link
    })

        this.ref = '';
        this.year = '';
        this.link = '';
        }
    },
}
</script>
<style scoped>
.box-photo{
    position: relative;
    left: 20px;
}

.progress-bar {
  margin: 10px 0;
}
</style>

