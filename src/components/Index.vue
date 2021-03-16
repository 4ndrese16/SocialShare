<template>
  <div class="index-main-container">
    <div class="index-content">
      <h1>SocialShare</h1>
      <h3>Bienvenido, empezemos a crear tu Share</h3>
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
          <div
            class="social-media-input"
            v-for="(icon, index) in currentIcons"
            :key="index"
          >
            <div class="icon" :id="icon.id" @click="openDialog">
              <v-icon large color="white"> mdi-{{ icon.icon }} </v-icon>
            </div>
            <v-text-field
              label="Ingresa el link"
              outlined
              color="#373251"
               v-model="icon.socialLink"  
            ></v-text-field>
          </div>
          <!-- <div class="social-media-input">
            <div class="icon" @click="dialog = true">
              <v-icon large color="white" > mdi-{{ currentIcon }} </v-icon>
            </div>
            <v-text-field
              label="Ingresa el link"
              outlined
              color="#373251"
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
          </div> -->
          <div class="add-more">
            <div @click="addLink">Añadir más links</div>
          </div>
        </div>
        <div class="submit" @click="submit"
          > <div>Generar Share</div></div
        >
      </form>
    </div>
    <v-dialog v-model="dialog" id="selection" width="400">
      <MediaChange
        :iconClick="open"
        v-on:close="closeDialog"
        v-on:currentIcon="linkChange"
      >
      </MediaChange>
    </v-dialog>
  </div>
</template>

<script>
import { required, minLength, } from "vuelidate/lib/validators";
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
      currentIcons: [
        {
          icon: "facebook",
          socialLink: "",
          id: 0,
        },
        {
          icon: "facebook",
          socialLink: "",
          id: 1,
        },
      ],
      image: "",
      open: "",
    };
  },

  watch: {
    image() {
      console.log(this.image)
    }
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
    // socialLink: {
    //   required,
    //   url,
    // },
  },

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.minLength &&
        errors.push("Debe tener al menos 2 caracteres");
      !this.$v.name.required && errors.push("Este campo es requerido");
      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.description.$dirty) return errors;
      !this.$v.description.minLength &&
        errors.push("Debe tener al menos 10 caractere");
      !this.$v.description.required && errors.push("Este campo es requerido");
      return errors;
    },
    socialLinkErrors() {
      // for()
      const errors = [];
      if (!this.$v.socialLink.$dirty) return errors;
      !this.$v.socialLink.url && errors.push("Debe ser un url válido");
      !this.$v.socialLink.required && errors.push("Este campo es requerido");
      return errors;
    },
    socialId() {
      return this.$store.state.socialId;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
     
      if (this.$v.$invalid) {
      } else {
        this.$store.dispatch("createSocial", {
          name: this.name,
          description: this.description,
          links: this.currentIcons,
        });
         
      }
    },

    addLink() {
      const curIconsLength = this.currentIcons.length;
      this.currentIcons.push({
        icon: "facebook",
        id: curIconsLength,
      });
      console.log(curIconsLength);
    },

    linkChange(value) {
      this.currentIcons[value.iconClick].icon = value.iconId;
    },

    openDialog(event) {
      const open = event.target.closest(".icon").id;
      this.open = open;
      this.dialog = true;
      console.log(open);
    },

    closeDialog(value) {
      this.dialog = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.index-main-container {
  display: flex;
  justify-content: center;
  background: linear-gradient(#fbc43a, #ffb600);
  padding: 90px 0;
  font-family: "Montserrat", sans-serif;

  .index-content {
    width: 60%;
    min-width: 350px;
    background-color: #fffaed;
    border-radius: 30px;
    padding: 3% 10%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1 {
      color: #373251;
      font-size: max(5.5vw, 35px);
      font-weight: 600;
      width: 100%;
    }

    h3 {
      color: #373251;
      font-weight: 600;
      font-size: max(2.5vw, 18px);
    }

    p {
      color: #373251;
      font-weight: 600;
      font-size: max(2vw, 15px);
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
          cursor: pointer;
        }
      }
    }

    .add-more{
      display: flex;
      justify-content: center;
    }

    .submit{
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }

    .add-more div,
    .submit div{
      font-family: "Montserrat", sans-serif;
      color: white;
      background: #373251;
      padding: 3% 5%;
      width: 80%;
      min-width: 100px;
      border-radius: 10px;
      font-size: max(2vw, 17px);
      cursor: pointer;
      
     
    }
  }

  .v-dialog {
    border: 2px white solid;
  }
}

@media (max-width: 660px) {
  .index-main-container {


  .index-content {


    .social-media-list {
      margin-bottom: 20px;

      .social-media-input {
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon {
        margin-bottom: 20px;
        }
      }
    }


}
  }
}

@media (max-width: 370px) {
  .index-main-container {


  .index-content {
    min-width: 300px;

    


}
  }
}
</style>