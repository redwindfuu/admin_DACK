var DataTypes = require("sequelize").DataTypes;
var _ct_phieumua = require("./ct_phieumua");
var _ct_phieunhap = require("./ct_phieunhap");
var _khachhang = require("./khachhang");
var _nhanvien = require("./nhanvien");
var _nxb = require("./nxb");
var _phieumua = require("./phieumua");
var _phieunhap = require("./phieunhap");
var _sach = require("./sach");
var _theloai = require("./theloai");
var _theloaiofsach = require("./theloaiofsach");
var _tonkho = require("./tonkho");

function initModels(sequelize) {
  var ct_phieumua = _ct_phieumua(sequelize, DataTypes);
  var ct_phieunhap = _ct_phieunhap(sequelize, DataTypes);
  var khachhang = _khachhang(sequelize, DataTypes);
  var nhanvien = _nhanvien(sequelize, DataTypes);
  var nxb = _nxb(sequelize, DataTypes);
  var phieumua = _phieumua(sequelize, DataTypes);
  var phieunhap = _phieunhap(sequelize, DataTypes);
  var sach = _sach(sequelize, DataTypes);
  var theloai = _theloai(sequelize, DataTypes);
  var theloaiofsach = _theloaiofsach(sequelize, DataTypes);
  var tonkho = _tonkho(sequelize, DataTypes);

  phieumua.belongsToMany(sach, { as: 'MASACH_saches', through: ct_phieumua, foreignKey: "MAPM", otherKey: "MASACH" });
  phieunhap.belongsToMany(sach, { as: 'MASACH_sach_ct_phieunhaps', through: ct_phieunhap, foreignKey: "MAPN", otherKey: "MASACH" });
  sach.belongsToMany(phieumua, { as: 'MAPM_phieumuas', through: ct_phieumua, foreignKey: "MASACH", otherKey: "MAPM" });
  sach.belongsToMany(phieunhap, { as: 'MAPN_phieunhaps', through: ct_phieunhap, foreignKey: "MASACH", otherKey: "MAPN" });
  phieumua.belongsTo(khachhang, { as: "MAKH_khachhang", foreignKey: "MAKH"});
  khachhang.hasMany(phieumua, { as: "phieumuas", foreignKey: "MAKH"});
  phieumua.belongsTo(nhanvien, { as: "MANV_nhanvien", foreignKey: "MANV"});
  nhanvien.hasMany(phieumua, { as: "phieumuas", foreignKey: "MANV"});
  phieunhap.belongsTo(nhanvien, { as: "MANV_nhanvien", foreignKey: "MANV"});
  nhanvien.hasMany(phieunhap, { as: "phieunhaps", foreignKey: "MANV"});
  phieunhap.belongsTo(nxb, { as: "MANXB_nxb", foreignKey: "MANXB"});
  nxb.hasMany(phieunhap, { as: "phieunhaps", foreignKey: "MANXB"});
  sach.belongsTo(nxb, { as: "manxb_nxb", foreignKey: "manxb"});
  nxb.hasMany(sach, { as: "saches", foreignKey: "manxb"});
  ct_phieumua.belongsTo(phieumua, { as: "MAPM_phieumua", foreignKey: "MAPM"});
  phieumua.hasMany(ct_phieumua, { as: "ct_phieumuas", foreignKey: "MAPM"});
  ct_phieunhap.belongsTo(phieunhap, { as: "MAPN_phieunhap", foreignKey: "MAPN"});
  phieunhap.hasMany(ct_phieunhap, { as: "ct_phieunhaps", foreignKey: "MAPN"});
  ct_phieumua.belongsTo(sach, { as: "MASACH_sach", foreignKey: "MASACH"});
  sach.hasMany(ct_phieumua, { as: "ct_phieumuas", foreignKey: "MASACH"});
  ct_phieunhap.belongsTo(sach, { as: "MASACH_sach", foreignKey: "MASACH"});
  sach.hasMany(ct_phieunhap, { as: "ct_phieunhaps", foreignKey: "MASACH"});
  theloaiofsach.belongsTo(sach, { as: "masach_sach", foreignKey: "masach"});
  sach.hasMany(theloaiofsach, { as: "theloaiofsaches", foreignKey: "masach"});
  tonkho.belongsTo(sach, { as: "masach_sach", foreignKey: "masach"});
  sach.hasMany(tonkho, { as: "tonkhos", foreignKey: "masach"});
  theloaiofsach.belongsTo(theloai, { as: "maTL_theloai", foreignKey: "maTL"});
  theloai.hasOne(theloaiofsach, { as: "theloaiofsach", foreignKey: "maTL"});

  return {
    ct_phieumua,
    ct_phieunhap,
    khachhang,
    nhanvien,
    nxb,
    phieumua,
    phieunhap,
    sach,
    theloai,
    theloaiofsach,
    tonkho,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
