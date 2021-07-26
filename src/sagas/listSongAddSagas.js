import { takeLatest, put, call } from "redux-saga/effects";
import { listAddSongFaild, listAddSongSuccess } from "../actions/addsong";
import addSongApi from "../api/addSongApi";




function* fetchListSong() {
    try {
        let data = yield call(addSongApi.getAllSong);
        yield put(listAddSongSuccess(data.data));
    } catch (e) {
        console.log(e);
        yield put(listAddSongFaild())
    }
}

export default function* addListSong() {
    yield takeLatest('LIST_SONG_ADD_REQUEST', fetchListSong)
}