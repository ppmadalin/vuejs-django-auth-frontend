<template>
    <div id="login" class="login">
        <form class="login__form" @submit.prevent="login">
            <div class="login__form-group">
                <label for="username">Username</label>
                <input v-model="username" type="text" name="username" id="username">
            </div>
            <div class="login__form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" name="password" id="password">
            </div>
            <input type="submit" value="Login">
        </form>
    </div>
</template>
<script>

import store from "@/store.js";

export default {
    name: "TheLogin",
    data () {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        login: function(){
            
            // Store the user
            store.user = this.username

            // Redirect the user
            const redirectPath = this.$route.query.redirect || '/admin';
            this.$router.push(redirectPath);
        }
    }
}
</script>
<style scoped>
.login {
    display: flex;
}
.login__form {

    min-width: 400px;
    display: flex;
    flex-direction: column;

    border: 0.5px solid lightblue;
    border-radius: 6px;

    padding: 1.5rem;
}

.login__form > input {
    padding: 0.75rem;
    font-size: 1em;

    background-color: #fff;
    border: 0.5px solid lightblue;
    border-radius: 5px;
}

.login__form > input:hover {
    background-color: lightblue;
}

.login__form-group {
    display: flex;
    flex-direction: column;
}
.login__form-group label {
    margin-bottom: 1rem;
}
.login__form-group input {
    padding: 0.5rem;
    font-size: 1em;
    margin-bottom: 1rem;
} 
</style>