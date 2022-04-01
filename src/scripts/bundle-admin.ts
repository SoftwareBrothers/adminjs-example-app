/* eslint-disable max-len */
/* eslint-disable import/first */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: `${__dirname}/../../.env` });

import { bundle } from '@adminjs/bundler';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as components from '../admin/components.bundler';

(async () => {
  const files = await bundle({
    // Uncomment `designSystemDir` and `adminJsAssetsDir` if you are running
    // the command using `adminjs-dev` workspace
    // designSystemDir: '../adminjs-design-system',
    // adminJsAssetsDir: '../adminjs/lib/frontend/assets/scripts',
    customComponentsInitializationFilePath: 'src/admin/components.bundler.ts',
    destinationDir: 'public',
    versioning: {
      manifestPath: 'src/assets-manifest.json',
    },
  });

  // eslint-disable-next-line no-console
  console.log(files);
})();
