// Stack use LIFO (Last In First Out) principle

class Stack {
  private list = new Map()
  private maxSize: (null | number) = null

  constructor(maxSize = null) {
    this.maxSize = maxSize || null
  }

  get size() {
    return this.list.size
  }

  // add new item to the end
  push<T>(item: T) {
    if (!this.maxSize || this.size < this.maxSize) {
      this.list.set(this.size, item)
    }
    return this.size
  }

  // remove item from the end
  pop() {
    if(this.size) {
      const lastItem = this.list.get(this.size - 1)
      this.list.delete(this.size - 1)
      return lastItem
    }

    return null
  }

  // check the last element
  peek() {
    return this.list.get(this.size - 1) || null
  }

  clear(): void {
    this.list = new Map()
  }

  print(): void {
    console.log(Array.from(this.list.values()))
  }
}

const myStack = new Stack()

myStack.push('hola')
myStack.push(new Set([1,2,1]))
myStack.push('42')
myStack.push(function(){})
myStack.push(NaN)
myStack.push(undefined)
myStack.push({} || [])
myStack.push([true,false])
console.log(myStack.peek())
myStack.pop()
myStack.print()