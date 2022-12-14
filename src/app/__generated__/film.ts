/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: PltMG+d/tGnGVhNpcMDZLDwYELm+rcHHYS0JHq8mQfPVZ9YoN0WsNyWjuazXzCRyu6Q/IU6fbsWQekO7p6QyUA==
 */

/* eslint-disable */
// tslint:disable

import Language from './language'

interface Film {
  description: (string) | null
  film_id: number & {readonly __brand?: 'film_film_id'}
  language_id: Language['language_id']
  /**
   * @default CURRENT_TIMESTAMP
   */
  last_update: (string | Date)
  length: (number) | null
  original_language_id: (Language['language_id']) | null
  /**
   * @default G
   */
  rating: (("G" | "PG" | "PG-13" | "R" | "NC-17")) | null
  release_year: (number) | null
  /**
   * @default 3
   */
  rental_duration: (boolean | number)
  /**
   * @default 4.99
   */
  rental_rate: unknown
  /**
   * @default 19.99
   */
  replacement_cost: unknown
  special_features: (("Trailers" | "Commentaries" | "Deleted Scenes" | "Behind the Scenes")[]) | null
  title: string
}
export default Film;

interface Film_InsertParameters {
  description?: (string) | null
  film_id: number & {readonly __brand?: 'film_film_id'}
  language_id: Language['language_id']
  /**
   * @default CURRENT_TIMESTAMP
   */
  last_update?: (string | Date)
  length?: (number) | null
  original_language_id?: (Language['language_id']) | null
  /**
   * @default G
   */
  rating?: (("G" | "PG" | "PG-13" | "R" | "NC-17")) | null
  release_year?: (number) | null
  /**
   * @default 3
   */
  rental_duration?: (boolean | number)
  /**
   * @default 4.99
   */
  rental_rate?: unknown
  /**
   * @default 19.99
   */
  replacement_cost?: unknown
  special_features?: (("Trailers" | "Commentaries" | "Deleted Scenes" | "Behind the Scenes")[]) | null
  title: string
}
export type {Film_InsertParameters}
