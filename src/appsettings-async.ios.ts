import { Utils } from './appsettings-async.common';
import * as utils from "tns-core-modules/utils/utils";

export class AppSettingsAsync {
  
  private static userDefaults: NSUserDefaults = utils.ios.getter(
    NSUserDefaults,
    NSUserDefaults.standardUserDefaults
  );
  
  public static hasKey(key: string): boolean {
    Utils.checkKey(key);
    return this.userDefaults.objectForKey(key) !== null;
  }
  
  // utils.ios.getters
  public static getBoolean(key: string, defaultValue?: boolean): boolean {
    Utils.checkKey(key);
    if (this.hasKey(key)) {
        return this.userDefaults.boolForKey(key);
    }
    return defaultValue;
  }
  
  public static getString(key: string, defaultValue?: string): string {
    Utils.checkKey(key);
    if (this.hasKey(key)) {
        return this.userDefaults.stringForKey(key);
    }
    return defaultValue;
  }
  
  public static getNumber(key: string, defaultValue?: number): number {
    Utils.checkKey(key);
    if (this.hasKey(key)) {
        return this.userDefaults.doubleForKey(key);
    }
    return defaultValue;
  }
  
  // setters
  public static setBoolean(key: string, value: boolean): void {
    Utils.checkKey(key);
    Utils.ensureValidValue(value, "boolean");
    this.userDefaults.setBoolForKey(value, key);
  }
  
  public static setString(key: string, value: string): void {
    Utils.checkKey(key);
    Utils.ensureValidValue(value, "string");
    this.userDefaults.setObjectForKey(value, key);
  }
  
  public static setNumber(key: string, value: number): void {
    Utils.checkKey(key);
    Utils.ensureValidValue(value, "number");
    this.userDefaults.setDoubleForKey(value, key);
  }
  
  public static remove(key: string): void {
    Utils.checkKey(key);
    this.userDefaults.removeObjectForKey(key);
  }

  public static flush(): void {
    this.userDefaults.synchronize();
  }
  
  public static clear(): void {
    this.userDefaults.removePersistentDomainForName(utils.ios.getter(NSBundle, NSBundle.mainBundle).bundleIdentifier);
  }
}
