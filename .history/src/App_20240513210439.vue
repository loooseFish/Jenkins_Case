<template>
  <div id="app">
    <button @click="$msg.show({ type: 'success', content: 'hello' });">success</button>
    <button @click="$msg.show({ type: 'primany' });">primany</button>
    <button @click="$msg.show({ type: 'error' });">error</button>
    <button @click="$msg.show({ type: 'info' });">info</button>
    <!--  -->
    ||
    <button @click="add">add</button>
    <button @click="del">del</button>
    {{ set }}
    ||
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: [1, 2, 3, 4, 5, 6],
      set: {

      }
    }
  },
  components: {
  },
  methods: {
    add() {
      if (!this.set.addd) {
        this.$set(this.set, 'addd', 1)
      } else {
        this.set.addd++
      }
    },
    del() {
      this.$delete(this.set, 'addd')
    }
  },
  created() {
    {
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
    }

    {

    }

    

    // 原型链、原型
    // function pro(params) { }
    // console.dir(pro)
    // console.log(pro.prototype.constructor);
    // console.log(new pro().__proto__);
    // console.log(pro.prototype.__proto__);
    // console.log(Object.prototype);
    // console.log(pro.prototype === new pro().__proto__);
    // console.log(pro.prototype.__proto__ === Object.prototype);
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