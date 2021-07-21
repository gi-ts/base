/**
 * UPowerGlib 1.0
 *
 * Generated from 0.99.12
 */

import * as GObject from "@gi-types/gobject2";
import * as Gio from "@gi-types/gio2";

export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;

export namespace DeviceKind {
    export const $gtype: GObject.GType<DeviceKind>;
}

export enum DeviceKind {
    UNKNOWN = 0,
    LINE_POWER = 1,
    BATTERY = 2,
    UPS = 3,
    MONITOR = 4,
    MOUSE = 5,
    KEYBOARD = 6,
    PDA = 7,
    PHONE = 8,
    MEDIA_PLAYER = 9,
    TABLET = 10,
    COMPUTER = 11,
    GAMING_INPUT = 12,
    PEN = 13,
    TOUCHPAD = 14,
    MODEM = 15,
    NETWORK = 16,
    HEADSET = 17,
    SPEAKERS = 18,
    HEADPHONES = 19,
    VIDEO = 20,
    OTHER_AUDIO = 21,
    REMOTE_CONTROL = 22,
    PRINTER = 23,
    SCANNER = 24,
    CAMERA = 25,
    WEARABLE = 26,
    TOY = 27,
    BLUETOOTH_GENERIC = 28,
    LAST = 29,
}

export namespace DeviceLevel {
    export const $gtype: GObject.GType<DeviceLevel>;
}

export enum DeviceLevel {
    UNKNOWN = 0,
    NONE = 1,
    DISCHARGING = 2,
    LOW = 3,
    CRITICAL = 4,
    ACTION = 5,
    NORMAL = 6,
    HIGH = 7,
    FULL = 8,
    LAST = 9,
}

export namespace DeviceState {
    export const $gtype: GObject.GType<DeviceState>;
}

export enum DeviceState {
    UNKNOWN = 0,
    CHARGING = 1,
    DISCHARGING = 2,
    EMPTY = 3,
    FULLY_CHARGED = 4,
    PENDING_CHARGE = 5,
    PENDING_DISCHARGE = 6,
    LAST = 7,
}

export namespace DeviceTechnology {
    export const $gtype: GObject.GType<DeviceTechnology>;
}

export enum DeviceTechnology {
    UNKNOWN = 0,
    LITHIUM_ION = 1,
    LITHIUM_POLYMER = 2,
    LITHIUM_IRON_PHOSPHATE = 3,
    LEAD_ACID = 4,
    NICKEL_CADMIUM = 5,
    NICKEL_METAL_HYDRIDE = 6,
    LAST = 7,
}
export module Client {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        daemon_version: string;
        daemonVersion: string;
        lid_is_closed: boolean;
        lidIsClosed: boolean;
        lid_is_present: boolean;
        lidIsPresent: boolean;
        on_battery: boolean;
        onBattery: boolean;
    }
}
export class Client extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<Client>;

    constructor(properties?: Partial<Client.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Client.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get daemon_version(): string;
    get daemonVersion(): string;
    get lid_is_closed(): boolean;
    get lidIsClosed(): boolean;
    get lid_is_present(): boolean;
    get lidIsPresent(): boolean;
    get on_battery(): boolean;
    get onBattery(): boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "device-added", callback: (_source: this, device: Device) => void): number;
    connect_after(signal: "device-added", callback: (_source: this, device: Device) => void): number;
    emit(signal: "device-added", device: Device): void;
    connect(signal: "device-removed", callback: (_source: this, object_path: string) => void): number;
    connect_after(signal: "device-removed", callback: (_source: this, object_path: string) => void): number;
    emit(signal: "device-removed", object_path: string): void;

    // Constructors

    static ["new"](): Client;
    static new_full(cancellable?: Gio.Cancellable | null): Client;

    // Members

    get_critical_action(): string;
    get_daemon_version(): string;
    get_devices(): Device[];
    get_devices2(): Device[];
    get_display_device(): Device;
    get_lid_is_closed(): boolean;
    get_lid_is_present(): boolean;
    get_on_battery(): boolean;
    vfunc_device_added(device: Device): void;
    vfunc_device_removed(object_path: string): void;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module Device {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        battery_level: number;
        batteryLevel: number;
        capacity: number;
        energy: number;
        energy_empty: number;
        energyEmpty: number;
        energy_full: number;
        energyFull: number;
        energy_full_design: number;
        energyFullDesign: number;
        energy_rate: number;
        energyRate: number;
        has_history: boolean;
        hasHistory: boolean;
        has_statistics: boolean;
        hasStatistics: boolean;
        icon_name: string;
        iconName: string;
        is_present: boolean;
        isPresent: boolean;
        is_rechargeable: boolean;
        isRechargeable: boolean;
        kind: number;
        luminosity: number;
        model: string;
        native_path: string;
        nativePath: string;
        online: boolean;
        percentage: number;
        power_supply: boolean;
        powerSupply: boolean;
        serial: string;
        state: number;
        technology: number;
        temperature: number;
        time_to_empty: number;
        timeToEmpty: number;
        time_to_full: number;
        timeToFull: number;
        update_time: number;
        updateTime: number;
        vendor: string;
        voltage: number;
        warning_level: number;
        warningLevel: number;
    }
}
export class Device extends GObject.Object {
    static $gtype: GObject.GType<Device>;

    constructor(properties?: Partial<Device.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Device.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get battery_level(): number;
    set battery_level(val: number);
    get batteryLevel(): number;
    set batteryLevel(val: number);
    get capacity(): number;
    set capacity(val: number);
    get energy(): number;
    set energy(val: number);
    get energy_empty(): number;
    set energy_empty(val: number);
    get energyEmpty(): number;
    set energyEmpty(val: number);
    get energy_full(): number;
    set energy_full(val: number);
    get energyFull(): number;
    set energyFull(val: number);
    get energy_full_design(): number;
    set energy_full_design(val: number);
    get energyFullDesign(): number;
    set energyFullDesign(val: number);
    get energy_rate(): number;
    set energy_rate(val: number);
    get energyRate(): number;
    set energyRate(val: number);
    get has_history(): boolean;
    set has_history(val: boolean);
    get hasHistory(): boolean;
    set hasHistory(val: boolean);
    get has_statistics(): boolean;
    set has_statistics(val: boolean);
    get hasStatistics(): boolean;
    set hasStatistics(val: boolean);
    get icon_name(): string;
    set icon_name(val: string);
    get iconName(): string;
    set iconName(val: string);
    get is_present(): boolean;
    set is_present(val: boolean);
    get isPresent(): boolean;
    set isPresent(val: boolean);
    get is_rechargeable(): boolean;
    set is_rechargeable(val: boolean);
    get isRechargeable(): boolean;
    set isRechargeable(val: boolean);
    get kind(): number;
    set kind(val: number);
    get luminosity(): number;
    set luminosity(val: number);
    get model(): string;
    set model(val: string);
    get native_path(): string;
    set native_path(val: string);
    get nativePath(): string;
    set nativePath(val: string);
    get online(): boolean;
    set online(val: boolean);
    get percentage(): number;
    set percentage(val: number);
    get power_supply(): boolean;
    set power_supply(val: boolean);
    get powerSupply(): boolean;
    set powerSupply(val: boolean);
    get serial(): string;
    set serial(val: string);
    get state(): number;
    set state(val: number);
    get technology(): number;
    set technology(val: number);
    get temperature(): number;
    set temperature(val: number);
    get time_to_empty(): number;
    set time_to_empty(val: number);
    get timeToEmpty(): number;
    set timeToEmpty(val: number);
    get time_to_full(): number;
    set time_to_full(val: number);
    get timeToFull(): number;
    set timeToFull(val: number);
    get update_time(): number;
    set update_time(val: number);
    get updateTime(): number;
    set updateTime(val: number);
    get vendor(): string;
    set vendor(val: string);
    get voltage(): number;
    set voltage(val: number);
    get warning_level(): number;
    set warning_level(val: number);
    get warningLevel(): number;
    set warningLevel(val: number);

    // Constructors

    static ["new"](): Device;

    // Members

    get_history_sync(
        type: string,
        timespec: number,
        resolution: number,
        cancellable?: Gio.Cancellable | null
    ): HistoryItem[];
    get_object_path(): string;
    get_statistics_sync(type: string, cancellable?: Gio.Cancellable | null): StatsItem[];
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean;
    set_object_path_sync(object_path: string, cancellable?: Gio.Cancellable | null): boolean;
    to_text(): string;
    static kind_from_string(type: string): DeviceKind;
    static kind_to_string(type_enum: DeviceKind): string;
    static level_from_string(level: string): DeviceLevel;
    static level_to_string(level_enum: DeviceLevel): string;
    static state_from_string(state: string): DeviceState;
    static state_to_string(state_enum: DeviceState): string;
    static technology_from_string(technology: string): DeviceTechnology;
    static technology_to_string(technology_enum: DeviceTechnology): string;
}
export module HistoryItem {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        state: number;
        time: number;
        value: number;
    }
}
export class HistoryItem extends GObject.Object {
    static $gtype: GObject.GType<HistoryItem>;

    constructor(properties?: Partial<HistoryItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HistoryItem.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get state(): number;
    set state(val: number);
    get time(): number;
    set time(val: number);
    get value(): number;
    set value(val: number);

    // Constructors

    static ["new"](): HistoryItem;

    // Members

    get_state(): DeviceState;
    get_time(): number;
    get_value(): number;
    set_from_string(text: string): boolean;
    set_state(state: DeviceState): void;
    set_time(time: number): void;
    set_time_to_present(): void;
    set_value(value: number): void;
    to_string(): string;
}
export module StatsItem {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        accuracy: number;
        value: number;
    }
}
export class StatsItem extends GObject.Object {
    static $gtype: GObject.GType<StatsItem>;

    constructor(properties?: Partial<StatsItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StatsItem.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get accuracy(): number;
    set accuracy(val: number);
    get value(): number;
    set value(val: number);

    // Constructors

    static ["new"](): StatsItem;

    // Members

    get_accuracy(): number;
    get_value(): number;
    set_accuracy(accuracy: number): void;
    set_value(value: number): void;
}
export module WakeupItem {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        cmdline: string;
        details: string;
        id: number;
        is_userspace: boolean;
        isUserspace: boolean;
        old: number;
        value: number;
    }
}
export class WakeupItem extends GObject.Object {
    static $gtype: GObject.GType<WakeupItem>;

    constructor(properties?: Partial<WakeupItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WakeupItem.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get cmdline(): string;
    set cmdline(val: string);
    get details(): string;
    set details(val: string);
    get id(): number;
    set id(val: number);
    get is_userspace(): boolean;
    set is_userspace(val: boolean);
    get isUserspace(): boolean;
    set isUserspace(val: boolean);
    get old(): number;
    set old(val: number);
    get value(): number;
    set value(val: number);

    // Constructors

    static ["new"](): WakeupItem;

    // Members

    get_cmdline(): string;
    get_details(): string;
    get_id(): number;
    get_is_userspace(): boolean;
    get_old(): number;
    get_value(): number;
    set_cmdline(cmdline: string): void;
    set_details(details: string): void;
    set_id(id: number): void;
    set_is_userspace(is_userspace: boolean): void;
    set_old(old: number): void;
    set_value(value: number): void;
}
export module Wakeups {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Wakeups extends GObject.Object {
    static $gtype: GObject.GType<Wakeups>;

    constructor(properties?: Partial<Wakeups.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Wakeups.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "data-changed", callback: (_source: this) => void): number;
    connect_after(signal: "data-changed", callback: (_source: this) => void): number;
    emit(signal: "data-changed"): void;
    connect(signal: "total-changed", callback: (_source: this, object: number) => void): number;
    connect_after(signal: "total-changed", callback: (_source: this, object: number) => void): number;
    emit(signal: "total-changed", object: number): void;

    // Constructors

    static ["new"](): Wakeups;

    // Members

    get_data_sync(cancellable?: Gio.Cancellable | null): WakeupItem[];
    get_has_capability(): boolean;
    get_properties_sync(cancellable?: Gio.Cancellable | null): boolean;
    get_total_sync(cancellable?: Gio.Cancellable | null): number;
    vfunc_data_changed(): void;
    vfunc_total_changed(value: number): void;
}

export class ClientPrivate {
    static $gtype: GObject.GType<ClientPrivate>;

    constructor(copy: ClientPrivate);
}

export class DevicePrivate {
    static $gtype: GObject.GType<DevicePrivate>;

    constructor(copy: DevicePrivate);
}

export class HistoryItemPrivate {
    static $gtype: GObject.GType<HistoryItemPrivate>;

    constructor(copy: HistoryItemPrivate);
}

export class StatsItemPrivate {
    static $gtype: GObject.GType<StatsItemPrivate>;

    constructor(copy: StatsItemPrivate);
}

export class WakeupItemPrivate {
    static $gtype: GObject.GType<WakeupItemPrivate>;

    constructor(copy: WakeupItemPrivate);
}

export class WakeupsPrivate {
    static $gtype: GObject.GType<WakeupsPrivate>;

    constructor(copy: WakeupsPrivate);
}
