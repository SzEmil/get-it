export const handleError = (error: unknown) => {
    if (error instanceof Error) {
      console.error(error.message);
  
      throw new Error(error.message);
    } else if (typeof error === 'string') {
      console.error(error);
      throw new Error(`Error: ${error}`);
    } else {
      console.error(error);
      throw new Error(`Uknown error: ${JSON.stringify(error)}`);
    }
  };