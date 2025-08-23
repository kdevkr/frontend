<script setup>
import {computed, ref} from 'vue'
import dayjs from "dayjs";

const date = ref(dayjs().format('YYYY-MM-DD'))
const date_ = computed(() => dayjs(date.value))
</script>

<template>
  <div><q-date v-model="date" mask="YYYY-MM-DD" no-unset /></div>
  <div class="q-pa-lg text-lg">
    <p>Date: {{ date }}</p>
    <ol>
      <li>format(): {{date_.format()}}</li>
      <li>toISOString(): {{date_.toISOString()}}</li>
      <li>valueOf(): {{date_.valueOf()}}</li>
      <li>from(): {{date_.from()}}</li>
    </ol>
  </div>

</template>

<style scoped></style>
