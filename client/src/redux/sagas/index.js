import { all, fork } from "redux-saga/effects"
import axios from "axios"

import authSaga from "./authSaga"
import dotenv from "dotenv"
dotenv.config()

axios.defaults.baseURL = process.env.REACT_APP_BASIC_SERVER_URL

export default function* rootSaga() {
  yield all([fork(authSaga)])
}
//여러가지 값들을 불러오기위해 저렇게 펑션을 사용한다
