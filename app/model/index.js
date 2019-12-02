const path = require('path')
const Sequelize = require('sequelize')
const config = require('../../config')
const sqlConfig = config.sql || {}

let db = {}

let sequelizeConfig = {
  dialect: 'mysql',
  host: sqlConfig.host,
  port: sqlConfig.port,
  pool: {
    max: 100, // 最大值
    idle: 5000, // 闲时超时
    acquire: 10000
  },
  dialectOptions: {
    dateStrings: true, // 日期字符串（配合类型转换使用）
    typeCast: true // 类型转换
  },
  timezone: '+08:00'
}

let sequelize = new Sequelize(sqlConfig.database, sqlConfig.user, sqlConfig.password, sequelizeConfig)

sequelize.query = function () {
  return Sequelize.prototype.query.apply(this, arguments).catch(function (err) {
    console.log(err)
  })
}

let model = sequelize['import'](path.join(__dirname, './reptile-model.js'))
db[model.name] = model

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

