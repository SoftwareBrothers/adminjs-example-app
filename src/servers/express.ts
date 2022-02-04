import {createAdmin, generateAdminJSConfig} from "../admin";
import mongoose from "mongoose";
import {router} from "../admin/router";
import {init} from "../sources/mikroorm/config";
import {connection} from "../sources/typeorm/config";
import AdminJS from "adminjs";

const express = require('express')
const app = express()

const attachAdminJS = async () => {
  const config = generateAdminJSConfig()
  const adminJS = new AdminJS(config);
  app.use(adminJS.options.rootPath, router(adminJS))
  await createAdmin();
}

app.listen(process.env.PORT, async () => {
  await mongoose.connect(process.env.MONGO_URL)
  await init();
  await connection;

  await attachAdminJS();

  console.log(`AdminJS is under localhost:${process.env.PORT}/admin`)
})
