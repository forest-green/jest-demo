/*
 * @Description: 快速排序
 * @Author: dongzhiwen
 * @since: 2021-02-08 10:20:12
 * @LastAuthor: dongzhiwen
 * @lastTime: 2021-02-20 17:25:47
 */

/**
 * --- 测试用例 ---
 *
 * 输入：[1, 34, 5, 76, 8, 6, 9, 7, 6, 3]
 * 输出：[1, 3, 5, 6, 6, 7, 8, 9, 34, 76]
 *
 * --- 说明 ---
 * 快速排序使用递归的思想
 * 思考：快速排序是稳定的吗？
 * 解答：base 的每次选择，会导致快排是不稳定排序。
 */
function quick(params = []) {
	if (params.length < 2) return params;

	let rightArr = [];
	let leftArr = [];
	let middleItem = Math.floor(params.length / 2);
	let base = params.splice(middleItem, 1)[0]
	for (var i = 0; i < params.length; i++) {
		if (params[i] < base) {
			leftArr.push(params[i])
		} else if (params[i] >= base) {
			rightArr.push(params[i])
		}
	}
	return quick(leftArr).concat([base], quick(rightArr));
}

test('快速排序算法', () => {
	let quickArr = [1, 34, 5, 76, 8, 6, 9, 7, 6, 3]

  	expect(quick(quickArr)).toEqual([1, 3, 5, 6, 6, 7, 8, 9, 34, 76]);
});



