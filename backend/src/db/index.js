import mysql from "mysql"

export const db = () => {
    try {
        const connectionInstance = mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        })
        console.log("MYSQL CONNECTION SUCCESS", connectionInstance.state);
    } catch (error) {
        console.log("MYSQL CONNECTION ERROR: ", error);
        process.exit(1);
    }
}
