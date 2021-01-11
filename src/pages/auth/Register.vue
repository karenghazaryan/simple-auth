<template>
    <div id="register" class="section">
        <section>
            <div  class="form">
                <form @submit.prevent>
                    <h1>Get Started</h1>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input v-model.trim="signupForm.name" type="text" placeholder="Christopher Nolan" id="name" />
                        <span v-if="showNameError" class="error-msg">Invalid name</span>

                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input v-model.trim="signupForm.phone" type="text" placeholder="124-586-4578" id="phone" />
                        <span v-if="showPhoneError" class="error-msg">Invalid phone</span>

                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input v-model.trim="signupForm.email" type="text" placeholder="test@gmail.com" id="email" />
                        <span v-if="showEmailError" class="error-msg">Invalid email</span>

                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model.trim="signupForm.password" type="password" placeholder="min 6 characters" id="password" />
                        <span v-if="showPassError" class="error-msg">Invalid password</span>
                    </div>
                    <div class="buttons">
                        <button @click="signUp()" class="button">Sign Up</button>
                        <router-link to="/login" class="go-to">Go to login</router-link>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<script>

    import {validateEmail, validateName, validatePass, validatePhone} from "../../utils/validator";

    export default {
        data() {
            return {
                signupForm: {
                    name: '',
                    phone: '',
                    email: '',
                    password: ''
                },
                showEmailError: false,
                showPassError: false,
                showPhoneError: false,
                showNameError: false
            }
        },

        methods: {
            signUp() {
                this.showEmailError = !validateEmail(this.signupForm.email);
                this.showPassError = !validatePass(this.signupForm.password);
                this.showNameError = !validateName(this.signupForm.name);
                this.showPhoneError = !validatePhone(this.signupForm.phone);

                if(!this.showEmailError && !this.showPassError && !this.showNameError && !this.showPhoneError ) {
                    this.$store.dispatch('signup', {
                        email: this.signupForm.email,
                        password: this.signupForm.password,
                        name: this.signupForm.name,
                        phone: this.signupForm.phone
                    })
                }
            }
        }
    }
</script>
