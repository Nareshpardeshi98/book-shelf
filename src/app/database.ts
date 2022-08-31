import createConnectionPool, {sql} from '@databases/mysql';

async function run() {
  // N.B. you will need to replace this connection
  // string with the correct string for your database.
  const db = createConnectionPool(
    'mysql://root:Naresh@localhost:3306/practice',
  );

  const results = await db.query(sql`
    SELECT 1 + 1 as result;
  `);

  console.log(results);
  // => [{result: 2}]

  await db.dispose();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});