import { takeEvery, call, put } from 'redux-saga/effects'
import { CONTACT_US } from '../actions/type'
import { contactUs } from '../services/contactUs.api'
import { ActionCreators } from '../actions'

export const watchContactUs = function* () {    
  yield takeEvery(CONTACT_US, workerContactUs)
}

function* workerContactUs(action: any):any {
  try {          
    const res = yield call(contactUs, action.data);
    yield put(ActionCreators.contactUsSuccess(res))
  } catch (e){
    yield put(ActionCreators.contactUsFailure(e))
  }
}
