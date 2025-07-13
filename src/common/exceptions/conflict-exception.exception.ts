import { HttpStatus } from '@nestjs/common';
import { BaseException } from './base.exception';

/**
 * A custom exception that represents a "Conflict" HTTP error.
 * This exception extends from the BaseException class.
 *
 * It is typically thrown when a resource already exists in the system,
 * causing a conflict (HTTP status 409).
 *
 * @example
 * throw new ConflictException('The item already exists');
 */
export class ConflictException extends BaseException {
  /**
   * Creates an instance of the ConflictException.
   *
   * @param message - The error message describing the conflict.
   * @param metadata - Optional additional metadata related to the error (e.g., error codes).
   */
  constructor(message: string, metadata?: any) {
    super({
      name: ConflictException.name,
      message,
      statusCode: HttpStatus.CONFLICT,
      metadata,
    });
  }
}
