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
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-book</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <router-link :to="{ name: 'BookList' }">Books</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-comment-quote</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <router-link :to="{ name: 'ReviewList' }">Reviews</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <Breadcrumb layout-class="pl-3 py-3" />
      <router-view></router-view>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Breadcrumb from './components/Breadcrumb';
  import Snackbar from './components/Snackbar';

  import axios from 'axios';

  export default {
    components: {
      Breadcrumb,
      Snackbar
    },

    data: () => ({
      drawer: null
    }),
    created() {
      //this.login();
      //this.getTaches();
    },
    methods: {
      login() {
        axios
                .post('http://bookshop.localhost/login', {
                  email: 'test1@mail.fr',
                  password: 'test1'
                })
                .then(response => {
                  console.log('login');
                  console.log(response);
                  //this.$emit('user-authenticated', userUri);
                  //this.email = '';
                  //this.password = '';
                }).catch(error => {
          console.log(error.response.data);
        }).finally(() => {
          this.isLoading = false;
        })
      },
      getTaches() {
        axios
                .get('http://bookshop.localhost/api/taches')
                .then(response => {
                  console.log('get taches');
                  console.log(response);
                  //this.$emit('user-authenticated', userUri);
                  //this.email = '';
                  //this.password = '';
                }).catch(error => {
          console.log(error.response.data);
        }).finally(() => {
          this.isLoading = false;
        })
      }
    }

  };
</script>