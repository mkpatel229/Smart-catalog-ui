import {Service} from "./service"

export class Templates {
    templateId: number;
    name: String;
    category: String;
    rating: number;
    isApproved: boolean;
    description: string;
    serviceList: Service[];
    tags:[];
}
