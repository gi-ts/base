/**
 * TelepathyLogger 0.2
 *
 * Generated from 0.2
 */

import * as GObject from "@gi-types/gobject";
import * as TelepathyGLib from "@gi-types/telepathyglib";
import * as GLib from "@gi-types/glib";
import * as Gio from "@gi-types/gio";

export type LogEventFilter = (event: Event) => boolean;

export namespace EntityType {
    export const $gtype: GObject.GType<EntityType>;
}

export enum EntityType {
    UNKNOWN = 0,
    CONTACT = 1,
    ROOM = 2,
    SELF = 3,
}

export namespace LogManagerError {
    export const $gtype: GObject.GType<LogManagerError>;
}

export enum LogManagerError {
    LOG_MANAGER_ERROR_ADD_EVENT = 0,
}

export namespace EventTypeMask {
    export const $gtype: GObject.GType<EventTypeMask>;
}

export enum EventTypeMask {
    TEXT = 1,
    CALL = 2,
    ANY = 65535,
}
export module CallEvent {
    export interface ConstructorProperties extends Event.ConstructorProperties {
        [key: string]: any;
        detailed_end_reason: string;
        detailedEndReason: string;
        duration: number;
        end_actor: Entity;
        endActor: Entity;
        end_reason: number;
        endReason: number;
    }
}
export class CallEvent extends Event {
    static $gtype: GObject.GType<CallEvent>;

    constructor(properties?: Partial<CallEvent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CallEvent.ConstructorProperties>, ...args: any[]): void;

    // Properties
    detailed_end_reason: string;
    detailedEndReason: string;
    duration: number;
    end_actor: Entity;
    endActor: Entity;
    end_reason: number;
    endReason: number;

    // Members

    get_detailed_end_reason(): string;
    get_duration(): GLib.TimeSpan;
    get_end_actor(): Entity;
    get_end_reason(): TelepathyGLib.CallStateChangeReason;
}
export module Entity {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        alias: string;
        avatar_token: string;
        avatarToken: string;
        identifier: string;
        type: number;
    }
}
export class Entity extends GObject.Object {
    static $gtype: GObject.GType<Entity>;

    constructor(properties?: Partial<Entity.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Entity.ConstructorProperties>, ...args: any[]): void;

    // Properties
    alias: string;
    avatar_token: string;
    avatarToken: string;
    identifier: string;
    type: number;

    // Fields
    priv: EntityPriv;

    // Constructors

    static ["new"](id: string, type: EntityType, alias: string, avatar_token: string): Entity;
    static new_from_room_id(room_id: string): Entity;
    static new_from_tp_contact(contact: TelepathyGLib.Contact, type: EntityType): Entity;

    // Members

    get_alias(): string;
    get_avatar_token(): string;
    get_entity_type(): EntityType;
    get_identifier(): string;
}
export module Event {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        account: TelepathyGLib.Account;
        account_path: string;
        accountPath: string;
        channel_path: string;
        channelPath: string;
        receiver: Entity;
        sender: Entity;
        timestamp: number;
    }
}
export abstract class Event extends GObject.Object {
    static $gtype: GObject.GType<Event>;

    constructor(properties?: Partial<Event.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Event.ConstructorProperties>, ...args: any[]): void;

    // Properties
    account: TelepathyGLib.Account;
    account_path: string;
    accountPath: string;
    channel_path: string;
    channelPath: string;
    receiver: Entity;
    sender: Entity;
    timestamp: number;

    // Members

    equal(data: Event): boolean;
    get_account(): TelepathyGLib.Account;
    get_account_path(): string;
    get_receiver(): Entity;
    get_sender(): Entity;
    get_timestamp(): number;
}
export module LogManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class LogManager extends GObject.Object {
    static $gtype: GObject.GType<LogManager>;

    constructor(properties?: Partial<LogManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LogManager.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: any;

    // Members

    exists(account: TelepathyGLib.Account, target: Entity, type_mask: number): boolean;
    get_dates_async(account: TelepathyGLib.Account, target: Entity, type_mask: number): Promise<[GLib.Date[]]>;
    get_dates_async(
        account: TelepathyGLib.Account,
        target: Entity,
        type_mask: number,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    get_dates_async(
        account: TelepathyGLib.Account,
        target: Entity,
        type_mask: number,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[GLib.Date[]]> | void;
    get_dates_finish(result: Gio.AsyncResult): [boolean, GLib.Date[]];
    get_entities_async(account: TelepathyGLib.Account): Promise<[Entity[]]>;
    get_entities_async(account: TelepathyGLib.Account, callback: Gio.AsyncReadyCallback<this> | null): void;
    get_entities_async(
        account: TelepathyGLib.Account,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[Entity[]]> | void;
    get_entities_finish(result: Gio.AsyncResult): [boolean, Entity[]];
    get_events_for_date_async(
        account: TelepathyGLib.Account,
        target: Entity,
        type_mask: number,
        date: GLib.Date
    ): Promise<[Event[]]>;
    get_events_for_date_async(
        account: TelepathyGLib.Account,
        target: Entity,
        type_mask: number,
        date: GLib.Date,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    get_events_for_date_async(
        account: TelepathyGLib.Account,
        target: Entity,
        type_mask: number,
        date: GLib.Date,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[Event[]]> | void;
    get_events_for_date_finish(result: Gio.AsyncResult): [boolean, Event[]];
    get_filtered_events_async(
        account: TelepathyGLib.Account,
        target: Entity,
        type_mask: number,
        num_events: number,
        filter?: LogEventFilter | null
    ): Promise<[Event[]]>;
    get_filtered_events_async(
        account: TelepathyGLib.Account,
        target: Entity,
        type_mask: number,
        num_events: number,
        filter: LogEventFilter | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    get_filtered_events_async(
        account: TelepathyGLib.Account,
        target: Entity,
        type_mask: number,
        num_events: number,
        filter?: LogEventFilter | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[Event[]]> | void;
    get_filtered_events_finish(result: Gio.AsyncResult): [boolean, Event[]];
    search_async(text: string, type_mask: number, callback?: Gio.AsyncReadyCallback<this> | null): void;
    walk_filtered_events(
        account: TelepathyGLib.Account,
        target: Entity,
        type_mask: number,
        filter?: LogEventFilter | null
    ): LogWalker;
    static dup_singleton(): LogManager;
    static errors_quark(): GLib.Quark;
}
export module LogWalker {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        filter: any;
        filter_data: any;
        filterData: any;
    }
}
export class LogWalker extends GObject.Object {
    static $gtype: GObject.GType<LogWalker>;

    constructor(properties?: Partial<LogWalker.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LogWalker.ConstructorProperties>, ...args: any[]): void;

    // Properties
    filter: any;
    filter_data: any;
    filterData: any;

    // Fields
    priv: LogWalkerPriv;

    // Members

    get_events_async(num_events: number): Promise<[Event[]]>;
    get_events_async(num_events: number, callback: Gio.AsyncReadyCallback<this> | null): void;
    get_events_async(num_events: number, callback?: Gio.AsyncReadyCallback<this> | null): Promise<[Event[]]> | void;
    get_events_finish(result: Gio.AsyncResult): [boolean, Event[]];
    is_end(): boolean;
    is_start(): boolean;
    rewind_async(num_events: number): Promise<boolean>;
    rewind_async(num_events: number, callback: Gio.AsyncReadyCallback<this> | null): void;
    rewind_async(num_events: number, callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    rewind_finish(result: Gio.AsyncResult): boolean;
}
export module TextEvent {
    export interface ConstructorProperties extends Event.ConstructorProperties {
        [key: string]: any;
        edit_timestamp: number;
        editTimestamp: number;
        message: string;
        message_token: string;
        messageToken: string;
        message_type: number;
        messageType: number;
        supersedes_token: string;
        supersedesToken: string;
    }
}
export class TextEvent extends Event {
    static $gtype: GObject.GType<TextEvent>;

    constructor(properties?: Partial<TextEvent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextEvent.ConstructorProperties>, ...args: any[]): void;

    // Properties
    edit_timestamp: number;
    editTimestamp: number;
    message: string;
    message_token: string;
    messageToken: string;
    message_type: number;
    messageType: number;
    supersedes_token: string;
    supersedesToken: string;

    // Members

    get_edit_timestamp(): number;
    get_message(): string;
    get_message_token(): string;
    get_message_type(): TelepathyGLib.ChannelTextMessageType;
    get_supersedes(): TextEvent[];
    get_supersedes_token(): string;
}

export class CallEventPriv {
    static $gtype: GObject.GType<CallEventPriv>;

    constructor(copy: CallEventPriv);
}

export class EntityPriv {
    static $gtype: GObject.GType<EntityPriv>;

    constructor(copy: EntityPriv);
}

export class EventPriv {
    static $gtype: GObject.GType<EventPriv>;

    constructor(copy: EventPriv);
}

export class LogSearchHit {
    static $gtype: GObject.GType<LogSearchHit>;

    constructor(copy: LogSearchHit);

    // Fields
    account: TelepathyGLib.Account;
    target: Entity;
    date: GLib.Date;
}

export class LogWalkerPriv {
    static $gtype: GObject.GType<LogWalkerPriv>;

    constructor(copy: LogWalkerPriv);
}

export class TextEventPriv {
    static $gtype: GObject.GType<TextEventPriv>;

    constructor(copy: TextEventPriv);
}
