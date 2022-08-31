/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: hfhviX06E+15Nb5T0mSL2R5i6zYs45WZ0yFH5DkEJY6OAtYSyxsC1CrI8OfCbuj6nyqyEfXjm+m0NVRGP260WA==
 */

/* eslint-disable */
// tslint:disable

interface EventsStatementsSummaryByThreadByEventName {
  AVG_TIMER_WAIT: (string | number | BigInt)
  COUNT_SECONDARY: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  EVENT_NAME: string & {readonly __brand?: 'events_statements_summary_by_thread_by_event_name_EVENT_NAME'}
  MAX_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  SUM_CPU_TIME: (string | number | BigInt)
  SUM_CREATED_TMP_DISK_TABLES: (string | number | BigInt)
  SUM_CREATED_TMP_TABLES: (string | number | BigInt)
  SUM_ERRORS: (string | number | BigInt)
  SUM_LOCK_TIME: (string | number | BigInt)
  SUM_NO_GOOD_INDEX_USED: (string | number | BigInt)
  SUM_NO_INDEX_USED: (string | number | BigInt)
  SUM_ROWS_AFFECTED: (string | number | BigInt)
  SUM_ROWS_EXAMINED: (string | number | BigInt)
  SUM_ROWS_SENT: (string | number | BigInt)
  SUM_SELECT_FULL_JOIN: (string | number | BigInt)
  SUM_SELECT_FULL_RANGE_JOIN: (string | number | BigInt)
  SUM_SELECT_RANGE: (string | number | BigInt)
  SUM_SELECT_RANGE_CHECK: (string | number | BigInt)
  SUM_SELECT_SCAN: (string | number | BigInt)
  SUM_SORT_MERGE_PASSES: (string | number | BigInt)
  SUM_SORT_RANGE: (string | number | BigInt)
  SUM_SORT_ROWS: (string | number | BigInt)
  SUM_SORT_SCAN: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
  SUM_WARNINGS: (string | number | BigInt)
  THREAD_ID: (string | number | BigInt) & {readonly __brand?: 'events_statements_summary_by_thread_by_event_name_THREAD_ID'}
}
export default EventsStatementsSummaryByThreadByEventName;

interface EventsStatementsSummaryByThreadByEventName_InsertParameters {
  AVG_TIMER_WAIT: (string | number | BigInt)
  COUNT_SECONDARY: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  EVENT_NAME: string & {readonly __brand?: 'events_statements_summary_by_thread_by_event_name_EVENT_NAME'}
  MAX_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  SUM_CPU_TIME: (string | number | BigInt)
  SUM_CREATED_TMP_DISK_TABLES: (string | number | BigInt)
  SUM_CREATED_TMP_TABLES: (string | number | BigInt)
  SUM_ERRORS: (string | number | BigInt)
  SUM_LOCK_TIME: (string | number | BigInt)
  SUM_NO_GOOD_INDEX_USED: (string | number | BigInt)
  SUM_NO_INDEX_USED: (string | number | BigInt)
  SUM_ROWS_AFFECTED: (string | number | BigInt)
  SUM_ROWS_EXAMINED: (string | number | BigInt)
  SUM_ROWS_SENT: (string | number | BigInt)
  SUM_SELECT_FULL_JOIN: (string | number | BigInt)
  SUM_SELECT_FULL_RANGE_JOIN: (string | number | BigInt)
  SUM_SELECT_RANGE: (string | number | BigInt)
  SUM_SELECT_RANGE_CHECK: (string | number | BigInt)
  SUM_SELECT_SCAN: (string | number | BigInt)
  SUM_SORT_MERGE_PASSES: (string | number | BigInt)
  SUM_SORT_RANGE: (string | number | BigInt)
  SUM_SORT_ROWS: (string | number | BigInt)
  SUM_SORT_SCAN: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
  SUM_WARNINGS: (string | number | BigInt)
  THREAD_ID: (string | number | BigInt) & {readonly __brand?: 'events_statements_summary_by_thread_by_event_name_THREAD_ID'}
}
export type {EventsStatementsSummaryByThreadByEventName_InsertParameters}
