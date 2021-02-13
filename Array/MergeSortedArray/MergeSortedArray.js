//合并两个有序数组
//从小到大
const merge1 = (nums1, m, nums2, n) => {
    let array = []
    let i = 0
    let j = 0
    let k = 0
    while (i < m && j < n){
        if(nums1[i] < nums2[j]){
            array[k] = nums1[i]
            i++
        }else {
            array[k] = nums2[j]
            j++
        }
        k++
    }

    if(i === m){
       array = array.concat(nums2.slice(j,n))
    }

    if(j === n){
        array = array.concat(nums1.slice(i,m))
    }
    nums1 = array
    console.log(nums1)
}

merge1([1,2,3,0,0,0],3, [2,5,6],3)

//从大到小
const merge2 = (nums1, m, nums2, n) => {
    let i = nums1.length - 1
    n--
    m--
    while(n >= 0){
        if(nums1[m] > nums2[n]){
            nums1[i--] = nums1[m--]
        }else{
            nums1[i--] = nums2[n--]
        }
    }

    console.log(nums1)
}

merge2([1,2,3,0,0,0],3, [2,5,6],3)
