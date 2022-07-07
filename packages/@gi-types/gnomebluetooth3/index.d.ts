/**
 * GnomeBluetooth 3.0
 *
 * Generated from 3.0
 */

import * as GObject from "@gi-types/gobject2";
import * as Gio from "@gi-types/gio2";

export const TYPE_AUDIO: number;
export const TYPE_INPUT: number;
export function appearance_to_type(appearance: number): Type;
export function class_to_type(_class: number): Type;
export function send_to_address(address: string, alias: string): boolean;
export function type_to_string(type: number): string;
export function uuid_to_string(uuid: string): string;
export function verify_address(bdaddr: string): boolean;

export namespace BatteryType {
    export const $gtype: GObject.GType<BatteryType>;
}

export enum BatteryType {
    NONE = 0,
    PERCENTAGE = 1,
    COARSE = 2,
}

export namespace Type {
    export const $gtype: GObject.GType<Type>;
}

export enum Type {
    ANY = 1,
    PHONE = 2,
    MODEM = 4,
    COMPUTER = 8,
    NETWORK = 16,
    HEADSET = 32,
    HEADPHONES = 64,
    OTHER_AUDIO = 128,
    KEYBOARD = 256,
    MOUSE = 512,
    CAMERA = 1024,
    PRINTER = 2048,
    JOYPAD = 4096,
    TABLET = 8192,
    VIDEO = 16384,
    REMOTE_CONTROL = 32768,
    SCANNER = 65536,
    DISPLAY = 131072,
    WEARABLE = 262144,
    TOY = 524288,
    SPEAKERS = 1048576,
}
export module Client {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        default_adapter: string;
        defaultAdapter: string;
        default_adapter_address: string;
        defaultAdapterAddress: string;
        default_adapter_name: string;
        defaultAdapterName: string;
        default_adapter_powered: boolean;
        defaultAdapterPowered: boolean;
        default_adapter_setup_mode: boolean;
        defaultAdapterSetupMode: boolean;
        num_adapters: number;
        numAdapters: number;
    }
}
export class Client extends GObject.Object {
    static $gtype: GObject.GType<Client>;

    constructor(properties?: Partial<Client.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Client.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get default_adapter(): string;
    get defaultAdapter(): string;
    get default_adapter_address(): string;
    get defaultAdapterAddress(): string;
    get default_adapter_name(): string;
    get defaultAdapterName(): string;
    get default_adapter_powered(): boolean;
    set default_adapter_powered(val: boolean);
    get defaultAdapterPowered(): boolean;
    set defaultAdapterPowered(val: boolean);
    get default_adapter_setup_mode(): boolean;
    set default_adapter_setup_mode(val: boolean);
    get defaultAdapterSetupMode(): boolean;
    set defaultAdapterSetupMode(val: boolean);
    get num_adapters(): number;
    get numAdapters(): number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "device-added", callback: (_source: this, device: GObject.Object) => void): number;
    connect_after(signal: "device-added", callback: (_source: this, device: GObject.Object) => void): number;
    emit(signal: "device-added", device: GObject.Object): void;
    connect(signal: "device-removed", callback: (_source: this, device: string) => void): number;
    connect_after(signal: "device-removed", callback: (_source: this, device: string) => void): number;
    emit(signal: "device-removed", device: string): void;

    // Constructors

    static ["new"](): Client;

    // Members

    connect_service(path: string, connect: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    connect_service(
        path: string,
        connect: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    connect_service(
        path: string,
        connect: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    connect_service_finish(res: Gio.AsyncResult): boolean;
    get_devices(): Gio.ListStore;
    has_connected_input_devices(): boolean;
}
export module Device {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        address: string;
        alias: string;
        battery_level: number;
        batteryLevel: number;
        battery_percentage: number;
        batteryPercentage: number;
        connectable: boolean;
        connected: boolean;
        icon: string;
        legacy_pairing: boolean;
        legacyPairing: boolean;
        name: string;
        paired: boolean;
        proxy: Gio.DBusProxy;
        trusted: boolean;
        uuids: string[];
    }
}
export class Device extends GObject.Object {
    static $gtype: GObject.GType<Device>;

    constructor(properties?: Partial<Device.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Device.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get address(): string;
    set address(val: string);
    get alias(): string;
    set alias(val: string);
    get battery_level(): number;
    set battery_level(val: number);
    get batteryLevel(): number;
    set batteryLevel(val: number);
    get battery_percentage(): number;
    set battery_percentage(val: number);
    get batteryPercentage(): number;
    set batteryPercentage(val: number);
    get connectable(): boolean;
    get connected(): boolean;
    set connected(val: boolean);
    get icon(): string;
    set icon(val: string);
    get legacy_pairing(): boolean;
    set legacy_pairing(val: boolean);
    get legacyPairing(): boolean;
    set legacyPairing(val: boolean);
    get name(): string;
    set name(val: string);
    get paired(): boolean;
    set paired(val: boolean);
    get proxy(): Gio.DBusProxy;
    set proxy(val: Gio.DBusProxy);
    get trusted(): boolean;
    set trusted(val: boolean);
    get uuids(): string[];
    set uuids(val: string[]);

    // Members

    dump(): void;
    get_object_path(): string;
    to_string(): string;
}
