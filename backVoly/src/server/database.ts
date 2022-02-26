import mongoose from "mongoose";

export default () => {
  mongoose
    .connect("mongodb://admin:password@172.29.0.2:27017/voly?authSource=admin")
    .then((db) => console.log(`DB ${db.connection.name} connected`))
    .catch((e) => console.log(e));
};
