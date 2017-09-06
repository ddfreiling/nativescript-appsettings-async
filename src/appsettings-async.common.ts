import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';

export class Utils {

  public static checkKey(key: string): void {
    if (typeof key !== 'string') {
        throw new Error(`key: ${key} must be a string`);
    }
  }

  public static ensureValidValue(value: any, valueType: string): void {
    if (typeof value !== valueType) {
        throw new Error(`value: ${value} must be a ${valueType}`);
    }
  }
}