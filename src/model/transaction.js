const Pool = require('./../config/db')

const selectData = () => {
   return Pool.query(`SELECT * FROM transaction`);
}
const insertData = (data) => {
   const {id,email,product,amount,total} = data;
   return Pool.query(`INSERT INTO transaction(id,email,product,amount,total) VALUES(${id},'${email}',${product},${amount},${total})`);
}
const updateData = (id,data) => {
   const {email,product,amount,total} = data;
   return Pool.query(`UPDATE transaction SET email='${email}' ,product=${product}, amount=${amount}, 
   total=${total} WHERE id='${id}'`);
}
const deleteData = id => {
   return Pool.query(`DELETE FROM transaction where id='${id}'`);
}
 module.exports = {selectData, insertData,updateData,deleteData}
 