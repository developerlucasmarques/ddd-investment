import { type UniqueEntityId } from '../unique-entity-id'

export abstract class DomainEvent<T extends { id: UniqueEntityId }> {
  readonly name: string
  readonly occurredOn: Date
  private readonly _payload: T

  protected constructor (payload: T) {
    const thisClass = Reflect.getPrototypeOf(this) as object

    this.occurredOn = new Date()
    this.name = thisClass.constructor.name
    this._payload = payload
  }

  get payload (): T {
    return this._payload
  }
}
