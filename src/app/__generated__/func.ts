/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: kp16Kp69LZbGLRhCX9PSWC1OLdQFn3HFmhz9NgQZvOek3m8EUHJMq9vEcELCom9j5SWNMFhDuO9Q60sZTokgOQ==
 */

/* eslint-disable */
// tslint:disable

/**
 * User defined functions
 */
interface Func {
  dl: string
  name: string & {readonly __brand?: 'func_name'}
  /**
   * @default 0
   */
  ret: (boolean | number)
  type: ("function" | "aggregate")
}
export default Func;

/**
 * User defined functions
 */
interface Func_InsertParameters {
  dl?: string
  name?: string & {readonly __brand?: 'func_name'}
  /**
   * @default 0
   */
  ret?: (boolean | number)
  type: ("function" | "aggregate")
}
export type {Func_InsertParameters}
