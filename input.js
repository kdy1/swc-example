export class Foo {
    func(a, b = Date.now()) {
        return { a };
    }
}

function func(a, b = Date.now()) {
    return { a };
}

_createClass(Foo, [{
    key: 'func',
    value: function func(a, b = Date.now()) {

        return {
            a: a
        };
    }
}]);