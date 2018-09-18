<template>
<!-- Hero Section-->
  <section class="hero">
    <div class="container mb-5">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h1 class="hero-heading mb-0">New Post</h1>
          <div class="row">
            <div class="col-lg-10">
              <br />
              <!-- form new post -->
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Title</span>
                </div>
                    <input type="text" class="form-control" placeholder="title the event" v-model="title" aria-label="title the event" aria-describedby="basic-addon1">
                </div>
                <br />
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Body</span>
                    </div>
                        <textarea class="form-control" aria-label="body" v-model="body"></textarea>
                </div>
                <br />
                <div class="progress-bar" :style="{ width: progressUpload + '%'}">{{ progressUpload }}</div>
                <br />
                <div class="input-group">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" accept="image/*"  @change="detectFiles($event.target.files)">
                        <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                    </div>
                </div>
                <br />
                <div class="input-group" align="center">
                        <button class="btn btn-outline-secondary" type="button" @click="uploadPost()">Submit</button>
                </div>
            </div>
          </div>

        </div>
        <div class="col-lg-6"><img src="../assets/img/illustration-hero.svg" alt="..." class="hero-image img-fluid d-none d-lg-block"></div>
      </div>
    </div>
  </section>
</template>
<script>
import firebase from 'firebase'
export default {
    data(){
        return{
            title: '',
            body: '',
            file: File,
            progressUpload: 0
        }
    },
    methods: {
    detectFiles (fileList) {
      Array.from(Array(fileList.length).keys()).map( x => {
        this.uploadPost(fileList[x])
      })
    },
    uploadPost(file) {
        const storageRef = firebase.storage().ref();
        const uploadTask = storageRef.child(`new/${file.name}`).put(file);
        
        const uploadRef = storageRef.child(`new/${file.name}`)
            .getDownloadURL().then(url => {
            console.log(url);

            const record = {
                title: this.title,
                body: this.body,
                picture: url
            };

            const postRef = firebase.database().ref('/new');
            const newPost = postRef.push();
            newPost.set(record);
        }).then(result => {
            console.log('success');
            this.progressUpload = 0;

            this.title = '';
            this.body = '';
        });

        uploadTask.on('state_changed', (snapshot) => {
           this.progressUpload = Math.floor(snapshot.bytesTransferred / snapshot.totalBytes * 100)
        }, (error) => {
            console.log(error)
        })
    }
  }   
}
</script>
<style>

</style>

