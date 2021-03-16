<template>
  <div class="media-change-main-container">
    <h2>Selecciona la red social que deseas agregar</h2>

    <div class="selection">
      <button
        v-for="(icon, index) in icons"
        :key="index"
        class="icon"
        :id="icon"
        @click="linkChange"
        v-on:click="closeDialog"
      >
        <v-icon large color="white"> mdi-{{ icon }} </v-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: ["facebook", "instagram", "twitter", "youtube"],
      
    };
  },

  props: [
    'iconClick'
  ],

  methods: {
    linkChange(event) {

      const iconId = event.target.closest('.icon').id

       this.$emit("currentIcon", {iconId, iconClick: this.iconClick});

      console.log(iconId);
    },

    closeDialog() {
      this.$emit("close", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.media-change-main-container {
  background: linear-gradient(#fbc43a, #ffb600);
  height: 250px;
  width: 100%;
  padding-top: 40px;

  h2 {
    color: #373251;
    text-align: center;

    font-family: "Montserrat", sans-serif;
    margin-bottom: 30px;
  }
  .selection {
    display: flex;

    justify-content: space-around;
  }
}
</style>