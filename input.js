import foo, { test } from 'foo';
import * as bar from 'bar';

/**
 * Foo
 */
class Foo extends
    Bar {

    foo() {
        import("foo").then(foo => { });
    }
}