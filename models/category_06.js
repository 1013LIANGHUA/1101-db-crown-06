const db = require('../utils/database');

const category_06 = class category_06 {
  constructor(id, name, size, remote_url, local_url, link_url) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.remote_url = remote_url;
    this.local_url = local_url;
    this.link_url = link_url;
  }

  // get all categories

  static async fetchAll() {
    try {
      let results = await db.query(`SELECT * from category_06 `);
      return results.rows;
    } catch (e) {
      console.log('error', e);
    }
  }
};

// const test = async () => {
//   let results = await Category_06.fetchAll();
//   console.log('results', results);
// };

// test();
module.exports = category_06;
