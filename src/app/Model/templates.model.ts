import {Service} from "./service"

export class Templates {
    templateId: number;
    name: String;
    category: String;
    rating: number;
    isApproved: boolean;
    decription: string;
    serviceList: Service[];
}
