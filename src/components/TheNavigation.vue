<template>
    <div id="navbar" class="navbar">
        <nav class="navbar__content">
            <router-link :to="{name: 'Home'}"><h1>LOGO</h1></router-link>
            <ul class="navbar__menu">
                <li class="navbar__menu-items"><router-link :to="{name: 'Home'}">Home</router-link></li>
                <li class="navbar__menu-items"><router-link :to="{name: 'Login'}">Login</router-link></li>
                <li class="navbar__menu-items"><router-link :to="{name: 'Register'}">Register</router-link></li>
                <li class="navbar__menu-items"><router-link :to="{name: 'User'}">User</router-link></li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name: "TheNavigation",
}
</script>
<style scoped>
.navbar__content {

    display: flex;
    justify-content: space-between;

    padding: 1rem;
    
    color: #ffffff;
    background-color: #333;
}

.navbar__content a {
    text-decoration: none;
    color: #fff;
}

.navbar__menu {
    list-style: none;

    display: flex;
    font-size: 1em;
}

.navbar__menu-items {
    margin-left: 1rem;
}
.navbar__menu-items a:hover {
    color: lightblue;
}
</style>