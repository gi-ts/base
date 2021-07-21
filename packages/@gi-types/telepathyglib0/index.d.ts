/**
 * TelepathyGLib 0.12
 *
 * Generated from 0.12
 */

import * as GObject from "@gi-types/gobject2";
import * as GLib from "@gi-types/glib2";
import * as Gio from "@gi-types/gio2";

export const ACCOUNT_MANAGER_BUS_NAME: string;
export const ACCOUNT_MANAGER_OBJECT_PATH: string;
export const ACCOUNT_OBJECT_PATH_BASE: string;
export const CHANNEL_DISPATCHER_BUS_NAME: string;
export const CHANNEL_DISPATCHER_OBJECT_PATH: string;
export const CLIENT_BUS_NAME_BASE: string;
export const CLIENT_OBJECT_PATH_BASE: string;
export const CM_BUS_NAME_BASE: string;
export const CM_OBJECT_PATH_BASE: string;
export const CONN_BUS_NAME_BASE: string;
export const CONN_OBJECT_PATH_BASE: string;
export const DEBUG_OBJECT_PATH: string;
export const ERROR_PREFIX: string;
export const IFACE_ACCOUNT: string;
export const IFACE_ACCOUNT_INTERFACE_ADDRESSING: string;
export const IFACE_ACCOUNT_INTERFACE_AVATAR: string;
export const IFACE_ACCOUNT_INTERFACE_STORAGE: string;
export const IFACE_ACCOUNT_MANAGER: string;
export const IFACE_AUTHENTICATION_TLS_CERTIFICATE: string;
export const IFACE_CALL_CONTENT: string;
export const IFACE_CALL_CONTENT_INTERFACE_AUDIO_CONTROL: string;
export const IFACE_CALL_CONTENT_INTERFACE_DTMF: string;
export const IFACE_CALL_CONTENT_INTERFACE_MEDIA: string;
export const IFACE_CALL_CONTENT_INTERFACE_VIDEO_CONTROL: string;
export const IFACE_CALL_CONTENT_MEDIA_DESCRIPTION: string;
export const IFACE_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS: string;
export const IFACE_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_FEEDBACK: string;
export const IFACE_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTP_HEADER_EXTENSIONS: string;
export const IFACE_CALL_STREAM: string;
export const IFACE_CALL_STREAM_ENDPOINT: string;
export const IFACE_CALL_STREAM_INTERFACE_MEDIA: string;
export const IFACE_CHANNEL: string;
export const IFACE_CHANNEL_DISPATCHER: string;
export const IFACE_CHANNEL_DISPATCHER_INTERFACE_MESSAGES1: string;
export const IFACE_CHANNEL_DISPATCHER_INTERFACE_OPERATION_LIST: string;
export const IFACE_CHANNEL_DISPATCH_OPERATION: string;
export const IFACE_CHANNEL_INTERFACE_ANONYMITY: string;
export const IFACE_CHANNEL_INTERFACE_CALL_STATE: string;
export const IFACE_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION: string;
export const IFACE_CHANNEL_INTERFACE_CHAT_STATE: string;
export const IFACE_CHANNEL_INTERFACE_CONFERENCE: string;
export const IFACE_CHANNEL_INTERFACE_DESTROYABLE: string;
export const IFACE_CHANNEL_INTERFACE_DTMF: string;
export const IFACE_CHANNEL_INTERFACE_FILE_TRANSFER_METADATA: string;
export const IFACE_CHANNEL_INTERFACE_GROUP: string;
export const IFACE_CHANNEL_INTERFACE_HOLD: string;
export const IFACE_CHANNEL_INTERFACE_MEDIA_SIGNALLING: string;
export const IFACE_CHANNEL_INTERFACE_MESSAGES: string;
export const IFACE_CHANNEL_INTERFACE_PASSWORD: string;
export const IFACE_CHANNEL_INTERFACE_ROOM: string;
export const IFACE_CHANNEL_INTERFACE_ROOM_CONFIG: string;
export const IFACE_CHANNEL_INTERFACE_SASL_AUTHENTICATION: string;
export const IFACE_CHANNEL_INTERFACE_SECURABLE: string;
export const IFACE_CHANNEL_INTERFACE_SERVICE_POINT: string;
export const IFACE_CHANNEL_INTERFACE_SMS: string;
export const IFACE_CHANNEL_INTERFACE_SUBJECT: string;
export const IFACE_CHANNEL_INTERFACE_TUBE: string;
export const IFACE_CHANNEL_REQUEST: string;
export const IFACE_CHANNEL_TYPE_CALL: string;
export const IFACE_CHANNEL_TYPE_CONTACT_LIST: string;
export const IFACE_CHANNEL_TYPE_CONTACT_SEARCH: string;
export const IFACE_CHANNEL_TYPE_DBUS_TUBE: string;
export const IFACE_CHANNEL_TYPE_FILE_TRANSFER: string;
export const IFACE_CHANNEL_TYPE_ROOM_LIST: string;
export const IFACE_CHANNEL_TYPE_SERVER_AUTHENTICATION: string;
export const IFACE_CHANNEL_TYPE_SERVER_TLS_CONNECTION: string;
export const IFACE_CHANNEL_TYPE_STREAMED_MEDIA: string;
export const IFACE_CHANNEL_TYPE_STREAM_TUBE: string;
export const IFACE_CHANNEL_TYPE_TEXT: string;
export const IFACE_CHANNEL_TYPE_TUBES: string;
export const IFACE_CLIENT: string;
export const IFACE_CLIENT_APPROVER: string;
export const IFACE_CLIENT_HANDLER: string;
export const IFACE_CLIENT_INTERFACE_REQUESTS: string;
export const IFACE_CLIENT_OBSERVER: string;
export const IFACE_CONNECTION: string;
export const IFACE_CONNECTION_INTERFACE_ADDRESSING: string;
export const IFACE_CONNECTION_INTERFACE_ALIASING: string;
export const IFACE_CONNECTION_INTERFACE_ANONYMITY: string;
export const IFACE_CONNECTION_INTERFACE_AVATARS: string;
export const IFACE_CONNECTION_INTERFACE_BALANCE: string;
export const IFACE_CONNECTION_INTERFACE_CAPABILITIES: string;
export const IFACE_CONNECTION_INTERFACE_CELLULAR: string;
export const IFACE_CONNECTION_INTERFACE_CLIENT_TYPES: string;
export const IFACE_CONNECTION_INTERFACE_CONTACTS: string;
export const IFACE_CONNECTION_INTERFACE_CONTACT_BLOCKING: string;
export const IFACE_CONNECTION_INTERFACE_CONTACT_CAPABILITIES: string;
export const IFACE_CONNECTION_INTERFACE_CONTACT_GROUPS: string;
export const IFACE_CONNECTION_INTERFACE_CONTACT_INFO: string;
export const IFACE_CONNECTION_INTERFACE_CONTACT_LIST: string;
export const IFACE_CONNECTION_INTERFACE_LOCATION: string;
export const IFACE_CONNECTION_INTERFACE_MAIL_NOTIFICATION: string;
export const IFACE_CONNECTION_INTERFACE_POWER_SAVING: string;
export const IFACE_CONNECTION_INTERFACE_PRESENCE: string;
export const IFACE_CONNECTION_INTERFACE_RENAMING: string;
export const IFACE_CONNECTION_INTERFACE_REQUESTS: string;
export const IFACE_CONNECTION_INTERFACE_SERVICE_POINT: string;
export const IFACE_CONNECTION_INTERFACE_SIDECARS1: string;
export const IFACE_CONNECTION_INTERFACE_SIMPLE_PRESENCE: string;
export const IFACE_CONNECTION_MANAGER: string;
export const IFACE_DBUS_DAEMON: string;
export const IFACE_DBUS_INTROSPECTABLE: string;
export const IFACE_DBUS_PEER: string;
export const IFACE_DBUS_PROPERTIES: string;
export const IFACE_DEBUG: string;
export const IFACE_MEDIA_SESSION_HANDLER: string;
export const IFACE_MEDIA_STREAM_HANDLER: string;
export const IFACE_PROPERTIES_INTERFACE: string;
export const IFACE_PROTOCOL: string;
export const IFACE_PROTOCOL_INTERFACE_ADDRESSING: string;
export const IFACE_PROTOCOL_INTERFACE_AVATARS: string;
export const IFACE_PROTOCOL_INTERFACE_PRESENCE: string;
export const NUM_ACCESS_CONTROL_TYPES: number;
export const NUM_CALL_CONTENT_DISPOSITIONS: number;
export const NUM_CALL_CONTENT_PACKETIZATION_TYPES: number;
export const NUM_CALL_STATES: number;
export const NUM_CALL_STATE_CHANGE_REASONS: number;
export const NUM_CALL_STREAM_CANDIDATE_TYPES: number;
export const NUM_CAPTCHA_CANCEL_REASONS: number;
export const NUM_CAPTCHA_STATUSES: number;
export const NUM_CHANNEL_CHAT_STATES: number;
export const NUM_CHANNEL_CONTACT_SEARCH_STATES: number;
export const NUM_CHANNEL_GROUP_CHANGE_REASONS: number;
export const NUM_CHANNEL_TEXT_MESSAGE_TYPES: number;
export const NUM_CHANNEL_TEXT_SEND_ERRORS: number;
export const NUM_CONNECTION_PRESENCE_TYPES: number;
export const NUM_CONNECTION_STATUSES: number;
export const NUM_CONNECTION_STATUS_REASONS: number;
export const NUM_CONTACT_FEATURES: number;
export const NUM_CONTACT_LIST_STATES: number;
export const NUM_CONTACT_METADATA_STORAGE_TYPES: number;
export const NUM_DBUS_ERRORS: number;
export const NUM_DEBUG_LEVELS: number;
export const NUM_DELIVERY_STATUSES: number;
export const NUM_DTMF_EVENTS: number;
export const NUM_FILE_HASH_TYPES: number;
export const NUM_FILE_TRANSFER_STATES: number;
export const NUM_FILE_TRANSFER_STATE_CHANGE_REASONS: number;
export const NUM_HANDLE_TYPES: number;
export const NUM_HTTP_METHODS: number;
export const NUM_LOCAL_HOLD_STATES: number;
export const NUM_LOCAL_HOLD_STATE_REASONS: number;
export const NUM_MEDIA_STREAM_BASE_PROTOS: number;
export const NUM_MEDIA_STREAM_DIRECTIONS: number;
export const NUM_MEDIA_STREAM_ERRORS: number;
export const NUM_MEDIA_STREAM_STATES: number;
export const NUM_MEDIA_STREAM_TRANSPORT_TYPES: number;
export const NUM_MEDIA_STREAM_TYPES: number;
export const NUM_RCPT_XR_RTT_MODES: number;
export const NUM_RICH_PRESENCE_ACCESS_CONTROL_TYPES: number;
export const NUM_SASL_ABORT_REASONS: number;
export const NUM_SASL_STATUSES: number;
export const NUM_SENDING_STATES: number;
export const NUM_SERVICE_POINT_TYPES: number;
export const NUM_SOCKET_ACCESS_CONTROLS: number;
export const NUM_SOCKET_ADDRESS_TYPES: number;
export const NUM_STREAM_COMPONENTS: number;
export const NUM_STREAM_ENDPOINT_STATES: number;
export const NUM_STREAM_FLOW_STATES: number;
export const NUM_STREAM_TRANSPORT_TYPES: number;
export const NUM_SUBSCRIPTION_STATES: number;
export const NUM_TLS_CERTIFICATE_REJECT_REASONS: number;
export const NUM_TLS_CERTIFICATE_STATES: number;
export const NUM_TUBE_CHANNEL_STATES: number;
export const NUM_TUBE_STATES: number;
export const NUM_TUBE_TYPES: number;
export const PROP_ACCOUNT_AUTOMATIC_PRESENCE: string;
export const PROP_ACCOUNT_CHANGING_PRESENCE: string;
export const PROP_ACCOUNT_CONNECTION: string;
export const PROP_ACCOUNT_CONNECTION_ERROR: string;
export const PROP_ACCOUNT_CONNECTION_ERROR_DETAILS: string;
export const PROP_ACCOUNT_CONNECTION_STATUS: string;
export const PROP_ACCOUNT_CONNECTION_STATUS_REASON: string;
export const PROP_ACCOUNT_CONNECT_AUTOMATICALLY: string;
export const PROP_ACCOUNT_CURRENT_PRESENCE: string;
export const PROP_ACCOUNT_DISPLAY_NAME: string;
export const PROP_ACCOUNT_ENABLED: string;
export const PROP_ACCOUNT_HAS_BEEN_ONLINE: string;
export const PROP_ACCOUNT_ICON: string;
export const PROP_ACCOUNT_INTERFACES: string;
export const PROP_ACCOUNT_INTERFACE_ADDRESSING_URI_SCHEMES: string;
export const PROP_ACCOUNT_INTERFACE_AVATAR_AVATAR: string;
export const PROP_ACCOUNT_INTERFACE_STORAGE_STORAGE_IDENTIFIER: string;
export const PROP_ACCOUNT_INTERFACE_STORAGE_STORAGE_PROVIDER: string;
export const PROP_ACCOUNT_INTERFACE_STORAGE_STORAGE_RESTRICTIONS: string;
export const PROP_ACCOUNT_INTERFACE_STORAGE_STORAGE_SPECIFIC_INFORMATION: string;
export const PROP_ACCOUNT_MANAGER_INTERFACES: string;
export const PROP_ACCOUNT_MANAGER_INVALID_ACCOUNTS: string;
export const PROP_ACCOUNT_MANAGER_SUPPORTED_ACCOUNT_PROPERTIES: string;
export const PROP_ACCOUNT_MANAGER_VALID_ACCOUNTS: string;
export const PROP_ACCOUNT_NICKNAME: string;
export const PROP_ACCOUNT_NORMALIZED_NAME: string;
export const PROP_ACCOUNT_PARAMETERS: string;
export const PROP_ACCOUNT_REQUESTED_PRESENCE: string;
export const PROP_ACCOUNT_SERVICE: string;
export const PROP_ACCOUNT_SUPERSEDES: string;
export const PROP_ACCOUNT_VALID: string;
export const PROP_AUTHENTICATION_TLS_CERTIFICATE_CERTIFICATE_CHAIN_DATA: string;
export const PROP_AUTHENTICATION_TLS_CERTIFICATE_CERTIFICATE_TYPE: string;
export const PROP_AUTHENTICATION_TLS_CERTIFICATE_REJECTIONS: string;
export const PROP_AUTHENTICATION_TLS_CERTIFICATE_STATE: string;
export const PROP_CALL_CONTENT_DISPOSITION: string;
export const PROP_CALL_CONTENT_INTERFACES: string;
export const PROP_CALL_CONTENT_INTERFACE_AUDIO_CONTROL_REQUESTED_INPUT_VOLUME: string;
export const PROP_CALL_CONTENT_INTERFACE_AUDIO_CONTROL_REQUESTED_OUTPUT_VOLUME: string;
export const PROP_CALL_CONTENT_INTERFACE_DTMF_CURRENTLY_SENDING_TONES: string;
export const PROP_CALL_CONTENT_INTERFACE_DTMF_DEFERRED_TONES: string;
export const PROP_CALL_CONTENT_INTERFACE_MEDIA_CURRENT_DTMF_EVENT: string;
export const PROP_CALL_CONTENT_INTERFACE_MEDIA_CURRENT_DTMF_STATE: string;
export const PROP_CALL_CONTENT_INTERFACE_MEDIA_LOCAL_MEDIA_DESCRIPTIONS: string;
export const PROP_CALL_CONTENT_INTERFACE_MEDIA_MEDIA_DESCRIPTION_OFFER: string;
export const PROP_CALL_CONTENT_INTERFACE_MEDIA_PACKETIZATION: string;
export const PROP_CALL_CONTENT_INTERFACE_MEDIA_REMOTE_MEDIA_DESCRIPTIONS: string;
export const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_BITRATE: string;
export const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_FRAMERATE: string;
export const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_MANUAL_KEY_FRAMES: string;
export const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_MTU: string;
export const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_VIDEO_RESOLUTION: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_CODECS: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_FURTHER_NEGOTIATION_REQUIRED: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_HAS_REMOTE_INFORMATION: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACES: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_DLRR_MAX_SIZE: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_DUPLICATE_RLE_MAX_SIZE: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_ENABLE_METRICS: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_LOSS_RLE_MAX_SIZE: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_PACKET_RECEIPT_TIMES_MAX_SIZE: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_RTT_MODE: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_STATISTICS_FLAGS: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_FEEDBACK_DOES_AVPF: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_FEEDBACK_FEEDBACK_MESSAGES: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTP_HEADER_EXTENSIONS_HEADER_EXTENSIONS: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_REMOTE_CONTACT: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_SSRCS: string;
export const PROP_CALL_CONTENT_NAME: string;
export const PROP_CALL_CONTENT_STREAMS: string;
export const PROP_CALL_CONTENT_TYPE: string;
export const PROP_CALL_STREAM_CAN_REQUEST_RECEIVING: string;
export const PROP_CALL_STREAM_ENDPOINT_CONTROLLING: string;
export const PROP_CALL_STREAM_ENDPOINT_ENDPOINT_STATE: string;
export const PROP_CALL_STREAM_ENDPOINT_IS_ICE_LITE: string;
export const PROP_CALL_STREAM_ENDPOINT_REMOTE_CANDIDATES: string;
export const PROP_CALL_STREAM_ENDPOINT_REMOTE_CREDENTIALS: string;
export const PROP_CALL_STREAM_ENDPOINT_SELECTED_CANDIDATE_PAIRS: string;
export const PROP_CALL_STREAM_ENDPOINT_TRANSPORT: string;
export const PROP_CALL_STREAM_INTERFACES: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_ENDPOINTS: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_HAS_SERVER_INFO: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_ICE_RESTART_PENDING: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_LOCAL_CANDIDATES: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_LOCAL_CREDENTIALS: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_RECEIVING_STATE: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_RELAY_INFO: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_SENDING_STATE: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_STUN_SERVERS: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_TRANSPORT: string;
export const PROP_CALL_STREAM_LOCAL_SENDING_STATE: string;
export const PROP_CALL_STREAM_REMOTE_MEMBERS: string;
export const PROP_CALL_STREAM_REMOTE_MEMBER_IDENTIFIERS: string;
export const PROP_CHANNEL_CHANNEL_TYPE: string;
export const PROP_CHANNEL_DISPATCHER_INTERFACES: string;
export const PROP_CHANNEL_DISPATCHER_INTERFACE_OPERATION_LIST_DISPATCH_OPERATIONS: string;
export const PROP_CHANNEL_DISPATCHER_SUPPORTS_REQUEST_HINTS: string;
export const PROP_CHANNEL_DISPATCH_OPERATION_ACCOUNT: string;
export const PROP_CHANNEL_DISPATCH_OPERATION_CHANNELS: string;
export const PROP_CHANNEL_DISPATCH_OPERATION_CONNECTION: string;
export const PROP_CHANNEL_DISPATCH_OPERATION_INTERFACES: string;
export const PROP_CHANNEL_DISPATCH_OPERATION_POSSIBLE_HANDLERS: string;
export const PROP_CHANNEL_INITIATOR_HANDLE: string;
export const PROP_CHANNEL_INITIATOR_ID: string;
export const PROP_CHANNEL_INTERFACES: string;
export const PROP_CHANNEL_INTERFACE_ANONYMITY_ANONYMITY_MANDATORY: string;
export const PROP_CHANNEL_INTERFACE_ANONYMITY_ANONYMITY_MODES: string;
export const PROP_CHANNEL_INTERFACE_ANONYMITY_ANONYMOUS_ID: string;
export const PROP_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION_CAN_RETRY_CAPTCHA: string;
export const PROP_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION_CAPTCHA_ERROR: string;
export const PROP_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION_CAPTCHA_ERROR_DETAILS: string;
export const PROP_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION_CAPTCHA_STATUS: string;
export const PROP_CHANNEL_INTERFACE_CHAT_STATE_CHAT_STATES: string;
export const PROP_CHANNEL_INTERFACE_CONFERENCE_CHANNELS: string;
export const PROP_CHANNEL_INTERFACE_CONFERENCE_INITIAL_CHANNELS: string;
export const PROP_CHANNEL_INTERFACE_CONFERENCE_INITIAL_INVITEE_HANDLES: string;
export const PROP_CHANNEL_INTERFACE_CONFERENCE_INITIAL_INVITEE_IDS: string;
export const PROP_CHANNEL_INTERFACE_CONFERENCE_INVITATION_MESSAGE: string;
export const PROP_CHANNEL_INTERFACE_CONFERENCE_ORIGINAL_CHANNELS: string;
export const PROP_CHANNEL_INTERFACE_DTMF_CURRENTLY_SENDING_TONES: string;
export const PROP_CHANNEL_INTERFACE_DTMF_DEFERRED_TONES: string;
export const PROP_CHANNEL_INTERFACE_DTMF_INITIAL_TONES: string;
export const PROP_CHANNEL_INTERFACE_FILE_TRANSFER_METADATA_METADATA: string;
export const PROP_CHANNEL_INTERFACE_FILE_TRANSFER_METADATA_SERVICE_NAME: string;
export const PROP_CHANNEL_INTERFACE_GROUP_GROUP_FLAGS: string;
export const PROP_CHANNEL_INTERFACE_GROUP_HANDLE_OWNERS: string;
export const PROP_CHANNEL_INTERFACE_GROUP_LOCAL_PENDING_MEMBERS: string;
export const PROP_CHANNEL_INTERFACE_GROUP_MEMBERS: string;
export const PROP_CHANNEL_INTERFACE_GROUP_MEMBER_IDENTIFIERS: string;
export const PROP_CHANNEL_INTERFACE_GROUP_REMOTE_PENDING_MEMBERS: string;
export const PROP_CHANNEL_INTERFACE_GROUP_SELF_HANDLE: string;
export const PROP_CHANNEL_INTERFACE_MESSAGES_DELIVERY_REPORTING_SUPPORT: string;
export const PROP_CHANNEL_INTERFACE_MESSAGES_MESSAGE_PART_SUPPORT_FLAGS: string;
export const PROP_CHANNEL_INTERFACE_MESSAGES_MESSAGE_TYPES: string;
export const PROP_CHANNEL_INTERFACE_MESSAGES_PENDING_MESSAGES: string;
export const PROP_CHANNEL_INTERFACE_MESSAGES_SUPPORTED_CONTENT_TYPES: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_ANONYMOUS: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_CAN_UPDATE_CONFIGURATION: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_CONFIGURATION_RETRIEVED: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_DESCRIPTION: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_INVITEONLY: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_LIMIT: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_MODERATED: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_MUTABLE_PROPERTIES: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PASSWORD: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PASSWORD_HINT: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PASSWORD_PROTECTED: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PERSISTENT: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PRIVATE: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_TITLE: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CREATION_TIMESTAMP: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CREATOR: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CREATOR_HANDLE: string;
export const PROP_CHANNEL_INTERFACE_ROOM_ROOM_NAME: string;
export const PROP_CHANNEL_INTERFACE_ROOM_SERVER: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_AUTHORIZATION_IDENTITY: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_AVAILABLE_MECHANISMS: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_CAN_TRY_AGAIN: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_DEFAULT_REALM: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_DEFAULT_USERNAME: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_HAS_INITIAL_DATA: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_MAY_SAVE_RESPONSE: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_SASL_ERROR: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_SASL_ERROR_DETAILS: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_SASL_STATUS: string;
export const PROP_CHANNEL_INTERFACE_SECURABLE_ENCRYPTED: string;
export const PROP_CHANNEL_INTERFACE_SECURABLE_VERIFIED: string;
export const PROP_CHANNEL_INTERFACE_SERVICE_POINT_CURRENT_SERVICE_POINT: string;
export const PROP_CHANNEL_INTERFACE_SERVICE_POINT_INITIAL_SERVICE_POINT: string;
export const PROP_CHANNEL_INTERFACE_SMS_FLASH: string;
export const PROP_CHANNEL_INTERFACE_SMS_SMS_CHANNEL: string;
export const PROP_CHANNEL_INTERFACE_SUBJECT_ACTOR: string;
export const PROP_CHANNEL_INTERFACE_SUBJECT_ACTOR_HANDLE: string;
export const PROP_CHANNEL_INTERFACE_SUBJECT_CAN_SET: string;
export const PROP_CHANNEL_INTERFACE_SUBJECT_SUBJECT: string;
export const PROP_CHANNEL_INTERFACE_SUBJECT_TIMESTAMP: string;
export const PROP_CHANNEL_INTERFACE_TUBE_PARAMETERS: string;
export const PROP_CHANNEL_INTERFACE_TUBE_STATE: string;
export const PROP_CHANNEL_REQUESTED: string;
export const PROP_CHANNEL_REQUEST_ACCOUNT: string;
export const PROP_CHANNEL_REQUEST_HINTS: string;
export const PROP_CHANNEL_REQUEST_INTERFACES: string;
export const PROP_CHANNEL_REQUEST_PREFERRED_HANDLER: string;
export const PROP_CHANNEL_REQUEST_REQUESTS: string;
export const PROP_CHANNEL_REQUEST_USER_ACTION_TIME: string;
export const PROP_CHANNEL_TARGET_HANDLE: string;
export const PROP_CHANNEL_TARGET_HANDLE_TYPE: string;
export const PROP_CHANNEL_TARGET_ID: string;
export const PROP_CHANNEL_TYPE_CALL_CALL_FLAGS: string;
export const PROP_CHANNEL_TYPE_CALL_CALL_MEMBERS: string;
export const PROP_CHANNEL_TYPE_CALL_CALL_STATE: string;
export const PROP_CHANNEL_TYPE_CALL_CALL_STATE_DETAILS: string;
export const PROP_CHANNEL_TYPE_CALL_CALL_STATE_REASON: string;
export const PROP_CHANNEL_TYPE_CALL_CONTENTS: string;
export const PROP_CHANNEL_TYPE_CALL_HARDWARE_STREAMING: string;
export const PROP_CHANNEL_TYPE_CALL_INITIAL_AUDIO: string;
export const PROP_CHANNEL_TYPE_CALL_INITIAL_AUDIO_NAME: string;
export const PROP_CHANNEL_TYPE_CALL_INITIAL_TRANSPORT: string;
export const PROP_CHANNEL_TYPE_CALL_INITIAL_VIDEO: string;
export const PROP_CHANNEL_TYPE_CALL_INITIAL_VIDEO_NAME: string;
export const PROP_CHANNEL_TYPE_CALL_MEMBER_IDENTIFIERS: string;
export const PROP_CHANNEL_TYPE_CALL_MUTABLE_CONTENTS: string;
export const PROP_CHANNEL_TYPE_CONTACT_SEARCH_AVAILABLE_SEARCH_KEYS: string;
export const PROP_CHANNEL_TYPE_CONTACT_SEARCH_LIMIT: string;
export const PROP_CHANNEL_TYPE_CONTACT_SEARCH_SEARCH_STATE: string;
export const PROP_CHANNEL_TYPE_CONTACT_SEARCH_SERVER: string;
export const PROP_CHANNEL_TYPE_DBUS_TUBE_DBUS_NAMES: string;
export const PROP_CHANNEL_TYPE_DBUS_TUBE_SERVICE_NAME: string;
export const PROP_CHANNEL_TYPE_DBUS_TUBE_SUPPORTED_ACCESS_CONTROLS: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_AVAILABLE_SOCKET_TYPES: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_CONTENT_HASH: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_CONTENT_HASH_TYPE: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_CONTENT_TYPE: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_DATE: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_DESCRIPTION: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_FILENAME: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_FILE_COLLECTION: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_INITIAL_OFFSET: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_SIZE: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_STATE: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_TRANSFERRED_BYTES: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_URI: string;
export const PROP_CHANNEL_TYPE_ROOM_LIST_SERVER: string;
export const PROP_CHANNEL_TYPE_SERVER_AUTHENTICATION_AUTHENTICATION_METHOD: string;
export const PROP_CHANNEL_TYPE_SERVER_TLS_CONNECTION_HOSTNAME: string;
export const PROP_CHANNEL_TYPE_SERVER_TLS_CONNECTION_REFERENCE_IDENTITIES: string;
export const PROP_CHANNEL_TYPE_SERVER_TLS_CONNECTION_SERVER_CERTIFICATE: string;
export const PROP_CHANNEL_TYPE_STREAMED_MEDIA_IMMUTABLE_STREAMS: string;
export const PROP_CHANNEL_TYPE_STREAMED_MEDIA_INITIAL_AUDIO: string;
export const PROP_CHANNEL_TYPE_STREAMED_MEDIA_INITIAL_VIDEO: string;
export const PROP_CHANNEL_TYPE_STREAM_TUBE_SERVICE: string;
export const PROP_CHANNEL_TYPE_STREAM_TUBE_SUPPORTED_SOCKET_TYPES: string;
export const PROP_CLIENT_APPROVER_APPROVER_CHANNEL_FILTER: string;
export const PROP_CLIENT_HANDLER_BYPASS_APPROVAL: string;
export const PROP_CLIENT_HANDLER_CAPABILITIES: string;
export const PROP_CLIENT_HANDLER_HANDLED_CHANNELS: string;
export const PROP_CLIENT_HANDLER_HANDLER_CHANNEL_FILTER: string;
export const PROP_CLIENT_INTERFACES: string;
export const PROP_CLIENT_OBSERVER_DELAY_APPROVERS: string;
export const PROP_CLIENT_OBSERVER_OBSERVER_CHANNEL_FILTER: string;
export const PROP_CLIENT_OBSERVER_RECOVER: string;
export const PROP_CONNECTION_HAS_IMMORTAL_HANDLES: string;
export const PROP_CONNECTION_INTERFACES: string;
export const PROP_CONNECTION_INTERFACE_ANONYMITY_ANONYMITY_MANDATORY: string;
export const PROP_CONNECTION_INTERFACE_ANONYMITY_ANONYMITY_MODES: string;
export const PROP_CONNECTION_INTERFACE_ANONYMITY_SUPPORTED_ANONYMITY_MODES: string;
export const PROP_CONNECTION_INTERFACE_AVATARS_MAXIMUM_AVATAR_BYTES: string;
export const PROP_CONNECTION_INTERFACE_AVATARS_MAXIMUM_AVATAR_HEIGHT: string;
export const PROP_CONNECTION_INTERFACE_AVATARS_MAXIMUM_AVATAR_WIDTH: string;
export const PROP_CONNECTION_INTERFACE_AVATARS_MINIMUM_AVATAR_HEIGHT: string;
export const PROP_CONNECTION_INTERFACE_AVATARS_MINIMUM_AVATAR_WIDTH: string;
export const PROP_CONNECTION_INTERFACE_AVATARS_RECOMMENDED_AVATAR_HEIGHT: string;
export const PROP_CONNECTION_INTERFACE_AVATARS_RECOMMENDED_AVATAR_WIDTH: string;
export const PROP_CONNECTION_INTERFACE_AVATARS_SUPPORTED_AVATAR_MIME_TYPES: string;
export const PROP_CONNECTION_INTERFACE_BALANCE_ACCOUNT_BALANCE: string;
export const PROP_CONNECTION_INTERFACE_BALANCE_MANAGE_CREDIT_URI: string;
export const PROP_CONNECTION_INTERFACE_CELLULAR_IMSI: string;
export const PROP_CONNECTION_INTERFACE_CELLULAR_MESSAGE_NATIONAL_CHARACTER_SET: string;
export const PROP_CONNECTION_INTERFACE_CELLULAR_MESSAGE_REDUCED_CHARACTER_SET: string;
export const PROP_CONNECTION_INTERFACE_CELLULAR_MESSAGE_SERVICE_CENTRE: string;
export const PROP_CONNECTION_INTERFACE_CELLULAR_MESSAGE_VALIDITY_PERIOD: string;
export const PROP_CONNECTION_INTERFACE_CELLULAR_OVERRIDE_MESSAGE_SERVICE_CENTRE: string;
export const PROP_CONNECTION_INTERFACE_CONTACTS_CONTACT_ATTRIBUTE_INTERFACES: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_BLOCKING_CONTACT_BLOCKING_CAPABILITIES: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_GROUPS_DISJOINT_GROUPS: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_GROUPS_GROUPS: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_GROUPS_GROUP_STORAGE: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_INFO_CONTACT_INFO_FLAGS: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_INFO_SUPPORTED_FIELDS: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_LIST_CAN_CHANGE_CONTACT_LIST: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_LIST_CONTACT_LIST_PERSISTS: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_LIST_CONTACT_LIST_STATE: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_LIST_DOWNLOAD_AT_CONNECTION: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_LIST_REQUEST_USES_MESSAGE: string;
export const PROP_CONNECTION_INTERFACE_LOCATION_LOCATION_ACCESS_CONTROL: string;
export const PROP_CONNECTION_INTERFACE_LOCATION_LOCATION_ACCESS_CONTROL_TYPES: string;
export const PROP_CONNECTION_INTERFACE_LOCATION_SUPPORTED_LOCATION_FEATURES: string;
export const PROP_CONNECTION_INTERFACE_MAIL_NOTIFICATION_MAIL_ADDRESS: string;
export const PROP_CONNECTION_INTERFACE_MAIL_NOTIFICATION_MAIL_NOTIFICATION_FLAGS: string;
export const PROP_CONNECTION_INTERFACE_MAIL_NOTIFICATION_UNREAD_MAILS: string;
export const PROP_CONNECTION_INTERFACE_MAIL_NOTIFICATION_UNREAD_MAIL_COUNT: string;
export const PROP_CONNECTION_INTERFACE_POWER_SAVING_POWER_SAVING_ACTIVE: string;
export const PROP_CONNECTION_INTERFACE_REQUESTS_CHANNELS: string;
export const PROP_CONNECTION_INTERFACE_REQUESTS_REQUESTABLE_CHANNEL_CLASSES: string;
export const PROP_CONNECTION_INTERFACE_SERVICE_POINT_KNOWN_SERVICE_POINTS: string;
export const PROP_CONNECTION_INTERFACE_SIMPLE_PRESENCE_MAXIMUM_STATUS_MESSAGE_LENGTH: string;
export const PROP_CONNECTION_INTERFACE_SIMPLE_PRESENCE_STATUSES: string;
export const PROP_CONNECTION_MANAGER_INTERFACES: string;
export const PROP_CONNECTION_MANAGER_PROTOCOLS: string;
export const PROP_CONNECTION_SELF_HANDLE: string;
export const PROP_CONNECTION_SELF_ID: string;
export const PROP_CONNECTION_STATUS: string;
export const PROP_DEBUG_ENABLED: string;
export const PROP_MEDIA_STREAM_HANDLER_CREATED_LOCALLY: string;
export const PROP_MEDIA_STREAM_HANDLER_NAT_TRAVERSAL: string;
export const PROP_MEDIA_STREAM_HANDLER_RELAY_INFO: string;
export const PROP_MEDIA_STREAM_HANDLER_STUN_SERVERS: string;
export const PROP_PROTOCOL_AUTHENTICATION_TYPES: string;
export const PROP_PROTOCOL_CONNECTION_INTERFACES: string;
export const PROP_PROTOCOL_ENGLISH_NAME: string;
export const PROP_PROTOCOL_ICON: string;
export const PROP_PROTOCOL_INTERFACES: string;
export const PROP_PROTOCOL_INTERFACE_ADDRESSING_ADDRESSABLE_URI_SCHEMES: string;
export const PROP_PROTOCOL_INTERFACE_ADDRESSING_ADDRESSABLE_VCARD_FIELDS: string;
export const PROP_PROTOCOL_INTERFACE_AVATARS_MAXIMUM_AVATAR_BYTES: string;
export const PROP_PROTOCOL_INTERFACE_AVATARS_MAXIMUM_AVATAR_HEIGHT: string;
export const PROP_PROTOCOL_INTERFACE_AVATARS_MAXIMUM_AVATAR_WIDTH: string;
export const PROP_PROTOCOL_INTERFACE_AVATARS_MINIMUM_AVATAR_HEIGHT: string;
export const PROP_PROTOCOL_INTERFACE_AVATARS_MINIMUM_AVATAR_WIDTH: string;
export const PROP_PROTOCOL_INTERFACE_AVATARS_RECOMMENDED_AVATAR_HEIGHT: string;
export const PROP_PROTOCOL_INTERFACE_AVATARS_RECOMMENDED_AVATAR_WIDTH: string;
export const PROP_PROTOCOL_INTERFACE_AVATARS_SUPPORTED_AVATAR_MIME_TYPES: string;
export const PROP_PROTOCOL_INTERFACE_PRESENCE_STATUSES: string;
export const PROP_PROTOCOL_PARAMETERS: string;
export const PROP_PROTOCOL_REQUESTABLE_CHANNEL_CLASSES: string;
export const PROP_PROTOCOL_VCARD_FIELD: string;
export const TOKEN_CHANNEL_INTERFACE_MEDIA_SIGNALLING_GTALK_P2P: string;
export const TOKEN_CHANNEL_INTERFACE_MEDIA_SIGNALLING_ICE_UDP: string;
export const TOKEN_CHANNEL_INTERFACE_MEDIA_SIGNALLING_WLM_2009: string;
export const TOKEN_CHANNEL_INTERFACE_MEDIA_SIGNALLING_WLM_8_5: string;
export const TOKEN_CHANNEL_TYPE_CALL_AUDIO: string;
export const TOKEN_CHANNEL_TYPE_CALL_GTALK_P2P: string;
export const TOKEN_CHANNEL_TYPE_CALL_ICE: string;
export const TOKEN_CHANNEL_TYPE_CALL_SHM: string;
export const TOKEN_CHANNEL_TYPE_CALL_VIDEO: string;
export const TOKEN_CHANNEL_TYPE_CALL_WLM_2009: string;
export const TOKEN_CONNECTION_CONTACT_ID: string;
export const TOKEN_CONNECTION_INTERFACE_ADDRESSING_ADDRESSES: string;
export const TOKEN_CONNECTION_INTERFACE_ADDRESSING_URIS: string;
export const TOKEN_CONNECTION_INTERFACE_ALIASING_ALIAS: string;
export const TOKEN_CONNECTION_INTERFACE_AVATARS_TOKEN: string;
export const TOKEN_CONNECTION_INTERFACE_CAPABILITIES_CAPS: string;
export const TOKEN_CONNECTION_INTERFACE_CLIENT_TYPES_CLIENT_TYPES: string;
export const TOKEN_CONNECTION_INTERFACE_CONTACT_BLOCKING_BLOCKED: string;
export const TOKEN_CONNECTION_INTERFACE_CONTACT_CAPABILITIES_CAPABILITIES: string;
export const TOKEN_CONNECTION_INTERFACE_CONTACT_GROUPS_GROUPS: string;
export const TOKEN_CONNECTION_INTERFACE_CONTACT_INFO_INFO: string;
export const TOKEN_CONNECTION_INTERFACE_CONTACT_LIST_PUBLISH: string;
export const TOKEN_CONNECTION_INTERFACE_CONTACT_LIST_PUBLISH_REQUEST: string;
export const TOKEN_CONNECTION_INTERFACE_CONTACT_LIST_SUBSCRIBE: string;
export const TOKEN_CONNECTION_INTERFACE_LOCATION_LOCATION: string;
export const TOKEN_CONNECTION_INTERFACE_SIMPLE_PRESENCE_PRESENCE: string;
export const UNKNOWN_CONNECTION_STATUS: ConnectionStatus;
export const UNKNOWN_HANDLE_TYPE: HandleType;
export const USER_ACTION_TIME_NOT_USER_ACTION: number;
export function asv_get_boolean(asv: GLib.HashTable<string, GObject.Value>, key: string): [boolean, boolean];
export function asv_get_boxed(asv: GLib.HashTable<string, GObject.Value>, key: string, type: GObject.GType): any | null;
export function asv_get_bytes(asv: GLib.HashTable<string, GObject.Value>, key: string): Uint8Array | null;
export function asv_get_double(asv: GLib.HashTable<string, GObject.Value>, key: string): [number, boolean];
export function asv_get_int32(asv: GLib.HashTable<string, GObject.Value>, key: string): [number, boolean];
export function asv_get_int64(asv: GLib.HashTable<string, GObject.Value>, key: string): [number, boolean];
export function asv_get_object_path(asv: GLib.HashTable<string, GObject.Value>, key: string): string | null;
export function asv_get_string(asv: GLib.HashTable<string, GObject.Value>, key: string): string | null;
export function asv_get_strv(asv: GLib.HashTable<string, GObject.Value>, key: string): string[] | null;
export function asv_get_uint32(asv: GLib.HashTable<string, GObject.Value>, key: string): [number, boolean];
export function asv_get_uint64(asv: GLib.HashTable<string, GObject.Value>, key: string): [number, boolean];
export function dbus_check_valid_bus_name(name: string, allow_types: DBusNameType): boolean;
export function dbus_check_valid_interface_name(name: string): boolean;
export function dbus_check_valid_member_name(name: string): boolean;
export function dbus_check_valid_object_path(path: string): boolean;
export function dbus_errors_quark(): GLib.Quark;
export function dbus_properties_mixin_class_init(cls: GObject.Object, offset: number): void;
export function dbus_properties_mixin_dup_all(
    self: GObject.Object,
    interface_name: string
): GLib.HashTable<string, GObject.Value>;
export function dbus_properties_mixin_emit_properties_changed(
    object: GObject.Object,
    interface_name: string,
    properties?: string | null
): void;
export function dbus_properties_mixin_get(
    self: GObject.Object,
    interface_name: string,
    property_name: string,
    value: GObject.Value | any
): boolean;
export function dbus_properties_mixin_getter_gobject_properties(
    object: GObject.Object,
    iface: GLib.Quark,
    name: GLib.Quark,
    value: GObject.Value | any,
    getter_data?: any | null
): void;
export function dbus_properties_mixin_iface_init(g_iface?: any | null, iface_data?: any | null): void;
export function dbus_properties_mixin_set(
    self: GObject.Object,
    interface_name: string,
    property_name: string,
    value: GObject.Value | any
): boolean;
export function dbus_properties_mixin_setter_gobject_properties(
    object: GObject.Object,
    iface: GLib.Quark,
    name: GLib.Quark,
    value: GObject.Value | any,
    setter_data?: any | null
): boolean;
export function debug_divert_messages(filename: string): void;
export function debug_set_flags(flags_string: string): void;
export function debug_set_persistent(persistent: boolean): void;
export function debug_timestamped_log_handler(
    log_domain: string,
    log_level: GLib.LogLevelFlags,
    message: string,
    ignored?: any | null
): void;
export function error_get_dbus_name(error: Error): string;
export function error_quark(): GLib.Quark;
export function errors_disconnected_quark(): GLib.Quark;
export function errors_removed_from_group_quark(): GLib.Quark;
export function escape_as_identifier(name: string): string;
export function handle_ensure(self: HandleRepoIface, id: string, context?: any | null): Handle;
export function handle_type_is_valid(type: HandleType): boolean;
export function handle_type_to_string(type: HandleType): string;
export function iface_quark_account(): GLib.Quark;
export function iface_quark_account_interface_addressing(): GLib.Quark;
export function iface_quark_account_interface_avatar(): GLib.Quark;
export function iface_quark_account_interface_storage(): GLib.Quark;
export function iface_quark_account_manager(): GLib.Quark;
export function iface_quark_authentication_tls_certificate(): GLib.Quark;
export function iface_quark_call_content(): GLib.Quark;
export function iface_quark_call_content_interface_audio_control(): GLib.Quark;
export function iface_quark_call_content_interface_dtmf(): GLib.Quark;
export function iface_quark_call_content_interface_media(): GLib.Quark;
export function iface_quark_call_content_interface_video_control(): GLib.Quark;
export function iface_quark_call_content_media_description(): GLib.Quark;
export function iface_quark_call_content_media_description_interface_rtcp_extended_reports(): GLib.Quark;
export function iface_quark_call_content_media_description_interface_rtcp_feedback(): GLib.Quark;
export function iface_quark_call_content_media_description_interface_rtp_header_extensions(): GLib.Quark;
export function iface_quark_call_stream(): GLib.Quark;
export function iface_quark_call_stream_endpoint(): GLib.Quark;
export function iface_quark_call_stream_interface_media(): GLib.Quark;
export function iface_quark_channel(): GLib.Quark;
export function iface_quark_channel_dispatch_operation(): GLib.Quark;
export function iface_quark_channel_dispatcher(): GLib.Quark;
export function iface_quark_channel_dispatcher_interface_messages1(): GLib.Quark;
export function iface_quark_channel_dispatcher_interface_operation_list(): GLib.Quark;
export function iface_quark_channel_interface_anonymity(): GLib.Quark;
export function iface_quark_channel_interface_call_state(): GLib.Quark;
export function iface_quark_channel_interface_captcha_authentication(): GLib.Quark;
export function iface_quark_channel_interface_chat_state(): GLib.Quark;
export function iface_quark_channel_interface_conference(): GLib.Quark;
export function iface_quark_channel_interface_destroyable(): GLib.Quark;
export function iface_quark_channel_interface_dtmf(): GLib.Quark;
export function iface_quark_channel_interface_file_transfer_metadata(): GLib.Quark;
export function iface_quark_channel_interface_group(): GLib.Quark;
export function iface_quark_channel_interface_hold(): GLib.Quark;
export function iface_quark_channel_interface_media_signalling(): GLib.Quark;
export function iface_quark_channel_interface_messages(): GLib.Quark;
export function iface_quark_channel_interface_password(): GLib.Quark;
export function iface_quark_channel_interface_room(): GLib.Quark;
export function iface_quark_channel_interface_room_config(): GLib.Quark;
export function iface_quark_channel_interface_sasl_authentication(): GLib.Quark;
export function iface_quark_channel_interface_securable(): GLib.Quark;
export function iface_quark_channel_interface_service_point(): GLib.Quark;
export function iface_quark_channel_interface_sms(): GLib.Quark;
export function iface_quark_channel_interface_subject(): GLib.Quark;
export function iface_quark_channel_interface_tube(): GLib.Quark;
export function iface_quark_channel_request(): GLib.Quark;
export function iface_quark_channel_type_call(): GLib.Quark;
export function iface_quark_channel_type_contact_list(): GLib.Quark;
export function iface_quark_channel_type_contact_search(): GLib.Quark;
export function iface_quark_channel_type_dbus_tube(): GLib.Quark;
export function iface_quark_channel_type_file_transfer(): GLib.Quark;
export function iface_quark_channel_type_room_list(): GLib.Quark;
export function iface_quark_channel_type_server_authentication(): GLib.Quark;
export function iface_quark_channel_type_server_tls_connection(): GLib.Quark;
export function iface_quark_channel_type_stream_tube(): GLib.Quark;
export function iface_quark_channel_type_streamed_media(): GLib.Quark;
export function iface_quark_channel_type_text(): GLib.Quark;
export function iface_quark_channel_type_tubes(): GLib.Quark;
export function iface_quark_client(): GLib.Quark;
export function iface_quark_client_approver(): GLib.Quark;
export function iface_quark_client_handler(): GLib.Quark;
export function iface_quark_client_interface_requests(): GLib.Quark;
export function iface_quark_client_observer(): GLib.Quark;
export function iface_quark_connection(): GLib.Quark;
export function iface_quark_connection_interface_addressing(): GLib.Quark;
export function iface_quark_connection_interface_aliasing(): GLib.Quark;
export function iface_quark_connection_interface_anonymity(): GLib.Quark;
export function iface_quark_connection_interface_avatars(): GLib.Quark;
export function iface_quark_connection_interface_balance(): GLib.Quark;
export function iface_quark_connection_interface_capabilities(): GLib.Quark;
export function iface_quark_connection_interface_cellular(): GLib.Quark;
export function iface_quark_connection_interface_client_types(): GLib.Quark;
export function iface_quark_connection_interface_contact_blocking(): GLib.Quark;
export function iface_quark_connection_interface_contact_capabilities(): GLib.Quark;
export function iface_quark_connection_interface_contact_groups(): GLib.Quark;
export function iface_quark_connection_interface_contact_info(): GLib.Quark;
export function iface_quark_connection_interface_contact_list(): GLib.Quark;
export function iface_quark_connection_interface_contacts(): GLib.Quark;
export function iface_quark_connection_interface_location(): GLib.Quark;
export function iface_quark_connection_interface_mail_notification(): GLib.Quark;
export function iface_quark_connection_interface_power_saving(): GLib.Quark;
export function iface_quark_connection_interface_presence(): GLib.Quark;
export function iface_quark_connection_interface_renaming(): GLib.Quark;
export function iface_quark_connection_interface_requests(): GLib.Quark;
export function iface_quark_connection_interface_service_point(): GLib.Quark;
export function iface_quark_connection_interface_sidecars1(): GLib.Quark;
export function iface_quark_connection_interface_simple_presence(): GLib.Quark;
export function iface_quark_connection_manager(): GLib.Quark;
export function iface_quark_dbus_daemon(): GLib.Quark;
export function iface_quark_dbus_introspectable(): GLib.Quark;
export function iface_quark_dbus_peer(): GLib.Quark;
export function iface_quark_dbus_properties(): GLib.Quark;
export function iface_quark_debug(): GLib.Quark;
export function iface_quark_media_session_handler(): GLib.Quark;
export function iface_quark_media_stream_handler(): GLib.Quark;
export function iface_quark_properties_interface(): GLib.Quark;
export function iface_quark_protocol(): GLib.Quark;
export function iface_quark_protocol_interface_addressing(): GLib.Quark;
export function iface_quark_protocol_interface_avatars(): GLib.Quark;
export function iface_quark_protocol_interface_presence(): GLib.Quark;
export function intset_from_array(array: number[]): Intset;
export function list_connection_managers(
    bus_daemon: DBusDaemon,
    callback: ConnectionManagerListCb,
    weak_object?: GObject.Object | null
): void;
export function list_connection_managers_async(dbus_daemon?: DBusDaemon | null): Promise<ConnectionManager[]>;
export function list_connection_managers_async(
    dbus_daemon: DBusDaemon | null,
    callback: Gio.AsyncReadyCallback<DBusDaemon | null> | null
): void;
export function list_connection_managers_async(
    dbus_daemon?: DBusDaemon | null,
    callback?: Gio.AsyncReadyCallback<DBusDaemon | null> | null
): Promise<ConnectionManager[]> | void;
export function list_connection_managers_finish(result: Gio.AsyncResult): ConnectionManager[];
export function list_connection_names(
    bus_daemon: DBusDaemon,
    callback: ConnectionNameListCb,
    weak_object?: GObject.Object | null
): void;
export function simple_async_report_success_in_idle(
    source?: GObject.Object | null,
    callback?: Gio.AsyncReadyCallback<GObject.Object | null> | null,
    source_tag?: any | null
): void;
export function svc_interface_set_dbus_properties_info(
    g_interface: GObject.GType,
    info: DBusPropertiesMixinIfaceInfo
): void;
export function user_action_time_from_x11(x11_time: number): number;
export function user_action_time_should_present(user_action_time: number): [boolean, number | null];
export function utf8_make_valid(name: string): string;
export function value_array_free(va: GObject.ValueArray): void;
export type AccountChannelRequestDelegatedChannelCb = (request: AccountChannelRequest, channel: Channel) => void;
export type BaseClientClassAddDispatchOperationImpl = (
    client: BaseClient,
    account: Account,
    connection: Connection,
    channels: Channel[],
    dispatch_operation: ChannelDispatchOperation,
    context: AddDispatchOperationContext
) => void;
export type BaseClientClassHandleChannelsImpl = (
    client: BaseClient,
    account: Account,
    connection: Connection,
    channels: Channel[],
    requests_satisfied: ChannelRequest[],
    user_action_time: number,
    context: HandleChannelsContext
) => void;
export type BaseClientClassObserveChannelsImpl = (
    client: BaseClient,
    account: Account,
    connection: Connection,
    channels: Channel[],
    dispatch_operation: ChannelDispatchOperation | null,
    requests: ChannelRequest[],
    context: ObserveChannelsContext
) => void;
export type BaseClientDelegatedChannelsCb = (client: BaseClient, channels: Channel[]) => void;
export type BaseConnectionGetUniqueConnectionNameImpl = (self: BaseConnection) => string;
export type BaseConnectionProc = (self: BaseConnection) => void;
export type BaseConnectionStartConnectingImpl = (self: BaseConnection) => boolean;
export type ChannelWhenReadyCb = (channel: Channel, error: GLib.Error) => void;
export type ConnectionContactsByHandleCb<A = GObject.Object> = (
    connection: Connection,
    contacts: Contact[],
    failed: Handle[],
    error: GLib.Error,
    weak_object: A
) => void;
export type ConnectionContactsByIdCb<A = GObject.Object> = (
    connection: Connection,
    contacts: Contact[],
    requested_ids: string[],
    failed_id_errors: GLib.HashTable<string, GLib.Error>,
    error: GLib.Error,
    weak_object: A
) => void;
export type ConnectionHoldHandlesCb<A = GObject.Object> = (
    connection: Connection,
    handle_type: HandleType,
    n_handles: number,
    handles: Handle,
    error: GLib.Error,
    weak_object: A
) => void;
export type ConnectionManagerListCb<A = GObject.Object> = (
    cms: ConnectionManager[],
    n_cms: number,
    error: GLib.Error,
    weak_object: A
) => void;
export type ConnectionManagerWhenReadyCb<A = GObject.Object> = (
    cm: ConnectionManager,
    error: GLib.Error,
    weak_object: A
) => void;
export type ConnectionNameListCb<A = GObject.Object> = (
    names: string[],
    n: number,
    cms: string[],
    protocols: string[],
    error: GLib.Error,
    weak_object: A
) => void;
export type ConnectionRequestHandlesCb<A = GObject.Object> = (
    connection: Connection,
    handle_type: HandleType,
    handles: number[],
    ids: string[],
    error: GLib.Error,
    weak_object: A
) => void;
export type ConnectionUpgradeContactsCb<A = GObject.Object> = (
    connection: Connection,
    contacts: Contact[],
    error: GLib.Error,
    weak_object: A
) => void;
export type ConnectionWhenReadyCb = (connection: Connection, error: GLib.Error) => void;
export type DBusDaemonListNamesCb<A = GObject.Object> = (
    bus_daemon: DBusDaemon,
    names: string,
    error: GLib.Error,
    weak_object: A
) => void;
export type DBusDaemonNameOwnerChangedCb = (bus_daemon: DBusDaemon, name: string, new_owner: string) => void;
export type DBusPropertiesMixinGetter<A = GObject.Object> = (
    object: A,
    iface: GLib.Quark,
    name: GLib.Quark,
    value: GObject.Value | any,
    getter_data?: any | null
) => void;
export type DBusPropertiesMixinSetter<A = GObject.Object> = (
    object: A,
    iface: GLib.Quark,
    name: GLib.Quark,
    value: GObject.Value | any,
    setter_data?: any | null
) => boolean;
export type GroupMixinAddMemberFunc<A = GObject.Object> = (obj: A, handle: Handle, message: string) => boolean;
export type GroupMixinRemMemberFunc<A = GObject.Object> = (obj: A, handle: Handle, message: string) => boolean;
export type GroupMixinRemMemberWithReasonFunc<A = GObject.Object> = (
    obj: A,
    handle: Handle,
    message: string,
    reason: number
) => boolean;
export type IntFunc = (i: number, userdata?: any | null) => void;
export type PresenceMixinGetMaximumStatusMessageLengthFunc<A = GObject.Object> = (obj: A) => number;
export type PresenceMixinSetOwnStatusFunc<A = GObject.Object> = (obj: A, status: PresenceStatus) => boolean;
export type PresenceMixinStatusAvailableFunc<A = GObject.Object> = (obj: A, which: number) => boolean;
export type ProxyPrepareAsync = (
    proxy: Proxy,
    feature: ProxyFeature,
    callback?: Gio.AsyncReadyCallback<Proxy> | null
) => void;
export type SimpleApproverAddDispatchOperationImpl = (
    approver: SimpleApprover,
    account: Account,
    connection: Connection,
    channels: Channel[],
    dispatch_operation: ChannelDispatchOperation | null,
    context: AddDispatchOperationContext
) => void;
export type SimpleHandlerHandleChannelsImpl = (
    handler: SimpleHandler,
    account: Account,
    connection: Connection,
    channels: Channel[],
    requests_satisfied: ChannelRequest[],
    user_action_time: number,
    context: HandleChannelsContext
) => void;
export type SimpleObserverObserveChannelsImpl = (
    observer: SimpleObserver,
    account: Account,
    connection: Connection,
    channels: Channel[],
    dispatch_operation: ChannelDispatchOperation | null,
    requests: ChannelRequest[],
    context: ObserveChannelsContext
) => void;
export type ContactInfoList = object | null;
export type ContactInfoSpecList = object | null;

export namespace AccessControlType {
    export const $gtype: GObject.GType<AccessControlType>;
}

export enum AccessControlType {
    WHITELIST = 0,
    PUBLISH_LIST = 1,
    GROUP = 2,
    OPEN = 3,
    SUBSCRIBE_OR_PUBLISH_LIST = 4,
    CLOSED = 5,
    NOT_UNDERSTOOD = 6,
}

export namespace CMInfoSource {
    export const $gtype: GObject.GType<CMInfoSource>;
}

export enum CMInfoSource {
    NONE = 0,
    FILE = 1,
    LIVE = 2,
}

export namespace CallContentDisposition {
    export const $gtype: GObject.GType<CallContentDisposition>;
}

export enum CallContentDisposition {
    NONE = 0,
    INITIAL = 1,
}

export namespace CallContentPacketizationType {
    export const $gtype: GObject.GType<CallContentPacketizationType>;
}

export enum CallContentPacketizationType {
    RTP = 0,
    RAW = 1,
    MSN_WEBCAM = 2,
}

export namespace CallState {
    export const $gtype: GObject.GType<CallState>;
}

export enum CallState {
    UNKNOWN = 0,
    PENDING_INITIATOR = 1,
    INITIALISING = 2,
    INITIALISED = 3,
    ACCEPTED = 4,
    ACTIVE = 5,
    ENDED = 6,
}

export namespace CallStateChangeReason {
    export const $gtype: GObject.GType<CallStateChangeReason>;
}

export enum CallStateChangeReason {
    UNKNOWN = 0,
    PROGRESS_MADE = 1,
    USER_REQUESTED = 2,
    FORWARDED = 3,
    REJECTED = 4,
    NO_ANSWER = 5,
    INVALID_CONTACT = 6,
    PERMISSION_DENIED = 7,
    BUSY = 8,
    INTERNAL_ERROR = 9,
    SERVICE_ERROR = 10,
    NETWORK_ERROR = 11,
    MEDIA_ERROR = 12,
    CONNECTIVITY_ERROR = 13,
}

export namespace CallStreamCandidateType {
    export const $gtype: GObject.GType<CallStreamCandidateType>;
}

export enum CallStreamCandidateType {
    NONE = 0,
    HOST = 1,
    SERVER_REFLEXIVE = 2,
    PEER_REFLEXIVE = 3,
    RELAY = 4,
    MULTICAST = 5,
}

export namespace CaptchaCancelReason {
    export const $gtype: GObject.GType<CaptchaCancelReason>;
}

export enum CaptchaCancelReason {
    USER_CANCELLED = 0,
    NOT_SUPPORTED = 1,
    SERVICE_CONFUSED = 2,
}

export namespace CaptchaStatus {
    export const $gtype: GObject.GType<CaptchaStatus>;
}

export enum CaptchaStatus {
    LOCAL_PENDING = 0,
    REMOTE_PENDING = 1,
    SUCCEEDED = 2,
    TRY_AGAIN = 3,
    FAILED = 4,
}

export namespace ChannelChatState {
    export const $gtype: GObject.GType<ChannelChatState>;
}

export enum ChannelChatState {
    GONE = 0,
    INACTIVE = 1,
    ACTIVE = 2,
    PAUSED = 3,
    COMPOSING = 4,
}

export namespace ChannelContactSearchState {
    export const $gtype: GObject.GType<ChannelContactSearchState>;
}

export enum ChannelContactSearchState {
    NOT_STARTED = 0,
    IN_PROGRESS = 1,
    MORE_AVAILABLE = 2,
    COMPLETED = 3,
    FAILED = 4,
}

export namespace ChannelGroupChangeReason {
    export const $gtype: GObject.GType<ChannelGroupChangeReason>;
}

export enum ChannelGroupChangeReason {
    NONE = 0,
    OFFLINE = 1,
    KICKED = 2,
    BUSY = 3,
    INVITED = 4,
    BANNED = 5,
    ERROR = 6,
    INVALID_CONTACT = 7,
    NO_ANSWER = 8,
    RENAMED = 9,
    PERMISSION_DENIED = 10,
    SEPARATED = 11,
}

export namespace ChannelTextMessageType {
    export const $gtype: GObject.GType<ChannelTextMessageType>;
}

export enum ChannelTextMessageType {
    NORMAL = 0,
    ACTION = 1,
    NOTICE = 2,
    AUTO_REPLY = 3,
    DELIVERY_REPORT = 4,
}

export namespace ChannelTextSendError {
    export const $gtype: GObject.GType<ChannelTextSendError>;
}

export enum ChannelTextSendError {
    UNKNOWN = 0,
    OFFLINE = 1,
    INVALID_CONTACT = 2,
    PERMISSION_DENIED = 3,
    TOO_LONG = 4,
    NOT_IMPLEMENTED = 5,
}

export namespace ConnectionPresenceType {
    export const $gtype: GObject.GType<ConnectionPresenceType>;
}

export enum ConnectionPresenceType {
    UNSET = 0,
    OFFLINE = 1,
    AVAILABLE = 2,
    AWAY = 3,
    EXTENDED_AWAY = 4,
    HIDDEN = 5,
    BUSY = 6,
    UNKNOWN = 7,
    ERROR = 8,
}

export namespace ConnectionStatus {
    export const $gtype: GObject.GType<ConnectionStatus>;
}

export enum ConnectionStatus {
    CONNECTED = 0,
    CONNECTING = 1,
    DISCONNECTED = 2,
}

export namespace ConnectionStatusReason {
    export const $gtype: GObject.GType<ConnectionStatusReason>;
}

export enum ConnectionStatusReason {
    NONE_SPECIFIED = 0,
    REQUESTED = 1,
    NETWORK_ERROR = 2,
    AUTHENTICATION_FAILED = 3,
    ENCRYPTION_ERROR = 4,
    NAME_IN_USE = 5,
    CERT_NOT_PROVIDED = 6,
    CERT_UNTRUSTED = 7,
    CERT_EXPIRED = 8,
    CERT_NOT_ACTIVATED = 9,
    CERT_HOSTNAME_MISMATCH = 10,
    CERT_FINGERPRINT_MISMATCH = 11,
    CERT_SELF_SIGNED = 12,
    CERT_OTHER_ERROR = 13,
    CERT_REVOKED = 14,
    CERT_INSECURE = 15,
    CERT_LIMIT_EXCEEDED = 16,
}

export namespace ContactFeature {
    export const $gtype: GObject.GType<ContactFeature>;
}

export enum ContactFeature {
    ALIAS = 0,
    AVATAR_TOKEN = 1,
    PRESENCE = 2,
    LOCATION = 3,
    CAPABILITIES = 4,
    AVATAR_DATA = 5,
    CONTACT_INFO = 6,
    CLIENT_TYPES = 7,
    SUBSCRIPTION_STATES = 8,
    CONTACT_GROUPS = 9,
    CONTACT_BLOCKING = 10,
}

export namespace ContactListState {
    export const $gtype: GObject.GType<ContactListState>;
}

export enum ContactListState {
    NONE = 0,
    WAITING = 1,
    FAILURE = 2,
    SUCCESS = 3,
}

export namespace ContactMetadataStorageType {
    export const $gtype: GObject.GType<ContactMetadataStorageType>;
}

export enum ContactMetadataStorageType {
    NONE = 0,
    SUBSCRIBED_OR_PENDING = 1,
    SUBSCRIBED = 2,
    ANYONE = 3,
}

export namespace DBusError {
    export const $gtype: GObject.GType<DBusError>;
}

export enum DBusError {
    UNKNOWN_REMOTE_ERROR = 0,
    PROXY_UNREFERENCED = 1,
    NO_INTERFACE = 2,
    NAME_OWNER_LOST = 3,
    INVALID_BUS_NAME = 4,
    INVALID_INTERFACE_NAME = 5,
    INVALID_OBJECT_PATH = 6,
    INVALID_MEMBER_NAME = 7,
    OBJECT_REMOVED = 8,
    CANCELLED = 9,
    INCONSISTENT = 10,
}

export namespace DTMFEvent {
    export const $gtype: GObject.GType<DTMFEvent>;
}

export enum DTMFEvent {
    DIGIT_0 = 0,
    DIGIT_1 = 1,
    DIGIT_2 = 2,
    DIGIT_3 = 3,
    DIGIT_4 = 4,
    DIGIT_5 = 5,
    DIGIT_6 = 6,
    DIGIT_7 = 7,
    DIGIT_8 = 8,
    DIGIT_9 = 9,
    ASTERISK = 10,
    HASH = 11,
    LETTER_A = 12,
    LETTER_B = 13,
    LETTER_C = 14,
    LETTER_D = 15,
}

export namespace DebugLevel {
    export const $gtype: GObject.GType<DebugLevel>;
}

export enum DebugLevel {
    ERROR = 0,
    CRITICAL = 1,
    WARNING = 2,
    MESSAGE = 3,
    INFO = 4,
    DEBUG = 5,
}

export namespace DeliveryStatus {
    export const $gtype: GObject.GType<DeliveryStatus>;
}

export enum DeliveryStatus {
    UNKNOWN = 0,
    DELIVERED = 1,
    TEMPORARILY_FAILED = 2,
    PERMANENTLY_FAILED = 3,
    ACCEPTED = 4,
    READ = 5,
    DELETED = 6,
}

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Fields
    static NETWORK_ERROR: number;
    static NOT_IMPLEMENTED: number;
    static INVALID_ARGUMENT: number;
    static NOT_AVAILABLE: number;
    static PERMISSION_DENIED: number;
    static DISCONNECTED: number;
    static INVALID_HANDLE: number;
    static CHANNEL_BANNED: number;
    static CHANNEL_FULL: number;
    static CHANNEL_INVITE_ONLY: number;
    static NOT_YOURS: number;
    static CANCELLED: number;
    static AUTHENTICATION_FAILED: number;
    static ENCRYPTION_NOT_AVAILABLE: number;
    static ENCRYPTION_ERROR: number;
    static CERT_NOT_PROVIDED: number;
    static CERT_UNTRUSTED: number;
    static CERT_EXPIRED: number;
    static CERT_NOT_ACTIVATED: number;
    static CERT_FINGERPRINT_MISMATCH: number;
    static CERT_HOSTNAME_MISMATCH: number;
    static CERT_SELF_SIGNED: number;
    static CERT_INVALID: number;
    static NOT_CAPABLE: number;
    static OFFLINE: number;
    static CHANNEL_KICKED: number;
    static BUSY: number;
    static NO_ANSWER: number;
    static DOES_NOT_EXIST: number;
    static TERMINATED: number;
    static CONNECTION_REFUSED: number;
    static CONNECTION_FAILED: number;
    static CONNECTION_LOST: number;
    static ALREADY_CONNECTED: number;
    static CONNECTION_REPLACED: number;
    static REGISTRATION_EXISTS: number;
    static SERVICE_BUSY: number;
    static RESOURCE_UNAVAILABLE: number;
    static WOULD_BREAK_ANONYMITY: number;
    static CERT_REVOKED: number;
    static CERT_INSECURE: number;
    static CERT_LIMIT_EXCEEDED: number;
    static NOT_YET: number;
    static REJECTED: number;
    static PICKED_UP_ELSEWHERE: number;
    static CONFUSED: number;
    static SERVICE_CONFUSED: number;
    static EMERGENCY_CALLS_NOT_SUPPORTED: number;
    static SOFTWARE_UPGRADE_REQUIRED: number;
    static INSUFFICIENT_BALANCE: number;
    static MEDIA_CODECS_INCOMPATIBLE: number;
    static MEDIA_UNSUPPORTED_TYPE: number;
    static MEDIA_STREAMING_ERROR: number;
    static CAPTCHA_NOT_SUPPORTED: number;
}

export namespace FileHashType {
    export const $gtype: GObject.GType<FileHashType>;
}

export enum FileHashType {
    NONE = 0,
    MD5 = 1,
    SHA1 = 2,
    SHA256 = 3,
}

export namespace FileTransferState {
    export const $gtype: GObject.GType<FileTransferState>;
}

export enum FileTransferState {
    NONE = 0,
    PENDING = 1,
    ACCEPTED = 2,
    OPEN = 3,
    COMPLETED = 4,
    CANCELLED = 5,
}

export namespace FileTransferStateChangeReason {
    export const $gtype: GObject.GType<FileTransferStateChangeReason>;
}

export enum FileTransferStateChangeReason {
    NONE = 0,
    REQUESTED = 1,
    LOCAL_STOPPED = 2,
    REMOTE_STOPPED = 3,
    LOCAL_ERROR = 4,
    REMOTE_ERROR = 5,
}

export namespace HTTPMethod {
    export const $gtype: GObject.GType<HTTPMethod>;
}

export enum HTTPMethod {
    GET = 0,
    POST = 1,
}

export namespace HandleType {
    export const $gtype: GObject.GType<HandleType>;
}

export enum HandleType {
    NONE = 0,
    CONTACT = 1,
    ROOM = 2,
    LIST = 3,
    GROUP = 4,
}

export namespace LocalHoldState {
    export const $gtype: GObject.GType<LocalHoldState>;
}

export enum LocalHoldState {
    UNHELD = 0,
    HELD = 1,
    PENDING_HOLD = 2,
    PENDING_UNHOLD = 3,
}

export namespace LocalHoldStateReason {
    export const $gtype: GObject.GType<LocalHoldStateReason>;
}

export enum LocalHoldStateReason {
    NONE = 0,
    REQUESTED = 1,
    RESOURCE_NOT_AVAILABLE = 2,
}

export namespace MediaStreamBaseProto {
    export const $gtype: GObject.GType<MediaStreamBaseProto>;
}

export enum MediaStreamBaseProto {
    UDP = 0,
    TCP = 1,
}

export namespace MediaStreamDirection {
    export const $gtype: GObject.GType<MediaStreamDirection>;
}

export enum MediaStreamDirection {
    NONE = 0,
    SEND = 1,
    RECEIVE = 2,
    BIDIRECTIONAL = 3,
}

export namespace MediaStreamError {
    export const $gtype: GObject.GType<MediaStreamError>;
}

export enum MediaStreamError {
    UNKNOWN = 0,
    EOS = 1,
    CODEC_NEGOTIATION_FAILED = 2,
    CONNECTION_FAILED = 3,
    NETWORK_ERROR = 4,
    NO_CODECS = 5,
    INVALID_CM_BEHAVIOR = 6,
    MEDIA_ERROR = 7,
}

export namespace MediaStreamState {
    export const $gtype: GObject.GType<MediaStreamState>;
}

export enum MediaStreamState {
    DISCONNECTED = 0,
    CONNECTING = 1,
    CONNECTED = 2,
}

export namespace MediaStreamTransportType {
    export const $gtype: GObject.GType<MediaStreamTransportType>;
}

export enum MediaStreamTransportType {
    LOCAL = 0,
    DERIVED = 1,
    RELAY = 2,
}

export namespace MediaStreamType {
    export const $gtype: GObject.GType<MediaStreamType>;
}

export enum MediaStreamType {
    AUDIO = 0,
    VIDEO = 1,
}

export namespace RCPTXRRTTMode {
    export const $gtype: GObject.GType<RCPTXRRTTMode>;
}

export enum RCPTXRRTTMode {
    ALL = 0,
    SENDER = 1,
}

export namespace RichPresenceAccessControlType {
    export const $gtype: GObject.GType<RichPresenceAccessControlType>;
}

export enum RichPresenceAccessControlType {
    WHITELIST = 0,
    PUBLISH_LIST = 1,
    GROUP = 2,
    OPEN = 3,
}

export namespace SASLAbortReason {
    export const $gtype: GObject.GType<SASLAbortReason>;
}

export enum SASLAbortReason {
    INVALID_CHALLENGE = 0,
    USER_ABORT = 1,
}

export namespace SASLStatus {
    export const $gtype: GObject.GType<SASLStatus>;
}

export enum SASLStatus {
    NOT_STARTED = 0,
    IN_PROGRESS = 1,
    SERVER_SUCCEEDED = 2,
    CLIENT_ACCEPTED = 3,
    SUCCEEDED = 4,
    SERVER_FAILED = 5,
    CLIENT_FAILED = 6,
}

export namespace SendingState {
    export const $gtype: GObject.GType<SendingState>;
}

export enum SendingState {
    NONE = 0,
    PENDING_SEND = 1,
    SENDING = 2,
    PENDING_STOP_SENDING = 3,
}

export namespace ServicePointType {
    export const $gtype: GObject.GType<ServicePointType>;
}

export enum ServicePointType {
    NONE = 0,
    EMERGENCY = 1,
    COUNSELING = 2,
}

export namespace SocketAccessControl {
    export const $gtype: GObject.GType<SocketAccessControl>;
}

export enum SocketAccessControl {
    LOCALHOST = 0,
    PORT = 1,
    NETMASK = 2,
    CREDENTIALS = 3,
}

export namespace SocketAddressType {
    export const $gtype: GObject.GType<SocketAddressType>;
}

export enum SocketAddressType {
    UNIX = 0,
    ABSTRACT_UNIX = 1,
    IPV4 = 2,
    IPV6 = 3,
}

export namespace StreamComponent {
    export const $gtype: GObject.GType<StreamComponent>;
}

export enum StreamComponent {
    UNKNOWN = 0,
    DATA = 1,
    CONTROL = 2,
}

export namespace StreamEndpointState {
    export const $gtype: GObject.GType<StreamEndpointState>;
}

export enum StreamEndpointState {
    CONNECTING = 0,
    PROVISIONALLY_CONNECTED = 1,
    FULLY_CONNECTED = 2,
    EXHAUSTED_CANDIDATES = 3,
    FAILED = 4,
}

export namespace StreamFlowState {
    export const $gtype: GObject.GType<StreamFlowState>;
}

export enum StreamFlowState {
    STOPPED = 0,
    PENDING_START = 1,
    PENDING_STOP = 2,
    STARTED = 3,
}

export namespace StreamTransportType {
    export const $gtype: GObject.GType<StreamTransportType>;
}

export enum StreamTransportType {
    UNKNOWN = 0,
    RAW_UDP = 1,
    ICE = 2,
    GTALK_P2P = 3,
    WLM_2009 = 4,
    SHM = 5,
    MULTICAST = 6,
}

export namespace SubscriptionState {
    export const $gtype: GObject.GType<SubscriptionState>;
}

export enum SubscriptionState {
    UNKNOWN = 0,
    NO = 1,
    REMOVED_REMOTELY = 2,
    ASK = 3,
    YES = 4,
}

export namespace TLSCertificateRejectReason {
    export const $gtype: GObject.GType<TLSCertificateRejectReason>;
}

export enum TLSCertificateRejectReason {
    UNKNOWN = 0,
    UNTRUSTED = 1,
    EXPIRED = 2,
    NOT_ACTIVATED = 3,
    FINGERPRINT_MISMATCH = 4,
    HOSTNAME_MISMATCH = 5,
    SELF_SIGNED = 6,
    REVOKED = 7,
    INSECURE = 8,
    LIMIT_EXCEEDED = 9,
}

export namespace TLSCertificateState {
    export const $gtype: GObject.GType<TLSCertificateState>;
}

export enum TLSCertificateState {
    PENDING = 0,
    ACCEPTED = 1,
    REJECTED = 2,
}

export namespace TubeChannelState {
    export const $gtype: GObject.GType<TubeChannelState>;
}

export enum TubeChannelState {
    LOCAL_PENDING = 0,
    REMOTE_PENDING = 1,
    OPEN = 2,
    NOT_OFFERED = 3,
}

export namespace TubeState {
    export const $gtype: GObject.GType<TubeState>;
}

export enum TubeState {
    LOCAL_PENDING = 0,
    REMOTE_PENDING = 1,
    OPEN = 2,
}

export namespace TubeType {
    export const $gtype: GObject.GType<TubeType>;
}

export enum TubeType {
    DBUS = 0,
    STREAM = 1,
}

export namespace AnonymityModeFlags {
    export const $gtype: GObject.GType<AnonymityModeFlags>;
}

export enum AnonymityModeFlags {
    CLIENT_INFO = 1,
    SHOW_CLIENT_INFO = 2,
    NETWORK_INFO = 4,
}

export namespace CallFlags {
    export const $gtype: GObject.GType<CallFlags>;
}

export enum CallFlags {
    LOCALLY_HELD = 1,
    LOCALLY_RINGING = 2,
    LOCALLY_QUEUED = 4,
    FORWARDED = 8,
    CLEARING = 16,
}

export namespace CallMemberFlags {
    export const $gtype: GObject.GType<CallMemberFlags>;
}

export enum CallMemberFlags {
    RINGING = 1,
    HELD = 2,
    CONFERENCE_HOST = 4,
}

export namespace CaptchaFlags {
    export const $gtype: GObject.GType<CaptchaFlags>;
}

export enum CaptchaFlags {
    CAPTCHA_FLAGS_REQUIRED = 1,
}

export namespace ChannelCallStateFlags {
    export const $gtype: GObject.GType<ChannelCallStateFlags>;
}

export enum ChannelCallStateFlags {
    RINGING = 1,
    QUEUED = 2,
    HELD = 4,
    FORWARDED = 8,
    IN_PROGRESS = 16,
    CONFERENCE_HOST = 32,
}

export namespace ChannelGroupFlags {
    export const $gtype: GObject.GType<ChannelGroupFlags>;
}

export enum ChannelGroupFlags {
    CAN_ADD = 1,
    CAN_REMOVE = 2,
    CAN_RESCIND = 4,
    MESSAGE_ADD = 8,
    MESSAGE_REMOVE = 16,
    MESSAGE_ACCEPT = 32,
    MESSAGE_REJECT = 64,
    MESSAGE_RESCIND = 128,
    CHANNEL_SPECIFIC_HANDLES = 256,
    ONLY_ONE_GROUP = 512,
    HANDLE_OWNERS_NOT_AVAILABLE = 1024,
    PROPERTIES = 2048,
    MEMBERS_CHANGED_DETAILED = 4096,
    MESSAGE_DEPART = 8192,
}

export namespace ChannelMediaCapabilities {
    export const $gtype: GObject.GType<ChannelMediaCapabilities>;
}

export enum ChannelMediaCapabilities {
    AUDIO = 1,
    VIDEO = 2,
    NAT_TRAVERSAL_STUN = 4,
    NAT_TRAVERSAL_GTALK_P2P = 8,
    NAT_TRAVERSAL_ICE_UDP = 16,
    IMMUTABLE_STREAMS = 32,
}

export namespace ChannelPasswordFlags {
    export const $gtype: GObject.GType<ChannelPasswordFlags>;
}

export enum ChannelPasswordFlags {
    PROVIDE = 8,
    HINT = 4,
}

export namespace ChannelTextMessageFlags {
    export const $gtype: GObject.GType<ChannelTextMessageFlags>;
}

export enum ChannelTextMessageFlags {
    TRUNCATED = 1,
    NON_TEXT_CONTENT = 2,
    SCROLLBACK = 4,
    RESCUED = 8,
}

export namespace ConnMgrParamFlags {
    export const $gtype: GObject.GType<ConnMgrParamFlags>;
}

export enum ConnMgrParamFlags {
    REQUIRED = 1,
    REGISTER = 2,
    HAS_DEFAULT = 4,
    SECRET = 8,
    DBUS_PROPERTY = 16,
}

export namespace ConnectionAliasFlags {
    export const $gtype: GObject.GType<ConnectionAliasFlags>;
}

export enum ConnectionAliasFlags {
    CONNECTION_ALIAS_FLAG_USER_SET = 1,
}

export namespace ConnectionCapabilityFlags {
    export const $gtype: GObject.GType<ConnectionCapabilityFlags>;
}

export enum ConnectionCapabilityFlags {
    CREATE = 1,
    INVITE = 2,
}

export namespace ContactBlockingCapabilities {
    export const $gtype: GObject.GType<ContactBlockingCapabilities>;
}

export enum ContactBlockingCapabilities {
    CONTACT_BLOCKING_CAPABILITY_CAN_REPORT_ABUSIVE = 1,
}

export namespace ContactInfoFieldFlags {
    export const $gtype: GObject.GType<ContactInfoFieldFlags>;
}

export enum ContactInfoFieldFlags {
    PARAMETERS_EXACT = 1,
    OVERWRITTEN_BY_NICKNAME = 2,
}

export namespace ContactInfoFlags {
    export const $gtype: GObject.GType<ContactInfoFlags>;
}

export enum ContactInfoFlags {
    CAN_SET = 1,
    PUSH = 2,
}

export namespace DBusNameType {
    export const $gtype: GObject.GType<DBusNameType>;
}

export enum DBusNameType {
    UNIQUE = 1,
    WELL_KNOWN = 2,
    BUS_DAEMON = 4,
    NOT_BUS_DAEMON = 3,
    ANY = 7,
}

export namespace DBusPropertiesMixinFlags {
    export const $gtype: GObject.GType<DBusPropertiesMixinFlags>;
}

export enum DBusPropertiesMixinFlags {
    READ = 1,
    WRITE = 2,
    EMITS_CHANGED = 4,
    EMITS_INVALIDATED = 8,
}

export namespace DeliveryReportingSupportFlags {
    export const $gtype: GObject.GType<DeliveryReportingSupportFlags>;
}

export enum DeliveryReportingSupportFlags {
    FAILURES = 1,
    SUCCESSES = 2,
    READ = 4,
    DELETED = 8,
}

export namespace LocationFeatures {
    export const $gtype: GObject.GType<LocationFeatures>;
}

export enum LocationFeatures {
    LOCATION_FEATURE_CAN_SET = 1,
}

export namespace MailNotificationFlags {
    export const $gtype: GObject.GType<MailNotificationFlags>;
}

export enum MailNotificationFlags {
    SUPPORTS_UNREAD_MAIL_COUNT = 1,
    SUPPORTS_UNREAD_MAILS = 2,
    EMITS_MAILS_RECEIVED = 4,
    SUPPORTS_REQUEST_INBOX_URL = 8,
    SUPPORTS_REQUEST_MAIL_URL = 16,
    THREAD_BASED = 32,
}

export namespace MediaStreamPendingSend {
    export const $gtype: GObject.GType<MediaStreamPendingSend>;
}

export enum MediaStreamPendingSend {
    LOCAL_SEND = 1,
    REMOTE_SEND = 2,
}

export namespace MessagePartSupportFlags {
    export const $gtype: GObject.GType<MessagePartSupportFlags>;
}

export enum MessagePartSupportFlags {
    ONE_ATTACHMENT = 1,
    MULTIPLE_ATTACHMENTS = 2,
}

export namespace MessageSendingFlags {
    export const $gtype: GObject.GType<MessageSendingFlags>;
}

export enum MessageSendingFlags {
    DELIVERY = 1,
    READ = 2,
    DELETED = 4,
}

export namespace PropertyFlags {
    export const $gtype: GObject.GType<PropertyFlags>;
}

export enum PropertyFlags {
    READ = 1,
    WRITE = 2,
}

export namespace RTCPXRStatisticsFlags {
    export const $gtype: GObject.GType<RTCPXRStatisticsFlags>;
}

export enum RTCPXRStatisticsFlags {
    LOSS = 1,
    DUPLICATE = 2,
    JITTER = 4,
    TTL = 8,
    HL = 16,
}

export namespace StorageRestrictionFlags {
    export const $gtype: GObject.GType<StorageRestrictionFlags>;
}

export enum StorageRestrictionFlags {
    PARAMETERS = 1,
    ENABLED = 2,
    PRESENCE = 4,
    SERVICE = 8,
}
export module Account {
    export interface ConstructorProperties extends Proxy.ConstructorProperties {
        [key: string]: any;
        automatic_presence_type: number;
        automaticPresenceType: number;
        automatic_status: string;
        automaticStatus: string;
        automatic_status_message: string;
        automaticStatusMessage: string;
        changing_presence: boolean;
        changingPresence: boolean;
        cm_name: string;
        cmName: string;
        connect_automatically: boolean;
        connectAutomatically: boolean;
        connection: Connection;
        connection_error: string;
        connectionError: string;
        connection_error_details: GLib.HashTable<any, any>;
        connectionErrorDetails: GLib.HashTable<any, any>;
        connection_manager: string;
        connectionManager: string;
        connection_status: number;
        connectionStatus: number;
        connection_status_reason: number;
        connectionStatusReason: number;
        current_presence_type: number;
        currentPresenceType: number;
        current_status: string;
        currentStatus: string;
        current_status_message: string;
        currentStatusMessage: string;
        display_name: string;
        displayName: string;
        enabled: boolean;
        has_been_online: boolean;
        hasBeenOnline: boolean;
        icon_name: string;
        iconName: string;
        nickname: string;
        normalized_name: string;
        normalizedName: string;
        protocol: string;
        protocol_name: string;
        protocolName: string;
        requested_presence_type: number;
        requestedPresenceType: number;
        requested_status: string;
        requestedStatus: string;
        requested_status_message: string;
        requestedStatusMessage: string;
        service: string;
        storage_identifier: GObject.Value;
        storageIdentifier: GObject.Value;
        storage_identifier_variant: GLib.Variant;
        storageIdentifierVariant: GLib.Variant;
        storage_provider: string;
        storageProvider: string;
        storage_restrictions: number;
        storageRestrictions: number;
        supersedes: string[];
        uri_schemes: string[];
        uriSchemes: string[];
        valid: boolean;
    }
}
export class Account extends Proxy {
    static $gtype: GObject.GType<Account>;

    constructor(properties?: Partial<Account.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Account.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get automatic_presence_type(): number;
    get automaticPresenceType(): number;
    get automatic_status(): string;
    get automaticStatus(): string;
    get automatic_status_message(): string;
    get automaticStatusMessage(): string;
    get changing_presence(): boolean;
    get changingPresence(): boolean;
    get cm_name(): string;
    get cmName(): string;
    get connect_automatically(): boolean;
    get connectAutomatically(): boolean;
    get connection(): Connection;
    get connection_error(): string;
    get connectionError(): string;
    get connection_error_details(): GLib.HashTable<any, any>;
    get connectionErrorDetails(): GLib.HashTable<any, any>;
    get connection_manager(): string;
    get connectionManager(): string;
    get connection_status(): number;
    get connectionStatus(): number;
    get connection_status_reason(): number;
    get connectionStatusReason(): number;
    get current_presence_type(): number;
    get currentPresenceType(): number;
    get current_status(): string;
    get currentStatus(): string;
    get current_status_message(): string;
    get currentStatusMessage(): string;
    get display_name(): string;
    get displayName(): string;
    get enabled(): boolean;
    get has_been_online(): boolean;
    get hasBeenOnline(): boolean;
    get icon_name(): string;
    get iconName(): string;
    get nickname(): string;
    get normalized_name(): string;
    get normalizedName(): string;
    get protocol(): string;
    get protocol_name(): string;
    get protocolName(): string;
    get requested_presence_type(): number;
    get requestedPresenceType(): number;
    get requested_status(): string;
    get requestedStatus(): string;
    get requested_status_message(): string;
    get requestedStatusMessage(): string;
    get service(): string;
    get storage_identifier(): GObject.Value;
    get storageIdentifier(): GObject.Value;
    get storage_identifier_variant(): GLib.Variant;
    get storageIdentifierVariant(): GLib.Variant;
    get storage_provider(): string;
    get storageProvider(): string;
    get storage_restrictions(): number;
    get storageRestrictions(): number;
    get supersedes(): string[];
    get uri_schemes(): string[];
    get uriSchemes(): string[];
    get valid(): boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "avatar-changed", callback: (_source: this) => void): number;
    connect_after(signal: "avatar-changed", callback: (_source: this) => void): number;
    emit(signal: "avatar-changed"): void;
    connect(
        signal: "presence-changed",
        callback: (_source: this, presence: number, status: string, status_message: string) => void
    ): number;
    connect_after(
        signal: "presence-changed",
        callback: (_source: this, presence: number, status: string, status_message: string) => void
    ): number;
    emit(signal: "presence-changed", presence: number, status: string, status_message: string): void;
    connect(
        signal: "status-changed",
        callback: (
            _source: this,
            old_status: number,
            new_status: number,
            reason: number,
            dbus_error_name: string | null,
            details: GLib.HashTable<string, GObject.Value>
        ) => void
    ): number;
    connect_after(
        signal: "status-changed",
        callback: (
            _source: this,
            old_status: number,
            new_status: number,
            reason: number,
            dbus_error_name: string | null,
            details: GLib.HashTable<string, GObject.Value>
        ) => void
    ): number;
    emit(
        signal: "status-changed",
        old_status: number,
        new_status: number,
        reason: number,
        dbus_error_name: string | null,
        details: GLib.HashTable<string, GObject.Value>
    ): void;

    // Constructors

    static ["new"](bus_daemon: DBusDaemon, object_path: string): Account;

    // Members

    associated_with_uri_scheme(scheme: string): boolean;
    bind_connection_status_to_property(target: any | null, target_property: string, invert: boolean): GObject.Binding;
    dup_detailed_error_vardict(): [string | null, GLib.Variant | null];
    dup_parameters_vardict(): GLib.Variant;
    dup_storage_identifier_variant(): GLib.Variant;
    dup_storage_specific_information_vardict_async(): Promise<GLib.Variant>;
    dup_storage_specific_information_vardict_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    dup_storage_specific_information_vardict_async(
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<GLib.Variant> | void;
    dup_storage_specific_information_vardict_finish(result: Gio.AsyncResult): GLib.Variant;
    ensure_connection(path: string): Connection;
    get_automatic_presence(): [ConnectionPresenceType, string, string];
    get_avatar_async(): Promise<Uint8Array>;
    get_avatar_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    get_avatar_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<Uint8Array> | void;
    get_avatar_finish(result: Gio.AsyncResult): Uint8Array;
    get_changing_presence(): boolean;
    get_cm_name(): string;
    get_connect_automatically(): boolean;
    get_connection(): Connection;
    get_connection_manager(): string;
    get_connection_status(): [ConnectionStatus, ConnectionStatusReason];
    get_current_presence(): [ConnectionPresenceType, string, string];
    get_display_name(): string;
    get_has_been_online(): boolean;
    get_icon_name(): string;
    get_nickname(): string;
    get_normalized_name(): string;
    get_parameters(): GLib.HashTable<string, GObject.Value>;
    get_path_suffix(): string;
    get_protocol(): string;
    get_protocol_name(): string;
    get_requested_presence(): [ConnectionPresenceType, string, string];
    get_service(): string;
    get_storage_identifier(): unknown;
    get_storage_provider(): string;
    get_storage_restrictions(): StorageRestrictionFlags;
    get_storage_specific_information_async(): Promise<GLib.HashTable<string, GObject.Value>>;
    get_storage_specific_information_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    get_storage_specific_information_async(
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<GLib.HashTable<string, GObject.Value>> | void;
    get_storage_specific_information_finish(result: Gio.AsyncResult): GLib.HashTable<string, GObject.Value>;
    get_supersedes(): string[];
    get_uri_schemes(): string[];
    is_enabled(): boolean;
    is_valid(): boolean;
    reconnect_async(): Promise<boolean>;
    reconnect_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    reconnect_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    reconnect_finish(result: Gio.AsyncResult): boolean;
    remove_async(): Promise<boolean>;
    remove_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    remove_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    remove_finish(result: Gio.AsyncResult): boolean;
    request_presence_async(type: ConnectionPresenceType, status: string, message: string): Promise<boolean>;
    request_presence_async(
        type: ConnectionPresenceType,
        status: string,
        message: string,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    request_presence_async(
        type: ConnectionPresenceType,
        status: string,
        message: string,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    request_presence_finish(result: Gio.AsyncResult): boolean;
    set_automatic_presence_async(type: ConnectionPresenceType, status: string, message: string): Promise<boolean>;
    set_automatic_presence_async(
        type: ConnectionPresenceType,
        status: string,
        message: string,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_automatic_presence_async(
        type: ConnectionPresenceType,
        status: string,
        message: string,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_automatic_presence_finish(result: Gio.AsyncResult): boolean;
    set_avatar_async(avatar?: Uint8Array | null, mime_type?: string | null): Promise<boolean>;
    set_avatar_async(
        avatar: Uint8Array | null,
        mime_type: string | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_avatar_async(
        avatar?: Uint8Array | null,
        mime_type?: string | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_avatar_finish(result: Gio.AsyncResult): boolean;
    set_connect_automatically_async(connect_automatically: boolean): Promise<boolean>;
    set_connect_automatically_async(
        connect_automatically: boolean,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_connect_automatically_async(
        connect_automatically: boolean,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_connect_automatically_finish(result: Gio.AsyncResult): boolean;
    set_display_name_async(display_name: string): Promise<boolean>;
    set_display_name_async(display_name: string, callback: Gio.AsyncReadyCallback<this> | null): void;
    set_display_name_async(
        display_name: string,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_display_name_finish(result: Gio.AsyncResult): boolean;
    set_enabled_async(enabled: boolean): Promise<boolean>;
    set_enabled_async(enabled: boolean, callback: Gio.AsyncReadyCallback<this> | null): void;
    set_enabled_async(enabled: boolean, callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    set_enabled_finish(result: Gio.AsyncResult): boolean;
    set_icon_name_async(icon_name: string): Promise<boolean>;
    set_icon_name_async(icon_name: string, callback: Gio.AsyncReadyCallback<this> | null): void;
    set_icon_name_async(icon_name: string, callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    set_icon_name_finish(result: Gio.AsyncResult): boolean;
    set_nickname_async(nickname: string): Promise<boolean>;
    set_nickname_async(nickname: string, callback: Gio.AsyncReadyCallback<this> | null): void;
    set_nickname_async(nickname: string, callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    set_nickname_finish(result: Gio.AsyncResult): boolean;
    set_service_async(service: string): Promise<boolean>;
    set_service_async(service: string, callback: Gio.AsyncReadyCallback<this> | null): void;
    set_service_async(service: string, callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    set_service_finish(result: Gio.AsyncResult): boolean;
    set_uri_scheme_association_async(scheme: string, associate: boolean): Promise<boolean>;
    set_uri_scheme_association_async(
        scheme: string,
        associate: boolean,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_uri_scheme_association_async(
        scheme: string,
        associate: boolean,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_uri_scheme_association_finish(result: Gio.AsyncResult): boolean;
    update_parameters_async(
        parameters: GLib.HashTable<string, GObject.Value>,
        unset_parameters: string
    ): Promise<[string[]]>;
    update_parameters_async(
        parameters: GLib.HashTable<string, GObject.Value>,
        unset_parameters: string,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    update_parameters_async(
        parameters: GLib.HashTable<string, GObject.Value>,
        unset_parameters: string,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string[]]> | void;
    update_parameters_finish(result: Gio.AsyncResult): [boolean, string[]];
    update_parameters_vardict_async(parameters: GLib.Variant, unset_parameters: string[]): Promise<[string[]]>;
    update_parameters_vardict_async(
        parameters: GLib.Variant,
        unset_parameters: string[],
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    update_parameters_vardict_async(
        parameters: GLib.Variant,
        unset_parameters: string[],
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string[]]> | void;
    update_parameters_vardict_finish(result: Gio.AsyncResult): [boolean, string[]];
    static get_feature_quark_addressing(): GLib.Quark;
    static get_feature_quark_connection(): GLib.Quark;
    static get_feature_quark_core(): GLib.Quark;
    static get_feature_quark_storage(): GLib.Quark;
    static init_known_interfaces(): void;
    static parse_object_path(object_path: string): [boolean, string, string, string];
}
export module AccountChannelRequest {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        account: Account;
        channel_request: ChannelRequest;
        channelRequest: ChannelRequest;
        request_vardict: GLib.Variant;
        requestVardict: GLib.Variant;
        user_action_time: number;
        userActionTime: number;
    }
}
export class AccountChannelRequest extends GObject.Object {
    static $gtype: GObject.GType<AccountChannelRequest>;

    constructor(properties?: Partial<AccountChannelRequest.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AccountChannelRequest.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get account(): Account;
    get channel_request(): ChannelRequest;
    get channelRequest(): ChannelRequest;
    get request_vardict(): GLib.Variant;
    get requestVardict(): GLib.Variant;
    get user_action_time(): number;
    get userActionTime(): number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "re-handled",
        callback: (_source: this, channel: Channel, user_action_time: number, context: HandleChannelsContext) => void
    ): number;
    connect_after(
        signal: "re-handled",
        callback: (_source: this, channel: Channel, user_action_time: number, context: HandleChannelsContext) => void
    ): number;
    emit(signal: "re-handled", channel: Channel, user_action_time: number, context: HandleChannelsContext): void;

    // Constructors

    static ["new"](
        account: Account,
        request: GLib.HashTable<string, GObject.Value>,
        user_action_time: number
    ): AccountChannelRequest;
    static new_audio_call(account: Account, user_action_time: number): AccountChannelRequest;
    static new_audio_video_call(account: Account, user_action_time: number): AccountChannelRequest;
    static new_dbus_tube(account: Account, service_name: string, user_action_time: number): AccountChannelRequest;
    static new_file_transfer(
        account: Account,
        filename: string,
        mime_type: string | null,
        size: number,
        user_action_time: number
    ): AccountChannelRequest;
    static new_stream_tube(account: Account, service: string, user_action_time: number): AccountChannelRequest;
    static new_text(account: Account, user_action_time: number): AccountChannelRequest;
    static new_vardict(account: Account, request: GLib.Variant, user_action_time: number): AccountChannelRequest;

    // Members

    create_and_handle_channel_async(
        cancellable?: Gio.Cancellable | null
    ): Promise<[Channel | null, HandleChannelsContext | null]>;
    create_and_handle_channel_async(
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    create_and_handle_channel_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[Channel | null, HandleChannelsContext | null]> | void;
    create_and_handle_channel_finish(result: Gio.AsyncResult): [Channel | null, HandleChannelsContext | null];
    create_and_observe_channel_async(preferred_handler: string, cancellable?: Gio.Cancellable | null): Promise<Channel>;
    create_and_observe_channel_async(
        preferred_handler: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    create_and_observe_channel_async(
        preferred_handler: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Channel> | void;
    create_and_observe_channel_finish(result: Gio.AsyncResult): Channel;
    create_channel_async(preferred_handler: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    create_channel_async(
        preferred_handler: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    create_channel_async(
        preferred_handler: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    create_channel_finish(result: Gio.AsyncResult): boolean;
    dup_request(): GLib.Variant;
    ensure_and_handle_channel_async(
        cancellable?: Gio.Cancellable | null
    ): Promise<[Channel | null, HandleChannelsContext | null]>;
    ensure_and_handle_channel_async(
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    ensure_and_handle_channel_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[Channel | null, HandleChannelsContext | null]> | void;
    ensure_and_handle_channel_finish(result: Gio.AsyncResult): [Channel | null, HandleChannelsContext | null];
    ensure_and_observe_channel_async(preferred_handler: string, cancellable?: Gio.Cancellable | null): Promise<Channel>;
    ensure_and_observe_channel_async(
        preferred_handler: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    ensure_and_observe_channel_async(
        preferred_handler: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Channel> | void;
    ensure_and_observe_channel_finish(result: Gio.AsyncResult): Channel;
    ensure_channel_async(preferred_handler: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    ensure_channel_async(
        preferred_handler: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    ensure_channel_async(
        preferred_handler: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    ensure_channel_finish(result: Gio.AsyncResult): boolean;
    get_account(): Account;
    get_channel_request(): ChannelRequest;
    get_request(): GLib.HashTable<any, any>;
    get_user_action_time(): number;
    set_channel_factory(factory: ClientChannelFactory): void;
    set_conference_initial_channels(channels: string): void;
    set_delegate_to_preferred_handler(delegate: boolean): void;
    set_delegated_channel_callback(callback: AccountChannelRequestDelegatedChannelCb): void;
    set_file_transfer_description(description: string): void;
    set_file_transfer_hash(hash_type: FileHashType, hash: string): void;
    set_file_transfer_initial_offset(offset: number): void;
    set_file_transfer_timestamp(timestamp: number): void;
    set_file_transfer_uri(uri: string): void;
    set_hint(key: string, value: GLib.Variant): void;
    set_hints(hints: GLib.HashTable<any, any>): void;
    set_initial_invitee_ids(ids: string): void;
    set_initial_invitees(contacts: Contact[]): void;
    set_request_property(name: string, value: GLib.Variant): void;
    set_sms_channel(is_sms_channel: boolean): void;
    set_target_contact(contact: Contact): void;
    set_target_id(handle_type: HandleType, identifier: string): void;
}
export module AccountManager {
    export interface ConstructorProperties extends Proxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class AccountManager extends Proxy {
    static $gtype: GObject.GType<AccountManager>;

    constructor(properties?: Partial<AccountManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AccountManager.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "account-disabled", callback: (_source: this, account: Account) => void): number;
    connect_after(signal: "account-disabled", callback: (_source: this, account: Account) => void): number;
    emit(signal: "account-disabled", account: Account): void;
    connect(signal: "account-enabled", callback: (_source: this, account: Account) => void): number;
    connect_after(signal: "account-enabled", callback: (_source: this, account: Account) => void): number;
    emit(signal: "account-enabled", account: Account): void;
    connect(signal: "account-removed", callback: (_source: this, account: Account) => void): number;
    connect_after(signal: "account-removed", callback: (_source: this, account: Account) => void): number;
    emit(signal: "account-removed", account: Account): void;
    connect(
        signal: "account-validity-changed",
        callback: (_source: this, account: Account, valid: boolean) => void
    ): number;
    connect_after(
        signal: "account-validity-changed",
        callback: (_source: this, account: Account, valid: boolean) => void
    ): number;
    emit(signal: "account-validity-changed", account: Account, valid: boolean): void;
    connect(
        signal: "most-available-presence-changed",
        callback: (_source: this, presence: number, status: string, message: string) => void
    ): number;
    connect_after(
        signal: "most-available-presence-changed",
        callback: (_source: this, presence: number, status: string, message: string) => void
    ): number;
    emit(signal: "most-available-presence-changed", presence: number, status: string, message: string): void;

    // Constructors

    static ["new"](bus_daemon: DBusDaemon): AccountManager;
    static new_with_factory(factory: SimpleClientFactory): AccountManager;

    // Members

    create_account_async(
        connection_manager: string,
        protocol: string,
        display_name: string,
        parameters: GLib.HashTable<string, GObject.Value>,
        properties: GLib.HashTable<string, GObject.Value>
    ): Promise<Account>;
    create_account_async(
        connection_manager: string,
        protocol: string,
        display_name: string,
        parameters: GLib.HashTable<string, GObject.Value>,
        properties: GLib.HashTable<string, GObject.Value>,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    create_account_async(
        connection_manager: string,
        protocol: string,
        display_name: string,
        parameters: GLib.HashTable<string, GObject.Value>,
        properties: GLib.HashTable<string, GObject.Value>,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Account> | void;
    create_account_finish(result: Gio.AsyncResult): Account;
    dup_valid_accounts(): Account[];
    enable_restart(): void;
    ensure_account(path: string): Account;
    get_most_available_presence(): [ConnectionPresenceType, string, string];
    get_valid_accounts(): Account[];
    set_all_requested_presences(type: ConnectionPresenceType, status: string, message: string): void;
    set_default(): void;
    static can_set_default(): boolean;
    static dup(): AccountManager;
    static get_feature_quark_core(): GLib.Quark;
    static init_known_interfaces(): void;
}
export module AccountRequest {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        account_manager: AccountManager;
        accountManager: AccountManager;
        automatic_presence_type: number;
        automaticPresenceType: number;
        automatic_status: string;
        automaticStatus: string;
        automatic_status_message: string;
        automaticStatusMessage: string;
        avatar: any[];
        avatar_mime_type: string;
        avatarMimeType: string;
        connect_automatically: boolean;
        connectAutomatically: boolean;
        connection_manager: string;
        connectionManager: string;
        display_name: string;
        displayName: string;
        enabled: boolean;
        icon_name: string;
        iconName: string;
        nickname: string;
        parameters: GLib.Variant;
        properties: GLib.Variant;
        protocol: string;
        requested_presence_type: number;
        requestedPresenceType: number;
        requested_status: string;
        requestedStatus: string;
        requested_status_message: string;
        requestedStatusMessage: string;
        service: string;
        storage_provider: string;
        storageProvider: string;
        supersedes: string[];
    }
}
export class AccountRequest extends GObject.Object {
    static $gtype: GObject.GType<AccountRequest>;

    constructor(properties?: Partial<AccountRequest.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AccountRequest.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get account_manager(): AccountManager;
    get accountManager(): AccountManager;
    get automatic_presence_type(): number;
    get automaticPresenceType(): number;
    get automatic_status(): string;
    get automaticStatus(): string;
    get automatic_status_message(): string;
    get automaticStatusMessage(): string;
    get avatar(): any[];
    get avatar_mime_type(): string;
    get avatarMimeType(): string;
    get connect_automatically(): boolean;
    get connectAutomatically(): boolean;
    get connection_manager(): string;
    get connectionManager(): string;
    get display_name(): string;
    get displayName(): string;
    get enabled(): boolean;
    get icon_name(): string;
    get iconName(): string;
    get nickname(): string;
    get parameters(): GLib.Variant;
    get properties(): GLib.Variant;
    get protocol(): string;
    get requested_presence_type(): number;
    get requestedPresenceType(): number;
    get requested_status(): string;
    get requestedStatus(): string;
    get requested_status_message(): string;
    get requestedStatusMessage(): string;
    get service(): string;
    get storage_provider(): string;
    get storageProvider(): string;
    get supersedes(): string[];

    // Constructors

    static ["new"](
        account_manager: AccountManager,
        manager: string,
        protocol: string,
        display_name: string
    ): AccountRequest;
    static new_from_protocol(account_manager: AccountManager, protocol: Protocol, display_name: string): AccountRequest;

    // Members

    add_supersedes(superseded_path: string): void;
    create_account_async(): Promise<Account>;
    create_account_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    create_account_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<Account> | void;
    create_account_finish(result: Gio.AsyncResult): Account;
    set_automatic_presence(presence: ConnectionPresenceType, status: string, message: string): void;
    set_avatar(avatar?: Uint8Array | null, mime_type?: string | null): void;
    set_connect_automatically(connect_automatically: boolean): void;
    set_display_name(name: string): void;
    set_enabled(enabled: boolean): void;
    set_icon_name(icon: string): void;
    set_nickname(nickname: string): void;
    set_parameter(key: string, value: GLib.Variant): void;
    set_requested_presence(presence: ConnectionPresenceType, status: string, message: string): void;
    set_service(service: string): void;
    set_storage_provider(provider: string): void;
    unset_parameter(key: string): void;
}
export module AddDispatchOperationContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        account: Account;
        channels: any[];
        connection: Connection;
        dispatch_operation: ChannelDispatchOperation;
        dispatchOperation: ChannelDispatchOperation;
    }
}
export class AddDispatchOperationContext extends GObject.Object {
    static $gtype: GObject.GType<AddDispatchOperationContext>;

    constructor(properties?: Partial<AddDispatchOperationContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AddDispatchOperationContext.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get account(): Account;
    get channels(): any[];
    get connection(): Connection;
    get dispatch_operation(): ChannelDispatchOperation;
    get dispatchOperation(): ChannelDispatchOperation;

    // Members

    accept(): void;
    delay(): void;
    fail(error: GLib.Error): void;
}
export module AutomaticClientFactory {
    export interface ConstructorProperties extends SimpleClientFactory.ConstructorProperties {
        [key: string]: any;
    }
}
export class AutomaticClientFactory extends SimpleClientFactory {
    static $gtype: GObject.GType<AutomaticClientFactory>;

    constructor(properties?: Partial<AutomaticClientFactory.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AutomaticClientFactory.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](dbus?: DBusDaemon | null): AutomaticClientFactory;
}
export module AutomaticProxyFactory {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class AutomaticProxyFactory extends GObject.Object implements ClientChannelFactory {
    static $gtype: GObject.GType<AutomaticProxyFactory>;

    constructor(properties?: Partial<AutomaticProxyFactory.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AutomaticProxyFactory.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): AutomaticProxyFactory;

    // Members

    static dup(): AutomaticProxyFactory;

    // Implemented Members

    create_channel(conn: Connection, path: string, properties: GLib.HashTable<string, GObject.Value>): Channel;
    dup_channel_features(channel: Channel): GLib.Quark[];
}
export module BaseClient {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        account_manager: AccountManager;
        accountManager: AccountManager;
        channel_factory: GObject.Object;
        channelFactory: GObject.Object;
        dbus_daemon: DBusDaemon;
        dbusDaemon: DBusDaemon;
        factory: SimpleClientFactory;
        name: string;
        uniquify_name: boolean;
        uniquifyName: boolean;
    }
}
export abstract class BaseClient extends GObject.Object {
    static $gtype: GObject.GType<BaseClient>;

    constructor(properties?: Partial<BaseClient.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BaseClient.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get account_manager(): AccountManager;
    get accountManager(): AccountManager;
    get channel_factory(): GObject.Object;
    get channelFactory(): GObject.Object;
    get dbus_daemon(): DBusDaemon;
    get dbusDaemon(): DBusDaemon;
    get factory(): SimpleClientFactory;
    get name(): string;
    get uniquify_name(): boolean;
    get uniquifyName(): boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "request-added",
        callback: (_source: this, account: Account, request: ChannelRequest) => void
    ): number;
    connect_after(
        signal: "request-added",
        callback: (_source: this, account: Account, request: ChannelRequest) => void
    ): number;
    emit(signal: "request-added", account: Account, request: ChannelRequest): void;
    connect(
        signal: "request-removed",
        callback: (_source: this, request: ChannelRequest, error: string, message: string) => void
    ): number;
    connect_after(
        signal: "request-removed",
        callback: (_source: this, request: ChannelRequest, error: string, message: string) => void
    ): number;
    emit(signal: "request-removed", request: ChannelRequest, error: string, message: string): void;

    // Members

    add_account_features(features: GLib.Quark[]): void;
    add_approver_filter(filter: GLib.HashTable<string, GObject.Value>): void;
    add_approver_filter_vardict(filter: GLib.Variant): void;
    add_channel_features(features: GLib.Quark[]): void;
    add_connection_features(features: GLib.Quark[]): void;
    add_handler_capabilities(tokens: string[]): void;
    add_handler_capability(token: string): void;
    add_handler_filter(filter: GLib.HashTable<string, GObject.Value>): void;
    add_handler_filter_vardict(filter: GLib.Variant): void;
    add_observer_filter(filter: GLib.HashTable<string, GObject.Value>): void;
    add_observer_filter_vardict(filter: GLib.Variant): void;
    be_a_handler(): void;
    delegate_channels_async(
        channels: Channel[],
        user_action_time: number,
        preferred_handler: string
    ): Promise<[Channel[], GLib.HashTable<Channel, GLib.Error>]>;
    delegate_channels_async(
        channels: Channel[],
        user_action_time: number,
        preferred_handler: string,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    delegate_channels_async(
        channels: Channel[],
        user_action_time: number,
        preferred_handler: string,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[Channel[], GLib.HashTable<Channel, GLib.Error>]> | void;
    delegate_channels_finish(result: Gio.AsyncResult): [boolean, Channel[], GLib.HashTable<Channel, GLib.Error>];
    dup_handled_channels(): Channel[];
    dup_pending_requests(): ChannelRequest[];
    get_bus_name(): string;
    get_dbus_daemon(): DBusDaemon;
    get_handled_channels(): Channel[];
    get_name(): string;
    get_object_path(): string;
    get_pending_requests(): ChannelRequest[];
    get_uniquify_name(): boolean;
    is_handling_channel(channel: Channel): boolean;
    register(): boolean;
    set_channel_factory(factory: ClientChannelFactory): void;
    set_delegated_channels_callback(callback: BaseClientDelegatedChannelsCb): void;
    set_handler_bypass_approval(bypass_approval: boolean): void;
    set_handler_request_notification(): void;
    set_observer_delay_approvers(delay: boolean): void;
    set_observer_recover(recover: boolean): void;
    unregister(): void;
    vfunc_add_dispatch_operation(
        account: Account,
        connection: Connection,
        channels: Channel[],
        dispatch_operation: ChannelDispatchOperation,
        context: AddDispatchOperationContext
    ): void;
    vfunc_handle_channels(
        account: Account,
        connection: Connection,
        channels: Channel[],
        requests_satisfied: ChannelRequest[],
        user_action_time: number,
        context: HandleChannelsContext
    ): void;
    vfunc_observe_channels(
        account: Account,
        connection: Connection,
        channels: Channel[],
        dispatch_operation: ChannelDispatchOperation | null,
        requests: ChannelRequest[],
        context: ObserveChannelsContext
    ): void;
}
export module BaseConnection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        account_path_suffix: string;
        accountPathSuffix: string;
        has_immortal_handles: boolean;
        hasImmortalHandles: boolean;
    }
}
export abstract class BaseConnection extends GObject.Object {
    static $gtype: GObject.GType<BaseConnection>;

    constructor(properties?: Partial<BaseConnection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BaseConnection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get account_path_suffix(): string;
    get accountPathSuffix(): string;
    get has_immortal_handles(): boolean;
    get hasImmortalHandles(): boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "clients-interested", callback: (_source: this, token: string) => void): number;
    connect_after(signal: "clients-interested", callback: (_source: this, token: string) => void): number;
    emit(signal: "clients-interested", token: string): void;
    connect(signal: "clients-uninterested", callback: (_source: this, token: string) => void): number;
    connect_after(signal: "clients-uninterested", callback: (_source: this, token: string) => void): number;
    emit(signal: "clients-uninterested", token: string): void;
    connect(signal: "shutdown-finished", callback: (_source: this) => void): number;
    connect_after(signal: "shutdown-finished", callback: (_source: this) => void): number;
    emit(signal: "shutdown-finished"): void;

    // Members

    add_client_interest(unique_name: string, token: string, only_if_uninterested: boolean): void;
    add_possible_client_interest(token: GLib.Quark): void;
    change_status(status: ConnectionStatus, reason: ConnectionStatusReason): void;
    check_connected(): boolean;
    get_account_path_suffix(): string;
    get_bus_name(): string | null;
    get_handles(handle_type: HandleType): HandleRepoIface;
    get_object_path(): string | null;
    get_status(): ConnectionStatus;
    is_destroyed(): boolean;
    register(cm_name: string): [boolean, string, string];
    set_self_handle(self_handle: Handle): void;
    vfunc_connected(): void;
    vfunc_connecting(): void;
    vfunc_disconnected(): void;
    vfunc_get_unique_connection_name(): string;
    vfunc_shut_down(): void;
    vfunc_start_connecting(): boolean;
}
export module BasicProxyFactory {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class BasicProxyFactory extends GObject.Object implements ClientChannelFactory {
    static $gtype: GObject.GType<BasicProxyFactory>;

    constructor(properties?: Partial<BasicProxyFactory.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BasicProxyFactory.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): BasicProxyFactory;

    // Members

    static dup(): BasicProxyFactory;

    // Implemented Members

    create_channel(conn: Connection, path: string, properties: GLib.HashTable<string, GObject.Value>): Channel;
    dup_channel_features(channel: Channel): GLib.Quark[];
}
export module CallChannel {
    export interface ConstructorProperties extends Channel.ConstructorProperties {
        [key: string]: any;
        contents: any[];
        flags: number;
        hardware_streaming: boolean;
        hardwareStreaming: boolean;
        hold_state: number;
        holdState: number;
        hold_state_reason: number;
        holdStateReason: number;
        initial_audio: boolean;
        initialAudio: boolean;
        initial_audio_name: string;
        initialAudioName: string;
        initial_video: boolean;
        initialVideo: boolean;
        initial_video_name: string;
        initialVideoName: string;
        mutable_contents: boolean;
        mutableContents: boolean;
        state: number;
        state_details: GLib.HashTable<any, any>;
        stateDetails: GLib.HashTable<any, any>;
        state_reason: CallStateReason;
        stateReason: CallStateReason;
    }
}
export class CallChannel extends Channel {
    static $gtype: GObject.GType<CallChannel>;

    constructor(properties?: Partial<CallChannel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CallChannel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get contents(): any[];
    get flags(): number;
    get hardware_streaming(): boolean;
    get hardwareStreaming(): boolean;
    get hold_state(): number;
    get holdState(): number;
    get hold_state_reason(): number;
    get holdStateReason(): number;
    get initial_audio(): boolean;
    get initialAudio(): boolean;
    get initial_audio_name(): string;
    get initialAudioName(): string;
    get initial_video(): boolean;
    get initialVideo(): boolean;
    get initial_video_name(): string;
    get initialVideoName(): string;
    get mutable_contents(): boolean;
    get mutableContents(): boolean;
    get state(): number;
    get state_details(): GLib.HashTable<any, any>;
    get stateDetails(): GLib.HashTable<any, any>;
    get state_reason(): CallStateReason;
    get stateReason(): CallStateReason;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "content-added", callback: (_source: this, content: GObject.Object) => void): number;
    connect_after(signal: "content-added", callback: (_source: this, content: GObject.Object) => void): number;
    emit(signal: "content-added", content: GObject.Object): void;
    connect(
        signal: "content-removed",
        callback: (_source: this, content: GObject.Object, reason: CallStateReason) => void
    ): number;
    connect_after(
        signal: "content-removed",
        callback: (_source: this, content: GObject.Object, reason: CallStateReason) => void
    ): number;
    emit(signal: "content-removed", content: GObject.Object, reason: CallStateReason): void;
    connect(
        signal: "members-changed",
        callback: (
            _source: this,
            updates: GLib.HashTable<Contact, number>,
            removed: Contact[],
            reason: CallStateReason
        ) => void
    ): number;
    connect_after(
        signal: "members-changed",
        callback: (
            _source: this,
            updates: GLib.HashTable<Contact, number>,
            removed: Contact[],
            reason: CallStateReason
        ) => void
    ): number;
    emit(
        signal: "members-changed",
        updates: GLib.HashTable<Contact, number>,
        removed: Contact[],
        reason: CallStateReason
    ): void;
    connect(
        signal: "state-changed",
        callback: (
            _source: this,
            state: number,
            flags: number,
            reason: CallStateReason,
            details: GLib.HashTable<string, GObject.Value>
        ) => void
    ): number;
    connect_after(
        signal: "state-changed",
        callback: (
            _source: this,
            state: number,
            flags: number,
            reason: CallStateReason,
            details: GLib.HashTable<string, GObject.Value>
        ) => void
    ): number;
    emit(
        signal: "state-changed",
        state: number,
        flags: number,
        reason: CallStateReason,
        details: GLib.HashTable<string, GObject.Value>
    ): void;

    // Members

    accept_async(): Promise<boolean>;
    accept_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    accept_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    accept_finish(result: Gio.AsyncResult): boolean;
    add_content_async(
        name: string,
        type: MediaStreamType,
        initial_direction: MediaStreamDirection
    ): Promise<CallContent>;
    add_content_async(
        name: string,
        type: MediaStreamType,
        initial_direction: MediaStreamDirection,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    add_content_async(
        name: string,
        type: MediaStreamType,
        initial_direction: MediaStreamDirection,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<CallContent> | void;
    add_content_finish(result: Gio.AsyncResult): CallContent;
    get_contents(): CallContent[];
    get_members(): GLib.HashTable<Contact, number>;
    get_state(): [CallState, CallFlags | null, GLib.HashTable<any, any> | null, CallStateReason | null];
    hangup_async(reason: CallStateChangeReason, detailed_reason: string, message: string): Promise<boolean>;
    hangup_async(
        reason: CallStateChangeReason,
        detailed_reason: string,
        message: string,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    hangup_async(
        reason: CallStateChangeReason,
        detailed_reason: string,
        message: string,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    hangup_finish(result: Gio.AsyncResult): boolean;
    has_dtmf(): boolean;
    has_hardware_streaming(): boolean;
    has_hold(): boolean;
    has_initial_audio(): [boolean, string | null];
    has_initial_video(): [boolean, string | null];
    has_mutable_contents(): boolean;
    request_hold_async(hold: boolean): Promise<boolean>;
    request_hold_async(hold: boolean, callback: Gio.AsyncReadyCallback<this> | null): void;
    request_hold_async(hold: boolean, callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    request_hold_finish(result: Gio.AsyncResult): boolean;
    send_tones_async(tones: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    send_tones_async(
        tones: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    send_tones_async(
        tones: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    send_tones_finish(result: Gio.AsyncResult): boolean;
    set_queued_async(): Promise<boolean>;
    set_queued_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    set_queued_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    set_queued_finish(result: Gio.AsyncResult): boolean;
    set_ringing_async(): Promise<boolean>;
    set_ringing_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    set_ringing_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    set_ringing_finish(result: Gio.AsyncResult): boolean;
    static get_feature_quark_core(): GLib.Quark;
}
export module CallContent {
    export interface ConstructorProperties extends Proxy.ConstructorProperties {
        [key: string]: any;
        channel: CallChannel;
        connection: Connection;
        disposition: number;
        media_type: number;
        mediaType: number;
        name: string;
        streams: any[];
    }
}
export class CallContent extends Proxy {
    static $gtype: GObject.GType<CallContent>;

    constructor(properties?: Partial<CallContent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CallContent.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get channel(): CallChannel;
    get connection(): Connection;
    get disposition(): number;
    get media_type(): number;
    get mediaType(): number;
    get name(): string;
    get streams(): any[];

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "removed", callback: (_source: this) => void): number;
    connect_after(signal: "removed", callback: (_source: this) => void): number;
    emit(signal: "removed"): void;
    connect(signal: "streams-added", callback: (_source: this, streams: CallStream[]) => void): number;
    connect_after(signal: "streams-added", callback: (_source: this, streams: CallStream[]) => void): number;
    emit(signal: "streams-added", streams: CallStream[]): void;
    connect(
        signal: "streams-removed",
        callback: (_source: this, streams: CallStream[], reason: CallStateReason) => void
    ): number;
    connect_after(
        signal: "streams-removed",
        callback: (_source: this, streams: CallStream[], reason: CallStateReason) => void
    ): number;
    emit(signal: "streams-removed", streams: CallStream[], reason: CallStateReason): void;

    // Members

    get_disposition(): CallContentDisposition;
    get_media_type(): MediaStreamType;
    get_name(): string;
    get_streams(): CallStream[];
    remove_async(): Promise<boolean>;
    remove_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    remove_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    remove_finish(result: Gio.AsyncResult): boolean;
    send_tones_async(tones: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    send_tones_async(
        tones: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    send_tones_async(
        tones: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    send_tones_finish(result: Gio.AsyncResult): boolean;
    static get_feature_quark_core(): GLib.Quark;
    static init_known_interfaces(): void;
}
export module CallStream {
    export interface ConstructorProperties extends Proxy.ConstructorProperties {
        [key: string]: any;
        can_request_receiving: boolean;
        canRequestReceiving: boolean;
        connection: Connection;
        content: CallContent;
        local_sending_state: number;
        localSendingState: number;
    }
}
export class CallStream extends Proxy {
    static $gtype: GObject.GType<CallStream>;

    constructor(properties?: Partial<CallStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CallStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get can_request_receiving(): boolean;
    get canRequestReceiving(): boolean;
    get connection(): Connection;
    get content(): CallContent;
    get local_sending_state(): number;
    get localSendingState(): number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "local-sending-state-changed",
        callback: (_source: this, state: number, reason: CallStateReason) => void
    ): number;
    connect_after(
        signal: "local-sending-state-changed",
        callback: (_source: this, state: number, reason: CallStateReason) => void
    ): number;
    emit(signal: "local-sending-state-changed", state: number, reason: CallStateReason): void;
    connect(
        signal: "remote-members-changed",
        callback: (
            _source: this,
            updates: GLib.HashTable<Contact, number>,
            removed: Contact[],
            reason: CallStateReason
        ) => void
    ): number;
    connect_after(
        signal: "remote-members-changed",
        callback: (
            _source: this,
            updates: GLib.HashTable<Contact, number>,
            removed: Contact[],
            reason: CallStateReason
        ) => void
    ): number;
    emit(
        signal: "remote-members-changed",
        updates: GLib.HashTable<Contact, number>,
        removed: Contact[],
        reason: CallStateReason
    ): void;

    // Members

    get_local_sending_state(): SendingState;
    get_remote_members(): GLib.HashTable<Contact, number>;
    request_receiving_async(contact: Contact, receive: boolean): Promise<boolean>;
    request_receiving_async(contact: Contact, receive: boolean, callback: Gio.AsyncReadyCallback<this> | null): void;
    request_receiving_async(
        contact: Contact,
        receive: boolean,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    request_receiving_finish(result: Gio.AsyncResult): boolean;
    set_sending_async(send: boolean): Promise<boolean>;
    set_sending_async(send: boolean, callback: Gio.AsyncReadyCallback<this> | null): void;
    set_sending_async(send: boolean, callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    set_sending_finish(result: Gio.AsyncResult): boolean;
    static get_feature_quark_core(): GLib.Quark;
    static init_known_interfaces(): void;
}
export module Capabilities {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        channel_classes_variant: GLib.Variant;
        channelClassesVariant: GLib.Variant;
        contact_specific: boolean;
        contactSpecific: boolean;
    }
}
export class Capabilities extends GObject.Object {
    static $gtype: GObject.GType<Capabilities>;

    constructor(properties?: Partial<Capabilities.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Capabilities.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get channel_classes_variant(): GLib.Variant;
    get channelClassesVariant(): GLib.Variant;
    get contact_specific(): boolean;
    get contactSpecific(): boolean;

    // Members

    dup_channel_classes_variant(): GLib.Variant;
    get_channel_classes(): GLib.HashTable[];
    is_specific_to_contact(): boolean;
    supports_audio_call(handle_type: HandleType): boolean;
    supports_audio_video_call(handle_type: HandleType): boolean;
    supports_contact_search(): [boolean, boolean, boolean];
    supports_dbus_tubes(handle_type: HandleType, service_name: string): boolean;
    supports_file_transfer(): boolean;
    supports_file_transfer_description(): boolean;
    supports_file_transfer_initial_offset(): boolean;
    supports_file_transfer_timestamp(): boolean;
    supports_file_transfer_uri(): boolean;
    supports_room_list(): [boolean, boolean];
    supports_sms(): boolean;
    supports_stream_tubes(handle_type: HandleType, service: string): boolean;
    supports_text_chatrooms(): boolean;
    supports_text_chats(): boolean;
}
export module Channel {
    export interface ConstructorProperties extends Proxy.ConstructorProperties {
        [key: string]: any;
        channel_ready: boolean;
        channelReady: boolean;
        connection: Connection;
        group_flags: number;
        groupFlags: number;
        group_self_contact: Contact;
        groupSelfContact: Contact;
        group_self_handle: number;
        groupSelfHandle: number;
        identifier: string;
        initiator_contact: Contact;
        initiatorContact: Contact;
        initiator_handle: number;
        initiatorHandle: number;
        initiator_identifier: string;
        initiatorIdentifier: string;
        password_needed: boolean;
        passwordNeeded: boolean;
        requested: boolean;
        target_contact: Contact;
        targetContact: Contact;
    }
}
export class Channel extends Proxy {
    static $gtype: GObject.GType<Channel>;

    constructor(properties?: Partial<Channel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Channel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get channel_ready(): boolean;
    get channelReady(): boolean;
    get connection(): Connection;
    get group_flags(): number;
    get groupFlags(): number;
    get group_self_contact(): Contact;
    get groupSelfContact(): Contact;
    get group_self_handle(): number;
    get groupSelfHandle(): number;
    get identifier(): string;
    get initiator_contact(): Contact;
    get initiatorContact(): Contact;
    get initiator_handle(): number;
    get initiatorHandle(): number;
    get initiator_identifier(): string;
    get initiatorIdentifier(): string;
    get password_needed(): boolean;
    get passwordNeeded(): boolean;
    get requested(): boolean;
    get target_contact(): Contact;
    get targetContact(): Contact;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "chat-state-changed", callback: (_source: this, contact: number, state: number) => void): number;
    connect_after(
        signal: "chat-state-changed",
        callback: (_source: this, contact: number, state: number) => void
    ): number;
    emit(signal: "chat-state-changed", contact: number, state: number): void;
    connect(
        signal: "group-contacts-changed",
        callback: (
            _source: this,
            added: Contact[],
            removed: Contact[],
            local_pending: Contact[],
            remote_pending: Contact[],
            actor: Contact,
            details: GLib.HashTable<string, GObject.Value>
        ) => void
    ): number;
    connect_after(
        signal: "group-contacts-changed",
        callback: (
            _source: this,
            added: Contact[],
            removed: Contact[],
            local_pending: Contact[],
            remote_pending: Contact[],
            actor: Contact,
            details: GLib.HashTable<string, GObject.Value>
        ) => void
    ): number;
    emit(
        signal: "group-contacts-changed",
        added: Contact[],
        removed: Contact[],
        local_pending: Contact[],
        remote_pending: Contact[],
        actor: Contact,
        details: GLib.HashTable<string, GObject.Value>
    ): void;
    connect(signal: "group-flags-changed", callback: (_source: this, added: number, removed: number) => void): number;
    connect_after(
        signal: "group-flags-changed",
        callback: (_source: this, added: number, removed: number) => void
    ): number;
    emit(signal: "group-flags-changed", added: number, removed: number): void;
    connect(
        signal: "group-members-changed",
        callback: (
            _source: this,
            message: string,
            added: unknown,
            removed: unknown,
            local_pending: unknown,
            remote_pending: unknown,
            actor: number,
            reason: number
        ) => void
    ): number;
    connect_after(
        signal: "group-members-changed",
        callback: (
            _source: this,
            message: string,
            added: unknown,
            removed: unknown,
            local_pending: unknown,
            remote_pending: unknown,
            actor: number,
            reason: number
        ) => void
    ): number;
    emit(
        signal: "group-members-changed",
        message: string,
        added: unknown,
        removed: unknown,
        local_pending: unknown,
        remote_pending: unknown,
        actor: number,
        reason: number
    ): void;
    connect(
        signal: "group-members-changed-detailed",
        callback: (
            _source: this,
            added: number[],
            removed: number[],
            local_pending: number[],
            remote_pending: number[],
            details: GLib.HashTable<string, GObject.Value>
        ) => void
    ): number;
    connect_after(
        signal: "group-members-changed-detailed",
        callback: (
            _source: this,
            added: number[],
            removed: number[],
            local_pending: number[],
            remote_pending: number[],
            details: GLib.HashTable<string, GObject.Value>
        ) => void
    ): number;
    emit(
        signal: "group-members-changed-detailed",
        added: number[],
        removed: number[],
        local_pending: number[],
        remote_pending: number[],
        details: GLib.HashTable<string, GObject.Value>
    ): void;

    // Constructors

    static ["new"](
        conn: Connection,
        object_path: string,
        optional_channel_type: string,
        optional_handle_type: HandleType,
        optional_handle: Handle
    ): Channel;
    static new_from_properties(
        conn: Connection,
        object_path: string,
        immutable_properties: GLib.HashTable<string, GObject.Value>
    ): Channel;

    // Members

    borrow_connection(): Connection;
    borrow_immutable_properties(): GLib.HashTable<string, GObject.Value>;
    close_async(): Promise<boolean>;
    close_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    close_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    close_finish(result: Gio.AsyncResult): boolean;
    destroy_async(): Promise<boolean>;
    destroy_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    destroy_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    destroy_finish(result: Gio.AsyncResult): boolean;
    dup_immutable_properties(): GLib.Variant;
    get_channel_type(): string;
    get_channel_type_id(): GLib.Quark;
    get_chat_state(contact: Handle): ChannelChatState;
    get_connection(): Connection;
    get_handle(): [Handle, HandleType];
    get_identifier(): string;
    get_initiator_contact(): Contact;
    get_requested(): boolean;
    get_target_contact(): Contact;
    group_dup_local_pending_contacts(): Contact[];
    group_dup_members_contacts(): Contact[];
    group_dup_remote_pending_contacts(): Contact[];
    group_get_contact_owner(contact: Contact): Contact;
    group_get_flags(): ChannelGroupFlags;
    group_get_handle_owner(handle: Handle): Handle;
    group_get_local_pending(): Intset;
    group_get_local_pending_contact_info(
        local_pending: Contact
    ): [boolean, Contact | null, ChannelGroupChangeReason | null, string | null];
    group_get_local_pending_info(
        local_pending: Handle
    ): [boolean, Handle | null, ChannelGroupChangeReason | null, string | null];
    group_get_members(): Intset;
    group_get_remote_pending(): Intset;
    group_get_self_contact(): Contact;
    group_get_self_handle(): Handle;
    join_async(message: string): Promise<boolean>;
    join_async(message: string, callback: Gio.AsyncReadyCallback<this> | null): void;
    join_async(message: string, callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    join_finish(result: Gio.AsyncResult): boolean;
    leave_async(reason: ChannelGroupChangeReason, message: string): Promise<boolean>;
    leave_async(reason: ChannelGroupChangeReason, message: string, callback: Gio.AsyncReadyCallback<this> | null): void;
    leave_async(
        reason: ChannelGroupChangeReason,
        message: string,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    leave_finish(result: Gio.AsyncResult): boolean;
    provide_password_async(password: string): Promise<boolean>;
    provide_password_async(password: string, callback: Gio.AsyncReadyCallback<this> | null): void;
    provide_password_async(password: string, callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    provide_password_finish(result: Gio.AsyncResult): boolean;
    static get_feature_quark_chat_states(): GLib.Quark;
    static get_feature_quark_contacts(): GLib.Quark;
    static get_feature_quark_core(): GLib.Quark;
    static get_feature_quark_group(): GLib.Quark;
    static get_feature_quark_password(): GLib.Quark;
    static init_known_interfaces(): void;
}
export module ChannelDispatchOperation {
    export interface ConstructorProperties extends Proxy.ConstructorProperties {
        [key: string]: any;
        account: Account;
        channels: any[];
        connection: Connection;
        possible_handlers: string[];
        possibleHandlers: string[];
    }
}
export class ChannelDispatchOperation extends Proxy {
    static $gtype: GObject.GType<ChannelDispatchOperation>;

    constructor(properties?: Partial<ChannelDispatchOperation.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ChannelDispatchOperation.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get account(): Account;
    get channels(): any[];
    get connection(): Connection;
    get possible_handlers(): string[];
    get possibleHandlers(): string[];

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "channel-lost",
        callback: (_source: this, channel: Channel, domain: number, code: number, message: string) => void
    ): number;
    connect_after(
        signal: "channel-lost",
        callback: (_source: this, channel: Channel, domain: number, code: number, message: string) => void
    ): number;
    emit(signal: "channel-lost", channel: Channel, domain: number, code: number, message: string): void;

    // Constructors

    static ["new"](
        bus_daemon: DBusDaemon,
        object_path: string,
        immutable_properties: GLib.HashTable<any, any>
    ): ChannelDispatchOperation;

    // Members

    claim_async(): Promise<boolean>;
    claim_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    claim_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    claim_finish(result: Gio.AsyncResult): boolean;
    claim_with_async(client: BaseClient): Promise<boolean>;
    claim_with_async(client: BaseClient, callback: Gio.AsyncReadyCallback<this> | null): void;
    claim_with_async(client: BaseClient, callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    claim_with_finish(result: Gio.AsyncResult): boolean;
    close_channels_async(): Promise<boolean>;
    close_channels_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    close_channels_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    close_channels_finish(result: Gio.AsyncResult): boolean;
    destroy_channels_async(): Promise<boolean>;
    destroy_channels_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    destroy_channels_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    destroy_channels_finish(result: Gio.AsyncResult): boolean;
    get_channels(): Channel[];
    handle_with_async(handler?: string | null): Promise<boolean>;
    handle_with_async(handler: string | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    handle_with_async(handler?: string | null, callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    handle_with_finish(result: Gio.AsyncResult): boolean;
    handle_with_time_async(handler: string | null, user_action_time: number): Promise<boolean>;
    handle_with_time_async(
        handler: string | null,
        user_action_time: number,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    handle_with_time_async(
        handler: string | null,
        user_action_time: number,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    handle_with_time_finish(result: Gio.AsyncResult): boolean;
    leave_channels_async(reason: ChannelGroupChangeReason, message: string): Promise<boolean>;
    leave_channels_async(
        reason: ChannelGroupChangeReason,
        message: string,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    leave_channels_async(
        reason: ChannelGroupChangeReason,
        message: string,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    leave_channels_finish(result: Gio.AsyncResult): boolean;
    static get_feature_quark_core(): GLib.Quark;
    static init_known_interfaces(): void;
}
export module ChannelDispatcher {
    export interface ConstructorProperties extends Proxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class ChannelDispatcher extends Proxy {
    static $gtype: GObject.GType<ChannelDispatcher>;

    constructor(properties?: Partial<ChannelDispatcher.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ChannelDispatcher.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](bus_daemon: DBusDaemon): ChannelDispatcher;

    // Members

    present_channel_async(channel: Channel, user_action_time: number): Promise<boolean>;
    present_channel_async(
        channel: Channel,
        user_action_time: number,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    present_channel_async(
        channel: Channel,
        user_action_time: number,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    present_channel_finish(result: Gio.AsyncResult): boolean;
    static init_known_interfaces(): void;
}
export module ChannelRequest {
    export interface ConstructorProperties extends Proxy.ConstructorProperties {
        [key: string]: any;
        account: Account;
        channel_factory: GObject.Object;
        channelFactory: GObject.Object;
        hints_vardict: GLib.Variant;
        hintsVardict: GLib.Variant;
        immutable_properties_vardict: GLib.Variant;
        immutablePropertiesVardict: GLib.Variant;
        preferred_handler: string;
        preferredHandler: string;
        user_action_time: number;
        userActionTime: number;
    }
}
export class ChannelRequest extends Proxy {
    static $gtype: GObject.GType<ChannelRequest>;

    constructor(properties?: Partial<ChannelRequest.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ChannelRequest.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get account(): Account;
    get channel_factory(): GObject.Object;
    set channel_factory(val: GObject.Object);
    get channelFactory(): GObject.Object;
    set channelFactory(val: GObject.Object);
    get hints_vardict(): GLib.Variant;
    get hintsVardict(): GLib.Variant;
    get immutable_properties_vardict(): GLib.Variant;
    get immutablePropertiesVardict(): GLib.Variant;
    get preferred_handler(): string;
    get preferredHandler(): string;
    get user_action_time(): number;
    get userActionTime(): number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "succeeded", callback: (_source: this) => void): number;
    connect_after(signal: "succeeded", callback: (_source: this) => void): number;
    emit(signal: "succeeded"): void;
    connect(
        signal: "succeeded-with-channel",
        callback: (_source: this, connection: Connection, channel: Channel) => void
    ): number;
    connect_after(
        signal: "succeeded-with-channel",
        callback: (_source: this, connection: Connection, channel: Channel) => void
    ): number;
    emit(signal: "succeeded-with-channel", connection: Connection, channel: Channel): void;

    // Constructors

    static ["new"](
        bus_daemon: DBusDaemon,
        object_path: string,
        immutable_properties: GLib.HashTable<any, any>
    ): ChannelRequest;

    // Members

    dup_hints(): GLib.Variant;
    dup_immutable_properties(): GLib.Variant;
    get_account(): Account;
    get_hints(): GLib.HashTable<any, any>;
    get_immutable_properties(): GLib.HashTable<any, any>;
    get_preferred_handler(): string;
    get_user_action_time(): number;
    set_channel_factory(factory: ClientChannelFactory): void;
    static init_known_interfaces(): void;
}
export module ClientMessage {
    export interface ConstructorProperties extends Message.ConstructorProperties {
        [key: string]: any;
    }
}
export class ClientMessage extends Message {
    static $gtype: GObject.GType<ClientMessage>;

    constructor(properties?: Partial<ClientMessage.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ClientMessage.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): ClientMessage;
    static new_text(type: ChannelTextMessageType, text: string): ClientMessage;
}
export module Connection {
    export interface ConstructorProperties extends Proxy.ConstructorProperties {
        [key: string]: any;
        balance: number;
        balance_currency: string;
        balanceCurrency: string;
        balance_scale: number;
        balanceScale: number;
        balance_uri: string;
        balanceUri: string;
        blocked_contacts: any[];
        blockedContacts: any[];
        can_change_contact_list: boolean;
        canChangeContactList: boolean;
        can_report_abusive: boolean;
        canReportAbusive: boolean;
        capabilities: Capabilities;
        cm_name: string;
        cmName: string;
        connection_manager_name: string;
        connectionManagerName: string;
        connection_ready: boolean;
        connectionReady: boolean;
        contact_groups: string[];
        contactGroups: string[];
        contact_list_persists: boolean;
        contactListPersists: boolean;
        contact_list_state: number;
        contactListState: number;
        disjoint_groups: boolean;
        disjointGroups: boolean;
        group_storage: number;
        groupStorage: number;
        protocol_name: string;
        protocolName: string;
        request_uses_message: boolean;
        requestUsesMessage: boolean;
        self_contact: Contact;
        selfContact: Contact;
        self_handle: number;
        selfHandle: number;
        status: number;
        status_reason: number;
        statusReason: number;
    }
}
export class Connection extends Proxy {
    static $gtype: GObject.GType<Connection>;

    constructor(properties?: Partial<Connection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Connection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get balance(): number;
    get balance_currency(): string;
    get balanceCurrency(): string;
    get balance_scale(): number;
    get balanceScale(): number;
    get balance_uri(): string;
    get balanceUri(): string;
    get blocked_contacts(): any[];
    get blockedContacts(): any[];
    get can_change_contact_list(): boolean;
    get canChangeContactList(): boolean;
    get can_report_abusive(): boolean;
    get canReportAbusive(): boolean;
    get capabilities(): Capabilities;
    get cm_name(): string;
    get cmName(): string;
    get connection_manager_name(): string;
    get connectionManagerName(): string;
    get connection_ready(): boolean;
    get connectionReady(): boolean;
    get contact_groups(): string[];
    get contactGroups(): string[];
    get contact_list_persists(): boolean;
    get contactListPersists(): boolean;
    get contact_list_state(): number;
    get contactListState(): number;
    get disjoint_groups(): boolean;
    get disjointGroups(): boolean;
    get group_storage(): number;
    get groupStorage(): number;
    get protocol_name(): string;
    get protocolName(): string;
    get request_uses_message(): boolean;
    get requestUsesMessage(): boolean;
    get self_contact(): Contact;
    get selfContact(): Contact;
    get self_handle(): number;
    get selfHandle(): number;
    get status(): number;
    get status_reason(): number;
    get statusReason(): number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "balance-changed",
        callback: (_source: this, balance: number, balance_scale: number, balance_currency: string) => void
    ): number;
    connect_after(
        signal: "balance-changed",
        callback: (_source: this, balance: number, balance_scale: number, balance_currency: string) => void
    ): number;
    emit(signal: "balance-changed", balance: number, balance_scale: number, balance_currency: string): void;
    connect(
        signal: "blocked-contacts-changed",
        callback: (_source: this, added: Contact[], removed: Contact[]) => void
    ): number;
    connect_after(
        signal: "blocked-contacts-changed",
        callback: (_source: this, added: Contact[], removed: Contact[]) => void
    ): number;
    emit(signal: "blocked-contacts-changed", added: Contact[], removed: Contact[]): void;
    connect(
        signal: "contact-list-changed",
        callback: (_source: this, added: Contact[], removed: Contact[]) => void
    ): number;
    connect_after(
        signal: "contact-list-changed",
        callback: (_source: this, added: Contact[], removed: Contact[]) => void
    ): number;
    emit(signal: "contact-list-changed", added: Contact[], removed: Contact[]): void;
    connect(signal: "group-renamed", callback: (_source: this, old_name: string, new_name: string) => void): number;
    connect_after(
        signal: "group-renamed",
        callback: (_source: this, old_name: string, new_name: string) => void
    ): number;
    emit(signal: "group-renamed", old_name: string, new_name: string): void;
    connect(signal: "groups-created", callback: (_source: this, added: string[]) => void): number;
    connect_after(signal: "groups-created", callback: (_source: this, added: string[]) => void): number;
    emit(signal: "groups-created", added: string[]): void;
    connect(signal: "groups-removed", callback: (_source: this, added: string[]) => void): number;
    connect_after(signal: "groups-removed", callback: (_source: this, added: string[]) => void): number;
    emit(signal: "groups-removed", added: string[]): void;

    // Constructors

    static ["new"](dbus: DBusDaemon, bus_name?: string | null, object_path?: string | null): Connection;

    // Members

    add_client_interest(interested_in: string): void;
    add_to_group_async(group: string, contacts: Contact[]): Promise<boolean>;
    add_to_group_async(group: string, contacts: Contact[], callback: Gio.AsyncReadyCallback<this> | null): void;
    add_to_group_async(
        group: string,
        contacts: Contact[],
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    add_to_group_finish(result: Gio.AsyncResult): boolean;
    authorize_publication_async(contacts: Contact[]): Promise<boolean>;
    authorize_publication_async(contacts: Contact[], callback: Gio.AsyncReadyCallback<this> | null): void;
    authorize_publication_async(
        contacts: Contact[],
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    authorize_publication_finish(result: Gio.AsyncResult): boolean;
    bind_connection_status_to_property(target: any | null, target_property: string, invert: boolean): GObject.Binding;
    block_contacts_async(contacts: Contact[], report_abusive: boolean): Promise<boolean>;
    block_contacts_async(
        contacts: Contact[],
        report_abusive: boolean,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    block_contacts_async(
        contacts: Contact[],
        report_abusive: boolean,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    block_contacts_finish(result: Gio.AsyncResult): boolean;
    can_set_contact_alias(): boolean;
    disconnect_async(): Promise<boolean>;
    disconnect_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    disconnect_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    disconnect_finish(result: Gio.AsyncResult): boolean;
    dup_contact_by_id_async(id: string, features?: ContactFeature[] | null): Promise<Contact>;
    dup_contact_by_id_async(
        id: string,
        features: ContactFeature[] | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    dup_contact_by_id_async(
        id: string,
        features?: ContactFeature[] | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Contact> | void;
    dup_contact_by_id_finish(result: Gio.AsyncResult): Contact;
    dup_contact_if_possible(handle: Handle, identifier: string): Contact;
    dup_contact_info_supported_fields(): ContactInfoFieldSpec[];
    dup_contact_list(): Contact[];
    dup_detailed_error_vardict(): [string | null, GLib.Variant | null];
    get_account(): Account;
    get_avatar_requirements(): AvatarRequirements;
    get_balance(): [boolean, number, number, string];
    get_balance_uri(): string;
    get_blocked_contacts(): Contact[];
    get_can_change_contact_list(): boolean;
    get_capabilities(): Capabilities;
    get_cm_name(): string;
    get_connection_manager_name(): string;
    get_contact_attributes(
        timeout_ms: number,
        handles: Handle[],
        interfaces: string,
        hold: boolean,
        callback: GObject.Callback,
        weak_object: GObject.Object
    ): void;
    get_contact_groups(): string[];
    get_contact_info_flags(): ContactInfoFlags;
    get_contact_info_supported_fields(): ContactInfoFieldSpec[];
    get_contact_list_attributes(
        timeout_ms: number,
        interfaces: string,
        hold: boolean,
        callback: GObject.Callback,
        weak_object: GObject.Object
    ): void;
    get_contact_list_persists(): boolean;
    get_contact_list_state(): ContactListState;
    get_contacts_by_handle(
        handles: number[],
        features: number[] | null,
        callback: ConnectionContactsByHandleCb,
        weak_object?: GObject.Object | null
    ): void;
    get_contacts_by_id(
        ids: string[],
        features: ContactFeature[] | null,
        callback: ConnectionContactsByIdCb,
        weak_object?: GObject.Object | null
    ): void;
    get_detailed_error(): [string | null, GLib.HashTable<string, GObject.Value> | null];
    get_disjoint_groups(): boolean;
    get_group_storage(): ContactMetadataStorageType;
    get_protocol_name(): string;
    get_request_uses_message(): boolean;
    get_self_contact(): Contact;
    get_self_handle(): Handle;
    get_status(): [ConnectionStatus, ConnectionStatusReason];
    has_immortal_handles(): boolean;
    hold_handles(
        timeout_ms: number,
        handle_type: HandleType,
        handles: Handle[],
        callback: ConnectionHoldHandlesCb,
        weak_object: GObject.Object
    ): void;
    parse_object_path(): [boolean, string, string];
    refresh_contact_info(contacts: Contact[]): void;
    remove_contacts_async(contacts: Contact[]): Promise<boolean>;
    remove_contacts_async(contacts: Contact[], callback: Gio.AsyncReadyCallback<this> | null): void;
    remove_contacts_async(contacts: Contact[], callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    remove_contacts_finish(result: Gio.AsyncResult): boolean;
    remove_from_group_async(group: string, contacts: Contact[]): Promise<boolean>;
    remove_from_group_async(group: string, contacts: Contact[], callback: Gio.AsyncReadyCallback<this> | null): void;
    remove_from_group_async(
        group: string,
        contacts: Contact[],
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    remove_from_group_finish(result: Gio.AsyncResult): boolean;
    remove_group_async(group: string): Promise<boolean>;
    remove_group_async(group: string, callback: Gio.AsyncReadyCallback<this> | null): void;
    remove_group_async(group: string, callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    remove_group_finish(result: Gio.AsyncResult): boolean;
    rename_group_async(old_name: string, new_name: string): Promise<boolean>;
    rename_group_async(old_name: string, new_name: string, callback: Gio.AsyncReadyCallback<this> | null): void;
    rename_group_async(
        old_name: string,
        new_name: string,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    rename_group_finish(result: Gio.AsyncResult): boolean;
    request_handles(
        timeout_ms: number,
        handle_type: HandleType,
        ids: string[],
        callback: ConnectionRequestHandlesCb,
        weak_object: GObject.Object
    ): void;
    request_subscription_async(contacts: Contact[], message: string): Promise<boolean>;
    request_subscription_async(
        contacts: Contact[],
        message: string,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    request_subscription_async(
        contacts: Contact[],
        message: string,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    request_subscription_finish(result: Gio.AsyncResult): boolean;
    set_contact_info_async(info: ContactInfoField[]): Promise<boolean>;
    set_contact_info_async(info: ContactInfoField[], callback: Gio.AsyncReadyCallback<this> | null): void;
    set_contact_info_async(
        info: ContactInfoField[],
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_contact_info_finish(result: Gio.AsyncResult): boolean;
    set_group_members_async(group: string, contacts: Contact[]): Promise<boolean>;
    set_group_members_async(group: string, contacts: Contact[], callback: Gio.AsyncReadyCallback<this> | null): void;
    set_group_members_async(
        group: string,
        contacts: Contact[],
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_group_members_finish(result: Gio.AsyncResult): boolean;
    unblock_contacts_async(contacts: Contact[]): Promise<boolean>;
    unblock_contacts_async(contacts: Contact[], callback: Gio.AsyncReadyCallback<this> | null): void;
    unblock_contacts_async(
        contacts: Contact[],
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    unblock_contacts_finish(result: Gio.AsyncResult): boolean;
    unpublish_async(contacts: Contact[]): Promise<boolean>;
    unpublish_async(contacts: Contact[], callback: Gio.AsyncReadyCallback<this> | null): void;
    unpublish_async(contacts: Contact[], callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    unpublish_finish(result: Gio.AsyncResult): boolean;
    unref_handles(handle_type: HandleType, handles: Handle[]): void;
    unsubscribe_async(contacts: Contact[]): Promise<boolean>;
    unsubscribe_async(contacts: Contact[], callback: Gio.AsyncReadyCallback<this> | null): void;
    unsubscribe_async(contacts: Contact[], callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    unsubscribe_finish(result: Gio.AsyncResult): boolean;
    upgrade_contacts(
        contacts: Contact[],
        features: ContactFeature[],
        callback: ConnectionUpgradeContactsCb,
        weak_object?: GObject.Object | null
    ): void;
    upgrade_contacts_async(contacts: Contact[], features: ContactFeature[]): Promise<[Contact[] | null]>;
    upgrade_contacts_async(
        contacts: Contact[],
        features: ContactFeature[],
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    upgrade_contacts_async(
        contacts: Contact[],
        features: ContactFeature[],
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[Contact[] | null]> | void;
    upgrade_contacts_finish(result: Gio.AsyncResult): [boolean, Contact[] | null];
    static get_feature_quark_aliasing(): GLib.Quark;
    static get_feature_quark_avatar_requirements(): GLib.Quark;
    static get_feature_quark_balance(): GLib.Quark;
    static get_feature_quark_capabilities(): GLib.Quark;
    static get_feature_quark_connected(): GLib.Quark;
    static get_feature_quark_contact_blocking(): GLib.Quark;
    static get_feature_quark_contact_groups(): GLib.Quark;
    static get_feature_quark_contact_info(): GLib.Quark;
    static get_feature_quark_contact_list(): GLib.Quark;
    static get_feature_quark_contact_list_properties(): GLib.Quark;
    static get_feature_quark_core(): GLib.Quark;
    static init_known_interfaces(): void;
    static presence_type_cmp_availability(p1: ConnectionPresenceType, p2: ConnectionPresenceType): number;
}
export module ConnectionManager {
    export interface ConstructorProperties extends Proxy.ConstructorProperties {
        [key: string]: any;
        always_introspect: boolean;
        alwaysIntrospect: boolean;
        cm_name: string;
        cmName: string;
        connection_manager: string;
        connectionManager: string;
        info_source: number;
        infoSource: number;
        manager_file: string;
        managerFile: string;
    }
}
export class ConnectionManager extends Proxy {
    static $gtype: GObject.GType<ConnectionManager>;

    constructor(properties?: Partial<ConnectionManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ConnectionManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get always_introspect(): boolean;
    set always_introspect(val: boolean);
    get alwaysIntrospect(): boolean;
    set alwaysIntrospect(val: boolean);
    get cm_name(): string;
    get cmName(): string;
    get connection_manager(): string;
    get connectionManager(): string;
    get info_source(): number;
    get infoSource(): number;
    get manager_file(): string;
    set manager_file(val: string);
    get managerFile(): string;
    set managerFile(val: string);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activated", callback: (_source: this) => void): number;
    connect_after(signal: "activated", callback: (_source: this) => void): number;
    emit(signal: "activated"): void;
    connect(signal: "exited", callback: (_source: this) => void): number;
    connect_after(signal: "exited", callback: (_source: this) => void): number;
    emit(signal: "exited"): void;
    connect(signal: "got-info", callback: (_source: this, source: number) => void): number;
    connect_after(signal: "got-info", callback: (_source: this, source: number) => void): number;
    emit(signal: "got-info", source: number): void;

    // Constructors

    static ["new"](dbus: DBusDaemon, name: string, manager_filename?: string | null): ConnectionManager;

    // Members

    dup_protocol_names(): string[];
    dup_protocols(): Protocol[];
    get_info_source(): CMInfoSource;
    get_name(): string;
    get_protocol(protocol: string): ConnectionManagerProtocol;
    get_protocol_object(protocol: string): Protocol;
    has_protocol(protocol: string): boolean;
    is_running(): boolean;
    static check_valid_name(name: string): boolean;
    static check_valid_protocol_name(name: string): boolean;
    static get_feature_quark_core(): GLib.Quark;
    static init_known_interfaces(): void;
}
export module Contact {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        alias: string;
        avatar_file: Gio.File;
        avatarFile: Gio.File;
        avatar_mime_type: string;
        avatarMimeType: string;
        avatar_token: string;
        avatarToken: string;
        capabilities: Capabilities;
        client_types: string[];
        clientTypes: string[];
        connection: Connection;
        contact_groups: string[];
        contactGroups: string[];
        contact_info: ContactInfoList;
        contactInfo: ContactInfoList;
        handle: number;
        identifier: string;
        is_blocked: boolean;
        isBlocked: boolean;
        location_vardict: GLib.Variant;
        locationVardict: GLib.Variant;
        presence_message: string;
        presenceMessage: string;
        presence_status: string;
        presenceStatus: string;
        presence_type: number;
        presenceType: number;
        publish_request: string;
        publishRequest: string;
        publish_state: number;
        publishState: number;
        subscribe_state: number;
        subscribeState: number;
    }
}
export class Contact extends GObject.Object {
    static $gtype: GObject.GType<Contact>;

    constructor(properties?: Partial<Contact.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Contact.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get alias(): string;
    get avatar_file(): Gio.File;
    get avatarFile(): Gio.File;
    get avatar_mime_type(): string;
    get avatarMimeType(): string;
    get avatar_token(): string;
    get avatarToken(): string;
    get capabilities(): Capabilities;
    get client_types(): string[];
    get clientTypes(): string[];
    get connection(): Connection;
    get contact_groups(): string[];
    get contactGroups(): string[];
    get contact_info(): ContactInfoList;
    get contactInfo(): ContactInfoList;
    get handle(): number;
    get identifier(): string;
    get is_blocked(): boolean;
    get isBlocked(): boolean;
    get location_vardict(): GLib.Variant;
    get locationVardict(): GLib.Variant;
    get presence_message(): string;
    get presenceMessage(): string;
    get presence_status(): string;
    get presenceStatus(): string;
    get presence_type(): number;
    get presenceType(): number;
    get publish_request(): string;
    get publishRequest(): string;
    get publish_state(): number;
    get publishState(): number;
    get subscribe_state(): number;
    get subscribeState(): number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "contact-groups-changed",
        callback: (_source: this, added: string[], removed: string[]) => void
    ): number;
    connect_after(
        signal: "contact-groups-changed",
        callback: (_source: this, added: string[], removed: string[]) => void
    ): number;
    emit(signal: "contact-groups-changed", added: string[], removed: string[]): void;
    connect(
        signal: "presence-changed",
        callback: (_source: this, type: number, status: string, message: string) => void
    ): number;
    connect_after(
        signal: "presence-changed",
        callback: (_source: this, type: number, status: string, message: string) => void
    ): number;
    emit(signal: "presence-changed", type: number, status: string, message: string): void;
    connect(
        signal: "subscription-states-changed",
        callback: (_source: this, subscribe: number, publish: number, publish_request: string) => void
    ): number;
    connect_after(
        signal: "subscription-states-changed",
        callback: (_source: this, subscribe: number, publish: number, publish_request: string) => void
    ): number;
    emit(signal: "subscription-states-changed", subscribe: number, publish: number, publish_request: string): void;

    // Members

    add_to_group_async(group: string): Promise<boolean>;
    add_to_group_async(group: string, callback: Gio.AsyncReadyCallback<this> | null): void;
    add_to_group_async(group: string, callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    add_to_group_finish(result: Gio.AsyncResult): boolean;
    authorize_publication_async(): Promise<boolean>;
    authorize_publication_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    authorize_publication_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    authorize_publication_finish(result: Gio.AsyncResult): boolean;
    block_async(report_abusive: boolean): Promise<boolean>;
    block_async(report_abusive: boolean, callback: Gio.AsyncReadyCallback<this> | null): void;
    block_async(report_abusive: boolean, callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    block_finish(result: Gio.AsyncResult): boolean;
    dup_contact_info(): ContactInfoField[];
    dup_location(): GLib.Variant;
    get_account(): Account;
    get_alias(): string;
    get_avatar_file(): Gio.File;
    get_avatar_mime_type(): string;
    get_avatar_token(): string;
    get_capabilities(): Capabilities;
    get_client_types(): string[];
    get_connection(): Connection;
    get_contact_groups(): string[];
    get_contact_info(): ContactInfoField[];
    get_handle(): Handle;
    get_identifier(): string;
    get_location(): GLib.HashTable<string, GObject.Value>;
    get_presence_message(): string;
    get_presence_status(): string;
    get_presence_type(): ConnectionPresenceType;
    get_publish_request(): string;
    get_publish_state(): SubscriptionState;
    get_subscribe_state(): SubscriptionState;
    has_feature(feature: ContactFeature): boolean;
    remove_async(): Promise<boolean>;
    remove_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    remove_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    remove_finish(result: Gio.AsyncResult): boolean;
    remove_from_group_async(group: string): Promise<boolean>;
    remove_from_group_async(group: string, callback: Gio.AsyncReadyCallback<this> | null): void;
    remove_from_group_async(group: string, callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    remove_from_group_finish(result: Gio.AsyncResult): boolean;
    request_contact_info_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    request_contact_info_async(
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    request_contact_info_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    request_contact_info_finish(result: Gio.AsyncResult): boolean;
    request_subscription_async(message: string): Promise<boolean>;
    request_subscription_async(message: string, callback: Gio.AsyncReadyCallback<this> | null): void;
    request_subscription_async(
        message: string,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    request_subscription_finish(result: Gio.AsyncResult): boolean;
    set_contact_groups_async(groups?: string[] | null): Promise<boolean>;
    set_contact_groups_async(groups: string[] | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    set_contact_groups_async(
        groups?: string[] | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_contact_groups_finish(result: Gio.AsyncResult): boolean;
    unblock_async(): Promise<boolean>;
    unblock_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    unblock_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    unblock_finish(result: Gio.AsyncResult): boolean;
    unpublish_async(): Promise<boolean>;
    unpublish_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    unpublish_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    unpublish_finish(result: Gio.AsyncResult): boolean;
    unsubscribe_async(): Promise<boolean>;
    unsubscribe_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    unsubscribe_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    unsubscribe_finish(result: Gio.AsyncResult): boolean;
}
export module ContactSearch {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        account: Account;
        limit: number;
        server: string;
        state: number;
    }
}
export class ContactSearch extends GObject.Object implements Gio.AsyncInitable<ContactSearch> {
    static $gtype: GObject.GType<ContactSearch>;

    constructor(properties?: Partial<ContactSearch.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ContactSearch.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get account(): Account;
    get limit(): number;
    set limit(val: number);
    get server(): string;
    get state(): number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "search-results-received",
        callback: (_source: this, results: ContactSearchResult[]) => void
    ): number;
    connect_after(
        signal: "search-results-received",
        callback: (_source: this, results: ContactSearchResult[]) => void
    ): number;
    emit(signal: "search-results-received", results: ContactSearchResult[]): void;

    // Constructors

    static new_finish(result: Gio.AsyncResult): ContactSearch;
    // Conflicted with Gio.AsyncInitable.new_finish
    static new_finish(...args: never[]): any;

    // Members

    get_account(): Account;
    get_limit(): number;
    get_search_keys(): string[];
    get_server(): string;
    reset_async(server: string, limit: number): Promise<string[]>;
    reset_async(server: string, limit: number, callback: Gio.AsyncReadyCallback<this> | null): void;
    reset_async(
        server: string,
        limit: number,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<string[]> | void;
    reset_finish(result: Gio.AsyncResult): string[];
    start(criteria: GLib.HashTable<string, string>): void;
    static new_async(account: Account, server: string, limit: number): Promise<ContactSearch>;
    static new_async(
        account: Account,
        server: string,
        limit: number,
        callback: Gio.AsyncReadyCallback<ContactSearch> | null
    ): void;
    static new_async(
        account: Account,
        server: string,
        limit: number,
        callback?: Gio.AsyncReadyCallback<ContactSearch> | null
    ): Promise<ContactSearch> | void;

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
    new_finish(res: Gio.AsyncResult): ContactSearch;
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
export module ContactSearchResult {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        identifier: string;
    }
}
export class ContactSearchResult extends GObject.Object {
    static $gtype: GObject.GType<ContactSearchResult>;

    constructor(properties?: Partial<ContactSearchResult.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ContactSearchResult.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get identifier(): string;

    // Members

    dup_fields(): ContactInfoField[];
    get_field(field: string): ContactInfoField;
    get_fields(): ContactInfoField[];
    get_identifier(): string;
}
export module DBusDaemon {
    export interface ConstructorProperties extends Proxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class DBusDaemon extends Proxy {
    static $gtype: GObject.GType<DBusDaemon>;

    constructor(properties?: Partial<DBusDaemon.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DBusDaemon.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_unique_name(): string;
    list_activatable_names(timeout_ms: number, callback: DBusDaemonListNamesCb, weak_object: GObject.Object): void;
    list_names(timeout_ms: number, callback: DBusDaemonListNamesCb, weak_object: GObject.Object): void;
    register_object(object_path: string, object: GObject.Object): void;
    release_name(well_known_name: string): boolean;
    request_name(well_known_name: string, idempotent: boolean): boolean;
    unregister_object(object: GObject.Object): void;
    watch_name_owner(name: string, callback: DBusDaemonNameOwnerChangedCb): void;
    static dup(): DBusDaemon;
    static init_known_interfaces(): void;
}
export module DBusTubeChannel {
    export interface ConstructorProperties extends Channel.ConstructorProperties {
        [key: string]: any;
        parameters_vardict: GLib.Variant;
        parametersVardict: GLib.Variant;
        service_name: string;
        serviceName: string;
    }
}
export class DBusTubeChannel extends Channel {
    static $gtype: GObject.GType<DBusTubeChannel>;

    constructor(properties?: Partial<DBusTubeChannel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DBusTubeChannel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get parameters_vardict(): GLib.Variant;
    get parametersVardict(): GLib.Variant;
    get service_name(): string;
    get serviceName(): string;

    // Members

    accept_async(): Promise<Gio.DBusConnection>;
    accept_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    accept_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<Gio.DBusConnection> | void;
    accept_finish(result: Gio.AsyncResult): Gio.DBusConnection;
    dup_parameters_vardict(): GLib.Variant;
    get_service_name(): string;
    offer_async(params?: GLib.HashTable<any, any> | null): Promise<Gio.DBusConnection>;
    offer_async(params: GLib.HashTable<any, any> | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    offer_async(
        params?: GLib.HashTable<any, any> | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gio.DBusConnection> | void;
    offer_finish(result: Gio.AsyncResult): Gio.DBusConnection;
    static feature_quark_core(): GLib.Quark;
}
export module DebugClient {
    export interface ConstructorProperties extends Proxy.ConstructorProperties {
        [key: string]: any;
        enabled: boolean;
    }
}
export class DebugClient extends Proxy {
    static $gtype: GObject.GType<DebugClient>;

    constructor(properties?: Partial<DebugClient.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DebugClient.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get enabled(): boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "new-debug-message", callback: (_source: this, message: DebugMessage) => void): number;
    connect_after(signal: "new-debug-message", callback: (_source: this, message: DebugMessage) => void): number;
    emit(signal: "new-debug-message", message: DebugMessage): void;

    // Constructors

    static ["new"](dbus: DBusDaemon, unique_name: string): DebugClient;

    // Members

    get_messages_async(): Promise<DebugMessage[]>;
    get_messages_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    get_messages_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<DebugMessage[]> | void;
    get_messages_finish(result: Gio.AsyncResult): DebugMessage[];
    is_enabled(): boolean;
    set_enabled_async(enabled: boolean): Promise<boolean>;
    set_enabled_async(enabled: boolean, callback: Gio.AsyncReadyCallback<this> | null): void;
    set_enabled_async(enabled: boolean, callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    set_enabled_finish(result: Gio.AsyncResult): boolean;
    static get_feature_quark_core(): GLib.Quark;
    static init_known_interfaces(): void;
}
export module DebugMessage {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        category: string;
        domain: string;
        level: number;
        message: string;
        time: GLib.DateTime;
    }
}
export class DebugMessage extends GObject.Object {
    static $gtype: GObject.GType<DebugMessage>;

    constructor(properties?: Partial<DebugMessage.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DebugMessage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get category(): string;
    get domain(): string;
    get level(): number;
    get message(): string;
    get time(): GLib.DateTime;

    // Members

    get_category(): string;
    get_domain(): string;
    get_level(): GLib.LogLevelFlags;
    get_message(): string;
    get_time(): GLib.DateTime;
}
export module FileTransferChannel {
    export interface ConstructorProperties extends Channel.ConstructorProperties {
        [key: string]: any;
        date: GLib.DateTime;
        description: string;
        file: Gio.File;
        filename: string;
        initial_offset: number;
        initialOffset: number;
        mime_type: string;
        mimeType: string;
        service_name: string;
        serviceName: string;
        size: number;
        state: number;
        transferred_bytes: number;
        transferredBytes: number;
    }
}
export class FileTransferChannel extends Channel {
    static $gtype: GObject.GType<FileTransferChannel>;

    constructor(properties?: Partial<FileTransferChannel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileTransferChannel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get date(): GLib.DateTime;
    get description(): string;
    get file(): Gio.File;
    get filename(): string;
    get initial_offset(): number;
    get initialOffset(): number;
    get mime_type(): string;
    get mimeType(): string;
    get service_name(): string;
    get serviceName(): string;
    get size(): number;
    get state(): number;
    get transferred_bytes(): number;
    get transferredBytes(): number;

    // Constructors

    static ["new"](
        conn: Connection,
        object_path: string,
        immutable_properties: GLib.HashTable<string, GObject.Value>
    ): FileTransferChannel;
    // Conflicted with TelepathyGLib.Channel.new
    static ["new"](...args: never[]): any;

    // Members

    accept_file_async(file: Gio.File, offset: number): Promise<boolean>;
    accept_file_async(file: Gio.File, offset: number, callback: Gio.AsyncReadyCallback<this> | null): void;
    accept_file_async(
        file: Gio.File,
        offset: number,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    accept_file_finish(result: Gio.AsyncResult): boolean;
    get_date(): GLib.DateTime;
    get_description(): string;
    get_filename(): string;
    get_metadata(): GLib.HashTable;
    get_mime_type(): string;
    get_service_name(): string;
    get_size(): number;
    get_state(): [FileTransferState, FileTransferStateChangeReason];
    get_transferred_bytes(): number;
    provide_file_async(file: Gio.File): Promise<boolean>;
    provide_file_async(file: Gio.File, callback: Gio.AsyncReadyCallback<this> | null): void;
    provide_file_async(file: Gio.File, callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    provide_file_finish(result: Gio.AsyncResult): boolean;
    static get_feature_quark_core(): GLib.Quark;
}
export module HandleChannelsContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        account: Account;
        channels: any[];
        connection: Connection;
        requests_satisfied: any[];
        requestsSatisfied: any[];
        user_action_time: number;
        userActionTime: number;
    }
}
export class HandleChannelsContext extends GObject.Object {
    static $gtype: GObject.GType<HandleChannelsContext>;

    constructor(properties?: Partial<HandleChannelsContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HandleChannelsContext.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get account(): Account;
    get channels(): any[];
    get connection(): Connection;
    get requests_satisfied(): any[];
    get requestsSatisfied(): any[];
    get user_action_time(): number;
    get userActionTime(): number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "done", callback: (_source: this) => void): number;
    connect_after(signal: "done", callback: (_source: this) => void): number;
    emit(signal: "done"): void;

    // Members

    accept(): void;
    delay(): void;
    fail(error: GLib.Error): void;
    get_handler_info(): GLib.HashTable<string, GObject.Value>;
    get_requests(): ChannelRequest[];
}
export module Message {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Message extends GObject.Object {
    static $gtype: GObject.GType<Message>;

    constructor(properties?: Partial<Message.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Message.ConstructorProperties>, ...args: any[]): void;

    // Members

    append_part(): number;
    count_parts(): number;
    delete_key(part: number, key: string): boolean;
    delete_part(part: number): void;
    destroy(): void;
    dup_part(part: number): GLib.Variant;
    get_message_type(): ChannelTextMessageType;
    get_pending_message_id(): [number, boolean];
    get_received_timestamp(): number;
    get_sent_timestamp(): number;
    get_specific_to_interface(): string;
    get_supersedes(): string;
    get_token(): string;
    is_delivery_report(): boolean;
    is_mutable(): boolean;
    is_rescued(): boolean;
    is_scrollback(): boolean;
    peek(part: number): GLib.HashTable<string, GObject.Value>;
    ref_handle(handle_type: HandleType, handle: Handle): void;
    set(part: number, key: string, source: GObject.Value | any): void;
    // Conflicted with GObject.Object.set
    set(...args: never[]): any;
    set_boolean(part: number, key: string, b: boolean): void;
    set_bytes(part: number, key: string, len: number, bytes?: any | null): void;
    set_handle(part: number, key: string, handle_type: HandleType, handle_or_0: Handle): void;
    set_int32(part: number, key: string, i: number): void;
    set_int64(part: number, key: string, i: number): void;
    set_string(part: number, key: string, s: string): void;
    set_uint32(part: number, key: string, u: number): void;
    set_uint64(part: number, key: string, u: number): void;
    set_variant(part: number, key: string, value: GLib.Variant): void;
    take_message(part: number, key: string, message: Message): void;
    to_text(): [string, ChannelTextMessageFlags];
}
export module ObserveChannelsContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        account: Account;
        channels: any[];
        connection: Connection;
        dispatch_operation: ChannelDispatchOperation;
        dispatchOperation: ChannelDispatchOperation;
        requests: any[];
    }
}
export class ObserveChannelsContext extends GObject.Object {
    static $gtype: GObject.GType<ObserveChannelsContext>;

    constructor(properties?: Partial<ObserveChannelsContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ObserveChannelsContext.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get account(): Account;
    get channels(): any[];
    get connection(): Connection;
    get dispatch_operation(): ChannelDispatchOperation;
    get dispatchOperation(): ChannelDispatchOperation;
    get requests(): any[];

    // Members

    accept(): void;
    delay(): void;
    fail(error: GLib.Error): void;
    get_requests(): ChannelRequest[];
    is_recovering(): boolean;
}
export module Protocol {
    export interface ConstructorProperties extends Proxy.ConstructorProperties {
        [key: string]: any;
        addressable_uri_schemes: string[];
        addressableUriSchemes: string[];
        addressable_vcard_fields: string[];
        addressableVcardFields: string[];
        authentication_types: string[];
        authenticationTypes: string[];
        avatar_requirements: any;
        avatarRequirements: any;
        capabilities: Capabilities;
        cm_name: string;
        cmName: string;
        english_name: string;
        englishName: string;
        icon_name: string;
        iconName: string;
        param_names: string[];
        paramNames: string[];
        protocol_name: string;
        protocolName: string;
        protocol_properties_vardict: GLib.Variant;
        protocolPropertiesVardict: GLib.Variant;
        vcard_field: string;
        vcardField: string;
    }
}
export class Protocol extends Proxy {
    static $gtype: GObject.GType<Protocol>;

    constructor(properties?: Partial<Protocol.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Protocol.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get addressable_uri_schemes(): string[];
    get addressableUriSchemes(): string[];
    get addressable_vcard_fields(): string[];
    get addressableVcardFields(): string[];
    get authentication_types(): string[];
    get authenticationTypes(): string[];
    get avatar_requirements(): any;
    get avatarRequirements(): any;
    get capabilities(): Capabilities;
    get cm_name(): string;
    get cmName(): string;
    get english_name(): string;
    get englishName(): string;
    get icon_name(): string;
    get iconName(): string;
    get param_names(): string[];
    get paramNames(): string[];
    get protocol_name(): string;
    get protocolName(): string;
    get protocol_properties_vardict(): GLib.Variant;
    get protocolPropertiesVardict(): GLib.Variant;
    get vcard_field(): string;
    get vcardField(): string;

    // Constructors

    static ["new"](
        dbus: DBusDaemon,
        cm_name: string,
        protocol_name: string,
        immutable_properties: GLib.HashTable<any, any>
    ): Protocol;
    static new_vardict(
        dbus: DBusDaemon,
        cm_name: string,
        protocol_name: string,
        immutable_properties: GLib.Variant
    ): Protocol;

    // Members

    can_register(): boolean;
    dup_immutable_properties(): GLib.Variant;
    dup_param(param: string): ConnectionManagerParam;
    dup_param_names(): string[];
    dup_params(): ConnectionManagerParam[];
    dup_presence_statuses(): PresenceStatusSpec[];
    get_addressable_uri_schemes(): string[];
    get_addressable_vcard_fields(): string[];
    get_authentication_types(): string[];
    get_avatar_requirements(): AvatarRequirements;
    get_capabilities(): Capabilities;
    get_cm_name(): string;
    get_english_name(): string;
    get_icon_name(): string;
    get_name(): string;
    get_param(param: string): ConnectionManagerParam;
    get_vcard_field(): string;
    has_param(param: string): boolean;
    identify_account_async(vardict: GLib.Variant, cancellable?: Gio.Cancellable | null): Promise<string>;
    identify_account_async(
        vardict: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    identify_account_async(
        vardict: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<string> | void;
    identify_account_finish(result: Gio.AsyncResult): string;
    normalize_contact_async(contact: string, cancellable?: Gio.Cancellable | null): Promise<string>;
    normalize_contact_async(
        contact: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    normalize_contact_async(
        contact: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<string> | void;
    normalize_contact_finish(result: Gio.AsyncResult): string;
    normalize_contact_uri_async(uri: string, cancellable?: Gio.Cancellable | null): Promise<string>;
    normalize_contact_uri_async(
        uri: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    normalize_contact_uri_async(
        uri: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<string> | void;
    normalize_contact_uri_finish(result: Gio.AsyncResult): string;
    normalize_vcard_address_async(field: string, value: string, cancellable?: Gio.Cancellable | null): Promise<string>;
    normalize_vcard_address_async(
        field: string,
        value: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    normalize_vcard_address_async(
        field: string,
        value: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<string> | void;
    normalize_vcard_address_finish(result: Gio.AsyncResult): string;
    static get_feature_quark_core(): GLib.Quark;
    static get_feature_quark_parameters(): GLib.Quark;
    static init_known_interfaces(): void;
}
export module Proxy {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        bus_name: string;
        busName: string;
        dbus_daemon: DBusDaemon;
        dbusDaemon: DBusDaemon;
        factory: SimpleClientFactory;
        interfaces: string[];
        object_path: string;
        objectPath: string;
    }
}
export class Proxy extends GObject.Object {
    static $gtype: GObject.GType<Proxy>;

    constructor(properties?: Partial<Proxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Proxy.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get bus_name(): string;
    get busName(): string;
    get dbus_daemon(): DBusDaemon;
    get dbusDaemon(): DBusDaemon;
    get factory(): SimpleClientFactory;
    get interfaces(): string[];
    get object_path(): string;
    get objectPath(): string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "interface-added", callback: (_source: this, id: number, proxy: unknown) => void): number;
    connect_after(signal: "interface-added", callback: (_source: this, id: number, proxy: unknown) => void): number;
    emit(signal: "interface-added", id: number, proxy: unknown): void;
    connect(
        signal: "invalidated",
        callback: (_source: this, domain: number, code: number, message: string) => void
    ): number;
    connect_after(
        signal: "invalidated",
        callback: (_source: this, domain: number, code: number, message: string) => void
    ): number;
    emit(signal: "invalidated", domain: number, code: number, message: string): void;

    // Members

    dbus_error_to_gerror(dbus_error: string, debug_message: string): void;
    get_bus_name(): string;
    get_dbus_daemon(): DBusDaemon;
    get_factory(): SimpleClientFactory;
    get_invalidated(): GLib.Error;
    get_object_path(): string;
    has_interface(iface: string): boolean;
    has_interface_by_id(iface: GLib.Quark): boolean;
    is_prepared(feature: GLib.Quark): boolean;
    prepare_async(features?: GLib.Quark[] | null): Promise<boolean>;
    prepare_async(features: GLib.Quark[] | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    prepare_async(
        features?: GLib.Quark[] | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    prepare_finish(result: Gio.AsyncResult): boolean;
}
export module RoomInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class RoomInfo extends GObject.Object {
    static $gtype: GObject.GType<RoomInfo>;

    constructor(properties?: Partial<RoomInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RoomInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_channel_type(): string;
    get_description(): string;
    get_handle(): Handle;
    get_handle_name(): string;
    get_invite_only(known: boolean): boolean;
    get_members_count(known: boolean): number;
    get_name(): string;
    get_requires_password(known: boolean): boolean;
    get_room_id(): string;
    get_server(): string;
    get_subject(): string;
}
export module RoomList {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        account: Account;
        listing: boolean;
        server: string;
    }
}
export class RoomList extends GObject.Object implements Gio.AsyncInitable<RoomList> {
    static $gtype: GObject.GType<RoomList>;

    constructor(properties?: Partial<RoomList.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RoomList.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get account(): Account;
    get listing(): boolean;
    get server(): string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "failed", callback: (_source: this, error: GLib.Error) => void): number;
    connect_after(signal: "failed", callback: (_source: this, error: GLib.Error) => void): number;
    emit(signal: "failed", error: GLib.Error): void;
    connect(signal: "got-room", callback: (_source: this, room: RoomInfo) => void): number;
    connect_after(signal: "got-room", callback: (_source: this, room: RoomInfo) => void): number;
    emit(signal: "got-room", room: RoomInfo): void;

    // Constructors

    static new_finish(result: Gio.AsyncResult): RoomList;
    // Conflicted with Gio.AsyncInitable.new_finish
    static new_finish(...args: never[]): any;

    // Members

    get_account(): Account;
    get_server(): string;
    is_listing(): boolean;
    start(): void;
    static new_async(account: Account, server: string): Promise<RoomList>;
    static new_async(account: Account, server: string, callback: Gio.AsyncReadyCallback<RoomList> | null): void;
    static new_async(
        account: Account,
        server: string,
        callback?: Gio.AsyncReadyCallback<RoomList> | null
    ): Promise<RoomList> | void;

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
    new_finish(res: Gio.AsyncResult): RoomList;
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
export module SignalledMessage {
    export interface ConstructorProperties extends Message.ConstructorProperties {
        [key: string]: any;
        sender: Contact;
    }
}
export class SignalledMessage extends Message {
    static $gtype: GObject.GType<SignalledMessage>;

    constructor(properties?: Partial<SignalledMessage.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SignalledMessage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get sender(): Contact;

    // Members

    static get_sender(message: Message): Contact;
}
export module SimpleApprover {
    export interface ConstructorProperties extends BaseClient.ConstructorProperties {
        [key: string]: any;
        callback: any;
        destroy: any;
        user_data: any;
        userData: any;
    }
}
export class SimpleApprover extends BaseClient {
    static $gtype: GObject.GType<SimpleApprover>;

    constructor(properties?: Partial<SimpleApprover.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SimpleApprover.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set callback(val: any);
    set destroy(val: any);
    set user_data(val: any);
    set userData(val: any);

    // Constructors

    static ["new"](
        dbus: DBusDaemon,
        name: string,
        uniquify: boolean,
        callback: SimpleApproverAddDispatchOperationImpl
    ): SimpleApprover;
    static new_with_am(
        account_manager: AccountManager,
        name: string,
        uniquify: boolean,
        callback: SimpleApproverAddDispatchOperationImpl
    ): SimpleApprover;
    static new_with_factory(
        factory: SimpleClientFactory,
        name: string,
        uniquify: boolean,
        callback: SimpleApproverAddDispatchOperationImpl
    ): SimpleApprover;
}
export module SimpleClientFactory {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        dbus_daemon: DBusDaemon;
        dbusDaemon: DBusDaemon;
    }
}
export class SimpleClientFactory extends GObject.Object {
    static $gtype: GObject.GType<SimpleClientFactory>;

    constructor(properties?: Partial<SimpleClientFactory.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SimpleClientFactory.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get dbus_daemon(): DBusDaemon;
    get dbusDaemon(): DBusDaemon;

    // Constructors

    static ["new"](dbus?: DBusDaemon | null): SimpleClientFactory;

    // Members

    add_account_features(features?: GLib.Quark[] | null): void;
    add_channel_features(features?: GLib.Quark[] | null): void;
    add_connection_features(features?: GLib.Quark[] | null): void;
    add_contact_features(features?: ContactFeature[] | null): void;
    dup_account_features(account: Account): GLib.Quark[];
    dup_channel_features(channel: Channel): GLib.Quark[];
    dup_connection_features(connection: Connection): GLib.Quark[];
    dup_contact_features(connection: Connection): ContactFeature[];
    ensure_account(object_path: string, immutable_properties: GLib.HashTable<string, GObject.Value>): Account;
    ensure_channel(
        connection: Connection,
        object_path: string,
        immutable_properties: GLib.HashTable<string, GObject.Value>
    ): Channel;
    ensure_connection(object_path: string, immutable_properties: GLib.HashTable<string, GObject.Value>): Connection;
    ensure_contact(connection: Connection, handle: Handle, identifier: string): Contact;
    ensure_contact_by_id_async(connection: Connection, identifier: string): Promise<Contact>;
    ensure_contact_by_id_async(
        connection: Connection,
        identifier: string,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    ensure_contact_by_id_async(
        connection: Connection,
        identifier: string,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Contact> | void;
    ensure_contact_by_id_finish(result: Gio.AsyncResult): Contact;
    get_dbus_daemon(): DBusDaemon;
    upgrade_contacts_async(connection: Connection, contacts: Contact[]): Promise<[Contact[] | null]>;
    upgrade_contacts_async(
        connection: Connection,
        contacts: Contact[],
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    upgrade_contacts_async(
        connection: Connection,
        contacts: Contact[],
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[Contact[] | null]> | void;
    upgrade_contacts_finish(result: Gio.AsyncResult): [boolean, Contact[] | null];
    vfunc_dup_account_features(account: Account): GLib.Quark[];
    vfunc_dup_channel_features(channel: Channel): GLib.Quark[];
    vfunc_dup_connection_features(connection: Connection): GLib.Quark[];
    vfunc_dup_contact_features(connection: Connection): ContactFeature[];
}
export module SimpleHandler {
    export interface ConstructorProperties extends BaseClient.ConstructorProperties {
        [key: string]: any;
        bypass_approval: boolean;
        bypassApproval: boolean;
        callback: any;
        destroy: any;
        requests: boolean;
        user_data: any;
        userData: any;
    }
}
export class SimpleHandler extends BaseClient {
    static $gtype: GObject.GType<SimpleHandler>;

    constructor(properties?: Partial<SimpleHandler.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SimpleHandler.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set bypass_approval(val: boolean);
    set bypassApproval(val: boolean);
    set callback(val: any);
    set destroy(val: any);
    set requests(val: boolean);
    set user_data(val: any);
    set userData(val: any);

    // Constructors

    static ["new"](
        dbus: DBusDaemon,
        bypass_approval: boolean,
        requests: boolean,
        name: string,
        uniquify: boolean,
        callback: SimpleHandlerHandleChannelsImpl
    ): SimpleHandler;
    static new_with_am(
        account_manager: AccountManager,
        bypass_approval: boolean,
        requests: boolean,
        name: string,
        uniquify: boolean,
        callback: SimpleHandlerHandleChannelsImpl
    ): SimpleHandler;
    static new_with_factory(
        factory: SimpleClientFactory,
        bypass_approval: boolean,
        requests: boolean,
        name: string,
        uniquify: boolean,
        callback: SimpleHandlerHandleChannelsImpl
    ): SimpleHandler;
}
export module SimpleObserver {
    export interface ConstructorProperties extends BaseClient.ConstructorProperties {
        [key: string]: any;
        callback: any;
        destroy: any;
        recover: boolean;
        user_data: any;
        userData: any;
    }
}
export class SimpleObserver extends BaseClient {
    static $gtype: GObject.GType<SimpleObserver>;

    constructor(properties?: Partial<SimpleObserver.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SimpleObserver.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set callback(val: any);
    set destroy(val: any);
    set recover(val: boolean);
    set user_data(val: any);
    set userData(val: any);

    // Constructors

    static ["new"](
        dbus: DBusDaemon,
        recover: boolean,
        name: string,
        uniquify: boolean,
        callback: SimpleObserverObserveChannelsImpl
    ): SimpleObserver;
    static new_with_am(
        account_manager: AccountManager,
        recover: boolean,
        name: string,
        uniquify: boolean,
        callback: SimpleObserverObserveChannelsImpl
    ): SimpleObserver;
    static new_with_factory(
        factory: SimpleClientFactory,
        recover: boolean,
        name: string,
        uniquify: boolean,
        callback: SimpleObserverObserveChannelsImpl
    ): SimpleObserver;
}
export module StreamTubeChannel {
    export interface ConstructorProperties extends Channel.ConstructorProperties {
        [key: string]: any;
        parameters_vardict: GLib.Variant;
        parametersVardict: GLib.Variant;
        service: string;
    }
}
export class StreamTubeChannel extends Channel {
    static $gtype: GObject.GType<StreamTubeChannel>;

    constructor(properties?: Partial<StreamTubeChannel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StreamTubeChannel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get parameters_vardict(): GLib.Variant;
    get parametersVardict(): GLib.Variant;
    get service(): string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "incoming", callback: (_source: this, tube_connection: StreamTubeConnection) => void): number;
    connect_after(signal: "incoming", callback: (_source: this, tube_connection: StreamTubeConnection) => void): number;
    emit(signal: "incoming", tube_connection: StreamTubeConnection): void;

    // Constructors

    static ["new"](
        conn: Connection,
        object_path: string,
        immutable_properties: GLib.HashTable<string, GObject.Value>
    ): StreamTubeChannel;
    // Conflicted with TelepathyGLib.Channel.new
    static ["new"](...args: never[]): any;

    // Members

    accept_async(): Promise<StreamTubeConnection>;
    accept_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    accept_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<StreamTubeConnection> | void;
    accept_finish(result: Gio.AsyncResult): StreamTubeConnection;
    dup_parameters_vardict(): GLib.Variant;
    get_service(): string;
    offer_async(params?: GLib.HashTable<any, any> | null): Promise<boolean>;
    offer_async(params: GLib.HashTable<any, any> | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    offer_async(
        params?: GLib.HashTable<any, any> | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    offer_finish(result: Gio.AsyncResult): boolean;
}
export module StreamTubeConnection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        channel: StreamTubeChannel;
        contact: Contact;
        socket_connection: Gio.SocketConnection;
        socketConnection: Gio.SocketConnection;
    }
}
export class StreamTubeConnection extends GObject.Object {
    static $gtype: GObject.GType<StreamTubeConnection>;

    constructor(properties?: Partial<StreamTubeConnection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StreamTubeConnection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get channel(): StreamTubeChannel;
    get contact(): Contact;
    get socket_connection(): Gio.SocketConnection;
    get socketConnection(): Gio.SocketConnection;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "closed", callback: (_source: this, error: GLib.Error) => void): number;
    connect_after(signal: "closed", callback: (_source: this, error: GLib.Error) => void): number;
    emit(signal: "closed", error: GLib.Error): void;

    // Members

    get_channel(): StreamTubeChannel;
    get_contact(): Contact;
    get_socket_connection(): Gio.SocketConnection;
}
export module TLSCertificate {
    export interface ConstructorProperties extends Proxy.ConstructorProperties {
        [key: string]: any;
        cert_data: any[];
        certData: any[];
        cert_type: string;
        certType: string;
        state: number;
    }
}
export class TLSCertificate extends Proxy {
    static $gtype: GObject.GType<TLSCertificate>;

    constructor(properties?: Partial<TLSCertificate.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TLSCertificate.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get cert_data(): any[];
    get certData(): any[];
    get cert_type(): string;
    get certType(): string;
    get state(): number;

    // Constructors

    static ["new"](conn_or_chan: Proxy, object_path: string): TLSCertificate;

    // Members

    accept_async(): Promise<boolean>;
    accept_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    accept_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    accept_finish(result: Gio.AsyncResult): boolean;
    add_rejection(reason: TLSCertificateRejectReason, dbus_error: string, details?: GLib.Variant | null): void;
    get_cert_data(): GLib.Bytes[];
    get_cert_type(): string;
    get_nth_rejection(n: number): TLSCertificateRejection | null;
    get_rejection(): TLSCertificateRejection | null;
    get_state(): TLSCertificateState;
    reject_async(): Promise<boolean>;
    reject_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    reject_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    reject_finish(result: Gio.AsyncResult): boolean;
    static get_feature_quark_core(): GLib.Quark;
    static init_known_interfaces(): void;
}
export module TLSCertificateRejection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        dbus_error: string;
        dbusError: string;
        details: GLib.Variant;
        error: GLib.Error;
        reason: number;
    }
}
export class TLSCertificateRejection extends GObject.Object {
    static $gtype: GObject.GType<TLSCertificateRejection>;

    constructor(properties?: Partial<TLSCertificateRejection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TLSCertificateRejection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get dbus_error(): string;
    get dbusError(): string;
    get details(): GLib.Variant;
    get error(): GLib.Error;
    get reason(): number;

    // Members

    get_dbus_error(): string;
    get_details(): GLib.Variant;
    get_error(): GLib.Error;
    get_reason(): TLSCertificateRejectReason;
    raise_error(): boolean;
}
export module TextChannel {
    export interface ConstructorProperties extends Channel.ConstructorProperties {
        [key: string]: any;
        delivery_reporting_support: number;
        deliveryReportingSupport: number;
        is_sms_channel: boolean;
        isSmsChannel: boolean;
        message_part_support_flags: number;
        messagePartSupportFlags: number;
        sms_flash: boolean;
        smsFlash: boolean;
        supported_content_types: string[];
        supportedContentTypes: string[];
    }
}
export class TextChannel extends Channel {
    static $gtype: GObject.GType<TextChannel>;

    constructor(properties?: Partial<TextChannel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextChannel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get delivery_reporting_support(): number;
    get deliveryReportingSupport(): number;
    get is_sms_channel(): boolean;
    get isSmsChannel(): boolean;
    get message_part_support_flags(): number;
    get messagePartSupportFlags(): number;
    get sms_flash(): boolean;
    get smsFlash(): boolean;
    get supported_content_types(): string[];
    get supportedContentTypes(): string[];

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "contact-chat-state-changed",
        callback: (_source: this, contact: Contact, state: number) => void
    ): number;
    connect_after(
        signal: "contact-chat-state-changed",
        callback: (_source: this, contact: Contact, state: number) => void
    ): number;
    emit(signal: "contact-chat-state-changed", contact: Contact, state: number): void;
    connect(signal: "message-received", callback: (_source: this, message: SignalledMessage) => void): number;
    connect_after(signal: "message-received", callback: (_source: this, message: SignalledMessage) => void): number;
    emit(signal: "message-received", message: SignalledMessage): void;
    connect(
        signal: "message-sent",
        callback: (_source: this, message: SignalledMessage, flags: number, token: string) => void
    ): number;
    connect_after(
        signal: "message-sent",
        callback: (_source: this, message: SignalledMessage, flags: number, token: string) => void
    ): number;
    emit(signal: "message-sent", message: SignalledMessage, flags: number, token: string): void;
    connect(signal: "pending-message-removed", callback: (_source: this, message: SignalledMessage) => void): number;
    connect_after(
        signal: "pending-message-removed",
        callback: (_source: this, message: SignalledMessage) => void
    ): number;
    emit(signal: "pending-message-removed", message: SignalledMessage): void;

    // Constructors

    static ["new"](
        conn: Connection,
        object_path: string,
        immutable_properties: GLib.HashTable<string, GObject.Value>
    ): TextChannel;
    // Conflicted with TelepathyGLib.Channel.new
    static ["new"](...args: never[]): any;

    // Members

    ack_all_pending_messages_async(): Promise<boolean>;
    ack_all_pending_messages_async(callback: Gio.AsyncReadyCallback<this> | null): void;
    ack_all_pending_messages_async(callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    ack_all_pending_messages_finish(result: Gio.AsyncResult): boolean;
    ack_message_async(message: Message): Promise<boolean>;
    ack_message_async(message: Message, callback: Gio.AsyncReadyCallback<this> | null): void;
    ack_message_async(message: Message, callback?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
    ack_message_finish(result: Gio.AsyncResult): boolean;
    ack_messages_async(messages: SignalledMessage[]): Promise<boolean>;
    ack_messages_async(messages: SignalledMessage[], callback: Gio.AsyncReadyCallback<this> | null): void;
    ack_messages_async(
        messages: SignalledMessage[],
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    ack_messages_finish(result: Gio.AsyncResult): boolean;
    dup_pending_messages(): SignalledMessage[];
    get_chat_state(contact: Contact): ChannelChatState;
    // Conflicted with TelepathyGLib.Channel.get_chat_state
    get_chat_state(...args: never[]): any;
    get_delivery_reporting_support(): DeliveryReportingSupportFlags;
    get_message_part_support_flags(): MessagePartSupportFlags;
    get_message_types(): ChannelTextMessageType[];
    get_pending_messages(): SignalledMessage[];
    get_sms_flash(): boolean;
    get_sms_length_async(message: Message): Promise<[number, number, number]>;
    get_sms_length_async(message: Message, callback: Gio.AsyncReadyCallback<this> | null): void;
    get_sms_length_async(
        message: Message,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[number, number, number]> | void;
    get_sms_length_finish(result: Gio.AsyncResult): [boolean, number, number, number];
    get_supported_content_types(): string[];
    send_message_async(message: Message, flags: MessageSendingFlags): Promise<[string]>;
    send_message_async(
        message: Message,
        flags: MessageSendingFlags,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    send_message_async(
        message: Message,
        flags: MessageSendingFlags,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string]> | void;
    send_message_finish(result: Gio.AsyncResult): [boolean, string];
    set_chat_state_async(state: ChannelChatState): Promise<boolean>;
    set_chat_state_async(state: ChannelChatState, callback: Gio.AsyncReadyCallback<this> | null): void;
    set_chat_state_async(
        state: ChannelChatState,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_chat_state_finish(result: Gio.AsyncResult): boolean;
    supports_message_type(message_type: ChannelTextMessageType): boolean;
    static get_feature_quark_chat_states(): GLib.Quark;
    static get_feature_quark_incoming_messages(): GLib.Quark;
    static get_feature_quark_sms(): GLib.Quark;
}

export class AccountChannelRequestPrivate {
    static $gtype: GObject.GType<AccountChannelRequestPrivate>;

    constructor(copy: AccountChannelRequestPrivate);
}

export class AccountClassPrivate {
    static $gtype: GObject.GType<AccountClassPrivate>;

    constructor(copy: AccountClassPrivate);
}

export class AccountManagerClassPrivate {
    static $gtype: GObject.GType<AccountManagerClassPrivate>;

    constructor(copy: AccountManagerClassPrivate);
}

export class AccountManagerPrivate {
    static $gtype: GObject.GType<AccountManagerPrivate>;

    constructor(copy: AccountManagerPrivate);
}

export class AccountPrivate {
    static $gtype: GObject.GType<AccountPrivate>;

    constructor(copy: AccountPrivate);
}

export class AccountRequestPrivate {
    static $gtype: GObject.GType<AccountRequestPrivate>;

    constructor(copy: AccountRequestPrivate);
}

export class AddDispatchOperationContextPrivate {
    static $gtype: GObject.GType<AddDispatchOperationContextPrivate>;

    constructor(copy: AddDispatchOperationContextPrivate);
}

export class AvatarRequirements {
    static $gtype: GObject.GType<AvatarRequirements>;

    constructor(
        supported_mime_types: string[],
        minimum_width: number,
        minimum_height: number,
        recommended_width: number,
        recommended_height: number,
        maximum_width: number,
        maximum_height: number,
        maximum_bytes: number
    );
    constructor(
        properties?: Partial<{
            minimum_width?: number;
            minimum_height?: number;
            recommended_width?: number;
            recommended_height?: number;
            maximum_width?: number;
            maximum_height?: number;
            maximum_bytes?: number;
        }>
    );
    constructor(copy: AvatarRequirements);

    // Fields
    minimum_width: number;
    minimum_height: number;
    recommended_width: number;
    recommended_height: number;
    maximum_width: number;
    maximum_height: number;
    maximum_bytes: number;

    // Constructors
    static ["new"](
        supported_mime_types: string[],
        minimum_width: number,
        minimum_height: number,
        recommended_width: number,
        recommended_height: number,
        maximum_width: number,
        maximum_height: number,
        maximum_bytes: number
    ): AvatarRequirements;
}

export class BaseClientClassPrivate {
    static $gtype: GObject.GType<BaseClientClassPrivate>;

    constructor(copy: BaseClientClassPrivate);
}

export class BaseClientPrivate {
    static $gtype: GObject.GType<BaseClientPrivate>;

    constructor(copy: BaseClientPrivate);
}

export class BaseConnectionPrivate {
    static $gtype: GObject.GType<BaseConnectionPrivate>;

    constructor(copy: BaseConnectionPrivate);
}

export class CallChannelPrivate {
    static $gtype: GObject.GType<CallChannelPrivate>;

    constructor(copy: CallChannelPrivate);
}

export class CallContentPrivate {
    static $gtype: GObject.GType<CallContentPrivate>;

    constructor(copy: CallContentPrivate);
}

export class CallStateReason {
    static $gtype: GObject.GType<CallStateReason>;

    constructor(copy: CallStateReason);

    // Fields
    actor: Handle;
    reason: CallStateChangeReason;
    dbus_reason: string;
    message: string;
    ref_count: number;
}

export class CallStreamPrivate {
    static $gtype: GObject.GType<CallStreamPrivate>;

    constructor(copy: CallStreamPrivate);
}

export class CapabilitiesPrivate {
    static $gtype: GObject.GType<CapabilitiesPrivate>;

    constructor(copy: CapabilitiesPrivate);
}

export class ChannelDispatchOperationClassPrivate {
    static $gtype: GObject.GType<ChannelDispatchOperationClassPrivate>;

    constructor(copy: ChannelDispatchOperationClassPrivate);
}

export class ChannelDispatchOperationPrivate {
    static $gtype: GObject.GType<ChannelDispatchOperationPrivate>;

    constructor(copy: ChannelDispatchOperationPrivate);
}

export class ChannelDispatcherClassPrivate {
    static $gtype: GObject.GType<ChannelDispatcherClassPrivate>;

    constructor(copy: ChannelDispatcherClassPrivate);
}

export class ChannelDispatcherPrivate {
    static $gtype: GObject.GType<ChannelDispatcherPrivate>;

    constructor(copy: ChannelDispatcherPrivate);
}

export class ChannelPrivate {
    static $gtype: GObject.GType<ChannelPrivate>;

    constructor(copy: ChannelPrivate);
}

export class ChannelRequestClassPrivate {
    static $gtype: GObject.GType<ChannelRequestClassPrivate>;

    constructor(copy: ChannelRequestClassPrivate);
}

export class ChannelRequestPrivate {
    static $gtype: GObject.GType<ChannelRequestPrivate>;

    constructor(copy: ChannelRequestPrivate);
}

export class ConnectionManagerParam {
    static $gtype: GObject.GType<ConnectionManagerParam>;

    constructor(
        properties?: Partial<{
            name?: string;
            dbus_signature?: string;
            flags?: number;
            priv?: any;
        }>
    );
    constructor(copy: ConnectionManagerParam);

    // Fields
    name: string;
    dbus_signature: string;
    flags: number;
    priv: any;

    // Members
    copy(): ConnectionManagerParam;
    dup_default_variant(): GLib.Variant;
    dup_variant_type(): GLib.VariantType;
    free(): void;
    get_dbus_signature(): string;
    get_default(value: GObject.Value | any): boolean;
    get_name(): string;
    is_dbus_property(): boolean;
    is_required(): boolean;
    is_required_for_registration(): boolean;
    is_secret(): boolean;
}

export class ConnectionManagerPrivate {
    static $gtype: GObject.GType<ConnectionManagerPrivate>;

    constructor(copy: ConnectionManagerPrivate);
}

export class ConnectionManagerProtocol {
    static $gtype: GObject.GType<ConnectionManagerProtocol>;

    constructor(
        properties?: Partial<{
            name?: string;
            priv?: any;
        }>
    );
    constructor(copy: ConnectionManagerProtocol);

    // Fields
    name: string;
    priv: any;

    // Members
    can_register(): boolean;
    copy(): ConnectionManagerProtocol;
    dup_param_names(): string[];
    free(): void;
    get_param(param: string): ConnectionManagerParam;
    has_param(param: string): boolean;
}

export class ConnectionPrivate {
    static $gtype: GObject.GType<ConnectionPrivate>;

    constructor(copy: ConnectionPrivate);
}

export class ContactInfoField {
    static $gtype: GObject.GType<ContactInfoField>;

    constructor(field_name: string, parameters: string[], field_value: string[]);
    constructor(
        properties?: Partial<{
            field_name?: string;
            priv?: any;
        }>
    );
    constructor(copy: ContactInfoField);

    // Fields
    field_name: string;
    priv: any;

    // Constructors
    static ["new"](field_name: string, parameters: string[], field_value: string[]): ContactInfoField;
}

export class ContactInfoFieldSpec {
    static $gtype: GObject.GType<ContactInfoFieldSpec>;

    constructor(copy: ContactInfoFieldSpec);

    // Fields
    name: string;
    flags: ContactInfoFieldFlags;
    max: number;
    priv: any;
}

export class ContactPrivate {
    static $gtype: GObject.GType<ContactPrivate>;

    constructor(copy: ContactPrivate);
}

export class ContactSearchPrivate {
    static $gtype: GObject.GType<ContactSearchPrivate>;

    constructor(copy: ContactSearchPrivate);
}

export class ContactSearchResultPrivate {
    static $gtype: GObject.GType<ContactSearchResultPrivate>;

    constructor(copy: ContactSearchResultPrivate);
}

export class ContactsMixin {
    static $gtype: GObject.GType<ContactsMixin>;

    constructor(copy: ContactsMixin);
}

export class ContactsMixinClass {
    static $gtype: GObject.GType<ContactsMixinClass>;

    constructor(copy: ContactsMixinClass);
}

export class ContactsMixinClassPrivate {
    static $gtype: GObject.GType<ContactsMixinClassPrivate>;

    constructor(copy: ContactsMixinClassPrivate);
}

export class ContactsMixinPrivate {
    static $gtype: GObject.GType<ContactsMixinPrivate>;

    constructor(copy: ContactsMixinPrivate);
}

export class DBusDaemonPrivate {
    static $gtype: GObject.GType<DBusDaemonPrivate>;

    constructor(copy: DBusDaemonPrivate);
}

export class DBusPropertiesMixinClass {
    static $gtype: GObject.GType<DBusPropertiesMixinClass>;

    constructor(copy: DBusPropertiesMixinClass);

    // Members
    static init(cls: GObject.Object, offset: number): void;
}

export class DBusPropertiesMixinIfaceImpl {
    static $gtype: GObject.GType<DBusPropertiesMixinIfaceImpl>;

    constructor(copy: DBusPropertiesMixinIfaceImpl);

    // Fields
    name: string;
    getter: DBusPropertiesMixinGetter;
    setter: DBusPropertiesMixinSetter;
    mixin_next: any;
    mixin_priv: any;
}

export class DBusPropertiesMixinIfaceInfo {
    static $gtype: GObject.GType<DBusPropertiesMixinIfaceInfo>;

    constructor(copy: DBusPropertiesMixinIfaceInfo);

    // Fields
    dbus_interface: GLib.Quark;
}

export class DBusPropertiesMixinPropImpl {
    static $gtype: GObject.GType<DBusPropertiesMixinPropImpl>;

    constructor(
        properties?: Partial<{
            name?: string;
            getter_data?: any;
            setter_data?: any;
            mixin_priv?: any;
        }>
    );
    constructor(copy: DBusPropertiesMixinPropImpl);

    // Fields
    name: string;
    getter_data: any;
    setter_data: any;
    mixin_priv: any;
}

export class DBusPropertiesMixinPropInfo {
    static $gtype: GObject.GType<DBusPropertiesMixinPropInfo>;

    constructor(copy: DBusPropertiesMixinPropInfo);

    // Fields
    name: GLib.Quark;
    flags: DBusPropertiesMixinFlags;
    dbus_signature: string;
    type: GObject.GType;
}

export class DBusTubeChannelPrivate {
    static $gtype: GObject.GType<DBusTubeChannelPrivate>;

    constructor(copy: DBusTubeChannelPrivate);
}

export class DebugClientPrivate {
    static $gtype: GObject.GType<DebugClientPrivate>;

    constructor(copy: DebugClientPrivate);
}

export class DebugMessagePriv {
    static $gtype: GObject.GType<DebugMessagePriv>;

    constructor(copy: DebugMessagePriv);
}

export class FileTransferChannelPrivate {
    static $gtype: GObject.GType<FileTransferChannelPrivate>;

    constructor(copy: FileTransferChannelPrivate);
}

export class GroupMixin {
    static $gtype: GObject.GType<GroupMixin>;

    constructor(copy: GroupMixin);

    // Fields
    self_handle: Handle;
    group_flags: ChannelGroupFlags;
}

export class GroupMixinClass {
    static $gtype: GObject.GType<GroupMixinClass>;

    constructor(copy: GroupMixinClass);

    // Fields
    add_member: GroupMixinAddMemberFunc;
    remove_member: GroupMixinRemMemberFunc;
}

export class GroupMixinClassPrivate {
    static $gtype: GObject.GType<GroupMixinClassPrivate>;

    constructor(copy: GroupMixinClassPrivate);
}

export class GroupMixinPrivate {
    static $gtype: GObject.GType<GroupMixinPrivate>;

    constructor(copy: GroupMixinPrivate);
}

export class HandleChannelsContextPrivate {
    static $gtype: GObject.GType<HandleChannelsContextPrivate>;

    constructor(copy: HandleChannelsContextPrivate);
}

export class HandleRepoIfaceClass {
    static $gtype: GObject.GType<HandleRepoIfaceClass>;

    constructor(copy: HandleRepoIfaceClass);
}

export class HandleSet {
    static $gtype: GObject.GType<HandleSet>;

    constructor(copy: HandleSet);

    // Members
    dump(): string;
    to_identifier_map(): GLib.HashTable<Handle, string>;
}

export class Intset {
    static $gtype: GObject.GType<Intset>;

    constructor();
    constructor(copy: Intset);

    // Constructors
    static ["new"](): Intset;
    static new_containing(element: number): Intset;
    static sized_new(size: number): Intset;

    // Members
    add(element: number): void;
    clear(): void;
    copy(): Intset;
    destroy(): void;
    difference(right: Intset): Intset;
    difference_update(other: Intset): void;
    dump(): string;
    foreach(func: IntFunc): void;
    intersection(right: Intset): Intset;
    is_empty(): boolean;
    is_equal(right: Intset): boolean;
    is_member(element: number): boolean;
    remove(element: number): boolean;
    size(): number;
    symmetric_difference(right: Intset): Intset;
    to_array(): number[];
    union(right: Intset): Intset;
    union_update(other: Intset): void;
    static from_array(array: number[]): Intset;
}

export class IntsetFastIter {
    static $gtype: GObject.GType<IntsetFastIter>;

    constructor(copy: IntsetFastIter);

    // Members
    init(set: Intset): void;
    next(output: number): boolean;
}

export class IntsetIter {
    static $gtype: GObject.GType<IntsetIter>;

    constructor(
        properties?: Partial<{
            element?: number;
        }>
    );
    constructor(copy: IntsetIter);

    // Fields
    element: number;

    // Members
    init(set: Intset): void;
    next(): boolean;
    reset(): void;
}

export class ObserveChannelsContextPrivate {
    static $gtype: GObject.GType<ObserveChannelsContextPrivate>;

    constructor(copy: ObserveChannelsContextPrivate);
}

export class PresenceMixin {
    static $gtype: GObject.GType<PresenceMixin>;

    constructor(copy: PresenceMixin);
}

export class PresenceMixinClass {
    static $gtype: GObject.GType<PresenceMixinClass>;

    constructor(copy: PresenceMixinClass);

    // Fields
    status_available: PresenceMixinStatusAvailableFunc;
    set_own_status: PresenceMixinSetOwnStatusFunc;
    get_maximum_status_message_length: PresenceMixinGetMaximumStatusMessageLengthFunc;
}

export class PresenceMixinClassPrivate {
    static $gtype: GObject.GType<PresenceMixinClassPrivate>;

    constructor(copy: PresenceMixinClassPrivate);
}

export class PresenceMixinPrivate {
    static $gtype: GObject.GType<PresenceMixinPrivate>;

    constructor(copy: PresenceMixinPrivate);
}

export class PresenceStatus {
    static $gtype: GObject.GType<PresenceStatus>;

    constructor(
        properties?: Partial<{
            index?: number;
        }>
    );
    constructor(copy: PresenceStatus);

    // Fields
    index: number;
}

export class PresenceStatusOptionalArgumentSpec {
    static $gtype: GObject.GType<PresenceStatusOptionalArgumentSpec>;

    constructor(
        properties?: Partial<{
            name?: string;
            dtype?: string;
        }>
    );
    constructor(copy: PresenceStatusOptionalArgumentSpec);

    // Fields
    name: string;
    dtype: string;
}

export class PresenceStatusSpec {
    static $gtype: GObject.GType<PresenceStatusSpec>;

    constructor(name: string, type: ConnectionPresenceType, can_set_on_self: boolean, has_message: boolean);
    constructor(copy: PresenceStatusSpec);

    // Fields
    name: string;
    presence_type: ConnectionPresenceType;
    self: boolean;

    // Constructors
    static ["new"](
        name: string,
        type: ConnectionPresenceType,
        can_set_on_self: boolean,
        has_message: boolean
    ): PresenceStatusSpec;

    // Members
    can_set_on_self(): boolean;
    copy(): PresenceStatusSpec;
    free(): void;
    get_name(): string;
    get_presence_type(): ConnectionPresenceType;
    has_message(): boolean;
}

export class PresenceStatusSpecPrivate {
    static $gtype: GObject.GType<PresenceStatusSpecPrivate>;

    constructor(copy: PresenceStatusSpecPrivate);
}

export class ProtocolClassPrivate {
    static $gtype: GObject.GType<ProtocolClassPrivate>;

    constructor(copy: ProtocolClassPrivate);
}

export class ProtocolPrivate {
    static $gtype: GObject.GType<ProtocolPrivate>;

    constructor(copy: ProtocolPrivate);
}

export class ProxyFeature {
    static $gtype: GObject.GType<ProxyFeature>;

    constructor(copy: ProxyFeature);

    // Fields
    name: GLib.Quark;
    core: boolean;
    prepare_async: ProxyPrepareAsync;
    prepare_before_signalling_connected_async: ProxyPrepareAsync;
    interfaces_needed: GLib.Quark;
    depends_on: GLib.Quark;
    can_retry: boolean;
}

export class ProxyFeaturePrivate {
    static $gtype: GObject.GType<ProxyFeaturePrivate>;

    constructor(copy: ProxyFeaturePrivate);
}

export class ProxyPendingCall {
    static $gtype: GObject.GType<ProxyPendingCall>;

    constructor(copy: ProxyPendingCall);

    // Members
    cancel(): void;
}

export class ProxyPrivate {
    static $gtype: GObject.GType<ProxyPrivate>;

    constructor(copy: ProxyPrivate);
}

export class ProxySignalConnection {
    static $gtype: GObject.GType<ProxySignalConnection>;

    constructor(copy: ProxySignalConnection);

    // Members
    disconnect(): void;
}

export class RoomInfoPriv {
    static $gtype: GObject.GType<RoomInfoPriv>;

    constructor(copy: RoomInfoPriv);
}

export class RoomListPrivate {
    static $gtype: GObject.GType<RoomListPrivate>;

    constructor(copy: RoomListPrivate);
}

export class SimpleApproverPrivate {
    static $gtype: GObject.GType<SimpleApproverPrivate>;

    constructor(copy: SimpleApproverPrivate);
}

export class SimpleClientFactoryPrivate {
    static $gtype: GObject.GType<SimpleClientFactoryPrivate>;

    constructor(copy: SimpleClientFactoryPrivate);
}

export class SimpleHandlerPrivate {
    static $gtype: GObject.GType<SimpleHandlerPrivate>;

    constructor(copy: SimpleHandlerPrivate);
}

export class SimpleObserverPrivate {
    static $gtype: GObject.GType<SimpleObserverPrivate>;

    constructor(copy: SimpleObserverPrivate);
}

export class StreamTubeChannelPrivate {
    static $gtype: GObject.GType<StreamTubeChannelPrivate>;

    constructor(copy: StreamTubeChannelPrivate);
}

export class StreamTubeConnectionPrivate {
    static $gtype: GObject.GType<StreamTubeConnectionPrivate>;

    constructor(copy: StreamTubeConnectionPrivate);
}

export class TLSCertificateClassPrivate {
    static $gtype: GObject.GType<TLSCertificateClassPrivate>;

    constructor(copy: TLSCertificateClassPrivate);
}

export class TLSCertificatePrivate {
    static $gtype: GObject.GType<TLSCertificatePrivate>;

    constructor(copy: TLSCertificatePrivate);
}

export class TLSCertificateRejectionPriv {
    static $gtype: GObject.GType<TLSCertificateRejectionPriv>;

    constructor(copy: TLSCertificateRejectionPriv);
}

export class TextChannelPrivate {
    static $gtype: GObject.GType<TextChannelPrivate>;

    constructor(copy: TextChannelPrivate);
}

export class WeakRef {
    static $gtype: GObject.GType<WeakRef>;

    constructor(copy: WeakRef);
}

export interface ClientChannelFactoryNamespace {
    $gtype: GObject.GType<ClientChannelFactory>;
    prototype: ClientChannelFactoryPrototype;
}
export type ClientChannelFactory = ClientChannelFactoryPrototype;
export interface ClientChannelFactoryPrototype extends GObject.Object {
    // Members

    create_channel(conn: Connection, path: string, properties: GLib.HashTable<string, GObject.Value>): Channel;
    dup_channel_features(channel: Channel): GLib.Quark[];
}

export const ClientChannelFactory: ClientChannelFactoryNamespace;

export interface HandleRepoIfaceNamespace {
    $gtype: GObject.GType<HandleRepoIface>;
    prototype: HandleRepoIfacePrototype;
}
export type HandleRepoIface = HandleRepoIfacePrototype;
export interface HandleRepoIfacePrototype extends GObject.Object {
    // Properties
    readonly handle_type: number;
    readonly handleType: number;
}

export const HandleRepoIface: HandleRepoIfaceNamespace;

export type Handle = number;
