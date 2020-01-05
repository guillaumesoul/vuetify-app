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
                    //.post('http://bookshop.localhost/login', {
                    .post('https://guarded-shelf-22690.herokuapp.com/login', {
                        email: this.email,
                        password: this.password
                    })
                    .then(response => {
                        console.log('login');
                        let token = response.data.token;
                        localStorage.setItem('token', token);
                        console.log(response);
                        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                        this.getTaches();
                    }).catch(error => {
                    console.log('error');
                    console.log(error);
                    }).finally(() => {
                    this.isLoading = false;
                })
            },
            getTaches() {
                //let token = localStorage.getItem('token');
                axios
                    //.get('http://bookshop.localhost/api/taches', {headers: { Authorization: `Bearer ${token}` }})
                    .get('http://bookshop.localhost/api/taches')
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