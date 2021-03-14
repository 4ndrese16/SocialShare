<template>
  <div class="index-main-container">
    <h1>Bienvenido, empezemos a crear tu Tree</h1>
    <p>Por favor ingresa los datos</p>
    <form action="">
      <v-text-field label="Nombre" outlined></v-text-field>
      <v-badge
        bordered
        bottom
        color="deep-purple accent-4"
        overlap
        offset-x="30"
        offset-y="30"
        icon="mdi-plus"
      >
        <v-avatar size="150">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
      </v-badge>
      <div class="social-media-list">
        <div class="facebook">
          <div class="icon">
            <v-icon large color="blue darken-1"> mdi-facebook </v-icon>
          </div>
          <v-text-field label="Link" outlined></v-text-field>
        </div>
        <div class="instagram">
          <div class="icon">
            <v-icon large color="pink darken-1"> mdi-instagram </v-icon>
          </div>
          <v-text-field label="Link" outlined></v-text-field>
        </div>
        <div class="add-more">
            <button>Agregar más</button>
        </div>
      </div>
      <button type="submit">Generar Tree</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>