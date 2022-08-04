const Pool = require('pg').Pool;
// const pool = new Pool({
//   user: 'kpermenter',
//   host: 'localhost',
//   database: 'kpermenter',
//   password: '12345',
//   port: 5432,
// });

const pool = new Pool({
  user: 'iiixfljtmygllw',
  host: 'ec2-3-226-163-72.compute-1.amazonaws.com',
  database: 'd8b7e21hfr8vqu',
  password: '58b0cd07222408610b618274644ca355d7277fa8e5acdff94c1bc785750adfde',
  port: 5432,
});

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  const { name, purchased, category, amount } = request.body;

  pool.query(
    'INSERT INTO users (name, purchased, category, amount) VALUES ($1, $2) RETURNING *',
    [name, purchased, category, amount],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id);
//   const { name, email } = request.body;

//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`User modified with ID: ${id}`);
//     }
//   );
// };

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  // updateUser,
  deleteUser,
};
