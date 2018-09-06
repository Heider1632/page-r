<template>
  <main>
      <section>
        <legend>Acceder</legend>
        <label>Email</label>
        <input type="text" v-model="email">
        <label>Password</label>
        <input type="password" v-model="password">

        <button @click="handleLogin">Ir</button>
      </section>
  </main>
</template>
<style>

</style>
<script>
import firebase from 'firebase';
export default {
    name: 'login',
    data: function(){
        return {
            email: '',
            password: '',
        }
    },
    methods: {
    handleLogin: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`You are logged in as ${user.email}`);
            this.$router.go({ path: this.$router.path });
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
        }
    }
};
</script>

