import { AppState } from '../AppState'
import { api } from './AxiosService'

class SongService {
  async getSongs() {
    console.log('getting songss')
    const res = await api.get('/api/trevor/songs')
    console.log(res)
    AppState.songs = res.data
  }

  async getSong(id) {
    console.log('getting song')
    console.log(id)
    const res = await api.get('/api/trevor/songs/' + id)
    console.log(res)
    AppState.song = res.data
  }

  async editSong(songData) {
    console.log(songData)
    const res = await api.put('/api/trevor/songs/' + songData.id, songData)
    console.log(res)
    this.getSongs()
  }
}
export const songService = new SongService()
