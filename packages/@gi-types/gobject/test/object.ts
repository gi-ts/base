import GObject from '@gi-types/gobject';

const ChildObject = GObject.registerClass(class extends GObject.Object {
    x: number;

    _init() {
        super._init();

        this.x = 5;
    }
    
    doX() {

    }
});

const child = new ChildObject();

child.x;
child.doX();

const ChildObjectWithConstructorParams = GObject.registerClass(class extends GObject.Object {
    x: number;

    _init(properties: { a: number, b: string, c: boolean }, d: number, e: boolean) {
        super._init();

        this.x = 5;
    }
    
    doX() {

    }
});

const child2 = new ChildObjectWithConstructorParams({
    a: 5,
    b: '',
    c: false
}, 5, true);

child2.connect("notify", () => {

});

const ChildObjectWithProperties = GObject.registerClass({
    Properties: {
        'snake-case': GObject.ParamSpec.boolean('snake-case', 'snake case', 'a snake case prop', GObject.ParamFlags.READWRITE, false),
        'normal': GObject.ParamSpec.string('normal', 'normal', 'a normal prop', GObject.ParamFlags.READABLE, '')
    }
}, class extends GObject.Object {
    x: number;

    _init() {
        super._init();
    }
});

const child3 = new ChildObjectWithProperties();

child3.normal
child3.snakeCase
child3.snake_case