const Pool = require('./../config/db')

const selectDataCategory = () => {  
    return Pool.query('SELECT * FROM category ORDER BY id DESC limit 5')
  }
const insertDataCategory = (data) => {
    const {id,name,stock,price,category_id} = data;
    return Pool.query(`INSERT INTO category(id,name,) VALUES(${id},'${name}')`);

}
const updateDataCategory = (id,data) => {
    const {name} = data;
    return Pool.query(`UPDATE category SET name='${name}' WHERE id='${id}'`);
}
const deleteDataCategory = id => {
    return Pool.query(`DELETE FROM category where id='${id}'`);
}
  module.exports = {selectDataCategory, insertDataCategory,updateDataCategory,deleteDataCategory}


  