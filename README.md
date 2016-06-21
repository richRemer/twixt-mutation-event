twixt-mutation-event Function
=============================

```js
var EventTarget = require("twixt-event-target"),
    MutationEvent = require("twixt-mutation-event"),
    obj = EventTarget({foo: 42}),
    mutations = {},
    count = 0;

// example of proper
mutations.foo = obj.foo;    // mutations object holds original value
obj.foo = 13;   count++;    // increment mutation count
obj.foo = 23;   count++;    // increment mutation count
obj.foo = 23;               // count should not change if value does not change
mutations.bar = obj.bar;    // mutations object holds original value
obj.bar = 42;   count++;    // increment mutation count

obj.dispatchEvent(new MutationEvent(mutations, count));
```

