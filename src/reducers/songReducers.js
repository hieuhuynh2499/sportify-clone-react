const initalState = ["hieu da cai dat thanh cong redux"]

const songReducer = (state = initalState,action) =>{
    switch(action.type){
        case 'LIST_SONG_SUCCESS' :
            return action.payload;
        case 'ADD_SONG_SUCCESS' :
            const newSong = action.payload.data;
            const newList = [...state]
            newList.push(newSong);
            return newList 
        case 'DELETE_SONG_SUCCESS':
            let listSong = [...state]
            let index = listSong.findIndex(song => song.id === action.payload.data.id);
            if (index > -1) {
                listSong.splice(index, 1);
            }
            return listSong;
        case 'EDIT_SONG_SUCCESS' :
            const newListEdit = [...state].map(song => { 
                return song.id === action.payload.data.id ? {...song,favorite:action.payload.data.favorite}: song
            })
            return newListEdit;
        default :
            return state;
    }
    
}
export default songReducer;