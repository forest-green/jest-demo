/*
 * @Description: 冒泡排序
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
 *  比较相邻的元素。如果第一个比第二个大，就交换他们两个。 
 *	对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。 
 *	针对所有的元素重复以上的步骤，除了最后一个。 
 *	持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较
 * --- 说明 ---
 * 思考：冒泡排序是稳定的吗？
 * 解答：稳定  循环的次数是固定的。
 */

function bubble(params = []) {
	for (var i = 0; i < params.length- 1; i++) {
		for (var j = 0; j < params.length- 1 - i; j++) {
			if (params[j] > params[j + 1]) {
                let tmp = params[j];
                params[j] = params[j + 1];
                params[j + 1] = tmp;
            }

		}
	}
	return params

}


test('冒泡排序', () => {
	let quickArr = [1, 34, 5, 76, 8, 6, 9, 7, 6, 3]

  	expect(bubble(quickArr)).toEqual([1, 3, 5, 6, 6, 7, 8, 9, 34, 76]);
});
