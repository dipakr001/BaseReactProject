/* eslint-disable no-console */
import { httpGet, httpPost } from 'utils/http';
import { getInstance, getSignup, setInstance, setSignup } from './config.slice';

const getInstanceListeners = {
  actionCreator: getInstance,
  effect: async (action, listenerApi) => {
    // Cancel other running instances
    listenerApi.cancelActiveListeners();

    try {
      const configState = listenerApi.getState().config;

      const instanceResponse = await httpGet(
        configState,
        configState.apiUrls.getInstance,
      );

      listenerApi.dispatch(
        setInstance(instanceResponse.data.result.companyType),
      );
    } catch (e) {
      listenerApi.dispatch(setInstance({ statusCode: 500, message: e }));
    }
  },
};

const getSignupListeners = {
  actionCreator: getSignup,
  effect: async (action, listenerApi) => {
    // Cancel other running instances
    listenerApi.cancelActiveListeners();

    try {
      const configState = listenerApi.getState().config;
      const data = action.payload;

      const signupResponse = await httpPost(
        configState,
        configState.apiUrls.signUp,
        data,
      );

      console.log(signupResponse);
      listenerApi.dispatch(
        setSignup({ status: 'redirect', redirect: '/sign-up-success' }),
      );
    } catch (e) {
      console.log(e);
    }
  },
};

export const configListeners = [getInstanceListeners, getSignupListeners];
