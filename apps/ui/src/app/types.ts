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
type UtilType<
  TYPE extends Record<PropertyKey, any>,
  KEYS extends keyof TYPE
> = {
  [Key in keyof (Omit<TYPE, KEYS> & Partial<Pick<TYPE, KEYS>>)]: TYPE[Key];
};
