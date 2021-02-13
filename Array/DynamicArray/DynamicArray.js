//实现一个支持动态扩容的数组

class DynamicArray{
  constructor(size) {
      this.size = size
      this.data = Array(size)
      this.count = 0
  }
  append(item){
      this.count ++
      if(this.count > this.size){
          this.expand()
      }
      this.data[this.count - 1] = item
  }
  expand(){
     if (this.count > this.size){
         let arr = Array(this.size * 2)
         this.size = this.size * 2
         for (let i = 0; i < this.data.length; i++){
             arr[i] = this.data[i]
         }
         this.data = []
         this.data = arr
     }
  }
}

let dynamicArray = new DynamicArray(5)
for (let i = 0; i < 5; i++){
    dynamicArray.append(`item_${i}`)
}
dynamicArray.append(`item_5`)
dynamicArray.append(`item_6`)
console.log(dynamicArray)

for (let j = 0; j < dynamicArray.data.length; j++){
    console.log(dynamicArray.data[j])
}


