/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: BLxxp3KeEzvh435gRX1go/T3wHrSPqUFGmcZ+Wu5pJPJHFfEtiPptaK9XD+kMlF9XdB/RkdGDIBewuT/C579WA==
 */

/* eslint-disable */
// tslint:disable

interface EventsStagesHistory {
  END_EVENT_ID: ((string | number | BigInt)) | null
  EVENT_ID: (string | number | BigInt) & {readonly __brand?: 'events_stages_history_EVENT_ID'}
  EVENT_NAME: string
  NESTING_EVENT_ID: ((string | number | BigInt)) | null
  NESTING_EVENT_TYPE: (("TRANSACTION" | "STATEMENT" | "STAGE" | "WAIT")) | null
  SOURCE: (string) | null
  THREAD_ID: (string | number | BigInt) & {readonly __brand?: 'events_stages_history_THREAD_ID'}
  TIMER_END: ((string | number | BigInt)) | null
  TIMER_START: ((string | number | BigInt)) | null
  TIMER_WAIT: ((string | number | BigInt)) | null
  WORK_COMPLETED: ((string | number | BigInt)) | null
  WORK_ESTIMATED: ((string | number | BigInt)) | null
}
export default EventsStagesHistory;

interface EventsStagesHistory_InsertParameters {
  END_EVENT_ID?: ((string | number | BigInt)) | null
  EVENT_ID: (string | number | BigInt) & {readonly __brand?: 'events_stages_history_EVENT_ID'}
  EVENT_NAME: string
  NESTING_EVENT_ID?: ((string | number | BigInt)) | null
  NESTING_EVENT_TYPE?: (("TRANSACTION" | "STATEMENT" | "STAGE" | "WAIT")) | null
  SOURCE?: (string) | null
  THREAD_ID: (string | number | BigInt) & {readonly __brand?: 'events_stages_history_THREAD_ID'}
  TIMER_END?: ((string | number | BigInt)) | null
  TIMER_START?: ((string | number | BigInt)) | null
  TIMER_WAIT?: ((string | number | BigInt)) | null
  WORK_COMPLETED?: ((string | number | BigInt)) | null
  WORK_ESTIMATED?: ((string | number | BigInt)) | null
}
export type {EventsStagesHistory_InsertParameters}
