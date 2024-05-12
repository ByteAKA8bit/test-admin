import Mock from 'mockjs'

const productRule = {
  'id|+1': 1001, // starting from 1001
  name: '@ctitle(3, 10)', // random Chinese title
  entry_time: '@datetime("yyyy-MM-dd HH:mm:ss")', // random datetime
  'stock|50-500': 1 // random stock between 50 and 500
}

// 生成200条商品记录
const productTable = Mock.mock({ 'list|200': [productRule] })

export default [
  {
    url: '/api/login',
    method: 'post',
    response: (request: any) => {
      console.log(request.body)

      return {
        code: 200,
        data: { token: 'token', username: request.body.username },
        message: 'success'
      }
    }
  },
  {
    url: '/api/getProducts',
    method: 'get',
    response: (request: any) => {
      // 这里可以分页
      console.log(request)

      return {
        code: 200,
        data: productTable,
        message: 'success'
      }
    }
  }
]
