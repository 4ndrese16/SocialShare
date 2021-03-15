<template>
  <div class="user-tree-main-container">
    <div class="user-tree-content">
      <h1>SocialShare</h1>
      <h2>Usuario</h2>
      <v-avatar size="150">
        <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
      </v-avatar>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
        commodi? Magnam natus blanditiis cum nostrum quos molestias aliquid
        nihil? Dicta nobis eos fuga sed esse vitae soluta incidunt modi ipsum.
      </p>
      <div class="links">
        <div class="icon">
          <v-icon large color="white"> mdi-facebook </v-icon>
        </div>

        <div class="icon">
          <v-icon large color="white"> mdi-instagram </v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('getSocial')
    this.$router.params.id
    console.log(this.$router.params.id)
  }
};
</script>

<style lang="scss" scoped>
.user-tree-main-container {
  display: flex;
  justify-content: center;
  background: linear-gradient(#fbc43a, #ffb600);
  padding: 5% 0;
  font-family: "Montserrat", sans-serif;

  .user-tree-content {
    width: 800px;
    background-color: #fffaed;
    border-radius: 30px;
    padding: 3% 15%;
    text-align: center;

    h1 {
      color: #373251;
      font-size: 60px;
      font-weight: 600;
    }

    h2 {
      color: #373251;
      font-weight: 600;
      
    }

    p {
      color: #373251;
     
      margin-bottom: 30px;
    }

    .v-avatar {
      margin: 30px 0;
    }

    .links {
      display: flex;
      justify-content: center;

      .icon {
        background-color: #373251;
        height: 55px;
        width: 55px;
        padding-top: 10px;
        border-radius: 10px;
        margin-right: 10px;
      }
    }

    button {
      font-family: "Montserrat", sans-serif;
      color: white;
      background: #373251;
      padding: 10px 30px;
      width: 300px;
      border-radius: 10px;
      font-size: 25px;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>