<template>
  <div class="SongPage">
    This is a songpage
    {{ state.song }}
    <h3>{{ state.song.title }}</h3>
    <img :src="state.song.albumArt" alt="">
    <h3>{{ state.song.artist }}</h3>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from 'vue'
import { songService } from '../services/SongService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
export default {
  name: 'SongPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      song: computed(() => AppState.song)
    })
    onMounted(() => {
      songService.getSong(route.params.songId)
    })
    return { state }
  }
}
</script>

<style scoped>

</style>
