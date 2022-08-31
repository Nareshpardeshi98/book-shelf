/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: Qdv/R1vgvoqDHe3dYjja9CYqm+avSZG6Op5Ev6sYgw5JhrfZjsZsk3gjjR6z5nis6bHUr76d9Bu7lgq1G9C2SA==
 */

/* eslint-disable */
// tslint:disable

import Customer from './customer'
import Inventory from './inventory'
import Staff from './staff'

interface Rental {
  customer_id: Customer['customer_id']
  inventory_id: Inventory['inventory_id']
  /**
   * @default CURRENT_TIMESTAMP
   */
  last_update: (string | Date)
  rental_date: (string | Date)
  rental_id: number & {readonly __brand?: 'rental_rental_id'}
  return_date: ((string | Date)) | null
  staff_id: Staff['staff_id']
}
export default Rental;

interface Rental_InsertParameters {
  customer_id: Customer['customer_id']
  inventory_id: Inventory['inventory_id']
  /**
   * @default CURRENT_TIMESTAMP
   */
  last_update?: (string | Date)
  rental_date: (string | Date)
  rental_id: number & {readonly __brand?: 'rental_rental_id'}
  return_date?: ((string | Date)) | null
  staff_id: Staff['staff_id']
}
export type {Rental_InsertParameters}
