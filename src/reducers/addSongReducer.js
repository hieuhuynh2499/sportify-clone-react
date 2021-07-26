const initalState = []

const addSongReducer = (state = initalState,action) =>{
    switch(action.type){
        case 'LIST_SONG_ADD_SUCCESS' :
            return action.payload;
        default :
            return state;
    }
    
}
export default addSongReducer;