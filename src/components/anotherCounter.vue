<template>
    <div>
        <p>actions</p>
        <button class="btn btn-primary" @click="addCounter(100)">Add</button>
        <button class="btn btn-primary" @click="asyncAddCounter({num: 100, dur: 1000})">AsyncAdd</button>
        <button class="btn btn-primary" @click="subCounter(100)">Sub</button>
        <button class="btn btn-primary" @click="asyncSubCounter({num: 100, dur: 1000})">AsyncSub</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'addCounter',
      'subCounter',
      'asyncAddCounter',
      'asyncSubCounter'
    ])
  }
}
</script>
