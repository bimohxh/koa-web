<template lang="jade">
  div
    h1 新闻列表
    ul(v-for="item in items")
      li {{item}}
</template>

<script>
  export default {
    data() {
      return {
        items: ['tome', 'lili', 'hxh']
      }
    }
  }

</script>

