export const listSongRequest = () =>{
    return{
        type:'LIST_SONG_REQUEST'
    }
}

export const listSongSuccess = (listSong) =>{
    return{
        type:'LIST_SONG_SUCCESS',
        payload:listSong
    }
}
export const listSongFaild = () =>{
    return{
        type:'LIST_SONG_FAILD'
    }
}





export const AddSongRequest = (song) =>{
    return{
        type:'ADD_SONG_REQUEST',
        payload:song
    }
}

export const AddSongSuccess = (listSong) =>{
    return{
        type:'ADD_SONG_SUCCESS',
        payload:listSong
    }
}
export const AddSongFaild = () =>{
    return{
        type:'ADD_SONG_FAILD'
    }
}


export const DeleteSongRequest = (song) =>{
    return{
        type:'DELETE_SONG_REQUEST',
        payload:song
    }
}

export const DeleteSongSuccess = (listSong) =>{
    return{
        type:'DELETE_SONG_SUCCESS',
        payload:listSong
    }
}
export const DeleteSongFaild = () =>{
    return{
        type:'DELETE_SONG_FAILD'
    }
}

export const editSongRequest = (song) =>{
    return{
        type:'EDIT_SONG_REQUEST',
        payload:song
    }
}

export const editSongSuccess = (listSong) =>{
    return{
        type:'EDIT_SONG_SUCCESS',
        payload:listSong
    }
}
export const editSongFaild = () =>{
    return{
        type:'EDIT_SONG_FAILD'
    }
}

export const SongChoseRequest = (song) =>{
    return{
        type:'SONG_CHOSE_REQUEST',
        payload:song
    }
}

export const SongChoseSuccess = (listSong) =>{
    return{
        type:'SONG_CHOSE_SUCCESS',
        payload:listSong
    }
}
export const SongChoseFaild = () =>{
    return{
        type:'SONG_CHOSE_FAILD'
    }
}