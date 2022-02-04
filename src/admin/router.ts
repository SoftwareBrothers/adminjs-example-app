import AdminJSExpress from "@adminjs/express";
import AdminJS from "adminjs";
import {AdminModel} from "../sources/mongoose/models";
import argon2 from 'argon2';


export const router = (adminJs: AdminJS) => AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    const user = await AdminModel.findOne({ email });
    if (user && await argon2.verify(user.password, password)) {
      return user
    }
    return null
  },
  cookieName: 'adminjs',
  cookiePassword: 'somepassword',
})

