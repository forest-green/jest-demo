/*
 * @Description: sum函数的单元测试函数
 * @Author: dongzhiwen
 * @since: 2021-02-08 10:20:12
 * @LastAuthor: dongzhiwen
 * @lastTime: 2021-02-20 17:25:47
 */
const sum = require('./sum');

test('adds 1 and 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('adds 1 and 3 to equal 4', () => {
  expect(sum(1, 3)).toBe(4);
});

test('Object assignment', () => {
  const data = {one: 1}
  data['two'] = 2
  expect(data).toEqual({one: 1, two: 2})
});