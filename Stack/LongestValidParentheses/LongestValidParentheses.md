## 最长有效的括号长度
### 思路

1. 栈底先放一个-1进去，这个很巧妙，在后面根据下标计算括号长度时用，相当于是小标从0开始
2. 遇到“(”,下标入栈，继续遍历
3. 遇到“)”,先取出栈顶元素，表示匹配了括号
4. 如果栈空了,证明上一步出栈的是-1，表示“)”未被匹配; 将其下标入栈，作为下一个起点
5. 如果栈未空，表示“)”匹配了，所以最新maxLength = 当前下标 - 栈顶元素
6. 最新的maxLength与之前的maxLength比较, 取最大值

![img.png](imgs/img.png)

![img_1.png](imgs/img_1.png)

![img_2.png](imgs/img_2.png)

![img_3.png](imgs/img_3.png)

![img_4.png](imgs/img_4.png)

![img_5.png](imgs/img_5.png)

![img_6.png](imgs/img_6.png)

![img_7.png](imgs/img_7.png)

![img_8.png](imgs/img_8.png)

![img_9.png](imgs/img_9.png)

![img_10.png](imgs/img_10.png)

### 图片来源：
https://leetcode-cn.com/problems/longest-valid-parentheses/solution/zui-chang-you-xiao-gua-hao-by-leetcode-solution/

### leetcode题目链接
https://leetcode-cn.com/problems/longest-valid-parentheses/





