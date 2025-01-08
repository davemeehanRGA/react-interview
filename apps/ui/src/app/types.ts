type Data = {
  id: number;
  title: string;
  completed?: boolean;
};

// ----------- Question 1 -----------
type PartialData = Partial<Data>;
// ^? what is this value

// ----------- Question 2 -----------
type RefinedData<T extends Record<PropertyKey, unknown>> = T & { id: number };
// ^? what is this value

// ----------- Question 3 -----------
// What does this type do?
type PartialByKeys<
  TYPE extends Record<PropertyKey, any>, // any object
  KEYS extends keyof TYPE // keys of that object
> = {
  // Omit<> the keys passed in, leaving the rest
  // Intersect the Partial<> of the keys passed in
  [Key in keyof (Omit<TYPE, KEYS> & Partial<Pick<TYPE, KEYS>>)]: TYPE[Key];
};
