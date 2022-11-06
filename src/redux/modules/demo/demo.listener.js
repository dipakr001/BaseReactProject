import { getDemo } from './demo.slice';

const getDemoListeners = {
  actionCreator: getDemo,
  effect: async (action, listenerApi) => {
    // Cancel other running instances
    listenerApi.cancelActiveListeners();
  },
};

export const demoListeners = [getDemoListeners];
