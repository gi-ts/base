/**
 * GWeather 4.0
 *
 * Generated from 4.0
 */

import * as GObject from "@gi-types/gobject2";
import * as GLib from "@gi-types/glib2";
import * as Gio from "@gi-types/gio2";

export function location_level_to_string(level: LocationLevel): string;
export function sky_to_string(sky: Sky): string;
export function sky_to_string_full(sky: Sky, options: FormatOptions): string;
export function speed_unit_to_string(unit: SpeedUnit): string;
export function temperature_unit_to_real(unit: TemperatureUnit): TemperatureUnit;
export function wind_direction_to_string(wind: WindDirection): string;
export function wind_direction_to_string_full(wind: WindDirection, options: FormatOptions): string;
export type FilterFunc = (location: Location) => boolean;

export namespace ConditionPhenomenon {
    export const $gtype: GObject.GType<ConditionPhenomenon>;
}

export enum ConditionPhenomenon {
    INVALID = -1,
    NONE = 0,
    DRIZZLE = 1,
    RAIN = 2,
    SNOW = 3,
    SNOW_GRAINS = 4,
    ICE_CRYSTALS = 5,
    ICE_PELLETS = 6,
    HAIL = 7,
    SMALL_HAIL = 8,
    UNKNOWN_PRECIPITATION = 9,
    MIST = 10,
    FOG = 11,
    SMOKE = 12,
    VOLCANIC_ASH = 13,
    SAND = 14,
    HAZE = 15,
    SPRAY = 16,
    DUST = 17,
    SQUALL = 18,
    SANDSTORM = 19,
    DUSTSTORM = 20,
    FUNNEL_CLOUD = 21,
    TORNADO = 22,
    DUST_WHIRLS = 23,
    LAST = 24,
}

export namespace ConditionQualifier {
    export const $gtype: GObject.GType<ConditionQualifier>;
}

export enum ConditionQualifier {
    INVALID = -1,
    NONE = 0,
    VICINITY = 1,
    LIGHT = 2,
    MODERATE = 3,
    HEAVY = 4,
    SHALLOW = 5,
    PATCHES = 6,
    PARTIAL = 7,
    THUNDERSTORM = 8,
    BLOWING = 9,
    SHOWERS = 10,
    DRIFTING = 11,
    FREEZING = 12,
    LAST = 13,
}

export namespace DistanceUnit {
    export const $gtype: GObject.GType<DistanceUnit>;
}

export enum DistanceUnit {
    INVALID = 0,
    DEFAULT = 1,
    METERS = 2,
    KM = 3,
    MILES = 4,
}

export namespace LocationLevel {
    export const $gtype: GObject.GType<LocationLevel>;
}

export enum LocationLevel {
    WORLD = 0,
    REGION = 1,
    COUNTRY = 2,
    ADM1 = 3,
    CITY = 4,
    WEATHER_STATION = 5,
    DETACHED = 6,
    NAMED_TIMEZONE = 7,
}

export namespace PressureUnit {
    export const $gtype: GObject.GType<PressureUnit>;
}

export enum PressureUnit {
    INVALID = 0,
    DEFAULT = 1,
    KPA = 2,
    HPA = 3,
    MB = 4,
    MM_HG = 5,
    INCH_HG = 6,
    ATM = 7,
}

export namespace Sky {
    export const $gtype: GObject.GType<Sky>;
}

export enum Sky {
    INVALID = -1,
    CLEAR = 0,
    BROKEN = 1,
    SCATTERED = 2,
    FEW = 3,
    OVERCAST = 4,
    LAST = 5,
}

export namespace SpeedUnit {
    export const $gtype: GObject.GType<SpeedUnit>;
}

export enum SpeedUnit {
    INVALID = 0,
    DEFAULT = 1,
    MS = 2,
    KPH = 3,
    MPH = 4,
    KNOTS = 5,
    BFT = 6,
}

export namespace TemperatureUnit {
    export const $gtype: GObject.GType<TemperatureUnit>;
}

export enum TemperatureUnit {
    INVALID = 0,
    DEFAULT = 1,
    KELVIN = 2,
    CENTIGRADE = 3,
    FAHRENHEIT = 4,
}

export namespace WindDirection {
    export const $gtype: GObject.GType<WindDirection>;
}

export enum WindDirection {
    INVALID = -1,
    VARIABLE = 0,
    N = 1,
    NNE = 2,
    NE = 3,
    ENE = 4,
    E = 5,
    ESE = 6,
    SE = 7,
    SSE = 8,
    S = 9,
    SSW = 10,
    SW = 11,
    WSW = 12,
    W = 13,
    WNW = 14,
    NW = 15,
    NNW = 16,
    LAST = 17,
}

export namespace FormatOptions {
    export const $gtype: GObject.GType<FormatOptions>;
}

export enum FormatOptions {
    DEFAULT = 0,
    SENTENCE_CAPITALIZATION = 1,
    NO_CAPITALIZATION = 2,
}

export namespace Provider {
    export const $gtype: GObject.GType<Provider>;
}

export enum Provider {
    NONE = 0,
    METAR = 1,
    IWIN = 4,
    MET_NO = 8,
    OWM = 16,
    ALL = 29,
}
export module Info {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        application_id: string;
        applicationId: string;
        contact_info: string;
        contactInfo: string;
        enabled_providers: Provider;
        enabledProviders: Provider;
        location: Location;
    }
}
export class Info extends GObject.Object {
    static $gtype: GObject.GType<Info>;

    constructor(properties?: Partial<Info.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Info.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get application_id(): string;
    set application_id(val: string);
    get applicationId(): string;
    set applicationId(val: string);
    get contact_info(): string;
    set contact_info(val: string);
    get contactInfo(): string;
    set contactInfo(val: string);
    get enabled_providers(): Provider;
    set enabled_providers(val: Provider);
    get enabledProviders(): Provider;
    set enabledProviders(val: Provider);
    get location(): Location;
    set location(val: Location);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "updated", callback: (_source: this) => void): number;
    connect_after(signal: "updated", callback: (_source: this) => void): number;
    emit(signal: "updated"): void;

    // Constructors

    static ["new"](location?: Location | null): Info;

    // Members

    abort(): void;
    get_apparent(): string;
    get_application_id(): string;
    get_attribution(): string;
    get_conditions(): string;
    get_contact_info(): string;
    get_dew(): string;
    get_enabled_providers(): Provider;
    get_forecast_list(): Info[];
    get_humidity(): string;
    get_icon_name(): string;
    get_location(): Location;
    get_location_name(): string;
    get_pressure(): string;
    get_sky(): string;
    get_sunrise(): string;
    get_sunset(): string;
    get_symbolic_icon_name(): string;
    get_temp(): string;
    get_temp_max(): string;
    get_temp_min(): string;
    get_temp_summary(): string;
    get_upcoming_moonphases(phases: number): boolean;
    get_update(): string;
    get_value_apparent(unit: TemperatureUnit): [boolean, number];
    get_value_conditions(): [boolean, ConditionPhenomenon, ConditionQualifier];
    get_value_dew(unit: TemperatureUnit): [boolean, number];
    get_value_moonphase(): [boolean, MoonPhase, MoonLatitude];
    get_value_pressure(unit: PressureUnit): [boolean, number];
    get_value_sky(): [boolean, Sky];
    get_value_sunrise(): [boolean, number];
    get_value_sunset(): [boolean, number];
    get_value_temp(unit: TemperatureUnit): [boolean, number];
    get_value_temp_max(unit: TemperatureUnit): [boolean, number];
    get_value_temp_min(unit: TemperatureUnit): [boolean, number];
    get_value_update(): [boolean, number];
    get_value_visibility(unit: DistanceUnit): [boolean, number];
    get_value_wind(unit: SpeedUnit): [boolean, number, WindDirection];
    get_visibility(): string;
    get_weather_summary(): string;
    get_wind(): string;
    is_daytime(): boolean;
    is_valid(): boolean;
    network_error(): boolean;
    next_sun_event(): number;
    set_application_id(application_id: string): void;
    set_contact_info(contact_info: string): void;
    set_enabled_providers(providers: Provider): void;
    set_location(location?: Location | null): void;
    update(): void;
    static store_cache(): void;
}
export module Location {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Location extends GObject.Object {
    static $gtype: GObject.GType<Location>;

    constructor(properties?: Partial<Location.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Location.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_detached(name: string, icao: string | null, latitude: number, longitude: number): Location;

    // Members

    deserialize(serialized: GLib.Variant): Location;
    detect_nearest_city(
        lat: number,
        lon: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    equal(two: Location): boolean;
    find_by_country_code(country_code: string): Location;
    find_by_station_code(station_code: string): Location | null;
    find_nearest_city(lat: number, lon: number): Location;
    find_nearest_city_full(lat: number, lon: number, func?: FilterFunc | null): Location;
    free_timezones(zones: GLib.TimeZone[]): void;
    get_city_name(): string | null;
    get_code(): string | null;
    get_coords(): [number, number];
    get_country(): string | null;
    get_country_name(): string | null;
    get_distance(loc2: Location): number;
    get_english_name(): string | null;
    get_english_sort_name(): string | null;
    get_level(): LocationLevel;
    get_name(): string | null;
    get_parent(): Location | null;
    get_sort_name(): string | null;
    get_timezone(): GLib.TimeZone | null;
    get_timezone_str(): string | null;
    get_timezones(): GLib.TimeZone[];
    has_coords(): boolean;
    has_timezone(): boolean;
    next_child(child?: Location | null): Location | null;
    serialize(): GLib.Variant;
    static detect_nearest_city_finish(result: Gio.AsyncResult): Location;
    static get_world(): Location | null;
}

export class Conditions {
    static $gtype: GObject.GType<Conditions>;

    constructor(copy: Conditions);

    // Fields
    significant: boolean;
    phenomenon: ConditionPhenomenon;
    qualifier: ConditionQualifier;

    // Members
    to_string(): string;
    to_string_full(options: FormatOptions): string;
}

export type MoonLatitude = number;
export type MoonPhase = number;
