import { Migration, DataSource} from "typeorm";

export const dataSource = new DataSource({
    type: 'postgres',
    host: 'viaduct.proxy.rlwy.net',
    port: 44227,
    username: 'postgres',
    password: 'YLcfQdZuOQefwLzQnJstLhgHvJDKMPvi',
    database: 'railway',
    synchronize: false,
    entities: ['src/**/*.entity{.ts, .js}'],
    migrations: ['./src/migrations/*.ts'],
});