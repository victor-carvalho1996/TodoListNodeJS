const AppError = require("../utils/appError");
const conn = require("../config/database");

exports.getAllTodos = (req, res, next) => {
    let search = '';
    if (req.query.description) {
       search = "WHERE todo_text LIKE '%" + req.query.description + "%'";
    }
    
    conn.query("SELECT * FROM todos " + search, function (err, data, fields) {
        if(err) return next(new AppError(err))
        res.status(200).json({
          message: "success",
          success: true,
          todos: data,
        });
    });
};

exports.createTodo = (req, res, next) => {
    if (!req.body) return next(new AppError("No form data found", 404));
    const values = [req.body.name, false];
    conn.query(
      "INSERT INTO todos (todo_text, todo_active) VALUES(?)",
      [values],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "todo created!",
        });
      }
    );
};

exports.getTodo = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No todo id found", 404));
    }
    conn.query(
      "SELECT * FROM todos WHERE id_todo = ?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      }
    );
};

exports.updateTodo = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No todo id found", 404));
    }
    const done = req.body.status.toString().toLowerCase() === 'true';
    conn.query(
      "UPDATE todos SET todo_active=? WHERE id_todo=?",
      [done, req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "todo updated!",
        });
      }
    );
};

exports.deleteTodo = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No todo id found", 404));
    }
    conn.query(
      "DELETE FROM todos WHERE id_todo=?",
      [req.params.id],
      function (err, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "todo deleted!",
        });
      }
    );
};