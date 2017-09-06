import "./bundle-config";
import * as application from 'tns-core-modules/application';
import { AppSettingsAsync as appSettingsAsync } from '@nota/nativescript-appsettings-async';
// application.on(application.suspendEvent, () => {
//   console.log(`flush (suspend)`);
//   appSettingsAsync.flush();
// });
// application.on(application.exitEvent, () => {
//   console.log(`flush (exit)`);
//   appSettingsAsync.flush();
// });
application.start({ moduleName: "main-page" });