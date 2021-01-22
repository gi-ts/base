/**
 * AccountsService 1.0
 *
 * Generated from 1.0
 */

import * as GObject from "@gi-types/gobject";
import * as Gio from "@gi-types/gio";
import * as GLib from "@gi-types/glib";

export function user_manager_error_quark(): GLib.Quark;

export namespace UserAccountType {
    export const $gtype: GObject.GType<UserAccountType>;
}

export enum UserAccountType {
    STANDARD = 0,
    ADMINISTRATOR = 1,
}

export class UserManagerError extends GLib.Error {
    static $gtype: GObject.GType<UserManagerError>;

    constructor(options: { message: string; code: number });
    constructor(copy: UserManagerError);

    // Properties
    static FAILED: number;
    static USER_EXISTS: number;
    static USER_DOES_NOT_EXIST: number;
    static PERMISSION_DENIED: number;
    static NOT_SUPPORTED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace UserPasswordMode {
    export const $gtype: GObject.GType<UserPasswordMode>;
}

export enum UserPasswordMode {
    REGULAR = 0,
    SET_AT_LOGIN = 1,
    NONE = 2,
}
export module User {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        account_type: number;
        accountType: number;
        automatic_login: boolean;
        automaticLogin: boolean;
        email: string;
        home_directory: string;
        homeDirectory: string;
        icon_file: string;
        iconFile: string;
        is_loaded: boolean;
        isLoaded: boolean;
        language: string;
        local_account: boolean;
        localAccount: boolean;
        location: string;
        locked: boolean;
        login_frequency: number;
        loginFrequency: number;
        login_history: GLib.Variant;
        loginHistory: GLib.Variant;
        login_time: number;
        loginTime: number;
        nonexistent: boolean;
        password_hint: string;
        passwordHint: string;
        password_mode: number;
        passwordMode: number;
        real_name: string;
        realName: string;
        shell: string;
        system_account: boolean;
        systemAccount: boolean;
        uid: number;
        user_name: string;
        userName: string;
        x_session: string;
        xSession: string;
    }
}
export class User extends GObject.Object {
    static $gtype: GObject.GType<User>;

    constructor(properties?: Partial<User.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<User.ConstructorProperties>, ...args: any[]): void;

    // Properties
    account_type: number;
    accountType: number;
    automatic_login: boolean;
    automaticLogin: boolean;
    email: string;
    home_directory: string;
    homeDirectory: string;
    icon_file: string;
    iconFile: string;
    is_loaded: boolean;
    isLoaded: boolean;
    language: string;
    local_account: boolean;
    localAccount: boolean;
    location: string;
    locked: boolean;
    login_frequency: number;
    loginFrequency: number;
    login_history: GLib.Variant;
    loginHistory: GLib.Variant;
    login_time: number;
    loginTime: number;
    nonexistent: boolean;
    password_hint: string;
    passwordHint: string;
    password_mode: number;
    passwordMode: number;
    real_name: string;
    realName: string;
    shell: string;
    system_account: boolean;
    systemAccount: boolean;
    uid: number;
    user_name: string;
    userName: string;
    x_session: string;
    xSession: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;
    connect(signal: "sessions-changed", callback: (_source: this) => void): number;
    connect_after(signal: "sessions-changed", callback: (_source: this) => void): number;
    emit(signal: "sessions-changed"): void;

    // Members

    collate(user2: User): number;
    get_account_type(): UserAccountType;
    get_automatic_login(): boolean;
    get_email(): string;
    get_home_dir(): string;
    get_icon_file(): string;
    get_language(): string;
    get_location(): string;
    get_locked(): boolean;
    get_login_frequency(): number;
    get_login_history(): GLib.Variant;
    get_login_time(): number;
    get_num_sessions(): number;
    get_num_sessions_anywhere(): number;
    get_object_path(): string;
    get_password_expiration_policy(
        expiration_time: number,
        last_change_time: number,
        min_days_between_changes: number,
        max_days_between_changes: number,
        days_to_warn: number,
        days_after_expiration_until_lock: number
    ): void;
    get_password_hint(): string;
    get_password_mode(): UserPasswordMode;
    get_primary_session_id(): string;
    get_real_name(): string;
    get_saved(): boolean;
    get_session(): string;
    get_session_type(): string;
    get_shell(): string;
    get_uid(): number;
    get_user_name(): string;
    get_x_session(): string;
    is_local_account(): boolean;
    is_logged_in(): boolean;
    is_logged_in_anywhere(): boolean;
    is_nonexistent(): boolean;
    is_system_account(): boolean;
    set_account_type(account_type: UserAccountType): void;
    set_automatic_login(enabled: boolean): void;
    set_email(email: string): void;
    set_icon_file(icon_file: string): void;
    set_language(language: string): void;
    set_location(location: string): void;
    set_locked(locked: boolean): void;
    set_password(password: string, hint: string): void;
    set_password_hint(hint: string): void;
    set_password_mode(password_mode: UserPasswordMode): void;
    set_real_name(real_name: string): void;
    set_session(session: string): void;
    set_session_type(session_type: string): void;
    set_user_name(user_name: string): void;
    set_x_session(x_session: string): void;
}
export module UserManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        exclude_usernames_list: any;
        excludeUsernamesList: any;
        has_multiple_users: boolean;
        hasMultipleUsers: boolean;
        include_usernames_list: any;
        includeUsernamesList: any;
        is_loaded: boolean;
        isLoaded: boolean;
    }
}
export class UserManager extends GObject.Object {
    static $gtype: GObject.GType<UserManager>;

    constructor(properties?: Partial<UserManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UserManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    exclude_usernames_list: any;
    excludeUsernamesList: any;
    has_multiple_users: boolean;
    hasMultipleUsers: boolean;
    include_usernames_list: any;
    includeUsernamesList: any;
    is_loaded: boolean;
    isLoaded: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "user-added", callback: (_source: this, user: User) => void): number;
    connect_after(signal: "user-added", callback: (_source: this, user: User) => void): number;
    emit(signal: "user-added", user: User): void;
    connect(signal: "user-changed", callback: (_source: this, user: User) => void): number;
    connect_after(signal: "user-changed", callback: (_source: this, user: User) => void): number;
    emit(signal: "user-changed", user: User): void;
    connect(signal: "user-is-logged-in-changed", callback: (_source: this, user: User) => void): number;
    connect_after(signal: "user-is-logged-in-changed", callback: (_source: this, user: User) => void): number;
    emit(signal: "user-is-logged-in-changed", user: User): void;
    connect(signal: "user-removed", callback: (_source: this, user: User) => void): number;
    connect_after(signal: "user-removed", callback: (_source: this, user: User) => void): number;
    emit(signal: "user-removed", user: User): void;

    // Members

    activate_user_session(user: User): boolean;
    cache_user(username: string): User;
    cache_user_async(username: string, cancellable?: Gio.Cancellable | null): Promise<User>;
    cache_user_async(
        username: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    cache_user_async(
        username: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<User> | void;
    cache_user_finish(result: Gio.AsyncResult): User;
    can_switch(): boolean;
    create_user(username: string, fullname: string, accounttype: UserAccountType): User;
    create_user_async(
        username: string,
        fullname: string,
        accounttype: UserAccountType,
        cancellable?: Gio.Cancellable | null
    ): Promise<User>;
    create_user_async(
        username: string,
        fullname: string,
        accounttype: UserAccountType,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    create_user_async(
        username: string,
        fullname: string,
        accounttype: UserAccountType,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<User> | void;
    create_user_finish(result: Gio.AsyncResult): User;
    delete_user(user: User, remove_files: boolean): boolean;
    delete_user_async(user: User, remove_files: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    delete_user_async(
        user: User,
        remove_files: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    delete_user_async(
        user: User,
        remove_files: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    delete_user_finish(result: Gio.AsyncResult): boolean;
    get_user(username: string): User;
    get_user_by_id(id: number): User;
    goto_login_session(): boolean;
    list_users(): User[];
    no_service(): boolean;
    uncache_user(username: string): boolean;
    uncache_user_async(username: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    uncache_user_async(
        username: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    uncache_user_async(
        username: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    uncache_user_finish(result: Gio.AsyncResult): boolean;
    vfunc_user_added(user: User): void;
    vfunc_user_changed(user: User): void;
    vfunc_user_is_logged_in_changed(user: User): void;
    vfunc_user_removed(user: User): void;
    static get_default(): UserManager;
}
