export declare class AppSettingsAsync {
  public static hasKey(key: string): boolean;
  public static getString(key: string): string;
  public static getBoolean(key: string): boolean;
  public static getNumber(key: string): number;
  public static setString(key: string, value: string): void;
  public static setBoolean(key: string, value: boolean): void;
  public static setNumber(key: string, value: number): void;
  public static remove(key: string): void;
  /**
   * Flushes changes to persistent storage.
   * WARN: Blocks UI thread until finished.
   */
  public static flush(): void;
  public static clear(): void;
}
