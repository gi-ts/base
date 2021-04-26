/**
 * ModemManager 1.0
 *
 * Generated from 1.14.10
 */

import * as GLib from "@gi-types/glib";
import * as GObject from "@gi-types/gobject";
import * as Gio from "@gi-types/gio";

export const BEARER_METHOD_CONNECT: string;
export const BEARER_METHOD_DISCONNECT: string;
export const BEARER_PROPERTY_BEARERTYPE: string;
export const BEARER_PROPERTY_CONNECTED: string;
export const BEARER_PROPERTY_INTERFACE: string;
export const BEARER_PROPERTY_IP4CONFIG: string;
export const BEARER_PROPERTY_IP6CONFIG: string;
export const BEARER_PROPERTY_IPTIMEOUT: string;
export const BEARER_PROPERTY_PROPERTIES: string;
export const BEARER_PROPERTY_STATS: string;
export const BEARER_PROPERTY_SUSPENDED: string;
export const CALL_METHOD_ACCEPT: string;
export const CALL_METHOD_DEFLECT: string;
export const CALL_METHOD_HANGUP: string;
export const CALL_METHOD_JOINMULTIPARTY: string;
export const CALL_METHOD_LEAVEMULTIPARTY: string;
export const CALL_METHOD_SENDDTMF: string;
export const CALL_METHOD_START: string;
export const CALL_PROPERTY_AUDIOFORMAT: string;
export const CALL_PROPERTY_AUDIOPORT: string;
export const CALL_PROPERTY_DIRECTION: string;
export const CALL_PROPERTY_MULTIPARTY: string;
export const CALL_PROPERTY_NUMBER: string;
export const CALL_PROPERTY_STATE: string;
export const CALL_PROPERTY_STATEREASON: string;
export const CALL_SIGNAL_DTMFRECEIVED: string;
export const CALL_SIGNAL_STATECHANGED: string;
export const DBUS_ERROR_PREFIX: string;
export const DBUS_INTERFACE: string;
export const DBUS_INTERFACE_BEARER: string;
export const DBUS_INTERFACE_CALL: string;
export const DBUS_INTERFACE_MODEM: string;
export const DBUS_INTERFACE_MODEM_FIRMWARE: string;
export const DBUS_INTERFACE_MODEM_LOCATION: string;
export const DBUS_INTERFACE_MODEM_MESSAGING: string;
export const DBUS_INTERFACE_MODEM_MODEM3GPP: string;
export const DBUS_INTERFACE_MODEM_MODEM3GPP_USSD: string;
export const DBUS_INTERFACE_MODEM_MODEMCDMA: string;
export const DBUS_INTERFACE_MODEM_OMA: string;
export const DBUS_INTERFACE_MODEM_SIGNAL: string;
export const DBUS_INTERFACE_MODEM_TIME: string;
export const DBUS_INTERFACE_MODEM_VOICE: string;
export const DBUS_INTERFACE_SIM: string;
export const DBUS_INTERFACE_SMS: string;
export const DBUS_PATH: string;
export const DBUS_SERVICE: string;
export const MAJOR_VERSION: number;
export const MANAGER_METHOD_INHIBITDEVICE: string;
export const MANAGER_METHOD_REPORTKERNELEVENT: string;
export const MANAGER_METHOD_SCANDEVICES: string;
export const MANAGER_METHOD_SETLOGGING: string;
export const MANAGER_PROPERTY_VERSION: string;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const MODEM_CDMA_NID_UNKNOWN: number;
export const MODEM_CDMA_SID_UNKNOWN: number;
export const MODEM_FIRMWARE_METHOD_LIST: string;
export const MODEM_FIRMWARE_METHOD_SELECT: string;
export const MODEM_FIRMWARE_PROPERTY_UPDATESETTINGS: string;
export const MODEM_LOCATION_METHOD_GETLOCATION: string;
export const MODEM_LOCATION_METHOD_INJECTASSISTANCEDATA: string;
export const MODEM_LOCATION_METHOD_SETGPSREFRESHRATE: string;
export const MODEM_LOCATION_METHOD_SETSUPLSERVER: string;
export const MODEM_LOCATION_METHOD_SETUP: string;
export const MODEM_LOCATION_PROPERTY_ASSISTANCEDATASERVERS: string;
export const MODEM_LOCATION_PROPERTY_CAPABILITIES: string;
export const MODEM_LOCATION_PROPERTY_ENABLED: string;
export const MODEM_LOCATION_PROPERTY_GPSREFRESHRATE: string;
export const MODEM_LOCATION_PROPERTY_LOCATION: string;
export const MODEM_LOCATION_PROPERTY_SIGNALSLOCATION: string;
export const MODEM_LOCATION_PROPERTY_SUPLSERVER: string;
export const MODEM_LOCATION_PROPERTY_SUPPORTEDASSISTANCEDATA: string;
export const MODEM_MESSAGING_METHOD_CREATE: string;
export const MODEM_MESSAGING_METHOD_DELETE: string;
export const MODEM_MESSAGING_METHOD_LIST: string;
export const MODEM_MESSAGING_PROPERTY_DEFAULTSTORAGE: string;
export const MODEM_MESSAGING_PROPERTY_MESSAGES: string;
export const MODEM_MESSAGING_PROPERTY_SUPPORTEDSTORAGES: string;
export const MODEM_MESSAGING_SIGNAL_ADDED: string;
export const MODEM_MESSAGING_SIGNAL_DELETED: string;
export const MODEM_METHOD_COMMAND: string;
export const MODEM_METHOD_CREATEBEARER: string;
export const MODEM_METHOD_DELETEBEARER: string;
export const MODEM_METHOD_ENABLE: string;
export const MODEM_METHOD_FACTORYRESET: string;
export const MODEM_METHOD_LISTBEARERS: string;
export const MODEM_METHOD_RESET: string;
export const MODEM_METHOD_SETCURRENTBANDS: string;
export const MODEM_METHOD_SETCURRENTCAPABILITIES: string;
export const MODEM_METHOD_SETCURRENTMODES: string;
export const MODEM_METHOD_SETPOWERSTATE: string;
export const MODEM_MODEM3GPP_METHOD_REGISTER: string;
export const MODEM_MODEM3GPP_METHOD_SCAN: string;
export const MODEM_MODEM3GPP_METHOD_SETEPSUEMODEOPERATION: string;
export const MODEM_MODEM3GPP_METHOD_SETINITIALEPSBEARERSETTINGS: string;
export const MODEM_MODEM3GPP_PROPERTY_ENABLEDFACILITYLOCKS: string;
export const MODEM_MODEM3GPP_PROPERTY_EPSUEMODEOPERATION: string;
export const MODEM_MODEM3GPP_PROPERTY_IMEI: string;
export const MODEM_MODEM3GPP_PROPERTY_INITIALEPSBEARER: string;
export const MODEM_MODEM3GPP_PROPERTY_INITIALEPSBEARERSETTINGS: string;
export const MODEM_MODEM3GPP_PROPERTY_OPERATORCODE: string;
export const MODEM_MODEM3GPP_PROPERTY_OPERATORNAME: string;
export const MODEM_MODEM3GPP_PROPERTY_PCO: string;
export const MODEM_MODEM3GPP_PROPERTY_REGISTRATIONSTATE: string;
export const MODEM_MODEM3GPP_PROPERTY_SUBSCRIPTIONSTATE: string;
export const MODEM_MODEM3GPP_USSD_METHOD_CANCEL: string;
export const MODEM_MODEM3GPP_USSD_METHOD_INITIATE: string;
export const MODEM_MODEM3GPP_USSD_METHOD_RESPOND: string;
export const MODEM_MODEM3GPP_USSD_PROPERTY_NETWORKNOTIFICATION: string;
export const MODEM_MODEM3GPP_USSD_PROPERTY_NETWORKREQUEST: string;
export const MODEM_MODEM3GPP_USSD_PROPERTY_STATE: string;
export const MODEM_MODEMCDMA_METHOD_ACTIVATE: string;
export const MODEM_MODEMCDMA_METHOD_ACTIVATEMANUAL: string;
export const MODEM_MODEMCDMA_PROPERTY_ACTIVATIONSTATE: string;
export const MODEM_MODEMCDMA_PROPERTY_CDMA1XREGISTRATIONSTATE: string;
export const MODEM_MODEMCDMA_PROPERTY_ESN: string;
export const MODEM_MODEMCDMA_PROPERTY_EVDOREGISTRATIONSTATE: string;
export const MODEM_MODEMCDMA_PROPERTY_MEID: string;
export const MODEM_MODEMCDMA_PROPERTY_NID: string;
export const MODEM_MODEMCDMA_PROPERTY_SID: string;
export const MODEM_MODEMCDMA_SIGNAL_ACTIVATIONSTATECHANGED: string;
export const MODEM_OMA_METHOD_ACCEPTNETWORKINITIATEDSESSION: string;
export const MODEM_OMA_METHOD_CANCELSESSION: string;
export const MODEM_OMA_METHOD_SETUP: string;
export const MODEM_OMA_METHOD_STARTCLIENTINITIATEDSESSION: string;
export const MODEM_OMA_PROPERTY_FEATURES: string;
export const MODEM_OMA_PROPERTY_PENDINGNETWORKINITIATEDSESSIONS: string;
export const MODEM_OMA_PROPERTY_SESSIONSTATE: string;
export const MODEM_OMA_PROPERTY_SESSIONTYPE: string;
export const MODEM_OMA_SIGNAL_SESSIONSTATECHANGED: string;
export const MODEM_PROPERTY_ACCESSTECHNOLOGIES: string;
export const MODEM_PROPERTY_BEARERS: string;
export const MODEM_PROPERTY_CARRIERCONFIGURATION: string;
export const MODEM_PROPERTY_CARRIERCONFIGURATIONREVISION: string;
export const MODEM_PROPERTY_CURRENTBANDS: string;
export const MODEM_PROPERTY_CURRENTCAPABILITIES: string;
export const MODEM_PROPERTY_CURRENTMODES: string;
export const MODEM_PROPERTY_DEVICE: string;
export const MODEM_PROPERTY_DEVICEIDENTIFIER: string;
export const MODEM_PROPERTY_DRIVERS: string;
export const MODEM_PROPERTY_EQUIPMENTIDENTIFIER: string;
export const MODEM_PROPERTY_HARDWAREREVISION: string;
export const MODEM_PROPERTY_MANUFACTURER: string;
export const MODEM_PROPERTY_MAXACTIVEBEARERS: string;
export const MODEM_PROPERTY_MAXBEARERS: string;
export const MODEM_PROPERTY_MODEL: string;
export const MODEM_PROPERTY_OWNNUMBERS: string;
export const MODEM_PROPERTY_PLUGIN: string;
export const MODEM_PROPERTY_PORTS: string;
export const MODEM_PROPERTY_POWERSTATE: string;
export const MODEM_PROPERTY_PRIMARYPORT: string;
export const MODEM_PROPERTY_REVISION: string;
export const MODEM_PROPERTY_SIGNALQUALITY: string;
export const MODEM_PROPERTY_SIM: string;
export const MODEM_PROPERTY_STATE: string;
export const MODEM_PROPERTY_STATEFAILEDREASON: string;
export const MODEM_PROPERTY_SUPPORTEDBANDS: string;
export const MODEM_PROPERTY_SUPPORTEDCAPABILITIES: string;
export const MODEM_PROPERTY_SUPPORTEDIPFAMILIES: string;
export const MODEM_PROPERTY_SUPPORTEDMODES: string;
export const MODEM_PROPERTY_UNLOCKREQUIRED: string;
export const MODEM_PROPERTY_UNLOCKRETRIES: string;
export const MODEM_SIGNAL_METHOD_SETUP: string;
export const MODEM_SIGNAL_PROPERTY_CDMA: string;
export const MODEM_SIGNAL_PROPERTY_EVDO: string;
export const MODEM_SIGNAL_PROPERTY_GSM: string;
export const MODEM_SIGNAL_PROPERTY_LTE: string;
export const MODEM_SIGNAL_PROPERTY_RATE: string;
export const MODEM_SIGNAL_PROPERTY_UMTS: string;
export const MODEM_SIGNAL_STATECHANGED: string;
export const MODEM_TIME_METHOD_GETNETWORKTIME: string;
export const MODEM_TIME_PROPERTY_NETWORKTIMEZONE: string;
export const MODEM_TIME_SIGNAL_NETWORKTIMECHANGED: string;
export const MODEM_VOICE_METHOD_CALLWAITINGQUERY: string;
export const MODEM_VOICE_METHOD_CALLWAITINGSETUP: string;
export const MODEM_VOICE_METHOD_CREATECALL: string;
export const MODEM_VOICE_METHOD_DELETECALL: string;
export const MODEM_VOICE_METHOD_HANGUPALL: string;
export const MODEM_VOICE_METHOD_HANGUPANDACCEPT: string;
export const MODEM_VOICE_METHOD_HOLDANDACCEPT: string;
export const MODEM_VOICE_METHOD_LISTCALLS: string;
export const MODEM_VOICE_METHOD_TRANSFER: string;
export const MODEM_VOICE_PROPERTY_CALLS: string;
export const MODEM_VOICE_PROPERTY_EMERGENCYONLY: string;
export const MODEM_VOICE_SIGNAL_CALLADDED: string;
export const MODEM_VOICE_SIGNAL_CALLDELETED: string;
export const SIMPLE_PROPERTY_3GPP_OPERATOR_CODE: string;
export const SIMPLE_PROPERTY_3GPP_OPERATOR_NAME: string;
export const SIMPLE_PROPERTY_3GPP_REGISTRATION_STATE: string;
export const SIMPLE_PROPERTY_3GPP_SUBSCRIPTION_STATE: string;
export const SIMPLE_PROPERTY_ACCESS_TECHNOLOGIES: string;
export const SIMPLE_PROPERTY_CDMA_CDMA1X_REGISTRATION_STATE: string;
export const SIMPLE_PROPERTY_CDMA_EVDO_REGISTRATION_STATE: string;
export const SIMPLE_PROPERTY_CDMA_NID: string;
export const SIMPLE_PROPERTY_CDMA_SID: string;
export const SIMPLE_PROPERTY_CURRENT_BANDS: string;
export const SIMPLE_PROPERTY_SIGNAL_QUALITY: string;
export const SIMPLE_PROPERTY_STATE: string;
export const SIM_METHOD_CHANGEPIN: string;
export const SIM_METHOD_ENABLEPIN: string;
export const SIM_METHOD_SENDPIN: string;
export const SIM_METHOD_SENDPUK: string;
export const SIM_PROPERTY_EMERGENCYNUMBERS: string;
export const SIM_PROPERTY_IMSI: string;
export const SIM_PROPERTY_OPERATORIDENTIFIER: string;
export const SIM_PROPERTY_OPERATORNAME: string;
export const SIM_PROPERTY_SIMIDENTIFIER: string;
export const SMS_METHOD_SEND: string;
export const SMS_METHOD_STORE: string;
export const SMS_PROPERTY_CLASS: string;
export const SMS_PROPERTY_DATA: string;
export const SMS_PROPERTY_DELIVERYREPORTREQUEST: string;
export const SMS_PROPERTY_DELIVERYSTATE: string;
export const SMS_PROPERTY_DISCHARGETIMESTAMP: string;
export const SMS_PROPERTY_MESSAGEREFERENCE: string;
export const SMS_PROPERTY_NUMBER: string;
export const SMS_PROPERTY_PDUTYPE: string;
export const SMS_PROPERTY_SERVICECATEGORY: string;
export const SMS_PROPERTY_SMSC: string;
export const SMS_PROPERTY_STATE: string;
export const SMS_PROPERTY_STORAGE: string;
export const SMS_PROPERTY_TELESERVICEID: string;
export const SMS_PROPERTY_TEXT: string;
export const SMS_PROPERTY_TIMESTAMP: string;
export const SMS_PROPERTY_VALIDITY: string;
export const UNLOCK_RETRIES_UNKNOWN: number;
export function bearer_allowed_auth_build_string_from_mask(mask: BearerAllowedAuth): string;
export function bearer_ip_family_build_string_from_mask(mask: BearerIpFamily): string;
export function bearer_ip_method_get_string(val: BearerIpMethod): string;
export function bearer_type_get_string(val: BearerType): string;
export function call_direction_get_string(val: CallDirection): string;
export function call_state_get_string(val: CallState): string;
export function call_state_reason_get_string(val: CallStateReason): string;
export function cdma_activation_error_quark(): GLib.Quark;
export function connection_error_quark(): GLib.Quark;
export function core_error_quark(): GLib.Quark;
export function firmware_image_type_get_string(val: FirmwareImageType): string;
export function gdbus_bearer_interface_info(): Gio.DBusInterfaceInfo;
export function gdbus_bearer_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function gdbus_modem3gpp_interface_info(): Gio.DBusInterfaceInfo;
export function gdbus_modem3gpp_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function gdbus_modem3gpp_ussd_interface_info(): Gio.DBusInterfaceInfo;
export function gdbus_modem3gpp_ussd_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function gdbus_modem_cdma_interface_info(): Gio.DBusInterfaceInfo;
export function gdbus_modem_cdma_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function gdbus_modem_firmware_interface_info(): Gio.DBusInterfaceInfo;
export function gdbus_modem_firmware_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function gdbus_modem_interface_info(): Gio.DBusInterfaceInfo;
export function gdbus_modem_location_interface_info(): Gio.DBusInterfaceInfo;
export function gdbus_modem_location_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function gdbus_modem_messaging_interface_info(): Gio.DBusInterfaceInfo;
export function gdbus_modem_messaging_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function gdbus_modem_oma_interface_info(): Gio.DBusInterfaceInfo;
export function gdbus_modem_oma_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function gdbus_modem_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function gdbus_modem_signal_interface_info(): Gio.DBusInterfaceInfo;
export function gdbus_modem_signal_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function gdbus_modem_simple_interface_info(): Gio.DBusInterfaceInfo;
export function gdbus_modem_simple_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function gdbus_modem_time_interface_info(): Gio.DBusInterfaceInfo;
export function gdbus_modem_time_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function gdbus_modem_voice_interface_info(): Gio.DBusInterfaceInfo;
export function gdbus_modem_voice_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function gdbus_org_freedesktop_modem_manager1_interface_info(): Gio.DBusInterfaceInfo;
export function gdbus_org_freedesktop_modem_manager1_override_properties(
    klass: GObject.Object,
    property_id_begin: number
): number;
export function gdbus_sim_interface_info(): Gio.DBusInterfaceInfo;
export function gdbus_sim_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function gdbus_sms_interface_info(): Gio.DBusInterfaceInfo;
export function gdbus_sms_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function message_error_quark(): GLib.Quark;
export function mobile_equipment_error_quark(): GLib.Quark;
export function modem_3gpp_eps_ue_mode_operation_get_string(val: Modem3gppEpsUeModeOperation): string;
export function modem_3gpp_facility_build_string_from_mask(mask: Modem3gppFacility): string;
export function modem_3gpp_network_availability_get_string(val: Modem3gppNetworkAvailability): string;
export function modem_3gpp_registration_state_get_string(val: Modem3gppRegistrationState): string;
export function modem_3gpp_subscription_state_get_string(val: Modem3gppSubscriptionState): string;
export function modem_3gpp_ussd_session_state_get_string(val: Modem3gppUssdSessionState): string;
export function modem_access_technology_build_string_from_mask(mask: ModemAccessTechnology): string;
export function modem_band_get_string(val: ModemBand): string;
export function modem_capability_build_string_from_mask(mask: ModemCapability): string;
export function modem_cdma_activation_state_get_string(val: ModemCdmaActivationState): string;
export function modem_cdma_registration_state_get_string(val: ModemCdmaRegistrationState): string;
export function modem_cdma_rm_protocol_get_string(val: ModemCdmaRmProtocol): string;
export function modem_contacts_storage_get_string(val: ModemContactsStorage): string;
export function modem_firmware_update_method_build_string_from_mask(mask: ModemFirmwareUpdateMethod): string;
export function modem_location_assistance_data_type_build_string_from_mask(
    mask: ModemLocationAssistanceDataType
): string;
export function modem_location_source_build_string_from_mask(mask: ModemLocationSource): string;
export function modem_lock_get_string(val: ModemLock): string;
export function modem_mode_build_string_from_mask(mask: ModemMode): string;
export function modem_port_type_get_string(val: ModemPortType): string;
export function modem_power_state_get_string(val: ModemPowerState): string;
export function modem_state_change_reason_get_string(val: ModemStateChangeReason): string;
export function modem_state_failed_reason_get_string(val: ModemStateFailedReason): string;
export function modem_state_get_string(val: ModemState): string;
export function oma_feature_build_string_from_mask(mask: OmaFeature): string;
export function oma_session_state_failed_reason_get_string(val: OmaSessionStateFailedReason): string;
export function oma_session_state_get_string(val: OmaSessionState): string;
export function oma_session_type_get_string(val: OmaSessionType): string;
export function serial_error_quark(): GLib.Quark;
export function sms_cdma_service_category_get_string(val: SmsCdmaServiceCategory): string;
export function sms_cdma_teleservice_id_get_string(val: SmsCdmaTeleserviceId): string;
export function sms_delivery_state_get_string(val: SmsDeliveryState): string;
export function sms_pdu_type_get_string(val: SmsPduType): string;
export function sms_state_get_string(val: SmsState): string;
export function sms_storage_get_string(val: SmsStorage): string;
export function sms_validity_type_get_string(val: SmsValidityType): string;
export type UnlockRetriesForeachCb = (lock: ModemLock, count: number) => void;

export namespace BearerIpMethod {
    export const $gtype: GObject.GType<BearerIpMethod>;
}

export enum BearerIpMethod {
    UNKNOWN = 0,
    PPP = 1,
    STATIC = 2,
    DHCP = 3,
}

export namespace BearerType {
    export const $gtype: GObject.GType<BearerType>;
}

export enum BearerType {
    UNKNOWN = 0,
    DEFAULT = 1,
    DEFAULT_ATTACH = 2,
    DEDICATED = 3,
}

export namespace CallDirection {
    export const $gtype: GObject.GType<CallDirection>;
}

export enum CallDirection {
    UNKNOWN = 0,
    INCOMING = 1,
    OUTGOING = 2,
}

export namespace CallState {
    export const $gtype: GObject.GType<CallState>;
}

export enum CallState {
    UNKNOWN = 0,
    DIALING = 1,
    RINGING_OUT = 2,
    RINGING_IN = 3,
    ACTIVE = 4,
    HELD = 5,
    WAITING = 6,
    TERMINATED = 7,
}

export namespace CallStateReason {
    export const $gtype: GObject.GType<CallStateReason>;
}

export enum CallStateReason {
    UNKNOWN = 0,
    OUTGOING_STARTED = 1,
    INCOMING_NEW = 2,
    ACCEPTED = 3,
    TERMINATED = 4,
    REFUSED_OR_BUSY = 5,
    ERROR = 6,
    AUDIO_SETUP_FAILED = 7,
    TRANSFERRED = 8,
    DEFLECTED = 9,
}

export class CdmaActivationError extends GLib.Error {
    static $gtype: GObject.GType<CdmaActivationError>;

    constructor(options: { message: string; code: number });
    constructor(copy: CdmaActivationError);

    // Properties
    static NONE: number;
    static UNKNOWN: number;
    static ROAMING: number;
    static WRONGRADIOINTERFACE: number;
    static COULDNOTCONNECT: number;
    static SECURITYAUTHENTICATIONFAILED: number;
    static PROVISIONINGFAILED: number;
    static NOSIGNAL: number;
    static TIMEDOUT: number;
    static STARTFAILED: number;

    // Members
    static quark(): GLib.Quark;
}

export class ConnectionError extends GLib.Error {
    static $gtype: GObject.GType<ConnectionError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ConnectionError);

    // Properties
    static UNKNOWN: number;
    static NOCARRIER: number;
    static NODIALTONE: number;
    static BUSY: number;
    static NOANSWER: number;

    // Members
    static quark(): GLib.Quark;
}

export class CoreError extends GLib.Error {
    static $gtype: GObject.GType<CoreError>;

    constructor(options: { message: string; code: number });
    constructor(copy: CoreError);

    // Properties
    static FAILED: number;
    static CANCELLED: number;
    static ABORTED: number;
    static UNSUPPORTED: number;
    static NOPLUGINS: number;
    static UNAUTHORIZED: number;
    static INVALIDARGS: number;
    static INPROGRESS: number;
    static WRONGSTATE: number;
    static CONNECTED: number;
    static TOOMANY: number;
    static NOTFOUND: number;
    static RETRY: number;
    static EXISTS: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace FirmwareImageType {
    export const $gtype: GObject.GType<FirmwareImageType>;
}

export enum FirmwareImageType {
    UNKNOWN = 0,
    GENERIC = 1,
    GOBI = 2,
}

export class MessageError extends GLib.Error {
    static $gtype: GObject.GType<MessageError>;

    constructor(options: { message: string; code: number });
    constructor(copy: MessageError);

    // Properties
    static MEFAILURE: number;
    static SMSSERVICERESERVED: number;
    static NOTALLOWED: number;
    static NOTSUPPORTED: number;
    static INVALIDPDUPARAMETER: number;
    static INVALIDTEXTPARAMETER: number;
    static SIMNOTINSERTED: number;
    static SIMPIN: number;
    static PHSIMPIN: number;
    static SIMFAILURE: number;
    static SIMBUSY: number;
    static SIMWRONG: number;
    static SIMPUK: number;
    static SIMPIN2: number;
    static SIMPUK2: number;
    static MEMORYFAILURE: number;
    static INVALIDINDEX: number;
    static MEMORYFULL: number;
    static SMSCADDRESSUNKNOWN: number;
    static NONETWORK: number;
    static NETWORKTIMEOUT: number;
    static NOCNMAACKEXPECTED: number;
    static UNKNOWN: number;

    // Members
    static quark(): GLib.Quark;
}

export class MobileEquipmentError extends GLib.Error {
    static $gtype: GObject.GType<MobileEquipmentError>;

    constructor(options: { message: string; code: number });
    constructor(copy: MobileEquipmentError);

    // Properties
    static PHONEFAILURE: number;
    static NOCONNECTION: number;
    static LINKRESERVED: number;
    static NOTALLOWED: number;
    static NOTSUPPORTED: number;
    static PHSIMPIN: number;
    static PHFSIMPIN: number;
    static PHFSIMPUK: number;
    static SIMNOTINSERTED: number;
    static SIMPIN: number;
    static SIMPUK: number;
    static SIMFAILURE: number;
    static SIMBUSY: number;
    static SIMWRONG: number;
    static INCORRECTPASSWORD: number;
    static SIMPIN2: number;
    static SIMPUK2: number;
    static MEMORYFULL: number;
    static INVALIDINDEX: number;
    static NOTFOUND: number;
    static MEMORYFAILURE: number;
    static TEXTTOOLONG: number;
    static INVALIDCHARS: number;
    static DIALSTRINGTOOLONG: number;
    static DIALSTRINGINVALID: number;
    static NONETWORK: number;
    static NETWORKTIMEOUT: number;
    static NETWORKNOTALLOWED: number;
    static NETWORKPIN: number;
    static NETWORKPUK: number;
    static NETWORKSUBSETPIN: number;
    static NETWORKSUBSETPUK: number;
    static SERVICEPIN: number;
    static SERVICEPUK: number;
    static CORPPIN: number;
    static CORPPUK: number;
    static HIDDENKEYREQUIRED: number;
    static EAPMETHODNOTSUPPORTED: number;
    static INCORRECTPARAMETERS: number;
    static UNKNOWN: number;
    static GPRSIMSIUNKNOWNINHLR: number;
    static GPRSILLEGALMS: number;
    static GPRSIMSIUNKNOWNINVLR: number;
    static GPRSILLEGALME: number;
    static GPRSSERVICENOTALLOWED: number;
    static GPRSANDNONGPRSSERVICESNOTALLOWED: number;
    static GPRSPLMNNOTALLOWED: number;
    static GPRSLOCATIONNOTALLOWED: number;
    static GPRSROMAINGNOTALLOWED: number;
    static GPRSNOCELLSINLOCATIONAREA: number;
    static GPRSNETWORKFAILURE: number;
    static GPRSCONGESTION: number;
    static NOTAUTHORIZEDFORCSG: number;
    static GPRSINSUFFICIENTRESOURCES: number;
    static GPRSMISSINGORUNKNOWNAPN: number;
    static GPRSUNKNOWNPDPADDRESSORTYPE: number;
    static GPRSUSERAUTHENTICATIONFAILED: number;
    static GPRSACTIVATIONREJECTEDBYGGSNORGW: number;
    static GPRSACTIVATIONREJECTEDUNSPECIFIED: number;
    static GPRSSERVICEOPTIONNOTSUPPORTED: number;
    static GPRSSERVICEOPTIONNOTSUBSCRIBED: number;
    static GPRSSERVICEOPTIONOUTOFORDER: number;
    static GPRSFEATURENOTSUPPORTED: number;
    static GPRSSEMANTICERRORINTFTOPERATION: number;
    static GPRSSYNTACTICALERRORINTFTOPERATION: number;
    static GPRSUNKNOWNPDPCONTEXT: number;
    static GPRSSEMANTICERRORSINPACKETFILTER: number;
    static GPRSSYNTACTICALERRORSINPACKETFILTER: number;
    static GPRSPDPCONTEXTWITHOUTTFTALREADYACTIVATED: number;
    static GPRSUNKNOWN: number;
    static GPRSPDPAUTHFAILURE: number;
    static GPRSINVALIDMOBILECLASS: number;
    static GPRSLASTPDNDISCONNECTIONNOTALLOWEDLEGACY: number;
    static GPRSLASTPDNDISCONNECTIONNOTALLOWED: number;
    static GPRSSEMANTICALLYINCORRECTMESSAGE: number;
    static GPRSMANDATORYIEERROR: number;
    static GPRSIENOTIMPLEMENTED: number;
    static GPRSCONDITIONALIEERROR: number;
    static GPRSUNSPECIFIEDPROTOCOLERROR: number;
    static GPRSOPERATORDETERMINEDBARRING: number;
    static GPRSMAXIMUMNUMBEROFPDPCONTEXTSREACHED: number;
    static GPRSREQUESTEDAPNNOTSUPPORTED: number;
    static GPRSREQUESTREJECTEDBCMVIOLATION: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace Modem3gppEpsUeModeOperation {
    export const $gtype: GObject.GType<Modem3gppEpsUeModeOperation>;
}

export enum Modem3gppEpsUeModeOperation {
    UNKNOWN = 0,
    PS_1 = 1,
    PS_2 = 2,
    CSPS_1 = 3,
    CSPS_2 = 4,
}

export namespace Modem3gppNetworkAvailability {
    export const $gtype: GObject.GType<Modem3gppNetworkAvailability>;
}

export enum Modem3gppNetworkAvailability {
    UNKNOWN = 0,
    AVAILABLE = 1,
    CURRENT = 2,
    FORBIDDEN = 3,
}

export namespace Modem3gppRegistrationState {
    export const $gtype: GObject.GType<Modem3gppRegistrationState>;
}

export enum Modem3gppRegistrationState {
    IDLE = 0,
    HOME = 1,
    SEARCHING = 2,
    DENIED = 3,
    UNKNOWN = 4,
    ROAMING = 5,
    HOME_SMS_ONLY = 6,
    ROAMING_SMS_ONLY = 7,
    EMERGENCY_ONLY = 8,
    HOME_CSFB_NOT_PREFERRED = 9,
    ROAMING_CSFB_NOT_PREFERRED = 10,
    ATTACHED_RLOS = 11,
}

export namespace Modem3gppSubscriptionState {
    export const $gtype: GObject.GType<Modem3gppSubscriptionState>;
}

export enum Modem3gppSubscriptionState {
    UNKNOWN = 0,
    UNPROVISIONED = 1,
    PROVISIONED = 2,
    OUT_OF_DATA = 3,
}

export namespace Modem3gppUssdSessionState {
    export const $gtype: GObject.GType<Modem3gppUssdSessionState>;
}

export enum Modem3gppUssdSessionState {
    UNKNOWN = 0,
    IDLE = 1,
    ACTIVE = 2,
    USER_RESPONSE = 3,
}

export namespace ModemBand {
    export const $gtype: GObject.GType<ModemBand>;
}

export enum ModemBand {
    UNKNOWN = 0,
    EGSM = 1,
    DCS = 2,
    PCS = 3,
    G850 = 4,
    UTRAN_1 = 5,
    UTRAN_3 = 6,
    UTRAN_4 = 7,
    UTRAN_6 = 8,
    UTRAN_5 = 9,
    UTRAN_8 = 10,
    UTRAN_9 = 11,
    UTRAN_2 = 12,
    UTRAN_7 = 13,
    G450 = 14,
    G480 = 15,
    G750 = 16,
    G380 = 17,
    G410 = 18,
    G710 = 19,
    G810 = 20,
    EUTRAN_1 = 31,
    EUTRAN_2 = 32,
    EUTRAN_3 = 33,
    EUTRAN_4 = 34,
    EUTRAN_5 = 35,
    EUTRAN_6 = 36,
    EUTRAN_7 = 37,
    EUTRAN_8 = 38,
    EUTRAN_9 = 39,
    EUTRAN_10 = 40,
    EUTRAN_11 = 41,
    EUTRAN_12 = 42,
    EUTRAN_13 = 43,
    EUTRAN_14 = 44,
    EUTRAN_17 = 47,
    EUTRAN_18 = 48,
    EUTRAN_19 = 49,
    EUTRAN_20 = 50,
    EUTRAN_21 = 51,
    EUTRAN_22 = 52,
    EUTRAN_23 = 53,
    EUTRAN_24 = 54,
    EUTRAN_25 = 55,
    EUTRAN_26 = 56,
    EUTRAN_27 = 57,
    EUTRAN_28 = 58,
    EUTRAN_29 = 59,
    EUTRAN_30 = 60,
    EUTRAN_31 = 61,
    EUTRAN_32 = 62,
    EUTRAN_33 = 63,
    EUTRAN_34 = 64,
    EUTRAN_35 = 65,
    EUTRAN_36 = 66,
    EUTRAN_37 = 67,
    EUTRAN_38 = 68,
    EUTRAN_39 = 69,
    EUTRAN_40 = 70,
    EUTRAN_41 = 71,
    EUTRAN_42 = 72,
    EUTRAN_43 = 73,
    EUTRAN_44 = 74,
    EUTRAN_45 = 75,
    EUTRAN_46 = 76,
    EUTRAN_47 = 77,
    EUTRAN_48 = 78,
    EUTRAN_49 = 79,
    EUTRAN_50 = 80,
    EUTRAN_51 = 81,
    EUTRAN_52 = 82,
    EUTRAN_53 = 83,
    EUTRAN_54 = 84,
    EUTRAN_55 = 85,
    EUTRAN_56 = 86,
    EUTRAN_57 = 87,
    EUTRAN_58 = 88,
    EUTRAN_59 = 89,
    EUTRAN_60 = 90,
    EUTRAN_61 = 91,
    EUTRAN_62 = 92,
    EUTRAN_63 = 93,
    EUTRAN_64 = 94,
    EUTRAN_65 = 95,
    EUTRAN_66 = 96,
    EUTRAN_67 = 97,
    EUTRAN_68 = 98,
    EUTRAN_69 = 99,
    EUTRAN_70 = 100,
    EUTRAN_71 = 101,
    CDMA_BC0 = 128,
    CDMA_BC1 = 129,
    CDMA_BC2 = 130,
    CDMA_BC3 = 131,
    CDMA_BC4 = 132,
    CDMA_BC5 = 134,
    CDMA_BC6 = 135,
    CDMA_BC7 = 136,
    CDMA_BC8 = 137,
    CDMA_BC9 = 138,
    CDMA_BC10 = 139,
    CDMA_BC11 = 140,
    CDMA_BC12 = 141,
    CDMA_BC13 = 142,
    CDMA_BC14 = 143,
    CDMA_BC15 = 144,
    CDMA_BC16 = 145,
    CDMA_BC17 = 146,
    CDMA_BC18 = 147,
    CDMA_BC19 = 148,
    UTRAN_10 = 210,
    UTRAN_11 = 211,
    UTRAN_12 = 212,
    UTRAN_13 = 213,
    UTRAN_14 = 214,
    UTRAN_19 = 219,
    UTRAN_20 = 220,
    UTRAN_21 = 221,
    UTRAN_22 = 222,
    UTRAN_25 = 225,
    UTRAN_26 = 226,
    UTRAN_32 = 232,
    ANY = 256,
}

export namespace ModemCdmaActivationState {
    export const $gtype: GObject.GType<ModemCdmaActivationState>;
}

export enum ModemCdmaActivationState {
    UNKNOWN = 0,
    NOT_ACTIVATED = 1,
    ACTIVATING = 2,
    PARTIALLY_ACTIVATED = 3,
    ACTIVATED = 4,
}

export namespace ModemCdmaRegistrationState {
    export const $gtype: GObject.GType<ModemCdmaRegistrationState>;
}

export enum ModemCdmaRegistrationState {
    UNKNOWN = 0,
    REGISTERED = 1,
    HOME = 2,
    ROAMING = 3,
}

export namespace ModemCdmaRmProtocol {
    export const $gtype: GObject.GType<ModemCdmaRmProtocol>;
}

export enum ModemCdmaRmProtocol {
    UNKNOWN = 0,
    ASYNC = 1,
    PACKET_RELAY = 2,
    PACKET_NETWORK_PPP = 3,
    PACKET_NETWORK_SLIP = 4,
    STU_III = 5,
}

export namespace ModemContactsStorage {
    export const $gtype: GObject.GType<ModemContactsStorage>;
}

export enum ModemContactsStorage {
    UNKNOWN = 0,
    ME = 1,
    SM = 2,
    MT = 3,
}

export namespace ModemLock {
    export const $gtype: GObject.GType<ModemLock>;
}

export enum ModemLock {
    UNKNOWN = 0,
    NONE = 1,
    SIM_PIN = 2,
    SIM_PIN2 = 3,
    SIM_PUK = 4,
    SIM_PUK2 = 5,
    PH_SP_PIN = 6,
    PH_SP_PUK = 7,
    PH_NET_PIN = 8,
    PH_NET_PUK = 9,
    PH_SIM_PIN = 10,
    PH_CORP_PIN = 11,
    PH_CORP_PUK = 12,
    PH_FSIM_PIN = 13,
    PH_FSIM_PUK = 14,
    PH_NETSUB_PIN = 15,
    PH_NETSUB_PUK = 16,
}

export namespace ModemPortType {
    export const $gtype: GObject.GType<ModemPortType>;
}

export enum ModemPortType {
    UNKNOWN = 1,
    NET = 2,
    AT = 3,
    QCDM = 4,
    GPS = 5,
    QMI = 6,
    MBIM = 7,
    AUDIO = 8,
}

export namespace ModemPowerState {
    export const $gtype: GObject.GType<ModemPowerState>;
}

export enum ModemPowerState {
    UNKNOWN = 0,
    OFF = 1,
    LOW = 2,
    ON = 3,
}

export namespace ModemState {
    export const $gtype: GObject.GType<ModemState>;
}

export enum ModemState {
    FAILED = -1,
    UNKNOWN = 0,
    INITIALIZING = 1,
    LOCKED = 2,
    DISABLED = 3,
    DISABLING = 4,
    ENABLING = 5,
    ENABLED = 6,
    SEARCHING = 7,
    REGISTERED = 8,
    DISCONNECTING = 9,
    CONNECTING = 10,
    CONNECTED = 11,
}

export namespace ModemStateChangeReason {
    export const $gtype: GObject.GType<ModemStateChangeReason>;
}

export enum ModemStateChangeReason {
    UNKNOWN = 0,
    USER_REQUESTED = 1,
    SUSPEND = 2,
    FAILURE = 3,
}

export namespace ModemStateFailedReason {
    export const $gtype: GObject.GType<ModemStateFailedReason>;
}

export enum ModemStateFailedReason {
    NONE = 0,
    UNKNOWN = 1,
    SIM_MISSING = 2,
    SIM_ERROR = 3,
}

export namespace OmaSessionState {
    export const $gtype: GObject.GType<OmaSessionState>;
}

export enum OmaSessionState {
    FAILED = -1,
    UNKNOWN = 0,
    STARTED = 1,
    RETRYING = 2,
    CONNECTING = 3,
    CONNECTED = 4,
    AUTHENTICATED = 5,
    MDN_DOWNLOADED = 10,
    MSID_DOWNLOADED = 11,
    PRL_DOWNLOADED = 12,
    MIP_PROFILE_DOWNLOADED = 13,
    COMPLETED = 20,
}

export namespace OmaSessionStateFailedReason {
    export const $gtype: GObject.GType<OmaSessionStateFailedReason>;
}

export enum OmaSessionStateFailedReason {
    UNKNOWN = 0,
    NETWORK_UNAVAILABLE = 1,
    SERVER_UNAVAILABLE = 2,
    AUTHENTICATION_FAILED = 3,
    MAX_RETRY_EXCEEDED = 4,
    SESSION_CANCELLED = 5,
}

export namespace OmaSessionType {
    export const $gtype: GObject.GType<OmaSessionType>;
}

export enum OmaSessionType {
    UNKNOWN = 0,
    CLIENT_INITIATED_DEVICE_CONFIGURE = 10,
    CLIENT_INITIATED_PRL_UPDATE = 11,
    CLIENT_INITIATED_HANDS_FREE_ACTIVATION = 12,
    NETWORK_INITIATED_DEVICE_CONFIGURE = 20,
    NETWORK_INITIATED_PRL_UPDATE = 21,
    DEVICE_INITIATED_PRL_UPDATE = 30,
    DEVICE_INITIATED_HANDS_FREE_ACTIVATION = 31,
}

export class SerialError extends GLib.Error {
    static $gtype: GObject.GType<SerialError>;

    constructor(options: { message: string; code: number });
    constructor(copy: SerialError);

    // Properties
    static UNKNOWN: number;
    static OPENFAILED: number;
    static SENDFAILED: number;
    static RESPONSETIMEOUT: number;
    static OPENFAILEDNODEVICE: number;
    static FLASHFAILED: number;
    static NOTOPEN: number;
    static PARSEFAILED: number;
    static FRAMENOTFOUND: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace SmsCdmaServiceCategory {
    export const $gtype: GObject.GType<SmsCdmaServiceCategory>;
}

export enum SmsCdmaServiceCategory {
    UNKNOWN = 0,
    EMERGENCY_BROADCAST = 1,
    ADMINISTRATIVE = 2,
    MAINTENANCE = 3,
    GENERAL_NEWS_LOCAL = 4,
    GENERAL_NEWS_REGIONAL = 5,
    GENERAL_NEWS_NATIONAL = 6,
    GENERAL_NEWS_INTERNATIONAL = 7,
    BUSINESS_NEWS_LOCAL = 8,
    BUSINESS_NEWS_REGIONAL = 9,
    BUSINESS_NEWS_NATIONAL = 10,
    BUSINESS_NEWS_INTERNATIONAL = 11,
    SPORTS_NEWS_LOCAL = 12,
    SPORTS_NEWS_REGIONAL = 13,
    SPORTS_NEWS_NATIONAL = 14,
    SPORTS_NEWS_INTERNATIONAL = 15,
    ENTERTAINMENT_NEWS_LOCAL = 16,
    ENTERTAINMENT_NEWS_REGIONAL = 17,
    ENTERTAINMENT_NEWS_NATIONAL = 18,
    ENTERTAINMENT_NEWS_INTERNATIONAL = 19,
    LOCAL_WEATHER = 20,
    TRAFFIC_REPORT = 21,
    FLIGHT_SCHEDULES = 22,
    RESTAURANTS = 23,
    LODGINGS = 24,
    RETAIL_DIRECTORY = 25,
    ADVERTISEMENTS = 26,
    STOCK_QUOTES = 27,
    EMPLOYMENT = 28,
    HOSPITALS = 29,
    TECHNOLOGY_NEWS = 30,
    MULTICATEGORY = 31,
    CMAS_PRESIDENTIAL_ALERT = 4096,
    CMAS_EXTREME_THREAT = 4097,
    CMAS_SEVERE_THREAT = 4098,
    CMAS_CHILD_ABDUCTION_EMERGENCY = 4099,
    CMAS_TEST = 4100,
}

export namespace SmsCdmaTeleserviceId {
    export const $gtype: GObject.GType<SmsCdmaTeleserviceId>;
}

export enum SmsCdmaTeleserviceId {
    UNKNOWN = 0,
    CMT91 = 4096,
    WPT = 4097,
    WMT = 4098,
    VMN = 4099,
    WAP = 4100,
    WEMT = 4101,
    SCPT = 4102,
    CATPT = 4103,
}

export namespace SmsDeliveryState {
    export const $gtype: GObject.GType<SmsDeliveryState>;
}

export enum SmsDeliveryState {
    COMPLETED_RECEIVED = 0,
    COMPLETED_FORWARDED_UNCONFIRMED = 1,
    COMPLETED_REPLACED_BY_SC = 2,
    TEMPORARY_ERROR_CONGESTION = 32,
    TEMPORARY_ERROR_SME_BUSY = 33,
    TEMPORARY_ERROR_NO_RESPONSE_FROM_SME = 34,
    TEMPORARY_ERROR_SERVICE_REJECTED = 35,
    TEMPORARY_ERROR_QOS_NOT_AVAILABLE = 36,
    TEMPORARY_ERROR_IN_SME = 37,
    ERROR_REMOTE_PROCEDURE = 64,
    ERROR_INCOMPATIBLE_DESTINATION = 65,
    ERROR_CONNECTION_REJECTED = 66,
    ERROR_NOT_OBTAINABLE = 67,
    ERROR_QOS_NOT_AVAILABLE = 68,
    ERROR_NO_INTERWORKING_AVAILABLE = 69,
    ERROR_VALIDITY_PERIOD_EXPIRED = 70,
    ERROR_DELETED_BY_ORIGINATING_SME = 71,
    ERROR_DELETED_BY_SC_ADMINISTRATION = 72,
    ERROR_MESSAGE_DOES_NOT_EXIST = 73,
    TEMPORARY_FATAL_ERROR_CONGESTION = 96,
    TEMPORARY_FATAL_ERROR_SME_BUSY = 97,
    TEMPORARY_FATAL_ERROR_NO_RESPONSE_FROM_SME = 98,
    TEMPORARY_FATAL_ERROR_SERVICE_REJECTED = 99,
    TEMPORARY_FATAL_ERROR_QOS_NOT_AVAILABLE = 100,
    TEMPORARY_FATAL_ERROR_IN_SME = 101,
    UNKNOWN = 256,
    NETWORK_PROBLEM_ADDRESS_VACANT = 512,
    NETWORK_PROBLEM_ADDRESS_TRANSLATION_FAILURE = 513,
    NETWORK_PROBLEM_NETWORK_RESOURCE_OUTAGE = 514,
    NETWORK_PROBLEM_NETWORK_FAILURE = 515,
    NETWORK_PROBLEM_INVALID_TELESERVICE_ID = 516,
    NETWORK_PROBLEM_OTHER = 517,
    TERMINAL_PROBLEM_NO_PAGE_RESPONSE = 544,
    TERMINAL_PROBLEM_DESTINATION_BUSY = 545,
    TERMINAL_PROBLEM_NO_ACKNOWLEDGMENT = 546,
    TERMINAL_PROBLEM_DESTINATION_RESOURCE_SHORTAGE = 547,
    TERMINAL_PROBLEM_SMS_DELIVERY_POSTPONED = 548,
    TERMINAL_PROBLEM_DESTINATION_OUT_OF_SERVICE = 549,
    TERMINAL_PROBLEM_DESTINATION_NO_LONGER_AT_THIS_ADDRESS = 550,
    TERMINAL_PROBLEM_OTHER = 551,
    RADIO_INTERFACE_PROBLEM_RESOURCE_SHORTAGE = 576,
    RADIO_INTERFACE_PROBLEM_INCOMPATIBILITY = 577,
    RADIO_INTERFACE_PROBLEM_OTHER = 578,
    GENERAL_PROBLEM_ENCODING = 608,
    GENERAL_PROBLEM_SMS_ORIGINATION_DENIED = 609,
    GENERAL_PROBLEM_SMS_TERMINATION_DENIED = 610,
    GENERAL_PROBLEM_SUPPLEMENTARY_SERVICE_NOT_SUPPORTED = 611,
    GENERAL_PROBLEM_SMS_NOT_SUPPORTED = 612,
    GENERAL_PROBLEM_MISSING_EXPECTED_PARAMETER = 614,
    GENERAL_PROBLEM_MISSING_MANDATORY_PARAMETER = 615,
    GENERAL_PROBLEM_UNRECOGNIZED_PARAMETER_VALUE = 616,
    GENERAL_PROBLEM_UNEXPECTED_PARAMETER_VALUE = 617,
    GENERAL_PROBLEM_USER_DATA_SIZE_ERROR = 618,
    GENERAL_PROBLEM_OTHER = 619,
    TEMPORARY_NETWORK_PROBLEM_ADDRESS_VACANT = 768,
    TEMPORARY_NETWORK_PROBLEM_ADDRESS_TRANSLATION_FAILURE = 769,
    TEMPORARY_NETWORK_PROBLEM_NETWORK_RESOURCE_OUTAGE = 770,
    TEMPORARY_NETWORK_PROBLEM_NETWORK_FAILURE = 771,
    TEMPORARY_NETWORK_PROBLEM_INVALID_TELESERVICE_ID = 772,
    TEMPORARY_NETWORK_PROBLEM_OTHER = 773,
    TEMPORARY_TERMINAL_PROBLEM_NO_PAGE_RESPONSE = 800,
    TEMPORARY_TERMINAL_PROBLEM_DESTINATION_BUSY = 801,
    TEMPORARY_TERMINAL_PROBLEM_NO_ACKNOWLEDGMENT = 802,
    TEMPORARY_TERMINAL_PROBLEM_DESTINATION_RESOURCE_SHORTAGE = 803,
    TEMPORARY_TERMINAL_PROBLEM_SMS_DELIVERY_POSTPONED = 804,
    TEMPORARY_TERMINAL_PROBLEM_DESTINATION_OUT_OF_SERVICE = 805,
    TEMPORARY_TERMINAL_PROBLEM_DESTINATION_NO_LONGER_AT_THIS_ADDRESS = 806,
    TEMPORARY_TERMINAL_PROBLEM_OTHER = 807,
    TEMPORARY_RADIO_INTERFACE_PROBLEM_RESOURCE_SHORTAGE = 832,
    TEMPORARY_RADIO_INTERFACE_PROBLEM_INCOMPATIBILITY = 833,
    TEMPORARY_RADIO_INTERFACE_PROBLEM_OTHER = 834,
    TEMPORARY_GENERAL_PROBLEM_ENCODING = 864,
    TEMPORARY_GENERAL_PROBLEM_SMS_ORIGINATION_DENIED = 865,
    TEMPORARY_GENERAL_PROBLEM_SMS_TERMINATION_DENIED = 866,
    TEMPORARY_GENERAL_PROBLEM_SUPPLEMENTARY_SERVICE_NOT_SUPPORTED = 867,
    TEMPORARY_GENERAL_PROBLEM_SMS_NOT_SUPPORTED = 868,
    TEMPORARY_GENERAL_PROBLEM_MISSING_EXPECTED_PARAMETER = 870,
    TEMPORARY_GENERAL_PROBLEM_MISSING_MANDATORY_PARAMETER = 871,
    TEMPORARY_GENERAL_PROBLEM_UNRECOGNIZED_PARAMETER_VALUE = 872,
    TEMPORARY_GENERAL_PROBLEM_UNEXPECTED_PARAMETER_VALUE = 873,
    TEMPORARY_GENERAL_PROBLEM_USER_DATA_SIZE_ERROR = 874,
    TEMPORARY_GENERAL_PROBLEM_OTHER = 875,
}

export namespace SmsPduType {
    export const $gtype: GObject.GType<SmsPduType>;
}

export enum SmsPduType {
    UNKNOWN = 0,
    DELIVER = 1,
    SUBMIT = 2,
    STATUS_REPORT = 3,
    CDMA_DELIVER = 32,
    CDMA_SUBMIT = 33,
    CDMA_CANCELLATION = 34,
    CDMA_DELIVERY_ACKNOWLEDGEMENT = 35,
    CDMA_USER_ACKNOWLEDGEMENT = 36,
    CDMA_READ_ACKNOWLEDGEMENT = 37,
}

export namespace SmsState {
    export const $gtype: GObject.GType<SmsState>;
}

export enum SmsState {
    UNKNOWN = 0,
    STORED = 1,
    RECEIVING = 2,
    RECEIVED = 3,
    SENDING = 4,
    SENT = 5,
}

export namespace SmsStorage {
    export const $gtype: GObject.GType<SmsStorage>;
}

export enum SmsStorage {
    UNKNOWN = 0,
    SM = 1,
    ME = 2,
    MT = 3,
    SR = 4,
    BM = 5,
    TA = 6,
}

export namespace SmsValidityType {
    export const $gtype: GObject.GType<SmsValidityType>;
}

export enum SmsValidityType {
    UNKNOWN = 0,
    RELATIVE = 1,
    ABSOLUTE = 2,
    ENHANCED = 3,
}

export namespace BearerAllowedAuth {
    export const $gtype: GObject.GType<BearerAllowedAuth>;
}

export enum BearerAllowedAuth {
    UNKNOWN = 0,
    NONE = 1,
    PAP = 2,
    CHAP = 4,
    MSCHAP = 8,
    MSCHAPV2 = 16,
    EAP = 32,
}

export namespace BearerIpFamily {
    export const $gtype: GObject.GType<BearerIpFamily>;
}

export enum BearerIpFamily {
    NONE = 0,
    IPV4 = 1,
    IPV6 = 2,
    IPV4V6 = 4,
    ANY = 4294967295,
}

export namespace Modem3gppFacility {
    export const $gtype: GObject.GType<Modem3gppFacility>;
}

export enum Modem3gppFacility {
    NONE = 0,
    SIM = 1,
    FIXED_DIALING = 2,
    PH_SIM = 4,
    PH_FSIM = 8,
    NET_PERS = 16,
    NET_SUB_PERS = 32,
    PROVIDER_PERS = 64,
    CORP_PERS = 128,
}

export namespace ModemAccessTechnology {
    export const $gtype: GObject.GType<ModemAccessTechnology>;
}

export enum ModemAccessTechnology {
    UNKNOWN = 0,
    POTS = 1,
    GSM = 2,
    GSM_COMPACT = 4,
    GPRS = 8,
    EDGE = 16,
    UMTS = 32,
    HSDPA = 64,
    HSUPA = 128,
    HSPA = 256,
    HSPA_PLUS = 512,
    "1XRTT" = 1024,
    EVDO0 = 2048,
    EVDOA = 4096,
    EVDOB = 8192,
    LTE = 16384,
    "5GNR" = 32768,
    ANY = 4294967295,
}

export namespace ModemCapability {
    export const $gtype: GObject.GType<ModemCapability>;
}

export enum ModemCapability {
    NONE = 0,
    POTS = 1,
    CDMA_EVDO = 2,
    GSM_UMTS = 4,
    LTE = 8,
    IRIDIUM = 32,
    "5GNR" = 64,
    ANY = 4294967295,
}

export namespace ModemFirmwareUpdateMethod {
    export const $gtype: GObject.GType<ModemFirmwareUpdateMethod>;
}

export enum ModemFirmwareUpdateMethod {
    NONE = 0,
    FASTBOOT = 1,
    QMI_PDC = 2,
}

export namespace ModemLocationAssistanceDataType {
    export const $gtype: GObject.GType<ModemLocationAssistanceDataType>;
}

export enum ModemLocationAssistanceDataType {
    NONE = 0,
    XTRA = 1,
}

export namespace ModemLocationSource {
    export const $gtype: GObject.GType<ModemLocationSource>;
}

export enum ModemLocationSource {
    NONE = 0,
    "3GPP_LAC_CI" = 1,
    GPS_RAW = 2,
    GPS_NMEA = 4,
    CDMA_BS = 8,
    GPS_UNMANAGED = 16,
    AGPS_MSA = 32,
    AGPS_MSB = 64,
}

export namespace ModemMode {
    export const $gtype: GObject.GType<ModemMode>;
}

export enum ModemMode {
    NONE = 0,
    CS = 1,
    "2G" = 2,
    "3G" = 4,
    "4G" = 8,
    "5G" = 16,
    ANY = 4294967295,
}

export namespace OmaFeature {
    export const $gtype: GObject.GType<OmaFeature>;
}

export enum OmaFeature {
    NONE = 0,
    DEVICE_PROVISIONING = 1,
    PRL_UPDATE = 2,
    HANDS_FREE_ACTIVATION = 4,
}
export module Bearer {
    export interface ConstructorProperties extends GdbusBearerProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class Bearer
    extends GdbusBearerProxy
    implements Gio.AsyncInitable<Bearer>, Gio.DBusInterface, Gio.Initable, GdbusBearer {
    static $gtype: GObject.GType<Bearer>;

    constructor(properties?: Partial<Bearer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Bearer.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    bearer_type: number;
    bearerType: number;
    connected: boolean;
    "interface": string;
    ip_timeout: number;
    ipTimeout: number;
    ip4_config: GLib.Variant;
    ip4Config: GLib.Variant;
    ip6_config: GLib.Variant;
    ip6Config: GLib.Variant;
    properties: GLib.Variant;
    stats: GLib.Variant;
    suspended: boolean;

    // Members

    connect(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    connect(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    connect(...args: never[]): never;
    connect_finish(res: Gio.AsyncResult): boolean;
    connect_sync(cancellable?: Gio.Cancellable | null): boolean;
    disconnect(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    disconnect(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    disconnect(...args: never[]): never;
    disconnect_finish(res: Gio.AsyncResult): boolean;
    disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;
    dup_interface(): string;
    dup_path(): string;
    get_bearer_type(): BearerType;
    get_connected(): boolean;
    get_interface(): string;
    get_ip_timeout(): number;
    get_ipv4_config(): BearerIpConfig;
    get_ipv6_config(): BearerIpConfig;
    get_path(): string;
    get_properties(): BearerProperties;
    get_stats(): BearerStats;
    get_suspended(): boolean;
    peek_ipv4_config(): BearerIpConfig;
    peek_ipv6_config(): BearerIpConfig;
    peek_properties(): BearerProperties;
    peek_stats(): BearerStats;

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
    new_finish(res: Gio.AsyncResult): Bearer;
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
    call_connect(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_connect(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_connect_finish(res: Gio.AsyncResult): boolean;
    call_connect_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_disconnect(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_disconnect(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_disconnect_finish(res: Gio.AsyncResult): boolean;
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;
    complete_connect(invocation: Gio.DBusMethodInvocation): void;
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_connect(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;
}
export module BearerIpConfig {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class BearerIpConfig extends GObject.Object {
    static $gtype: GObject.GType<BearerIpConfig>;

    constructor(properties?: Partial<BearerIpConfig.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BearerIpConfig.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_address(): string;
    get_dns(): string[];
    get_gateway(): string;
    get_method(): BearerIpMethod;
    get_mtu(): number;
    get_prefix(): number;
}
export module BearerProperties {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class BearerProperties extends GObject.Object {
    static $gtype: GObject.GType<BearerProperties>;

    constructor(properties?: Partial<BearerProperties.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BearerProperties.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): BearerProperties;

    // Members

    get_allow_roaming(): boolean;
    get_allowed_auth(): BearerAllowedAuth;
    get_apn(): string;
    get_ip_type(): BearerIpFamily;
    get_number(): string;
    get_password(): string;
    get_rm_protocol(): ModemCdmaRmProtocol;
    get_user(): string;
    set_allow_roaming(allow_roaming: boolean): void;
    set_allowed_auth(allowed_auth: BearerAllowedAuth): void;
    set_apn(apn: string): void;
    set_ip_type(ip_type: BearerIpFamily): void;
    set_number(number: string): void;
    set_password(password: string): void;
    set_rm_protocol(protocol: ModemCdmaRmProtocol): void;
    set_user(user: string): void;
}
export module BearerStats {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class BearerStats extends GObject.Object {
    static $gtype: GObject.GType<BearerStats>;

    constructor(properties?: Partial<BearerStats.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BearerStats.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_attempts(): number;
    get_duration(): number;
    get_failed_attempts(): number;
    get_rx_bytes(): number;
    get_total_duration(): number;
    get_total_rx_bytes(): number;
    get_total_tx_bytes(): number;
    get_tx_bytes(): number;
}
export module Call {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class Call extends Gio.DBusProxy implements Gio.AsyncInitable<Call>, Gio.DBusInterface, Gio.Initable {
    static $gtype: GObject.GType<Call>;

    constructor(properties?: Partial<Call.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Call.ConstructorProperties>, ...args: any[]): void;

    // Members

    accept(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    accept(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    accept_finish(res: Gio.AsyncResult): boolean;
    accept_sync(cancellable?: Gio.Cancellable | null): boolean;
    deflect(number: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    deflect(number: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    deflect(
        number: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    deflect_finish(res: Gio.AsyncResult): boolean;
    deflect_sync(number: string, cancellable?: Gio.Cancellable | null): boolean;
    dup_audio_port(): string;
    dup_number(): string;
    dup_path(): string;
    get_audio_format(): CallAudioFormat;
    get_audio_port(): string;
    get_direction(): CallDirection;
    get_multiparty(): boolean;
    get_number(): string;
    get_path(): string;
    get_state(): CallState;
    get_state_reason(): CallStateReason;
    hangup(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    hangup(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    hangup(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    hangup_finish(res: Gio.AsyncResult): boolean;
    hangup_sync(cancellable?: Gio.Cancellable | null): boolean;
    join_multiparty(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    join_multiparty(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    join_multiparty(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    join_multiparty_finish(res: Gio.AsyncResult): boolean;
    join_multiparty_sync(cancellable?: Gio.Cancellable | null): boolean;
    leave_multiparty(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    leave_multiparty(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    leave_multiparty(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    leave_multiparty_finish(res: Gio.AsyncResult): boolean;
    leave_multiparty_sync(cancellable?: Gio.Cancellable | null): boolean;
    peek_audio_format(): CallAudioFormat;
    send_dtmf(dtmf: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    send_dtmf(dtmf: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    send_dtmf(
        dtmf: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    send_dtmf_finish(res: Gio.AsyncResult): boolean;
    send_dtmf_sync(dtmf: string, cancellable?: Gio.Cancellable | null): boolean;
    start(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    start(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    start(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    start_finish(res: Gio.AsyncResult): boolean;
    start_sync(cancellable?: Gio.Cancellable | null): boolean;

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
    new_finish(res: Gio.AsyncResult): Call;
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
export module CallAudioFormat {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class CallAudioFormat extends GObject.Object {
    static $gtype: GObject.GType<CallAudioFormat>;

    constructor(properties?: Partial<CallAudioFormat.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CallAudioFormat.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_encoding(): string;
    get_rate(): number;
    get_resolution(): string;
}
export module CallProperties {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class CallProperties extends GObject.Object {
    static $gtype: GObject.GType<CallProperties>;

    constructor(properties?: Partial<CallProperties.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CallProperties.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): CallProperties;
    static new_from_dictionary(dictionary: GLib.Variant): CallProperties;
    static new_from_string(str: string): CallProperties;

    // Members

    get_dictionary(): GLib.Variant;
    get_direction(): CallDirection;
    get_number(): string;
    get_state(): CallState;
    get_state_reason(): CallStateReason;
    set_direction(direction: CallDirection): void;
    set_number(text: string): void;
    set_state(state: CallState): void;
    set_state_reason(state_reason: CallStateReason): void;
}
export module CdmaManualActivationProperties {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class CdmaManualActivationProperties extends GObject.Object {
    static $gtype: GObject.GType<CdmaManualActivationProperties>;

    constructor(properties?: Partial<CdmaManualActivationProperties.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CdmaManualActivationProperties.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): CdmaManualActivationProperties;

    // Members

    get_mdn(): string;
    get_min(): string;
    get_mn_aaa_key(): string;
    get_mn_ha_key(): string;
    get_prl(): [number, number];
    get_prl_bytearray(): Uint8Array;
    get_sid(): number;
    get_spc(): string;
    peek_prl_bytearray(): Uint8Array;
    set_mdn(mdn: string): boolean;
    set_min(min: string): boolean;
    set_mn_aaa_key(mn_aaa_key: string): boolean;
    set_mn_ha_key(mn_ha_key: string): boolean;
    set_prl(prl: number, prl_length: number): boolean;
    set_prl_bytearray(prl: Uint8Array | string): boolean;
    set_sid(sid: number): void;
    set_spc(spc: string): boolean;
}
export module FirmwareProperties {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class FirmwareProperties extends GObject.Object {
    static $gtype: GObject.GType<FirmwareProperties>;

    constructor(properties?: Partial<FirmwareProperties.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FirmwareProperties.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](image_type: FirmwareImageType, unique_id: string): FirmwareProperties;
    static new_from_dictionary(dictionary: GLib.Variant): FirmwareProperties;

    // Members

    get_dictionary(): GLib.Variant;
    get_gobi_boot_version(): string;
    get_gobi_modem_unique_id(): string;
    get_gobi_pri_info(): string;
    get_gobi_pri_unique_id(): string;
    get_gobi_pri_version(): string;
    get_image_type(): FirmwareImageType;
    get_unique_id(): string;
    set_gobi_boot_version(version: string): void;
    set_gobi_modem_unique_id(id: string): void;
    set_gobi_pri_info(info: string): void;
    set_gobi_pri_unique_id(id: string): void;
    set_gobi_pri_version(version: string): void;
}
export module FirmwareUpdateSettings {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class FirmwareUpdateSettings extends GObject.Object {
    static $gtype: GObject.GType<FirmwareUpdateSettings>;

    constructor(properties?: Partial<FirmwareUpdateSettings.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FirmwareUpdateSettings.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_device_ids(): string[];
    get_fastboot_at(): string;
    get_method(): ModemFirmwareUpdateMethod;
    get_version(): string;
}
export module GdbusBearerProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusBearerProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<GdbusBearerProxy>, Gio.DBusInterface, Gio.Initable, GdbusBearer {
    static $gtype: GObject.GType<GdbusBearerProxy>;

    constructor(properties?: Partial<GdbusBearerProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusBearerProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    bearer_type: number;
    bearerType: number;
    connected: boolean;
    "interface": string;
    ip_timeout: number;
    ipTimeout: number;
    ip4_config: GLib.Variant;
    ip4Config: GLib.Variant;
    ip6_config: GLib.Variant;
    ip6Config: GLib.Variant;
    properties: GLib.Variant;
    stats: GLib.Variant;
    suspended: boolean;

    // Constructors

    static new_finish(res: Gio.AsyncResult): GdbusBearerProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusBearerProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusBearerProxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusBearerProxy;
    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusBearerProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusBearerProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusBearerProxy> | null
    ): Promise<GdbusBearerProxy> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusBearerProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusBearerProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusBearerProxy> | null
    ): Promise<GdbusBearerProxy> | void;
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
    new_finish(res: Gio.AsyncResult): GdbusBearerProxy;
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
    call_connect(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_connect(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_connect_finish(res: Gio.AsyncResult): boolean;
    call_connect_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_disconnect(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_disconnect(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_disconnect_finish(res: Gio.AsyncResult): boolean;
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;
    complete_connect(invocation: Gio.DBusMethodInvocation): void;
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_connect(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;
}
export module GdbusBearerSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusBearerSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusBearer {
    static $gtype: GObject.GType<GdbusBearerSkeleton>;

    constructor(properties?: Partial<GdbusBearerSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusBearerSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    bearer_type: number;
    bearerType: number;
    connected: boolean;
    "interface": string;
    ip_timeout: number;
    ipTimeout: number;
    ip4_config: GLib.Variant;
    ip4Config: GLib.Variant;
    ip6_config: GLib.Variant;
    ip6Config: GLib.Variant;
    properties: GLib.Variant;
    stats: GLib.Variant;
    suspended: boolean;

    // Constructors

    static ["new"](): GdbusBearerSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    call_connect(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_connect(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_connect_finish(res: Gio.AsyncResult): boolean;
    call_connect_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_disconnect(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_disconnect(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_disconnect_finish(res: Gio.AsyncResult): boolean;
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;
    complete_connect(invocation: Gio.DBusMethodInvocation): void;
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_connect(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;
}
export module GdbusModem3gppProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModem3gppProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<GdbusModem3gppProxy>, Gio.DBusInterface, Gio.Initable, GdbusModem3gpp {
    static $gtype: GObject.GType<GdbusModem3gppProxy>;

    constructor(properties?: Partial<GdbusModem3gppProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModem3gppProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    enabled_facility_locks: number;
    enabledFacilityLocks: number;
    eps_ue_mode_operation: number;
    epsUeModeOperation: number;
    imei: string;
    initial_eps_bearer: string;
    initialEpsBearer: string;
    initial_eps_bearer_settings: GLib.Variant;
    initialEpsBearerSettings: GLib.Variant;
    operator_code: string;
    operatorCode: string;
    operator_name: string;
    operatorName: string;
    pco: GLib.Variant;
    registration_state: number;
    registrationState: number;
    subscription_state: number;
    subscriptionState: number;

    // Constructors

    static new_finish(res: Gio.AsyncResult): GdbusModem3gppProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModem3gppProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModem3gppProxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModem3gppProxy;
    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModem3gppProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModem3gppProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModem3gppProxy> | null
    ): Promise<GdbusModem3gppProxy> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModem3gppProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModem3gppProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModem3gppProxy> | null
    ): Promise<GdbusModem3gppProxy> | void;
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
    new_finish(res: Gio.AsyncResult): GdbusModem3gppProxy;
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
    call_register(arg_operator_id: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_register(
        arg_operator_id: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_register(
        arg_operator_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_register_finish(res: Gio.AsyncResult): boolean;
    call_register_sync(arg_operator_id: string, cancellable?: Gio.Cancellable | null): boolean;
    call_scan(cancellable?: Gio.Cancellable | null): Promise<[GLib.Variant | null]>;
    call_scan(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_scan(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[GLib.Variant | null]> | void;
    call_scan_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_scan_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    call_set_eps_ue_mode_operation(arg_mode: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_eps_ue_mode_operation(
        arg_mode: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_eps_ue_mode_operation(
        arg_mode: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_eps_ue_mode_operation_finish(res: Gio.AsyncResult): boolean;
    call_set_eps_ue_mode_operation_sync(arg_mode: number, cancellable?: Gio.Cancellable | null): boolean;
    call_set_initial_eps_bearer_settings(
        arg_settings: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_set_initial_eps_bearer_settings(
        arg_settings: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_initial_eps_bearer_settings(
        arg_settings: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_initial_eps_bearer_settings_finish(res: Gio.AsyncResult): boolean;
    call_set_initial_eps_bearer_settings_sync(
        arg_settings: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    complete_register(invocation: Gio.DBusMethodInvocation): void;
    complete_scan(invocation: Gio.DBusMethodInvocation, results: GLib.Variant): void;
    complete_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation): void;
    complete_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_register(invocation: Gio.DBusMethodInvocation, arg_operator_id: string): boolean;
    vfunc_handle_scan(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation, arg_mode: number): boolean;
    vfunc_handle_set_initial_eps_bearer_settings(
        invocation: Gio.DBusMethodInvocation,
        arg_settings: GLib.Variant
    ): boolean;
}
export module GdbusModem3gppSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModem3gppSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModem3gpp {
    static $gtype: GObject.GType<GdbusModem3gppSkeleton>;

    constructor(properties?: Partial<GdbusModem3gppSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModem3gppSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    enabled_facility_locks: number;
    enabledFacilityLocks: number;
    eps_ue_mode_operation: number;
    epsUeModeOperation: number;
    imei: string;
    initial_eps_bearer: string;
    initialEpsBearer: string;
    initial_eps_bearer_settings: GLib.Variant;
    initialEpsBearerSettings: GLib.Variant;
    operator_code: string;
    operatorCode: string;
    operator_name: string;
    operatorName: string;
    pco: GLib.Variant;
    registration_state: number;
    registrationState: number;
    subscription_state: number;
    subscriptionState: number;

    // Constructors

    static ["new"](): GdbusModem3gppSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    call_register(arg_operator_id: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_register(
        arg_operator_id: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_register(
        arg_operator_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_register_finish(res: Gio.AsyncResult): boolean;
    call_register_sync(arg_operator_id: string, cancellable?: Gio.Cancellable | null): boolean;
    call_scan(cancellable?: Gio.Cancellable | null): Promise<[GLib.Variant | null]>;
    call_scan(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_scan(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[GLib.Variant | null]> | void;
    call_scan_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_scan_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    call_set_eps_ue_mode_operation(arg_mode: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_eps_ue_mode_operation(
        arg_mode: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_eps_ue_mode_operation(
        arg_mode: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_eps_ue_mode_operation_finish(res: Gio.AsyncResult): boolean;
    call_set_eps_ue_mode_operation_sync(arg_mode: number, cancellable?: Gio.Cancellable | null): boolean;
    call_set_initial_eps_bearer_settings(
        arg_settings: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_set_initial_eps_bearer_settings(
        arg_settings: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_initial_eps_bearer_settings(
        arg_settings: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_initial_eps_bearer_settings_finish(res: Gio.AsyncResult): boolean;
    call_set_initial_eps_bearer_settings_sync(
        arg_settings: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    complete_register(invocation: Gio.DBusMethodInvocation): void;
    complete_scan(invocation: Gio.DBusMethodInvocation, results: GLib.Variant): void;
    complete_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation): void;
    complete_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_register(invocation: Gio.DBusMethodInvocation, arg_operator_id: string): boolean;
    vfunc_handle_scan(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation, arg_mode: number): boolean;
    vfunc_handle_set_initial_eps_bearer_settings(
        invocation: Gio.DBusMethodInvocation,
        arg_settings: GLib.Variant
    ): boolean;
}
export module GdbusModem3gppUssdProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModem3gppUssdProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<GdbusModem3gppUssdProxy>, Gio.DBusInterface, Gio.Initable, GdbusModem3gppUssd {
    static $gtype: GObject.GType<GdbusModem3gppUssdProxy>;

    constructor(properties?: Partial<GdbusModem3gppUssdProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModem3gppUssdProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    network_notification: string;
    networkNotification: string;
    network_request: string;
    networkRequest: string;
    state: number;

    // Constructors

    static new_finish(res: Gio.AsyncResult): GdbusModem3gppUssdProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModem3gppUssdProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModem3gppUssdProxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModem3gppUssdProxy;
    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModem3gppUssdProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModem3gppUssdProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModem3gppUssdProxy> | null
    ): Promise<GdbusModem3gppUssdProxy> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModem3gppUssdProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModem3gppUssdProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModem3gppUssdProxy> | null
    ): Promise<GdbusModem3gppUssdProxy> | void;
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
    new_finish(res: Gio.AsyncResult): GdbusModem3gppUssdProxy;
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
    call_cancel(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_cancel(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_cancel_finish(res: Gio.AsyncResult): boolean;
    call_cancel_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_initiate(arg_command: string, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_initiate(
        arg_command: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_initiate(
        arg_command: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_initiate_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_initiate_sync(arg_command: string, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    call_respond(arg_response: string, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_respond(
        arg_response: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_respond(
        arg_response: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_respond_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_respond_sync(arg_response: string, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    complete_cancel(invocation: Gio.DBusMethodInvocation): void;
    complete_initiate(invocation: Gio.DBusMethodInvocation, reply: string): void;
    complete_respond(invocation: Gio.DBusMethodInvocation, reply: string): void;
    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_initiate(invocation: Gio.DBusMethodInvocation, arg_command: string): boolean;
    vfunc_handle_respond(invocation: Gio.DBusMethodInvocation, arg_response: string): boolean;
}
export module GdbusModem3gppUssdSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModem3gppUssdSkeleton
    extends Gio.DBusInterfaceSkeleton
    implements Gio.DBusInterface, GdbusModem3gppUssd {
    static $gtype: GObject.GType<GdbusModem3gppUssdSkeleton>;

    constructor(properties?: Partial<GdbusModem3gppUssdSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModem3gppUssdSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    network_notification: string;
    networkNotification: string;
    network_request: string;
    networkRequest: string;
    state: number;

    // Constructors

    static ["new"](): GdbusModem3gppUssdSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    call_cancel(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_cancel(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_cancel_finish(res: Gio.AsyncResult): boolean;
    call_cancel_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_initiate(arg_command: string, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_initiate(
        arg_command: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_initiate(
        arg_command: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_initiate_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_initiate_sync(arg_command: string, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    call_respond(arg_response: string, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_respond(
        arg_response: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_respond(
        arg_response: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_respond_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_respond_sync(arg_response: string, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    complete_cancel(invocation: Gio.DBusMethodInvocation): void;
    complete_initiate(invocation: Gio.DBusMethodInvocation, reply: string): void;
    complete_respond(invocation: Gio.DBusMethodInvocation, reply: string): void;
    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_initiate(invocation: Gio.DBusMethodInvocation, arg_command: string): boolean;
    vfunc_handle_respond(invocation: Gio.DBusMethodInvocation, arg_response: string): boolean;
}
export module GdbusModemCdmaProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemCdmaProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<GdbusModemCdmaProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemCdma {
    static $gtype: GObject.GType<GdbusModemCdmaProxy>;

    constructor(properties?: Partial<GdbusModemCdmaProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemCdmaProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    activation_state: number;
    activationState: number;
    cdma1x_registration_state: number;
    cdma1xRegistrationState: number;
    esn: string;
    evdo_registration_state: number;
    evdoRegistrationState: number;
    meid: string;
    nid: number;
    sid: number;

    // Constructors

    static new_finish(res: Gio.AsyncResult): GdbusModemCdmaProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemCdmaProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemCdmaProxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemCdmaProxy;
    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemCdmaProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemCdmaProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemCdmaProxy> | null
    ): Promise<GdbusModemCdmaProxy> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemCdmaProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemCdmaProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemCdmaProxy> | null
    ): Promise<GdbusModemCdmaProxy> | void;
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
    new_finish(res: Gio.AsyncResult): GdbusModemCdmaProxy;
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
    call_activate(arg_carrier_code: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_activate(
        arg_carrier_code: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_activate(
        arg_carrier_code: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_activate_finish(res: Gio.AsyncResult): boolean;
    call_activate_manual(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_activate_manual(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_activate_manual(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_activate_manual_finish(res: Gio.AsyncResult): boolean;
    call_activate_manual_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_activate_sync(arg_carrier_code: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_activate(invocation: Gio.DBusMethodInvocation): void;
    complete_activate_manual(invocation: Gio.DBusMethodInvocation): void;
    emit_activation_state_changed(
        arg_activation_state: number,
        arg_activation_error: number,
        arg_status_changes: GLib.Variant
    ): void;
    vfunc_activation_state_changed(
        arg_activation_state: number,
        arg_activation_error: number,
        arg_status_changes: GLib.Variant
    ): void;
    vfunc_handle_activate(invocation: Gio.DBusMethodInvocation, arg_carrier_code: string): boolean;
    vfunc_handle_activate_manual(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
}
export module GdbusModemCdmaSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemCdmaSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModemCdma {
    static $gtype: GObject.GType<GdbusModemCdmaSkeleton>;

    constructor(properties?: Partial<GdbusModemCdmaSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemCdmaSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    activation_state: number;
    activationState: number;
    cdma1x_registration_state: number;
    cdma1xRegistrationState: number;
    esn: string;
    evdo_registration_state: number;
    evdoRegistrationState: number;
    meid: string;
    nid: number;
    sid: number;

    // Constructors

    static ["new"](): GdbusModemCdmaSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    call_activate(arg_carrier_code: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_activate(
        arg_carrier_code: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_activate(
        arg_carrier_code: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_activate_finish(res: Gio.AsyncResult): boolean;
    call_activate_manual(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_activate_manual(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_activate_manual(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_activate_manual_finish(res: Gio.AsyncResult): boolean;
    call_activate_manual_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_activate_sync(arg_carrier_code: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_activate(invocation: Gio.DBusMethodInvocation): void;
    complete_activate_manual(invocation: Gio.DBusMethodInvocation): void;
    emit_activation_state_changed(
        arg_activation_state: number,
        arg_activation_error: number,
        arg_status_changes: GLib.Variant
    ): void;
    vfunc_activation_state_changed(
        arg_activation_state: number,
        arg_activation_error: number,
        arg_status_changes: GLib.Variant
    ): void;
    vfunc_handle_activate(invocation: Gio.DBusMethodInvocation, arg_carrier_code: string): boolean;
    vfunc_handle_activate_manual(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
}
export module GdbusModemFirmwareProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemFirmwareProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<GdbusModemFirmwareProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemFirmware {
    static $gtype: GObject.GType<GdbusModemFirmwareProxy>;

    constructor(properties?: Partial<GdbusModemFirmwareProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemFirmwareProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    update_settings: GLib.Variant;
    updateSettings: GLib.Variant;

    // Constructors

    static new_finish(res: Gio.AsyncResult): GdbusModemFirmwareProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemFirmwareProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemFirmwareProxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemFirmwareProxy;
    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemFirmwareProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemFirmwareProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemFirmwareProxy> | null
    ): Promise<GdbusModemFirmwareProxy> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemFirmwareProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemFirmwareProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemFirmwareProxy> | null
    ): Promise<GdbusModemFirmwareProxy> | void;
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
    new_finish(res: Gio.AsyncResult): GdbusModemFirmwareProxy;
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
    call_list(cancellable?: Gio.Cancellable | null): Promise<[string | null, GLib.Variant | null]>;
    call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_list(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null, GLib.Variant | null]> | void;
    call_list_finish(res: Gio.AsyncResult): [boolean, string | null, GLib.Variant | null];
    call_list_sync(cancellable?: Gio.Cancellable | null): [boolean, string | null, GLib.Variant | null];
    call_select(arg_uniqueid: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_select(
        arg_uniqueid: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_select(
        arg_uniqueid: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_select_finish(res: Gio.AsyncResult): boolean;
    call_select_sync(arg_uniqueid: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_list(invocation: Gio.DBusMethodInvocation, selected: string, installed: GLib.Variant): void;
    complete_select(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_select(invocation: Gio.DBusMethodInvocation, arg_uniqueid: string): boolean;
}
export module GdbusModemFirmwareSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemFirmwareSkeleton
    extends Gio.DBusInterfaceSkeleton
    implements Gio.DBusInterface, GdbusModemFirmware {
    static $gtype: GObject.GType<GdbusModemFirmwareSkeleton>;

    constructor(properties?: Partial<GdbusModemFirmwareSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemFirmwareSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    update_settings: GLib.Variant;
    updateSettings: GLib.Variant;

    // Constructors

    static ["new"](): GdbusModemFirmwareSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    call_list(cancellable?: Gio.Cancellable | null): Promise<[string | null, GLib.Variant | null]>;
    call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_list(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null, GLib.Variant | null]> | void;
    call_list_finish(res: Gio.AsyncResult): [boolean, string | null, GLib.Variant | null];
    call_list_sync(cancellable?: Gio.Cancellable | null): [boolean, string | null, GLib.Variant | null];
    call_select(arg_uniqueid: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_select(
        arg_uniqueid: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_select(
        arg_uniqueid: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_select_finish(res: Gio.AsyncResult): boolean;
    call_select_sync(arg_uniqueid: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_list(invocation: Gio.DBusMethodInvocation, selected: string, installed: GLib.Variant): void;
    complete_select(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_select(invocation: Gio.DBusMethodInvocation, arg_uniqueid: string): boolean;
}
export module GdbusModemLocationProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemLocationProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<GdbusModemLocationProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemLocation {
    static $gtype: GObject.GType<GdbusModemLocationProxy>;

    constructor(properties?: Partial<GdbusModemLocationProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemLocationProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    assistance_data_servers: string[];
    assistanceDataServers: string[];
    capabilities: number;
    enabled: number;
    gps_refresh_rate: number;
    gpsRefreshRate: number;
    location: GLib.Variant;
    signals_location: boolean;
    signalsLocation: boolean;
    supl_server: string;
    suplServer: string;
    supported_assistance_data: number;
    supportedAssistanceData: number;

    // Constructors

    static new_finish(res: Gio.AsyncResult): GdbusModemLocationProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemLocationProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemLocationProxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemLocationProxy;
    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemLocationProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemLocationProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemLocationProxy> | null
    ): Promise<GdbusModemLocationProxy> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemLocationProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemLocationProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemLocationProxy> | null
    ): Promise<GdbusModemLocationProxy> | void;
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
    new_finish(res: Gio.AsyncResult): GdbusModemLocationProxy;
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
    call_get_location(cancellable?: Gio.Cancellable | null): Promise<[GLib.Variant | null]>;
    call_get_location(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_get_location(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[GLib.Variant | null]> | void;
    call_get_location_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_get_location_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    call_inject_assistance_data(arg_data: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_inject_assistance_data(
        arg_data: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_inject_assistance_data(
        arg_data: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_inject_assistance_data_finish(res: Gio.AsyncResult): boolean;
    call_inject_assistance_data_sync(arg_data: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_set_gps_refresh_rate(arg_rate: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_gps_refresh_rate(
        arg_rate: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_gps_refresh_rate(
        arg_rate: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_gps_refresh_rate_finish(res: Gio.AsyncResult): boolean;
    call_set_gps_refresh_rate_sync(arg_rate: number, cancellable?: Gio.Cancellable | null): boolean;
    call_set_supl_server(arg_supl: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_supl_server(
        arg_supl: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_supl_server(
        arg_supl: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_supl_server_finish(res: Gio.AsyncResult): boolean;
    call_set_supl_server_sync(arg_supl: string, cancellable?: Gio.Cancellable | null): boolean;
    call_setup(
        arg_sources: number,
        arg_signal_location: boolean,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_setup(
        arg_sources: number,
        arg_signal_location: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_setup(
        arg_sources: number,
        arg_signal_location: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_setup_finish(res: Gio.AsyncResult): boolean;
    call_setup_sync(arg_sources: number, arg_signal_location: boolean, cancellable?: Gio.Cancellable | null): boolean;
    complete_get_location(invocation: Gio.DBusMethodInvocation, Location: GLib.Variant): void;
    complete_inject_assistance_data(invocation: Gio.DBusMethodInvocation): void;
    complete_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation): void;
    complete_set_supl_server(invocation: Gio.DBusMethodInvocation): void;
    complete_setup(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_get_location(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_inject_assistance_data(invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): boolean;
    vfunc_handle_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean;
    vfunc_handle_set_supl_server(invocation: Gio.DBusMethodInvocation, arg_supl: string): boolean;
    vfunc_handle_setup(
        invocation: Gio.DBusMethodInvocation,
        arg_sources: number,
        arg_signal_location: boolean
    ): boolean;
}
export module GdbusModemLocationSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemLocationSkeleton
    extends Gio.DBusInterfaceSkeleton
    implements Gio.DBusInterface, GdbusModemLocation {
    static $gtype: GObject.GType<GdbusModemLocationSkeleton>;

    constructor(properties?: Partial<GdbusModemLocationSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemLocationSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    assistance_data_servers: string[];
    assistanceDataServers: string[];
    capabilities: number;
    enabled: number;
    gps_refresh_rate: number;
    gpsRefreshRate: number;
    location: GLib.Variant;
    signals_location: boolean;
    signalsLocation: boolean;
    supl_server: string;
    suplServer: string;
    supported_assistance_data: number;
    supportedAssistanceData: number;

    // Constructors

    static ["new"](): GdbusModemLocationSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    call_get_location(cancellable?: Gio.Cancellable | null): Promise<[GLib.Variant | null]>;
    call_get_location(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_get_location(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[GLib.Variant | null]> | void;
    call_get_location_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_get_location_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    call_inject_assistance_data(arg_data: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_inject_assistance_data(
        arg_data: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_inject_assistance_data(
        arg_data: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_inject_assistance_data_finish(res: Gio.AsyncResult): boolean;
    call_inject_assistance_data_sync(arg_data: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_set_gps_refresh_rate(arg_rate: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_gps_refresh_rate(
        arg_rate: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_gps_refresh_rate(
        arg_rate: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_gps_refresh_rate_finish(res: Gio.AsyncResult): boolean;
    call_set_gps_refresh_rate_sync(arg_rate: number, cancellable?: Gio.Cancellable | null): boolean;
    call_set_supl_server(arg_supl: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_supl_server(
        arg_supl: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_supl_server(
        arg_supl: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_supl_server_finish(res: Gio.AsyncResult): boolean;
    call_set_supl_server_sync(arg_supl: string, cancellable?: Gio.Cancellable | null): boolean;
    call_setup(
        arg_sources: number,
        arg_signal_location: boolean,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_setup(
        arg_sources: number,
        arg_signal_location: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_setup(
        arg_sources: number,
        arg_signal_location: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_setup_finish(res: Gio.AsyncResult): boolean;
    call_setup_sync(arg_sources: number, arg_signal_location: boolean, cancellable?: Gio.Cancellable | null): boolean;
    complete_get_location(invocation: Gio.DBusMethodInvocation, Location: GLib.Variant): void;
    complete_inject_assistance_data(invocation: Gio.DBusMethodInvocation): void;
    complete_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation): void;
    complete_set_supl_server(invocation: Gio.DBusMethodInvocation): void;
    complete_setup(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_get_location(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_inject_assistance_data(invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): boolean;
    vfunc_handle_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean;
    vfunc_handle_set_supl_server(invocation: Gio.DBusMethodInvocation, arg_supl: string): boolean;
    vfunc_handle_setup(
        invocation: Gio.DBusMethodInvocation,
        arg_sources: number,
        arg_signal_location: boolean
    ): boolean;
}
export module GdbusModemMessagingProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemMessagingProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<GdbusModemMessagingProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemMessaging {
    static $gtype: GObject.GType<GdbusModemMessagingProxy>;

    constructor(properties?: Partial<GdbusModemMessagingProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemMessagingProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    default_storage: number;
    defaultStorage: number;
    messages: string[];
    supported_storages: GLib.Variant;
    supportedStorages: GLib.Variant;

    // Constructors

    static new_finish(res: Gio.AsyncResult): GdbusModemMessagingProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemMessagingProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemMessagingProxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemMessagingProxy;
    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemMessagingProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemMessagingProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemMessagingProxy> | null
    ): Promise<GdbusModemMessagingProxy> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemMessagingProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemMessagingProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemMessagingProxy> | null
    ): Promise<GdbusModemMessagingProxy> | void;
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
    new_finish(res: Gio.AsyncResult): GdbusModemMessagingProxy;
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
    call_create(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_create(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_create(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_create_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    call_delete(arg_path: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_delete(
        arg_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_delete(
        arg_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_delete_finish(res: Gio.AsyncResult): boolean;
    call_delete_sync(arg_path: string, cancellable?: Gio.Cancellable | null): boolean;
    call_list(cancellable?: Gio.Cancellable | null): Promise<[string[] | null]>;
    call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_list(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string[] | null]> | void;
    call_list_finish(res: Gio.AsyncResult): [boolean, string[] | null];
    call_list_sync(cancellable?: Gio.Cancellable | null): [boolean, string[] | null];
    complete_create(invocation: Gio.DBusMethodInvocation, path: string): void;
    complete_delete(invocation: Gio.DBusMethodInvocation): void;
    complete_list(invocation: Gio.DBusMethodInvocation, result: string): void;
    emit_added(arg_path: string, arg_received: boolean): void;
    emit_deleted(arg_path: string): void;
    vfunc_added(arg_path: string, arg_received: boolean): void;
    vfunc_deleted(arg_path: string): void;
    vfunc_handle_create(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
    vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
}
export module GdbusModemMessagingSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemMessagingSkeleton
    extends Gio.DBusInterfaceSkeleton
    implements Gio.DBusInterface, GdbusModemMessaging {
    static $gtype: GObject.GType<GdbusModemMessagingSkeleton>;

    constructor(properties?: Partial<GdbusModemMessagingSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemMessagingSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    default_storage: number;
    defaultStorage: number;
    messages: string[];
    supported_storages: GLib.Variant;
    supportedStorages: GLib.Variant;

    // Constructors

    static ["new"](): GdbusModemMessagingSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    call_create(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_create(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_create(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_create_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    call_delete(arg_path: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_delete(
        arg_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_delete(
        arg_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_delete_finish(res: Gio.AsyncResult): boolean;
    call_delete_sync(arg_path: string, cancellable?: Gio.Cancellable | null): boolean;
    call_list(cancellable?: Gio.Cancellable | null): Promise<[string[] | null]>;
    call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_list(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string[] | null]> | void;
    call_list_finish(res: Gio.AsyncResult): [boolean, string[] | null];
    call_list_sync(cancellable?: Gio.Cancellable | null): [boolean, string[] | null];
    complete_create(invocation: Gio.DBusMethodInvocation, path: string): void;
    complete_delete(invocation: Gio.DBusMethodInvocation): void;
    complete_list(invocation: Gio.DBusMethodInvocation, result: string): void;
    emit_added(arg_path: string, arg_received: boolean): void;
    emit_deleted(arg_path: string): void;
    vfunc_added(arg_path: string, arg_received: boolean): void;
    vfunc_deleted(arg_path: string): void;
    vfunc_handle_create(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
    vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
}
export module GdbusModemOmaProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemOmaProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<GdbusModemOmaProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemOma {
    static $gtype: GObject.GType<GdbusModemOmaProxy>;

    constructor(properties?: Partial<GdbusModemOmaProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemOmaProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    features: number;
    pending_network_initiated_sessions: GLib.Variant;
    pendingNetworkInitiatedSessions: GLib.Variant;
    session_state: number;
    sessionState: number;
    session_type: number;
    sessionType: number;

    // Constructors

    static new_finish(res: Gio.AsyncResult): GdbusModemOmaProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemOmaProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemOmaProxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemOmaProxy;
    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemOmaProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemOmaProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemOmaProxy> | null
    ): Promise<GdbusModemOmaProxy> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemOmaProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemOmaProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemOmaProxy> | null
    ): Promise<GdbusModemOmaProxy> | void;
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
    new_finish(res: Gio.AsyncResult): GdbusModemOmaProxy;
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
    call_accept_network_initiated_session(
        arg_session_id: number,
        arg_accept: boolean,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_accept_network_initiated_session(
        arg_session_id: number,
        arg_accept: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_accept_network_initiated_session(
        arg_session_id: number,
        arg_accept: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_accept_network_initiated_session_finish(res: Gio.AsyncResult): boolean;
    call_accept_network_initiated_session_sync(
        arg_session_id: number,
        arg_accept: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_cancel_session(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_cancel_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_cancel_session(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_cancel_session_finish(res: Gio.AsyncResult): boolean;
    call_cancel_session_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_setup(arg_features: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_setup(
        arg_features: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_setup(
        arg_features: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_setup_finish(res: Gio.AsyncResult): boolean;
    call_setup_sync(arg_features: number, cancellable?: Gio.Cancellable | null): boolean;
    call_start_client_initiated_session(
        arg_session_type: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_start_client_initiated_session(
        arg_session_type: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_start_client_initiated_session(
        arg_session_type: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_start_client_initiated_session_finish(res: Gio.AsyncResult): boolean;
    call_start_client_initiated_session_sync(arg_session_type: number, cancellable?: Gio.Cancellable | null): boolean;
    complete_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation): void;
    complete_cancel_session(invocation: Gio.DBusMethodInvocation): void;
    complete_setup(invocation: Gio.DBusMethodInvocation): void;
    complete_start_client_initiated_session(invocation: Gio.DBusMethodInvocation): void;
    emit_session_state_changed(
        arg_old_session_state: number,
        arg_new_session_state: number,
        arg_session_state_failed_reason: number
    ): void;
    vfunc_handle_accept_network_initiated_session(
        invocation: Gio.DBusMethodInvocation,
        arg_session_id: number,
        arg_accept: boolean
    ): boolean;
    vfunc_handle_cancel_session(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_features: number): boolean;
    vfunc_handle_start_client_initiated_session(
        invocation: Gio.DBusMethodInvocation,
        arg_session_type: number
    ): boolean;
    vfunc_session_state_changed(
        arg_old_session_state: number,
        arg_new_session_state: number,
        arg_session_state_failed_reason: number
    ): void;
}
export module GdbusModemOmaSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemOmaSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModemOma {
    static $gtype: GObject.GType<GdbusModemOmaSkeleton>;

    constructor(properties?: Partial<GdbusModemOmaSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemOmaSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    features: number;
    pending_network_initiated_sessions: GLib.Variant;
    pendingNetworkInitiatedSessions: GLib.Variant;
    session_state: number;
    sessionState: number;
    session_type: number;
    sessionType: number;

    // Constructors

    static ["new"](): GdbusModemOmaSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    call_accept_network_initiated_session(
        arg_session_id: number,
        arg_accept: boolean,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_accept_network_initiated_session(
        arg_session_id: number,
        arg_accept: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_accept_network_initiated_session(
        arg_session_id: number,
        arg_accept: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_accept_network_initiated_session_finish(res: Gio.AsyncResult): boolean;
    call_accept_network_initiated_session_sync(
        arg_session_id: number,
        arg_accept: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_cancel_session(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_cancel_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_cancel_session(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_cancel_session_finish(res: Gio.AsyncResult): boolean;
    call_cancel_session_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_setup(arg_features: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_setup(
        arg_features: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_setup(
        arg_features: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_setup_finish(res: Gio.AsyncResult): boolean;
    call_setup_sync(arg_features: number, cancellable?: Gio.Cancellable | null): boolean;
    call_start_client_initiated_session(
        arg_session_type: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_start_client_initiated_session(
        arg_session_type: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_start_client_initiated_session(
        arg_session_type: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_start_client_initiated_session_finish(res: Gio.AsyncResult): boolean;
    call_start_client_initiated_session_sync(arg_session_type: number, cancellable?: Gio.Cancellable | null): boolean;
    complete_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation): void;
    complete_cancel_session(invocation: Gio.DBusMethodInvocation): void;
    complete_setup(invocation: Gio.DBusMethodInvocation): void;
    complete_start_client_initiated_session(invocation: Gio.DBusMethodInvocation): void;
    emit_session_state_changed(
        arg_old_session_state: number,
        arg_new_session_state: number,
        arg_session_state_failed_reason: number
    ): void;
    vfunc_handle_accept_network_initiated_session(
        invocation: Gio.DBusMethodInvocation,
        arg_session_id: number,
        arg_accept: boolean
    ): boolean;
    vfunc_handle_cancel_session(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_features: number): boolean;
    vfunc_handle_start_client_initiated_session(
        invocation: Gio.DBusMethodInvocation,
        arg_session_type: number
    ): boolean;
    vfunc_session_state_changed(
        arg_old_session_state: number,
        arg_new_session_state: number,
        arg_session_state_failed_reason: number
    ): void;
}
export module GdbusModemProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<GdbusModemProxy>, Gio.DBusInterface, Gio.Initable, GdbusModem {
    static $gtype: GObject.GType<GdbusModemProxy>;

    constructor(properties?: Partial<GdbusModemProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    access_technologies: number;
    accessTechnologies: number;
    bearers: string[];
    carrier_configuration: string;
    carrierConfiguration: string;
    carrier_configuration_revision: string;
    carrierConfigurationRevision: string;
    current_bands: GLib.Variant;
    currentBands: GLib.Variant;
    current_capabilities: number;
    currentCapabilities: number;
    current_modes: GLib.Variant;
    currentModes: GLib.Variant;
    device: string;
    device_identifier: string;
    deviceIdentifier: string;
    drivers: string[];
    equipment_identifier: string;
    equipmentIdentifier: string;
    hardware_revision: string;
    hardwareRevision: string;
    manufacturer: string;
    max_active_bearers: number;
    maxActiveBearers: number;
    max_bearers: number;
    maxBearers: number;
    model: string;
    own_numbers: string[];
    ownNumbers: string[];
    plugin: string;
    ports: GLib.Variant;
    power_state: number;
    powerState: number;
    primary_port: string;
    primaryPort: string;
    revision: string;
    signal_quality: GLib.Variant;
    signalQuality: GLib.Variant;
    sim: string;
    state: number;
    state_failed_reason: number;
    stateFailedReason: number;
    supported_bands: GLib.Variant;
    supportedBands: GLib.Variant;
    supported_capabilities: GLib.Variant;
    supportedCapabilities: GLib.Variant;
    supported_ip_families: number;
    supportedIpFamilies: number;
    supported_modes: GLib.Variant;
    supportedModes: GLib.Variant;
    unlock_required: number;
    unlockRequired: number;
    unlock_retries: GLib.Variant;
    unlockRetries: GLib.Variant;

    // Constructors

    static new_finish(res: Gio.AsyncResult): GdbusModemProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemProxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemProxy;
    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemProxy> | null
    ): Promise<GdbusModemProxy> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemProxy> | null
    ): Promise<GdbusModemProxy> | void;
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
    new_finish(res: Gio.AsyncResult): GdbusModemProxy;
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
    call_command(arg_cmd: string, arg_timeout: number, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_command(
        arg_cmd: string,
        arg_timeout: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_command(
        arg_cmd: string,
        arg_timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_command_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_command_sync(
        arg_cmd: string,
        arg_timeout: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];
    call_create_bearer(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_create_bearer(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_create_bearer(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_create_bearer_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_bearer_sync(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];
    call_delete_bearer(arg_bearer: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_delete_bearer(
        arg_bearer: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_delete_bearer(
        arg_bearer: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_delete_bearer_finish(res: Gio.AsyncResult): boolean;
    call_delete_bearer_sync(arg_bearer: string, cancellable?: Gio.Cancellable | null): boolean;
    call_enable(arg_enable: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_enable(
        arg_enable: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_enable(
        arg_enable: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_enable_finish(res: Gio.AsyncResult): boolean;
    call_enable_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean;
    call_factory_reset(arg_code: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_factory_reset(
        arg_code: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_factory_reset(
        arg_code: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_factory_reset_finish(res: Gio.AsyncResult): boolean;
    call_factory_reset_sync(arg_code: string, cancellable?: Gio.Cancellable | null): boolean;
    call_list_bearers(cancellable?: Gio.Cancellable | null): Promise<[string[] | null]>;
    call_list_bearers(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_list_bearers(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string[] | null]> | void;
    call_list_bearers_finish(res: Gio.AsyncResult): [boolean, string[] | null];
    call_list_bearers_sync(cancellable?: Gio.Cancellable | null): [boolean, string[] | null];
    call_reset(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_reset(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_reset(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_reset_finish(res: Gio.AsyncResult): boolean;
    call_reset_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_set_current_bands(arg_bands: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_current_bands(
        arg_bands: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_current_bands(
        arg_bands: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_current_bands_finish(res: Gio.AsyncResult): boolean;
    call_set_current_bands_sync(arg_bands: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_set_current_capabilities(arg_capabilities: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_current_capabilities(
        arg_capabilities: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_current_capabilities(
        arg_capabilities: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_current_capabilities_finish(res: Gio.AsyncResult): boolean;
    call_set_current_capabilities_sync(arg_capabilities: number, cancellable?: Gio.Cancellable | null): boolean;
    call_set_current_modes(arg_modes: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_current_modes(
        arg_modes: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_current_modes(
        arg_modes: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_current_modes_finish(res: Gio.AsyncResult): boolean;
    call_set_current_modes_sync(arg_modes: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_set_power_state(arg_state: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_power_state(
        arg_state: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_power_state(
        arg_state: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_power_state_finish(res: Gio.AsyncResult): boolean;
    call_set_power_state_sync(arg_state: number, cancellable?: Gio.Cancellable | null): boolean;
    complete_command(invocation: Gio.DBusMethodInvocation, response: string): void;
    complete_create_bearer(invocation: Gio.DBusMethodInvocation, path: string): void;
    complete_delete_bearer(invocation: Gio.DBusMethodInvocation): void;
    complete_enable(invocation: Gio.DBusMethodInvocation): void;
    complete_factory_reset(invocation: Gio.DBusMethodInvocation): void;
    complete_list_bearers(invocation: Gio.DBusMethodInvocation, bearers: string): void;
    complete_reset(invocation: Gio.DBusMethodInvocation): void;
    complete_set_current_bands(invocation: Gio.DBusMethodInvocation): void;
    complete_set_current_capabilities(invocation: Gio.DBusMethodInvocation): void;
    complete_set_current_modes(invocation: Gio.DBusMethodInvocation): void;
    complete_set_power_state(invocation: Gio.DBusMethodInvocation): void;
    emit_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
    vfunc_handle_command(invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number): boolean;
    vfunc_handle_create_bearer(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    vfunc_handle_delete_bearer(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean;
    vfunc_handle_enable(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
    vfunc_handle_factory_reset(invocation: Gio.DBusMethodInvocation, arg_code: string): boolean;
    vfunc_handle_list_bearers(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_reset(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_set_current_bands(invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant): boolean;
    vfunc_handle_set_current_capabilities(invocation: Gio.DBusMethodInvocation, arg_capabilities: number): boolean;
    vfunc_handle_set_current_modes(invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant): boolean;
    vfunc_handle_set_power_state(invocation: Gio.DBusMethodInvocation, arg_state: number): boolean;
    vfunc_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
}
export module GdbusModemSignalProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemSignalProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<GdbusModemSignalProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemSignal {
    static $gtype: GObject.GType<GdbusModemSignalProxy>;

    constructor(properties?: Partial<GdbusModemSignalProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemSignalProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    cdma: GLib.Variant;
    evdo: GLib.Variant;
    gsm: GLib.Variant;
    lte: GLib.Variant;
    rate: number;
    umts: GLib.Variant;

    // Constructors

    static new_finish(res: Gio.AsyncResult): GdbusModemSignalProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemSignalProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemSignalProxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemSignalProxy;
    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemSignalProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemSignalProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemSignalProxy> | null
    ): Promise<GdbusModemSignalProxy> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemSignalProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemSignalProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemSignalProxy> | null
    ): Promise<GdbusModemSignalProxy> | void;
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
    new_finish(res: Gio.AsyncResult): GdbusModemSignalProxy;
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
    call_setup(arg_rate: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_setup(
        arg_rate: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_setup(
        arg_rate: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_setup_finish(res: Gio.AsyncResult): boolean;
    call_setup_sync(arg_rate: number, cancellable?: Gio.Cancellable | null): boolean;
    complete_setup(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean;
}
export module GdbusModemSignalSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemSignalSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModemSignal {
    static $gtype: GObject.GType<GdbusModemSignalSkeleton>;

    constructor(properties?: Partial<GdbusModemSignalSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemSignalSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    cdma: GLib.Variant;
    evdo: GLib.Variant;
    gsm: GLib.Variant;
    lte: GLib.Variant;
    rate: number;
    umts: GLib.Variant;

    // Constructors

    static ["new"](): GdbusModemSignalSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    call_setup(arg_rate: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_setup(
        arg_rate: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_setup(
        arg_rate: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_setup_finish(res: Gio.AsyncResult): boolean;
    call_setup_sync(arg_rate: number, cancellable?: Gio.Cancellable | null): boolean;
    complete_setup(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean;
}
export module GdbusModemSimpleProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemSimpleProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<GdbusModemSimpleProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemSimple {
    static $gtype: GObject.GType<GdbusModemSimpleProxy>;

    constructor(properties?: Partial<GdbusModemSimpleProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemSimpleProxy.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): GdbusModemSimpleProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemSimpleProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemSimpleProxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemSimpleProxy;
    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemSimpleProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemSimpleProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemSimpleProxy> | null
    ): Promise<GdbusModemSimpleProxy> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemSimpleProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemSimpleProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemSimpleProxy> | null
    ): Promise<GdbusModemSimpleProxy> | void;
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
    new_finish(res: Gio.AsyncResult): GdbusModemSimpleProxy;
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
    call_connect(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_connect(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_connect(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_connect_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_connect_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    call_disconnect(arg_bearer: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_disconnect(
        arg_bearer: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_disconnect(
        arg_bearer: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_disconnect_finish(res: Gio.AsyncResult): boolean;
    call_disconnect_sync(arg_bearer: string, cancellable?: Gio.Cancellable | null): boolean;
    call_get_status(cancellable?: Gio.Cancellable | null): Promise<[GLib.Variant | null]>;
    call_get_status(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_get_status(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[GLib.Variant | null]> | void;
    call_get_status_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_get_status_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    complete_connect(invocation: Gio.DBusMethodInvocation, bearer: string): void;
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
    complete_get_status(invocation: Gio.DBusMethodInvocation, properties: GLib.Variant): void;
    vfunc_handle_connect(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean;
    vfunc_handle_get_status(invocation: Gio.DBusMethodInvocation): boolean;
}
export module GdbusModemSimpleSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemSimpleSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModemSimple {
    static $gtype: GObject.GType<GdbusModemSimpleSkeleton>;

    constructor(properties?: Partial<GdbusModemSimpleSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemSimpleSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): GdbusModemSimpleSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    call_connect(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_connect(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_connect(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_connect_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_connect_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    call_disconnect(arg_bearer: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_disconnect(
        arg_bearer: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_disconnect(
        arg_bearer: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_disconnect_finish(res: Gio.AsyncResult): boolean;
    call_disconnect_sync(arg_bearer: string, cancellable?: Gio.Cancellable | null): boolean;
    call_get_status(cancellable?: Gio.Cancellable | null): Promise<[GLib.Variant | null]>;
    call_get_status(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_get_status(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[GLib.Variant | null]> | void;
    call_get_status_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_get_status_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    complete_connect(invocation: Gio.DBusMethodInvocation, bearer: string): void;
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
    complete_get_status(invocation: Gio.DBusMethodInvocation, properties: GLib.Variant): void;
    vfunc_handle_connect(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean;
    vfunc_handle_get_status(invocation: Gio.DBusMethodInvocation): boolean;
}
export module GdbusModemSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModem {
    static $gtype: GObject.GType<GdbusModemSkeleton>;

    constructor(properties?: Partial<GdbusModemSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    access_technologies: number;
    accessTechnologies: number;
    bearers: string[];
    carrier_configuration: string;
    carrierConfiguration: string;
    carrier_configuration_revision: string;
    carrierConfigurationRevision: string;
    current_bands: GLib.Variant;
    currentBands: GLib.Variant;
    current_capabilities: number;
    currentCapabilities: number;
    current_modes: GLib.Variant;
    currentModes: GLib.Variant;
    device: string;
    device_identifier: string;
    deviceIdentifier: string;
    drivers: string[];
    equipment_identifier: string;
    equipmentIdentifier: string;
    hardware_revision: string;
    hardwareRevision: string;
    manufacturer: string;
    max_active_bearers: number;
    maxActiveBearers: number;
    max_bearers: number;
    maxBearers: number;
    model: string;
    own_numbers: string[];
    ownNumbers: string[];
    plugin: string;
    ports: GLib.Variant;
    power_state: number;
    powerState: number;
    primary_port: string;
    primaryPort: string;
    revision: string;
    signal_quality: GLib.Variant;
    signalQuality: GLib.Variant;
    sim: string;
    state: number;
    state_failed_reason: number;
    stateFailedReason: number;
    supported_bands: GLib.Variant;
    supportedBands: GLib.Variant;
    supported_capabilities: GLib.Variant;
    supportedCapabilities: GLib.Variant;
    supported_ip_families: number;
    supportedIpFamilies: number;
    supported_modes: GLib.Variant;
    supportedModes: GLib.Variant;
    unlock_required: number;
    unlockRequired: number;
    unlock_retries: GLib.Variant;
    unlockRetries: GLib.Variant;

    // Constructors

    static ["new"](): GdbusModemSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    call_command(arg_cmd: string, arg_timeout: number, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_command(
        arg_cmd: string,
        arg_timeout: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_command(
        arg_cmd: string,
        arg_timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_command_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_command_sync(
        arg_cmd: string,
        arg_timeout: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];
    call_create_bearer(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_create_bearer(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_create_bearer(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_create_bearer_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_bearer_sync(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];
    call_delete_bearer(arg_bearer: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_delete_bearer(
        arg_bearer: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_delete_bearer(
        arg_bearer: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_delete_bearer_finish(res: Gio.AsyncResult): boolean;
    call_delete_bearer_sync(arg_bearer: string, cancellable?: Gio.Cancellable | null): boolean;
    call_enable(arg_enable: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_enable(
        arg_enable: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_enable(
        arg_enable: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_enable_finish(res: Gio.AsyncResult): boolean;
    call_enable_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean;
    call_factory_reset(arg_code: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_factory_reset(
        arg_code: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_factory_reset(
        arg_code: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_factory_reset_finish(res: Gio.AsyncResult): boolean;
    call_factory_reset_sync(arg_code: string, cancellable?: Gio.Cancellable | null): boolean;
    call_list_bearers(cancellable?: Gio.Cancellable | null): Promise<[string[] | null]>;
    call_list_bearers(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_list_bearers(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string[] | null]> | void;
    call_list_bearers_finish(res: Gio.AsyncResult): [boolean, string[] | null];
    call_list_bearers_sync(cancellable?: Gio.Cancellable | null): [boolean, string[] | null];
    call_reset(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_reset(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_reset(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_reset_finish(res: Gio.AsyncResult): boolean;
    call_reset_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_set_current_bands(arg_bands: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_current_bands(
        arg_bands: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_current_bands(
        arg_bands: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_current_bands_finish(res: Gio.AsyncResult): boolean;
    call_set_current_bands_sync(arg_bands: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_set_current_capabilities(arg_capabilities: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_current_capabilities(
        arg_capabilities: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_current_capabilities(
        arg_capabilities: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_current_capabilities_finish(res: Gio.AsyncResult): boolean;
    call_set_current_capabilities_sync(arg_capabilities: number, cancellable?: Gio.Cancellable | null): boolean;
    call_set_current_modes(arg_modes: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_current_modes(
        arg_modes: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_current_modes(
        arg_modes: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_current_modes_finish(res: Gio.AsyncResult): boolean;
    call_set_current_modes_sync(arg_modes: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_set_power_state(arg_state: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_power_state(
        arg_state: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_power_state(
        arg_state: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_power_state_finish(res: Gio.AsyncResult): boolean;
    call_set_power_state_sync(arg_state: number, cancellable?: Gio.Cancellable | null): boolean;
    complete_command(invocation: Gio.DBusMethodInvocation, response: string): void;
    complete_create_bearer(invocation: Gio.DBusMethodInvocation, path: string): void;
    complete_delete_bearer(invocation: Gio.DBusMethodInvocation): void;
    complete_enable(invocation: Gio.DBusMethodInvocation): void;
    complete_factory_reset(invocation: Gio.DBusMethodInvocation): void;
    complete_list_bearers(invocation: Gio.DBusMethodInvocation, bearers: string): void;
    complete_reset(invocation: Gio.DBusMethodInvocation): void;
    complete_set_current_bands(invocation: Gio.DBusMethodInvocation): void;
    complete_set_current_capabilities(invocation: Gio.DBusMethodInvocation): void;
    complete_set_current_modes(invocation: Gio.DBusMethodInvocation): void;
    complete_set_power_state(invocation: Gio.DBusMethodInvocation): void;
    emit_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
    vfunc_handle_command(invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number): boolean;
    vfunc_handle_create_bearer(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    vfunc_handle_delete_bearer(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean;
    vfunc_handle_enable(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
    vfunc_handle_factory_reset(invocation: Gio.DBusMethodInvocation, arg_code: string): boolean;
    vfunc_handle_list_bearers(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_reset(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_set_current_bands(invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant): boolean;
    vfunc_handle_set_current_capabilities(invocation: Gio.DBusMethodInvocation, arg_capabilities: number): boolean;
    vfunc_handle_set_current_modes(invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant): boolean;
    vfunc_handle_set_power_state(invocation: Gio.DBusMethodInvocation, arg_state: number): boolean;
    vfunc_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
}
export module GdbusModemTimeProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemTimeProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<GdbusModemTimeProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemTime {
    static $gtype: GObject.GType<GdbusModemTimeProxy>;

    constructor(properties?: Partial<GdbusModemTimeProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemTimeProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    network_timezone: GLib.Variant;
    networkTimezone: GLib.Variant;

    // Constructors

    static new_finish(res: Gio.AsyncResult): GdbusModemTimeProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemTimeProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemTimeProxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemTimeProxy;
    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemTimeProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemTimeProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemTimeProxy> | null
    ): Promise<GdbusModemTimeProxy> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemTimeProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemTimeProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemTimeProxy> | null
    ): Promise<GdbusModemTimeProxy> | void;
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
    new_finish(res: Gio.AsyncResult): GdbusModemTimeProxy;
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
    call_get_network_time(cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_get_network_time(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_get_network_time(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_get_network_time_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_get_network_time_sync(cancellable?: Gio.Cancellable | null): [boolean, string | null];
    complete_get_network_time(invocation: Gio.DBusMethodInvocation, time: string): void;
    emit_network_time_changed(arg_time: string): void;
    vfunc_handle_get_network_time(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_network_time_changed(arg_time: string): void;
}
export module GdbusModemTimeSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemTimeSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModemTime {
    static $gtype: GObject.GType<GdbusModemTimeSkeleton>;

    constructor(properties?: Partial<GdbusModemTimeSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemTimeSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    network_timezone: GLib.Variant;
    networkTimezone: GLib.Variant;

    // Constructors

    static ["new"](): GdbusModemTimeSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    call_get_network_time(cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_get_network_time(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_get_network_time(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_get_network_time_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_get_network_time_sync(cancellable?: Gio.Cancellable | null): [boolean, string | null];
    complete_get_network_time(invocation: Gio.DBusMethodInvocation, time: string): void;
    emit_network_time_changed(arg_time: string): void;
    vfunc_handle_get_network_time(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_network_time_changed(arg_time: string): void;
}
export module GdbusModemVoiceProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemVoiceProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<GdbusModemVoiceProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemVoice {
    static $gtype: GObject.GType<GdbusModemVoiceProxy>;

    constructor(properties?: Partial<GdbusModemVoiceProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemVoiceProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    calls: string[];
    emergency_only: boolean;
    emergencyOnly: boolean;

    // Constructors

    static new_finish(res: Gio.AsyncResult): GdbusModemVoiceProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemVoiceProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemVoiceProxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusModemVoiceProxy;
    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemVoiceProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemVoiceProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemVoiceProxy> | null
    ): Promise<GdbusModemVoiceProxy> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusModemVoiceProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusModemVoiceProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusModemVoiceProxy> | null
    ): Promise<GdbusModemVoiceProxy> | void;
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
    new_finish(res: Gio.AsyncResult): GdbusModemVoiceProxy;
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
    call_call_waiting_query(cancellable?: Gio.Cancellable | null): Promise<[boolean | null]>;
    call_call_waiting_query(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_call_waiting_query(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[boolean | null]> | void;
    call_call_waiting_query_finish(res: Gio.AsyncResult): [boolean, boolean | null];
    call_call_waiting_query_sync(cancellable?: Gio.Cancellable | null): [boolean, boolean | null];
    call_call_waiting_setup(arg_enable: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_call_waiting_setup(
        arg_enable: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_call_waiting_setup(
        arg_enable: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_call_waiting_setup_finish(res: Gio.AsyncResult): boolean;
    call_call_waiting_setup_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean;
    call_create_call(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_create_call(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_create_call(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_create_call_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_call_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    call_delete_call(arg_path: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_delete_call(
        arg_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_delete_call(
        arg_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_delete_call_finish(res: Gio.AsyncResult): boolean;
    call_delete_call_sync(arg_path: string, cancellable?: Gio.Cancellable | null): boolean;
    call_hangup_all(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_hangup_all(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_hangup_all(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_hangup_all_finish(res: Gio.AsyncResult): boolean;
    call_hangup_all_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_hangup_and_accept(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_hangup_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_hangup_and_accept(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_hangup_and_accept_finish(res: Gio.AsyncResult): boolean;
    call_hangup_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_hold_and_accept(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_hold_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_hold_and_accept(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_hold_and_accept_finish(res: Gio.AsyncResult): boolean;
    call_hold_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_list_calls(cancellable?: Gio.Cancellable | null): Promise<[string[] | null]>;
    call_list_calls(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_list_calls(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string[] | null]> | void;
    call_list_calls_finish(res: Gio.AsyncResult): [boolean, string[] | null];
    call_list_calls_sync(cancellable?: Gio.Cancellable | null): [boolean, string[] | null];
    call_transfer(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_transfer(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_transfer(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_transfer_finish(res: Gio.AsyncResult): boolean;
    call_transfer_sync(cancellable?: Gio.Cancellable | null): boolean;
    complete_call_waiting_query(invocation: Gio.DBusMethodInvocation, status: boolean): void;
    complete_call_waiting_setup(invocation: Gio.DBusMethodInvocation): void;
    complete_create_call(invocation: Gio.DBusMethodInvocation, path: string): void;
    complete_delete_call(invocation: Gio.DBusMethodInvocation): void;
    complete_hangup_all(invocation: Gio.DBusMethodInvocation): void;
    complete_hangup_and_accept(invocation: Gio.DBusMethodInvocation): void;
    complete_hold_and_accept(invocation: Gio.DBusMethodInvocation): void;
    complete_list_calls(invocation: Gio.DBusMethodInvocation, result: string): void;
    complete_transfer(invocation: Gio.DBusMethodInvocation): void;
    emit_call_added(arg_path: string): void;
    emit_call_deleted(arg_path: string): void;
    vfunc_call_added(arg_path: string): void;
    vfunc_call_deleted(arg_path: string): void;
    vfunc_handle_call_waiting_query(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_call_waiting_setup(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
    vfunc_handle_create_call(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    vfunc_handle_delete_call(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
    vfunc_handle_hangup_all(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_hangup_and_accept(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_hold_and_accept(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_list_calls(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_transfer(invocation: Gio.DBusMethodInvocation): boolean;
}
export module GdbusModemVoiceSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusModemVoiceSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModemVoice {
    static $gtype: GObject.GType<GdbusModemVoiceSkeleton>;

    constructor(properties?: Partial<GdbusModemVoiceSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusModemVoiceSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    calls: string[];
    emergency_only: boolean;
    emergencyOnly: boolean;

    // Constructors

    static ["new"](): GdbusModemVoiceSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    call_call_waiting_query(cancellable?: Gio.Cancellable | null): Promise<[boolean | null]>;
    call_call_waiting_query(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_call_waiting_query(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[boolean | null]> | void;
    call_call_waiting_query_finish(res: Gio.AsyncResult): [boolean, boolean | null];
    call_call_waiting_query_sync(cancellable?: Gio.Cancellable | null): [boolean, boolean | null];
    call_call_waiting_setup(arg_enable: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_call_waiting_setup(
        arg_enable: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_call_waiting_setup(
        arg_enable: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_call_waiting_setup_finish(res: Gio.AsyncResult): boolean;
    call_call_waiting_setup_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean;
    call_create_call(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_create_call(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_create_call(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_create_call_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_call_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    call_delete_call(arg_path: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_delete_call(
        arg_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_delete_call(
        arg_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_delete_call_finish(res: Gio.AsyncResult): boolean;
    call_delete_call_sync(arg_path: string, cancellable?: Gio.Cancellable | null): boolean;
    call_hangup_all(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_hangup_all(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_hangup_all(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_hangup_all_finish(res: Gio.AsyncResult): boolean;
    call_hangup_all_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_hangup_and_accept(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_hangup_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_hangup_and_accept(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_hangup_and_accept_finish(res: Gio.AsyncResult): boolean;
    call_hangup_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_hold_and_accept(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_hold_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_hold_and_accept(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_hold_and_accept_finish(res: Gio.AsyncResult): boolean;
    call_hold_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_list_calls(cancellable?: Gio.Cancellable | null): Promise<[string[] | null]>;
    call_list_calls(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_list_calls(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string[] | null]> | void;
    call_list_calls_finish(res: Gio.AsyncResult): [boolean, string[] | null];
    call_list_calls_sync(cancellable?: Gio.Cancellable | null): [boolean, string[] | null];
    call_transfer(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_transfer(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_transfer(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_transfer_finish(res: Gio.AsyncResult): boolean;
    call_transfer_sync(cancellable?: Gio.Cancellable | null): boolean;
    complete_call_waiting_query(invocation: Gio.DBusMethodInvocation, status: boolean): void;
    complete_call_waiting_setup(invocation: Gio.DBusMethodInvocation): void;
    complete_create_call(invocation: Gio.DBusMethodInvocation, path: string): void;
    complete_delete_call(invocation: Gio.DBusMethodInvocation): void;
    complete_hangup_all(invocation: Gio.DBusMethodInvocation): void;
    complete_hangup_and_accept(invocation: Gio.DBusMethodInvocation): void;
    complete_hold_and_accept(invocation: Gio.DBusMethodInvocation): void;
    complete_list_calls(invocation: Gio.DBusMethodInvocation, result: string): void;
    complete_transfer(invocation: Gio.DBusMethodInvocation): void;
    emit_call_added(arg_path: string): void;
    emit_call_deleted(arg_path: string): void;
    vfunc_call_added(arg_path: string): void;
    vfunc_call_deleted(arg_path: string): void;
    vfunc_handle_call_waiting_query(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_call_waiting_setup(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
    vfunc_handle_create_call(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    vfunc_handle_delete_call(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
    vfunc_handle_hangup_all(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_hangup_and_accept(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_hold_and_accept(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_list_calls(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_transfer(invocation: Gio.DBusMethodInvocation): boolean;
}
export module GdbusObjectManagerClient {
    export interface ConstructorProperties extends Gio.DBusObjectManagerClient.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusObjectManagerClient
    extends Gio.DBusObjectManagerClient
    implements Gio.AsyncInitable<GdbusObjectManagerClient>, Gio.DBusObjectManager, Gio.Initable {
    static $gtype: GObject.GType<GdbusObjectManagerClient>;

    constructor(properties?: Partial<GdbusObjectManagerClient.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusObjectManagerClient.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): GdbusObjectManagerClient;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusObjectManagerClient;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusObjectManagerClientFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusObjectManagerClient;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusObjectManagerClientFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusObjectManagerClient;
    static new_sync(...args: never[]): never;

    // Members

    static get_proxy_type(
        manager: Gio.DBusObjectManagerClient,
        object_path: string,
        interface_name?: string | null,
        user_data?: any | null
    ): GObject.GType;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusObjectManagerClientFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusObjectManagerClient>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusObjectManagerClientFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusObjectManagerClient> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusObjectManagerClientFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusObjectManagerClient> | null
    ): Promise<GdbusObjectManagerClient> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusObjectManagerClientFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusObjectManagerClient>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusObjectManagerClientFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusObjectManagerClient> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusObjectManagerClientFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusObjectManagerClient> | null
    ): Promise<GdbusObjectManagerClient> | void;
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
    new_finish(res: Gio.AsyncResult): GdbusObjectManagerClient;
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
    get_interface(object_path: string, interface_name: string): Gio.DBusInterface;
    get_object(object_path: string): Gio.DBusObject;
    get_object_path(): string;
    get_objects(): Gio.DBusObject[];
    vfunc_get_interface(object_path: string, interface_name: string): Gio.DBusInterface;
    vfunc_get_object(object_path: string): Gio.DBusObject;
    vfunc_get_object_path(): string;
    vfunc_get_objects(): Gio.DBusObject[];
    vfunc_interface_added(object: Gio.DBusObject, interface_: Gio.DBusInterface): void;
    vfunc_interface_removed(object: Gio.DBusObject, interface_: Gio.DBusInterface): void;
    vfunc_object_added(object: Gio.DBusObject): void;
    vfunc_object_removed(object: Gio.DBusObject): void;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module GdbusObjectProxy {
    export interface ConstructorProperties extends Gio.DBusObjectProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusObjectProxy extends Gio.DBusObjectProxy implements Gio.DBusObject, GdbusObject {
    static $gtype: GObject.GType<GdbusObjectProxy>;

    constructor(properties?: Partial<GdbusObjectProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusObjectProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    modem: GdbusModem;
    modem_cdma: GdbusModemCdma;
    modemCdma: GdbusModemCdma;
    modem_firmware: GdbusModemFirmware;
    modemFirmware: GdbusModemFirmware;
    modem_location: GdbusModemLocation;
    modemLocation: GdbusModemLocation;
    modem_messaging: GdbusModemMessaging;
    modemMessaging: GdbusModemMessaging;
    modem_oma: GdbusModemOma;
    modemOma: GdbusModemOma;
    modem_signal: GdbusModemSignal;
    modemSignal: GdbusModemSignal;
    modem_simple: GdbusModemSimple;
    modemSimple: GdbusModemSimple;
    modem_time: GdbusModemTime;
    modemTime: GdbusModemTime;
    modem_voice: GdbusModemVoice;
    modemVoice: GdbusModemVoice;
    modem3gpp: GdbusModem3gpp;
    modem3gpp_ussd: GdbusModem3gppUssd;
    modem3gppUssd: GdbusModem3gppUssd;

    // Constructors

    static ["new"](connection: Gio.DBusConnection, object_path: string): GdbusObjectProxy;

    // Implemented Members

    get_interface(interface_name: string): Gio.DBusInterface;
    get_interfaces(): Gio.DBusInterface[];
    get_object_path(): string;
    vfunc_get_interface(interface_name: string): Gio.DBusInterface;
    vfunc_get_interfaces(): Gio.DBusInterface[];
    vfunc_get_object_path(): string;
    vfunc_interface_added(interface_: Gio.DBusInterface): void;
    vfunc_interface_removed(interface_: Gio.DBusInterface): void;
    get_modem(): GdbusModem | null;
    get_modem3gpp(): GdbusModem3gpp | null;
    get_modem3gpp_ussd(): GdbusModem3gppUssd | null;
    get_modem_cdma(): GdbusModemCdma | null;
    get_modem_firmware(): GdbusModemFirmware | null;
    get_modem_location(): GdbusModemLocation | null;
    get_modem_messaging(): GdbusModemMessaging | null;
    get_modem_oma(): GdbusModemOma | null;
    get_modem_signal(): GdbusModemSignal | null;
    get_modem_simple(): GdbusModemSimple | null;
    get_modem_time(): GdbusModemTime | null;
    get_modem_voice(): GdbusModemVoice | null;
}
export module GdbusObjectSkeleton {
    export interface ConstructorProperties extends Gio.DBusObjectSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusObjectSkeleton extends Gio.DBusObjectSkeleton implements Gio.DBusObject, GdbusObject {
    static $gtype: GObject.GType<GdbusObjectSkeleton>;

    constructor(properties?: Partial<GdbusObjectSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusObjectSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    modem: GdbusModem;
    modem_cdma: GdbusModemCdma;
    modemCdma: GdbusModemCdma;
    modem_firmware: GdbusModemFirmware;
    modemFirmware: GdbusModemFirmware;
    modem_location: GdbusModemLocation;
    modemLocation: GdbusModemLocation;
    modem_messaging: GdbusModemMessaging;
    modemMessaging: GdbusModemMessaging;
    modem_oma: GdbusModemOma;
    modemOma: GdbusModemOma;
    modem_signal: GdbusModemSignal;
    modemSignal: GdbusModemSignal;
    modem_simple: GdbusModemSimple;
    modemSimple: GdbusModemSimple;
    modem_time: GdbusModemTime;
    modemTime: GdbusModemTime;
    modem_voice: GdbusModemVoice;
    modemVoice: GdbusModemVoice;
    modem3gpp: GdbusModem3gpp;
    modem3gpp_ussd: GdbusModem3gppUssd;
    modem3gppUssd: GdbusModem3gppUssd;

    // Constructors

    static ["new"](object_path: string): GdbusObjectSkeleton;

    // Members

    set_modem(interface_?: GdbusModem | null): void;
    set_modem3gpp(interface_?: GdbusModem3gpp | null): void;
    set_modem3gpp_ussd(interface_?: GdbusModem3gppUssd | null): void;
    set_modem_cdma(interface_?: GdbusModemCdma | null): void;
    set_modem_firmware(interface_?: GdbusModemFirmware | null): void;
    set_modem_location(interface_?: GdbusModemLocation | null): void;
    set_modem_messaging(interface_?: GdbusModemMessaging | null): void;
    set_modem_oma(interface_?: GdbusModemOma | null): void;
    set_modem_signal(interface_?: GdbusModemSignal | null): void;
    set_modem_simple(interface_?: GdbusModemSimple | null): void;
    set_modem_time(interface_?: GdbusModemTime | null): void;
    set_modem_voice(interface_?: GdbusModemVoice | null): void;

    // Implemented Members

    get_interface(interface_name: string): Gio.DBusInterface;
    get_interfaces(): Gio.DBusInterface[];
    get_object_path(): string;
    vfunc_get_interface(interface_name: string): Gio.DBusInterface;
    vfunc_get_interfaces(): Gio.DBusInterface[];
    vfunc_get_object_path(): string;
    vfunc_interface_added(interface_: Gio.DBusInterface): void;
    vfunc_interface_removed(interface_: Gio.DBusInterface): void;
    get_modem(): GdbusModem | null;
    get_modem3gpp(): GdbusModem3gpp | null;
    get_modem3gpp_ussd(): GdbusModem3gppUssd | null;
    get_modem_cdma(): GdbusModemCdma | null;
    get_modem_firmware(): GdbusModemFirmware | null;
    get_modem_location(): GdbusModemLocation | null;
    get_modem_messaging(): GdbusModemMessaging | null;
    get_modem_oma(): GdbusModemOma | null;
    get_modem_signal(): GdbusModemSignal | null;
    get_modem_simple(): GdbusModemSimple | null;
    get_modem_time(): GdbusModemTime | null;
    get_modem_voice(): GdbusModemVoice | null;
}
export module GdbusOrgFreedesktopModemManager1Proxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusOrgFreedesktopModemManager1Proxy
    extends Gio.DBusProxy
    implements
        Gio.AsyncInitable<GdbusOrgFreedesktopModemManager1Proxy>,
        Gio.DBusInterface,
        Gio.Initable,
        GdbusOrgFreedesktopModemManager1 {
    static $gtype: GObject.GType<GdbusOrgFreedesktopModemManager1Proxy>;

    constructor(properties?: Partial<GdbusOrgFreedesktopModemManager1Proxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusOrgFreedesktopModemManager1Proxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    version: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): GdbusOrgFreedesktopModemManager1Proxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusOrgFreedesktopModemManager1Proxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusOrgFreedesktopModemManager1Proxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusOrgFreedesktopModemManager1Proxy;
    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusOrgFreedesktopModemManager1Proxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusOrgFreedesktopModemManager1Proxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusOrgFreedesktopModemManager1Proxy> | null
    ): Promise<GdbusOrgFreedesktopModemManager1Proxy> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusOrgFreedesktopModemManager1Proxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusOrgFreedesktopModemManager1Proxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusOrgFreedesktopModemManager1Proxy> | null
    ): Promise<GdbusOrgFreedesktopModemManager1Proxy> | void;
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
    new_finish(res: Gio.AsyncResult): GdbusOrgFreedesktopModemManager1Proxy;
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
    call_inhibit_device(arg_uid: string, arg_inhibit: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_inhibit_device(
        arg_uid: string,
        arg_inhibit: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_inhibit_device(
        arg_uid: string,
        arg_inhibit: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_inhibit_device_finish(res: Gio.AsyncResult): boolean;
    call_inhibit_device_sync(arg_uid: string, arg_inhibit: boolean, cancellable?: Gio.Cancellable | null): boolean;
    call_report_kernel_event(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_report_kernel_event(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_report_kernel_event(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_report_kernel_event_finish(res: Gio.AsyncResult): boolean;
    call_report_kernel_event_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_scan_devices(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_scan_devices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_scan_devices(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_scan_devices_finish(res: Gio.AsyncResult): boolean;
    call_scan_devices_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_set_logging(arg_level: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_logging(
        arg_level: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_logging(
        arg_level: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_logging_finish(res: Gio.AsyncResult): boolean;
    call_set_logging_sync(arg_level: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_inhibit_device(invocation: Gio.DBusMethodInvocation): void;
    complete_report_kernel_event(invocation: Gio.DBusMethodInvocation): void;
    complete_scan_devices(invocation: Gio.DBusMethodInvocation): void;
    complete_set_logging(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_inhibit_device(invocation: Gio.DBusMethodInvocation, arg_uid: string, arg_inhibit: boolean): boolean;
    vfunc_handle_report_kernel_event(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    vfunc_handle_scan_devices(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_set_logging(invocation: Gio.DBusMethodInvocation, arg_level: string): boolean;
}
export module GdbusOrgFreedesktopModemManager1Skeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusOrgFreedesktopModemManager1Skeleton
    extends Gio.DBusInterfaceSkeleton
    implements Gio.DBusInterface, GdbusOrgFreedesktopModemManager1 {
    static $gtype: GObject.GType<GdbusOrgFreedesktopModemManager1Skeleton>;

    constructor(properties?: Partial<GdbusOrgFreedesktopModemManager1Skeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusOrgFreedesktopModemManager1Skeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    version: string;

    // Constructors

    static ["new"](): GdbusOrgFreedesktopModemManager1Skeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    call_inhibit_device(arg_uid: string, arg_inhibit: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_inhibit_device(
        arg_uid: string,
        arg_inhibit: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_inhibit_device(
        arg_uid: string,
        arg_inhibit: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_inhibit_device_finish(res: Gio.AsyncResult): boolean;
    call_inhibit_device_sync(arg_uid: string, arg_inhibit: boolean, cancellable?: Gio.Cancellable | null): boolean;
    call_report_kernel_event(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_report_kernel_event(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_report_kernel_event(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_report_kernel_event_finish(res: Gio.AsyncResult): boolean;
    call_report_kernel_event_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_scan_devices(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_scan_devices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_scan_devices(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_scan_devices_finish(res: Gio.AsyncResult): boolean;
    call_scan_devices_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_set_logging(arg_level: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_logging(
        arg_level: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_logging(
        arg_level: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_logging_finish(res: Gio.AsyncResult): boolean;
    call_set_logging_sync(arg_level: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_inhibit_device(invocation: Gio.DBusMethodInvocation): void;
    complete_report_kernel_event(invocation: Gio.DBusMethodInvocation): void;
    complete_scan_devices(invocation: Gio.DBusMethodInvocation): void;
    complete_set_logging(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_inhibit_device(invocation: Gio.DBusMethodInvocation, arg_uid: string, arg_inhibit: boolean): boolean;
    vfunc_handle_report_kernel_event(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    vfunc_handle_scan_devices(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_set_logging(invocation: Gio.DBusMethodInvocation, arg_level: string): boolean;
}
export module GdbusSimProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusSimProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<GdbusSimProxy>, Gio.DBusInterface, Gio.Initable, GdbusSim {
    static $gtype: GObject.GType<GdbusSimProxy>;

    constructor(properties?: Partial<GdbusSimProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusSimProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    emergency_numbers: string[];
    emergencyNumbers: string[];
    imsi: string;
    operator_identifier: string;
    operatorIdentifier: string;
    operator_name: string;
    operatorName: string;
    sim_identifier: string;
    simIdentifier: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): GdbusSimProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusSimProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusSimProxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusSimProxy;
    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusSimProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusSimProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusSimProxy> | null
    ): Promise<GdbusSimProxy> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusSimProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusSimProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusSimProxy> | null
    ): Promise<GdbusSimProxy> | void;
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
    new_finish(res: Gio.AsyncResult): GdbusSimProxy;
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
    call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_change_pin(
        arg_old_pin: string,
        arg_new_pin: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_change_pin(
        arg_old_pin: string,
        arg_new_pin: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_change_pin_finish(res: Gio.AsyncResult): boolean;
    call_change_pin_sync(arg_old_pin: string, arg_new_pin: string, cancellable?: Gio.Cancellable | null): boolean;
    call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_enable_pin(
        arg_pin: string,
        arg_enabled: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_enable_pin(
        arg_pin: string,
        arg_enabled: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_enable_pin_finish(res: Gio.AsyncResult): boolean;
    call_enable_pin_sync(arg_pin: string, arg_enabled: boolean, cancellable?: Gio.Cancellable | null): boolean;
    call_send_pin(arg_pin: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_send_pin(
        arg_pin: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_send_pin(
        arg_pin: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_send_pin_finish(res: Gio.AsyncResult): boolean;
    call_send_pin_sync(arg_pin: string, cancellable?: Gio.Cancellable | null): boolean;
    call_send_puk(arg_puk: string, arg_pin: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_send_puk(
        arg_puk: string,
        arg_pin: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_send_puk(
        arg_puk: string,
        arg_pin: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_send_puk_finish(res: Gio.AsyncResult): boolean;
    call_send_puk_sync(arg_puk: string, arg_pin: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_change_pin(invocation: Gio.DBusMethodInvocation): void;
    complete_enable_pin(invocation: Gio.DBusMethodInvocation): void;
    complete_send_pin(invocation: Gio.DBusMethodInvocation): void;
    complete_send_puk(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_change_pin(invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string): boolean;
    vfunc_handle_enable_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean): boolean;
    vfunc_handle_send_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string): boolean;
    vfunc_handle_send_puk(invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string): boolean;
}
export module GdbusSimSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusSimSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusSim {
    static $gtype: GObject.GType<GdbusSimSkeleton>;

    constructor(properties?: Partial<GdbusSimSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusSimSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    emergency_numbers: string[];
    emergencyNumbers: string[];
    imsi: string;
    operator_identifier: string;
    operatorIdentifier: string;
    operator_name: string;
    operatorName: string;
    sim_identifier: string;
    simIdentifier: string;

    // Constructors

    static ["new"](): GdbusSimSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_change_pin(
        arg_old_pin: string,
        arg_new_pin: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_change_pin(
        arg_old_pin: string,
        arg_new_pin: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_change_pin_finish(res: Gio.AsyncResult): boolean;
    call_change_pin_sync(arg_old_pin: string, arg_new_pin: string, cancellable?: Gio.Cancellable | null): boolean;
    call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_enable_pin(
        arg_pin: string,
        arg_enabled: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_enable_pin(
        arg_pin: string,
        arg_enabled: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_enable_pin_finish(res: Gio.AsyncResult): boolean;
    call_enable_pin_sync(arg_pin: string, arg_enabled: boolean, cancellable?: Gio.Cancellable | null): boolean;
    call_send_pin(arg_pin: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_send_pin(
        arg_pin: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_send_pin(
        arg_pin: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_send_pin_finish(res: Gio.AsyncResult): boolean;
    call_send_pin_sync(arg_pin: string, cancellable?: Gio.Cancellable | null): boolean;
    call_send_puk(arg_puk: string, arg_pin: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_send_puk(
        arg_puk: string,
        arg_pin: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_send_puk(
        arg_puk: string,
        arg_pin: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_send_puk_finish(res: Gio.AsyncResult): boolean;
    call_send_puk_sync(arg_puk: string, arg_pin: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_change_pin(invocation: Gio.DBusMethodInvocation): void;
    complete_enable_pin(invocation: Gio.DBusMethodInvocation): void;
    complete_send_pin(invocation: Gio.DBusMethodInvocation): void;
    complete_send_puk(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_change_pin(invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string): boolean;
    vfunc_handle_enable_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean): boolean;
    vfunc_handle_send_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string): boolean;
    vfunc_handle_send_puk(invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string): boolean;
}
export module GdbusSmsProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusSmsProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<GdbusSmsProxy>, Gio.DBusInterface, Gio.Initable, GdbusSms {
    static $gtype: GObject.GType<GdbusSmsProxy>;

    constructor(properties?: Partial<GdbusSmsProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusSmsProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    "class": number;
    data: GLib.Variant;
    delivery_report_request: boolean;
    deliveryReportRequest: boolean;
    delivery_state: number;
    deliveryState: number;
    discharge_timestamp: string;
    dischargeTimestamp: string;
    message_reference: number;
    messageReference: number;
    number: string;
    pdu_type: number;
    pduType: number;
    service_category: number;
    serviceCategory: number;
    smsc: string;
    state: number;
    storage: number;
    teleservice_id: number;
    teleserviceId: number;
    text: string;
    timestamp: string;
    validity: GLib.Variant;

    // Constructors

    static new_finish(res: Gio.AsyncResult): GdbusSmsProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusSmsProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusSmsProxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusSmsProxy;
    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusSmsProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusSmsProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusSmsProxy> | null
    ): Promise<GdbusSmsProxy> | void;
    static new(...args: never[]): never;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdbusSmsProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<GdbusSmsProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusSmsProxy> | null
    ): Promise<GdbusSmsProxy> | void;
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
    new_finish(res: Gio.AsyncResult): GdbusSmsProxy;
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
    call_send(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_send(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_send(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_send_finish(res: Gio.AsyncResult): boolean;
    call_send_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_store(arg_storage: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_store(
        arg_storage: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_store(
        arg_storage: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_store_finish(res: Gio.AsyncResult): boolean;
    call_store_sync(arg_storage: number, cancellable?: Gio.Cancellable | null): boolean;
    complete_send(invocation: Gio.DBusMethodInvocation): void;
    complete_store(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_send(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_store(invocation: Gio.DBusMethodInvocation, arg_storage: number): boolean;
}
export module GdbusSmsSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class GdbusSmsSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusSms {
    static $gtype: GObject.GType<GdbusSmsSkeleton>;

    constructor(properties?: Partial<GdbusSmsSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GdbusSmsSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    "class": number;
    data: GLib.Variant;
    delivery_report_request: boolean;
    deliveryReportRequest: boolean;
    delivery_state: number;
    deliveryState: number;
    discharge_timestamp: string;
    dischargeTimestamp: string;
    message_reference: number;
    messageReference: number;
    number: string;
    pdu_type: number;
    pduType: number;
    service_category: number;
    serviceCategory: number;
    smsc: string;
    state: number;
    storage: number;
    teleservice_id: number;
    teleserviceId: number;
    text: string;
    timestamp: string;
    validity: GLib.Variant;

    // Constructors

    static ["new"](): GdbusSmsSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    call_send(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_send(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_send(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_send_finish(res: Gio.AsyncResult): boolean;
    call_send_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_store(arg_storage: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_store(
        arg_storage: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_store(
        arg_storage: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_store_finish(res: Gio.AsyncResult): boolean;
    call_store_sync(arg_storage: number, cancellable?: Gio.Cancellable | null): boolean;
    complete_send(invocation: Gio.DBusMethodInvocation): void;
    complete_store(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_send(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_store(invocation: Gio.DBusMethodInvocation, arg_storage: number): boolean;
}
export module KernelEventProperties {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class KernelEventProperties extends GObject.Object {
    static $gtype: GObject.GType<KernelEventProperties>;

    constructor(properties?: Partial<KernelEventProperties.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<KernelEventProperties.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): KernelEventProperties;

    // Members

    get_action(): string;
    get_name(): string;
    get_subsystem(): string;
    get_uid(): string;
    set_action(action: string): void;
    set_name(name: string): void;
    set_subsystem(subsystem: string): void;
    set_uid(uid: string): void;
}
export module Location3gpp {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Location3gpp extends GObject.Object {
    static $gtype: GObject.GType<Location3gpp>;

    constructor(properties?: Partial<Location3gpp.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Location3gpp.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_cell_id(): number;
    get_location_area_code(): number;
    get_mobile_country_code(): number;
    get_mobile_network_code(): number;
    get_tracking_area_code(): number;
}
export module LocationCdmaBs {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class LocationCdmaBs extends GObject.Object {
    static $gtype: GObject.GType<LocationCdmaBs>;

    constructor(properties?: Partial<LocationCdmaBs.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LocationCdmaBs.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_latitude(): number;
    get_longitude(): number;
}
export module LocationGpsNmea {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class LocationGpsNmea extends GObject.Object {
    static $gtype: GObject.GType<LocationGpsNmea>;

    constructor(properties?: Partial<LocationGpsNmea.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LocationGpsNmea.ConstructorProperties>, ...args: any[]): void;

    // Members

    build_full(): string;
    get_trace(trace_type: string): string;
    get_traces(): string[];
}
export module LocationGpsRaw {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class LocationGpsRaw extends GObject.Object {
    static $gtype: GObject.GType<LocationGpsRaw>;

    constructor(properties?: Partial<LocationGpsRaw.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LocationGpsRaw.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_altitude(): number;
    get_latitude(): number;
    get_longitude(): number;
    get_utc_time(): string;
}
export module Manager {
    export interface ConstructorProperties extends GdbusObjectManagerClient.ConstructorProperties {
        [key: string]: any;
    }
}
export class Manager
    extends GdbusObjectManagerClient
    implements Gio.AsyncInitable<Manager>, Gio.DBusObjectManager, Gio.Initable {
    static $gtype: GObject.GType<Manager>;

    constructor(properties?: Partial<Manager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Manager.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): Manager;
    static new_finish(...args: never[]): never;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusObjectManagerClientFlags,
        cancellable?: Gio.Cancellable | null
    ): Manager;
    static new_sync(...args: never[]): never;

    // Members

    get_proxy(): Gio.DBusProxy;
    get_version(): string;
    inhibit_device(uid: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    inhibit_device(
        uid: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    inhibit_device(
        uid: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    inhibit_device_finish(res: Gio.AsyncResult): boolean;
    inhibit_device_sync(uid: string, cancellable?: Gio.Cancellable | null): boolean;
    peek_proxy(): Gio.DBusProxy;
    report_kernel_event(properties: KernelEventProperties, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    report_kernel_event(
        properties: KernelEventProperties,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    report_kernel_event(
        properties: KernelEventProperties,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    report_kernel_event_finish(res: Gio.AsyncResult): boolean;
    report_kernel_event_sync(properties: KernelEventProperties, cancellable?: Gio.Cancellable | null): boolean;
    scan_devices(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    scan_devices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    scan_devices(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    scan_devices_finish(res: Gio.AsyncResult): boolean;
    scan_devices_sync(cancellable?: Gio.Cancellable | null): boolean;
    set_logging(level: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    set_logging(
        level: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_logging(
        level: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_logging_finish(res: Gio.AsyncResult): boolean;
    set_logging_sync(level: string, cancellable?: Gio.Cancellable | null): boolean;
    uninhibit_device(uid: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    uninhibit_device(
        uid: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    uninhibit_device(
        uid: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    uninhibit_device_finish(res: Gio.AsyncResult): boolean;
    uninhibit_device_sync(uid: string, cancellable?: Gio.Cancellable | null): boolean;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusObjectManagerClientFlags,
        cancellable?: Gio.Cancellable | null
    ): Promise<Manager>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusObjectManagerClientFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Manager> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusObjectManagerClientFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Manager> | null
    ): Promise<Manager> | void;
    static new(...args: never[]): never;

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
    new_finish(res: Gio.AsyncResult): Manager;
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
    get_interface(object_path: string, interface_name: string): Gio.DBusInterface;
    get_object(object_path: string): Gio.DBusObject;
    get_object_path(): string;
    get_objects(): Gio.DBusObject[];
    vfunc_get_interface(object_path: string, interface_name: string): Gio.DBusInterface;
    vfunc_get_object(object_path: string): Gio.DBusObject;
    vfunc_get_object_path(): string;
    vfunc_get_objects(): Gio.DBusObject[];
    vfunc_interface_added(object: Gio.DBusObject, interface_: Gio.DBusInterface): void;
    vfunc_interface_removed(object: Gio.DBusObject, interface_: Gio.DBusInterface): void;
    vfunc_object_added(object: Gio.DBusObject): void;
    vfunc_object_removed(object: Gio.DBusObject): void;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module Modem {
    export interface ConstructorProperties extends GdbusModemProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class Modem
    extends GdbusModemProxy
    implements Gio.AsyncInitable<Modem>, Gio.DBusInterface, Gio.Initable, GdbusModem {
    static $gtype: GObject.GType<Modem>;

    constructor(properties?: Partial<Modem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Modem.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    access_technologies: number;
    accessTechnologies: number;
    bearers: string[];
    carrier_configuration: string;
    carrierConfiguration: string;
    carrier_configuration_revision: string;
    carrierConfigurationRevision: string;
    current_bands: GLib.Variant;
    currentBands: GLib.Variant;
    current_capabilities: number;
    currentCapabilities: number;
    current_modes: GLib.Variant;
    currentModes: GLib.Variant;
    device: string;
    device_identifier: string;
    deviceIdentifier: string;
    drivers: string[];
    equipment_identifier: string;
    equipmentIdentifier: string;
    hardware_revision: string;
    hardwareRevision: string;
    manufacturer: string;
    max_active_bearers: number;
    maxActiveBearers: number;
    max_bearers: number;
    maxBearers: number;
    model: string;
    own_numbers: string[];
    ownNumbers: string[];
    plugin: string;
    ports: GLib.Variant;
    power_state: number;
    powerState: number;
    primary_port: string;
    primaryPort: string;
    revision: string;
    signal_quality: GLib.Variant;
    signalQuality: GLib.Variant;
    sim: string;
    state: number;
    state_failed_reason: number;
    stateFailedReason: number;
    supported_bands: GLib.Variant;
    supportedBands: GLib.Variant;
    supported_capabilities: GLib.Variant;
    supportedCapabilities: GLib.Variant;
    supported_ip_families: number;
    supportedIpFamilies: number;
    supported_modes: GLib.Variant;
    supportedModes: GLib.Variant;
    unlock_required: number;
    unlockRequired: number;
    unlock_retries: GLib.Variant;
    unlockRetries: GLib.Variant;

    // Members

    command(cmd: string, timeout: number, cancellable?: Gio.Cancellable | null): Promise<string>;
    command(
        cmd: string,
        timeout: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    command(
        cmd: string,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<string> | void;
    command_finish(res: Gio.AsyncResult): string;
    command_sync(cmd: string, timeout: number, cancellable?: Gio.Cancellable | null): string;
    create_bearer(properties: BearerProperties, cancellable?: Gio.Cancellable | null): Promise<Bearer>;
    create_bearer(
        properties: BearerProperties,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    create_bearer(
        properties: BearerProperties,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Bearer> | void;
    create_bearer_finish(res: Gio.AsyncResult): Bearer;
    create_bearer_sync(properties: BearerProperties, cancellable?: Gio.Cancellable | null): Bearer;
    delete_bearer(bearer: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    delete_bearer(
        bearer: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    delete_bearer(
        bearer: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    delete_bearer_finish(res: Gio.AsyncResult): boolean;
    delete_bearer_sync(bearer: string, cancellable?: Gio.Cancellable | null): boolean;
    disable(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    disable(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    disable(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    disable_finish(res: Gio.AsyncResult): boolean;
    disable_sync(cancellable?: Gio.Cancellable | null): boolean;
    dup_bearer_paths(): string[];
    dup_carrier_configuration(): string;
    dup_carrier_configuration_revision(): string;
    dup_device(): string;
    dup_device_identifier(): string;
    dup_drivers(): string[];
    dup_equipment_identifier(): string;
    dup_hardware_revision(): string;
    dup_manufacturer(): string;
    dup_model(): string;
    dup_own_numbers(): string[];
    dup_path(): string;
    dup_plugin(): string;
    dup_primary_port(): string;
    dup_revision(): string;
    dup_sim_path(): string;
    enable(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    enable(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    enable(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    enable_finish(res: Gio.AsyncResult): boolean;
    enable_sync(cancellable?: Gio.Cancellable | null): boolean;
    factory_reset(code: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    factory_reset(
        code: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    factory_reset(
        code: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    factory_reset_finish(res: Gio.AsyncResult): boolean;
    factory_reset_sync(code: string, cancellable?: Gio.Cancellable | null): boolean;
    get_access_technologies(): ModemAccessTechnology;
    get_bearer_paths(): string[];
    get_carrier_configuration(): string;
    get_carrier_configuration_revision(): string;
    get_current_bands(): [boolean, ModemBand[]];
    get_current_capabilities(): ModemCapability;
    get_current_modes(): [boolean, ModemMode, ModemMode];
    get_device(): string;
    get_device_identifier(): string;
    get_drivers(): string[];
    get_equipment_identifier(): string;
    get_hardware_revision(): string;
    get_manufacturer(): string;
    get_max_active_bearers(): number;
    get_max_bearers(): number;
    get_model(): string;
    get_plugin(): string;
    get_ports(): [boolean, ModemPortInfo[]];
    get_power_state(): ModemPowerState;
    get_primary_port(): string;
    get_revision(): string;
    get_signal_quality(): [number, boolean];
    get_sim(cancellable?: Gio.Cancellable | null): Promise<Sim>;
    get_sim(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    get_sim(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): Promise<Sim> | void;
    get_sim_finish(res: Gio.AsyncResult): Sim;
    get_sim_sync(cancellable?: Gio.Cancellable | null): Sim;
    get_state(): ModemState;
    get_state_failed_reason(): ModemStateFailedReason;
    get_supported_bands(): [boolean, ModemBand[]];
    get_supported_capabilities(): [boolean, ModemCapability[]];
    get_supported_ip_families(): BearerIpFamily;
    get_supported_modes(): [boolean, ModemModeCombination[]];
    get_unlock_required(): ModemLock;
    get_unlock_retries(): UnlockRetries;
    list_bearers(cancellable?: Gio.Cancellable | null): Promise<Bearer[]>;
    list_bearers(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    list_bearers(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Bearer[]> | void;
    list_bearers_finish(res: Gio.AsyncResult): Bearer[];
    list_bearers_sync(cancellable?: Gio.Cancellable | null): Bearer[];
    peek_current_bands(): [boolean, ModemBand[]];
    peek_ports(): [boolean, ModemPortInfo[]];
    peek_supported_bands(): [boolean, ModemBand[]];
    peek_supported_capabilities(): [boolean, ModemCapability[]];
    peek_supported_modes(): [boolean, ModemModeCombination[]];
    peek_unlock_retries(): UnlockRetries;
    reset(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    reset(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    reset(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    reset_finish(res: Gio.AsyncResult): boolean;
    reset_sync(cancellable?: Gio.Cancellable | null): boolean;
    set_current_bands(bands: ModemBand, n_bands: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    set_current_bands(
        bands: ModemBand,
        n_bands: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_current_bands(
        bands: ModemBand,
        n_bands: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_current_bands_finish(res: Gio.AsyncResult): boolean;
    set_current_bands_sync(bands: ModemBand, n_bands: number, cancellable?: Gio.Cancellable | null): boolean;
    set_current_capabilities(capabilities: ModemCapability, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    set_current_capabilities(
        capabilities: ModemCapability,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_current_capabilities(
        capabilities: ModemCapability,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_current_capabilities_finish(res: Gio.AsyncResult): boolean;
    set_current_capabilities_sync(capabilities: ModemCapability, cancellable?: Gio.Cancellable | null): boolean;
    set_current_modes(modes: ModemMode, preferred: ModemMode, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    set_current_modes(
        modes: ModemMode,
        preferred: ModemMode,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_current_modes(
        modes: ModemMode,
        preferred: ModemMode,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_current_modes_finish(res: Gio.AsyncResult): boolean;
    set_current_modes_sync(modes: ModemMode, preferred: ModemMode, cancellable?: Gio.Cancellable | null): boolean;
    set_power_state(state: ModemPowerState, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    set_power_state(
        state: ModemPowerState,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_power_state(
        state: ModemPowerState,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_power_state_finish(res: Gio.AsyncResult): boolean;
    set_power_state_sync(state: ModemPowerState, cancellable?: Gio.Cancellable | null): boolean;
    static get_pending_network_initiated_sessions(self: ModemOma): [boolean, OmaPendingNetworkInitiatedSession[]];
    static peek_pending_network_initiated_sessions(self: ModemOma): [boolean, OmaPendingNetworkInitiatedSession[]];

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
    new_finish(res: Gio.AsyncResult): Modem;
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
    call_command(arg_cmd: string, arg_timeout: number, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_command(
        arg_cmd: string,
        arg_timeout: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_command(
        arg_cmd: string,
        arg_timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_command_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_command_sync(
        arg_cmd: string,
        arg_timeout: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];
    call_create_bearer(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_create_bearer(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_create_bearer(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_create_bearer_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_bearer_sync(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];
    call_delete_bearer(arg_bearer: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_delete_bearer(
        arg_bearer: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_delete_bearer(
        arg_bearer: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_delete_bearer_finish(res: Gio.AsyncResult): boolean;
    call_delete_bearer_sync(arg_bearer: string, cancellable?: Gio.Cancellable | null): boolean;
    call_enable(arg_enable: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_enable(
        arg_enable: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_enable(
        arg_enable: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_enable_finish(res: Gio.AsyncResult): boolean;
    call_enable_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean;
    call_factory_reset(arg_code: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_factory_reset(
        arg_code: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_factory_reset(
        arg_code: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_factory_reset_finish(res: Gio.AsyncResult): boolean;
    call_factory_reset_sync(arg_code: string, cancellable?: Gio.Cancellable | null): boolean;
    call_list_bearers(cancellable?: Gio.Cancellable | null): Promise<[string[] | null]>;
    call_list_bearers(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_list_bearers(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string[] | null]> | void;
    call_list_bearers_finish(res: Gio.AsyncResult): [boolean, string[] | null];
    call_list_bearers_sync(cancellable?: Gio.Cancellable | null): [boolean, string[] | null];
    call_reset(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_reset(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_reset(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_reset_finish(res: Gio.AsyncResult): boolean;
    call_reset_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_set_current_bands(arg_bands: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_current_bands(
        arg_bands: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_current_bands(
        arg_bands: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_current_bands_finish(res: Gio.AsyncResult): boolean;
    call_set_current_bands_sync(arg_bands: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_set_current_capabilities(arg_capabilities: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_current_capabilities(
        arg_capabilities: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_current_capabilities(
        arg_capabilities: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_current_capabilities_finish(res: Gio.AsyncResult): boolean;
    call_set_current_capabilities_sync(arg_capabilities: number, cancellable?: Gio.Cancellable | null): boolean;
    call_set_current_modes(arg_modes: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_current_modes(
        arg_modes: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_current_modes(
        arg_modes: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_current_modes_finish(res: Gio.AsyncResult): boolean;
    call_set_current_modes_sync(arg_modes: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_set_power_state(arg_state: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_power_state(
        arg_state: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_power_state(
        arg_state: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_power_state_finish(res: Gio.AsyncResult): boolean;
    call_set_power_state_sync(arg_state: number, cancellable?: Gio.Cancellable | null): boolean;
    complete_command(invocation: Gio.DBusMethodInvocation, response: string): void;
    complete_create_bearer(invocation: Gio.DBusMethodInvocation, path: string): void;
    complete_delete_bearer(invocation: Gio.DBusMethodInvocation): void;
    complete_enable(invocation: Gio.DBusMethodInvocation): void;
    complete_factory_reset(invocation: Gio.DBusMethodInvocation): void;
    complete_list_bearers(invocation: Gio.DBusMethodInvocation, bearers: string): void;
    complete_reset(invocation: Gio.DBusMethodInvocation): void;
    complete_set_current_bands(invocation: Gio.DBusMethodInvocation): void;
    complete_set_current_capabilities(invocation: Gio.DBusMethodInvocation): void;
    complete_set_current_modes(invocation: Gio.DBusMethodInvocation): void;
    complete_set_power_state(invocation: Gio.DBusMethodInvocation): void;
    emit_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
    vfunc_handle_command(invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number): boolean;
    vfunc_handle_create_bearer(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    vfunc_handle_delete_bearer(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean;
    vfunc_handle_enable(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
    vfunc_handle_factory_reset(invocation: Gio.DBusMethodInvocation, arg_code: string): boolean;
    vfunc_handle_list_bearers(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_reset(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_set_current_bands(invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant): boolean;
    vfunc_handle_set_current_capabilities(invocation: Gio.DBusMethodInvocation, arg_capabilities: number): boolean;
    vfunc_handle_set_current_modes(invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant): boolean;
    vfunc_handle_set_power_state(invocation: Gio.DBusMethodInvocation, arg_state: number): boolean;
    vfunc_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
}
export module Modem3gpp {
    export interface ConstructorProperties extends GdbusModem3gppProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class Modem3gpp
    extends GdbusModem3gppProxy
    implements Gio.AsyncInitable<Modem3gpp>, Gio.DBusInterface, Gio.Initable, GdbusModem3gpp {
    static $gtype: GObject.GType<Modem3gpp>;

    constructor(properties?: Partial<Modem3gpp.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Modem3gpp.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    enabled_facility_locks: number;
    enabledFacilityLocks: number;
    eps_ue_mode_operation: number;
    epsUeModeOperation: number;
    imei: string;
    initial_eps_bearer: string;
    initialEpsBearer: string;
    initial_eps_bearer_settings: GLib.Variant;
    initialEpsBearerSettings: GLib.Variant;
    operator_code: string;
    operatorCode: string;
    operator_name: string;
    operatorName: string;
    pco: GLib.Variant;
    registration_state: number;
    registrationState: number;
    subscription_state: number;
    subscriptionState: number;

    // Members

    dup_imei(): string;
    dup_initial_eps_bearer_path(): string;
    dup_operator_code(): string;
    dup_operator_name(): string;
    dup_path(): string;
    get_enabled_facility_locks(): Modem3gppFacility;
    get_eps_ue_mode_operation(): Modem3gppEpsUeModeOperation;
    get_imei(): string;
    get_initial_eps_bearer(cancellable?: Gio.Cancellable | null): Promise<Bearer>;
    get_initial_eps_bearer(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    get_initial_eps_bearer(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Bearer> | void;
    get_initial_eps_bearer_finish(res: Gio.AsyncResult): Bearer;
    get_initial_eps_bearer_settings(): BearerProperties;
    get_initial_eps_bearer_sync(cancellable?: Gio.Cancellable | null): Bearer;
    get_operator_code(): string;
    get_operator_name(): string;
    get_path(): string;
    get_pco(): Pco[];
    get_registration_state(): Modem3gppRegistrationState;
    get_subscription_state(): Modem3gppSubscriptionState;
    peek_initial_eps_bearer_settings(): BearerProperties;
    register(network_id: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    register(
        network_id: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    register(
        network_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    register_finish(res: Gio.AsyncResult): boolean;
    register_sync(network_id: string, cancellable?: Gio.Cancellable | null): boolean;
    scan(cancellable?: Gio.Cancellable | null): Promise<Modem3gppNetwork[]>;
    scan(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    scan(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Modem3gppNetwork[]> | void;
    scan_finish(res: Gio.AsyncResult): Modem3gppNetwork[];
    scan_sync(cancellable?: Gio.Cancellable | null): Modem3gppNetwork[];
    set_eps_ue_mode_operation(
        mode: Modem3gppEpsUeModeOperation,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    set_eps_ue_mode_operation(
        mode: Modem3gppEpsUeModeOperation,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_eps_ue_mode_operation(
        mode: Modem3gppEpsUeModeOperation,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_eps_ue_mode_operation_finish(res: Gio.AsyncResult): boolean;
    set_eps_ue_mode_operation_sync(mode: Modem3gppEpsUeModeOperation, cancellable?: Gio.Cancellable | null): boolean;
    set_initial_eps_bearer_settings(config: BearerProperties, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    set_initial_eps_bearer_settings(
        config: BearerProperties,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_initial_eps_bearer_settings(
        config: BearerProperties,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_initial_eps_bearer_settings_finish(res: Gio.AsyncResult): boolean;
    set_initial_eps_bearer_settings_sync(config: BearerProperties, cancellable?: Gio.Cancellable | null): boolean;

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
    new_finish(res: Gio.AsyncResult): Modem3gpp;
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
    call_register(arg_operator_id: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_register(
        arg_operator_id: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_register(
        arg_operator_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_register_finish(res: Gio.AsyncResult): boolean;
    call_register_sync(arg_operator_id: string, cancellable?: Gio.Cancellable | null): boolean;
    call_scan(cancellable?: Gio.Cancellable | null): Promise<[GLib.Variant | null]>;
    call_scan(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_scan(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[GLib.Variant | null]> | void;
    call_scan_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_scan_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    call_set_eps_ue_mode_operation(arg_mode: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_eps_ue_mode_operation(
        arg_mode: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_eps_ue_mode_operation(
        arg_mode: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_eps_ue_mode_operation_finish(res: Gio.AsyncResult): boolean;
    call_set_eps_ue_mode_operation_sync(arg_mode: number, cancellable?: Gio.Cancellable | null): boolean;
    call_set_initial_eps_bearer_settings(
        arg_settings: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_set_initial_eps_bearer_settings(
        arg_settings: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_initial_eps_bearer_settings(
        arg_settings: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_initial_eps_bearer_settings_finish(res: Gio.AsyncResult): boolean;
    call_set_initial_eps_bearer_settings_sync(
        arg_settings: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    complete_register(invocation: Gio.DBusMethodInvocation): void;
    complete_scan(invocation: Gio.DBusMethodInvocation, results: GLib.Variant): void;
    complete_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation): void;
    complete_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_register(invocation: Gio.DBusMethodInvocation, arg_operator_id: string): boolean;
    vfunc_handle_scan(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation, arg_mode: number): boolean;
    vfunc_handle_set_initial_eps_bearer_settings(
        invocation: Gio.DBusMethodInvocation,
        arg_settings: GLib.Variant
    ): boolean;
}
export module Modem3gppUssd {
    export interface ConstructorProperties extends GdbusModem3gppUssdProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class Modem3gppUssd
    extends GdbusModem3gppUssdProxy
    implements Gio.AsyncInitable<Modem3gppUssd>, Gio.DBusInterface, Gio.Initable, GdbusModem3gppUssd {
    static $gtype: GObject.GType<Modem3gppUssd>;

    constructor(properties?: Partial<Modem3gppUssd.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Modem3gppUssd.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    network_notification: string;
    networkNotification: string;
    network_request: string;
    networkRequest: string;
    state: number;

    // Members

    cancel(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    cancel(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    cancel_finish(res: Gio.AsyncResult): boolean;
    cancel_sync(cancellable?: Gio.Cancellable | null): boolean;
    dup_network_notification(): string;
    dup_network_request(): string;
    dup_path(): string;
    get_network_notification(): string;
    get_network_request(): string;
    get_path(): string;
    get_state(): Modem3gppUssdSessionState;
    initiate(command: string, cancellable?: Gio.Cancellable | null): Promise<string>;
    initiate(command: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    initiate(
        command: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<string> | void;
    initiate_finish(res: Gio.AsyncResult): string;
    initiate_sync(command: string, cancellable?: Gio.Cancellable | null): string;
    respond(response: string, cancellable?: Gio.Cancellable | null): Promise<string>;
    respond(response: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    respond(
        response: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<string> | void;
    respond_finish(res: Gio.AsyncResult): string;
    respond_sync(response: string, cancellable?: Gio.Cancellable | null): string;

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
    new_finish(res: Gio.AsyncResult): Modem3gppUssd;
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
    call_cancel(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_cancel(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_cancel_finish(res: Gio.AsyncResult): boolean;
    call_cancel_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_initiate(arg_command: string, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_initiate(
        arg_command: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_initiate(
        arg_command: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_initiate_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_initiate_sync(arg_command: string, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    call_respond(arg_response: string, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_respond(
        arg_response: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_respond(
        arg_response: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_respond_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_respond_sync(arg_response: string, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    complete_cancel(invocation: Gio.DBusMethodInvocation): void;
    complete_initiate(invocation: Gio.DBusMethodInvocation, reply: string): void;
    complete_respond(invocation: Gio.DBusMethodInvocation, reply: string): void;
    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_initiate(invocation: Gio.DBusMethodInvocation, arg_command: string): boolean;
    vfunc_handle_respond(invocation: Gio.DBusMethodInvocation, arg_response: string): boolean;
}
export module ModemCdma {
    export interface ConstructorProperties extends GdbusModemCdmaProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class ModemCdma
    extends GdbusModemCdmaProxy
    implements Gio.AsyncInitable<ModemCdma>, Gio.DBusInterface, Gio.Initable, GdbusModemCdma {
    static $gtype: GObject.GType<ModemCdma>;

    constructor(properties?: Partial<ModemCdma.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ModemCdma.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    activation_state: number;
    activationState: number;
    cdma1x_registration_state: number;
    cdma1xRegistrationState: number;
    esn: string;
    evdo_registration_state: number;
    evdoRegistrationState: number;
    meid: string;
    nid: number;
    sid: number;

    // Members

    activate(carrier: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    activate(carrier: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    activate(
        carrier: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    activate_finish(res: Gio.AsyncResult): boolean;
    activate_manual(properties: CdmaManualActivationProperties, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    activate_manual(
        properties: CdmaManualActivationProperties,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    activate_manual(
        properties: CdmaManualActivationProperties,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    activate_manual_finish(res: Gio.AsyncResult): boolean;
    activate_manual_sync(properties: CdmaManualActivationProperties, cancellable?: Gio.Cancellable | null): boolean;
    activate_sync(carrier: string, cancellable?: Gio.Cancellable | null): boolean;
    dup_esn(): string;
    dup_meid(): string;
    dup_path(): string;
    get_activation_state(): ModemCdmaActivationState;
    get_cdma1x_registration_state(): ModemCdmaRegistrationState;
    get_esn(): string;
    get_evdo_registration_state(): ModemCdmaRegistrationState;
    get_meid(): string;
    get_nid(): number;
    get_path(): string;
    get_sid(): number;

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
    new_finish(res: Gio.AsyncResult): ModemCdma;
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
    call_activate(arg_carrier_code: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_activate(
        arg_carrier_code: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_activate(
        arg_carrier_code: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_activate_finish(res: Gio.AsyncResult): boolean;
    call_activate_manual(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_activate_manual(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_activate_manual(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_activate_manual_finish(res: Gio.AsyncResult): boolean;
    call_activate_manual_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_activate_sync(arg_carrier_code: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_activate(invocation: Gio.DBusMethodInvocation): void;
    complete_activate_manual(invocation: Gio.DBusMethodInvocation): void;
    emit_activation_state_changed(
        arg_activation_state: number,
        arg_activation_error: number,
        arg_status_changes: GLib.Variant
    ): void;
    vfunc_activation_state_changed(
        arg_activation_state: number,
        arg_activation_error: number,
        arg_status_changes: GLib.Variant
    ): void;
    vfunc_handle_activate(invocation: Gio.DBusMethodInvocation, arg_carrier_code: string): boolean;
    vfunc_handle_activate_manual(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
}
export module ModemFirmware {
    export interface ConstructorProperties extends GdbusModemFirmwareProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class ModemFirmware
    extends GdbusModemFirmwareProxy
    implements Gio.AsyncInitable<ModemFirmware>, Gio.DBusInterface, Gio.Initable, GdbusModemFirmware {
    static $gtype: GObject.GType<ModemFirmware>;

    constructor(properties?: Partial<ModemFirmware.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ModemFirmware.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    update_settings: GLib.Variant;
    updateSettings: GLib.Variant;

    // Members

    dup_path(): string;
    get_path(): string;
    get_update_settings(): FirmwareUpdateSettings;
    list(cancellable?: Gio.Cancellable | null): Promise<[FirmwareProperties | null, FirmwareProperties[] | null]>;
    list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    list(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[FirmwareProperties | null, FirmwareProperties[] | null]> | void;
    list_finish(res: Gio.AsyncResult): [boolean, FirmwareProperties | null, FirmwareProperties[] | null];
    list_sync(cancellable?: Gio.Cancellable | null): [boolean, FirmwareProperties | null, FirmwareProperties[] | null];
    peek_update_settings(): FirmwareUpdateSettings;
    select(unique_id: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    select(unique_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    select(
        unique_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    select_finish(res: Gio.AsyncResult): boolean;
    select_sync(unique_id: string, cancellable?: Gio.Cancellable | null): boolean;

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
    new_finish(res: Gio.AsyncResult): ModemFirmware;
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
    call_list(cancellable?: Gio.Cancellable | null): Promise<[string | null, GLib.Variant | null]>;
    call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_list(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null, GLib.Variant | null]> | void;
    call_list_finish(res: Gio.AsyncResult): [boolean, string | null, GLib.Variant | null];
    call_list_sync(cancellable?: Gio.Cancellable | null): [boolean, string | null, GLib.Variant | null];
    call_select(arg_uniqueid: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_select(
        arg_uniqueid: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_select(
        arg_uniqueid: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_select_finish(res: Gio.AsyncResult): boolean;
    call_select_sync(arg_uniqueid: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_list(invocation: Gio.DBusMethodInvocation, selected: string, installed: GLib.Variant): void;
    complete_select(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_select(invocation: Gio.DBusMethodInvocation, arg_uniqueid: string): boolean;
}
export module ModemLocation {
    export interface ConstructorProperties extends GdbusModemLocationProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class ModemLocation
    extends GdbusModemLocationProxy
    implements Gio.AsyncInitable<ModemLocation>, Gio.DBusInterface, Gio.Initable, GdbusModemLocation {
    static $gtype: GObject.GType<ModemLocation>;

    constructor(properties?: Partial<ModemLocation.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ModemLocation.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    assistance_data_servers: string[];
    assistanceDataServers: string[];
    capabilities: number;
    enabled: number;
    gps_refresh_rate: number;
    gpsRefreshRate: number;
    location: GLib.Variant;
    signalsLocation: boolean;
    supl_server: string;
    suplServer: string;
    supported_assistance_data: number;
    supportedAssistanceData: number;

    // Members

    dup_assistance_data_servers(): string[];
    dup_path(): string;
    dup_supl_server(): string;
    get_3gpp(cancellable?: Gio.Cancellable | null): Promise<Location3gpp>;
    get_3gpp(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    get_3gpp(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Location3gpp> | void;
    get_3gpp_finish(res: Gio.AsyncResult): Location3gpp;
    get_3gpp_sync(cancellable?: Gio.Cancellable | null): Location3gpp;
    get_assistance_data_servers(): string[];
    get_capabilities(): ModemLocationSource;
    get_cdma_bs(cancellable?: Gio.Cancellable | null): Promise<LocationCdmaBs>;
    get_cdma_bs(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    get_cdma_bs(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<LocationCdmaBs> | void;
    get_cdma_bs_finish(res: Gio.AsyncResult): LocationCdmaBs;
    get_cdma_bs_sync(cancellable?: Gio.Cancellable | null): LocationCdmaBs;
    get_enabled(): ModemLocationSource;
    get_full(
        cancellable?: Gio.Cancellable | null
    ): Promise<[Location3gpp | null, LocationGpsNmea | null, LocationGpsRaw | null, LocationCdmaBs | null]>;
    get_full(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    get_full(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[Location3gpp | null, LocationGpsNmea | null, LocationGpsRaw | null, LocationCdmaBs | null]> | void;
    get_full_finish(
        res: Gio.AsyncResult
    ): [boolean, Location3gpp | null, LocationGpsNmea | null, LocationGpsRaw | null, LocationCdmaBs | null];
    get_full_sync(
        cancellable?: Gio.Cancellable | null
    ): [boolean, Location3gpp | null, LocationGpsNmea | null, LocationGpsRaw | null, LocationCdmaBs | null];
    get_gps_nmea(cancellable?: Gio.Cancellable | null): Promise<LocationGpsNmea>;
    get_gps_nmea(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    get_gps_nmea(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<LocationGpsNmea> | void;
    get_gps_nmea_finish(res: Gio.AsyncResult): LocationGpsNmea;
    get_gps_nmea_sync(cancellable?: Gio.Cancellable | null): LocationGpsNmea;
    get_gps_raw(cancellable?: Gio.Cancellable | null): Promise<LocationGpsRaw>;
    get_gps_raw(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    get_gps_raw(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<LocationGpsRaw> | void;
    get_gps_raw_finish(res: Gio.AsyncResult): LocationGpsRaw;
    get_gps_raw_sync(cancellable?: Gio.Cancellable | null): LocationGpsRaw;
    get_gps_refresh_rate(): number;
    get_path(): string;
    get_supl_server(): string;
    get_supported_assistance_data(): ModemLocationAssistanceDataType;
    inject_assistance_data(data: Uint8Array | string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    inject_assistance_data(
        data: Uint8Array | string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    inject_assistance_data(
        data: Uint8Array | string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    inject_assistance_data_finish(res: Gio.AsyncResult): boolean;
    inject_assistance_data_sync(data: Uint8Array | string, cancellable?: Gio.Cancellable | null): boolean;
    set_gps_refresh_rate(rate: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    set_gps_refresh_rate(
        rate: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_gps_refresh_rate(
        rate: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_gps_refresh_rate_finish(res: Gio.AsyncResult): boolean;
    set_gps_refresh_rate_sync(rate: number, cancellable?: Gio.Cancellable | null): boolean;
    set_supl_server(supl: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    set_supl_server(
        supl: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_supl_server(
        supl: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_supl_server_finish(res: Gio.AsyncResult): boolean;
    set_supl_server_sync(supl: string, cancellable?: Gio.Cancellable | null): boolean;
    setup(
        sources: ModemLocationSource,
        signal_location: boolean,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    setup(
        sources: ModemLocationSource,
        signal_location: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    setup(
        sources: ModemLocationSource,
        signal_location: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    setup_finish(res: Gio.AsyncResult): boolean;
    setup_sync(sources: ModemLocationSource, signal_location: boolean, cancellable?: Gio.Cancellable | null): boolean;
    signals_location: (() => boolean) | any;

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
    new_finish(res: Gio.AsyncResult): ModemLocation;
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
    call_get_location(cancellable?: Gio.Cancellable | null): Promise<[GLib.Variant | null]>;
    call_get_location(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_get_location(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[GLib.Variant | null]> | void;
    call_get_location_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_get_location_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    call_inject_assistance_data(arg_data: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_inject_assistance_data(
        arg_data: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_inject_assistance_data(
        arg_data: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_inject_assistance_data_finish(res: Gio.AsyncResult): boolean;
    call_inject_assistance_data_sync(arg_data: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_set_gps_refresh_rate(arg_rate: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_gps_refresh_rate(
        arg_rate: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_gps_refresh_rate(
        arg_rate: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_gps_refresh_rate_finish(res: Gio.AsyncResult): boolean;
    call_set_gps_refresh_rate_sync(arg_rate: number, cancellable?: Gio.Cancellable | null): boolean;
    call_set_supl_server(arg_supl: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_supl_server(
        arg_supl: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_supl_server(
        arg_supl: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_supl_server_finish(res: Gio.AsyncResult): boolean;
    call_set_supl_server_sync(arg_supl: string, cancellable?: Gio.Cancellable | null): boolean;
    call_setup(
        arg_sources: number,
        arg_signal_location: boolean,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_setup(
        arg_sources: number,
        arg_signal_location: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_setup(
        arg_sources: number,
        arg_signal_location: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_setup_finish(res: Gio.AsyncResult): boolean;
    call_setup_sync(arg_sources: number, arg_signal_location: boolean, cancellable?: Gio.Cancellable | null): boolean;
    complete_get_location(invocation: Gio.DBusMethodInvocation, Location: GLib.Variant): void;
    complete_inject_assistance_data(invocation: Gio.DBusMethodInvocation): void;
    complete_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation): void;
    complete_set_supl_server(invocation: Gio.DBusMethodInvocation): void;
    complete_setup(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_get_location(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_inject_assistance_data(invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): boolean;
    vfunc_handle_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean;
    vfunc_handle_set_supl_server(invocation: Gio.DBusMethodInvocation, arg_supl: string): boolean;
    vfunc_handle_setup(
        invocation: Gio.DBusMethodInvocation,
        arg_sources: number,
        arg_signal_location: boolean
    ): boolean;
}
export module ModemMessaging {
    export interface ConstructorProperties extends GdbusModemMessagingProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class ModemMessaging
    extends GdbusModemMessagingProxy
    implements Gio.AsyncInitable<ModemMessaging>, Gio.DBusInterface, Gio.Initable, GdbusModemMessaging {
    static $gtype: GObject.GType<ModemMessaging>;

    constructor(properties?: Partial<ModemMessaging.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ModemMessaging.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    default_storage: number;
    defaultStorage: number;
    messages: string[];
    supported_storages: GLib.Variant;
    supportedStorages: GLib.Variant;

    // Members

    create(properties: SmsProperties, cancellable?: Gio.Cancellable | null): Promise<Sms>;
    create(
        properties: SmsProperties,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    create(
        properties: SmsProperties,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Sms> | void;
    create_finish(res: Gio.AsyncResult): Sms;
    create_sync(properties: SmsProperties, cancellable?: Gio.Cancellable | null): Sms;
    ["delete"](sms: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    ["delete"](sms: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    ["delete"](
        sms: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    delete_finish(res: Gio.AsyncResult): boolean;
    delete_sync(sms: string, cancellable?: Gio.Cancellable | null): boolean;
    dup_path(): string;
    get_default_storage(): SmsStorage;
    get_path(): string;
    get_supported_storages(): [boolean, SmsStorage[]];
    list(cancellable?: Gio.Cancellable | null): Promise<Sms[]>;
    list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    list(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): Promise<Sms[]> | void;
    list_finish(res: Gio.AsyncResult): Sms[];
    list_sync(cancellable?: Gio.Cancellable | null): Sms[];
    peek_supported_storages(): [boolean, SmsStorage, number];

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
    new_finish(res: Gio.AsyncResult): ModemMessaging;
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
    call_create(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_create(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_create(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_create_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    call_delete(arg_path: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_delete(
        arg_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_delete(
        arg_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_delete_finish(res: Gio.AsyncResult): boolean;
    call_delete_sync(arg_path: string, cancellable?: Gio.Cancellable | null): boolean;
    call_list(cancellable?: Gio.Cancellable | null): Promise<[string[] | null]>;
    call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_list(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string[] | null]> | void;
    call_list_finish(res: Gio.AsyncResult): [boolean, string[] | null];
    call_list_sync(cancellable?: Gio.Cancellable | null): [boolean, string[] | null];
    complete_create(invocation: Gio.DBusMethodInvocation, path: string): void;
    complete_delete(invocation: Gio.DBusMethodInvocation): void;
    complete_list(invocation: Gio.DBusMethodInvocation, result: string): void;
    emit_added(arg_path: string, arg_received: boolean): void;
    emit_deleted(arg_path: string): void;
    vfunc_added(arg_path: string, arg_received: boolean): void;
    vfunc_deleted(arg_path: string): void;
    vfunc_handle_create(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
    vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
}
export module ModemOma {
    export interface ConstructorProperties extends GdbusModemOmaProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class ModemOma
    extends GdbusModemOmaProxy
    implements Gio.AsyncInitable<ModemOma>, Gio.DBusInterface, Gio.Initable, GdbusModemOma {
    static $gtype: GObject.GType<ModemOma>;

    constructor(properties?: Partial<ModemOma.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ModemOma.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    features: number;
    pending_network_initiated_sessions: GLib.Variant;
    pendingNetworkInitiatedSessions: GLib.Variant;
    session_state: number;
    sessionState: number;
    session_type: number;
    sessionType: number;

    // Members

    accept_network_initiated_session(
        session_id: number,
        accept: boolean,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    accept_network_initiated_session(
        session_id: number,
        accept: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    accept_network_initiated_session(
        session_id: number,
        accept: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    accept_network_initiated_session_finish(res: Gio.AsyncResult): boolean;
    accept_network_initiated_session_sync(
        session_id: number,
        accept: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    cancel_session(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    cancel_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    cancel_session(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    cancel_session_finish(res: Gio.AsyncResult): boolean;
    cancel_session_sync(cancellable?: Gio.Cancellable | null): boolean;
    dup_path(): string;
    get_features(): OmaFeature;
    get_path(): string;
    get_session_state(): OmaSessionState;
    get_session_type(): OmaSessionType;
    setup(features: OmaFeature, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    setup(
        features: OmaFeature,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    setup(
        features: OmaFeature,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    setup_finish(res: Gio.AsyncResult): boolean;
    setup_sync(features: OmaFeature, cancellable?: Gio.Cancellable | null): boolean;
    start_client_initiated_session(
        session_type: OmaSessionType,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    start_client_initiated_session(
        session_type: OmaSessionType,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    start_client_initiated_session(
        session_type: OmaSessionType,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    start_client_initiated_session_finish(res: Gio.AsyncResult): boolean;
    start_client_initiated_session_sync(session_type: OmaSessionType, cancellable?: Gio.Cancellable | null): boolean;

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
    new_finish(res: Gio.AsyncResult): ModemOma;
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
    call_accept_network_initiated_session(
        arg_session_id: number,
        arg_accept: boolean,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_accept_network_initiated_session(
        arg_session_id: number,
        arg_accept: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_accept_network_initiated_session(
        arg_session_id: number,
        arg_accept: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_accept_network_initiated_session_finish(res: Gio.AsyncResult): boolean;
    call_accept_network_initiated_session_sync(
        arg_session_id: number,
        arg_accept: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_cancel_session(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_cancel_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_cancel_session(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_cancel_session_finish(res: Gio.AsyncResult): boolean;
    call_cancel_session_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_setup(arg_features: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_setup(
        arg_features: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_setup(
        arg_features: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_setup_finish(res: Gio.AsyncResult): boolean;
    call_setup_sync(arg_features: number, cancellable?: Gio.Cancellable | null): boolean;
    call_start_client_initiated_session(
        arg_session_type: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_start_client_initiated_session(
        arg_session_type: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_start_client_initiated_session(
        arg_session_type: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_start_client_initiated_session_finish(res: Gio.AsyncResult): boolean;
    call_start_client_initiated_session_sync(arg_session_type: number, cancellable?: Gio.Cancellable | null): boolean;
    complete_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation): void;
    complete_cancel_session(invocation: Gio.DBusMethodInvocation): void;
    complete_setup(invocation: Gio.DBusMethodInvocation): void;
    complete_start_client_initiated_session(invocation: Gio.DBusMethodInvocation): void;
    emit_session_state_changed(
        arg_old_session_state: number,
        arg_new_session_state: number,
        arg_session_state_failed_reason: number
    ): void;
    vfunc_handle_accept_network_initiated_session(
        invocation: Gio.DBusMethodInvocation,
        arg_session_id: number,
        arg_accept: boolean
    ): boolean;
    vfunc_handle_cancel_session(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_features: number): boolean;
    vfunc_handle_start_client_initiated_session(
        invocation: Gio.DBusMethodInvocation,
        arg_session_type: number
    ): boolean;
    vfunc_session_state_changed(
        arg_old_session_state: number,
        arg_new_session_state: number,
        arg_session_state_failed_reason: number
    ): void;
}
export module ModemSignal {
    export interface ConstructorProperties extends GdbusModemSignalProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class ModemSignal
    extends GdbusModemSignalProxy
    implements Gio.AsyncInitable<ModemSignal>, Gio.DBusInterface, Gio.Initable, GdbusModemSignal {
    static $gtype: GObject.GType<ModemSignal>;

    constructor(properties?: Partial<ModemSignal.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ModemSignal.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    cdma: GLib.Variant;
    evdo: GLib.Variant;
    gsm: GLib.Variant;
    lte: GLib.Variant;
    rate: number;
    umts: GLib.Variant;

    // Members

    dup_path(): string;
    get_cdma(): Signal;
    get_evdo(): Signal;
    get_gsm(): Signal;
    get_lte(): Signal;
    get_path(): string;
    get_rate(): number;
    get_umts(): Signal;
    peek_cdma(): Signal;
    peek_evdo(): Signal;
    peek_gsm(): Signal;
    peek_lte(): Signal;
    peek_umts(): Signal;
    setup(rate: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    setup(rate: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    setup(
        rate: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    setup_finish(res: Gio.AsyncResult): boolean;
    setup_sync(rate: number, cancellable?: Gio.Cancellable | null): boolean;

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
    new_finish(res: Gio.AsyncResult): ModemSignal;
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
    call_setup(arg_rate: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_setup(
        arg_rate: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_setup(
        arg_rate: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_setup_finish(res: Gio.AsyncResult): boolean;
    call_setup_sync(arg_rate: number, cancellable?: Gio.Cancellable | null): boolean;
    complete_setup(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean;
}
export module ModemSimple {
    export interface ConstructorProperties extends GdbusModemSimpleProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class ModemSimple
    extends GdbusModemSimpleProxy
    implements Gio.AsyncInitable<ModemSimple>, Gio.DBusInterface, Gio.Initable, GdbusModemSimple {
    static $gtype: GObject.GType<ModemSimple>;

    constructor(properties?: Partial<ModemSimple.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ModemSimple.ConstructorProperties>, ...args: any[]): void;

    // Members

    connect(properties: SimpleConnectProperties, cancellable?: Gio.Cancellable | null): Promise<Bearer>;
    connect(
        properties: SimpleConnectProperties,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    connect(
        properties: SimpleConnectProperties,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Bearer> | void;
    connect(...args: never[]): never;
    connect_finish(res: Gio.AsyncResult): Bearer;
    connect_sync(properties: SimpleConnectProperties, cancellable?: Gio.Cancellable | null): Bearer;
    disconnect(bearer?: string | null, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    disconnect(
        bearer: string | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    disconnect(
        bearer?: string | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    disconnect(...args: never[]): never;
    disconnect_finish(res: Gio.AsyncResult): boolean;
    disconnect_sync(bearer?: string | null, cancellable?: Gio.Cancellable | null): boolean;
    dup_path(): string;
    get_path(): string;
    get_status(cancellable?: Gio.Cancellable | null): Promise<SimpleStatus>;
    get_status(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    get_status(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<SimpleStatus> | void;
    get_status_finish(res: Gio.AsyncResult): SimpleStatus;
    get_status_sync(cancellable?: Gio.Cancellable | null): SimpleStatus;

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
    new_finish(res: Gio.AsyncResult): ModemSimple;
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
    call_connect(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_connect(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_connect(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_connect_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_connect_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    call_disconnect(arg_bearer: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_disconnect(
        arg_bearer: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_disconnect(
        arg_bearer: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_disconnect_finish(res: Gio.AsyncResult): boolean;
    call_disconnect_sync(arg_bearer: string, cancellable?: Gio.Cancellable | null): boolean;
    call_get_status(cancellable?: Gio.Cancellable | null): Promise<[GLib.Variant | null]>;
    call_get_status(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_get_status(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[GLib.Variant | null]> | void;
    call_get_status_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_get_status_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    complete_connect(invocation: Gio.DBusMethodInvocation, bearer: string): void;
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
    complete_get_status(invocation: Gio.DBusMethodInvocation, properties: GLib.Variant): void;
    vfunc_handle_connect(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean;
    vfunc_handle_get_status(invocation: Gio.DBusMethodInvocation): boolean;
}
export module ModemTime {
    export interface ConstructorProperties extends GdbusModemTimeProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class ModemTime
    extends GdbusModemTimeProxy
    implements Gio.AsyncInitable<ModemTime>, Gio.DBusInterface, Gio.Initable, GdbusModemTime {
    static $gtype: GObject.GType<ModemTime>;

    constructor(properties?: Partial<ModemTime.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ModemTime.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    network_timezone: GLib.Variant;
    networkTimezone: GLib.Variant;

    // Members

    dup_path(): string;
    get_network_time(cancellable?: Gio.Cancellable | null): Promise<string>;
    get_network_time(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    get_network_time(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<string> | void;
    get_network_time_finish(res: Gio.AsyncResult): string;
    get_network_time_sync(cancellable?: Gio.Cancellable | null): string;
    get_network_timezone(): NetworkTimezone;
    get_path(): string;
    peek_network_timezone(): NetworkTimezone;

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
    new_finish(res: Gio.AsyncResult): ModemTime;
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
    call_get_network_time(cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_get_network_time(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_get_network_time(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_get_network_time_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_get_network_time_sync(cancellable?: Gio.Cancellable | null): [boolean, string | null];
    complete_get_network_time(invocation: Gio.DBusMethodInvocation, time: string): void;
    emit_network_time_changed(arg_time: string): void;
    vfunc_handle_get_network_time(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_network_time_changed(arg_time: string): void;
}
export module ModemVoice {
    export interface ConstructorProperties extends GdbusModemVoiceProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class ModemVoice
    extends GdbusModemVoiceProxy
    implements Gio.AsyncInitable<ModemVoice>, Gio.DBusInterface, Gio.Initable, GdbusModemVoice {
    static $gtype: GObject.GType<ModemVoice>;

    constructor(properties?: Partial<ModemVoice.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ModemVoice.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    calls: string[];
    emergency_only: boolean;
    emergencyOnly: boolean;

    // Members

    call_waiting_query(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_waiting_query(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_waiting_query(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_waiting_query_finish(res: Gio.AsyncResult, status: boolean): boolean;
    call_waiting_query_sync(cancellable: Gio.Cancellable | null, status: boolean): boolean;
    call_waiting_setup(enable: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_waiting_setup(
        enable: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_waiting_setup(
        enable: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_waiting_setup_finish(res: Gio.AsyncResult): boolean;
    call_waiting_setup_sync(enable: boolean, cancellable?: Gio.Cancellable | null): boolean;
    create_call(properties: CallProperties, cancellable?: Gio.Cancellable | null): Promise<Call>;
    create_call(
        properties: CallProperties,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    create_call(
        properties: CallProperties,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Call> | void;
    create_call_finish(res: Gio.AsyncResult): Call;
    create_call_sync(properties: CallProperties, cancellable?: Gio.Cancellable | null): Call;
    delete_call(call: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    delete_call(call: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    delete_call(
        call: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    delete_call_finish(res: Gio.AsyncResult): boolean;
    delete_call_sync(call: string, cancellable?: Gio.Cancellable | null): boolean;
    dup_path(): string;
    get_emergency_only(): boolean;
    get_path(): string;
    hangup_all(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    hangup_all(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    hangup_all(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    hangup_all_finish(res: Gio.AsyncResult): boolean;
    hangup_all_sync(cancellable?: Gio.Cancellable | null): boolean;
    hangup_and_accept(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    hangup_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    hangup_and_accept(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    hangup_and_accept_finish(res: Gio.AsyncResult): boolean;
    hangup_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean;
    hold_and_accept(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    hold_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    hold_and_accept(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    hold_and_accept_finish(res: Gio.AsyncResult): boolean;
    hold_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean;
    list_calls(cancellable?: Gio.Cancellable | null): Promise<Call[]>;
    list_calls(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    list_calls(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Call[]> | void;
    list_calls_finish(res: Gio.AsyncResult): Call[];
    list_calls_sync(cancellable?: Gio.Cancellable | null): Call[];
    transfer(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    transfer(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    transfer(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    transfer_finish(res: Gio.AsyncResult): boolean;
    transfer_sync(cancellable?: Gio.Cancellable | null): boolean;

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
    new_finish(res: Gio.AsyncResult): ModemVoice;
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
    call_call_waiting_query(cancellable?: Gio.Cancellable | null): Promise<[boolean | null]>;
    call_call_waiting_query(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_call_waiting_query(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[boolean | null]> | void;
    call_call_waiting_query_finish(res: Gio.AsyncResult): [boolean, boolean | null];
    call_call_waiting_query_sync(cancellable?: Gio.Cancellable | null): [boolean, boolean | null];
    call_call_waiting_setup(arg_enable: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_call_waiting_setup(
        arg_enable: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_call_waiting_setup(
        arg_enable: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_call_waiting_setup_finish(res: Gio.AsyncResult): boolean;
    call_call_waiting_setup_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean;
    call_create_call(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_create_call(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_create_call(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_create_call_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_call_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    call_delete_call(arg_path: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_delete_call(
        arg_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_delete_call(
        arg_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_delete_call_finish(res: Gio.AsyncResult): boolean;
    call_delete_call_sync(arg_path: string, cancellable?: Gio.Cancellable | null): boolean;
    call_hangup_all(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_hangup_all(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_hangup_all(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_hangup_all_finish(res: Gio.AsyncResult): boolean;
    call_hangup_all_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_hangup_and_accept(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_hangup_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_hangup_and_accept(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_hangup_and_accept_finish(res: Gio.AsyncResult): boolean;
    call_hangup_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_hold_and_accept(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_hold_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_hold_and_accept(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_hold_and_accept_finish(res: Gio.AsyncResult): boolean;
    call_hold_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_list_calls(cancellable?: Gio.Cancellable | null): Promise<[string[] | null]>;
    call_list_calls(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_list_calls(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string[] | null]> | void;
    call_list_calls_finish(res: Gio.AsyncResult): [boolean, string[] | null];
    call_list_calls_sync(cancellable?: Gio.Cancellable | null): [boolean, string[] | null];
    call_transfer(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_transfer(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_transfer(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_transfer_finish(res: Gio.AsyncResult): boolean;
    call_transfer_sync(cancellable?: Gio.Cancellable | null): boolean;
    complete_call_waiting_query(invocation: Gio.DBusMethodInvocation, status: boolean): void;
    complete_call_waiting_setup(invocation: Gio.DBusMethodInvocation): void;
    complete_create_call(invocation: Gio.DBusMethodInvocation, path: string): void;
    complete_delete_call(invocation: Gio.DBusMethodInvocation): void;
    complete_hangup_all(invocation: Gio.DBusMethodInvocation): void;
    complete_hangup_and_accept(invocation: Gio.DBusMethodInvocation): void;
    complete_hold_and_accept(invocation: Gio.DBusMethodInvocation): void;
    complete_list_calls(invocation: Gio.DBusMethodInvocation, result: string): void;
    complete_transfer(invocation: Gio.DBusMethodInvocation): void;
    emit_call_added(arg_path: string): void;
    emit_call_deleted(arg_path: string): void;
    vfunc_call_added(arg_path: string): void;
    vfunc_call_deleted(arg_path: string): void;
    vfunc_handle_call_waiting_query(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_call_waiting_setup(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
    vfunc_handle_create_call(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    vfunc_handle_delete_call(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
    vfunc_handle_hangup_all(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_hangup_and_accept(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_hold_and_accept(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_list_calls(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_transfer(invocation: Gio.DBusMethodInvocation): boolean;
}
export module NetworkTimezone {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class NetworkTimezone extends GObject.Object {
    static $gtype: GObject.GType<NetworkTimezone>;

    constructor(properties?: Partial<NetworkTimezone.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NetworkTimezone.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_dst_offset(): number;
    get_leap_seconds(): number;
    get_offset(): number;
}
export module Object {
    export interface ConstructorProperties extends GdbusObjectProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class Object extends GdbusObjectProxy implements Gio.DBusObject, GdbusObject {
    static $gtype: GObject.GType<Object>;

    constructor(properties?: Partial<Object.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Object.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    modem: GdbusModem;
    modem_cdma: GdbusModemCdma;
    modemCdma: GdbusModemCdma;
    modem_firmware: GdbusModemFirmware;
    modemFirmware: GdbusModemFirmware;
    modem_location: GdbusModemLocation;
    modemLocation: GdbusModemLocation;
    modem_messaging: GdbusModemMessaging;
    modemMessaging: GdbusModemMessaging;
    modem_oma: GdbusModemOma;
    modemOma: GdbusModemOma;
    modem_signal: GdbusModemSignal;
    modemSignal: GdbusModemSignal;
    modem_simple: GdbusModemSimple;
    modemSimple: GdbusModemSimple;
    modem_time: GdbusModemTime;
    modemTime: GdbusModemTime;
    modem_voice: GdbusModemVoice;
    modemVoice: GdbusModemVoice;
    modem3gpp: GdbusModem3gpp;
    modem3gpp_ussd: GdbusModem3gppUssd;
    modem3gppUssd: GdbusModem3gppUssd;

    // Members

    dup_path(): string;
    get_modem(): Modem;
    get_modem(...args: never[]): never;
    get_modem_3gpp(): Modem3gpp;
    get_modem_3gpp_ussd(): Modem3gppUssd;
    get_modem_cdma(): ModemCdma;
    get_modem_cdma(...args: never[]): never;
    get_modem_firmware(): ModemFirmware;
    get_modem_firmware(...args: never[]): never;
    get_modem_location(): ModemLocation;
    get_modem_location(...args: never[]): never;
    get_modem_messaging(): ModemMessaging;
    get_modem_messaging(...args: never[]): never;
    get_modem_oma(): ModemOma;
    get_modem_oma(...args: never[]): never;
    get_modem_signal(): ModemSignal;
    get_modem_signal(...args: never[]): never;
    get_modem_simple(): ModemSimple;
    get_modem_simple(...args: never[]): never;
    get_modem_time(): ModemTime;
    get_modem_time(...args: never[]): never;
    get_modem_voice(): ModemVoice;
    get_modem_voice(...args: never[]): never;

    // Implemented Members

    get_interface(interface_name: string): Gio.DBusInterface;
    get_interfaces(): Gio.DBusInterface[];
    get_object_path(): string;
    vfunc_get_interface(interface_name: string): Gio.DBusInterface;
    vfunc_get_interfaces(): Gio.DBusInterface[];
    vfunc_get_object_path(): string;
    vfunc_interface_added(interface_: Gio.DBusInterface): void;
    vfunc_interface_removed(interface_: Gio.DBusInterface): void;
    get_modem3gpp(): GdbusModem3gpp | null;
    get_modem3gpp_ussd(): GdbusModem3gppUssd | null;
}
export module Pco {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Pco extends GObject.Object {
    static $gtype: GObject.GType<Pco>;

    constructor(properties?: Partial<Pco.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Pco.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_data(): [number, number];
    get_data(...args: never[]): never;
    get_session_id(): number;
    is_complete(): boolean;
    static list_free(pco_list: Pco[]): void;
}
export module Signal {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Signal extends GObject.Object {
    static $gtype: GObject.GType<Signal>;

    constructor(properties?: Partial<Signal.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Signal.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_ecio(): number;
    get_io(): number;
    get_rscp(): number;
    get_rsrp(): number;
    get_rsrq(): number;
    get_rssi(): number;
    get_sinr(): number;
    get_snr(): number;
}
export module Sim {
    export interface ConstructorProperties extends GdbusSimProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class Sim extends GdbusSimProxy implements Gio.AsyncInitable<Sim>, Gio.DBusInterface, Gio.Initable, GdbusSim {
    static $gtype: GObject.GType<Sim>;

    constructor(properties?: Partial<Sim.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Sim.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    emergency_numbers: string[];
    emergencyNumbers: string[];
    imsi: string;
    operator_identifier: string;
    operatorIdentifier: string;
    operator_name: string;
    operatorName: string;
    sim_identifier: string;
    simIdentifier: string;

    // Members

    change_pin(old_pin: string, new_pin: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    change_pin(
        old_pin: string,
        new_pin: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    change_pin(
        old_pin: string,
        new_pin: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    change_pin_finish(res: Gio.AsyncResult): boolean;
    change_pin_sync(old_pin: string, new_pin: string, cancellable?: Gio.Cancellable | null): boolean;
    disable_pin(pin: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    disable_pin(pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    disable_pin(
        pin: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    disable_pin_finish(res: Gio.AsyncResult): boolean;
    disable_pin_sync(pin: string, cancellable?: Gio.Cancellable | null): boolean;
    dup_emergency_numbers(): string[];
    dup_identifier(): string;
    dup_imsi(): string;
    dup_operator_identifier(): string;
    dup_operator_name(): string;
    dup_path(): string;
    enable_pin(pin: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    enable_pin(pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    enable_pin(
        pin: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    enable_pin_finish(res: Gio.AsyncResult): boolean;
    enable_pin_sync(pin: string, cancellable?: Gio.Cancellable | null): boolean;
    get_emergency_numbers(): string[];
    get_identifier(): string;
    get_imsi(): string;
    get_operator_identifier(): string;
    get_operator_name(): string;
    get_path(): string;
    send_pin(pin: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    send_pin(pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    send_pin(
        pin: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    send_pin_finish(res: Gio.AsyncResult): boolean;
    send_pin_sync(pin: string, cancellable?: Gio.Cancellable | null): boolean;
    send_puk(puk: string, pin: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    send_puk(
        puk: string,
        pin: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    send_puk(
        puk: string,
        pin: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    send_puk_finish(res: Gio.AsyncResult): boolean;
    send_puk_sync(puk: string, pin: string, cancellable?: Gio.Cancellable | null): boolean;

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
    new_finish(res: Gio.AsyncResult): Sim;
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
    call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_change_pin(
        arg_old_pin: string,
        arg_new_pin: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_change_pin(
        arg_old_pin: string,
        arg_new_pin: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_change_pin_finish(res: Gio.AsyncResult): boolean;
    call_change_pin_sync(arg_old_pin: string, arg_new_pin: string, cancellable?: Gio.Cancellable | null): boolean;
    call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_enable_pin(
        arg_pin: string,
        arg_enabled: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_enable_pin(
        arg_pin: string,
        arg_enabled: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_enable_pin_finish(res: Gio.AsyncResult): boolean;
    call_enable_pin_sync(arg_pin: string, arg_enabled: boolean, cancellable?: Gio.Cancellable | null): boolean;
    call_send_pin(arg_pin: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_send_pin(
        arg_pin: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_send_pin(
        arg_pin: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_send_pin_finish(res: Gio.AsyncResult): boolean;
    call_send_pin_sync(arg_pin: string, cancellable?: Gio.Cancellable | null): boolean;
    call_send_puk(arg_puk: string, arg_pin: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_send_puk(
        arg_puk: string,
        arg_pin: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_send_puk(
        arg_puk: string,
        arg_pin: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_send_puk_finish(res: Gio.AsyncResult): boolean;
    call_send_puk_sync(arg_puk: string, arg_pin: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_change_pin(invocation: Gio.DBusMethodInvocation): void;
    complete_enable_pin(invocation: Gio.DBusMethodInvocation): void;
    complete_send_pin(invocation: Gio.DBusMethodInvocation): void;
    complete_send_puk(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_change_pin(invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string): boolean;
    vfunc_handle_enable_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean): boolean;
    vfunc_handle_send_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string): boolean;
    vfunc_handle_send_puk(invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string): boolean;
}
export module SimpleConnectProperties {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class SimpleConnectProperties extends GObject.Object {
    static $gtype: GObject.GType<SimpleConnectProperties>;

    constructor(properties?: Partial<SimpleConnectProperties.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SimpleConnectProperties.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): SimpleConnectProperties;

    // Members

    get_allow_roaming(): boolean;
    get_allowed_auth(): BearerAllowedAuth;
    get_apn(): string;
    get_ip_type(): BearerIpFamily;
    get_number(): string;
    get_operator_id(): string;
    get_password(): string;
    get_pin(): string;
    get_user(): string;
    set_allow_roaming(allow_roaming: boolean): void;
    set_allowed_auth(allowed_auth: BearerAllowedAuth): void;
    set_apn(apn: string): void;
    set_ip_type(ip_type: BearerIpFamily): void;
    set_number(number: string): void;
    set_operator_id(operator_id: string): void;
    set_password(password: string): void;
    set_pin(pin: string): void;
    set_user(user: string): void;
}
export module SimpleStatus {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        access_technologies: ModemAccessTechnology;
        accessTechnologies: ModemAccessTechnology;
        cdma_cdma1x_registration_state: ModemCdmaRegistrationState;
        cdmaCdma1xRegistrationState: ModemCdmaRegistrationState;
        cdma_evdo_registration_state: ModemCdmaRegistrationState;
        cdmaEvdoRegistrationState: ModemCdmaRegistrationState;
        cdma_nid: number;
        cdmaNid: number;
        cdma_sid: number;
        cdmaSid: number;
        current_bands: GLib.Variant;
        currentBands: GLib.Variant;
        m3gpp_operator_code: string;
        m3gppOperatorCode: string;
        m3gpp_operator_name: string;
        m3gppOperatorName: string;
        m3gpp_registration_state: Modem3gppRegistrationState;
        m3gppRegistrationState: Modem3gppRegistrationState;
        m3gpp_subscription_state: Modem3gppSubscriptionState;
        m3gppSubscriptionState: Modem3gppSubscriptionState;
        signal_quality: GLib.Variant;
        signalQuality: GLib.Variant;
        state: ModemState;
    }
}
export class SimpleStatus extends GObject.Object {
    static $gtype: GObject.GType<SimpleStatus>;

    constructor(properties?: Partial<SimpleStatus.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SimpleStatus.ConstructorProperties>, ...args: any[]): void;

    // Properties
    access_technologies: ModemAccessTechnology;
    accessTechnologies: ModemAccessTechnology;
    cdma_cdma1x_registration_state: ModemCdmaRegistrationState;
    cdmaCdma1xRegistrationState: ModemCdmaRegistrationState;
    cdma_evdo_registration_state: ModemCdmaRegistrationState;
    cdmaEvdoRegistrationState: ModemCdmaRegistrationState;
    cdma_nid: number;
    cdmaNid: number;
    cdma_sid: number;
    cdmaSid: number;
    current_bands: GLib.Variant;
    currentBands: GLib.Variant;
    m3gpp_operator_code: string;
    m3gppOperatorCode: string;
    m3gpp_operator_name: string;
    m3gppOperatorName: string;
    m3gpp_registration_state: Modem3gppRegistrationState;
    m3gppRegistrationState: Modem3gppRegistrationState;
    m3gpp_subscription_state: Modem3gppSubscriptionState;
    m3gppSubscriptionState: Modem3gppSubscriptionState;
    signal_quality: GLib.Variant;
    signalQuality: GLib.Variant;
    state: ModemState;

    // Members

    get_3gpp_operator_code(): string;
    get_3gpp_operator_name(): string;
    get_3gpp_registration_state(): Modem3gppRegistrationState;
    get_3gpp_subscription_state(): Modem3gppSubscriptionState;
    get_access_technologies(): ModemAccessTechnology;
    get_cdma_cdma1x_registration_state(): ModemCdmaRegistrationState;
    get_cdma_evdo_registration_state(): ModemCdmaRegistrationState;
    get_cdma_nid(): number;
    get_cdma_sid(): number;
    get_current_bands(): [ModemBand, number];
    get_signal_quality(): [number, boolean | null];
    get_state(): ModemState;
}
export module Sms {
    export interface ConstructorProperties extends GdbusSmsProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class Sms extends GdbusSmsProxy implements Gio.AsyncInitable<Sms>, Gio.DBusInterface, Gio.Initable, GdbusSms {
    static $gtype: GObject.GType<Sms>;

    constructor(properties?: Partial<Sms.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Sms.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    "class": number;
    data: GLib.Variant;
    delivery_report_request: boolean;
    deliveryReportRequest: boolean;
    delivery_state: number;
    deliveryState: number;
    discharge_timestamp: string;
    dischargeTimestamp: string;
    message_reference: number;
    messageReference: number;
    number: string;
    pdu_type: number;
    pduType: number;
    service_category: number;
    serviceCategory: number;
    smsc: string;
    state: number;
    storage: number;
    teleservice_id: number;
    teleserviceId: number;
    text: string;
    timestamp: string;
    validity: GLib.Variant;

    // Members

    dup_data(): Uint8Array;
    dup_discharge_timestamp(): string;
    dup_number(): string;
    dup_path(): string;
    dup_smsc(): string;
    dup_text(): string;
    dup_timestamp(): string;
    get_class(): number;
    get_data(): Uint8Array;
    get_data(...args: never[]): never;
    get_delivery_report_request(): boolean;
    get_delivery_state(): number;
    get_discharge_timestamp(): string;
    get_message_reference(): number;
    get_number(): string;
    get_path(): string;
    get_pdu_type(): SmsPduType;
    get_service_category(): SmsCdmaServiceCategory;
    get_smsc(): string;
    get_state(): SmsState;
    get_storage(): SmsStorage;
    get_teleservice_id(): SmsCdmaTeleserviceId;
    get_text(): string;
    get_timestamp(): string;
    get_validity_relative(): number;
    get_validity_type(): SmsValidityType;
    send(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    send(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    send(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    send_finish(res: Gio.AsyncResult): boolean;
    send_sync(cancellable?: Gio.Cancellable | null): boolean;
    store(storage: SmsStorage, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    store(
        storage: SmsStorage,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    store(
        storage: SmsStorage,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    store_finish(res: Gio.AsyncResult): boolean;
    store_sync(storage: SmsStorage, cancellable?: Gio.Cancellable | null): boolean;

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
    new_finish(res: Gio.AsyncResult): Sms;
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
    call_send(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_send(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_send(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_send_finish(res: Gio.AsyncResult): boolean;
    call_send_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_store(arg_storage: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_store(
        arg_storage: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_store(
        arg_storage: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_store_finish(res: Gio.AsyncResult): boolean;
    call_store_sync(arg_storage: number, cancellable?: Gio.Cancellable | null): boolean;
    complete_send(invocation: Gio.DBusMethodInvocation): void;
    complete_store(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_send(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_store(invocation: Gio.DBusMethodInvocation, arg_storage: number): boolean;
}
export module SmsProperties {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class SmsProperties extends GObject.Object {
    static $gtype: GObject.GType<SmsProperties>;

    constructor(properties?: Partial<SmsProperties.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SmsProperties.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): SmsProperties;

    // Members

    get_class(): number;
    get_data(): [number, number];
    get_data(...args: never[]): never;
    get_data_bytearray(): Uint8Array;
    get_delivery_report_request(): boolean;
    get_number(): string;
    get_service_category(): SmsCdmaServiceCategory;
    get_smsc(): string;
    get_teleservice_id(): SmsCdmaTeleserviceId;
    get_text(): string;
    get_validity_relative(): number;
    get_validity_type(): SmsValidityType;
    peek_data_bytearray(): Uint8Array;
    set_class(message_class: number): void;
    set_data(data: number, data_length: number): void;
    set_data(...args: never[]): never;
    set_data_bytearray(data: Uint8Array | string): void;
    set_delivery_report_request(request: boolean): void;
    set_number(number: string): void;
    set_service_category(service_category: SmsCdmaServiceCategory): void;
    set_smsc(smsc: string): void;
    set_teleservice_id(teleservice_id: SmsCdmaTeleserviceId): void;
    set_text(text: string): void;
    set_validity_relative(validity: number): void;
}
export module UnlockRetries {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class UnlockRetries extends GObject.Object {
    static $gtype: GObject.GType<UnlockRetries>;

    constructor(properties?: Partial<UnlockRetries.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UnlockRetries.ConstructorProperties>, ...args: any[]): void;

    // Members

    foreach(callback: UnlockRetriesForeachCb): void;
    get(lock: ModemLock): number;
}

export class BearerIpConfigPrivate {
    static $gtype: GObject.GType<BearerIpConfigPrivate>;

    constructor(copy: BearerIpConfigPrivate);
}

export class BearerPrivate {
    static $gtype: GObject.GType<BearerPrivate>;

    constructor(copy: BearerPrivate);
}

export class BearerPropertiesPrivate {
    static $gtype: GObject.GType<BearerPropertiesPrivate>;

    constructor(copy: BearerPropertiesPrivate);
}

export class BearerStatsPrivate {
    static $gtype: GObject.GType<BearerStatsPrivate>;

    constructor(copy: BearerStatsPrivate);
}

export class CallAudioFormatPrivate {
    static $gtype: GObject.GType<CallAudioFormatPrivate>;

    constructor(copy: CallAudioFormatPrivate);
}

export class CallPrivate {
    static $gtype: GObject.GType<CallPrivate>;

    constructor(copy: CallPrivate);
}

export class CallPropertiesPrivate {
    static $gtype: GObject.GType<CallPropertiesPrivate>;

    constructor(copy: CallPropertiesPrivate);
}

export class CdmaManualActivationPropertiesPrivate {
    static $gtype: GObject.GType<CdmaManualActivationPropertiesPrivate>;

    constructor(copy: CdmaManualActivationPropertiesPrivate);
}

export class FirmwarePropertiesPrivate {
    static $gtype: GObject.GType<FirmwarePropertiesPrivate>;

    constructor(copy: FirmwarePropertiesPrivate);
}

export class FirmwareUpdateSettingsPrivate {
    static $gtype: GObject.GType<FirmwareUpdateSettingsPrivate>;

    constructor(copy: FirmwareUpdateSettingsPrivate);
}

export class GdbusBearerProxyPrivate {
    static $gtype: GObject.GType<GdbusBearerProxyPrivate>;

    constructor(copy: GdbusBearerProxyPrivate);
}

export class GdbusBearerSkeletonPrivate {
    static $gtype: GObject.GType<GdbusBearerSkeletonPrivate>;

    constructor(copy: GdbusBearerSkeletonPrivate);
}

export class GdbusModem3gppProxyPrivate {
    static $gtype: GObject.GType<GdbusModem3gppProxyPrivate>;

    constructor(copy: GdbusModem3gppProxyPrivate);
}

export class GdbusModem3gppSkeletonPrivate {
    static $gtype: GObject.GType<GdbusModem3gppSkeletonPrivate>;

    constructor(copy: GdbusModem3gppSkeletonPrivate);
}

export class GdbusModem3gppUssdProxyPrivate {
    static $gtype: GObject.GType<GdbusModem3gppUssdProxyPrivate>;

    constructor(copy: GdbusModem3gppUssdProxyPrivate);
}

export class GdbusModem3gppUssdSkeletonPrivate {
    static $gtype: GObject.GType<GdbusModem3gppUssdSkeletonPrivate>;

    constructor(copy: GdbusModem3gppUssdSkeletonPrivate);
}

export class GdbusModemCdmaProxyPrivate {
    static $gtype: GObject.GType<GdbusModemCdmaProxyPrivate>;

    constructor(copy: GdbusModemCdmaProxyPrivate);
}

export class GdbusModemCdmaSkeletonPrivate {
    static $gtype: GObject.GType<GdbusModemCdmaSkeletonPrivate>;

    constructor(copy: GdbusModemCdmaSkeletonPrivate);
}

export class GdbusModemFirmwareProxyPrivate {
    static $gtype: GObject.GType<GdbusModemFirmwareProxyPrivate>;

    constructor(copy: GdbusModemFirmwareProxyPrivate);
}

export class GdbusModemFirmwareSkeletonPrivate {
    static $gtype: GObject.GType<GdbusModemFirmwareSkeletonPrivate>;

    constructor(copy: GdbusModemFirmwareSkeletonPrivate);
}

export class GdbusModemLocationProxyPrivate {
    static $gtype: GObject.GType<GdbusModemLocationProxyPrivate>;

    constructor(copy: GdbusModemLocationProxyPrivate);
}

export class GdbusModemLocationSkeletonPrivate {
    static $gtype: GObject.GType<GdbusModemLocationSkeletonPrivate>;

    constructor(copy: GdbusModemLocationSkeletonPrivate);
}

export class GdbusModemMessagingProxyPrivate {
    static $gtype: GObject.GType<GdbusModemMessagingProxyPrivate>;

    constructor(copy: GdbusModemMessagingProxyPrivate);
}

export class GdbusModemMessagingSkeletonPrivate {
    static $gtype: GObject.GType<GdbusModemMessagingSkeletonPrivate>;

    constructor(copy: GdbusModemMessagingSkeletonPrivate);
}

export class GdbusModemOmaProxyPrivate {
    static $gtype: GObject.GType<GdbusModemOmaProxyPrivate>;

    constructor(copy: GdbusModemOmaProxyPrivate);
}

export class GdbusModemOmaSkeletonPrivate {
    static $gtype: GObject.GType<GdbusModemOmaSkeletonPrivate>;

    constructor(copy: GdbusModemOmaSkeletonPrivate);
}

export class GdbusModemProxyPrivate {
    static $gtype: GObject.GType<GdbusModemProxyPrivate>;

    constructor(copy: GdbusModemProxyPrivate);
}

export class GdbusModemSignalProxyPrivate {
    static $gtype: GObject.GType<GdbusModemSignalProxyPrivate>;

    constructor(copy: GdbusModemSignalProxyPrivate);
}

export class GdbusModemSignalSkeletonPrivate {
    static $gtype: GObject.GType<GdbusModemSignalSkeletonPrivate>;

    constructor(copy: GdbusModemSignalSkeletonPrivate);
}

export class GdbusModemSimpleProxyPrivate {
    static $gtype: GObject.GType<GdbusModemSimpleProxyPrivate>;

    constructor(copy: GdbusModemSimpleProxyPrivate);
}

export class GdbusModemSimpleSkeletonPrivate {
    static $gtype: GObject.GType<GdbusModemSimpleSkeletonPrivate>;

    constructor(copy: GdbusModemSimpleSkeletonPrivate);
}

export class GdbusModemSkeletonPrivate {
    static $gtype: GObject.GType<GdbusModemSkeletonPrivate>;

    constructor(copy: GdbusModemSkeletonPrivate);
}

export class GdbusModemTimeProxyPrivate {
    static $gtype: GObject.GType<GdbusModemTimeProxyPrivate>;

    constructor(copy: GdbusModemTimeProxyPrivate);
}

export class GdbusModemTimeSkeletonPrivate {
    static $gtype: GObject.GType<GdbusModemTimeSkeletonPrivate>;

    constructor(copy: GdbusModemTimeSkeletonPrivate);
}

export class GdbusModemVoiceProxyPrivate {
    static $gtype: GObject.GType<GdbusModemVoiceProxyPrivate>;

    constructor(copy: GdbusModemVoiceProxyPrivate);
}

export class GdbusModemVoiceSkeletonPrivate {
    static $gtype: GObject.GType<GdbusModemVoiceSkeletonPrivate>;

    constructor(copy: GdbusModemVoiceSkeletonPrivate);
}

export class GdbusObjectManagerClientPrivate {
    static $gtype: GObject.GType<GdbusObjectManagerClientPrivate>;

    constructor(copy: GdbusObjectManagerClientPrivate);
}

export class GdbusObjectProxyPrivate {
    static $gtype: GObject.GType<GdbusObjectProxyPrivate>;

    constructor(copy: GdbusObjectProxyPrivate);
}

export class GdbusObjectSkeletonPrivate {
    static $gtype: GObject.GType<GdbusObjectSkeletonPrivate>;

    constructor(copy: GdbusObjectSkeletonPrivate);
}

export class GdbusOrgFreedesktopModemManager1ProxyPrivate {
    static $gtype: GObject.GType<GdbusOrgFreedesktopModemManager1ProxyPrivate>;

    constructor(copy: GdbusOrgFreedesktopModemManager1ProxyPrivate);
}

export class GdbusOrgFreedesktopModemManager1SkeletonPrivate {
    static $gtype: GObject.GType<GdbusOrgFreedesktopModemManager1SkeletonPrivate>;

    constructor(copy: GdbusOrgFreedesktopModemManager1SkeletonPrivate);
}

export class GdbusSimProxyPrivate {
    static $gtype: GObject.GType<GdbusSimProxyPrivate>;

    constructor(copy: GdbusSimProxyPrivate);
}

export class GdbusSimSkeletonPrivate {
    static $gtype: GObject.GType<GdbusSimSkeletonPrivate>;

    constructor(copy: GdbusSimSkeletonPrivate);
}

export class GdbusSmsProxyPrivate {
    static $gtype: GObject.GType<GdbusSmsProxyPrivate>;

    constructor(copy: GdbusSmsProxyPrivate);
}

export class GdbusSmsSkeletonPrivate {
    static $gtype: GObject.GType<GdbusSmsSkeletonPrivate>;

    constructor(copy: GdbusSmsSkeletonPrivate);
}

export class KernelEventPropertiesPrivate {
    static $gtype: GObject.GType<KernelEventPropertiesPrivate>;

    constructor(copy: KernelEventPropertiesPrivate);
}

export class Location3gppPrivate {
    static $gtype: GObject.GType<Location3gppPrivate>;

    constructor(copy: Location3gppPrivate);
}

export class LocationCdmaBsPrivate {
    static $gtype: GObject.GType<LocationCdmaBsPrivate>;

    constructor(copy: LocationCdmaBsPrivate);
}

export class LocationGpsNmeaPrivate {
    static $gtype: GObject.GType<LocationGpsNmeaPrivate>;

    constructor(copy: LocationGpsNmeaPrivate);
}

export class LocationGpsRawPrivate {
    static $gtype: GObject.GType<LocationGpsRawPrivate>;

    constructor(copy: LocationGpsRawPrivate);
}

export class ManagerPrivate {
    static $gtype: GObject.GType<ManagerPrivate>;

    constructor(copy: ManagerPrivate);
}

export class Modem3gppNetwork {
    static $gtype: GObject.GType<Modem3gppNetwork>;

    constructor(copy: Modem3gppNetwork);

    // Members
    free(): void;
    get_access_technology(): ModemAccessTechnology;
    get_availability(): Modem3gppNetworkAvailability;
    get_operator_code(): string;
    get_operator_long(): string;
    get_operator_short(): string;
}

export class Modem3gppPrivate {
    static $gtype: GObject.GType<Modem3gppPrivate>;

    constructor(copy: Modem3gppPrivate);
}

export class ModemFirmwarePrivate {
    static $gtype: GObject.GType<ModemFirmwarePrivate>;

    constructor(copy: ModemFirmwarePrivate);
}

export class ModemMessagingPrivate {
    static $gtype: GObject.GType<ModemMessagingPrivate>;

    constructor(copy: ModemMessagingPrivate);
}

export class ModemModeCombination {
    static $gtype: GObject.GType<ModemModeCombination>;

    constructor(copy: ModemModeCombination);

    // Fields
    allowed: ModemMode;
    preferred: ModemMode;
}

export class ModemOmaPrivate {
    static $gtype: GObject.GType<ModemOmaPrivate>;

    constructor(copy: ModemOmaPrivate);
}

export class ModemPortInfo {
    static $gtype: GObject.GType<ModemPortInfo>;

    constructor(copy: ModemPortInfo);

    // Fields
    name: string;
    type: ModemPortType;

    // Members
    array_free(array_size: number): void;
}

export class ModemPrivate {
    static $gtype: GObject.GType<ModemPrivate>;

    constructor(copy: ModemPrivate);
}

export class ModemSignalPrivate {
    static $gtype: GObject.GType<ModemSignalPrivate>;

    constructor(copy: ModemSignalPrivate);
}

export class ModemTimePrivate {
    static $gtype: GObject.GType<ModemTimePrivate>;

    constructor(copy: ModemTimePrivate);
}

export class ModemVoicePrivate {
    static $gtype: GObject.GType<ModemVoicePrivate>;

    constructor(copy: ModemVoicePrivate);
}

export class NetworkTimezonePrivate {
    static $gtype: GObject.GType<NetworkTimezonePrivate>;

    constructor(copy: NetworkTimezonePrivate);
}

export class OmaPendingNetworkInitiatedSession {
    static $gtype: GObject.GType<OmaPendingNetworkInitiatedSession>;

    constructor(copy: OmaPendingNetworkInitiatedSession);

    // Fields
    session_type: OmaSessionType;
    session_id: number;
}

export class PcoPrivate {
    static $gtype: GObject.GType<PcoPrivate>;

    constructor(copy: PcoPrivate);
}

export class SignalPrivate {
    static $gtype: GObject.GType<SignalPrivate>;

    constructor(copy: SignalPrivate);
}

export class SimpleConnectPropertiesPrivate {
    static $gtype: GObject.GType<SimpleConnectPropertiesPrivate>;

    constructor(copy: SimpleConnectPropertiesPrivate);
}

export class SimpleStatusPrivate {
    static $gtype: GObject.GType<SimpleStatusPrivate>;

    constructor(copy: SimpleStatusPrivate);
}

export class SmsPropertiesPrivate {
    static $gtype: GObject.GType<SmsPropertiesPrivate>;

    constructor(copy: SmsPropertiesPrivate);
}

export class UnlockRetriesPrivate {
    static $gtype: GObject.GType<UnlockRetriesPrivate>;

    constructor(copy: UnlockRetriesPrivate);
}

export interface GdbusBearerNamespace {
    $gtype: GObject.GType<GdbusBearer>;
    prototype: GdbusBearerPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type GdbusBearer = GdbusBearerPrototype;
export interface GdbusBearerPrototype extends GObject.Object {
    // Properties
    bearer_type: number;
    bearerType: number;
    connected: boolean;
    interface: string;
    ip_timeout: number;
    ipTimeout: number;
    ip4_config: GLib.Variant;
    ip4Config: GLib.Variant;
    ip6_config: GLib.Variant;
    ip6Config: GLib.Variant;
    properties: GLib.Variant;
    stats: GLib.Variant;
    suspended: boolean;

    // Members

    call_connect(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_connect(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_connect_finish(res: Gio.AsyncResult): boolean;
    call_connect_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_disconnect(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_disconnect(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_disconnect_finish(res: Gio.AsyncResult): boolean;
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;
    complete_connect(invocation: Gio.DBusMethodInvocation): void;
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_connect(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;
}

export const GdbusBearer: GdbusBearerNamespace;

export interface GdbusModemNamespace {
    $gtype: GObject.GType<GdbusModem>;
    prototype: GdbusModemPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type GdbusModem = GdbusModemPrototype;
export interface GdbusModemPrototype extends GObject.Object {
    // Properties
    access_technologies: number;
    accessTechnologies: number;
    bearers: string[];
    carrier_configuration: string;
    carrierConfiguration: string;
    carrier_configuration_revision: string;
    carrierConfigurationRevision: string;
    current_bands: GLib.Variant;
    currentBands: GLib.Variant;
    current_capabilities: number;
    currentCapabilities: number;
    current_modes: GLib.Variant;
    currentModes: GLib.Variant;
    device: string;
    device_identifier: string;
    deviceIdentifier: string;
    drivers: string[];
    equipment_identifier: string;
    equipmentIdentifier: string;
    hardware_revision: string;
    hardwareRevision: string;
    manufacturer: string;
    max_active_bearers: number;
    maxActiveBearers: number;
    max_bearers: number;
    maxBearers: number;
    model: string;
    own_numbers: string[];
    ownNumbers: string[];
    plugin: string;
    ports: GLib.Variant;
    power_state: number;
    powerState: number;
    primary_port: string;
    primaryPort: string;
    revision: string;
    signal_quality: GLib.Variant;
    signalQuality: GLib.Variant;
    sim: string;
    state: number;
    state_failed_reason: number;
    stateFailedReason: number;
    supported_bands: GLib.Variant;
    supportedBands: GLib.Variant;
    supported_capabilities: GLib.Variant;
    supportedCapabilities: GLib.Variant;
    supported_ip_families: number;
    supportedIpFamilies: number;
    supported_modes: GLib.Variant;
    supportedModes: GLib.Variant;
    unlock_required: number;
    unlockRequired: number;
    unlock_retries: GLib.Variant;
    unlockRetries: GLib.Variant;

    // Members

    call_command(arg_cmd: string, arg_timeout: number, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_command(
        arg_cmd: string,
        arg_timeout: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_command(
        arg_cmd: string,
        arg_timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_command_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_command_sync(
        arg_cmd: string,
        arg_timeout: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];
    call_create_bearer(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_create_bearer(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_create_bearer(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_create_bearer_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_bearer_sync(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];
    call_delete_bearer(arg_bearer: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_delete_bearer(
        arg_bearer: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_delete_bearer(
        arg_bearer: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_delete_bearer_finish(res: Gio.AsyncResult): boolean;
    call_delete_bearer_sync(arg_bearer: string, cancellable?: Gio.Cancellable | null): boolean;
    call_enable(arg_enable: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_enable(
        arg_enable: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_enable(
        arg_enable: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_enable_finish(res: Gio.AsyncResult): boolean;
    call_enable_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean;
    call_factory_reset(arg_code: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_factory_reset(
        arg_code: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_factory_reset(
        arg_code: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_factory_reset_finish(res: Gio.AsyncResult): boolean;
    call_factory_reset_sync(arg_code: string, cancellable?: Gio.Cancellable | null): boolean;
    call_list_bearers(cancellable?: Gio.Cancellable | null): Promise<[string[] | null]>;
    call_list_bearers(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_list_bearers(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string[] | null]> | void;
    call_list_bearers_finish(res: Gio.AsyncResult): [boolean, string[] | null];
    call_list_bearers_sync(cancellable?: Gio.Cancellable | null): [boolean, string[] | null];
    call_reset(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_reset(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_reset(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_reset_finish(res: Gio.AsyncResult): boolean;
    call_reset_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_set_current_bands(arg_bands: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_current_bands(
        arg_bands: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_current_bands(
        arg_bands: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_current_bands_finish(res: Gio.AsyncResult): boolean;
    call_set_current_bands_sync(arg_bands: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_set_current_capabilities(arg_capabilities: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_current_capabilities(
        arg_capabilities: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_current_capabilities(
        arg_capabilities: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_current_capabilities_finish(res: Gio.AsyncResult): boolean;
    call_set_current_capabilities_sync(arg_capabilities: number, cancellable?: Gio.Cancellable | null): boolean;
    call_set_current_modes(arg_modes: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_current_modes(
        arg_modes: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_current_modes(
        arg_modes: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_current_modes_finish(res: Gio.AsyncResult): boolean;
    call_set_current_modes_sync(arg_modes: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_set_power_state(arg_state: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_power_state(
        arg_state: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_power_state(
        arg_state: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_power_state_finish(res: Gio.AsyncResult): boolean;
    call_set_power_state_sync(arg_state: number, cancellable?: Gio.Cancellable | null): boolean;
    complete_command(invocation: Gio.DBusMethodInvocation, response: string): void;
    complete_create_bearer(invocation: Gio.DBusMethodInvocation, path: string): void;
    complete_delete_bearer(invocation: Gio.DBusMethodInvocation): void;
    complete_enable(invocation: Gio.DBusMethodInvocation): void;
    complete_factory_reset(invocation: Gio.DBusMethodInvocation): void;
    complete_list_bearers(invocation: Gio.DBusMethodInvocation, bearers: string): void;
    complete_reset(invocation: Gio.DBusMethodInvocation): void;
    complete_set_current_bands(invocation: Gio.DBusMethodInvocation): void;
    complete_set_current_capabilities(invocation: Gio.DBusMethodInvocation): void;
    complete_set_current_modes(invocation: Gio.DBusMethodInvocation): void;
    complete_set_power_state(invocation: Gio.DBusMethodInvocation): void;
    emit_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
    vfunc_handle_command(invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number): boolean;
    vfunc_handle_create_bearer(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    vfunc_handle_delete_bearer(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean;
    vfunc_handle_enable(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
    vfunc_handle_factory_reset(invocation: Gio.DBusMethodInvocation, arg_code: string): boolean;
    vfunc_handle_list_bearers(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_reset(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_set_current_bands(invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant): boolean;
    vfunc_handle_set_current_capabilities(invocation: Gio.DBusMethodInvocation, arg_capabilities: number): boolean;
    vfunc_handle_set_current_modes(invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant): boolean;
    vfunc_handle_set_power_state(invocation: Gio.DBusMethodInvocation, arg_state: number): boolean;
    vfunc_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
}

export const GdbusModem: GdbusModemNamespace;

export interface GdbusModem3gppNamespace {
    $gtype: GObject.GType<GdbusModem3gpp>;
    prototype: GdbusModem3gppPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type GdbusModem3gpp = GdbusModem3gppPrototype;
export interface GdbusModem3gppPrototype extends GObject.Object {
    // Properties
    enabled_facility_locks: number;
    enabledFacilityLocks: number;
    eps_ue_mode_operation: number;
    epsUeModeOperation: number;
    imei: string;
    initial_eps_bearer: string;
    initialEpsBearer: string;
    initial_eps_bearer_settings: GLib.Variant;
    initialEpsBearerSettings: GLib.Variant;
    operator_code: string;
    operatorCode: string;
    operator_name: string;
    operatorName: string;
    pco: GLib.Variant;
    registration_state: number;
    registrationState: number;
    subscription_state: number;
    subscriptionState: number;

    // Members

    call_register(arg_operator_id: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_register(
        arg_operator_id: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_register(
        arg_operator_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_register_finish(res: Gio.AsyncResult): boolean;
    call_register_sync(arg_operator_id: string, cancellable?: Gio.Cancellable | null): boolean;
    call_scan(cancellable?: Gio.Cancellable | null): Promise<[GLib.Variant | null]>;
    call_scan(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_scan(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[GLib.Variant | null]> | void;
    call_scan_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_scan_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    call_set_eps_ue_mode_operation(arg_mode: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_eps_ue_mode_operation(
        arg_mode: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_eps_ue_mode_operation(
        arg_mode: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_eps_ue_mode_operation_finish(res: Gio.AsyncResult): boolean;
    call_set_eps_ue_mode_operation_sync(arg_mode: number, cancellable?: Gio.Cancellable | null): boolean;
    call_set_initial_eps_bearer_settings(
        arg_settings: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_set_initial_eps_bearer_settings(
        arg_settings: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_initial_eps_bearer_settings(
        arg_settings: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_initial_eps_bearer_settings_finish(res: Gio.AsyncResult): boolean;
    call_set_initial_eps_bearer_settings_sync(
        arg_settings: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    complete_register(invocation: Gio.DBusMethodInvocation): void;
    complete_scan(invocation: Gio.DBusMethodInvocation, results: GLib.Variant): void;
    complete_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation): void;
    complete_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_register(invocation: Gio.DBusMethodInvocation, arg_operator_id: string): boolean;
    vfunc_handle_scan(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation, arg_mode: number): boolean;
    vfunc_handle_set_initial_eps_bearer_settings(
        invocation: Gio.DBusMethodInvocation,
        arg_settings: GLib.Variant
    ): boolean;
}

export const GdbusModem3gpp: GdbusModem3gppNamespace;

export interface GdbusModem3gppUssdNamespace {
    $gtype: GObject.GType<GdbusModem3gppUssd>;
    prototype: GdbusModem3gppUssdPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type GdbusModem3gppUssd = GdbusModem3gppUssdPrototype;
export interface GdbusModem3gppUssdPrototype extends GObject.Object {
    // Properties
    network_notification: string;
    networkNotification: string;
    network_request: string;
    networkRequest: string;
    state: number;

    // Members

    call_cancel(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_cancel(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_cancel_finish(res: Gio.AsyncResult): boolean;
    call_cancel_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_initiate(arg_command: string, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_initiate(
        arg_command: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_initiate(
        arg_command: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_initiate_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_initiate_sync(arg_command: string, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    call_respond(arg_response: string, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_respond(
        arg_response: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_respond(
        arg_response: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_respond_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_respond_sync(arg_response: string, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    complete_cancel(invocation: Gio.DBusMethodInvocation): void;
    complete_initiate(invocation: Gio.DBusMethodInvocation, reply: string): void;
    complete_respond(invocation: Gio.DBusMethodInvocation, reply: string): void;
    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_initiate(invocation: Gio.DBusMethodInvocation, arg_command: string): boolean;
    vfunc_handle_respond(invocation: Gio.DBusMethodInvocation, arg_response: string): boolean;
}

export const GdbusModem3gppUssd: GdbusModem3gppUssdNamespace;

export interface GdbusModemCdmaNamespace {
    $gtype: GObject.GType<GdbusModemCdma>;
    prototype: GdbusModemCdmaPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type GdbusModemCdma = GdbusModemCdmaPrototype;
export interface GdbusModemCdmaPrototype extends GObject.Object {
    // Properties
    activation_state: number;
    activationState: number;
    cdma1x_registration_state: number;
    cdma1xRegistrationState: number;
    esn: string;
    evdo_registration_state: number;
    evdoRegistrationState: number;
    meid: string;
    nid: number;
    sid: number;

    // Members

    call_activate(arg_carrier_code: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_activate(
        arg_carrier_code: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_activate(
        arg_carrier_code: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_activate_finish(res: Gio.AsyncResult): boolean;
    call_activate_manual(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_activate_manual(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_activate_manual(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_activate_manual_finish(res: Gio.AsyncResult): boolean;
    call_activate_manual_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_activate_sync(arg_carrier_code: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_activate(invocation: Gio.DBusMethodInvocation): void;
    complete_activate_manual(invocation: Gio.DBusMethodInvocation): void;
    emit_activation_state_changed(
        arg_activation_state: number,
        arg_activation_error: number,
        arg_status_changes: GLib.Variant
    ): void;
    vfunc_activation_state_changed(
        arg_activation_state: number,
        arg_activation_error: number,
        arg_status_changes: GLib.Variant
    ): void;
    vfunc_handle_activate(invocation: Gio.DBusMethodInvocation, arg_carrier_code: string): boolean;
    vfunc_handle_activate_manual(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
}

export const GdbusModemCdma: GdbusModemCdmaNamespace;

export interface GdbusModemFirmwareNamespace {
    $gtype: GObject.GType<GdbusModemFirmware>;
    prototype: GdbusModemFirmwarePrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type GdbusModemFirmware = GdbusModemFirmwarePrototype;
export interface GdbusModemFirmwarePrototype extends GObject.Object {
    // Properties
    update_settings: GLib.Variant;
    updateSettings: GLib.Variant;

    // Members

    call_list(cancellable?: Gio.Cancellable | null): Promise<[string | null, GLib.Variant | null]>;
    call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_list(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null, GLib.Variant | null]> | void;
    call_list_finish(res: Gio.AsyncResult): [boolean, string | null, GLib.Variant | null];
    call_list_sync(cancellable?: Gio.Cancellable | null): [boolean, string | null, GLib.Variant | null];
    call_select(arg_uniqueid: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_select(
        arg_uniqueid: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_select(
        arg_uniqueid: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_select_finish(res: Gio.AsyncResult): boolean;
    call_select_sync(arg_uniqueid: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_list(invocation: Gio.DBusMethodInvocation, selected: string, installed: GLib.Variant): void;
    complete_select(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_select(invocation: Gio.DBusMethodInvocation, arg_uniqueid: string): boolean;
}

export const GdbusModemFirmware: GdbusModemFirmwareNamespace;

export interface GdbusModemLocationNamespace {
    $gtype: GObject.GType<GdbusModemLocation>;
    prototype: GdbusModemLocationPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type GdbusModemLocation = GdbusModemLocationPrototype;
export interface GdbusModemLocationPrototype extends GObject.Object {
    // Properties
    assistance_data_servers: string[];
    assistanceDataServers: string[];
    capabilities: number;
    enabled: number;
    gps_refresh_rate: number;
    gpsRefreshRate: number;
    location: GLib.Variant;
    signals_location: boolean;
    signalsLocation: boolean;
    supl_server: string;
    suplServer: string;
    supported_assistance_data: number;
    supportedAssistanceData: number;

    // Members

    call_get_location(cancellable?: Gio.Cancellable | null): Promise<[GLib.Variant | null]>;
    call_get_location(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_get_location(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[GLib.Variant | null]> | void;
    call_get_location_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_get_location_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    call_inject_assistance_data(arg_data: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_inject_assistance_data(
        arg_data: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_inject_assistance_data(
        arg_data: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_inject_assistance_data_finish(res: Gio.AsyncResult): boolean;
    call_inject_assistance_data_sync(arg_data: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_set_gps_refresh_rate(arg_rate: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_gps_refresh_rate(
        arg_rate: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_gps_refresh_rate(
        arg_rate: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_gps_refresh_rate_finish(res: Gio.AsyncResult): boolean;
    call_set_gps_refresh_rate_sync(arg_rate: number, cancellable?: Gio.Cancellable | null): boolean;
    call_set_supl_server(arg_supl: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_supl_server(
        arg_supl: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_supl_server(
        arg_supl: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_supl_server_finish(res: Gio.AsyncResult): boolean;
    call_set_supl_server_sync(arg_supl: string, cancellable?: Gio.Cancellable | null): boolean;
    call_setup(
        arg_sources: number,
        arg_signal_location: boolean,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_setup(
        arg_sources: number,
        arg_signal_location: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_setup(
        arg_sources: number,
        arg_signal_location: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_setup_finish(res: Gio.AsyncResult): boolean;
    call_setup_sync(arg_sources: number, arg_signal_location: boolean, cancellable?: Gio.Cancellable | null): boolean;
    complete_get_location(invocation: Gio.DBusMethodInvocation, Location: GLib.Variant): void;
    complete_inject_assistance_data(invocation: Gio.DBusMethodInvocation): void;
    complete_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation): void;
    complete_set_supl_server(invocation: Gio.DBusMethodInvocation): void;
    complete_setup(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_get_location(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_inject_assistance_data(invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): boolean;
    vfunc_handle_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean;
    vfunc_handle_set_supl_server(invocation: Gio.DBusMethodInvocation, arg_supl: string): boolean;
    vfunc_handle_setup(
        invocation: Gio.DBusMethodInvocation,
        arg_sources: number,
        arg_signal_location: boolean
    ): boolean;
}

export const GdbusModemLocation: GdbusModemLocationNamespace;

export interface GdbusModemMessagingNamespace {
    $gtype: GObject.GType<GdbusModemMessaging>;
    prototype: GdbusModemMessagingPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type GdbusModemMessaging = GdbusModemMessagingPrototype;
export interface GdbusModemMessagingPrototype extends GObject.Object {
    // Properties
    default_storage: number;
    defaultStorage: number;
    messages: string[];
    supported_storages: GLib.Variant;
    supportedStorages: GLib.Variant;

    // Members

    call_create(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_create(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_create(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_create_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    call_delete(arg_path: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_delete(
        arg_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_delete(
        arg_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_delete_finish(res: Gio.AsyncResult): boolean;
    call_delete_sync(arg_path: string, cancellable?: Gio.Cancellable | null): boolean;
    call_list(cancellable?: Gio.Cancellable | null): Promise<[string[] | null]>;
    call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_list(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string[] | null]> | void;
    call_list_finish(res: Gio.AsyncResult): [boolean, string[] | null];
    call_list_sync(cancellable?: Gio.Cancellable | null): [boolean, string[] | null];
    complete_create(invocation: Gio.DBusMethodInvocation, path: string): void;
    complete_delete(invocation: Gio.DBusMethodInvocation): void;
    complete_list(invocation: Gio.DBusMethodInvocation, result: string): void;
    emit_added(arg_path: string, arg_received: boolean): void;
    emit_deleted(arg_path: string): void;
    vfunc_added(arg_path: string, arg_received: boolean): void;
    vfunc_deleted(arg_path: string): void;
    vfunc_handle_create(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
    vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
}

export const GdbusModemMessaging: GdbusModemMessagingNamespace;

export interface GdbusModemOmaNamespace {
    $gtype: GObject.GType<GdbusModemOma>;
    prototype: GdbusModemOmaPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type GdbusModemOma = GdbusModemOmaPrototype;
export interface GdbusModemOmaPrototype extends GObject.Object {
    // Properties
    features: number;
    pending_network_initiated_sessions: GLib.Variant;
    pendingNetworkInitiatedSessions: GLib.Variant;
    session_state: number;
    sessionState: number;
    session_type: number;
    sessionType: number;

    // Members

    call_accept_network_initiated_session(
        arg_session_id: number,
        arg_accept: boolean,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_accept_network_initiated_session(
        arg_session_id: number,
        arg_accept: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_accept_network_initiated_session(
        arg_session_id: number,
        arg_accept: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_accept_network_initiated_session_finish(res: Gio.AsyncResult): boolean;
    call_accept_network_initiated_session_sync(
        arg_session_id: number,
        arg_accept: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_cancel_session(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_cancel_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_cancel_session(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_cancel_session_finish(res: Gio.AsyncResult): boolean;
    call_cancel_session_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_setup(arg_features: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_setup(
        arg_features: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_setup(
        arg_features: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_setup_finish(res: Gio.AsyncResult): boolean;
    call_setup_sync(arg_features: number, cancellable?: Gio.Cancellable | null): boolean;
    call_start_client_initiated_session(
        arg_session_type: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    call_start_client_initiated_session(
        arg_session_type: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_start_client_initiated_session(
        arg_session_type: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_start_client_initiated_session_finish(res: Gio.AsyncResult): boolean;
    call_start_client_initiated_session_sync(arg_session_type: number, cancellable?: Gio.Cancellable | null): boolean;
    complete_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation): void;
    complete_cancel_session(invocation: Gio.DBusMethodInvocation): void;
    complete_setup(invocation: Gio.DBusMethodInvocation): void;
    complete_start_client_initiated_session(invocation: Gio.DBusMethodInvocation): void;
    emit_session_state_changed(
        arg_old_session_state: number,
        arg_new_session_state: number,
        arg_session_state_failed_reason: number
    ): void;
    vfunc_handle_accept_network_initiated_session(
        invocation: Gio.DBusMethodInvocation,
        arg_session_id: number,
        arg_accept: boolean
    ): boolean;
    vfunc_handle_cancel_session(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_features: number): boolean;
    vfunc_handle_start_client_initiated_session(
        invocation: Gio.DBusMethodInvocation,
        arg_session_type: number
    ): boolean;
    vfunc_session_state_changed(
        arg_old_session_state: number,
        arg_new_session_state: number,
        arg_session_state_failed_reason: number
    ): void;
}

export const GdbusModemOma: GdbusModemOmaNamespace;

export interface GdbusModemSignalNamespace {
    $gtype: GObject.GType<GdbusModemSignal>;
    prototype: GdbusModemSignalPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type GdbusModemSignal = GdbusModemSignalPrototype;
export interface GdbusModemSignalPrototype extends GObject.Object {
    // Properties
    cdma: GLib.Variant;
    evdo: GLib.Variant;
    gsm: GLib.Variant;
    lte: GLib.Variant;
    rate: number;
    umts: GLib.Variant;

    // Members

    call_setup(arg_rate: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_setup(
        arg_rate: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_setup(
        arg_rate: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_setup_finish(res: Gio.AsyncResult): boolean;
    call_setup_sync(arg_rate: number, cancellable?: Gio.Cancellable | null): boolean;
    complete_setup(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean;
}

export const GdbusModemSignal: GdbusModemSignalNamespace;

export interface GdbusModemSimpleNamespace {
    $gtype: GObject.GType<GdbusModemSimple>;
    prototype: GdbusModemSimplePrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type GdbusModemSimple = GdbusModemSimplePrototype;
export interface GdbusModemSimplePrototype extends GObject.Object {
    // Members

    call_connect(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_connect(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_connect(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_connect_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_connect_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    call_disconnect(arg_bearer: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_disconnect(
        arg_bearer: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_disconnect(
        arg_bearer: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_disconnect_finish(res: Gio.AsyncResult): boolean;
    call_disconnect_sync(arg_bearer: string, cancellable?: Gio.Cancellable | null): boolean;
    call_get_status(cancellable?: Gio.Cancellable | null): Promise<[GLib.Variant | null]>;
    call_get_status(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_get_status(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[GLib.Variant | null]> | void;
    call_get_status_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_get_status_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    complete_connect(invocation: Gio.DBusMethodInvocation, bearer: string): void;
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
    complete_get_status(invocation: Gio.DBusMethodInvocation, properties: GLib.Variant): void;
    vfunc_handle_connect(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean;
    vfunc_handle_get_status(invocation: Gio.DBusMethodInvocation): boolean;
}

export const GdbusModemSimple: GdbusModemSimpleNamespace;

export interface GdbusModemTimeNamespace {
    $gtype: GObject.GType<GdbusModemTime>;
    prototype: GdbusModemTimePrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type GdbusModemTime = GdbusModemTimePrototype;
export interface GdbusModemTimePrototype extends GObject.Object {
    // Properties
    network_timezone: GLib.Variant;
    networkTimezone: GLib.Variant;

    // Members

    call_get_network_time(cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_get_network_time(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_get_network_time(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_get_network_time_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_get_network_time_sync(cancellable?: Gio.Cancellable | null): [boolean, string | null];
    complete_get_network_time(invocation: Gio.DBusMethodInvocation, time: string): void;
    emit_network_time_changed(arg_time: string): void;
    vfunc_handle_get_network_time(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_network_time_changed(arg_time: string): void;
}

export const GdbusModemTime: GdbusModemTimeNamespace;

export interface GdbusModemVoiceNamespace {
    $gtype: GObject.GType<GdbusModemVoice>;
    prototype: GdbusModemVoicePrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type GdbusModemVoice = GdbusModemVoicePrototype;
export interface GdbusModemVoicePrototype extends GObject.Object {
    // Properties
    calls: string[];
    emergency_only: boolean;
    emergencyOnly: boolean;

    // Members

    call_call_waiting_query(cancellable?: Gio.Cancellable | null): Promise<[boolean | null]>;
    call_call_waiting_query(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_call_waiting_query(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[boolean | null]> | void;
    call_call_waiting_query_finish(res: Gio.AsyncResult): [boolean, boolean | null];
    call_call_waiting_query_sync(cancellable?: Gio.Cancellable | null): [boolean, boolean | null];
    call_call_waiting_setup(arg_enable: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_call_waiting_setup(
        arg_enable: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_call_waiting_setup(
        arg_enable: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_call_waiting_setup_finish(res: Gio.AsyncResult): boolean;
    call_call_waiting_setup_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean;
    call_create_call(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<[string | null]>;
    call_create_call(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_create_call(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string | null]> | void;
    call_create_call_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_call_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [boolean, string | null];
    call_delete_call(arg_path: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_delete_call(
        arg_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_delete_call(
        arg_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_delete_call_finish(res: Gio.AsyncResult): boolean;
    call_delete_call_sync(arg_path: string, cancellable?: Gio.Cancellable | null): boolean;
    call_hangup_all(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_hangup_all(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_hangup_all(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_hangup_all_finish(res: Gio.AsyncResult): boolean;
    call_hangup_all_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_hangup_and_accept(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_hangup_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_hangup_and_accept(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_hangup_and_accept_finish(res: Gio.AsyncResult): boolean;
    call_hangup_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_hold_and_accept(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_hold_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_hold_and_accept(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_hold_and_accept_finish(res: Gio.AsyncResult): boolean;
    call_hold_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_list_calls(cancellable?: Gio.Cancellable | null): Promise<[string[] | null]>;
    call_list_calls(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_list_calls(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string[] | null]> | void;
    call_list_calls_finish(res: Gio.AsyncResult): [boolean, string[] | null];
    call_list_calls_sync(cancellable?: Gio.Cancellable | null): [boolean, string[] | null];
    call_transfer(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_transfer(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_transfer(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_transfer_finish(res: Gio.AsyncResult): boolean;
    call_transfer_sync(cancellable?: Gio.Cancellable | null): boolean;
    complete_call_waiting_query(invocation: Gio.DBusMethodInvocation, status: boolean): void;
    complete_call_waiting_setup(invocation: Gio.DBusMethodInvocation): void;
    complete_create_call(invocation: Gio.DBusMethodInvocation, path: string): void;
    complete_delete_call(invocation: Gio.DBusMethodInvocation): void;
    complete_hangup_all(invocation: Gio.DBusMethodInvocation): void;
    complete_hangup_and_accept(invocation: Gio.DBusMethodInvocation): void;
    complete_hold_and_accept(invocation: Gio.DBusMethodInvocation): void;
    complete_list_calls(invocation: Gio.DBusMethodInvocation, result: string): void;
    complete_transfer(invocation: Gio.DBusMethodInvocation): void;
    emit_call_added(arg_path: string): void;
    emit_call_deleted(arg_path: string): void;
    vfunc_call_added(arg_path: string): void;
    vfunc_call_deleted(arg_path: string): void;
    vfunc_handle_call_waiting_query(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_call_waiting_setup(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
    vfunc_handle_create_call(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    vfunc_handle_delete_call(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
    vfunc_handle_hangup_all(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_hangup_and_accept(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_hold_and_accept(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_list_calls(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_transfer(invocation: Gio.DBusMethodInvocation): boolean;
}

export const GdbusModemVoice: GdbusModemVoiceNamespace;

export interface GdbusObjectNamespace {
    $gtype: GObject.GType<GdbusObject>;
    prototype: GdbusObjectPrototype;
}
export type GdbusObject = GdbusObjectPrototype;
export interface GdbusObjectPrototype extends Gio.DBusObject {
    // Properties
    modem: GdbusModem;
    modem_cdma: GdbusModemCdma;
    modemCdma: GdbusModemCdma;
    modem_firmware: GdbusModemFirmware;
    modemFirmware: GdbusModemFirmware;
    modem_location: GdbusModemLocation;
    modemLocation: GdbusModemLocation;
    modem_messaging: GdbusModemMessaging;
    modemMessaging: GdbusModemMessaging;
    modem_oma: GdbusModemOma;
    modemOma: GdbusModemOma;
    modem_signal: GdbusModemSignal;
    modemSignal: GdbusModemSignal;
    modem_simple: GdbusModemSimple;
    modemSimple: GdbusModemSimple;
    modem_time: GdbusModemTime;
    modemTime: GdbusModemTime;
    modem_voice: GdbusModemVoice;
    modemVoice: GdbusModemVoice;
    modem3gpp: GdbusModem3gpp;
    modem3gpp_ussd: GdbusModem3gppUssd;
    modem3gppUssd: GdbusModem3gppUssd;

    // Members

    get_modem(): GdbusModem | null;
    get_modem3gpp(): GdbusModem3gpp | null;
    get_modem3gpp_ussd(): GdbusModem3gppUssd | null;
    get_modem_cdma(): GdbusModemCdma | null;
    get_modem_firmware(): GdbusModemFirmware | null;
    get_modem_location(): GdbusModemLocation | null;
    get_modem_messaging(): GdbusModemMessaging | null;
    get_modem_oma(): GdbusModemOma | null;
    get_modem_signal(): GdbusModemSignal | null;
    get_modem_simple(): GdbusModemSimple | null;
    get_modem_time(): GdbusModemTime | null;
    get_modem_voice(): GdbusModemVoice | null;
}

export const GdbusObject: GdbusObjectNamespace;

export interface GdbusOrgFreedesktopModemManager1Namespace {
    $gtype: GObject.GType<GdbusOrgFreedesktopModemManager1>;
    prototype: GdbusOrgFreedesktopModemManager1Prototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type GdbusOrgFreedesktopModemManager1 = GdbusOrgFreedesktopModemManager1Prototype;
export interface GdbusOrgFreedesktopModemManager1Prototype extends GObject.Object {
    // Properties
    version: string;

    // Members

    call_inhibit_device(arg_uid: string, arg_inhibit: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_inhibit_device(
        arg_uid: string,
        arg_inhibit: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_inhibit_device(
        arg_uid: string,
        arg_inhibit: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_inhibit_device_finish(res: Gio.AsyncResult): boolean;
    call_inhibit_device_sync(arg_uid: string, arg_inhibit: boolean, cancellable?: Gio.Cancellable | null): boolean;
    call_report_kernel_event(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_report_kernel_event(
        arg_properties: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_report_kernel_event(
        arg_properties: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_report_kernel_event_finish(res: Gio.AsyncResult): boolean;
    call_report_kernel_event_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    call_scan_devices(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_scan_devices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_scan_devices(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_scan_devices_finish(res: Gio.AsyncResult): boolean;
    call_scan_devices_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_set_logging(arg_level: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_set_logging(
        arg_level: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_logging(
        arg_level: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_set_logging_finish(res: Gio.AsyncResult): boolean;
    call_set_logging_sync(arg_level: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_inhibit_device(invocation: Gio.DBusMethodInvocation): void;
    complete_report_kernel_event(invocation: Gio.DBusMethodInvocation): void;
    complete_scan_devices(invocation: Gio.DBusMethodInvocation): void;
    complete_set_logging(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_inhibit_device(invocation: Gio.DBusMethodInvocation, arg_uid: string, arg_inhibit: boolean): boolean;
    vfunc_handle_report_kernel_event(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    vfunc_handle_scan_devices(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_set_logging(invocation: Gio.DBusMethodInvocation, arg_level: string): boolean;
}

export const GdbusOrgFreedesktopModemManager1: GdbusOrgFreedesktopModemManager1Namespace;

export interface GdbusSimNamespace {
    $gtype: GObject.GType<GdbusSim>;
    prototype: GdbusSimPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type GdbusSim = GdbusSimPrototype;
export interface GdbusSimPrototype extends GObject.Object {
    // Properties
    emergency_numbers: string[];
    emergencyNumbers: string[];
    imsi: string;
    operator_identifier: string;
    operatorIdentifier: string;
    operator_name: string;
    operatorName: string;
    sim_identifier: string;
    simIdentifier: string;

    // Members

    call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_change_pin(
        arg_old_pin: string,
        arg_new_pin: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_change_pin(
        arg_old_pin: string,
        arg_new_pin: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_change_pin_finish(res: Gio.AsyncResult): boolean;
    call_change_pin_sync(arg_old_pin: string, arg_new_pin: string, cancellable?: Gio.Cancellable | null): boolean;
    call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_enable_pin(
        arg_pin: string,
        arg_enabled: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_enable_pin(
        arg_pin: string,
        arg_enabled: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_enable_pin_finish(res: Gio.AsyncResult): boolean;
    call_enable_pin_sync(arg_pin: string, arg_enabled: boolean, cancellable?: Gio.Cancellable | null): boolean;
    call_send_pin(arg_pin: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_send_pin(
        arg_pin: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_send_pin(
        arg_pin: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_send_pin_finish(res: Gio.AsyncResult): boolean;
    call_send_pin_sync(arg_pin: string, cancellable?: Gio.Cancellable | null): boolean;
    call_send_puk(arg_puk: string, arg_pin: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_send_puk(
        arg_puk: string,
        arg_pin: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_send_puk(
        arg_puk: string,
        arg_pin: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_send_puk_finish(res: Gio.AsyncResult): boolean;
    call_send_puk_sync(arg_puk: string, arg_pin: string, cancellable?: Gio.Cancellable | null): boolean;
    complete_change_pin(invocation: Gio.DBusMethodInvocation): void;
    complete_enable_pin(invocation: Gio.DBusMethodInvocation): void;
    complete_send_pin(invocation: Gio.DBusMethodInvocation): void;
    complete_send_puk(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_change_pin(invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string): boolean;
    vfunc_handle_enable_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean): boolean;
    vfunc_handle_send_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string): boolean;
    vfunc_handle_send_puk(invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string): boolean;
}

export const GdbusSim: GdbusSimNamespace;

export interface GdbusSmsNamespace {
    $gtype: GObject.GType<GdbusSms>;
    prototype: GdbusSmsPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type GdbusSms = GdbusSmsPrototype;
export interface GdbusSmsPrototype extends GObject.Object {
    // Properties
    class: number;
    data: GLib.Variant;
    delivery_report_request: boolean;
    deliveryReportRequest: boolean;
    delivery_state: number;
    deliveryState: number;
    discharge_timestamp: string;
    dischargeTimestamp: string;
    message_reference: number;
    messageReference: number;
    number: string;
    pdu_type: number;
    pduType: number;
    service_category: number;
    serviceCategory: number;
    smsc: string;
    state: number;
    storage: number;
    teleservice_id: number;
    teleserviceId: number;
    text: string;
    timestamp: string;
    validity: GLib.Variant;

    // Members

    call_send(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_send(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_send(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_send_finish(res: Gio.AsyncResult): boolean;
    call_send_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_store(arg_storage: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_store(
        arg_storage: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_store(
        arg_storage: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_store_finish(res: Gio.AsyncResult): boolean;
    call_store_sync(arg_storage: number, cancellable?: Gio.Cancellable | null): boolean;
    complete_send(invocation: Gio.DBusMethodInvocation): void;
    complete_store(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_send(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_store(invocation: Gio.DBusMethodInvocation, arg_storage: number): boolean;
}

export const GdbusSms: GdbusSmsNamespace;
