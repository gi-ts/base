/**
 * Geoclue 2.0
 *
 * Generated from 2.0
 */

import * as GObject from "@gi-types/gobject";
import * as Gio from "@gi-types/gio";
import * as GLib from "@gi-types/glib";

export function client_interface_info(): Gio.DBusInterfaceInfo;
export function client_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function location_interface_info(): Gio.DBusInterfaceInfo;
export function location_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function manager_interface_info(): Gio.DBusInterfaceInfo;
export function manager_override_properties(klass: GObject.Object, property_id_begin: number): number;

export namespace AccuracyLevel {
    export const $gtype: GObject.GType<AccuracyLevel>;
}

export enum AccuracyLevel {
    NONE = 0,
    COUNTRY = 1,
    CITY = 4,
    NEIGHBORHOOD = 5,
    STREET = 6,
    EXACT = 8,
}

export namespace ClientProxyCreateFlags {
    export const $gtype: GObject.GType<ClientProxyCreateFlags>;
}

export enum ClientProxyCreateFlags {
    NONE = 0,
    AUTO_DELETE = 1,
}
export module ClientProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class ClientProxy
    extends Gio.DBusProxy
    implements Client, Gio.AsyncInitable<ClientProxy>, Gio.DBusInterface, Gio.Initable {
    static $gtype: GObject.GType<ClientProxy>;

    constructor(properties?: Partial<ClientProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ClientProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    active: boolean;
    desktop_id: string;
    desktopId: string;
    distance_threshold: number;
    distanceThreshold: number;
    location: string;
    requested_accuracy_level: number;
    requestedAccuracyLevel: number;
    time_threshold: number;
    timeThreshold: number;

    // Constructors

    static new_finish(res: Gio.AsyncResult): ClientProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): ClientProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ClientProxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ClientProxy;
    static new_sync(...args: never[]): never;

    // Members

    static create(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        cancellable?: Gio.Cancellable | null
    ): Promise<ClientProxy>;
    static create(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<ClientProxy> | null
    ): void;
    static create(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ClientProxy> | null
    ): Promise<ClientProxy> | void;
    static create_finish(result: Gio.AsyncResult): ClientProxy;
    static create_full(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        flags: ClientProxyCreateFlags,
        cancellable?: Gio.Cancellable | null
    ): Promise<ClientProxy>;
    static create_full(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        flags: ClientProxyCreateFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<ClientProxy> | null
    ): void;
    static create_full(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        flags: ClientProxyCreateFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ClientProxy> | null
    ): Promise<ClientProxy> | void;
    static create_full_finish(result: Gio.AsyncResult): ClientProxy;
    static create_full_sync(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        flags: ClientProxyCreateFlags,
        cancellable?: Gio.Cancellable | null
    ): ClientProxy;
    static create_sync(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        cancellable?: Gio.Cancellable | null
    ): ClientProxy;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<ClientProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<ClientProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ClientProxy> | null
    ): Promise<ClientProxy> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<ClientProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<ClientProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ClientProxy> | null
    ): Promise<ClientProxy> | void;
    static new_for_bus(...args: never[]): never;

    // Implemented Members

    call_start(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_start(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_start(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_start_finish(res: Gio.AsyncResult): boolean;
    call_start_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_stop(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_stop(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_stop(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_stop_finish(res: Gio.AsyncResult): boolean;
    call_stop_sync(cancellable?: Gio.Cancellable | null): boolean;
    complete_start(invocation: Gio.DBusMethodInvocation): void;
    complete_stop(invocation: Gio.DBusMethodInvocation): void;
    emit_location_updated(arg_old: string, arg_new: string): void;
    vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_location_updated(arg_old: string, arg_new: string): void;
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    init_finish(res: Gio.AsyncResult): boolean;
    new_finish(res: Gio.AsyncResult): ClientProxy;
    new_finish(...args: never[]): never;
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    vfunc_init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_init_finish(res: Gio.AsyncResult): boolean;
    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module ClientSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class ClientSkeleton extends Gio.DBusInterfaceSkeleton implements Client, Gio.DBusInterface {
    static $gtype: GObject.GType<ClientSkeleton>;

    constructor(properties?: Partial<ClientSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ClientSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    active: boolean;
    desktop_id: string;
    desktopId: string;
    distance_threshold: number;
    distanceThreshold: number;
    location: string;
    requested_accuracy_level: number;
    requestedAccuracyLevel: number;
    time_threshold: number;
    timeThreshold: number;

    // Constructors

    static ["new"](): ClientSkeleton;

    // Implemented Members

    call_start(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_start(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_start(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_start_finish(res: Gio.AsyncResult): boolean;
    call_start_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_stop(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_stop(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_stop(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_stop_finish(res: Gio.AsyncResult): boolean;
    call_stop_sync(cancellable?: Gio.Cancellable | null): boolean;
    complete_start(invocation: Gio.DBusMethodInvocation): void;
    complete_stop(invocation: Gio.DBusMethodInvocation): void;
    emit_location_updated(arg_old: string, arg_new: string): void;
    vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_location_updated(arg_old: string, arg_new: string): void;
    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
}
export module LocationProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class LocationProxy
    extends Gio.DBusProxy
    implements Location, Gio.AsyncInitable<LocationProxy>, Gio.DBusInterface, Gio.Initable {
    static $gtype: GObject.GType<LocationProxy>;

    constructor(properties?: Partial<LocationProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LocationProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    accuracy: number;
    altitude: number;
    description: string;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
    timestamp: GLib.Variant;

    // Constructors

    static new_finish(res: Gio.AsyncResult): LocationProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): LocationProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): LocationProxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): LocationProxy;
    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<LocationProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<LocationProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<LocationProxy> | null
    ): Promise<LocationProxy> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<LocationProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<LocationProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<LocationProxy> | null
    ): Promise<LocationProxy> | void;
    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    init_finish(res: Gio.AsyncResult): boolean;
    new_finish(res: Gio.AsyncResult): LocationProxy;
    new_finish(...args: never[]): never;
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    vfunc_init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_init_finish(res: Gio.AsyncResult): boolean;
    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module LocationSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class LocationSkeleton extends Gio.DBusInterfaceSkeleton implements Location, Gio.DBusInterface {
    static $gtype: GObject.GType<LocationSkeleton>;

    constructor(properties?: Partial<LocationSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LocationSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    accuracy: number;
    altitude: number;
    description: string;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
    timestamp: GLib.Variant;

    // Constructors

    static ["new"](): LocationSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
}
export module ManagerProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class ManagerProxy
    extends Gio.DBusProxy
    implements Manager, Gio.AsyncInitable<ManagerProxy>, Gio.DBusInterface, Gio.Initable {
    static $gtype: GObject.GType<ManagerProxy>;

    constructor(properties?: Partial<ManagerProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ManagerProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    available_accuracy_level: number;
    availableAccuracyLevel: number;
    in_use: boolean;
    inUse: boolean;

    // Constructors

    static new_finish(res: Gio.AsyncResult): ManagerProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): ManagerProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ManagerProxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ManagerProxy;
    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<ManagerProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<ManagerProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ManagerProxy> | null
    ): Promise<ManagerProxy> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<ManagerProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<ManagerProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ManagerProxy> | null
    ): Promise<ManagerProxy> | void;
    static new_for_bus(...args: never[]): never;

    // Implemented Members

    call_add_agent(arg_id: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_add_agent(
        arg_id: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_add_agent(
        arg_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_add_agent_finish(res: Gio.AsyncResult): boolean;
    call_add_agent_sync(arg_id: string, cancellable?: Gio.Cancellable | null): boolean;
    call_create_client(cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_create_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_create_client(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_create_client_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_client_sync(cancellable?: Gio.Cancellable | null): [boolean, string | null];
    call_delete_client(arg_client: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_delete_client(
        arg_client: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_delete_client(
        arg_client: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_delete_client_finish(res: Gio.AsyncResult): boolean;
    call_delete_client_sync(arg_client: string, cancellable?: Gio.Cancellable | null): boolean;
    call_get_client(cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_get_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_get_client(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_get_client_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_get_client_sync(cancellable?: Gio.Cancellable | null): [boolean, string | null];
    complete_add_agent(invocation: Gio.DBusMethodInvocation): void;
    complete_create_client(invocation: Gio.DBusMethodInvocation, client: string): void;
    complete_delete_client(invocation: Gio.DBusMethodInvocation): void;
    complete_get_client(invocation: Gio.DBusMethodInvocation, client: string): void;
    vfunc_handle_add_agent(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean;
    vfunc_handle_create_client(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_delete_client(invocation: Gio.DBusMethodInvocation, arg_client: string): boolean;
    vfunc_handle_get_client(invocation: Gio.DBusMethodInvocation): boolean;
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    init_finish(res: Gio.AsyncResult): boolean;
    new_finish(res: Gio.AsyncResult): ManagerProxy;
    new_finish(...args: never[]): never;
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    vfunc_init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_init_finish(res: Gio.AsyncResult): boolean;
    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module ManagerSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class ManagerSkeleton extends Gio.DBusInterfaceSkeleton implements Manager, Gio.DBusInterface {
    static $gtype: GObject.GType<ManagerSkeleton>;

    constructor(properties?: Partial<ManagerSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ManagerSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    available_accuracy_level: number;
    availableAccuracyLevel: number;
    in_use: boolean;
    inUse: boolean;

    // Constructors

    static ["new"](): ManagerSkeleton;

    // Implemented Members

    call_add_agent(arg_id: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_add_agent(
        arg_id: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_add_agent(
        arg_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_add_agent_finish(res: Gio.AsyncResult): boolean;
    call_add_agent_sync(arg_id: string, cancellable?: Gio.Cancellable | null): boolean;
    call_create_client(cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_create_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_create_client(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_create_client_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_client_sync(cancellable?: Gio.Cancellable | null): [boolean, string | null];
    call_delete_client(arg_client: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_delete_client(
        arg_client: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_delete_client(
        arg_client: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_delete_client_finish(res: Gio.AsyncResult): boolean;
    call_delete_client_sync(arg_client: string, cancellable?: Gio.Cancellable | null): boolean;
    call_get_client(cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_get_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_get_client(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_get_client_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_get_client_sync(cancellable?: Gio.Cancellable | null): [boolean, string | null];
    complete_add_agent(invocation: Gio.DBusMethodInvocation): void;
    complete_create_client(invocation: Gio.DBusMethodInvocation, client: string): void;
    complete_delete_client(invocation: Gio.DBusMethodInvocation): void;
    complete_get_client(invocation: Gio.DBusMethodInvocation, client: string): void;
    vfunc_handle_add_agent(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean;
    vfunc_handle_create_client(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_delete_client(invocation: Gio.DBusMethodInvocation, arg_client: string): boolean;
    vfunc_handle_get_client(invocation: Gio.DBusMethodInvocation): boolean;
    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
}
export module Simple {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        accuracy_level: AccuracyLevel;
        accuracyLevel: AccuracyLevel;
        client: ClientProxy;
        desktop_id: string;
        desktopId: string;
        location: LocationProxy;
    }
}
export class Simple extends GObject.Object implements Gio.AsyncInitable<Simple> {
    static $gtype: GObject.GType<Simple>;

    constructor(properties?: Partial<Simple.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Simple.ConstructorProperties>, ...args: any[]): void;

    // Properties
    accuracy_level: AccuracyLevel;
    accuracyLevel: AccuracyLevel;
    client: ClientProxy;
    desktop_id: string;
    desktopId: string;
    location: LocationProxy;

    // Constructors

    static new_finish(result: Gio.AsyncResult): Simple;
    static new_finish(...args: never[]): never;
    static new_sync(desktop_id: string, accuracy_level: AccuracyLevel, cancellable?: Gio.Cancellable | null): Simple;

    // Members

    get_client(): ClientProxy;
    get_location(): LocationProxy;
    static new(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        cancellable?: Gio.Cancellable | null
    ): Promise<Simple>;
    static new(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Simple> | null
    ): void;
    static new(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Simple> | null
    ): Promise<Simple> | void;

    // Implemented Members

    init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    init_finish(res: Gio.AsyncResult): boolean;
    new_finish(res: Gio.AsyncResult): Simple;
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    vfunc_init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_init_finish(res: Gio.AsyncResult): boolean;
}

export class ClientProxyPrivate {
    static $gtype: GObject.GType<ClientProxyPrivate>;

    constructor(copy: ClientProxyPrivate);
}

export class ClientSkeletonPrivate {
    static $gtype: GObject.GType<ClientSkeletonPrivate>;

    constructor(copy: ClientSkeletonPrivate);
}

export class LocationProxyPrivate {
    static $gtype: GObject.GType<LocationProxyPrivate>;

    constructor(copy: LocationProxyPrivate);
}

export class LocationSkeletonPrivate {
    static $gtype: GObject.GType<LocationSkeletonPrivate>;

    constructor(copy: LocationSkeletonPrivate);
}

export class ManagerProxyPrivate {
    static $gtype: GObject.GType<ManagerProxyPrivate>;

    constructor(copy: ManagerProxyPrivate);
}

export class ManagerSkeletonPrivate {
    static $gtype: GObject.GType<ManagerSkeletonPrivate>;

    constructor(copy: ManagerSkeletonPrivate);
}

export class SimplePrivate {
    static $gtype: GObject.GType<SimplePrivate>;

    constructor(copy: SimplePrivate);
}

export interface ClientNamespace {
    $gtype: GObject.GType<Client>;
    prototype: ClientPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type Client = ClientPrototype;
export interface ClientPrototype extends GObject.Object {
    // Properties
    active: boolean;
    desktop_id: string;
    desktopId: string;
    distance_threshold: number;
    distanceThreshold: number;
    location: string;
    requested_accuracy_level: number;
    requestedAccuracyLevel: number;
    time_threshold: number;
    timeThreshold: number;

    // Members

    call_start(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_start(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_start(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_start_finish(res: Gio.AsyncResult): boolean;
    call_start_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_stop(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_stop(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_stop(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_stop_finish(res: Gio.AsyncResult): boolean;
    call_stop_sync(cancellable?: Gio.Cancellable | null): boolean;
    complete_start(invocation: Gio.DBusMethodInvocation): void;
    complete_stop(invocation: Gio.DBusMethodInvocation): void;
    emit_location_updated(arg_old: string, arg_new: string): void;
    vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_location_updated(arg_old: string, arg_new: string): void;
}

export const Client: ClientNamespace;

export interface LocationNamespace {
    $gtype: GObject.GType<Location>;
    prototype: LocationPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type Location = LocationPrototype;
export interface LocationPrototype extends GObject.Object {
    // Properties
    accuracy: number;
    altitude: number;
    description: string;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
    timestamp: GLib.Variant;
}

export const Location: LocationNamespace;

export interface ManagerNamespace {
    $gtype: GObject.GType<Manager>;
    prototype: ManagerPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type Manager = ManagerPrototype;
export interface ManagerPrototype extends GObject.Object {
    // Properties
    available_accuracy_level: number;
    availableAccuracyLevel: number;
    in_use: boolean;
    inUse: boolean;

    // Members

    call_add_agent(arg_id: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_add_agent(
        arg_id: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_add_agent(
        arg_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_add_agent_finish(res: Gio.AsyncResult): boolean;
    call_add_agent_sync(arg_id: string, cancellable?: Gio.Cancellable | null): boolean;
    call_create_client(cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_create_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_create_client(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_create_client_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_client_sync(cancellable?: Gio.Cancellable | null): [boolean, string | null];
    call_delete_client(arg_client: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_delete_client(
        arg_client: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_delete_client(
        arg_client: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_delete_client_finish(res: Gio.AsyncResult): boolean;
    call_delete_client_sync(arg_client: string, cancellable?: Gio.Cancellable | null): boolean;
    call_get_client(cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_get_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_get_client(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_get_client_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_get_client_sync(cancellable?: Gio.Cancellable | null): [boolean, string | null];
    complete_add_agent(invocation: Gio.DBusMethodInvocation): void;
    complete_create_client(invocation: Gio.DBusMethodInvocation, client: string): void;
    complete_delete_client(invocation: Gio.DBusMethodInvocation): void;
    complete_get_client(invocation: Gio.DBusMethodInvocation, client: string): void;
    vfunc_handle_add_agent(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean;
    vfunc_handle_create_client(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_delete_client(invocation: Gio.DBusMethodInvocation, arg_client: string): boolean;
    vfunc_handle_get_client(invocation: Gio.DBusMethodInvocation): boolean;
}

export const Manager: ManagerNamespace;
