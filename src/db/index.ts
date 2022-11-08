import { Repository } from "redis-om";

// import client from "./connection.js";
import client from "../redis.client.js"
import {
  adminSchema,
  // apartmentSchema,
  // cashSchema,
  // kinSchema,
  // rentSchema,
  // tenantSchema
} from "./schema/index.js";

const Admin = new Repository(client, adminSchema);
// const Apartment = new Repository(client, apartmentSchema);
// const Cash = new Repository(client, cashSchema);
// const Kin = new Repository(client, kinSchema);
// const Rent = new Repository(client, rentSchema);
// const Tenant = new Repository(client, tenantSchema);

export { Admin,/*  Apartment, Cash, Kin, Rent, Tenant */ };
