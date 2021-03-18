<template>
  <div class="songComponent card">
    <router-link :to="{name:'Song', params:{songId:songProp.id}}">
      HELLO this will be a song
      <!-- {{ songProp }} -->
      <h3>{{ songProp.title }}</h3>
      <h3>{{ songProp.artist }}</h3>
      <p>{{ thisIsPropName }}</p>
      <form @submit.prevent="editSong">
        <input type="text" v-model="state.newSongData.title">
      </form>
    </router-link>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { songService } from '../services/SongService'
export default {
  name: 'SongComponent',
  props: {
    songProp: { type: Object, required: true },
    thisIsPropName: { type: String, required: true }
  },
  setup(props) {
    const state = reactive({
      newSongData: {
      }
    })
    return {
      state,
      editSong() {
        console.log(state.newSongData.title)
        state.newSongData.id = props.songProp.id
        songService.editSong(state.newSongData)
      }
    }
  }
}
</script>

<style scoped>

</style>
