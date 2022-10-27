 const Pool = require('./../config/db')

 const selectData = (sortby,sort,page,limit) => {
    return Pool.query(`SELECT product.id, product.name,product.stock, product.price, category.name as category FROM product INNER JOIN category ON product.category_id = category.id ORDER BY ${sortby} ${sort} limit ${limit} offset ${(page-1) * limit}`);
}
const insertData = (data) => {
    const {id,name,stock,price,category_id} = data;
    return Pool.query(`INSERT INTO product(id,name,stock,price,category_id) VALUES(${id},'${name}',${stock},${price},${category_id})`);
}
const updateData = (id,data) => {
    const {name,stock,price,category_id} = data;
    return Pool.query(`UPDATE product SET name='${name}' ,stock=${stock}, price=${price}, 
    category_id=${category_id} WHERE id='${id}'`);
}
const deleteData = id => {
    return Pool.query(`DELETE FROM product where id='${id}'`);
}
  module.exports = {selectData, insertData,updateData,deleteData}
  
  