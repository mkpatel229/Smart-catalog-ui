import { Injectable } from '@angular/core';
import { Service } from '../Model/service';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  constructor() { }

  serviceList:Service[];

  getService(){
    this.serviceList = [
      {
        serviceName : "Amazon EC2",
        category : "Compute",
        providerName : "AWS",
        description : "Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers. Amazon EC2’s simple web service interface allows you to obtain and configure capacity with minimal friction. It provides you with complete control of your computing resources and lets you run on Amazon’s proven computing environment.",
        rating: 4.0
      },
      {
        serviceName : "Azure VM",
        category : "Compute",
        providerName : "Azure",
        description : "Get on-demand, highly scalable and protected virtualised infrastructure with Windows virtual machines (VMs) in Azure.",
        rating: 4.5
      },
      {
        serviceName : "Compute Engine",
        category : "Compute",
        providerName : "GCP",
        description : "Google Compute Engine is the Infrastructure as a Service component of Google Cloud Platform which is built on the global infrastructure that runs Google's search engine, Gmail, YouTube and other services. Google Compute Engine enables users to launch virtual machines on demand.",
        rating: 2.5
      },
      {
        serviceName : "Azure Cosmos DB",
        category : "Database",
        providerName : "Azure",
        description : "Azure Cosmos DB is a fully managed NoSQL database service for modern app development with guaranteed single-digit millisecond response times and 99.999-percent availability backed by SLAs, automatic and instant scalability, and open source APIs for MongoDB and Cassandra. Enjoy fast writes and reads anywhere in the world with turnkey multi-master global distribution.",
        rating: 5.0
      },
      {
        serviceName : "GCP Firestore",
        category : "Database",
        providerName : "GCP",
        description : "Cloud Firestore is a fast, fully managed, serverless, cloud-native NoSQL document database that simplifies storing, syncing, and querying data for your mobile, web, and IoT",
        rating: 4.5
      },
      {
        serviceName : "Amazon Redshift",
        category : "Database",
        providerName : "AWS",
        description : "Amazon Redshift is a data warehouse product which forms part of the larger cloud-computing platform Amazon Web Services. The name means to shift away from Oracle, red being an allusion to Oracle, whose corporate color is red and is informally referred to as Big Red.",
        rating: 3.0
      },
      {
        serviceName : "GCP Cloud SQL",
        category : "Database",
        providerName : "GCP",
        description : "Cloud SQL automatically ensures your databases are reliable, secure, and scalable so that your business continues to run without disruption. Cloud SQL automates all your backups, replication, encryption patches, and capacity increases—while ensuring greater than 99.95% availability, anywhere in the world.",
        rating: 3.5
      },
      {
        serviceName : "AWS Lambda",
        category : "Compute",
        providerName : "AWS",
        description : "AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code. It was introduced in November 2014.",
        rating: 5.0
      },
      {
        serviceName : "GCP Firestore",
        category : "Database",
        providerName : "GCP",
        description : "Cloud Firestore is a fast, fully managed, serverless, cloud-native NoSQL document database that simplifies storing, syncing, and querying data for your mobile, web, and IoT",
        rating: 4.5
      },
      {
        serviceName : "Amazon Redshift",
        category : "Database",
        providerName : "AWS",
        description : "Amazon Redshift is a data warehouse product which forms part of the larger cloud-computing platform Amazon Web Services. The name means to shift away from Oracle, red being an allusion to Oracle, whose corporate color is red and is informally referred to as Big Red.",
        rating: 3.0
      },
      {
        serviceName : "GCP Cloud SQL",
        category : "Database",
        providerName : "GCP",
        description : "Cloud SQL automatically ensures your databases are reliable, secure, and scalable so that your business continues to run without disruption. Cloud SQL automates all your backups, replication, encryption patches, and capacity increases—while ensuring greater than 99.95% availability, anywhere in the world.",
        rating: 3.5
      },
      {
        serviceName : "AWS Lambda",
        category : "Compute",
        providerName : "AWS",
        description : "AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code. It was introduced in November 2014.",
        rating: 5.0
      },
      {
        serviceName : "GCP Firestore",
        category : "Database",
        providerName : "GCP",
        description : "Cloud Firestore is a fast, fully managed, serverless, cloud-native NoSQL document database that simplifies storing, syncing, and querying data for your mobile, web, and IoT",
        rating: 4.5
      },
      {
        serviceName : "Amazon Redshift",
        category : "Database",
        providerName : "AWS",
        description : "Amazon Redshift is a data warehouse product which forms part of the larger cloud-computing platform Amazon Web Services. The name means to shift away from Oracle, red being an allusion to Oracle, whose corporate color is red and is informally referred to as Big Red.",
        rating: 3.0
      },
      {
        serviceName : "GCP Cloud SQL",
        category : "Database",
        providerName : "GCP",
        description : "Cloud SQL automatically ensures your databases are reliable, secure, and scalable so that your business continues to run without disruption. Cloud SQL automates all your backups, replication, encryption patches, and capacity increases—while ensuring greater than 99.95% availability, anywhere in the world.",
        rating: 3.5
      },
      {
        serviceName : "AWS Lambda",
        category : "Compute",
        providerName : "AWS",
        description : "AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code. It was introduced in November 2014.",
        rating: 5.0
      }
    ];

    return this.serviceList;
  }
}
