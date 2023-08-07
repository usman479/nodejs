const Employee = require("../models/Employee");

// Show the list of employees
const index = (req, res, next) => {
  Employee.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "Error Ocurred!",
      });
    });
};

// Show Single Employee
const show = (req, res, next) => {
  let employeeId = req.body.employeeId;
  Employee.findById(employeeId)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "Error Ocurred!",
      });
    });
};

const store = (req, res, next) => {
  let employee = new Employee({
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  });

  employee
    .save()
    .then((response) => {
      res.json({
        message: "Employee added successfully",
      });
    })
    .catch((error) => {
      res.json({
        message: "Error Ocurred!",
      });
    });
};

// Update Employee with employee id
const update = (req, res, next) => {
  let employeeId = req.body.employeeId;
  let updatedData = {
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  };

  Employee.findByIdAndUpdate(employeeId, { $set: updatedData })
    .then((response) => {
      res.json({
        message: "Employeed updated successfully",
      });
    })
    .catch((error) => {
      res.json({
        message: "Error Occurred!",
      });
    });
};



// delete and employee
const destroy = (req, res, next) => {
  let employeeId = req.body.employeeId;

  Employee.findByIdAndRemove(employeeId)
    .then((response) => {
      res.json({
        message: "Employeed removed successfully",
      });
    })
    .catch((error) => {
      res.json({
        message: "Error Occurred!",
      });
    });
};


module.exports = {
    index,
    show,
    store,
    update,
    destroy,
  };