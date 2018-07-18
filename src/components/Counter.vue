<template>
    <div>
        <button class="btn btn-primary" @click="addCounter">Increment</button>
        <button class="btn btn-primary" @click="subCounter">Decrement</button>
        <br>
        <input type="text" v-model="value">

        <p>{{ value }}</p>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    value() {
      return this.$store.getters.value
    },
    // 雙向綁定store的值，使用get、set
    value: {
      get() {
        return this.$store.getters.value
      },
      set(value) {
        // 調用actions方法 > 觸發mutation內的方法來更改值
        this.$store.dispatch('updateValue', value)
      }
    }
  },
  methods: {
    ...mapMutations([
      'addCounter',
      'subCounter'
    ])
  }
}
</script>
