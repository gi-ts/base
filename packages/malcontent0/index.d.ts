/**
 * Malcontent 0
 *
 * Generated from 0.0
 */

import * as GObject from "@gi-types/gobject";
import * as Gio from "@gi-types/gio";
import * as GLib from "@gi-types/glib";

export function app_filter_deserialize(variant: GLib.Variant, user_id: number): AppFilter;
export function app_filter_error_quark(): GLib.Quark;
export function manager_error_quark(): GLib.Quark;
export function session_limits_deserialize(variant: GLib.Variant, user_id: number): SessionLimits;

export namespace AppFilterListType {
    export const $gtype: GObject.GType<AppFilterListType>;
}

export enum AppFilterListType {
    BLOCKLIST = 0,
    ALLOWLIST = 1,
}

export namespace AppFilterOarsValue {
    export const $gtype: GObject.GType<AppFilterOarsValue>;
}

export enum AppFilterOarsValue {
    UNKNOWN = 0,
    NONE = 1,
    MILD = 2,
    MODERATE = 3,
    INTENSE = 4,
}

export class ManagerError extends GLib.Error {
    static $gtype: GObject.GType<ManagerError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ManagerError);

    // Properties
    static INVALID_USER: number;
    static PERMISSION_DENIED: number;
    static INVALID_DATA: number;
    static DISABLED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace SessionLimitsType {
    export const $gtype: GObject.GType<SessionLimitsType>;
}

export enum SessionLimitsType {
    NONE = 0,
    DAILY_SCHEDULE = 1,
}

export namespace ManagerGetValueFlags {
    export const $gtype: GObject.GType<ManagerGetValueFlags>;
}

export enum ManagerGetValueFlags {
    NONE = 0,
    INTERACTIVE = 1,
}

export namespace ManagerSetValueFlags {
    export const $gtype: GObject.GType<ManagerSetValueFlags>;
}

export enum ManagerSetValueFlags {
    NONE = 0,
    INTERACTIVE = 1,
}
export module Manager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        connection: Gio.DBusConnection;
    }
}
export class Manager extends GObject.Object {
    static $gtype: GObject.GType<Manager>;

    constructor(properties?: Partial<Manager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Manager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    connection: Gio.DBusConnection;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "app-filter-changed", callback: (_source: this, user_id: number) => void): number;
    connect_after(signal: "app-filter-changed", callback: (_source: this, user_id: number) => void): number;
    emit(signal: "app-filter-changed", user_id: number): void;

    // Constructors

    static ["new"](connection: Gio.DBusConnection): Manager;

    // Members

    get_app_filter(user_id: number, flags: ManagerGetValueFlags, cancellable?: Gio.Cancellable | null): AppFilter;
    get_app_filter_async(
        user_id: number,
        flags: ManagerGetValueFlags,
        cancellable?: Gio.Cancellable | null
    ): Promise<AppFilter>;
    get_app_filter_async(
        user_id: number,
        flags: ManagerGetValueFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    get_app_filter_async(
        user_id: number,
        flags: ManagerGetValueFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<AppFilter> | void;
    get_app_filter_finish(result: Gio.AsyncResult): AppFilter;
    get_session_limits(
        user_id: number,
        flags: ManagerGetValueFlags,
        cancellable?: Gio.Cancellable | null
    ): SessionLimits;
    get_session_limits_async(
        user_id: number,
        flags: ManagerGetValueFlags,
        cancellable?: Gio.Cancellable | null
    ): Promise<SessionLimits>;
    get_session_limits_async(
        user_id: number,
        flags: ManagerGetValueFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    get_session_limits_async(
        user_id: number,
        flags: ManagerGetValueFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<SessionLimits> | void;
    get_session_limits_finish(result: Gio.AsyncResult): SessionLimits;
    set_app_filter(
        user_id: number,
        app_filter: AppFilter,
        flags: ManagerSetValueFlags,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    set_app_filter_async(
        user_id: number,
        app_filter: AppFilter,
        flags: ManagerSetValueFlags,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    set_app_filter_async(
        user_id: number,
        app_filter: AppFilter,
        flags: ManagerSetValueFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_app_filter_async(
        user_id: number,
        app_filter: AppFilter,
        flags: ManagerSetValueFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_app_filter_finish(result: Gio.AsyncResult): boolean;
    set_session_limits(
        user_id: number,
        session_limits: SessionLimits,
        flags: ManagerSetValueFlags,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    set_session_limits_async(
        user_id: number,
        session_limits: SessionLimits,
        flags: ManagerSetValueFlags,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    set_session_limits_async(
        user_id: number,
        session_limits: SessionLimits,
        flags: ManagerSetValueFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_session_limits_async(
        user_id: number,
        session_limits: SessionLimits,
        flags: ManagerSetValueFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_session_limits_finish(result: Gio.AsyncResult): boolean;
}

export class AppFilter {
    static $gtype: GObject.GType<AppFilter>;

    constructor(copy: AppFilter);

    // Fields
    ref_count: number;
    user_id: number;
    app_list: string;
    app_list_type: AppFilterListType;
    oars_ratings: GLib.Variant;
    allow_user_installation: boolean;
    allow_system_installation: boolean;

    // Members
    get_oars_sections(): string[];
    get_oars_value(oars_section: string): AppFilterOarsValue;
    get_user_id(): number;
    is_appinfo_allowed(app_info: Gio.AppInfo): boolean;
    is_content_type_allowed(content_type: string): boolean;
    is_enabled(): boolean;
    is_flatpak_app_allowed(app_id: string): boolean;
    is_flatpak_ref_allowed(app_ref: string): boolean;
    is_path_allowed(path: string): boolean;
    is_system_installation_allowed(): boolean;
    is_user_installation_allowed(): boolean;
    ref(): AppFilter;
    serialize(): GLib.Variant;
    unref(): void;
    static deserialize(variant: GLib.Variant, user_id: number): AppFilter;
    static error_quark(): GLib.Quark;
}

export class AppFilterBuilder {
    static $gtype: GObject.GType<AppFilterBuilder>;

    constructor();
    constructor(
        properties?: Partial<{
            p0?: any;
            p1?: any;
            b0?: boolean;
            b1?: boolean;
            p2?: any;
            p3?: any;
        }>
    );
    constructor(copy: AppFilterBuilder);

    // Fields
    p0: any;
    p1: any;
    b0: boolean;
    b1: boolean;
    p2: any;
    p3: any;

    // Constructors
    static ["new"](): AppFilterBuilder;

    // Members
    blocklist_content_type(content_type: string): void;
    blocklist_flatpak_ref(app_ref: string): void;
    blocklist_path(path: string): void;
    clear(): void;
    copy(): AppFilterBuilder;
    end(): AppFilter;
    free(): void;
    init(): void;
    set_allow_system_installation(allow_system_installation: boolean): void;
    set_allow_user_installation(allow_user_installation: boolean): void;
    set_oars_value(oars_section: string, value: AppFilterOarsValue): void;
}

export class SessionLimits {
    static $gtype: GObject.GType<SessionLimits>;

    constructor(copy: SessionLimits);

    // Fields
    ref_count: number;
    user_id: number;
    limit_type: SessionLimitsType;
    daily_start_time: number;
    daily_end_time: number;

    // Members
    check_time_remaining(now_usecs: number): [boolean, number | null, boolean | null];
    get_user_id(): number;
    is_enabled(): boolean;
    ref(): SessionLimits;
    serialize(): GLib.Variant;
    unref(): void;
    static deserialize(variant: GLib.Variant, user_id: number): SessionLimits;
}

export class SessionLimitsBuilder {
    static $gtype: GObject.GType<SessionLimitsBuilder>;

    constructor();
    constructor(copy: SessionLimitsBuilder);

    // Fields
    u0: number;
    u1: number;
    u2: number;
    p0: any[];

    // Constructors
    static ["new"](): SessionLimitsBuilder;

    // Members
    clear(): void;
    copy(): SessionLimitsBuilder;
    end(): SessionLimits;
    free(): void;
    init(): void;
    set_daily_schedule(start_time_secs: number, end_time_secs: number): void;
    set_none(): void;
}
export type AppFilterError = ManagerError;
export type GetAppFilterFlags = ManagerGetValueFlags;
export type SetAppFilterFlags = ManagerSetValueFlags;
