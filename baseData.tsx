/*
 * @Description: 测试基础数据类型
 * @Author: dongzhiwen
 * @since: 2021-02-22 09:48:14
 * @LastAuthor: dongzhiwen
 * @lastTime: 2021-02-22 09:59:53
 */

 function baseData(a: number, b: number): null {
  a = a + b
  return null
 }
 module.exports = baseData

 let desc = {a: 1},
	src = {a: 2};
	let result = Object.assign(desc, src);
	console.log('src', src)
	console.log('desc', desc)
	console.log('result', result)
	src.a = 20
	console.log('change src', src)
	console.log('change desc', desc)