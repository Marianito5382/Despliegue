import { MigrationInterface, QueryRunner } from "typeorm";

export class DataTablests1716770079568 implements MigrationInterface {
    name = 'DataTables.ts1716770079568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "projects" ("id" SERIAL NOT NULL, "titulo" character varying NOT NULL, "cuerpo" character varying NOT NULL, CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "projects"`);
    }

}
