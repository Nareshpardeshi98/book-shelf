/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: A+WV131510VSLuVnDCNtonn7oAzd1zWSZSwshfM/OQ2gRl4zoBE2snftz82iw59+BWAEz6Y23+NFkei/f25MvA==
 */

/* eslint-disable */
// tslint:disable

interface SessionAccountConnectAttrs {
  ATTR_NAME: string & {readonly __brand?: 'session_account_connect_attrs_ATTR_NAME'}
  ATTR_VALUE: (string) | null
  ORDINAL_POSITION: (number) | null
  PROCESSLIST_ID: (string | number | BigInt) & {readonly __brand?: 'session_account_connect_attrs_PROCESSLIST_ID'}
}
export default SessionAccountConnectAttrs;

interface SessionAccountConnectAttrs_InsertParameters {
  ATTR_NAME: string & {readonly __brand?: 'session_account_connect_attrs_ATTR_NAME'}
  ATTR_VALUE?: (string) | null
  ORDINAL_POSITION?: (number) | null
  PROCESSLIST_ID: (string | number | BigInt) & {readonly __brand?: 'session_account_connect_attrs_PROCESSLIST_ID'}
}
export type {SessionAccountConnectAttrs_InsertParameters}
