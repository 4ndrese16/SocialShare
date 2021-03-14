<template>
  <div class="about">
    <UserTree/>
  </div>
</template>

<script>
// @ is an alias to /src
import UserTree from '@/components/UserTree.vue'

export default {
  name: 'Home',
  components: {
    UserTree
  }
}
</script>
