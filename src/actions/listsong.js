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
    console.log(song)
    return{
        type:'DELETE_SONG_REQUEST',
        payload:song
    }
}

export const DeleteSongSuccess = (listSong) =>{
    console.log(listSong)
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
    console.log(listSong)
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