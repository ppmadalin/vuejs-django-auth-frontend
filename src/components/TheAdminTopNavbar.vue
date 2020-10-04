<template>
    <div id="top-navbar">
        <nav class="navbar">
            <h1 class="navbar__workspace">Workspace</h1>
            <ul class="navbar__menu">
                <li class="navbar__items">
                    <router-link :to="{name: 'Home'}">Logout</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name: "TheAdminTopNavbar",
}
</script>
<style scoped>
.navbar {

    color: var(--dark-color);
    background-color: lightgrey;

    display: flex;
    justify-content: space-between;
    padding: 1rem;
}

.navbar a{
    text-decoration: none;
    color: var(--dark-color);
}
.navbar__menu {
    list-style: none;
}
.navbar__items > a:hover {
    color: royalblue;
}
</style>