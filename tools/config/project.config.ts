import { join } from 'path';
import { SeedAdvancedConfig } from './seed-advanced.config';
// import { ExtendPackages } from './seed.config.interfaces';

import { appTitle,
         appDescription }   from './mutua.instance-project.config';
import { DataManipulation } from './mutua.available.modules.and.components.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedAdvancedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  APP_DESCRIPTION = appDescription;

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';
    this.APP_TITLE = appTitle;

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      ...DataManipulation.getActivatedModulesAndComponentsHTMLnpmInjections(),
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      ...DataManipulation.getActivatedModulesAndComponentsHTMLLocalInjections(),
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    this.addPackagesBundles(DataManipulation.getActivatedModulesAndComponentsHTMLnpmDependencies());

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    // Add packages (e.g. ng2-translate)
    // ng2-translate is already added with the advanced seed - here for example only
    // let additionalPackages: ExtendPackages[] = [{
    //   name: 'ng2-translate',
    //   // Path to the package's bundle
    //   path: 'node_modules/ng2-translate/bundles/ng2-translate.umd.js'
    // }];
    //
    // this.addPackagesBundles(additionalPackages);

    this.PROXY_MIDDLEWARE = [
      //require('http-proxy-middleware')('/eci',      { ws: false, target: 'http://apps.mprj.mp.br', changeOrigin: true }),
      //require('http-proxy-middleware')('/gate/api', { ws: false, target: 'http://localhost:1234',  changeOrigin: true }),
      require('http-proxy-middleware')('/gate/api', { ws: false, target: 'http://apps.mprj.mp.br',  changeOrigin: true }),
      //require('http-proxy-middleware')('/gate/api', { ws: false, target: 'http://localhost:8091',  changeOrigin: true }),
    ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
