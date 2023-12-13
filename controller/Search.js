const DataAll = require("../model/productmodel");

const searchapi = async (req, res) => {
  const result = await DataAll.find({
    $or: [
      { courses: { $regex: `${req.params.key}`, $options: "i" } },
      { category: { $regex: `${req.params.key}`, $options: "i" } },
    ],
  });
  res.send(result);
};

// const  searchapi  = async (req, res) => {
//   const {courses} = req.query
//     // console.log(page);
//     const queryObj = {}
//     if(courses){
//         queryObj.courses= {$regex :courses, $options : "i"};
//     }
//     const search = await DataAll.find(queryObj)
//     return res.send(search)
// }

// const searchapi = async(req, res) => {
//     const {courses } = req.query;
//     console.log(courses);
//     const queryObj = {}
//     if(courses){
//         queryObj.courses= {$regex :courses, $options : "i"};
//     }
//     const search = await DataAll.find(queryObj)
//     return res.send(search)
// };

// Assign route
// app.use('/', (req, res, next) => {
//   const filters = req.query;
//   const filteredUsers = data.filter(user => {
//     let isValid = true;
//     for (key in filters) {
//       console.log(key, user[key], filters[key]);
//       isValid = isValid && user[key] == filters[key];
//     }
//     return isValid;
//   });
//   res.send(filteredUsers);
// });

module.exports = searchapi;
