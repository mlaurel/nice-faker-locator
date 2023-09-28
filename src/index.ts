import * as faker from "faker";
import { MockCSV } from "./MockCSV";

const mockCSV = new MockCSV(
  {
    // "First Name": "{{name.firstName}}",
    // "Last Name:": "{{name.lastName}}"
    Company: "{{company.companyName}}",
    Address: "{{address.streetAddress}}",
    City: "{{address.city}}",
    State: "{{address.state}}",
    Zip: "{{address.zipCode}}",
    Phone: "{{phone.phoneNumber}}",
    Website: "{{internet.url}}",
    Email: "{{internet.email}}"
  },
  100
);

console.log(mockCSV.toString());
// console.log(mockCSV.rows[2]["First Name"]);
