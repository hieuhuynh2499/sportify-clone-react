import axiosClient from "./axiosClient";


const addSongApi = {
    getAllSong () {
        const url = '/list-song-add'
        return axiosClient.get(url)
    },
}

export default addSongApi;