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
    // new 操作符做了什么事情
    // function Foo() {

    // }

    // prototype 和 __proto__ (no)
    // console.log(Foo.prototype === new Foo().__proto__);

    // new 模拟执行
    function Fun(age, name) {
      this.age = age;
      this.name = name;
    }

    function create(fn, ...args) {
      // 创建空对象
      var obj = {};
      // 更改原型
      Object.setPrototypeOf(obj, fn.prototype);
      // 复用
      var result = fn.apply(obj, args);
      return result instanceof Object ? result : obj
    }

    console.log(create(Fun, 18, '张三'));

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