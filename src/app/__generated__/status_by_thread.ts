/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: dXuwk0B2BI68w86V+CTeIUSPolD6Qnehj8O2N3+jNOpw8RYgw5+cBMkMrEk98V/vU+6u6n6xcYzQDORCraAxcQ==
 */

/* eslint-disable */
// tslint:disable

interface StatusByThread {
  THREAD_ID: (string | number | BigInt) & {readonly __brand?: 'status_by_thread_THREAD_ID'}
  VARIABLE_NAME: string & {readonly __brand?: 'status_by_thread_VARIABLE_NAME'}
  VARIABLE_VALUE: (string) | null
}
export default StatusByThread;

interface StatusByThread_InsertParameters {
  THREAD_ID: (string | number | BigInt) & {readonly __brand?: 'status_by_thread_THREAD_ID'}
  VARIABLE_NAME: string & {readonly __brand?: 'status_by_thread_VARIABLE_NAME'}
  VARIABLE_VALUE?: (string) | null
}
export type {StatusByThread_InsertParameters}
