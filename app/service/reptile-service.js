const request = require('superagent')
const cheerio = require('cheerio')

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
      arr.push($text)
    })
    for (let i = 0; i < 2; i++) {
      arr.push(i)
    }
    return {
      error_code: 0,
      message: '成功await',
      data: {
        list: arr,
        total: arr.length
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