<template>
  <v-app>
    

    <v-main>
      <router-view>
       <HelloWorld/> 
      </router-view>
      
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600&display=swap');


</style>
