/**
* GENERATED CODE - DO NOT MODIFY
* Created Thu Sep 22 2022
*/
import { Headers } from '@adxp/xrpc'

export interface QueryParams {}

export interface CallOptions {
  headers?: Headers;
  encoding: '';
}

export interface InputSchema {
  [k: string]: unknown;
}

export interface OutputSchema {
  name: string;
  did: string;
}

export interface Response {
  success: boolean;
  error: boolean;
  headers: Headers;
  data: OutputSchema;
}