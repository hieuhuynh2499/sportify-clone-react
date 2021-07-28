const initalState = {
    listSong:[],
    songChose:{}
}

const songReducer = (state = initalState,action) =>{
    switch(action.type){
        case 'LIST_SONG_SUCCESS' : 
            return {
                ...state,
                listSong:action.payload
            }
        case 'ADD_SONG_SUCCESS' :
            const newSong = action.payload.data;
            const newList = [...state.listSong]
            newList.push(newSong);
            return {
                ...state,
                listSong:newList
            } 
        case 'DELETE_SONG_SUCCESS':
            let listSong = [...state.listSong]
            let index = listSong.findIndex(song => song.id === action.payload.id);
            if (index > -1) {
                listSong.splice(index, 1);
            }
            return {
                ...state,
                listSong
            };
        case 'EDIT_SONG_SUCCESS' :
            const newListEdit = [...state.listSong].map(song => { 
              
                return song.id === action.payload.id ? {...song,favorite:action.payload.favorite}: song
            })
            return {
                ...state,
                listSong:newListEdit
            };
        case 'SONG_CHOSE_SUCCESS' :
          
            return {
                ...state,
                songChose:action.payload.payload
            };
        default :
            return state;
    }
    
}
export default songReducer;