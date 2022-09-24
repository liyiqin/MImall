let baseURL;
console.log(process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://dev-mall-pre.springbopt.cn/api'
    break;
  case 'test':
    baseURL = 'http://dev-mall-pre.springbopt.cn/api'
    break;
  case 'prev':
    baseURL = 'http://prev-mall-pre.springbopt.cn/api'
    break;
  case 'production':
    baseURL = 'http://mall-pre.springbopt.cn/api'
    break;

  default:

    baseURL = 'http://mall-pre.springbopt.cn/api'
    break;

}

export default {
  baseURL
}