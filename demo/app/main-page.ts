import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import {HelloWorldModel} from './main-view-model';

let context: HelloWorldModel;

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    context = page.bindingContext = new HelloWorldModel();
}

export function runDefaultTest(args: observable.EventData) {
    context.runDefaultTest();
}

export function runAsyncTest(args: observable.EventData) {
    context.runAsyncTest();
}
