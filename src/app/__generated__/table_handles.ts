/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: AOIUoXlRreIf7RI32suVBGbYIe6qK8TVEVwLeNqIRqJ/wDbLV0GyIAyY6MeW7LjFKwWg9PN62PO4HWXMvT6w5A==
 */

/* eslint-disable */
// tslint:disable

interface TableHandles {
  EXTERNAL_LOCK: (string) | null
  INTERNAL_LOCK: (string) | null
  OBJECT_INSTANCE_BEGIN: (string | number | BigInt) & {readonly __brand?: 'table_handles_OBJECT_INSTANCE_BEGIN'}
  OBJECT_NAME: string
  OBJECT_SCHEMA: string
  OBJECT_TYPE: string
  OWNER_EVENT_ID: ((string | number | BigInt)) | null
  OWNER_THREAD_ID: ((string | number | BigInt)) | null
}
export default TableHandles;

interface TableHandles_InsertParameters {
  EXTERNAL_LOCK?: (string) | null
  INTERNAL_LOCK?: (string) | null
  OBJECT_INSTANCE_BEGIN: (string | number | BigInt) & {readonly __brand?: 'table_handles_OBJECT_INSTANCE_BEGIN'}
  OBJECT_NAME: string
  OBJECT_SCHEMA: string
  OBJECT_TYPE: string
  OWNER_EVENT_ID?: ((string | number | BigInt)) | null
  OWNER_THREAD_ID?: ((string | number | BigInt)) | null
}
export type {TableHandles_InsertParameters}
