/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: jeFf0CWaM6ZpEA8y0/ciFgX2ClWNpIxBiAc8C4LjkLnfdHfSwmGIAzLiQ+1aN1Ztdv3GgGxqgqazjYGvV6KiQw==
 */

/* eslint-disable */
// tslint:disable

interface Members {
  member_id: number & {readonly __brand?: 'members_member_id'}
  name: (string) | null
}
export default Members;

interface Members_InsertParameters {
  member_id: number & {readonly __brand?: 'members_member_id'}
  name?: (string) | null
}
export type {Members_InsertParameters}