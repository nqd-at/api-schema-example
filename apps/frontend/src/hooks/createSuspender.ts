export type Fetcher<T, A extends any[]> = (...args: A) => Promise<T>;

export function createSuspender<T, A extends any[]>(
  fetcher: Fetcher<T, A>,
  ...args: A
) {
  let status = "pending";
  let result: T | null;

  const suspender = fetcher(...args)
    .then((data) => {
      status = "success";
      result = data;
    })
    .catch((error) => {
      status = "error";
      result = error;
    });

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}
