// import * as DB from "@prisma/client";
// import { CartItem } from "../stores/cart/cart.types";
// import { Customer } from "../stores/order/order.types";
// import { CustomerSchema } from "../zod/schemas/customer.schema";

// type FoundProduct = Pick<DB.Product, "id" | "name" | "price" | "description"> & {
//   category: {
//     name: string;
//   };
// };

// export const findMissingProductsIds = (products: CartItem[], foundProducts: FoundProduct[]) =>
//   products
//     .filter((product) => !foundProducts.find((foundProduct) => foundProduct.id === product.id))
//     .map((product) => product.id);

// export const validateCutomerFields = (customer: Customer): string[] | [] => {
//   try {
//     CustomerSchema.parse(customer);
//     return [];
//   } catch (error: any) {
//     const invalidFields = error.errors.map((error: any) => error.path[0]);
//     return invalidFields;
//   }
// };

// export const sendValidationErrorMessage = (
//   deliveryMethodPrice: number | undefined,
//   deliveryMethodId: number,
//   missingProductIds: number[],
//   emptyCustomerFields: string[],
// ) =>
//   new Error(
//     `Incorrect request data: 
//           ${!deliveryMethodPrice && `Delivery method with id: "${deliveryMethodId}" not found.`} 
//           ${
//             missingProductIds.length > 0 &&
//             `Products with ids: ${missingProductIds.join(", ")} not found`
//           }
//           ${
//             emptyCustomerFields?.length > 0 &&
//             `Incomplete customer data: ${emptyCustomerFields.join(", ")}`
//           }
//           `,
//   );
