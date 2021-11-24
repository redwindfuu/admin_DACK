const {models} = require("../../config/db")
// support query database
exports.oneAd= () =>{
    return models.nhanvien.findAll({
        where: {
            USER: 'kivala'
        }});
}