export const listAddSongRequest = () =>{
    return{
        type:'LIST_SONG_ADD_REQUEST'
    }
}

export const listAddSongSuccess = (listSong) =>{
    return{
        type:'LIST_SONG_ADD_SUCCESS',
        payload:listSong
    }
}
export const listAddSongFaild = () =>{
    return{
        type:'LIST_SONG_ADD_FAILD'
    }
}