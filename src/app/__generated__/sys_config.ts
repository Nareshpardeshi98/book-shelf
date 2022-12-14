/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: ergLjV05elv1zDqwAKHXUsDCruSH615xP4eEOchECqDyaQmkL8RUj74W2J7nANEy+hGQhUkk7WF9QKhS8EHgdA==
 */

/* eslint-disable */
// tslint:disable

interface SysConfig {
  set_by: (string) | null
  /**
   * @default CURRENT_TIMESTAMP
   */
  set_time: ((string | Date)) | null
  value: (string) | null
  variable: string & {readonly __brand?: 'sys_config_variable'}
}
export default SysConfig;

interface SysConfig_InsertParameters {
  set_by?: (string) | null
  /**
   * @default CURRENT_TIMESTAMP
   */
  set_time?: ((string | Date)) | null
  value?: (string) | null
  variable: string & {readonly __brand?: 'sys_config_variable'}
}
export type {SysConfig_InsertParameters}
