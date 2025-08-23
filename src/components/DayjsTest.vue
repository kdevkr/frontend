<script setup>
import { ref } from 'vue'
import dayjs from "dayjs";

const date = ref(dayjs())
date.value = dayjs('20250823')

console.log('locale:', dayjs.locale())
console.log('tz: ', dayjs.tz().format())
console.log('fromNow: ', dayjs().fromNow())
</script>

<template>
{{ date.format() }}
</template>

<style scoped></style>
