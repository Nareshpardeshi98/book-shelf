/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: 1YmHt7DcN0xf2PflQv2RWjVaPhmSEcq9ou51mcTum259LtLYGE5PEHCUE/hUW/GL8NiwMD1J70hwwaqwNJsg6g==
 */

/* eslint-disable */
// tslint:disable

interface Accounts {
  CURRENT_CONNECTIONS: (string | number | BigInt)
  HOST: (string) | null
  TOTAL_CONNECTIONS: (string | number | BigInt)
  USER: (string) | null
}
export default Accounts;

interface Accounts_InsertParameters {
  CURRENT_CONNECTIONS: (string | number | BigInt)
  HOST?: (string) | null
  TOTAL_CONNECTIONS: (string | number | BigInt)
  USER?: (string) | null
}
export type {Accounts_InsertParameters}