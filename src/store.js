async function createStore() {
  if (process.env.DATABASE_URL) {
    const { PostgresStore } = require("./postgres-store");
    const store = new PostgresStore(process.env.DATABASE_URL);
    await store.init();
    return store;
  }
  const { LocalStore } = require("./local-store");
  const store = new LocalStore();
  await store.init();
  return store;
}

module.exports = { createStore };
