<template>
  <div class="index-main-container">
    <div class="index-content">
      <h2>{{ socialId }}</h2>
      <h1>SocialShare</h1>
      <h3>Bienvenido, empezemos a crear tu Tree</h3>
      <p>Por favor ingresa los datos</p>
      <form action="">
        <v-text-field
          label="Nombre"
          outlined
          color="#373251"
          v-model="name"
          :error-messages="nameErrors"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
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
          v-model="description"
          :error-messages="descriptionErrors"
          required
          @input="$v.description.$touch()"
          @blur="$v.description.$touch()"
        ></v-textarea>
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
            <div>Añadir más links</div>
          </div>
        </div>
        <RouterLink :to="socialId" @click.prevent="submit">Generar Tree</RouterLink>
      </form>
    </div>
    <v-dialog v-model="dialog">
      <MediaChange />
    </v-dialog>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import MediaChange from "@/components/MediaChange.vue";

export default {
  // mixins: [validationMixin],

  components: {
    MediaChange,
  },

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
      required,
      minLength: minLength(10),
    },
  },

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.minLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.description.$dirty) return errors;
      !this.$v.description.minLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.description.required && errors.push("Name is required.");
      return errors;
    },
    socialId() {
      return this.$store.state.socialId
    }
  },

  methods: {
    submit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        
      } else {
        this.$store.dispatch('createSocial', {
        name: this.name, 
        description: this.description,
        
      })
      console.log('oki')
      }
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

    

    .add-more div, 
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
}
</style>