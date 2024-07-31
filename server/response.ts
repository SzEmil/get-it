import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";

export class DatabaseErrorResponse extends Response {
  constructor({ message, code }: PrismaClientKnownRequestError) {
    super(
      JSON.stringify({
        data: null,
        error: {
          message,
          code,
        },
      }),
      {
        status: 500,
      },
    );
  }
}

export class InternalServerErrorReponse extends NextResponse {
  constructor() {
    super(JSON.stringify({ data: null, error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
