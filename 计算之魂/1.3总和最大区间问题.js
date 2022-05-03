const datas = [1.5, -12.3, 3.2, -5.5, 23.2, 3.2, -1.4, -12.2, 34.2, 5.4, -7.8, 1.1, -4.9]
const result = 23.2 + 3.2 + (-1.4) + (-12.2) + 34.2 + 5.4
console.log('result = ', result)

// 时间复杂度O(n3)
const findSumMax1 = (datas)=> {
    let maxSum = -Infinity
    let maxRange = []
    for(let p=0; p<datas.length; p++) {
        for(let q=p; q<datas.length; q++) {
            let sum = 0
            for(let k=p; k<=q; k++) {
                sum = sum + datas[k]
            }
            if(sum > maxSum) {
                maxSum = sum
                maxRange = [p,q]
            }
        } 
    }
    return { maxSum, maxRange }
}

console.log('findSumMax1 is ', findSumMax1(datas))

// 时间复杂度O(n2)
const findSumMax2 = (datas)=> {
    let maxSum = -Infinity
    let maxRange = []
    for(let p=0; p<datas.length; p++) {
        let orgSum = 0
        for(let q=p; q<datas.length; q++) {
            let sum = orgSum + datas[q]
            orgSum = sum
            if(sum > maxSum) {
                maxSum = sum
                maxRange = [p,q]
            }
        } 
    }
    return { maxSum, maxRange }
}

console.log('findSumMax2 is ', findSumMax2(datas))

// 时间复杂度O(nlogn) 分治
const findSumMax3 = (datas)=> {
    const findRangeSum = (datas, p, k) => {
        let maxRangeSum = 0
        let maxSubRange = [0,0]
        let q = p + ((k - p) >> 1)
        // console.log('p,q,k is ', p, q, k)
        if(p > k) {
            maxRangeSum = 0
            return { maxRangeSum, maxSubRange }
        } else if (p === k) {
            maxRangeSum = datas[p]
            maxSubRange = [p, k]
            // console.log('222 maxRangeSum == ', maxRangeSum)
            // console.log('222 maxSubRange == ', maxSubRange)
            return { maxRangeSum, maxSubRange }
        }
        const left = findRangeSum(datas, p, q)
        const right = findRangeSum(datas, q+1, k)

        // console.log('111 left.maxSubRange == ', left.maxSubRange)
        // console.log('111 right.maxSubRange == ', right.maxSubRange)

        // console.log('maxSubRange == ', right.maxSubRange[0], left.maxSubRange[1])

        // if(right.maxSubRange[0] - left.maxSubRange[1] === 1) {
        //     // console.log('aaa1 left.maxSubRange == ', left.maxSubRange)
        //     // console.log('aaa1 right.maxSubRange == ', right.maxSubRange)
        //     // console.log('aaa1 left.maxRangeSum == ', left.maxRangeSum)
        //     // console.log('aaa1 right.maxRangeSum == ', right.maxRangeSum)
        //     if(left.maxRangeSum > 0 && right.maxRangeSum > 0) {
        //         maxRangeSum = left.maxRangeSum + right.maxRangeSum
        //         maxSubRange = [left.maxSubRange[0], right.maxSubRange[1]]
        //         console.log('aaa2 left.maxSubRange == ', left.maxSubRange)
        //         console.log('aaa2 right.maxSubRange == ', right.maxSubRange)
        //         console.log('aaa2 left.maxRangeSum == ', left.maxRangeSum)
        //         console.log('aaa2 right.maxRangeSum == ', right.maxRangeSum)
        //     } else {
        //         if (left.maxRangeSum > right.maxRangeSum) {
        //             maxRangeSum = left.maxRangeSum
        //             maxSubRange = left.maxSubRange
        //             console.log('aaa3 maxSubRange == ', maxSubRange)
        //             console.log('aaa3 maxRangeSum == ', maxRangeSum)
        //         } else {
        //             maxRangeSum = right.maxRangeSum
        //             maxSubRange = right.maxSubRange
        //         }
        //     }
        // } else if(right.maxSubRange[0] - left.maxSubRange[1] > 1) {
        //     // console.log('aaa5 left.maxSubRange == ', left.maxSubRange)
        //     //     console.log('aaa5 right.maxSubRange == ', right.maxSubRange)
        //     //     console.log('aaa5 left.maxRangeSum == ', left.maxRangeSum)
        //     //     console.log('aaa5 right.maxRangeSum == ', right.maxRangeSum)
        //     // const leftAndRight = findRangeSum(datas, left.maxSubRange[0], right.maxSubRange[1])
        //     // maxRangeSum = Math.max(left.maxRangeSum, right.maxRangeSum, leftAndRight.maxRangeSum)
        //     // if(maxRangeSum === left.maxRangeSum) {
        //     //     maxSubRange = left.maxSubRange
        //     // } else if(maxRangeSum === right.maxRangeSum) {
        //     //     maxSubRange = right.maxSubRange
        //     // } else {
        //     //     maxSubRange = leftAndRight.maxSubRange
        //     // }
        // }


        if(left.maxRangeSum > right.maxRangeSum) {
            maxRangeSum = left.maxRangeSum
            maxSubRange = [p, q]
        } else {
            maxRangeSum = right.maxRangeSum
            maxSubRange = [q+1, k]
        }

        // console.log('aaa4 maxSubRange == ', maxSubRange)
        // console.log('aaa4 maxRangeSum == ', maxRangeSum)
        return { maxRangeSum, maxSubRange }
    }

    let maxSum = 0
    let maxRange = []
    let n = datas.length - 1
    // const allMax = findRangeSum(datas, 0, n)
    // let maxSum = allMax.maxRangeSum
    // let maxRange = allMax.maxSubRange
    // return { maxSum, maxRange }

    let mid = n >> 1
    console.log('n, mid is ', n, mid)
    const left = findRangeSum(datas, 0, mid)
    const right = findRangeSum(datas, mid+1, n)
    if(left.maxSubRange[1] < right.maxSubRange[0]) {
        if(left.maxRangeSum > 0 && right.maxRangeSum > 0) {
            maxSum = left.maxRangeSum + right.maxRangeSum
            maxRange = [left.maxSubRange[0], right.maxSubRange[1]]
        } else {
            if (left.maxRangeSum > right.maxRangeSum) {
                maxSum = left.maxRangeSum
                maxRange = left.maxSubRange
            } else {
                maxSum = right.maxRangeSum
                maxRange = right.maxSubRange
            }
        }
    } else {
        const leftAndRight = findRangeSum(datas, left.maxSubRange[0], right.maxSubRange[1])
        maxSum = Math.max(left.maxRangeSum, right.maxRangeSum, leftAndRight.maxRangeSum)
        if(maxSum === left.maxRangeSum) {
            maxRange = left.maxSubRange
        } else if(maxSum === right.maxRangeSum) {
            maxRange = right.maxSubRange
        } else {
            maxRange = leftAndRight.maxSubRange
        }
    }

    return { maxSum, maxRange }
}

console.log('findSumMax3 is ', findSumMax3(datas))

// 时间复杂度O(n) 动态规划 参考leetcode 53题 最大子数组和
const findSumMax4 = (datas)=> {
    let maxSum = datas[0]
    let pre = 0
    let maxRange = []
    let leftIndex = 0
    let rightIndex = 0
    let resultLeftIndex = 0
    let resultRightIndex = 0
    datas.forEach((el, index) => {
        if(el > pre + el) {
            leftIndex = index
            pre = el
        } else {
            rightIndex = index
            pre = pre + el
        }
        if(pre > maxSum) {
            resultLeftIndex = leftIndex
            resultRightIndex = rightIndex
            maxSum = pre
        }
    })
    maxRange = [resultLeftIndex, resultRightIndex]
    return { maxSum, maxRange }
}

console.log('findSumMax4 is ', findSumMax4(datas))