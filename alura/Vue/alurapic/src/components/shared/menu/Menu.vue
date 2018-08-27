<template>
  <nav>
    <ul>
        <li v-for="rota in rotas">
          <router-link :to="rota.path ? rota.path : '/'">
            {{ rota.name }}
          </router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    rotas: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>


