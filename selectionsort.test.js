/*
 * @Description: 选择排序
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
 * --- 说明 ---
 * 思路：
 * --- 说明 ---
 * 思考：选择排序是稳定的吗？
 * 解答：不稳定 。
 */
function selectionsort(arr = []) {
	for (let i = 0; i < arr.length; i++) {
		let index = i
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[index] > arr[j]) {
				index = j
			}
		}

		if (arr[i] > arr[index]) {
			let temp = arr[index]
			arr[index] = arr[i]
			arr[i] = temp
		}
	}
	return arr
}

test('选择排序', () => {
	let quickArr = [1, 34, 5, 76, 8, 6, 9, 7, 6, 3]
	expect(selectionsort(quickArr)).toEqual([1, 3, 5, 6, 6, 7, 8, 9, 34, 76])
})