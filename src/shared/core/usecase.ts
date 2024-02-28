export interface IUseCase<in T, out R> {
  execute: (input: T) => Promise<R>
}
