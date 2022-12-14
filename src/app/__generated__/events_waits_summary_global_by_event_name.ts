/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: 6SuDSkh/ZOHfr38yUv03d4E1e/6K+u2o8O/efb6OfLDB0u2X2wd/h6gUfYdNlaGbvKLHdHy/UWJcsg6ta6FA1Q==
 */

/* eslint-disable */
// tslint:disable

interface EventsWaitsSummaryGlobalByEventName {
  AVG_TIMER_WAIT: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  EVENT_NAME: string & {readonly __brand?: 'events_waits_summary_global_by_event_name_EVENT_NAME'}
  MAX_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
}
export default EventsWaitsSummaryGlobalByEventName;

interface EventsWaitsSummaryGlobalByEventName_InsertParameters {
  AVG_TIMER_WAIT: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  EVENT_NAME: string & {readonly __brand?: 'events_waits_summary_global_by_event_name_EVENT_NAME'}
  MAX_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
}
export type {EventsWaitsSummaryGlobalByEventName_InsertParameters}
