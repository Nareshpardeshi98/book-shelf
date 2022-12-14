/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: 6CAqCwL4SX9uG5E6dCwAAKX0aCFT2NIbFiRwOImUHWIObqXylefuAs9UWLVc4VYlU7AL4JVSmaLMHS5qrnA85w==
 */

/* eslint-disable */
// tslint:disable

import Address from './address'
import Staff from './staff'

interface Store {
  address_id: Address['address_id']
  /**
   * @default CURRENT_TIMESTAMP
   */
  last_update: (string | Date)
  manager_staff_id: Staff['staff_id']
  store_id: (boolean | number) & {readonly __brand?: 'store_store_id'}
}
export default Store;

interface Store_InsertParameters {
  address_id: Address['address_id']
  /**
   * @default CURRENT_TIMESTAMP
   */
  last_update?: (string | Date)
  manager_staff_id: Staff['staff_id']
  store_id: (boolean | number) & {readonly __brand?: 'store_store_id'}
}
export type {Store_InsertParameters}
