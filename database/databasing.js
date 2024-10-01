import pg from 'pg';
import db_config from "../secrets/db-config.json" with { type: "json" };

export const createBasePool = () => {
    return new pg.Pool({
        host: '172.23.0.1',
        port: 5432,
        user: 'megalo-admin',
        password: db_config.db_password,
        database:'database-cosmo',
    })
}