/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: XnY7pjHmBz0tsGyTmFHzEoDbLOXD1MhP6kRAeJSl4/0imMh52jGygYt3F7DUOe6jQ/ubzjoQb8npsJHr7NuoQg==
 */

/* eslint-disable */
// tslint:disable

interface EventsStagesSummaryByThreadByEventName {
  AVG_TIMER_WAIT: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  EVENT_NAME: string & {readonly __brand?: 'events_stages_summary_by_thread_by_event_name_EVENT_NAME'}
  MAX_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
  THREAD_ID: (string | number | BigInt) & {readonly __brand?: 'events_stages_summary_by_thread_by_event_name_THREAD_ID'}
}
export default EventsStagesSummaryByThreadByEventName;

interface EventsStagesSummaryByThreadByEventName_InsertParameters {
  AVG_TIMER_WAIT: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  EVENT_NAME: string & {readonly __brand?: 'events_stages_summary_by_thread_by_event_name_EVENT_NAME'}
  MAX_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
  THREAD_ID: (string | number | BigInt) & {readonly __brand?: 'events_stages_summary_by_thread_by_event_name_THREAD_ID'}
}
export type {EventsStagesSummaryByThreadByEventName_InsertParameters}
