/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: Ib5SJS89BwN0KHq/Pgaq/X7z62hxCkg/DJBPAjx4sYkl/2hge0YqEu3BtDavBOjhbwFIlwkmWHzNWMWX7wHDMA==
 */

/* eslint-disable */
// tslint:disable

interface SocketSummaryByEventName {
  AVG_TIMER_MISC: (string | number | BigInt)
  AVG_TIMER_READ: (string | number | BigInt)
  AVG_TIMER_WAIT: (string | number | BigInt)
  AVG_TIMER_WRITE: (string | number | BigInt)
  COUNT_MISC: (string | number | BigInt)
  COUNT_READ: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  COUNT_WRITE: (string | number | BigInt)
  EVENT_NAME: string & {readonly __brand?: 'socket_summary_by_event_name_EVENT_NAME'}
  MAX_TIMER_MISC: (string | number | BigInt)
  MAX_TIMER_READ: (string | number | BigInt)
  MAX_TIMER_WAIT: (string | number | BigInt)
  MAX_TIMER_WRITE: (string | number | BigInt)
  MIN_TIMER_MISC: (string | number | BigInt)
  MIN_TIMER_READ: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_WRITE: (string | number | BigInt)
  SUM_NUMBER_OF_BYTES_READ: (string | number | BigInt)
  SUM_NUMBER_OF_BYTES_WRITE: (string | number | BigInt)
  SUM_TIMER_MISC: (string | number | BigInt)
  SUM_TIMER_READ: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
  SUM_TIMER_WRITE: (string | number | BigInt)
}
export default SocketSummaryByEventName;

interface SocketSummaryByEventName_InsertParameters {
  AVG_TIMER_MISC: (string | number | BigInt)
  AVG_TIMER_READ: (string | number | BigInt)
  AVG_TIMER_WAIT: (string | number | BigInt)
  AVG_TIMER_WRITE: (string | number | BigInt)
  COUNT_MISC: (string | number | BigInt)
  COUNT_READ: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  COUNT_WRITE: (string | number | BigInt)
  EVENT_NAME: string & {readonly __brand?: 'socket_summary_by_event_name_EVENT_NAME'}
  MAX_TIMER_MISC: (string | number | BigInt)
  MAX_TIMER_READ: (string | number | BigInt)
  MAX_TIMER_WAIT: (string | number | BigInt)
  MAX_TIMER_WRITE: (string | number | BigInt)
  MIN_TIMER_MISC: (string | number | BigInt)
  MIN_TIMER_READ: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_WRITE: (string | number | BigInt)
  SUM_NUMBER_OF_BYTES_READ: (string | number | BigInt)
  SUM_NUMBER_OF_BYTES_WRITE: (string | number | BigInt)
  SUM_TIMER_MISC: (string | number | BigInt)
  SUM_TIMER_READ: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
  SUM_TIMER_WRITE: (string | number | BigInt)
}
export type {SocketSummaryByEventName_InsertParameters}
