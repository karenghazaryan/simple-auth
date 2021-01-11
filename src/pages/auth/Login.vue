<template>
    <div id="login" >
        <section class="section">
            <div  class="form">
                <form @submit.prevent>
                    <h1>Welcome</h1>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input v-model.trim="loginForm.email" type="text" placeholder="test@gmail.com" id="email" />
                        <span v-if="showEmailError" class="error-msg">Invalid email</span>
                    </div>
                    <div class="form-group">
                        <label for="password1">Password</label>
                        <input v-model.trim="loginForm.password" type="password" placeholder="******" id="password1" />
                        <span v-if="showPassError" class="error-msg">Invalid password</span>
                    </div>
                    <div class="buttons" >
                        <button @click="login()" class="button">Log In</button>
                        <router-link to="/register" class="go-to">Create an Account</router-link>
                    </div>

                </form>
            </div>
        </section>
    </div>
</template>

<script>
    import {validateEmail, validatePass} from "../../utils/validator";

    export default {
        data() {
            return {
                loginForm: {
                    email: '',
                    password: ''
                },
                showEmailError: false,
                showPassError: false
            }
        },

        methods: {
            login() {
                this.showEmailError = !validateEmail(this.loginForm.email);
                this.showPassError = !validatePass(this.loginForm.password);
                if(!this.showEmailError && !this.showPassError) {
                    this.$store.dispatch('login', {
                        email: this.loginForm.email,
                        password: this.loginForm.password
                    })
                }
            }
        }
    }
</script>
<style lang='sass'>
</style>