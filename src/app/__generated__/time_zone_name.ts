/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: To+h+WezcvKmPoz3WLKEhZWxyw4KhahZxi/Xsmud5wgp7zlYAqOCp5MlPrXCgeY9fZ/Gubn4azcck2TfDjypzw==
 */

/* eslint-disable */
// tslint:disable

/**
 * Time zone names
 */
interface TimeZoneName {
  Name: string & {readonly __brand?: 'time_zone_name_Name'}
  Time_zone_id: number
}
export default TimeZoneName;

/**
 * Time zone names
 */
interface TimeZoneName_InsertParameters {
  Name: string & {readonly __brand?: 'time_zone_name_Name'}
  Time_zone_id: number
}
export type {TimeZoneName_InsertParameters}
