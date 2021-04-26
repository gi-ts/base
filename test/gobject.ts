import GObject from 'gobject';
{
    {
        GObject.registerClass as (...args: any[]) => {};

        const Subclass = GObject.registerClass(class Subclass extends GObject.Object { });
        const object = new Subclass();
        object.connect("notify", () => {

        });
        object.connect("not-a-signal", () => {

        });
    }
    {
        const Subclass = GObject.registerClass({}, class Subclass extends GObject.Object { });
        const object = new Subclass();
        object.connect("notify", () => {

        });
    }
    {
        const Subclass = GObject.registerClass({
            Signals: {
                "testing-signal": []
            }
        }, class Subclass extends GObject.Object { });
        const object = new Subclass();
        object.connect("notify", () => {

        });
        object.connect("testing-signal", () => {

        });
    }

    {
        const Subclass = GObject.registerClass({
            Properties: {

            }
        }, class Subclass extends GObject.Object { });
        const object = new Subclass();
        // @ts-expect-error
        object.x
    }

    {
        const Subclass = GObject.registerClass({
            Properties: {
                'x': GObject.ParamSpec.boolean()
            }
        }, class Subclass extends GObject.Object { });
        const object = new Subclass();
        // @ts-expect-error
        object.x
    }
}