import { Migration } from '@mikro-orm/migrations';

export class Migration20201114165738 extends Migration {

  async up(): Promise<void> {
    this.addSql('drop table if exists "post" cascade;');
  }

}
