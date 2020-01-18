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
                v => /.+@.+\..+/.test(v) || 'E-mail non valide',
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

    const AUTH_REQUEST = "AUTH_REQUEST";

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
                const { email, password } = this;
                this.$store.dispatch(AUTH_REQUEST, { email, password }).then(() => {
                    this.$router.push('/')
                })
            },
        }
    }
</script>

<style scoped>

</style>