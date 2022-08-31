/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: NL3ZaztULYLnOVkg8q18Jm6aAjf+7evHKm5EW39vPq6kTplAmAfl+hnSTqQYP7BiJJq9a/+2JqNPtqiNozYz8w==
 */

/* eslint-disable */
// tslint:disable

/**
 * help topics
 */
interface HelpTopic {
  description: string
  example: string
  help_category_id: number
  help_topic_id: number & {readonly __brand?: 'help_topic_help_topic_id'}
  name: string
  url: string
}
export default HelpTopic;

/**
 * help topics
 */
interface HelpTopic_InsertParameters {
  description: string
  example: string
  help_category_id: number
  help_topic_id: number & {readonly __brand?: 'help_topic_help_topic_id'}
  name: string
  url: string
}
export type {HelpTopic_InsertParameters}