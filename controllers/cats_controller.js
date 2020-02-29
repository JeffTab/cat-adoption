const connection = require("../config/connection");

// get all cats

const getCats = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM cats", (err, catdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve(catdata);
        });
    });
};

// create cat
// accepts object parameter => {cat_name: "Gemma"}

const createCat = (catObj) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO cats SET ?", catObj, (err, catdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve(catdata);
        });
    });
};


// update cat's adoption status
const updateCat = (catObj, catID) => {
    return new Promise((resolve, reject) => {
        connection.query("UPDATE cats SET ? WHERE id = ?", (catObj, catID), (err, catdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            } else if (catdata.affectedRows === 0) {
                return resolve({ message: "Couldn't find a cat with that ID!" });
            }
            resolve({ message: "Cat updated successfully!" });
        });
    });
};



const deleteCat = (catID) => {
    return new Promise((resolve, reject) => {
        connection.query("Delete FROM cats WHERE id = ?", [catID], (err, catdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            } else if (catdata.affectedRows === 0) {
                return resolve({ message: "Couldn't find a cat with that ID!" });
            }
            resolve({ message: "Cat deleted successfully!" });
        });
    });
};


module.exports = { getCats, createCat, updateCat, deleteCat };