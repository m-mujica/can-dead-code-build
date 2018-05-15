import { Component, DefineMap, stache } from "can";

const HelloWorldVM = DefineMap.extend({
  message: { default: "Hello There!" }
});

export default Component.extend({
  tag: "hello-world",
  view: stache("<h1>{{message}}</h1>"),
  ViewModel: HelloWorldVM
});
