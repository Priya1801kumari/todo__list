const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Priya",
    host: "localhost",
    port: 5432,
     database: "pern_project"
});

module.exports=pool;
