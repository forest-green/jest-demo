/*
 * @Description: 格式化日期
 * @Author: dongzhiwen
 * @since: 2021-02-08 10:20:12
 * @LastAuthor: dongzhiwen
 * @lastTime: 2021-02-20 17:25:47
 */
const moment = require('moment');


test('测试日期转换',() => {
	let date = null
	date = date ? date : new Date()
	let now = new Date(date)
	let pastMonth = now.getMonth() - 1;
		now.setMonth(pastMonth);
	let resultDate = moment(now).format("YYYY-MM-DD")

	let tempDate = now.toLocaleDateString()
	let tempArr = tempDate.split('/')
	for (let i = 0; i < tempArr.length; i++) {
		tempArr[i] = tempArr[i] < 10 ? `0${tempArr[i]}` : tempArr[i]
	}
	console.log(tempArr.join('-'))
	expect(tempArr.join('-')).toBe(resultDate)
})