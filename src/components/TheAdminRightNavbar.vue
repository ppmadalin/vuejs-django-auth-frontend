<template>
    <div id="right-navbar">
        <nav class="navbar">
            <h1 class="navbar__logo">LOGO</h1>
            <h4 class="navbar__menu-title">Menu</h4>
            <ul class="navbar__menu">
                <li class="navbar__menu-items"><router-link  :to="{name: 'Dashboard'}">Dashboard</router-link></li>
                <li class="navbar__menu-items" ><router-link :to="{name: 'Invoice'}">Invoice</router-link></li>
                <li class="navbar__menu-items" ><router-link :to="{name: 'Customer'}">Customer</router-link></li>
                <li class="navbar__menu-items" ><router-link :to="{name: 'Setting'}">Setting</router-link></li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name: "TheAdminRightNavbar",
}
</script>
<style scoped>
.navbar {

    height: 100%;
    padding: 0 2rem;

    background-color: var(--dark-color);
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;


}

.navbar__logo {
    padding: 3rem 0;
    font-size: 2rem;
    flex: 1;
}
.navbar a {
    text-decoration: none;
    color: #fff;
}
.navbar__menu-title {
    padding: 0.5rem 0;
    margin-bottom: 1rem;
    border-bottom: 0.5px dashed #f4f4f4;
}
.navbar__menu {
    list-style: none;
    text-align: left;
    flex: 2;
}
.navbar__menu-items {
    margin-bottom: 0.5rem;
}
.navbar__menu-items > a:hover {
    color: lightblue;
}
</style>
