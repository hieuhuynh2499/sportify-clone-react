import { all } from "redux-saga/effects";
import addListSong from "./listSongAddSagas";
import listSong from "./listSongSagas";
export default function* rootSaga() {
    yield all([
        listSong(),
        addListSong(),
    ])
}