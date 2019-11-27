const reptileService = require('../service/reptile-service')
const url = 'https://news.baidu.com/'
// const url = 'https://shop17736509.youzan.com/v2/showcase/tag?alias=vfcly2ms&reft=1574731235342&spm=f.43224166&sf=wx_sm&form=kdt'

module.exports = {
  reptile
}

async function reptile (ctx, next) {
  let res = await reptileService.reptile(url)
  console.log(res)
  ctx.body = res
}

// let a = return new Promise((resolve, reject) => {
//   let arr = []
//   request
//     .get(url)
//     .end((err, res) => {   //错误优先
//         if (err) {
//           reject(err)
//         }
//         let $ = cheerio.load(res.text, {
//           decodeEntities: false
//         })
//         $(".hotnews ul li").each((index,item) => {
//           let $text = $(item).text()
//           arr.push($text)
//         })
//         for (let i = 0; i < 2; i++) {
//           arr.push(i)
//         }
//         resolve(arr)
//     })
// }).then(res => {
//   ctx.body = {
//     error_code: 0,
//     message: '成功',
//     data: {
//       list: res,
//       total: res.length
//     }
//   }
// }).catch(err => {
//   ctx.body = {
//     error_code: 222222,
//     message: JSON.stringify(err),
//     data: {}
//   }
// })