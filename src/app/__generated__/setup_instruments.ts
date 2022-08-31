/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: c6d33WOiB5ZSJ6FxJfBiE0iidgSEUad5O8pkInMuYERPFal7JRSdNvPeIgkKC3zIV4Vqkh+eAZkV2l69oQRATw==
 */

/* eslint-disable */
// tslint:disable

interface SetupInstruments {
  DOCUMENTATION: (unknown) | null
  ENABLED: ("YES" | "NO")
  NAME: string & {readonly __brand?: 'setup_instruments_NAME'}
  PROPERTIES: ("singleton" | "progress" | "user" | "global_statistics" | "mutable")[]
  TIMED: (("YES" | "NO")) | null
  VOLATILITY: number
}
export default SetupInstruments;

interface SetupInstruments_InsertParameters {
  DOCUMENTATION?: (unknown) | null
  ENABLED: ("YES" | "NO")
  NAME: string & {readonly __brand?: 'setup_instruments_NAME'}
  PROPERTIES: ("singleton" | "progress" | "user" | "global_statistics" | "mutable")[]
  TIMED?: (("YES" | "NO")) | null
  VOLATILITY: number
}
export type {SetupInstruments_InsertParameters}
