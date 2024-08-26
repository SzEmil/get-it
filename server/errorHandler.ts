import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { DatabaseErrorResponse, InternalServerErrorReponse } from "./response";
import { NextRequest, NextResponse } from "next/server";

type HandlerFunction = (req: NextRequest, res: NextResponse) => Promise<void | Response>;

export const errorHandler =
  (handler: HandlerFunction) => async (req: NextRequest, res: NextResponse) =>
    handler(req, res).catch((err) => {
      console.error(err);

      if (err instanceof PrismaClientKnownRequestError) {
        return new DatabaseErrorResponse(err);
      } else {
        return new InternalServerErrorReponse();
      }
    });
