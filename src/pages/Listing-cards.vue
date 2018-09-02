<template>
  <div>
    <h2 class="mb-5">Data listing component: Cards</h2>
    <data-listing url="5b8a9a392c0000f509280fd7" resKey="users">
      <template slot-scope="data">
        <v-flex xs12 sm4 md3 class="mb-4 px-3 grid-view">
          <v-card>
            <v-card-title class="py-0 pr-0">
              <v-checkbox color="primary" hide-details :value="data.item.id" v-model="selectedItems"></v-checkbox>
              <v-spacer></v-spacer>
              <v-menu bottom left transition="slide-y-transition">
                <v-btn icon slot="activator">
                  <v-icon>more_horiz</v-icon>
                </v-btn>
                <v-list>
                  <v-list-tile @click="">
                    <v-list-tile-title>{{ $t('edit') }}</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="">
                    <v-list-tile-title>{{ $t('delete') }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </v-card-title>
            <div class="text-xs-center pb-5 px-3 candidate-info">
              <v-avatar class="my-3" size="52" :style="{'background': data.item.color}">
                <span class="white--text body-1">{{ data.item.firstName.charAt(0).toUpperCase() + data.item.lastName.charAt(0).toUpperCase()  }}</span>
              </v-avatar>
              <p class="title text-snip mb-2">{{ data.item.firstName }} {{ data.item.lastName }}</p>
              <span class="d-block grey--text text--darken-1 text-snip caption">{{ data.item.gender }}</span>
              <span class="d-block grey--text text-snip caption">{{ data.item.email }}</span>
            </div>
          </v-card>
        </v-flex>
      </template>
    </data-listing>
  </div>
</template>

<script>
import DataList from '@/components/dataList/dataList.vue';

export default {
  data() {
    return {
      selectedItems: []
    };
  },
  components: {
    'data-listing': DataList
  }
};
</script>

<style scoped>
</style>
