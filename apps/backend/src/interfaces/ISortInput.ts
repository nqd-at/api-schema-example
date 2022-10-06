export enum SortDirection {
  Ascending = "asc",
  Descending = "desc"
}

export interface ISortInput<T extends Record<string, any> = {}> {
  sortBy: keyof T
  sortDirection: SortDirection
}