/*
 * @Description: 测试基础类型
 * @Author: dongzhiwen
 * @since: 2021-02-22 09:49:50
 * @LastAuthor: dongzhiwen
 * @lastTime: 2021-03-03 09:55:40
 */
const baseData = require('./baseData');

// test('测试基础类型 undefined', () => {
//   expect(baseData(1,2)).toBeUndefined
// });
// test('测试基础类型 null', () => {
//   expect(baseData(1,2)).toBeNull
// });

// test('null', () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });

// test('zero', () => {
//   const z = 0;
//   expect(z).not.toBeNull();
//   expect(z).toBeDefined();
//   expect(z).not.toBeUndefined();
//   expect(z).not.toBeTruthy();
//   expect(z).toBeFalsy();
// });
// test('not zero', () => {
//   const z = 20;
//   expect(z).toBeTruthy();
// });

// test('测试单个数组取重', () => {
  
// });
// 
// 测试Object.assign()
test('测试Object.assign', () => {
	let desc = {a: 1},
	src = {a: 2};
	let result = Object.assign(desc, src)
	expect(result).toEqual({a: 2})
})