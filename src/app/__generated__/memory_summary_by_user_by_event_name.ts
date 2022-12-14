/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: wOmXuLWtZJVhyJdcA830pTfnlYeMtwSIN0b+dqw1UxBAELd3+1yEZrJu7GSq/fsQ7mjVGQhbAEHf156PlDxDvQ==
 */

/* eslint-disable */
// tslint:disable

interface MemorySummaryByUserByEventName {
  COUNT_ALLOC: (string | number | BigInt)
  COUNT_FREE: (string | number | BigInt)
  CURRENT_COUNT_USED: (string | number | BigInt)
  CURRENT_NUMBER_OF_BYTES_USED: (string | number | BigInt)
  EVENT_NAME: string
  HIGH_COUNT_USED: (string | number | BigInt)
  HIGH_NUMBER_OF_BYTES_USED: (string | number | BigInt)
  LOW_COUNT_USED: (string | number | BigInt)
  LOW_NUMBER_OF_BYTES_USED: (string | number | BigInt)
  SUM_NUMBER_OF_BYTES_ALLOC: (string | number | BigInt)
  SUM_NUMBER_OF_BYTES_FREE: (string | number | BigInt)
  USER: (string) | null
}
export default MemorySummaryByUserByEventName;

interface MemorySummaryByUserByEventName_InsertParameters {
  COUNT_ALLOC: (string | number | BigInt)
  COUNT_FREE: (string | number | BigInt)
  CURRENT_COUNT_USED: (string | number | BigInt)
  CURRENT_NUMBER_OF_BYTES_USED: (string | number | BigInt)
  EVENT_NAME: string
  HIGH_COUNT_USED: (string | number | BigInt)
  HIGH_NUMBER_OF_BYTES_USED: (string | number | BigInt)
  LOW_COUNT_USED: (string | number | BigInt)
  LOW_NUMBER_OF_BYTES_USED: (string | number | BigInt)
  SUM_NUMBER_OF_BYTES_ALLOC: (string | number | BigInt)
  SUM_NUMBER_OF_BYTES_FREE: (string | number | BigInt)
  USER?: (string) | null
}
export type {MemorySummaryByUserByEventName_InsertParameters}
