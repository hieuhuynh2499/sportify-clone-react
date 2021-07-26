import { takeLatest, put, call } from "redux-saga/effects";
import { AddSongFaild, AddSongSuccess, DeleteSongFaild, DeleteSongSuccess, editSongFaild, editSongSuccess, listSongFaild, listSongSuccess } from "../actions/listsong";
import songApi from "../api/songApi";




function* fetchListSong() {
    try {
        let data = yield call(songApi.getAllSong);
        yield put(listSongSuccess(data.data));
    } catch (e) {
        console.log(e);
        yield put(listSongFaild())
    }
}
function* addSong(song) {
    try {
        let data = yield call(songApi.addSongNew,song.payload);
        yield put(AddSongSuccess(data));
    } catch (e) {
        console.log(e);
        yield put(AddSongFaild())
    }
}
function* deleteSong(song) {
     const idSong = Number(song.payload.id);
     
    try {
        let data = yield call(songApi.deleteSongList,idSong);
        yield put(DeleteSongSuccess(data));
    } catch (e) {
        console.log(e);
        yield put(DeleteSongFaild())
    }
}
function* editSong(song) {
    console.log(song);
   try {
       let data = yield call(songApi.editSongList,song.payload);
       yield put(editSongSuccess(data));
   } catch (e) {
       console.log(e);
       yield put(editSongFaild())
   }
}
export default function* listSong() {
    yield takeLatest('LIST_SONG_REQUEST', fetchListSong)
    yield takeLatest('ADD_SONG_REQUEST', addSong)
    yield takeLatest('DELETE_SONG_REQUEST', deleteSong)
    yield takeLatest('EDIT_SONG_REQUEST', editSong)
}