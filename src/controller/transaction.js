const ModelTransaction = require("./../model/transaction");


const TransactionController = {
    getProduct: (req, res, next) => {
    ModelTransaction.selectData(sortby,sort,page,limit)
    .then((result) => res.send({ result: result.rows }))
    .catch((err) => res.send({ message: "error", err }));
},
update: (req, res, next) => {
    ModelTransaction.updateData(req.params.id, req.body)
    .then((result) => res.send({ status: 200, message: `berhasil ubah data`}))
    .catch((err) => res.send({ message: "error", err }));
},
delete: (req, res, next) => {
    ModelTransaction.deleteData(req.params.id)
    .then((result) => res.send({ status: 200, message: `berhasil hapus data` }))
    .catch((err) => res.send({ message: "error", err }));
},
insert: (req, res, next) => {
    ModelTransaction.insertData(req.body)
    .then((result) => res.send({ status: 200, message: `berhasil memasukan data`, data: result.rows}))
    .catch((err) => res.send({ message: "error", err }));
},
}

exports.TransactionController = TransactionController;