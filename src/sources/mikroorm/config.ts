import { MikroORM } from "@mikro-orm/core";
import {Owner, Car, Seller} from "./models";
import {Options} from "@mikro-orm/core/utils";

const config: Options = {
  entities: [
    Owner,
    Car,
    Seller
  ],
  dbName: 'adminjs-mikroorm',
  type: 'postgresql',
  clientUrl: 'http://localhost',
  port: 5437,
  user: 'adminjs',
  password: 'adminjs',
  allowGlobalContext: true,
  migrations: {
    path: __dirname + '/migrations',
    emit: 'ts',
  }
}

export const init = async () => {
  orm = await MikroORM.init(config);
}

export default config;
export let orm;
