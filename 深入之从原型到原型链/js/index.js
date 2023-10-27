/**
 * 伢羽: JavaScript深入之从原型到原型链
 * 地址: https://github.com/mqyqingfeng/Blog/issues/2
 */


// function Person() {}
// var person = new Person();
// // 设置了 name 属性   这里设置的静态属性
// person.name = 'Kevin';
// // 输出
// console.log(person.name) // Kevin
// // 好奇 再次new 一个会不会有这个属性
// var person1 = new Person();
// console.log(person1.name)
// 也就是说 实例之后的属性添加只在当前实例中


// 那么我就要研究一下 如果在之前呢  那是不是就是共享的呢?

// function Person() {
//     this.age = 20
// }
// var person = new Person();
// console.log(person.age) // Kevin
// var person1 = new Person();
// console.log(person1.age)
// 结论是 可以共享的

// 本文的重点是 研究 prototype
function Person() {

}

// 虽然写在注释里，但是你要注意：
// prototype是函数才会有的属性
Person.prototype.name = 'Kevin';

var person1 = new Person();
person1.age = 20
var person2 = new Person();
console.log(person1.name,person1, Person.prototype, person1.__proto__,Person.prototype === person1.__proto__) // Kevin
console.log(person2.name,person2) // Kevin

// 伢羽说：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。
// 其实我在看这段代码的时候不完全掌握这里的概念 所以不是完全明白这段的含义

// 不过伢羽的意思是：

// 我想按照自己的设想去推演这段话

// 这里我明白了几个概念























