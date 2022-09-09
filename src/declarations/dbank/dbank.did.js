export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkBalance' : IDL.Func([], [IDL.Float64], ['query']),
    'compund' : IDL.Func([], [], ['oneway']),
    'dec' : IDL.Func([IDL.Float64], [], ['oneway']),
    'inc' : IDL.Func([IDL.Float64], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
