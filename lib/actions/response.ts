export function FormatResponse<T, P>(
  fn: (props: P) => Promise<T>
): (props?: P) => Promise<{ data: T | null; isError: boolean; error: any }> {
  let response: T | null;
  let isError: boolean = false;
  let error: any = null;
  return async (
    props?: P
  ): Promise<{ data: T | null; isError: boolean; error: any }> => {
    try {
      if (!props) {
        props = {} as P;
      }
      response = await fn(props);
    } catch (err: any) {
      isError = true;
      error = err.message;
    }
    return {
      data: response ?? null,
      isError,
      error,
    };
  };
}
