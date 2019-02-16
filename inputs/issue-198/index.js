// bar.js
import Foo from './foo.js';
// `Foo` should be eq `1`. not an object ( `{ 'default': 1}` )
console.log(Foo);