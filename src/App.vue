<template>
  <v-app id="inspire">
    <snackbar></snackbar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>YOLO</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon @click="logout">mdi-logout</v-icon>
    </v-app-bar>

    <v-content>
      <Breadcrumb layout-class="pl-3 py-3" />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import Breadcrumb from './components/Breadcrumb';
  import Snackbar from './components/Snackbar';

  const AUTH_LOGOUT = "AUTH_LOGOUT";

  export default {
    components: {
      Breadcrumb,
      Snackbar
    },

    data: () => ({
      drawer: null
    }),
    created() {
    },
    methods: {
      logout: function () {
        this.$store.dispatch(AUTH_LOGOUT)
        .then(() => {
          this.$router.push('/login')
        })
      }
    }

  };
</script>