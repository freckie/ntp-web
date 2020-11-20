<template>
  <div id="details-container">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              크레딧 변동
            </th>
            <th class="text-left">
              날짜
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, idx) in details"
            :key="idx"
          >
            <td :style="{ color: item.color }">{{ item.credit }} ￦</td>
            <td>{{ item.datetime }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'detail-list',
  props: [
    'payment'
  ],
  data: () => {
    return {
      details: [
        {
          credit: -10000,
          color: 'red',
          datetime: '2020-11-20 21:32'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
