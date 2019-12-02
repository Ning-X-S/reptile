module.exports = (sequelize, dataTypes) => {
    let Reptile = sequelize.define('Reptile', {
      title: {
        type: dataTypes.STRING
      }
    }, {
      tableName: 'reptile_list',
      timestamps: false // 必须加上，不然会多查询 createdAt 和 updatedAt 列
    })
    return Reptile
  }