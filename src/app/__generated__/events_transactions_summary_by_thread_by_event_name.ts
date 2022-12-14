/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: DgKk7Od5Yrdn52nRScqxXGg7erdlqadYZ8eiBq2zVljRtVrsYfRc8nrlDFkFKctxDOl1SD3bClLDXIWC/hFgLQ==
 */

/* eslint-disable */
// tslint:disable

interface EventsTransactionsSummaryByThreadByEventName {
  AVG_TIMER_READ_ONLY: (string | number | BigInt)
  AVG_TIMER_READ_WRITE: (string | number | BigInt)
  AVG_TIMER_WAIT: (string | number | BigInt)
  COUNT_READ_ONLY: (string | number | BigInt)
  COUNT_READ_WRITE: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  EVENT_NAME: string & {readonly __brand?: 'events_transactions_summary_by_thread_by_event_name_EVENT_NAME'}
  MAX_TIMER_READ_ONLY: (string | number | BigInt)
  MAX_TIMER_READ_WRITE: (string | number | BigInt)
  MAX_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_READ_ONLY: (string | number | BigInt)
  MIN_TIMER_READ_WRITE: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  SUM_TIMER_READ_ONLY: (string | number | BigInt)
  SUM_TIMER_READ_WRITE: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
  THREAD_ID: (string | number | BigInt) & {readonly __brand?: 'events_transactions_summary_by_thread_by_event_name_THREAD_ID'}
}
export default EventsTransactionsSummaryByThreadByEventName;

interface EventsTransactionsSummaryByThreadByEventName_InsertParameters {
  AVG_TIMER_READ_ONLY: (string | number | BigInt)
  AVG_TIMER_READ_WRITE: (string | number | BigInt)
  AVG_TIMER_WAIT: (string | number | BigInt)
  COUNT_READ_ONLY: (string | number | BigInt)
  COUNT_READ_WRITE: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  EVENT_NAME: string & {readonly __brand?: 'events_transactions_summary_by_thread_by_event_name_EVENT_NAME'}
  MAX_TIMER_READ_ONLY: (string | number | BigInt)
  MAX_TIMER_READ_WRITE: (string | number | BigInt)
  MAX_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_READ_ONLY: (string | number | BigInt)
  MIN_TIMER_READ_WRITE: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  SUM_TIMER_READ_ONLY: (string | number | BigInt)
  SUM_TIMER_READ_WRITE: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
  THREAD_ID: (string | number | BigInt) & {readonly __brand?: 'events_transactions_summary_by_thread_by_event_name_THREAD_ID'}
}
export type {EventsTransactionsSummaryByThreadByEventName_InsertParameters}
