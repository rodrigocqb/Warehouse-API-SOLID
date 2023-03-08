export default abstract class AbstractGetRepository<T> {
  abstract get(): Promise<T[]>;
}
