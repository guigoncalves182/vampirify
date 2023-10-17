type TPartial<N extends number, M extends number[] = []> = M["length"] extends N
  ? M[number]
  : TPartial<N, [...M, M["length"]]>;

export type TRange<F extends number, T extends number> = Exclude<
TPartial<T>,
TPartial<F>,
>;
