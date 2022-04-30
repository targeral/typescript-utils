// get function args type
export type Argu<F extends (input: any) => any> = F extends (
    input: infer A,
  ) => any
    ? A
    : never;
  
// add prefix to object props
export type AddPrefixForProp<O, Prefix> = {
  [Property in keyof O as `${string & Prefix}${string & Property}`]: O[Property]
};
