import { Entity, Schema } from "redis-om";

class TenantEntity extends Entity {}

const TenantSchemaStructure = {
  fullName: {
    type: "string",
    required: true
  },
  username: {
    type: "string",
    required: true,
    unique: true
  },
  password: {
    type: "string",
    required: true
  },
  email: {
    type: "string",
    required: true,
    unique: true
  },
  phone: {
    type: "string",
    required: true
  },
  // date of birth
  dob: {
    type: "string",
    required: true
  },
  prevResidenceAddress: {
    type: "string",
    required: true
  }
};

export default new Schema(TenantEntity, TenantSchemaStructure, {
  dataStructure: "JSON"
});
