<template>
  <div id="app">
    <button @click="$msg.show({ type: 'success' });">success</button>
    <button @click="$msg.show({ type: 'primany' });">primany</button>
    <button @click="$msg.show({ type: 'error' });">error</button>
    <button @click="$msg.show({ type: 'info' });">info</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: [1, 2, 3, 4, 5, 6]
    }
  },
  components: {
  },
  methods: {

  },
  created() {
    // new -----------------------------------------------------------------------------

    // new 操作符做了什么事情
    // function Foo() {

    // }

    // prototype 和 __proto__ (no)
    // console.log(Foo.prototype === new Foo().__proto__);

    // new 模拟执行
    // function Fun(age, name) {
    //   this.age = age;
    //   this.name = name;
    // }

    // function create(fn, ...args) {
    //   // 创建空对象
    //   var obj = {};
    //   // 将空对象的原型，指向与构造函数的原型
    //   Object.setPrototypeOf(obj, fn.prototype);
    //   // 将空对象作为构造函数上下文（改变this指向
    //   var result = fn.apply(obj, args);
    //   // 判断返回类型
    //   return result instanceof Object ? result : obj
    // }

    // console.log(create(Fun, 18, '张三'));

    // new -----------------------------------------------------------------------------


    // call,apply,bind -----------------------------------------------------------------------------

    function fun() {
      console.log('hello world');
      console.log(this);
    };
    // 1.call可以调用方法
    // 2.call可以更改this指向
    let dog = {
      name: '旺财',
      sayName() {
        console.log("dogName:" + this.name);
      },
      eat(food1, food2) {
        console.log("dogEat:" + food1 + food2);
      }
    }
    let cat = {
      name: '喵喵'
    }
    // fun.call(cat)
    // dog.sayName.call(cat)
    // 3.call可以传参
    // dog.eat.call(cat, '鱼', 'meme')
    // apply
    // dog.eat.apply(cat, ['鱼', 'meme'])
    // bind
    // dog.eat.bind(cat, '鱼', 'meme')()
    // console.log();

    function Animal(){
      this.eat = function(){
        console.log('eat');
      }
    }
    console.log(new Animal().eat());
    // Animal.call(dog)

    // call,apply,bind -----------------------------------------------------------------------------


  },
  render(createEle) {
    return createEle('ul', {
      attrs: { class: 'caseUl' }, on: {
        click: () => {
          console.log('render元素: ul');
        }
      }
    }, this.number.map(item => createEle('li', { attrs: { class: 'caseLi' } }, `${item}`)))
  },

}

</script>

<style>
.caseUl {
  border: 1px solid #000;
}

.caseLi {
  border: 1px solid #d21e1e;
}
</style>