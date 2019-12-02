const request = require('superagent')
const cheerio = require('cheerio')
const Model = require('../model/index')

module.exports = {
  reptile
}

async function reptile (url) {
  try {
    let arr = []
    let { res } = await request.get(url)
    // console.log(Object.keys(res))
    let $ = cheerio.load(res.text, {
      decodeEntities: false
    })
    $(".hotnews ul li").each((index,item) => {
      let $text = $(item).text().replace(/\s/g, '')
      arr.push({title: $text})
    })
    let reptile = await Model.Reptile.bulkCreate(arr)
    if (reptile !== null) {
      console.log(Object.keys(reptile))
      return {
        error_code: 0,
        message: '创建成功',
        data: {
          list: arr,
          total: arr.length
        }
      }
    } 
  } catch (err) {
    return {
      error_code: 11111,
      message: '请求错误',
      data: {}
    }
  }
}