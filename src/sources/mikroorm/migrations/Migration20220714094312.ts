import { Migration } from '@mikro-orm/migrations';

export class Migration20220714094312 extends Migration {
  async up(): Promise<void> {
    this.addSql('create table "sellers" ("id" uuid not null, "name" text not null);');
    this.addSql('alter table "sellers" add constraint "sellers_pkey" primary key ("id");');

    this.addSql(
      'create table "owners" ("id" uuid not null, "first_name" text not null, "last_name" text not null, "age" integer not null, "role" text check ("role" in (\'admin\', \'client\')) not null, "created_at" timestamptz not null, "updated_at" timestamptz not null);',
    );
    this.addSql('alter table "owners" add constraint "owners_pkey" primary key ("id");');

    this.addSql(
      'create table "cars" ("id" serial primary key, "name" text not null, "meta" jsonb not null default \'{}\', "created_at" timestamptz not null, "updated_at" timestamptz not null, "owner_id" uuid not null, "seller_id" uuid not null);',
    );

    this.addSql(
      'alter table "cars" add constraint "cars_owner_id_foreign" foreign key ("owner_id") references "owners" ("id") on update cascade;',
    );
    this.addSql(
      'alter table "cars" add constraint "cars_seller_id_foreign" foreign key ("seller_id") references "sellers" ("id") on update cascade;',
    );
  }
}
