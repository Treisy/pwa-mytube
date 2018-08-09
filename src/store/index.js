import {init} from '@rematch/core';
import createPersistPlugin from '@rematch/persist';

import video from "../models/video";

const setupStore = () => {
  const persistPlugin = createPersistPlugin({});

  const store = init({
    plugins: [
      persistPlugin
    ],
    models: {
      video
    }
  });

  return { store }
}

export default setupStore