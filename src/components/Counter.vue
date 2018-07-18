<template>
    <div>
        <button class="btn btn-primary" @click="addCounter">Increment</button>
        <button class="btn btn-primary" @click="subCounter">Decrement</button>
        <br>
        <p>Vuex 雙向綁定v-model</p>
        <input type="text" v-model="value">
        <span>{{ value }}</span>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
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
