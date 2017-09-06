import { Utils } from './appsettings-async.common';
import { getNativeApplication } from "tns-core-modules/application";

export class AppSettingsAsync {

  private static sharedPreferences: android.content.ISharedPreferences;

  private static ensureSharedPreferences() {
    if (!AppSettingsAsync.sharedPreferences) {
      AppSettingsAsync.sharedPreferences =
        (<android.app.Application>getNativeApplication())
          .getApplicationContext()
          .getSharedPreferences("prefs.db", 0);
    }
  }

  private static verify(key: string) {
    Utils.checkKey(key);
    this.ensureSharedPreferences();
  }

  public static hasKey(key: string): boolean {
    this.verify(key);
    return this.sharedPreferences.contains(key);
  }

  // getters
  public static getBoolean(key: string, defaultValue?: boolean): boolean {
    this.verify(key);
    if (this.hasKey(key)) {
        return this.sharedPreferences.getBoolean(key, false);
    }
    return defaultValue;
  }

  public static getString(key: string, defaultValue?: string): string {
    this.verify(key);
    if (this.hasKey(key)) {
        return this.sharedPreferences.getString(key, "");
    }
    return defaultValue;
  }

  public static getNumber(key: string, defaultValue?: number): number {
    this.verify(key);
    if (this.hasKey(key)) {
        return this.sharedPreferences.getFloat(key, float(0.0));
    }
    return defaultValue;
  }

  // setters
  public static setBoolean(key: string, value: boolean): void {
    this.verify(key);
    Utils.ensureValidValue(value, "boolean");
    var editor = this.sharedPreferences.edit();
    editor.putBoolean(key, value);
    editor.apply();
  }

  public static setString(key: string, value: string): void {
    this.verify(key);
    Utils.ensureValidValue(value, "string");
    var editor = this.sharedPreferences.edit();
    editor.putString(key, value);
    editor.apply();
  }

  public static setNumber(key: string, value: number): void {
    this.verify(key);
    Utils.ensureValidValue(value, "number");
    var editor = this.sharedPreferences.edit();
    editor.putFloat(key, float(value));
    editor.apply();
  }

  public static remove(key: string): void {
    this.verify(key);
    var editor = this.sharedPreferences.edit();
    editor.remove(key);
    editor.apply();
  }

  public static flush(): void {
    this.sharedPreferences.edit().commit();
  }

  public static clear(): void {
    this.ensureSharedPreferences();
    this.sharedPreferences.edit().clear().commit();
  }
}
