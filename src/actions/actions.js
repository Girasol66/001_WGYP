import apis from '../apis';
import JsBarcode from 'jsbarcode';
import axios from '../axios/axios';
import {parseData} from '../utils';
import * as ACTION_TYPES from './actionTypes';

const actions = {
  // 查询设备标识
  selectDeviceId({commit}) {
    commit(ACTION_TYPES.SELECT_DEVICEID_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectDeviceId)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(ACTION_TYPES.SELECT_DEVICEID_SUCCESS, data);
          } else {
            commit(ACTION_TYPES.SELECT_DEVICEID_FAILURE);
            commit(ACTION_TYPES.SELECT_GRANT_LOGIN_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_DEVICEID_FAILURE);
          commit(ACTION_TYPES.SELECT_GRANT_LOGIN_FAILURE);
          reject(err);
        });
    });
  },
  // 授权登录查询用户信息
  selectGrantLogin({commit}, data) {
    commit(ACTION_TYPES.SELECT_GRANT_LOGIN_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectGrantLogin, data)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(ACTION_TYPES.SELECT_GRANT_LOGIN_SUCCESS, data);
          } else {
            commit(ACTION_TYPES.SELECT_GRANT_LOGIN_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_GRANT_LOGIN_FAILURE);
          reject(err);
        });
    });
  },
  // 查询微信JSSDK的Token
  selectWechatToken({commit}) {
    commit(ACTION_TYPES.SELECT_WECHAT_TOKEN_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectWechatToken)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(ACTION_TYPES.SELECT_WECHAT_TOKEN_SUCCESS, data);
          } else {
            commit(ACTION_TYPES.SELECT_WECHAT_TOKEN_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_WECHAT_TOKEN_FAILURE);
          reject(err);
        });
    });
  }
}

export default actions
