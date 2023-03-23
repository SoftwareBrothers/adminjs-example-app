import { PrismaClient } from '@prisma/client';
import { DMMFClass } from '@prisma/client/runtime';

export const client = new PrismaClient();

export const dmmf = (client as any)._baseDmmf as DMMFClass;
