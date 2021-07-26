import axiosClient from "./axiosClient";


const songApi = {
    getAllSong () {
        const url = '/list-song'
        return axiosClient.get(url)
    },
    addSongNew(song){
        const url = '/list-song'
        return axiosClient.post(url,song)
    },
    deleteSongList(idSong){
        const url = `/list-song/${idSong}`
        return axiosClient.delete(url)
    },
    editSongList(song){
        
        const url = `/list-song/${song.id}`
        return axiosClient.put(url,song)
    }
}

export default songApi;