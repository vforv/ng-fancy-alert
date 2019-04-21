import { Type } from '@angular/core';

export interface IAlertMessage {
    title: string; message: string; redirect?: string; btnText: string
}
export type IAlertMessageType = 'success' | 'info' | 'warning' | 'error';

export class Alert {
    constructor(public component: Type<any>, public data: any) { }
}