<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo">
    <h1 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
      <span class="mx-2 text-white">Vue 3 Starter</span>
    </h1>
    <!-- {{ state.songs }} -->
    <SongComponent v-for="song in state.songs" :key="song.id" :song-prop="song" :this-is-prop-name="'This is prop value'" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { songService } from '../services/SongService'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      songs: computed(() => AppState.songs)
    })
    onMounted(() => songService.getSongs())
    return { state }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
