<template>
  <div class="user-tree-main-container">
    <div class="user-tree-content">
      <h1>SocialShare</h1>
      <h2>{{ social.name }}</h2>
 
      <p>
        {{ social.description }}
      </p>
      <div class="links">
        <a  class="icon" v-for="(link, index) in social.links" :key="index" :href="link.socialLink" target="_blank">
          <v-icon large color="white"> mdi-{{ link.icon }} </v-icon>
        </a>

        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('getSocial')
    this.$router.params
    
  },

  computed: {
    social() {
      return this.$store.state.social
    }
  }
};
</script>

<style lang="scss" scoped>
.user-tree-main-container {
  display: flex;
  justify-content: center;
  background: linear-gradient(#fbc43a, #ffb600);
  padding-top: 130px;
  font-family: "Montserrat", sans-serif;
  height: 100vh;

  .user-tree-content {
    width: 50%;
    min-width: 290px;
    background-color: #fffaed;
    border-radius: 30px;
    padding: 3% 0;
    text-align: center;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1 {
      color: #373251;
      font-size: max(5.5vw, 25px);
      font-weight: 600;
      width: 100%;
    }

    h2 {
      color: #373251;
      font-weight: 600;
      font-size: max(2.5vw, 18px);
      
    }

    p {
      color: #373251;
      font-size: max(2vw, 15px);
      margin-bottom: 30px;
    }

    .links {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      

      .icon {
        background-color: #373251;
        height: 55px;
        width: 55px;
        padding-top: 10px;
        border-radius: 10px;
        margin-right: 10px;
        text-decoration: none;
        margin: 5px;
      }
    }
  }
}




</style>