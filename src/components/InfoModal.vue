<template>
  <div class="text-center">
    <v-dialog
      v-model="isShowModal"
      width="500"
      @click:outside="showModal"
    >
      <v-card> 
        <v-card-title class="headline grey lighten-2">
          Package Info
        </v-card-title>
        <v-progress-circular
          v-if="getLoading"
          :size="30"
          :width="2"
          color="purple"
          indeterminate
        ></v-progress-circular>
        <v-card-text v-else class="mt-3">
           <v-card
            v-if="getModalInfo.length"
            class="mx-auto"
            max-width="500"
            tile
          >
            <v-list dense>
              <v-subheader>Stats info</v-subheader>
              <v-list-item-group
                color="primary"
              >
                <v-list-item
                  v-for="(item, i) in getModalInfo"
                  :key="i"
                >
                  <div class="d-flex">
                    <div>{{item.text}} :</div>
                    <div>{{item.value}}</div>
                  </div>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
          <div v-else>no-data</div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="showModal"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

  import { mapGetters, mapMutations } from "vuex";

  export default {
    name: "InfoModal",

    data: () => ({
      search: "",
    }),
    methods: {
      ...mapMutations("MainPage", ["showModal"]),
    },
    computed: {
      ...mapGetters("MainPage", ["isShowModal", "getModalInfo", "getLoading"]),
    },
  }
</script>
