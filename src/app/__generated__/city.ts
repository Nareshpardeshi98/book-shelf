/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: qiUS5M6D9XZZntPo+EvVpLkZ+g5BX3bDZtGahAToVLm1sE3GBoUrlKpiJxv5qX+X+1b0wQYMXaQsOpIvKmwhSw==
 */

/* eslint-disable */
// tslint:disable

import Country from './country'

interface City {
  city: string
  city_id: number & {readonly __brand?: 'city_city_id'}
  country_id: Country['country_id']
  /**
   * @default CURRENT_TIMESTAMP
   */
  last_update: (string | Date)
}
export default City;

interface City_InsertParameters {
  city: string
  city_id: number & {readonly __brand?: 'city_city_id'}
  country_id: Country['country_id']
  /**
   * @default CURRENT_TIMESTAMP
   */
  last_update?: (string | Date)
}
export type {City_InsertParameters}