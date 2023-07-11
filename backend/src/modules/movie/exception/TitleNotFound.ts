import { HttpStatus } from "@nestjs/common"
import { AppException } from "../../../exception/AppException"

export class TitleNotFoundException extends AppException {
  constructor() {
    super({
      message: "Para procurar um filme é obrigatorio fornecer seu titulo.",
      status: HttpStatus.NOT_FOUND
    })
  }
}
