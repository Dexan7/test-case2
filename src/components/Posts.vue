<template>
    <div>
      <!-- <div v-for="data in myJson" :key="data.id">{{ data }}</div> -->
      {{ myJson }}
    </div>
</template>

<script>
import myJsonFile from '@/json/data.json';

export default {
  data() {
    return {
      myJson: myJsonFile,
      arr: '',
    };
  },
};
</script>
