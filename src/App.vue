<template>
  <v-app>
    <v-main>
      <MainPage/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    MainPage: () => import('./components/MainPage'),
  },
};
</script>
