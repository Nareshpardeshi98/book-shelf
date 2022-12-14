/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: GiapbA2SIE0CCYauqVj6WzDyjiCt5K0h57RVDOeFsGVHkO5xkpRzbWHL2IU09V118CQP6nc+dTBghLLpAyKBJw==
 */

/* eslint-disable */
// tslint:disable

/**
 * Master Information
 */
interface SlaveMasterInfo {
  /**
   * Displays which interface is employed when connecting to the MySQL server
   */
  Bind: (string) | null
  /**
   * The channel on which the replica is connected to a source. Used in Multisource Replication
   */
  Channel_name: string & {readonly __brand?: 'slave_master_info_Channel_name'}
  /**
   * The period (in seconds) that the slave will wait before trying to reconnect to the master.
   */
  Connect_retry: number
  /**
   * Indicates whether GTIDs will be used to retrieve events from the master.
   */
  Enabled_auto_position: (boolean | number)
  /**
   * Indicates whether the server supports SSL connections.
   */
  Enabled_ssl: (boolean | number)
  /**
   * Preference to get public key from master.
   */
  Get_public_key: (boolean | number)
  /**
   * Indicates if this channel only uses GTIDs and does not persist positions.
   * 
   * @default 0
   */
  Gtid_only: (boolean | number)
  Heartbeat: number
  /**
   * The host name of the source.
   */
  Host: (string) | null
  /**
   * The number of server IDs to be ignored, followed by the actual server IDs
   */
  Ignored_server_ids: (string) | null
  /**
   * Compression algorithm supported for data transfer between source and replica.
   */
  Master_compression_algorithm: string
  /**
   * The name of the master binary log currently being read from the master.
   */
  Master_log_name: string
  /**
   * The master log position of the last read event.
   */
  Master_log_pos: (string | number | BigInt)
  /**
   * Compression level associated with zstd compression algorithm.
   */
  Master_zstd_compression_level: number
  /**
   * Network namespace used for communication with the master server.
   */
  Network_namespace: (string) | null
  /**
   * Number of lines in the file.
   */
  Number_of_lines: number
  /**
   * The network port used to connect to the master.
   */
  Port: number
  /**
   * The file containing public key of master server.
   */
  Public_key_path: (string) | null
  /**
   * Number of reconnect attempts, to the master, before giving up.
   */
  Retry_count: (string | number | BigInt)
  /**
   * Indicates whether the channel connection failover is enabled.
   * 
   * @default 0
   */
  Source_connection_auto_failover: (boolean | number)
  /**
   * The file used for the Certificate Authority (CA) certificate.
   */
  Ssl_ca: (string) | null
  /**
   * The path to the Certificate Authority (CA) certificates.
   */
  Ssl_capath: (string) | null
  /**
   * The name of the SSL certificate file.
   */
  Ssl_cert: (string) | null
  /**
   * The name of the cipher in use for the SSL connection.
   */
  Ssl_cipher: (string) | null
  /**
   * The file used for the Certificate Revocation List (CRL)
   */
  Ssl_crl: (string) | null
  /**
   * The path used for Certificate Revocation List (CRL) files
   */
  Ssl_crlpath: (string) | null
  /**
   * The name of the SSL key file.
   */
  Ssl_key: (string) | null
  /**
   * Whether to verify the server certificate.
   */
  Ssl_verify_server_cert: (boolean | number)
  /**
   * Ciphersuites used for TLS 1.3 communication with the master server.
   */
  Tls_ciphersuites: (string) | null
  /**
   * Tls version
   */
  Tls_version: (string) | null
  /**
   * The user name used to connect to the master.
   */
  User_name: (string) | null
  /**
   * The password used to connect to the master.
   */
  User_password: (string) | null
  /**
   * The master server uuid.
   */
  Uuid: (string) | null
}
export default SlaveMasterInfo;

/**
 * Master Information
 */
interface SlaveMasterInfo_InsertParameters {
  /**
   * Displays which interface is employed when connecting to the MySQL server
   */
  Bind?: (string) | null
  /**
   * The channel on which the replica is connected to a source. Used in Multisource Replication
   */
  Channel_name: string & {readonly __brand?: 'slave_master_info_Channel_name'}
  /**
   * The period (in seconds) that the slave will wait before trying to reconnect to the master.
   */
  Connect_retry: number
  /**
   * Indicates whether GTIDs will be used to retrieve events from the master.
   */
  Enabled_auto_position: (boolean | number)
  /**
   * Indicates whether the server supports SSL connections.
   */
  Enabled_ssl: (boolean | number)
  /**
   * Preference to get public key from master.
   */
  Get_public_key: (boolean | number)
  /**
   * Indicates if this channel only uses GTIDs and does not persist positions.
   * 
   * @default 0
   */
  Gtid_only?: (boolean | number)
  Heartbeat: number
  /**
   * The host name of the source.
   */
  Host?: (string) | null
  /**
   * The number of server IDs to be ignored, followed by the actual server IDs
   */
  Ignored_server_ids?: (string) | null
  /**
   * Compression algorithm supported for data transfer between source and replica.
   */
  Master_compression_algorithm: string
  /**
   * The name of the master binary log currently being read from the master.
   */
  Master_log_name: string
  /**
   * The master log position of the last read event.
   */
  Master_log_pos: (string | number | BigInt)
  /**
   * Compression level associated with zstd compression algorithm.
   */
  Master_zstd_compression_level: number
  /**
   * Network namespace used for communication with the master server.
   */
  Network_namespace?: (string) | null
  /**
   * Number of lines in the file.
   */
  Number_of_lines: number
  /**
   * The network port used to connect to the master.
   */
  Port: number
  /**
   * The file containing public key of master server.
   */
  Public_key_path?: (string) | null
  /**
   * Number of reconnect attempts, to the master, before giving up.
   */
  Retry_count: (string | number | BigInt)
  /**
   * Indicates whether the channel connection failover is enabled.
   * 
   * @default 0
   */
  Source_connection_auto_failover?: (boolean | number)
  /**
   * The file used for the Certificate Authority (CA) certificate.
   */
  Ssl_ca?: (string) | null
  /**
   * The path to the Certificate Authority (CA) certificates.
   */
  Ssl_capath?: (string) | null
  /**
   * The name of the SSL certificate file.
   */
  Ssl_cert?: (string) | null
  /**
   * The name of the cipher in use for the SSL connection.
   */
  Ssl_cipher?: (string) | null
  /**
   * The file used for the Certificate Revocation List (CRL)
   */
  Ssl_crl?: (string) | null
  /**
   * The path used for Certificate Revocation List (CRL) files
   */
  Ssl_crlpath?: (string) | null
  /**
   * The name of the SSL key file.
   */
  Ssl_key?: (string) | null
  /**
   * Whether to verify the server certificate.
   */
  Ssl_verify_server_cert: (boolean | number)
  /**
   * Ciphersuites used for TLS 1.3 communication with the master server.
   */
  Tls_ciphersuites?: (string) | null
  /**
   * Tls version
   */
  Tls_version?: (string) | null
  /**
   * The user name used to connect to the master.
   */
  User_name?: (string) | null
  /**
   * The password used to connect to the master.
   */
  User_password?: (string) | null
  /**
   * The master server uuid.
   */
  Uuid?: (string) | null
}
export type {SlaveMasterInfo_InsertParameters}
