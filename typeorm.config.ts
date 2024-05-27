import { Migration, DataSource} from "typeorm";

export const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'mariano',
    password: 'proyecto.2024',
    database: 'proyecto2024',
    synchronize: false,
    entities: ['src/**/*.entity{.ts, .js}'],
    migrations: ['./src/migrations/*.ts'],
});