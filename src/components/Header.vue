<template>
    <header>
        <section class="header">
            <div class="logo-container">
                    <img src="../assets/logo.jpg">
            </div>
            <div class="logout">
                <a v-on:click="logout()">Log Out</a>
            </div>
        </section>
    </header>
</template>

<script>
    export default {
        methods: {
            logout() {
                this.$store.dispatch('logout')
            }
        }
    }
</script>
