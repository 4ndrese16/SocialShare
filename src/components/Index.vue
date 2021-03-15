<template>
  <div class="index-main-container">
    <div class="index-content">
      <h1>SocialShare</h1>
      <h3>Bienvenido, empezemos a crear tu Tree</h3>
      <p>Por favor ingresa los datos</p>
      <form action="">
        <v-text-field
          label="Nombre"
          outlined
          color="#373251"
          v-model.trim="$v.name.$model"
        ></v-text-field>
        <div class="error" v-if="!$v.name.required">Field is required</div>
        <div class="error" v-if="!$v.name.minLength">
          Name must have at least {{ $v.name.$params.minLength.min }} letters.
        </div>
        <h3>Agrega una foto de perfil</h3>
        <v-badge
          avatar
          color="#373251"
          icon="mdi-plus"
          dark
          bottom
          overlap
          offset-x="30"
          offset-y="30"
        >
          <v-avatar size="150">
            <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
          </v-avatar>
        </v-badge>
        <v-textarea
          outlined
          label="Ingresa una descripción"
          color="#373251"
          v-model.trim="$v.description.$model"
        ></v-textarea>
        <div class="error" v-if="!$v.description.minLength">
          Name must have at least {{ $v.description.$params.minLength.min }} letters.
        </div>
        <div class="social-media-list">
          <div class="social-media-input">
            <div class="icon" @click="dialog = true">
              <v-icon large color="white"> mdi-facebook </v-icon>
            </div>
            <v-text-field
              label="Ingresa el link"
              outlined
              color="#373251"
              class="text-input-field"
            ></v-text-field>
          </div>
          <div class="social-media-input">
            <div class="icon">
              <v-icon large color="white"> mdi-instagram </v-icon>
            </div>
            <v-text-field
              label="Ingresa el link"
              outlined
              color="#373251"
            ></v-text-field>
          </div>
          <div class="add-more">
            <button>Añadir más links</button>
          </div>
        </div>
        <button type="submit">Generar Tree</button>
      </form>
    </div>
    <v-dialog v-model="dialog" width="200">
      <div class="selection">
        <button class="icon">
          <v-icon large color="white"> mdi-facebook </v-icon>
        </button>
        <button class="icon">
          <v-icon large color="white"> mdi-instagram </v-icon>
        </button>
        <button class="icon">
          <v-icon large color="white"> mdi-twitter </v-icon>
        </button>
        <button class="icon">
          <v-icon large color="white"> mdi-youtube </v-icon>
        </button>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      dialog: false,
      name: "",
      description: "",
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(2),
    },
    description: {
      minLength: minLength(10),
    },
  },
};
</script>

<style lang="scss" scoped>
.index-main-container {
  display: flex;
  justify-content: center;
  background: linear-gradient(#fbc43a, #ffb600);
  padding: 5% 0;
  font-family: "Montserrat", sans-serif;

  .index-content {
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

    h3 {
      color: #373251;
      font-weight: 600;
    }

    p {
      color: #373251;
      font-weight: 600;
    }

    .v-badge {
      margin-bottom: 30px;
    }

    .social-media-list {
      margin-bottom: 20px;

      .social-media-input {
        display: flex;

        .icon {
          background-color: #373251;
          height: 55px;
          width: 55px;
          padding-top: 10px;
          border-radius: 10px;
          margin-right: 10px;
        }
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
    }
  }

  .v-dialog {
    .selection {
      display: flex;
      background-color: #ffb600;
      button {
        margin-right: 10px;
      }
    }
  }
}
</style>