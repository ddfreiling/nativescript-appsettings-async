# AppSettings Async

nativescript-appsettings-async does everything that tns-core-modules/application-settings does, but it does so without block the UI thread whenever writing a new value.

The way Nativescript by default synchronously flushes all settings to disk whenever a single value is changed, seemed very detrimental to a smooth UI experience, so I implemented this plugin to fix that. This change will primarily be felt when writing many or very large string to application-settings.

## Installation

```
tns plugin add @nota/nativescript-appsettings-async
```

## Usage 

```javascript
import { AppSettingsAsync as appSettingsAsync } from '@nota/nativescript-appsettings-async';
// Same interface as default application-settings, but Async setters
appSettingsAsync.setString('my_key', 'my_value');
// Explicitly flush settings to persistant storage.
appSettingsAsync.flush();
```

## TODO
- Load app-settings on a background thread

## License

Apache License Version 2.0, January 2004
