<template>
  <div id="home" class="home">
    <div class="home__content">
        <h1 class="home__title">Welcome</h1>
        <p class="home__lead">
         Please login to your admin account in order to use it. 
        </p>
     
      <the-login />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheLogin from "@/components/TheLogin.vue";

export default {
  name: "Home",
  components: {
    TheLogin,
  },
};
</script>
<style scoped>
.home {
  margin-top: 10rem;
}

.home__content {
  margin: 0 auto;
  max-width: 1140px;

  display: flex;
  flex-direction: column;
}
.home__title {
  margin-bottom: 1rem;
  font-size: 3.5rem;
}

.home__lead {
  margin-bottom: 2rem;
  font-size: 1.2rem;
}
</style>
