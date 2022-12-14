/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: 4npgoy37yk+LJLEeahByyfYIFy+50EjtW1FRKW9sgAeEvYq3HgbI1NE/W6Oh1gCPZ380O2oO01WCWZW9P2kzuQ==
 */

/* eslint-disable */
// tslint:disable

interface ReplicationGroupMemberStats {
  CHANNEL_NAME: string
  COUNT_CONFLICTS_DETECTED: (string | number | BigInt)
  COUNT_TRANSACTIONS_CHECKED: (string | number | BigInt)
  COUNT_TRANSACTIONS_IN_QUEUE: (string | number | BigInt)
  COUNT_TRANSACTIONS_LOCAL_PROPOSED: (string | number | BigInt)
  COUNT_TRANSACTIONS_LOCAL_ROLLBACK: (string | number | BigInt)
  COUNT_TRANSACTIONS_REMOTE_APPLIED: (string | number | BigInt)
  COUNT_TRANSACTIONS_REMOTE_IN_APPLIER_QUEUE: (string | number | BigInt)
  COUNT_TRANSACTIONS_ROWS_VALIDATING: (string | number | BigInt)
  LAST_CONFLICT_FREE_TRANSACTION: string
  MEMBER_ID: string
  TRANSACTIONS_COMMITTED_ALL_MEMBERS: unknown
  VIEW_ID: string
}
export default ReplicationGroupMemberStats;

interface ReplicationGroupMemberStats_InsertParameters {
  CHANNEL_NAME: string
  COUNT_CONFLICTS_DETECTED: (string | number | BigInt)
  COUNT_TRANSACTIONS_CHECKED: (string | number | BigInt)
  COUNT_TRANSACTIONS_IN_QUEUE: (string | number | BigInt)
  COUNT_TRANSACTIONS_LOCAL_PROPOSED: (string | number | BigInt)
  COUNT_TRANSACTIONS_LOCAL_ROLLBACK: (string | number | BigInt)
  COUNT_TRANSACTIONS_REMOTE_APPLIED: (string | number | BigInt)
  COUNT_TRANSACTIONS_REMOTE_IN_APPLIER_QUEUE: (string | number | BigInt)
  COUNT_TRANSACTIONS_ROWS_VALIDATING: (string | number | BigInt)
  LAST_CONFLICT_FREE_TRANSACTION: string
  MEMBER_ID: string
  TRANSACTIONS_COMMITTED_ALL_MEMBERS: unknown
  VIEW_ID: string
}
export type {ReplicationGroupMemberStats_InsertParameters}
