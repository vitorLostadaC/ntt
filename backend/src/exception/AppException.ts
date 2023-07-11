import { HttpException, HttpStatus } from "@nestjs/common"

interface AppExceptionProps {
  message: string
  status: HttpStatus
}

class AppException extends HttpException {
  constructor({ message, status }: AppExceptionProps) {
    super(
      {
        message
      },
      status
    )
  }
}

export { AppException, AppExceptionProps }
