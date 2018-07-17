<template>
    <div>
        <button class="btn btn-primary" @click="addCounter">Increment</button>
        <button class="btn btn-primary" @click="subCounter">Decrement</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations([
      'addCounter',
      'subCounter'
    ])
  }
}
</script>
