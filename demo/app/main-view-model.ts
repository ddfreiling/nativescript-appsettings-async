import { Observable } from 'tns-core-modules/data/observable';
import { AppsettingsAsync } from 'nativescript-appsettings-async';

export class HelloWorldModel extends Observable {
  public message: string;
  private appsettingsAsync: AppsettingsAsync;

  constructor() {
    super();

    this.appsettingsAsync = new AppsettingsAsync();
    this.message = this.appsettingsAsync.message;
  }
}
