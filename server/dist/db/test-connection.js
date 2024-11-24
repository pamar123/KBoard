// server/src/db/test-connection.ts
import dotenv from 'dotenv';
dotenv.config();
import { sequelize } from '../models/index.js';
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connection successful.');
        console.log('Connected to database:', process.env.DB_NAME);
    }
    catch (error) {
        console.error('❌ Unable to connect to the database:', error);
    }
    finally {
        await sequelize.close();
        process.exit(0);
    }
}
testConnection();
