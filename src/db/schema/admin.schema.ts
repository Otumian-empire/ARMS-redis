import { Entity, Schema } from "redis-om";

class AdminEntity extends Entity {
  generateId() {
    return "ertyuio"
  }
}

const AdminSchemaStructure = {
  username: {
    type: "string",
  },
  password: {
    type: "string",
  },
  email: {
    type: "string",
  }
};

export default new Schema(AdminEntity, AdminSchemaStructure, {
  dataStructure: "JSON"
});
