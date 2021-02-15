<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-text-field
          label="Search"
          hide-details="auto"
          append-icon="mdi-magnify"
          v-model="search"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="text-center mt-5">
      <v-col cols="12">
          <v-data-table
            :headers="getPackagesTable.headers"
            :items="getPackagesTable.items"
            fixed-header
            height="530px"
            :items-per-page="10"
            :search="search"
            class="elevation-1 package-table" 
            @click:row="clickRow($event.name)"
          >
          </v-data-table>
      </v-col>
    </v-row>
    <InfoModal v-if="isShowModal && !getLoading"/>

    <v-footer fixed :inset="true" padless>
    <v-card
      width="100%"
      class="white lighten-1 text-left"
    >
      <v-card-text>
          Artur Hlynskyi <em> <a href="https://github.com/klinsky" target="_blank">https://github.com/klinsky</a></em>
      </v-card-text>
    </v-card>
    </v-footer>
  </v-container>
</template>

<script>

  import { mapActions, mapGetters, mapMutations } from "vuex";

  export default {
    name: "MainPage",

    data: () => ({
      search: "",
    }),
    components: {
      InfoModal: ()=> import("./InfoModal")
    },
    created() {
      this.fetchPackages({limit:100, page: 1})
    },
    methods: {
      ...mapActions("MainPage", ["fetchPackages", "fetchPackageByName"]),
      ...mapMutations("MainPage", ["showModal", "toggleLoading"]),

      async clickRow(name) {
        this.toggleLoading();
        this.showModal()
        await this.fetchPackageByName(name)
        this.toggleLoading();
      }
    },
    computed: {
      ...mapGetters("MainPage", ["getPackagesTable", "isShowModal", "getLoading"]),
    },
  }
</script>
<style lang="scss">
  .package-table {
    tr:hover {
      cursor: pointer;
    }
  }
</style>
