<template>
    <v-form
        ref="form"
        v-model="valid"
    >
        <v-text-field
            v-model="email"
            label="Email"
            :rules="[
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
              ]"
            required
        >

        </v-text-field>
        <v-text-field
            v-model="password"
            label="Password"
            :rules="[v => !!v || 'Password obligatoire']"
            required
        >

        </v-text-field>
        <v-btn
            :disabled="!valid"
            @click="login"
        >
            Valider
        </v-btn>
    </v-form>
</template>

<script>
    import axios from 'axios';
    import { BACKEND_URL } from '../../config/entrypoint';

    export default {
        name: "Login",
        data() {
            return {
                valid: true,
                email: '',
                password: '',
            }
        },
        methods: {
            login() {
                axios
                    .post(BACKEND_URL+'login', {
                        email: this.email,
                        password: this.password
                    })
                    .then(response => {
                        let token = response.data.token;
                        localStorage.setItem('token', token);
                        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                        //this.getTaches();
                        //console.log(this.$router);;
                        this.$router.push({name: 'home'});
                    }).catch(error => {
                    console.log('error');
                    console.log(error);
                    }).finally(() => {
                    this.isLoading = false;
                })
            },
            getTaches() {
                //let token = localStorage.getItem('token');
                console.log('gettaches');
                axios
                    //.get('http://bookshop.localhost/api/taches', {headers: { Authorization: `Bearer ${token}` }})
                    .get(BACKEND_URL+'taches')
                    //.get('https://guarded-shelf-22690.herokuapp.com/')
                    .then(response => {
                        console.log('get taches');
                        console.log(response);
                    }).catch(error => {
                    console.log('error');
                    console.log(error.response.data);
                }).finally(() => {
                    this.isLoading = false;
                })
            }
        }
    }
</script>

<style scoped>

</style>