<template>
  <div>
    <h2 class="mb-5">Data listing component: Table</h2>
    <data-listing url="5b8a9a392c0000f509280fd7" type="table" hideToolbar resKey="users" :headers="headers" >
      <template slot-scope="data">
        <tr>
          <td>{{ data.item.firstName }}</td>
          <td>{{ data.item.lastName }}</td>
          <td>{{ data.item.email }}</td>
          <td>{{ data.item.gender }}</td>
          <td>
            <v-btn icon class="mx-0" @click="">
              <v-icon color="grey">edit</v-icon>
            </v-btn>
            <v-btn icon class="mx-0" @click="">
              <v-icon color="grey">delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
    </data-listing>
  </div>
</template>

<script>
import DataList from '@/components/dataList/dataList.vue';

export default {
  data() {
    return {
      headers: [
        { text: 'First Name', value: 'firstName' },
        { text: 'Last Name', value: 'lastName' },
        { text: 'Email', value: 'email' },
        { text: 'Gender', value: 'gender' },
        { text: '', value: 'name', sortable: false }
      ]
    };
  },
  components: {
    'data-listing': DataList
  }
};
</script>

<style scoped>
</style>
