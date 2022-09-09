import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'checkBalance' : () => Promise<number>,
  'compund' : () => Promise<undefined>,
  'dec' : (arg_0: number) => Promise<undefined>,
  'inc' : (arg_0: number) => Promise<undefined>,
}
