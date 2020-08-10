import { Templates } from './templates.model';

export class Service {
    id:number;
    serviceName:String;
    providerName:String;
    category:String;
    description:string;
    rating:number;
    specifications:any;
    tags:[];
    isApproved:boolean;
    templates:Templates[];
}
