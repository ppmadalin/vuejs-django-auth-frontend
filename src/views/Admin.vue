<template>
    <div id="admin" class="admin">
        <the-admin-top-navbar />
        <the-admin-right-navbar />
        <div id="content">
            <router-view :key="$route.path"/>
        </div>
    </div>
</template>
<script>

import TheAdminTopNavbar from '@/components/TheAdminTopNavbar.vue';
import TheAdminRightNavbar from '@/components/TheAdminRightNavbar.vue';

export default {

    name: "Admin",
    components: {
        TheAdminTopNavbar,
        TheAdminRightNavbar,
    }
}
</script>
<style scoped>
.admin {
    height: 100vh;
    
    display: grid;
    grid-template-columns: 1fr 8fr;
    grid-template-rows: 1fr 50fr;
}
#top-navbar {
    grid-column: 2 / 4;
    grid-row: 1 / 2;
}
#right-navbar {
    grid-column: 1 / 1;
    grid-row: 1 / 4;
}
#content {
    grid-column: 2 / 4;
     grid-row: 2 / 4;
}
</style>