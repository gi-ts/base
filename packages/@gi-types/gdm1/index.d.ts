/**
 * Gdm 1.0
 *
 * Generated from 1.0
 */

import * as GObject from "@gi-types/gobject2";
import * as Gio from "@gi-types/gio2";
import * as GLib from "@gi-types/glib2";

export function chooser_interface_info(): Gio.DBusInterfaceInfo;
export function chooser_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function get_session_ids(): string[];
export function get_session_name_and_description(id: string): [string, string];
export function goto_login_session_sync(cancellable?: Gio.Cancellable | null): boolean;
export function greeter_interface_info(): Gio.DBusInterfaceInfo;
export function greeter_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function manager_interface_info(): Gio.DBusInterfaceInfo;
export function manager_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function remote_greeter_interface_info(): Gio.DBusInterfaceInfo;
export function remote_greeter_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function user_verifier_choice_list_interface_info(): Gio.DBusInterfaceInfo;
export function user_verifier_choice_list_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function user_verifier_interface_info(): Gio.DBusInterfaceInfo;
export function user_verifier_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function worker_manager_interface_info(): Gio.DBusInterfaceInfo;
export function worker_manager_override_properties(klass: GObject.Object, property_id_begin: number): number;

export namespace ClientError {
    export const $gtype: GObject.GType<ClientError>;
}

export enum ClientError {
    CLIENT_ERROR_GENERIC = 0,
}
export module ChooserProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class ChooserProxy
    extends Gio.DBusProxy
    implements Chooser, Gio.AsyncInitable<ChooserProxy>, Gio.DBusInterface, Gio.Initable {
    static $gtype: GObject.GType<ChooserProxy>;

    constructor(properties?: Partial<ChooserProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ChooserProxy.ConstructorProperties>, ...args: any[]): void;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ChooserProxy> | null
    ): void;
    // Conflicted with Gio.DBusProxy.new
    static new(...args: never[]): any;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ChooserProxy> | null
    ): void;
    // Conflicted with Gio.DBusProxy.new_for_bus
    static new_for_bus(...args: never[]): any;

    // Implemented Members

    call_disconnect(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_disconnect(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_disconnect_finish(res: Gio.AsyncResult): boolean;
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_select_hostname(arg_hostname: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_select_hostname(
        arg_hostname: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_select_hostname(
        arg_hostname: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_select_hostname_finish(res: Gio.AsyncResult): boolean;
    call_select_hostname_sync(arg_hostname: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
    complete_select_hostname(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_select_hostname(invocation: Gio.DBusMethodInvocation, arg_hostname: string): boolean;
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
    new_finish(res: Gio.AsyncResult): ChooserProxy;
    // Conflicted with Gio.DBusProxy.new_finish
    new_finish(...args: never[]): any;
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
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module ChooserSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class ChooserSkeleton extends Gio.DBusInterfaceSkeleton implements Chooser, Gio.DBusInterface {
    static $gtype: GObject.GType<ChooserSkeleton>;

    constructor(properties?: Partial<ChooserSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ChooserSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Members

    call_disconnect(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_disconnect(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_disconnect_finish(res: Gio.AsyncResult): boolean;
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_select_hostname(arg_hostname: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_select_hostname(
        arg_hostname: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_select_hostname(
        arg_hostname: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_select_hostname_finish(res: Gio.AsyncResult): boolean;
    call_select_hostname_sync(arg_hostname: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
    complete_select_hostname(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_select_hostname(invocation: Gio.DBusMethodInvocation, arg_hostname: string): boolean;
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
}
export module Client {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Client extends GObject.Object {
    static $gtype: GObject.GType<Client>;

    constructor(properties?: Partial<Client.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Client.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Client;

    // Members

    get_chooser(cancellable?: Gio.Cancellable | null): Promise<Chooser>;
    get_chooser(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    get_chooser(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Chooser> | void;
    get_chooser_finish(result: Gio.AsyncResult): Chooser;
    get_chooser_sync(cancellable?: Gio.Cancellable | null): Chooser;
    get_greeter(cancellable?: Gio.Cancellable | null): Promise<Greeter>;
    get_greeter(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    get_greeter(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Greeter> | void;
    get_greeter_finish(result: Gio.AsyncResult): Greeter;
    get_greeter_sync(cancellable?: Gio.Cancellable | null): Greeter;
    get_remote_greeter(cancellable?: Gio.Cancellable | null): Promise<RemoteGreeter>;
    get_remote_greeter(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    get_remote_greeter(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<RemoteGreeter> | void;
    get_remote_greeter_finish(result: Gio.AsyncResult): RemoteGreeter;
    get_remote_greeter_sync(cancellable?: Gio.Cancellable | null): RemoteGreeter;
    get_user_verifier(cancellable?: Gio.Cancellable | null): Promise<UserVerifier>;
    get_user_verifier(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    get_user_verifier(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<UserVerifier> | void;
    get_user_verifier_choice_list(): UserVerifierChoiceList;
    get_user_verifier_finish(result: Gio.AsyncResult): UserVerifier;
    get_user_verifier_sync(cancellable?: Gio.Cancellable | null): UserVerifier;
    open_reauthentication_channel(username: string, cancellable?: Gio.Cancellable | null): Promise<UserVerifier>;
    open_reauthentication_channel(
        username: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    open_reauthentication_channel(
        username: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<UserVerifier> | void;
    open_reauthentication_channel_finish(result: Gio.AsyncResult): UserVerifier;
    open_reauthentication_channel_sync(username: string, cancellable?: Gio.Cancellable | null): UserVerifier;
    set_enabled_extensions(extensions: string[]): void;
    static error_quark(): GLib.Quark;
}
export module GreeterProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class GreeterProxy
    extends Gio.DBusProxy
    implements Greeter, Gio.AsyncInitable<GreeterProxy>, Gio.DBusInterface, Gio.Initable {
    static $gtype: GObject.GType<GreeterProxy>;

    constructor(properties?: Partial<GreeterProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GreeterProxy.ConstructorProperties>, ...args: any[]): void;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GreeterProxy> | null
    ): void;
    // Conflicted with Gio.DBusProxy.new
    static new(...args: never[]): any;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GreeterProxy> | null
    ): void;
    // Conflicted with Gio.DBusProxy.new_for_bus
    static new_for_bus(...args: never[]): any;

    // Implemented Members

    call_begin_auto_login(arg_username: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_begin_auto_login(
        arg_username: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_begin_auto_login(
        arg_username: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_begin_auto_login_finish(res: Gio.AsyncResult): boolean;
    call_begin_auto_login_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean;
    call_get_timed_login_details(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_get_timed_login_details(
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_get_timed_login_details(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_get_timed_login_details_finish(
        out_enabled: boolean,
        out_username: string,
        out_delay: number,
        res: Gio.AsyncResult
    ): boolean;
    call_get_timed_login_details_sync(
        out_enabled: boolean,
        out_username: string,
        out_delay: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_select_session(arg_session: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_select_session(
        arg_session: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_select_session(
        arg_session: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_select_session_finish(res: Gio.AsyncResult): boolean;
    call_select_session_sync(arg_session: string, cancellable?: Gio.Cancellable | null): boolean;
    call_select_user(arg_username: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_select_user(
        arg_username: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_select_user(
        arg_username: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_select_user_finish(res: Gio.AsyncResult): boolean;
    call_select_user_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean;
    call_start_session_when_ready(
        arg_service_name: string,
        arg_should_start_session: boolean,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_start_session_when_ready(
        arg_service_name: string,
        arg_should_start_session: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_start_session_when_ready(
        arg_service_name: string,
        arg_should_start_session: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_start_session_when_ready_finish(res: Gio.AsyncResult): boolean;
    call_start_session_when_ready_sync(
        arg_service_name: string,
        arg_should_start_session: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    complete_begin_auto_login(invocation: Gio.DBusMethodInvocation): void;
    complete_get_timed_login_details(
        invocation: Gio.DBusMethodInvocation,
        enabled: boolean,
        username: string,
        delay: number
    ): void;
    complete_select_session(invocation: Gio.DBusMethodInvocation): void;
    complete_select_user(invocation: Gio.DBusMethodInvocation): void;
    complete_start_session_when_ready(invocation: Gio.DBusMethodInvocation): void;
    emit_default_language_name_changed(arg_language_name: string): void;
    emit_default_session_name_changed(arg_session_name: string): void;
    emit_reauthenticated(arg_service_name: string): void;
    emit_selected_user_changed(arg_username: string): void;
    emit_session_opened(arg_service_name: string): void;
    emit_timed_login_requested(arg_username: string, arg_delay: number): void;
    vfunc_default_language_name_changed(arg_language_name: string): void;
    vfunc_default_session_name_changed(arg_session_name: string): void;
    vfunc_handle_begin_auto_login(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
    vfunc_handle_get_timed_login_details(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_select_session(invocation: Gio.DBusMethodInvocation, arg_session: string): boolean;
    vfunc_handle_select_user(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
    vfunc_handle_start_session_when_ready(
        invocation: Gio.DBusMethodInvocation,
        arg_service_name: string,
        arg_should_start_session: boolean
    ): boolean;
    vfunc_reauthenticated(arg_service_name: string): void;
    vfunc_selected_user_changed(arg_username: string): void;
    vfunc_session_opened(arg_service_name: string): void;
    vfunc_timed_login_requested(arg_username: string, arg_delay: number): void;
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
    new_finish(res: Gio.AsyncResult): GreeterProxy;
    // Conflicted with Gio.DBusProxy.new_finish
    new_finish(...args: never[]): any;
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
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module GreeterSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class GreeterSkeleton extends Gio.DBusInterfaceSkeleton implements Greeter, Gio.DBusInterface {
    static $gtype: GObject.GType<GreeterSkeleton>;

    constructor(properties?: Partial<GreeterSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GreeterSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Members

    call_begin_auto_login(arg_username: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_begin_auto_login(
        arg_username: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_begin_auto_login(
        arg_username: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_begin_auto_login_finish(res: Gio.AsyncResult): boolean;
    call_begin_auto_login_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean;
    call_get_timed_login_details(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_get_timed_login_details(
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_get_timed_login_details(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_get_timed_login_details_finish(
        out_enabled: boolean,
        out_username: string,
        out_delay: number,
        res: Gio.AsyncResult
    ): boolean;
    call_get_timed_login_details_sync(
        out_enabled: boolean,
        out_username: string,
        out_delay: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_select_session(arg_session: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_select_session(
        arg_session: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_select_session(
        arg_session: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_select_session_finish(res: Gio.AsyncResult): boolean;
    call_select_session_sync(arg_session: string, cancellable?: Gio.Cancellable | null): boolean;
    call_select_user(arg_username: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_select_user(
        arg_username: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_select_user(
        arg_username: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_select_user_finish(res: Gio.AsyncResult): boolean;
    call_select_user_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean;
    call_start_session_when_ready(
        arg_service_name: string,
        arg_should_start_session: boolean,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_start_session_when_ready(
        arg_service_name: string,
        arg_should_start_session: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_start_session_when_ready(
        arg_service_name: string,
        arg_should_start_session: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_start_session_when_ready_finish(res: Gio.AsyncResult): boolean;
    call_start_session_when_ready_sync(
        arg_service_name: string,
        arg_should_start_session: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    complete_begin_auto_login(invocation: Gio.DBusMethodInvocation): void;
    complete_get_timed_login_details(
        invocation: Gio.DBusMethodInvocation,
        enabled: boolean,
        username: string,
        delay: number
    ): void;
    complete_select_session(invocation: Gio.DBusMethodInvocation): void;
    complete_select_user(invocation: Gio.DBusMethodInvocation): void;
    complete_start_session_when_ready(invocation: Gio.DBusMethodInvocation): void;
    emit_default_language_name_changed(arg_language_name: string): void;
    emit_default_session_name_changed(arg_session_name: string): void;
    emit_reauthenticated(arg_service_name: string): void;
    emit_selected_user_changed(arg_username: string): void;
    emit_session_opened(arg_service_name: string): void;
    emit_timed_login_requested(arg_username: string, arg_delay: number): void;
    vfunc_default_language_name_changed(arg_language_name: string): void;
    vfunc_default_session_name_changed(arg_session_name: string): void;
    vfunc_handle_begin_auto_login(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
    vfunc_handle_get_timed_login_details(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_select_session(invocation: Gio.DBusMethodInvocation, arg_session: string): boolean;
    vfunc_handle_select_user(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
    vfunc_handle_start_session_when_ready(
        invocation: Gio.DBusMethodInvocation,
        arg_service_name: string,
        arg_should_start_session: boolean
    ): boolean;
    vfunc_reauthenticated(arg_service_name: string): void;
    vfunc_selected_user_changed(arg_username: string): void;
    vfunc_session_opened(arg_service_name: string): void;
    vfunc_timed_login_requested(arg_username: string, arg_delay: number): void;
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
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

    get version(): string;
    set version(val: string);

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ManagerProxy> | null
    ): void;
    // Conflicted with Gio.DBusProxy.new
    static new(...args: never[]): any;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ManagerProxy> | null
    ): void;
    // Conflicted with Gio.DBusProxy.new_for_bus
    static new_for_bus(...args: never[]): any;

    // Implemented Members

    call_open_reauthentication_channel(arg_username: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_open_reauthentication_channel(
        arg_username: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_open_reauthentication_channel(
        arg_username: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_open_reauthentication_channel_finish(out_address: string, res: Gio.AsyncResult): boolean;
    call_open_reauthentication_channel_sync(
        arg_username: string,
        out_address: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_open_session(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_open_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_open_session(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_open_session_finish(out_address: string, res: Gio.AsyncResult): boolean;
    call_open_session_sync(out_address: string, cancellable?: Gio.Cancellable | null): boolean;
    call_register_display(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_register_display(
        arg_details: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_register_display(
        arg_details: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_register_display_finish(res: Gio.AsyncResult): boolean;
    call_register_display_sync(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_register_session(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_register_session(
        arg_details: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_register_session(
        arg_details: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_register_session_finish(res: Gio.AsyncResult): boolean;
    call_register_session_sync(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    complete_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, address: string): void;
    complete_open_session(invocation: Gio.DBusMethodInvocation, address: string): void;
    complete_register_display(invocation: Gio.DBusMethodInvocation): void;
    complete_register_session(invocation: Gio.DBusMethodInvocation): void;
    dup_version(): string;
    get_version(): string;
    set_version(value: string): void;
    vfunc_get_version(): string;
    vfunc_handle_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
    vfunc_handle_open_session(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_register_display(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean;
    vfunc_handle_register_session(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean;
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
    // Conflicted with Gio.DBusProxy.new_finish
    new_finish(...args: never[]): any;
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
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
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

    get version(): string;
    set version(val: string);

    // Implemented Members

    call_open_reauthentication_channel(arg_username: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_open_reauthentication_channel(
        arg_username: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_open_reauthentication_channel(
        arg_username: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_open_reauthentication_channel_finish(out_address: string, res: Gio.AsyncResult): boolean;
    call_open_reauthentication_channel_sync(
        arg_username: string,
        out_address: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_open_session(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_open_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_open_session(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_open_session_finish(out_address: string, res: Gio.AsyncResult): boolean;
    call_open_session_sync(out_address: string, cancellable?: Gio.Cancellable | null): boolean;
    call_register_display(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_register_display(
        arg_details: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_register_display(
        arg_details: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_register_display_finish(res: Gio.AsyncResult): boolean;
    call_register_display_sync(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_register_session(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_register_session(
        arg_details: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_register_session(
        arg_details: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_register_session_finish(res: Gio.AsyncResult): boolean;
    call_register_session_sync(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    complete_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, address: string): void;
    complete_open_session(invocation: Gio.DBusMethodInvocation, address: string): void;
    complete_register_display(invocation: Gio.DBusMethodInvocation): void;
    complete_register_session(invocation: Gio.DBusMethodInvocation): void;
    dup_version(): string;
    get_version(): string;
    set_version(value: string): void;
    vfunc_get_version(): string;
    vfunc_handle_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
    vfunc_handle_open_session(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_register_display(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean;
    vfunc_handle_register_session(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean;
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
}
export module RemoteGreeterProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class RemoteGreeterProxy
    extends Gio.DBusProxy
    implements RemoteGreeter, Gio.AsyncInitable<RemoteGreeterProxy>, Gio.DBusInterface, Gio.Initable {
    static $gtype: GObject.GType<RemoteGreeterProxy>;

    constructor(properties?: Partial<RemoteGreeterProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RemoteGreeterProxy.ConstructorProperties>, ...args: any[]): void;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<RemoteGreeterProxy> | null
    ): void;
    // Conflicted with Gio.DBusProxy.new
    static new(...args: never[]): any;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<RemoteGreeterProxy> | null
    ): void;
    // Conflicted with Gio.DBusProxy.new_for_bus
    static new_for_bus(...args: never[]): any;

    // Implemented Members

    call_disconnect(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_disconnect(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_disconnect_finish(res: Gio.AsyncResult): boolean;
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;
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
    new_finish(res: Gio.AsyncResult): RemoteGreeterProxy;
    // Conflicted with Gio.DBusProxy.new_finish
    new_finish(...args: never[]): any;
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
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module RemoteGreeterSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class RemoteGreeterSkeleton extends Gio.DBusInterfaceSkeleton implements RemoteGreeter, Gio.DBusInterface {
    static $gtype: GObject.GType<RemoteGreeterSkeleton>;

    constructor(properties?: Partial<RemoteGreeterSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RemoteGreeterSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Members

    call_disconnect(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_disconnect(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_disconnect_finish(res: Gio.AsyncResult): boolean;
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
}
export module UserVerifierChoiceListProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class UserVerifierChoiceListProxy
    extends Gio.DBusProxy
    implements UserVerifierChoiceList, Gio.AsyncInitable<UserVerifierChoiceListProxy>, Gio.DBusInterface, Gio.Initable {
    static $gtype: GObject.GType<UserVerifierChoiceListProxy>;

    constructor(properties?: Partial<UserVerifierChoiceListProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UserVerifierChoiceListProxy.ConstructorProperties>, ...args: any[]): void;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<UserVerifierChoiceListProxy> | null
    ): void;
    // Conflicted with Gio.DBusProxy.new
    static new(...args: never[]): any;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<UserVerifierChoiceListProxy> | null
    ): void;
    // Conflicted with Gio.DBusProxy.new_for_bus
    static new_for_bus(...args: never[]): any;

    // Implemented Members

    call_select_choice(
        arg_service_name: string,
        arg_choice: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_select_choice(
        arg_service_name: string,
        arg_choice: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_select_choice(
        arg_service_name: string,
        arg_choice: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_select_choice_finish(res: Gio.AsyncResult): boolean;
    call_select_choice_sync(
        arg_service_name: string,
        arg_choice: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    complete_select_choice(invocation: Gio.DBusMethodInvocation): void;
    emit_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;
    vfunc_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;
    vfunc_handle_select_choice(
        invocation: Gio.DBusMethodInvocation,
        arg_service_name: string,
        arg_choice: string
    ): boolean;
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
    new_finish(res: Gio.AsyncResult): UserVerifierChoiceListProxy;
    // Conflicted with Gio.DBusProxy.new_finish
    new_finish(...args: never[]): any;
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
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module UserVerifierChoiceListSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class UserVerifierChoiceListSkeleton
    extends Gio.DBusInterfaceSkeleton
    implements UserVerifierChoiceList, Gio.DBusInterface {
    static $gtype: GObject.GType<UserVerifierChoiceListSkeleton>;

    constructor(properties?: Partial<UserVerifierChoiceListSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UserVerifierChoiceListSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Members

    call_select_choice(
        arg_service_name: string,
        arg_choice: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_select_choice(
        arg_service_name: string,
        arg_choice: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_select_choice(
        arg_service_name: string,
        arg_choice: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_select_choice_finish(res: Gio.AsyncResult): boolean;
    call_select_choice_sync(
        arg_service_name: string,
        arg_choice: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    complete_select_choice(invocation: Gio.DBusMethodInvocation): void;
    emit_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;
    vfunc_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;
    vfunc_handle_select_choice(
        invocation: Gio.DBusMethodInvocation,
        arg_service_name: string,
        arg_choice: string
    ): boolean;
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
}
export module UserVerifierProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class UserVerifierProxy
    extends Gio.DBusProxy
    implements UserVerifier, Gio.AsyncInitable<UserVerifierProxy>, Gio.DBusInterface, Gio.Initable {
    static $gtype: GObject.GType<UserVerifierProxy>;

    constructor(properties?: Partial<UserVerifierProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UserVerifierProxy.ConstructorProperties>, ...args: any[]): void;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<UserVerifierProxy> | null
    ): void;
    // Conflicted with Gio.DBusProxy.new
    static new(...args: never[]): any;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<UserVerifierProxy> | null
    ): void;
    // Conflicted with Gio.DBusProxy.new_for_bus
    static new_for_bus(...args: never[]): any;

    // Implemented Members

    call_answer_query(
        arg_service_name: string,
        arg_answer: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_answer_query(
        arg_service_name: string,
        arg_answer: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_answer_query(
        arg_service_name: string,
        arg_answer: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_answer_query_finish(res: Gio.AsyncResult): boolean;
    call_answer_query_sync(arg_service_name: string, arg_answer: string, cancellable?: Gio.Cancellable | null): boolean;
    call_begin_verification(arg_service_name: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_begin_verification(
        arg_service_name: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_begin_verification(
        arg_service_name: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_begin_verification_finish(res: Gio.AsyncResult): boolean;
    call_begin_verification_for_user(
        arg_service_name: string,
        arg_username: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_begin_verification_for_user(
        arg_service_name: string,
        arg_username: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_begin_verification_for_user(
        arg_service_name: string,
        arg_username: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_begin_verification_for_user_finish(res: Gio.AsyncResult): boolean;
    call_begin_verification_for_user_sync(
        arg_service_name: string,
        arg_username: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_begin_verification_sync(arg_service_name: string, cancellable?: Gio.Cancellable | null): boolean;
    call_cancel(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_cancel(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_cancel_finish(res: Gio.AsyncResult): boolean;
    call_cancel_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_enable_extensions(arg_extensions: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_enable_extensions(
        arg_extensions: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_enable_extensions(
        arg_extensions: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_enable_extensions_finish(res: Gio.AsyncResult): boolean;
    call_enable_extensions_sync(arg_extensions: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_answer_query(invocation: Gio.DBusMethodInvocation): void;
    complete_begin_verification(invocation: Gio.DBusMethodInvocation): void;
    complete_begin_verification_for_user(invocation: Gio.DBusMethodInvocation): void;
    complete_cancel(invocation: Gio.DBusMethodInvocation): void;
    complete_enable_extensions(invocation: Gio.DBusMethodInvocation): void;
    emit_conversation_started(arg_service_name: string): void;
    emit_conversation_stopped(arg_service_name: string): void;
    emit_info(arg_service_name: string, arg_info: string): void;
    emit_info_query(arg_service_name: string, arg_query: string): void;
    emit_problem(arg_service_name: string, arg_problem: string): void;
    emit_reauthentication_started(arg_pid_of_caller: number): void;
    emit_reset(): void;
    emit_secret_info_query(arg_service_name: string, arg_query: string): void;
    emit_service_unavailable(arg_service_name: string, arg_message: string): void;
    emit_verification_complete(arg_service_name: string): void;
    emit_verification_failed(arg_service_name: string): void;
    vfunc_conversation_started(arg_service_name: string): void;
    vfunc_conversation_stopped(arg_service_name: string): void;
    vfunc_handle_answer_query(
        invocation: Gio.DBusMethodInvocation,
        arg_service_name: string,
        arg_answer: string
    ): boolean;
    vfunc_handle_begin_verification(invocation: Gio.DBusMethodInvocation, arg_service_name: string): boolean;
    vfunc_handle_begin_verification_for_user(
        invocation: Gio.DBusMethodInvocation,
        arg_service_name: string,
        arg_username: string
    ): boolean;
    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_enable_extensions(invocation: Gio.DBusMethodInvocation, arg_extensions: string): boolean;
    vfunc_info(arg_service_name: string, arg_info: string): void;
    vfunc_info_query(arg_service_name: string, arg_query: string): void;
    vfunc_problem(arg_service_name: string, arg_problem: string): void;
    vfunc_reauthentication_started(arg_pid_of_caller: number): void;
    vfunc_reset(): void;
    vfunc_secret_info_query(arg_service_name: string, arg_query: string): void;
    vfunc_service_unavailable(arg_service_name: string, arg_message: string): void;
    vfunc_verification_complete(arg_service_name: string): void;
    vfunc_verification_failed(arg_service_name: string): void;
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
    new_finish(res: Gio.AsyncResult): UserVerifierProxy;
    // Conflicted with Gio.DBusProxy.new_finish
    new_finish(...args: never[]): any;
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
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module UserVerifierSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class UserVerifierSkeleton extends Gio.DBusInterfaceSkeleton implements UserVerifier, Gio.DBusInterface {
    static $gtype: GObject.GType<UserVerifierSkeleton>;

    constructor(properties?: Partial<UserVerifierSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UserVerifierSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Members

    call_answer_query(
        arg_service_name: string,
        arg_answer: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_answer_query(
        arg_service_name: string,
        arg_answer: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_answer_query(
        arg_service_name: string,
        arg_answer: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_answer_query_finish(res: Gio.AsyncResult): boolean;
    call_answer_query_sync(arg_service_name: string, arg_answer: string, cancellable?: Gio.Cancellable | null): boolean;
    call_begin_verification(arg_service_name: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_begin_verification(
        arg_service_name: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_begin_verification(
        arg_service_name: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_begin_verification_finish(res: Gio.AsyncResult): boolean;
    call_begin_verification_for_user(
        arg_service_name: string,
        arg_username: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_begin_verification_for_user(
        arg_service_name: string,
        arg_username: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_begin_verification_for_user(
        arg_service_name: string,
        arg_username: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_begin_verification_for_user_finish(res: Gio.AsyncResult): boolean;
    call_begin_verification_for_user_sync(
        arg_service_name: string,
        arg_username: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_begin_verification_sync(arg_service_name: string, cancellable?: Gio.Cancellable | null): boolean;
    call_cancel(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_cancel(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_cancel_finish(res: Gio.AsyncResult): boolean;
    call_cancel_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_enable_extensions(arg_extensions: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_enable_extensions(
        arg_extensions: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_enable_extensions(
        arg_extensions: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_enable_extensions_finish(res: Gio.AsyncResult): boolean;
    call_enable_extensions_sync(arg_extensions: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_answer_query(invocation: Gio.DBusMethodInvocation): void;
    complete_begin_verification(invocation: Gio.DBusMethodInvocation): void;
    complete_begin_verification_for_user(invocation: Gio.DBusMethodInvocation): void;
    complete_cancel(invocation: Gio.DBusMethodInvocation): void;
    complete_enable_extensions(invocation: Gio.DBusMethodInvocation): void;
    emit_conversation_started(arg_service_name: string): void;
    emit_conversation_stopped(arg_service_name: string): void;
    emit_info(arg_service_name: string, arg_info: string): void;
    emit_info_query(arg_service_name: string, arg_query: string): void;
    emit_problem(arg_service_name: string, arg_problem: string): void;
    emit_reauthentication_started(arg_pid_of_caller: number): void;
    emit_reset(): void;
    emit_secret_info_query(arg_service_name: string, arg_query: string): void;
    emit_service_unavailable(arg_service_name: string, arg_message: string): void;
    emit_verification_complete(arg_service_name: string): void;
    emit_verification_failed(arg_service_name: string): void;
    vfunc_conversation_started(arg_service_name: string): void;
    vfunc_conversation_stopped(arg_service_name: string): void;
    vfunc_handle_answer_query(
        invocation: Gio.DBusMethodInvocation,
        arg_service_name: string,
        arg_answer: string
    ): boolean;
    vfunc_handle_begin_verification(invocation: Gio.DBusMethodInvocation, arg_service_name: string): boolean;
    vfunc_handle_begin_verification_for_user(
        invocation: Gio.DBusMethodInvocation,
        arg_service_name: string,
        arg_username: string
    ): boolean;
    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_enable_extensions(invocation: Gio.DBusMethodInvocation, arg_extensions: string): boolean;
    vfunc_info(arg_service_name: string, arg_info: string): void;
    vfunc_info_query(arg_service_name: string, arg_query: string): void;
    vfunc_problem(arg_service_name: string, arg_problem: string): void;
    vfunc_reauthentication_started(arg_pid_of_caller: number): void;
    vfunc_reset(): void;
    vfunc_secret_info_query(arg_service_name: string, arg_query: string): void;
    vfunc_service_unavailable(arg_service_name: string, arg_message: string): void;
    vfunc_verification_complete(arg_service_name: string): void;
    vfunc_verification_failed(arg_service_name: string): void;
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
}
export module WorkerManagerProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class WorkerManagerProxy
    extends Gio.DBusProxy
    implements WorkerManager, Gio.AsyncInitable<WorkerManagerProxy>, Gio.DBusInterface, Gio.Initable {
    static $gtype: GObject.GType<WorkerManagerProxy>;

    constructor(properties?: Partial<WorkerManagerProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WorkerManagerProxy.ConstructorProperties>, ...args: any[]): void;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<WorkerManagerProxy> | null
    ): void;
    // Conflicted with Gio.DBusProxy.new
    static new(...args: never[]): any;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<WorkerManagerProxy> | null
    ): void;
    // Conflicted with Gio.DBusProxy.new_for_bus
    static new_for_bus(...args: never[]): any;

    // Implemented Members

    call_choice_list_query(
        arg_service_name: string,
        arg_prompt_message: string,
        arg_query: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_choice_list_query(
        arg_service_name: string,
        arg_prompt_message: string,
        arg_query: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_choice_list_query(
        arg_service_name: string,
        arg_prompt_message: string,
        arg_query: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_choice_list_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;
    call_choice_list_query_sync(
        arg_service_name: string,
        arg_prompt_message: string,
        arg_query: GLib.Variant,
        out_answer: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_hello(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_hello(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_hello(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_hello_finish(res: Gio.AsyncResult): boolean;
    call_hello_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_info(arg_service_name: string, arg_info: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_info(
        arg_service_name: string,
        arg_info: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_info(
        arg_service_name: string,
        arg_info: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_info_finish(res: Gio.AsyncResult): boolean;
    call_info_query(
        arg_service_name: string,
        arg_query: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_info_query(
        arg_service_name: string,
        arg_query: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_info_query(
        arg_service_name: string,
        arg_query: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;
    call_info_query_sync(
        arg_service_name: string,
        arg_query: string,
        out_answer: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_info_sync(arg_service_name: string, arg_info: string, cancellable?: Gio.Cancellable | null): boolean;
    call_problem(arg_service_name: string, arg_problem: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_problem(
        arg_service_name: string,
        arg_problem: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_problem(
        arg_service_name: string,
        arg_problem: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_problem_finish(res: Gio.AsyncResult): boolean;
    call_problem_sync(arg_service_name: string, arg_problem: string, cancellable?: Gio.Cancellable | null): boolean;
    call_secret_info_query(
        arg_service_name: string,
        arg_query: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_secret_info_query(
        arg_service_name: string,
        arg_query: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_secret_info_query(
        arg_service_name: string,
        arg_query: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_secret_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;
    call_secret_info_query_sync(
        arg_service_name: string,
        arg_query: string,
        out_answer: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    complete_choice_list_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
    complete_hello(invocation: Gio.DBusMethodInvocation): void;
    complete_info(invocation: Gio.DBusMethodInvocation): void;
    complete_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
    complete_problem(invocation: Gio.DBusMethodInvocation): void;
    complete_secret_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
    vfunc_handle_choice_list_query(
        invocation: Gio.DBusMethodInvocation,
        arg_service_name: string,
        arg_prompt_message: string,
        arg_query: GLib.Variant
    ): boolean;
    vfunc_handle_hello(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_info(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_info: string): boolean;
    vfunc_handle_info_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string): boolean;
    vfunc_handle_problem(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_problem: string): boolean;
    vfunc_handle_secret_info_query(
        invocation: Gio.DBusMethodInvocation,
        arg_service_name: string,
        arg_query: string
    ): boolean;
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
    new_finish(res: Gio.AsyncResult): WorkerManagerProxy;
    // Conflicted with Gio.DBusProxy.new_finish
    new_finish(...args: never[]): any;
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
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module WorkerManagerSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class WorkerManagerSkeleton extends Gio.DBusInterfaceSkeleton implements WorkerManager, Gio.DBusInterface {
    static $gtype: GObject.GType<WorkerManagerSkeleton>;

    constructor(properties?: Partial<WorkerManagerSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WorkerManagerSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Members

    call_choice_list_query(
        arg_service_name: string,
        arg_prompt_message: string,
        arg_query: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_choice_list_query(
        arg_service_name: string,
        arg_prompt_message: string,
        arg_query: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_choice_list_query(
        arg_service_name: string,
        arg_prompt_message: string,
        arg_query: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_choice_list_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;
    call_choice_list_query_sync(
        arg_service_name: string,
        arg_prompt_message: string,
        arg_query: GLib.Variant,
        out_answer: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_hello(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_hello(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_hello(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_hello_finish(res: Gio.AsyncResult): boolean;
    call_hello_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_info(arg_service_name: string, arg_info: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_info(
        arg_service_name: string,
        arg_info: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_info(
        arg_service_name: string,
        arg_info: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_info_finish(res: Gio.AsyncResult): boolean;
    call_info_query(
        arg_service_name: string,
        arg_query: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_info_query(
        arg_service_name: string,
        arg_query: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_info_query(
        arg_service_name: string,
        arg_query: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;
    call_info_query_sync(
        arg_service_name: string,
        arg_query: string,
        out_answer: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_info_sync(arg_service_name: string, arg_info: string, cancellable?: Gio.Cancellable | null): boolean;
    call_problem(arg_service_name: string, arg_problem: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_problem(
        arg_service_name: string,
        arg_problem: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_problem(
        arg_service_name: string,
        arg_problem: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_problem_finish(res: Gio.AsyncResult): boolean;
    call_problem_sync(arg_service_name: string, arg_problem: string, cancellable?: Gio.Cancellable | null): boolean;
    call_secret_info_query(
        arg_service_name: string,
        arg_query: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_secret_info_query(
        arg_service_name: string,
        arg_query: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_secret_info_query(
        arg_service_name: string,
        arg_query: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_secret_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;
    call_secret_info_query_sync(
        arg_service_name: string,
        arg_query: string,
        out_answer: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    complete_choice_list_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
    complete_hello(invocation: Gio.DBusMethodInvocation): void;
    complete_info(invocation: Gio.DBusMethodInvocation): void;
    complete_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
    complete_problem(invocation: Gio.DBusMethodInvocation): void;
    complete_secret_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
    vfunc_handle_choice_list_query(
        invocation: Gio.DBusMethodInvocation,
        arg_service_name: string,
        arg_prompt_message: string,
        arg_query: GLib.Variant
    ): boolean;
    vfunc_handle_hello(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_info(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_info: string): boolean;
    vfunc_handle_info_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string): boolean;
    vfunc_handle_problem(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_problem: string): boolean;
    vfunc_handle_secret_info_query(
        invocation: Gio.DBusMethodInvocation,
        arg_service_name: string,
        arg_query: string
    ): boolean;
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
}

export class ChooserProxyPrivate {
    static $gtype: GObject.GType<ChooserProxyPrivate>;

    constructor(copy: ChooserProxyPrivate);
}

export class ChooserSkeletonPrivate {
    static $gtype: GObject.GType<ChooserSkeletonPrivate>;

    constructor(copy: ChooserSkeletonPrivate);
}

export class GreeterProxyPrivate {
    static $gtype: GObject.GType<GreeterProxyPrivate>;

    constructor(copy: GreeterProxyPrivate);
}

export class GreeterSkeletonPrivate {
    static $gtype: GObject.GType<GreeterSkeletonPrivate>;

    constructor(copy: GreeterSkeletonPrivate);
}

export class ManagerProxyPrivate {
    static $gtype: GObject.GType<ManagerProxyPrivate>;

    constructor(copy: ManagerProxyPrivate);
}

export class ManagerSkeletonPrivate {
    static $gtype: GObject.GType<ManagerSkeletonPrivate>;

    constructor(copy: ManagerSkeletonPrivate);
}

export class RemoteGreeterProxyPrivate {
    static $gtype: GObject.GType<RemoteGreeterProxyPrivate>;

    constructor(copy: RemoteGreeterProxyPrivate);
}

export class RemoteGreeterSkeletonPrivate {
    static $gtype: GObject.GType<RemoteGreeterSkeletonPrivate>;

    constructor(copy: RemoteGreeterSkeletonPrivate);
}

export class UserVerifierChoiceListProxyPrivate {
    static $gtype: GObject.GType<UserVerifierChoiceListProxyPrivate>;

    constructor(copy: UserVerifierChoiceListProxyPrivate);
}

export class UserVerifierChoiceListSkeletonPrivate {
    static $gtype: GObject.GType<UserVerifierChoiceListSkeletonPrivate>;

    constructor(copy: UserVerifierChoiceListSkeletonPrivate);
}

export class UserVerifierProxyPrivate {
    static $gtype: GObject.GType<UserVerifierProxyPrivate>;

    constructor(copy: UserVerifierProxyPrivate);
}

export class UserVerifierSkeletonPrivate {
    static $gtype: GObject.GType<UserVerifierSkeletonPrivate>;

    constructor(copy: UserVerifierSkeletonPrivate);
}

export class WorkerManagerProxyPrivate {
    static $gtype: GObject.GType<WorkerManagerProxyPrivate>;

    constructor(copy: WorkerManagerProxyPrivate);
}

export class WorkerManagerSkeletonPrivate {
    static $gtype: GObject.GType<WorkerManagerSkeletonPrivate>;

    constructor(copy: WorkerManagerSkeletonPrivate);
}

export interface ChooserNamespace {
    $gtype: GObject.GType<Chooser>;
    prototype: ChooserPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type Chooser = ChooserPrototype;
export interface ChooserPrototype extends GObject.Object {
    // Members

    call_disconnect(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_disconnect(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_disconnect_finish(res: Gio.AsyncResult): boolean;
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_select_hostname(arg_hostname: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_select_hostname(
        arg_hostname: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_select_hostname(
        arg_hostname: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_select_hostname_finish(res: Gio.AsyncResult): boolean;
    call_select_hostname_sync(arg_hostname: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
    complete_select_hostname(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_select_hostname(invocation: Gio.DBusMethodInvocation, arg_hostname: string): boolean;
}

export const Chooser: ChooserNamespace;

export interface GreeterNamespace {
    $gtype: GObject.GType<Greeter>;
    prototype: GreeterPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type Greeter = GreeterPrototype;
export interface GreeterPrototype extends GObject.Object {
    // Members

    call_begin_auto_login(arg_username: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_begin_auto_login(
        arg_username: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_begin_auto_login(
        arg_username: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_begin_auto_login_finish(res: Gio.AsyncResult): boolean;
    call_begin_auto_login_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean;
    call_get_timed_login_details(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_get_timed_login_details(
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_get_timed_login_details(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_get_timed_login_details_finish(
        out_enabled: boolean,
        out_username: string,
        out_delay: number,
        res: Gio.AsyncResult
    ): boolean;
    call_get_timed_login_details_sync(
        out_enabled: boolean,
        out_username: string,
        out_delay: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_select_session(arg_session: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_select_session(
        arg_session: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_select_session(
        arg_session: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_select_session_finish(res: Gio.AsyncResult): boolean;
    call_select_session_sync(arg_session: string, cancellable?: Gio.Cancellable | null): boolean;
    call_select_user(arg_username: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_select_user(
        arg_username: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_select_user(
        arg_username: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_select_user_finish(res: Gio.AsyncResult): boolean;
    call_select_user_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean;
    call_start_session_when_ready(
        arg_service_name: string,
        arg_should_start_session: boolean,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_start_session_when_ready(
        arg_service_name: string,
        arg_should_start_session: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_start_session_when_ready(
        arg_service_name: string,
        arg_should_start_session: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_start_session_when_ready_finish(res: Gio.AsyncResult): boolean;
    call_start_session_when_ready_sync(
        arg_service_name: string,
        arg_should_start_session: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    complete_begin_auto_login(invocation: Gio.DBusMethodInvocation): void;
    complete_get_timed_login_details(
        invocation: Gio.DBusMethodInvocation,
        enabled: boolean,
        username: string,
        delay: number
    ): void;
    complete_select_session(invocation: Gio.DBusMethodInvocation): void;
    complete_select_user(invocation: Gio.DBusMethodInvocation): void;
    complete_start_session_when_ready(invocation: Gio.DBusMethodInvocation): void;
    emit_default_language_name_changed(arg_language_name: string): void;
    emit_default_session_name_changed(arg_session_name: string): void;
    emit_reauthenticated(arg_service_name: string): void;
    emit_selected_user_changed(arg_username: string): void;
    emit_session_opened(arg_service_name: string): void;
    emit_timed_login_requested(arg_username: string, arg_delay: number): void;
    vfunc_default_language_name_changed(arg_language_name: string): void;
    vfunc_default_session_name_changed(arg_session_name: string): void;
    vfunc_handle_begin_auto_login(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
    vfunc_handle_get_timed_login_details(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_select_session(invocation: Gio.DBusMethodInvocation, arg_session: string): boolean;
    vfunc_handle_select_user(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
    vfunc_handle_start_session_when_ready(
        invocation: Gio.DBusMethodInvocation,
        arg_service_name: string,
        arg_should_start_session: boolean
    ): boolean;
    vfunc_reauthenticated(arg_service_name: string): void;
    vfunc_selected_user_changed(arg_username: string): void;
    vfunc_session_opened(arg_service_name: string): void;
    vfunc_timed_login_requested(arg_username: string, arg_delay: number): void;
}

export const Greeter: GreeterNamespace;

export interface ManagerNamespace {
    $gtype: GObject.GType<Manager>;
    prototype: ManagerPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type Manager = ManagerPrototype;
export interface ManagerPrototype extends GObject.Object {
    // Properties
    version: string;

    // Members

    call_open_reauthentication_channel(arg_username: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_open_reauthentication_channel(
        arg_username: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_open_reauthentication_channel(
        arg_username: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_open_reauthentication_channel_finish(out_address: string, res: Gio.AsyncResult): boolean;
    call_open_reauthentication_channel_sync(
        arg_username: string,
        out_address: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_open_session(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_open_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_open_session(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_open_session_finish(out_address: string, res: Gio.AsyncResult): boolean;
    call_open_session_sync(out_address: string, cancellable?: Gio.Cancellable | null): boolean;
    call_register_display(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_register_display(
        arg_details: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_register_display(
        arg_details: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_register_display_finish(res: Gio.AsyncResult): boolean;
    call_register_display_sync(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_register_session(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_register_session(
        arg_details: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_register_session(
        arg_details: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_register_session_finish(res: Gio.AsyncResult): boolean;
    call_register_session_sync(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    complete_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, address: string): void;
    complete_open_session(invocation: Gio.DBusMethodInvocation, address: string): void;
    complete_register_display(invocation: Gio.DBusMethodInvocation): void;
    complete_register_session(invocation: Gio.DBusMethodInvocation): void;
    dup_version(): string;
    get_version(): string;
    set_version(value: string): void;
    vfunc_get_version(): string;
    vfunc_handle_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
    vfunc_handle_open_session(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_register_display(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean;
    vfunc_handle_register_session(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean;
}

export const Manager: ManagerNamespace;

export interface RemoteGreeterNamespace {
    $gtype: GObject.GType<RemoteGreeter>;
    prototype: RemoteGreeterPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type RemoteGreeter = RemoteGreeterPrototype;
export interface RemoteGreeterPrototype extends GObject.Object {
    // Members

    call_disconnect(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_disconnect(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_disconnect_finish(res: Gio.AsyncResult): boolean;
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;
}

export const RemoteGreeter: RemoteGreeterNamespace;

export interface UserVerifierNamespace {
    $gtype: GObject.GType<UserVerifier>;
    prototype: UserVerifierPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type UserVerifier = UserVerifierPrototype;
export interface UserVerifierPrototype extends GObject.Object {
    // Members

    call_answer_query(
        arg_service_name: string,
        arg_answer: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_answer_query(
        arg_service_name: string,
        arg_answer: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_answer_query(
        arg_service_name: string,
        arg_answer: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_answer_query_finish(res: Gio.AsyncResult): boolean;
    call_answer_query_sync(arg_service_name: string, arg_answer: string, cancellable?: Gio.Cancellable | null): boolean;
    call_begin_verification(arg_service_name: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_begin_verification(
        arg_service_name: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_begin_verification(
        arg_service_name: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_begin_verification_finish(res: Gio.AsyncResult): boolean;
    call_begin_verification_for_user(
        arg_service_name: string,
        arg_username: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_begin_verification_for_user(
        arg_service_name: string,
        arg_username: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_begin_verification_for_user(
        arg_service_name: string,
        arg_username: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_begin_verification_for_user_finish(res: Gio.AsyncResult): boolean;
    call_begin_verification_for_user_sync(
        arg_service_name: string,
        arg_username: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_begin_verification_sync(arg_service_name: string, cancellable?: Gio.Cancellable | null): boolean;
    call_cancel(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_cancel(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_cancel_finish(res: Gio.AsyncResult): boolean;
    call_cancel_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_enable_extensions(arg_extensions: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_enable_extensions(
        arg_extensions: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_enable_extensions(
        arg_extensions: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_enable_extensions_finish(res: Gio.AsyncResult): boolean;
    call_enable_extensions_sync(arg_extensions: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_answer_query(invocation: Gio.DBusMethodInvocation): void;
    complete_begin_verification(invocation: Gio.DBusMethodInvocation): void;
    complete_begin_verification_for_user(invocation: Gio.DBusMethodInvocation): void;
    complete_cancel(invocation: Gio.DBusMethodInvocation): void;
    complete_enable_extensions(invocation: Gio.DBusMethodInvocation): void;
    emit_conversation_started(arg_service_name: string): void;
    emit_conversation_stopped(arg_service_name: string): void;
    emit_info(arg_service_name: string, arg_info: string): void;
    emit_info_query(arg_service_name: string, arg_query: string): void;
    emit_problem(arg_service_name: string, arg_problem: string): void;
    emit_reauthentication_started(arg_pid_of_caller: number): void;
    emit_reset(): void;
    emit_secret_info_query(arg_service_name: string, arg_query: string): void;
    emit_service_unavailable(arg_service_name: string, arg_message: string): void;
    emit_verification_complete(arg_service_name: string): void;
    emit_verification_failed(arg_service_name: string): void;
    vfunc_conversation_started(arg_service_name: string): void;
    vfunc_conversation_stopped(arg_service_name: string): void;
    vfunc_handle_answer_query(
        invocation: Gio.DBusMethodInvocation,
        arg_service_name: string,
        arg_answer: string
    ): boolean;
    vfunc_handle_begin_verification(invocation: Gio.DBusMethodInvocation, arg_service_name: string): boolean;
    vfunc_handle_begin_verification_for_user(
        invocation: Gio.DBusMethodInvocation,
        arg_service_name: string,
        arg_username: string
    ): boolean;
    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_enable_extensions(invocation: Gio.DBusMethodInvocation, arg_extensions: string): boolean;
    vfunc_info(arg_service_name: string, arg_info: string): void;
    vfunc_info_query(arg_service_name: string, arg_query: string): void;
    vfunc_problem(arg_service_name: string, arg_problem: string): void;
    vfunc_reauthentication_started(arg_pid_of_caller: number): void;
    vfunc_reset(): void;
    vfunc_secret_info_query(arg_service_name: string, arg_query: string): void;
    vfunc_service_unavailable(arg_service_name: string, arg_message: string): void;
    vfunc_verification_complete(arg_service_name: string): void;
    vfunc_verification_failed(arg_service_name: string): void;
}

export const UserVerifier: UserVerifierNamespace;

export interface UserVerifierChoiceListNamespace {
    $gtype: GObject.GType<UserVerifierChoiceList>;
    prototype: UserVerifierChoiceListPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type UserVerifierChoiceList = UserVerifierChoiceListPrototype;
export interface UserVerifierChoiceListPrototype extends GObject.Object {
    // Members

    call_select_choice(
        arg_service_name: string,
        arg_choice: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_select_choice(
        arg_service_name: string,
        arg_choice: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_select_choice(
        arg_service_name: string,
        arg_choice: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_select_choice_finish(res: Gio.AsyncResult): boolean;
    call_select_choice_sync(
        arg_service_name: string,
        arg_choice: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    complete_select_choice(invocation: Gio.DBusMethodInvocation): void;
    emit_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;
    vfunc_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;
    vfunc_handle_select_choice(
        invocation: Gio.DBusMethodInvocation,
        arg_service_name: string,
        arg_choice: string
    ): boolean;
}

export const UserVerifierChoiceList: UserVerifierChoiceListNamespace;

export interface WorkerManagerNamespace {
    $gtype: GObject.GType<WorkerManager>;
    prototype: WorkerManagerPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type WorkerManager = WorkerManagerPrototype;
export interface WorkerManagerPrototype extends GObject.Object {
    // Members

    call_choice_list_query(
        arg_service_name: string,
        arg_prompt_message: string,
        arg_query: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_choice_list_query(
        arg_service_name: string,
        arg_prompt_message: string,
        arg_query: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_choice_list_query(
        arg_service_name: string,
        arg_prompt_message: string,
        arg_query: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_choice_list_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;
    call_choice_list_query_sync(
        arg_service_name: string,
        arg_prompt_message: string,
        arg_query: GLib.Variant,
        out_answer: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_hello(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_hello(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_hello(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_hello_finish(res: Gio.AsyncResult): boolean;
    call_hello_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_info(arg_service_name: string, arg_info: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_info(
        arg_service_name: string,
        arg_info: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_info(
        arg_service_name: string,
        arg_info: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_info_finish(res: Gio.AsyncResult): boolean;
    call_info_query(
        arg_service_name: string,
        arg_query: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_info_query(
        arg_service_name: string,
        arg_query: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_info_query(
        arg_service_name: string,
        arg_query: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;
    call_info_query_sync(
        arg_service_name: string,
        arg_query: string,
        out_answer: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_info_sync(arg_service_name: string, arg_info: string, cancellable?: Gio.Cancellable | null): boolean;
    call_problem(arg_service_name: string, arg_problem: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_problem(
        arg_service_name: string,
        arg_problem: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_problem(
        arg_service_name: string,
        arg_problem: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_problem_finish(res: Gio.AsyncResult): boolean;
    call_problem_sync(arg_service_name: string, arg_problem: string, cancellable?: Gio.Cancellable | null): boolean;
    call_secret_info_query(
        arg_service_name: string,
        arg_query: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_secret_info_query(
        arg_service_name: string,
        arg_query: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_secret_info_query(
        arg_service_name: string,
        arg_query: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_secret_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;
    call_secret_info_query_sync(
        arg_service_name: string,
        arg_query: string,
        out_answer: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    complete_choice_list_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
    complete_hello(invocation: Gio.DBusMethodInvocation): void;
    complete_info(invocation: Gio.DBusMethodInvocation): void;
    complete_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
    complete_problem(invocation: Gio.DBusMethodInvocation): void;
    complete_secret_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
    vfunc_handle_choice_list_query(
        invocation: Gio.DBusMethodInvocation,
        arg_service_name: string,
        arg_prompt_message: string,
        arg_query: GLib.Variant
    ): boolean;
    vfunc_handle_hello(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_info(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_info: string): boolean;
    vfunc_handle_info_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string): boolean;
    vfunc_handle_problem(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_problem: string): boolean;
    vfunc_handle_secret_info_query(
        invocation: Gio.DBusMethodInvocation,
        arg_service_name: string,
        arg_query: string
    ): boolean;
}

export const WorkerManager: WorkerManagerNamespace;
