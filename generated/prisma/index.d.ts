
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model JobSeekerProfile
 * 
 */
export type JobSeekerProfile = $Result.DefaultSelection<Prisma.$JobSeekerProfilePayload>
/**
 * Model WorkExperience
 * 
 */
export type WorkExperience = $Result.DefaultSelection<Prisma.$WorkExperiencePayload>
/**
 * Model JobSeekerDocument
 * 
 */
export type JobSeekerDocument = $Result.DefaultSelection<Prisma.$JobSeekerDocumentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  BHABINKAMTIBMAS: 'BHABINKAMTIBMAS',
  JOB_SEEKER: 'JOB_SEEKER',
  COMPANY: 'COMPANY'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const VerificationStatus: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  NEEDS_REVISION: 'NEEDS_REVISION',
  REJECTED: 'REJECTED'
};

export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type VerificationStatus = $Enums.VerificationStatus

export const VerificationStatus: typeof $Enums.VerificationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobSeekerProfile`: Exposes CRUD operations for the **JobSeekerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobSeekerProfiles
    * const jobSeekerProfiles = await prisma.jobSeekerProfile.findMany()
    * ```
    */
  get jobSeekerProfile(): Prisma.JobSeekerProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workExperience`: Exposes CRUD operations for the **WorkExperience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkExperiences
    * const workExperiences = await prisma.workExperience.findMany()
    * ```
    */
  get workExperience(): Prisma.WorkExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobSeekerDocument`: Exposes CRUD operations for the **JobSeekerDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobSeekerDocuments
    * const jobSeekerDocuments = await prisma.jobSeekerDocument.findMany()
    * ```
    */
  get jobSeekerDocument(): Prisma.JobSeekerDocumentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    JobSeekerProfile: 'JobSeekerProfile',
    WorkExperience: 'WorkExperience',
    JobSeekerDocument: 'JobSeekerDocument'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "jobSeekerProfile" | "workExperience" | "jobSeekerDocument"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      JobSeekerProfile: {
        payload: Prisma.$JobSeekerProfilePayload<ExtArgs>
        fields: Prisma.JobSeekerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobSeekerProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobSeekerProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload>
          }
          findFirst: {
            args: Prisma.JobSeekerProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobSeekerProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload>
          }
          findMany: {
            args: Prisma.JobSeekerProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload>[]
          }
          create: {
            args: Prisma.JobSeekerProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload>
          }
          createMany: {
            args: Prisma.JobSeekerProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobSeekerProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload>[]
          }
          delete: {
            args: Prisma.JobSeekerProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload>
          }
          update: {
            args: Prisma.JobSeekerProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload>
          }
          deleteMany: {
            args: Prisma.JobSeekerProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobSeekerProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobSeekerProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload>[]
          }
          upsert: {
            args: Prisma.JobSeekerProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload>
          }
          aggregate: {
            args: Prisma.JobSeekerProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobSeekerProfile>
          }
          groupBy: {
            args: Prisma.JobSeekerProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobSeekerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobSeekerProfileCountArgs<ExtArgs>
            result: $Utils.Optional<JobSeekerProfileCountAggregateOutputType> | number
          }
        }
      }
      WorkExperience: {
        payload: Prisma.$WorkExperiencePayload<ExtArgs>
        fields: Prisma.WorkExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          findFirst: {
            args: Prisma.WorkExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          findMany: {
            args: Prisma.WorkExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>[]
          }
          create: {
            args: Prisma.WorkExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          createMany: {
            args: Prisma.WorkExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>[]
          }
          delete: {
            args: Prisma.WorkExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          update: {
            args: Prisma.WorkExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          deleteMany: {
            args: Prisma.WorkExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>[]
          }
          upsert: {
            args: Prisma.WorkExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          aggregate: {
            args: Prisma.WorkExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkExperience>
          }
          groupBy: {
            args: Prisma.WorkExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkExperienceCountAggregateOutputType> | number
          }
        }
      }
      JobSeekerDocument: {
        payload: Prisma.$JobSeekerDocumentPayload<ExtArgs>
        fields: Prisma.JobSeekerDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobSeekerDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobSeekerDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerDocumentPayload>
          }
          findFirst: {
            args: Prisma.JobSeekerDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobSeekerDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerDocumentPayload>
          }
          findMany: {
            args: Prisma.JobSeekerDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerDocumentPayload>[]
          }
          create: {
            args: Prisma.JobSeekerDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerDocumentPayload>
          }
          createMany: {
            args: Prisma.JobSeekerDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobSeekerDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerDocumentPayload>[]
          }
          delete: {
            args: Prisma.JobSeekerDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerDocumentPayload>
          }
          update: {
            args: Prisma.JobSeekerDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerDocumentPayload>
          }
          deleteMany: {
            args: Prisma.JobSeekerDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobSeekerDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobSeekerDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerDocumentPayload>[]
          }
          upsert: {
            args: Prisma.JobSeekerDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerDocumentPayload>
          }
          aggregate: {
            args: Prisma.JobSeekerDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobSeekerDocument>
          }
          groupBy: {
            args: Prisma.JobSeekerDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobSeekerDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobSeekerDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<JobSeekerDocumentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    jobSeekerProfile?: JobSeekerProfileOmit
    workExperience?: WorkExperienceOmit
    jobSeekerDocument?: JobSeekerDocumentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type JobSeekerProfileCountOutputType
   */

  export type JobSeekerProfileCountOutputType = {
    experiences: number
    documents: number
  }

  export type JobSeekerProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experiences?: boolean | JobSeekerProfileCountOutputTypeCountExperiencesArgs
    documents?: boolean | JobSeekerProfileCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * JobSeekerProfileCountOutputType without action
   */
  export type JobSeekerProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfileCountOutputType
     */
    select?: JobSeekerProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobSeekerProfileCountOutputType without action
   */
  export type JobSeekerProfileCountOutputTypeCountExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkExperienceWhereInput
  }

  /**
   * JobSeekerProfileCountOutputType without action
   */
  export type JobSeekerProfileCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobSeekerDocumentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    passwordHash: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    phone: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobSeekerProfile?: boolean | User$jobSeekerProfileArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "passwordHash" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobSeekerProfile?: boolean | User$jobSeekerProfileArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      jobSeekerProfile: Prisma.$JobSeekerProfilePayload<ExtArgs> | null
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      email: string
      passwordHash: string
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobSeekerProfile<T extends User$jobSeekerProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$jobSeekerProfileArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.jobSeekerProfile
   */
  export type User$jobSeekerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    where?: JobSeekerProfileWhereInput
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    userId: string | null
    expiresAt: Date | null
    revokedAt: Date | null
    lastUsedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    userId: string | null
    expiresAt: Date | null
    revokedAt: Date | null
    lastUsedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    tokenHash: number
    userId: number
    expiresAt: number
    revokedAt: number
    lastUsedAt: number
    ipAddress: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    expiresAt?: true
    revokedAt?: true
    lastUsedAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    expiresAt?: true
    revokedAt?: true
    lastUsedAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    expiresAt?: true
    revokedAt?: true
    lastUsedAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    tokenHash: string
    userId: string
    expiresAt: Date
    revokedAt: Date | null
    lastUsedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    lastUsedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    lastUsedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    lastUsedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    lastUsedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenHash" | "userId" | "expiresAt" | "revokedAt" | "lastUsedAt" | "ipAddress" | "userAgent" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenHash: string
      userId: string
      expiresAt: Date
      revokedAt: Date | null
      lastUsedAt: Date | null
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly tokenHash: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly revokedAt: FieldRef<"Session", 'DateTime'>
    readonly lastUsedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model JobSeekerProfile
   */

  export type AggregateJobSeekerProfile = {
    _count: JobSeekerProfileCountAggregateOutputType | null
    _min: JobSeekerProfileMinAggregateOutputType | null
    _max: JobSeekerProfileMaxAggregateOutputType | null
  }

  export type JobSeekerProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    nik: string | null
    birthDate: Date | null
    provinsi: string | null
    kota: string | null
    district: string | null
    village: string | null
    rt: string | null
    rw: string | null
    address: string | null
    educationLevel: string | null
    educationMajor: string | null
    desiredWorkField: string | null
    employmentStatus: string | null
    jobSeekingStatus: string | null
    verificationStatus: $Enums.VerificationStatus | null
    verificationNote: string | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobSeekerProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    nik: string | null
    birthDate: Date | null
    provinsi: string | null
    kota: string | null
    district: string | null
    village: string | null
    rt: string | null
    rw: string | null
    address: string | null
    educationLevel: string | null
    educationMajor: string | null
    desiredWorkField: string | null
    employmentStatus: string | null
    jobSeekingStatus: string | null
    verificationStatus: $Enums.VerificationStatus | null
    verificationNote: string | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobSeekerProfileCountAggregateOutputType = {
    id: number
    userId: number
    nik: number
    birthDate: number
    provinsi: number
    kota: number
    district: number
    village: number
    rt: number
    rw: number
    address: number
    educationLevel: number
    educationMajor: number
    skills: number
    interests: number
    desiredWorkField: number
    employmentStatus: number
    jobSeekingStatus: number
    verificationStatus: number
    verificationNote: number
    verifiedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobSeekerProfileMinAggregateInputType = {
    id?: true
    userId?: true
    nik?: true
    birthDate?: true
    provinsi?: true
    kota?: true
    district?: true
    village?: true
    rt?: true
    rw?: true
    address?: true
    educationLevel?: true
    educationMajor?: true
    desiredWorkField?: true
    employmentStatus?: true
    jobSeekingStatus?: true
    verificationStatus?: true
    verificationNote?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobSeekerProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    nik?: true
    birthDate?: true
    provinsi?: true
    kota?: true
    district?: true
    village?: true
    rt?: true
    rw?: true
    address?: true
    educationLevel?: true
    educationMajor?: true
    desiredWorkField?: true
    employmentStatus?: true
    jobSeekingStatus?: true
    verificationStatus?: true
    verificationNote?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobSeekerProfileCountAggregateInputType = {
    id?: true
    userId?: true
    nik?: true
    birthDate?: true
    provinsi?: true
    kota?: true
    district?: true
    village?: true
    rt?: true
    rw?: true
    address?: true
    educationLevel?: true
    educationMajor?: true
    skills?: true
    interests?: true
    desiredWorkField?: true
    employmentStatus?: true
    jobSeekingStatus?: true
    verificationStatus?: true
    verificationNote?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobSeekerProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobSeekerProfile to aggregate.
     */
    where?: JobSeekerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSeekerProfiles to fetch.
     */
    orderBy?: JobSeekerProfileOrderByWithRelationInput | JobSeekerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobSeekerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSeekerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSeekerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobSeekerProfiles
    **/
    _count?: true | JobSeekerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobSeekerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobSeekerProfileMaxAggregateInputType
  }

  export type GetJobSeekerProfileAggregateType<T extends JobSeekerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateJobSeekerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobSeekerProfile[P]>
      : GetScalarType<T[P], AggregateJobSeekerProfile[P]>
  }




  export type JobSeekerProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobSeekerProfileWhereInput
    orderBy?: JobSeekerProfileOrderByWithAggregationInput | JobSeekerProfileOrderByWithAggregationInput[]
    by: JobSeekerProfileScalarFieldEnum[] | JobSeekerProfileScalarFieldEnum
    having?: JobSeekerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobSeekerProfileCountAggregateInputType | true
    _min?: JobSeekerProfileMinAggregateInputType
    _max?: JobSeekerProfileMaxAggregateInputType
  }

  export type JobSeekerProfileGroupByOutputType = {
    id: string
    userId: string
    nik: string | null
    birthDate: Date | null
    provinsi: string | null
    kota: string | null
    district: string | null
    village: string | null
    rt: string | null
    rw: string | null
    address: string | null
    educationLevel: string | null
    educationMajor: string | null
    skills: string[]
    interests: string[]
    desiredWorkField: string | null
    employmentStatus: string | null
    jobSeekingStatus: string | null
    verificationStatus: $Enums.VerificationStatus
    verificationNote: string | null
    verifiedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: JobSeekerProfileCountAggregateOutputType | null
    _min: JobSeekerProfileMinAggregateOutputType | null
    _max: JobSeekerProfileMaxAggregateOutputType | null
  }

  type GetJobSeekerProfileGroupByPayload<T extends JobSeekerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobSeekerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobSeekerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobSeekerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], JobSeekerProfileGroupByOutputType[P]>
        }
      >
    >


  export type JobSeekerProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nik?: boolean
    birthDate?: boolean
    provinsi?: boolean
    kota?: boolean
    district?: boolean
    village?: boolean
    rt?: boolean
    rw?: boolean
    address?: boolean
    educationLevel?: boolean
    educationMajor?: boolean
    skills?: boolean
    interests?: boolean
    desiredWorkField?: boolean
    employmentStatus?: boolean
    jobSeekingStatus?: boolean
    verificationStatus?: boolean
    verificationNote?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    experiences?: boolean | JobSeekerProfile$experiencesArgs<ExtArgs>
    documents?: boolean | JobSeekerProfile$documentsArgs<ExtArgs>
    _count?: boolean | JobSeekerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobSeekerProfile"]>

  export type JobSeekerProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nik?: boolean
    birthDate?: boolean
    provinsi?: boolean
    kota?: boolean
    district?: boolean
    village?: boolean
    rt?: boolean
    rw?: boolean
    address?: boolean
    educationLevel?: boolean
    educationMajor?: boolean
    skills?: boolean
    interests?: boolean
    desiredWorkField?: boolean
    employmentStatus?: boolean
    jobSeekingStatus?: boolean
    verificationStatus?: boolean
    verificationNote?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobSeekerProfile"]>

  export type JobSeekerProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nik?: boolean
    birthDate?: boolean
    provinsi?: boolean
    kota?: boolean
    district?: boolean
    village?: boolean
    rt?: boolean
    rw?: boolean
    address?: boolean
    educationLevel?: boolean
    educationMajor?: boolean
    skills?: boolean
    interests?: boolean
    desiredWorkField?: boolean
    employmentStatus?: boolean
    jobSeekingStatus?: boolean
    verificationStatus?: boolean
    verificationNote?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobSeekerProfile"]>

  export type JobSeekerProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    nik?: boolean
    birthDate?: boolean
    provinsi?: boolean
    kota?: boolean
    district?: boolean
    village?: boolean
    rt?: boolean
    rw?: boolean
    address?: boolean
    educationLevel?: boolean
    educationMajor?: boolean
    skills?: boolean
    interests?: boolean
    desiredWorkField?: boolean
    employmentStatus?: boolean
    jobSeekingStatus?: boolean
    verificationStatus?: boolean
    verificationNote?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobSeekerProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "nik" | "birthDate" | "provinsi" | "kota" | "district" | "village" | "rt" | "rw" | "address" | "educationLevel" | "educationMajor" | "skills" | "interests" | "desiredWorkField" | "employmentStatus" | "jobSeekingStatus" | "verificationStatus" | "verificationNote" | "verifiedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["jobSeekerProfile"]>
  export type JobSeekerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    experiences?: boolean | JobSeekerProfile$experiencesArgs<ExtArgs>
    documents?: boolean | JobSeekerProfile$documentsArgs<ExtArgs>
    _count?: boolean | JobSeekerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobSeekerProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JobSeekerProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JobSeekerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobSeekerProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      experiences: Prisma.$WorkExperiencePayload<ExtArgs>[]
      documents: Prisma.$JobSeekerDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      nik: string | null
      birthDate: Date | null
      provinsi: string | null
      kota: string | null
      district: string | null
      village: string | null
      rt: string | null
      rw: string | null
      address: string | null
      educationLevel: string | null
      educationMajor: string | null
      skills: string[]
      interests: string[]
      desiredWorkField: string | null
      employmentStatus: string | null
      jobSeekingStatus: string | null
      verificationStatus: $Enums.VerificationStatus
      verificationNote: string | null
      verifiedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobSeekerProfile"]>
    composites: {}
  }

  type JobSeekerProfileGetPayload<S extends boolean | null | undefined | JobSeekerProfileDefaultArgs> = $Result.GetResult<Prisma.$JobSeekerProfilePayload, S>

  type JobSeekerProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobSeekerProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobSeekerProfileCountAggregateInputType | true
    }

  export interface JobSeekerProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobSeekerProfile'], meta: { name: 'JobSeekerProfile' } }
    /**
     * Find zero or one JobSeekerProfile that matches the filter.
     * @param {JobSeekerProfileFindUniqueArgs} args - Arguments to find a JobSeekerProfile
     * @example
     * // Get one JobSeekerProfile
     * const jobSeekerProfile = await prisma.jobSeekerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobSeekerProfileFindUniqueArgs>(args: SelectSubset<T, JobSeekerProfileFindUniqueArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobSeekerProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobSeekerProfileFindUniqueOrThrowArgs} args - Arguments to find a JobSeekerProfile
     * @example
     * // Get one JobSeekerProfile
     * const jobSeekerProfile = await prisma.jobSeekerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobSeekerProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, JobSeekerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobSeekerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerProfileFindFirstArgs} args - Arguments to find a JobSeekerProfile
     * @example
     * // Get one JobSeekerProfile
     * const jobSeekerProfile = await prisma.jobSeekerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobSeekerProfileFindFirstArgs>(args?: SelectSubset<T, JobSeekerProfileFindFirstArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobSeekerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerProfileFindFirstOrThrowArgs} args - Arguments to find a JobSeekerProfile
     * @example
     * // Get one JobSeekerProfile
     * const jobSeekerProfile = await prisma.jobSeekerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobSeekerProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, JobSeekerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobSeekerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobSeekerProfiles
     * const jobSeekerProfiles = await prisma.jobSeekerProfile.findMany()
     * 
     * // Get first 10 JobSeekerProfiles
     * const jobSeekerProfiles = await prisma.jobSeekerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobSeekerProfileWithIdOnly = await prisma.jobSeekerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobSeekerProfileFindManyArgs>(args?: SelectSubset<T, JobSeekerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobSeekerProfile.
     * @param {JobSeekerProfileCreateArgs} args - Arguments to create a JobSeekerProfile.
     * @example
     * // Create one JobSeekerProfile
     * const JobSeekerProfile = await prisma.jobSeekerProfile.create({
     *   data: {
     *     // ... data to create a JobSeekerProfile
     *   }
     * })
     * 
     */
    create<T extends JobSeekerProfileCreateArgs>(args: SelectSubset<T, JobSeekerProfileCreateArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobSeekerProfiles.
     * @param {JobSeekerProfileCreateManyArgs} args - Arguments to create many JobSeekerProfiles.
     * @example
     * // Create many JobSeekerProfiles
     * const jobSeekerProfile = await prisma.jobSeekerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobSeekerProfileCreateManyArgs>(args?: SelectSubset<T, JobSeekerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobSeekerProfiles and returns the data saved in the database.
     * @param {JobSeekerProfileCreateManyAndReturnArgs} args - Arguments to create many JobSeekerProfiles.
     * @example
     * // Create many JobSeekerProfiles
     * const jobSeekerProfile = await prisma.jobSeekerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobSeekerProfiles and only return the `id`
     * const jobSeekerProfileWithIdOnly = await prisma.jobSeekerProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobSeekerProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, JobSeekerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobSeekerProfile.
     * @param {JobSeekerProfileDeleteArgs} args - Arguments to delete one JobSeekerProfile.
     * @example
     * // Delete one JobSeekerProfile
     * const JobSeekerProfile = await prisma.jobSeekerProfile.delete({
     *   where: {
     *     // ... filter to delete one JobSeekerProfile
     *   }
     * })
     * 
     */
    delete<T extends JobSeekerProfileDeleteArgs>(args: SelectSubset<T, JobSeekerProfileDeleteArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobSeekerProfile.
     * @param {JobSeekerProfileUpdateArgs} args - Arguments to update one JobSeekerProfile.
     * @example
     * // Update one JobSeekerProfile
     * const jobSeekerProfile = await prisma.jobSeekerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobSeekerProfileUpdateArgs>(args: SelectSubset<T, JobSeekerProfileUpdateArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobSeekerProfiles.
     * @param {JobSeekerProfileDeleteManyArgs} args - Arguments to filter JobSeekerProfiles to delete.
     * @example
     * // Delete a few JobSeekerProfiles
     * const { count } = await prisma.jobSeekerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobSeekerProfileDeleteManyArgs>(args?: SelectSubset<T, JobSeekerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobSeekerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobSeekerProfiles
     * const jobSeekerProfile = await prisma.jobSeekerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobSeekerProfileUpdateManyArgs>(args: SelectSubset<T, JobSeekerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobSeekerProfiles and returns the data updated in the database.
     * @param {JobSeekerProfileUpdateManyAndReturnArgs} args - Arguments to update many JobSeekerProfiles.
     * @example
     * // Update many JobSeekerProfiles
     * const jobSeekerProfile = await prisma.jobSeekerProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobSeekerProfiles and only return the `id`
     * const jobSeekerProfileWithIdOnly = await prisma.jobSeekerProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobSeekerProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, JobSeekerProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobSeekerProfile.
     * @param {JobSeekerProfileUpsertArgs} args - Arguments to update or create a JobSeekerProfile.
     * @example
     * // Update or create a JobSeekerProfile
     * const jobSeekerProfile = await prisma.jobSeekerProfile.upsert({
     *   create: {
     *     // ... data to create a JobSeekerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobSeekerProfile we want to update
     *   }
     * })
     */
    upsert<T extends JobSeekerProfileUpsertArgs>(args: SelectSubset<T, JobSeekerProfileUpsertArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobSeekerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerProfileCountArgs} args - Arguments to filter JobSeekerProfiles to count.
     * @example
     * // Count the number of JobSeekerProfiles
     * const count = await prisma.jobSeekerProfile.count({
     *   where: {
     *     // ... the filter for the JobSeekerProfiles we want to count
     *   }
     * })
    **/
    count<T extends JobSeekerProfileCountArgs>(
      args?: Subset<T, JobSeekerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobSeekerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobSeekerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobSeekerProfileAggregateArgs>(args: Subset<T, JobSeekerProfileAggregateArgs>): Prisma.PrismaPromise<GetJobSeekerProfileAggregateType<T>>

    /**
     * Group by JobSeekerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobSeekerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobSeekerProfileGroupByArgs['orderBy'] }
        : { orderBy?: JobSeekerProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobSeekerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobSeekerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobSeekerProfile model
   */
  readonly fields: JobSeekerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobSeekerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobSeekerProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    experiences<T extends JobSeekerProfile$experiencesArgs<ExtArgs> = {}>(args?: Subset<T, JobSeekerProfile$experiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends JobSeekerProfile$documentsArgs<ExtArgs> = {}>(args?: Subset<T, JobSeekerProfile$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSeekerDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobSeekerProfile model
   */
  interface JobSeekerProfileFieldRefs {
    readonly id: FieldRef<"JobSeekerProfile", 'String'>
    readonly userId: FieldRef<"JobSeekerProfile", 'String'>
    readonly nik: FieldRef<"JobSeekerProfile", 'String'>
    readonly birthDate: FieldRef<"JobSeekerProfile", 'DateTime'>
    readonly provinsi: FieldRef<"JobSeekerProfile", 'String'>
    readonly kota: FieldRef<"JobSeekerProfile", 'String'>
    readonly district: FieldRef<"JobSeekerProfile", 'String'>
    readonly village: FieldRef<"JobSeekerProfile", 'String'>
    readonly rt: FieldRef<"JobSeekerProfile", 'String'>
    readonly rw: FieldRef<"JobSeekerProfile", 'String'>
    readonly address: FieldRef<"JobSeekerProfile", 'String'>
    readonly educationLevel: FieldRef<"JobSeekerProfile", 'String'>
    readonly educationMajor: FieldRef<"JobSeekerProfile", 'String'>
    readonly skills: FieldRef<"JobSeekerProfile", 'String[]'>
    readonly interests: FieldRef<"JobSeekerProfile", 'String[]'>
    readonly desiredWorkField: FieldRef<"JobSeekerProfile", 'String'>
    readonly employmentStatus: FieldRef<"JobSeekerProfile", 'String'>
    readonly jobSeekingStatus: FieldRef<"JobSeekerProfile", 'String'>
    readonly verificationStatus: FieldRef<"JobSeekerProfile", 'VerificationStatus'>
    readonly verificationNote: FieldRef<"JobSeekerProfile", 'String'>
    readonly verifiedAt: FieldRef<"JobSeekerProfile", 'DateTime'>
    readonly createdAt: FieldRef<"JobSeekerProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"JobSeekerProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobSeekerProfile findUnique
   */
  export type JobSeekerProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    /**
     * Filter, which JobSeekerProfile to fetch.
     */
    where: JobSeekerProfileWhereUniqueInput
  }

  /**
   * JobSeekerProfile findUniqueOrThrow
   */
  export type JobSeekerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    /**
     * Filter, which JobSeekerProfile to fetch.
     */
    where: JobSeekerProfileWhereUniqueInput
  }

  /**
   * JobSeekerProfile findFirst
   */
  export type JobSeekerProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    /**
     * Filter, which JobSeekerProfile to fetch.
     */
    where?: JobSeekerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSeekerProfiles to fetch.
     */
    orderBy?: JobSeekerProfileOrderByWithRelationInput | JobSeekerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobSeekerProfiles.
     */
    cursor?: JobSeekerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSeekerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSeekerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobSeekerProfiles.
     */
    distinct?: JobSeekerProfileScalarFieldEnum | JobSeekerProfileScalarFieldEnum[]
  }

  /**
   * JobSeekerProfile findFirstOrThrow
   */
  export type JobSeekerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    /**
     * Filter, which JobSeekerProfile to fetch.
     */
    where?: JobSeekerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSeekerProfiles to fetch.
     */
    orderBy?: JobSeekerProfileOrderByWithRelationInput | JobSeekerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobSeekerProfiles.
     */
    cursor?: JobSeekerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSeekerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSeekerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobSeekerProfiles.
     */
    distinct?: JobSeekerProfileScalarFieldEnum | JobSeekerProfileScalarFieldEnum[]
  }

  /**
   * JobSeekerProfile findMany
   */
  export type JobSeekerProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    /**
     * Filter, which JobSeekerProfiles to fetch.
     */
    where?: JobSeekerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSeekerProfiles to fetch.
     */
    orderBy?: JobSeekerProfileOrderByWithRelationInput | JobSeekerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobSeekerProfiles.
     */
    cursor?: JobSeekerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSeekerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSeekerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobSeekerProfiles.
     */
    distinct?: JobSeekerProfileScalarFieldEnum | JobSeekerProfileScalarFieldEnum[]
  }

  /**
   * JobSeekerProfile create
   */
  export type JobSeekerProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a JobSeekerProfile.
     */
    data: XOR<JobSeekerProfileCreateInput, JobSeekerProfileUncheckedCreateInput>
  }

  /**
   * JobSeekerProfile createMany
   */
  export type JobSeekerProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobSeekerProfiles.
     */
    data: JobSeekerProfileCreateManyInput | JobSeekerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobSeekerProfile createManyAndReturn
   */
  export type JobSeekerProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * The data used to create many JobSeekerProfiles.
     */
    data: JobSeekerProfileCreateManyInput | JobSeekerProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobSeekerProfile update
   */
  export type JobSeekerProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a JobSeekerProfile.
     */
    data: XOR<JobSeekerProfileUpdateInput, JobSeekerProfileUncheckedUpdateInput>
    /**
     * Choose, which JobSeekerProfile to update.
     */
    where: JobSeekerProfileWhereUniqueInput
  }

  /**
   * JobSeekerProfile updateMany
   */
  export type JobSeekerProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobSeekerProfiles.
     */
    data: XOR<JobSeekerProfileUpdateManyMutationInput, JobSeekerProfileUncheckedUpdateManyInput>
    /**
     * Filter which JobSeekerProfiles to update
     */
    where?: JobSeekerProfileWhereInput
    /**
     * Limit how many JobSeekerProfiles to update.
     */
    limit?: number
  }

  /**
   * JobSeekerProfile updateManyAndReturn
   */
  export type JobSeekerProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * The data used to update JobSeekerProfiles.
     */
    data: XOR<JobSeekerProfileUpdateManyMutationInput, JobSeekerProfileUncheckedUpdateManyInput>
    /**
     * Filter which JobSeekerProfiles to update
     */
    where?: JobSeekerProfileWhereInput
    /**
     * Limit how many JobSeekerProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobSeekerProfile upsert
   */
  export type JobSeekerProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the JobSeekerProfile to update in case it exists.
     */
    where: JobSeekerProfileWhereUniqueInput
    /**
     * In case the JobSeekerProfile found by the `where` argument doesn't exist, create a new JobSeekerProfile with this data.
     */
    create: XOR<JobSeekerProfileCreateInput, JobSeekerProfileUncheckedCreateInput>
    /**
     * In case the JobSeekerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobSeekerProfileUpdateInput, JobSeekerProfileUncheckedUpdateInput>
  }

  /**
   * JobSeekerProfile delete
   */
  export type JobSeekerProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    /**
     * Filter which JobSeekerProfile to delete.
     */
    where: JobSeekerProfileWhereUniqueInput
  }

  /**
   * JobSeekerProfile deleteMany
   */
  export type JobSeekerProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobSeekerProfiles to delete
     */
    where?: JobSeekerProfileWhereInput
    /**
     * Limit how many JobSeekerProfiles to delete.
     */
    limit?: number
  }

  /**
   * JobSeekerProfile.experiences
   */
  export type JobSeekerProfile$experiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    where?: WorkExperienceWhereInput
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    cursor?: WorkExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * JobSeekerProfile.documents
   */
  export type JobSeekerProfile$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerDocument
     */
    select?: JobSeekerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerDocument
     */
    omit?: JobSeekerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerDocumentInclude<ExtArgs> | null
    where?: JobSeekerDocumentWhereInput
    orderBy?: JobSeekerDocumentOrderByWithRelationInput | JobSeekerDocumentOrderByWithRelationInput[]
    cursor?: JobSeekerDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobSeekerDocumentScalarFieldEnum | JobSeekerDocumentScalarFieldEnum[]
  }

  /**
   * JobSeekerProfile without action
   */
  export type JobSeekerProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
  }


  /**
   * Model WorkExperience
   */

  export type AggregateWorkExperience = {
    _count: WorkExperienceCountAggregateOutputType | null
    _min: WorkExperienceMinAggregateOutputType | null
    _max: WorkExperienceMaxAggregateOutputType | null
  }

  export type WorkExperienceMinAggregateOutputType = {
    id: string | null
    jobSeekerProfileId: string | null
    companyName: string | null
    position: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    isCurrent: boolean | null
    createdAt: Date | null
  }

  export type WorkExperienceMaxAggregateOutputType = {
    id: string | null
    jobSeekerProfileId: string | null
    companyName: string | null
    position: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    isCurrent: boolean | null
    createdAt: Date | null
  }

  export type WorkExperienceCountAggregateOutputType = {
    id: number
    jobSeekerProfileId: number
    companyName: number
    position: number
    description: number
    startDate: number
    endDate: number
    isCurrent: number
    createdAt: number
    _all: number
  }


  export type WorkExperienceMinAggregateInputType = {
    id?: true
    jobSeekerProfileId?: true
    companyName?: true
    position?: true
    description?: true
    startDate?: true
    endDate?: true
    isCurrent?: true
    createdAt?: true
  }

  export type WorkExperienceMaxAggregateInputType = {
    id?: true
    jobSeekerProfileId?: true
    companyName?: true
    position?: true
    description?: true
    startDate?: true
    endDate?: true
    isCurrent?: true
    createdAt?: true
  }

  export type WorkExperienceCountAggregateInputType = {
    id?: true
    jobSeekerProfileId?: true
    companyName?: true
    position?: true
    description?: true
    startDate?: true
    endDate?: true
    isCurrent?: true
    createdAt?: true
    _all?: true
  }

  export type WorkExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkExperience to aggregate.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkExperiences
    **/
    _count?: true | WorkExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkExperienceMaxAggregateInputType
  }

  export type GetWorkExperienceAggregateType<T extends WorkExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkExperience[P]>
      : GetScalarType<T[P], AggregateWorkExperience[P]>
  }




  export type WorkExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkExperienceWhereInput
    orderBy?: WorkExperienceOrderByWithAggregationInput | WorkExperienceOrderByWithAggregationInput[]
    by: WorkExperienceScalarFieldEnum[] | WorkExperienceScalarFieldEnum
    having?: WorkExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkExperienceCountAggregateInputType | true
    _min?: WorkExperienceMinAggregateInputType
    _max?: WorkExperienceMaxAggregateInputType
  }

  export type WorkExperienceGroupByOutputType = {
    id: string
    jobSeekerProfileId: string
    companyName: string
    position: string
    description: string | null
    startDate: Date | null
    endDate: Date | null
    isCurrent: boolean
    createdAt: Date
    _count: WorkExperienceCountAggregateOutputType | null
    _min: WorkExperienceMinAggregateOutputType | null
    _max: WorkExperienceMaxAggregateOutputType | null
  }

  type GetWorkExperienceGroupByPayload<T extends WorkExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkExperienceGroupByOutputType[P]>
        }
      >
    >


  export type WorkExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobSeekerProfileId?: boolean
    companyName?: boolean
    position?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    createdAt?: boolean
    jobSeekerProfile?: boolean | JobSeekerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperience"]>

  export type WorkExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobSeekerProfileId?: boolean
    companyName?: boolean
    position?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    createdAt?: boolean
    jobSeekerProfile?: boolean | JobSeekerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperience"]>

  export type WorkExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobSeekerProfileId?: boolean
    companyName?: boolean
    position?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    createdAt?: boolean
    jobSeekerProfile?: boolean | JobSeekerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperience"]>

  export type WorkExperienceSelectScalar = {
    id?: boolean
    jobSeekerProfileId?: boolean
    companyName?: boolean
    position?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    createdAt?: boolean
  }

  export type WorkExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobSeekerProfileId" | "companyName" | "position" | "description" | "startDate" | "endDate" | "isCurrent" | "createdAt", ExtArgs["result"]["workExperience"]>
  export type WorkExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobSeekerProfile?: boolean | JobSeekerProfileDefaultArgs<ExtArgs>
  }
  export type WorkExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobSeekerProfile?: boolean | JobSeekerProfileDefaultArgs<ExtArgs>
  }
  export type WorkExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobSeekerProfile?: boolean | JobSeekerProfileDefaultArgs<ExtArgs>
  }

  export type $WorkExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkExperience"
    objects: {
      jobSeekerProfile: Prisma.$JobSeekerProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobSeekerProfileId: string
      companyName: string
      position: string
      description: string | null
      startDate: Date | null
      endDate: Date | null
      isCurrent: boolean
      createdAt: Date
    }, ExtArgs["result"]["workExperience"]>
    composites: {}
  }

  type WorkExperienceGetPayload<S extends boolean | null | undefined | WorkExperienceDefaultArgs> = $Result.GetResult<Prisma.$WorkExperiencePayload, S>

  type WorkExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkExperienceCountAggregateInputType | true
    }

  export interface WorkExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkExperience'], meta: { name: 'WorkExperience' } }
    /**
     * Find zero or one WorkExperience that matches the filter.
     * @param {WorkExperienceFindUniqueArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkExperienceFindUniqueArgs>(args: SelectSubset<T, WorkExperienceFindUniqueArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkExperience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkExperienceFindUniqueOrThrowArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkExperience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindFirstArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkExperienceFindFirstArgs>(args?: SelectSubset<T, WorkExperienceFindFirstArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkExperience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindFirstOrThrowArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkExperiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkExperiences
     * const workExperiences = await prisma.workExperience.findMany()
     * 
     * // Get first 10 WorkExperiences
     * const workExperiences = await prisma.workExperience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workExperienceWithIdOnly = await prisma.workExperience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkExperienceFindManyArgs>(args?: SelectSubset<T, WorkExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkExperience.
     * @param {WorkExperienceCreateArgs} args - Arguments to create a WorkExperience.
     * @example
     * // Create one WorkExperience
     * const WorkExperience = await prisma.workExperience.create({
     *   data: {
     *     // ... data to create a WorkExperience
     *   }
     * })
     * 
     */
    create<T extends WorkExperienceCreateArgs>(args: SelectSubset<T, WorkExperienceCreateArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkExperiences.
     * @param {WorkExperienceCreateManyArgs} args - Arguments to create many WorkExperiences.
     * @example
     * // Create many WorkExperiences
     * const workExperience = await prisma.workExperience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkExperienceCreateManyArgs>(args?: SelectSubset<T, WorkExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkExperiences and returns the data saved in the database.
     * @param {WorkExperienceCreateManyAndReturnArgs} args - Arguments to create many WorkExperiences.
     * @example
     * // Create many WorkExperiences
     * const workExperience = await prisma.workExperience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkExperiences and only return the `id`
     * const workExperienceWithIdOnly = await prisma.workExperience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkExperience.
     * @param {WorkExperienceDeleteArgs} args - Arguments to delete one WorkExperience.
     * @example
     * // Delete one WorkExperience
     * const WorkExperience = await prisma.workExperience.delete({
     *   where: {
     *     // ... filter to delete one WorkExperience
     *   }
     * })
     * 
     */
    delete<T extends WorkExperienceDeleteArgs>(args: SelectSubset<T, WorkExperienceDeleteArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkExperience.
     * @param {WorkExperienceUpdateArgs} args - Arguments to update one WorkExperience.
     * @example
     * // Update one WorkExperience
     * const workExperience = await prisma.workExperience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkExperienceUpdateArgs>(args: SelectSubset<T, WorkExperienceUpdateArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkExperiences.
     * @param {WorkExperienceDeleteManyArgs} args - Arguments to filter WorkExperiences to delete.
     * @example
     * // Delete a few WorkExperiences
     * const { count } = await prisma.workExperience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkExperienceDeleteManyArgs>(args?: SelectSubset<T, WorkExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkExperiences
     * const workExperience = await prisma.workExperience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkExperienceUpdateManyArgs>(args: SelectSubset<T, WorkExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkExperiences and returns the data updated in the database.
     * @param {WorkExperienceUpdateManyAndReturnArgs} args - Arguments to update many WorkExperiences.
     * @example
     * // Update many WorkExperiences
     * const workExperience = await prisma.workExperience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkExperiences and only return the `id`
     * const workExperienceWithIdOnly = await prisma.workExperience.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkExperience.
     * @param {WorkExperienceUpsertArgs} args - Arguments to update or create a WorkExperience.
     * @example
     * // Update or create a WorkExperience
     * const workExperience = await prisma.workExperience.upsert({
     *   create: {
     *     // ... data to create a WorkExperience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkExperience we want to update
     *   }
     * })
     */
    upsert<T extends WorkExperienceUpsertArgs>(args: SelectSubset<T, WorkExperienceUpsertArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceCountArgs} args - Arguments to filter WorkExperiences to count.
     * @example
     * // Count the number of WorkExperiences
     * const count = await prisma.workExperience.count({
     *   where: {
     *     // ... the filter for the WorkExperiences we want to count
     *   }
     * })
    **/
    count<T extends WorkExperienceCountArgs>(
      args?: Subset<T, WorkExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkExperienceAggregateArgs>(args: Subset<T, WorkExperienceAggregateArgs>): Prisma.PrismaPromise<GetWorkExperienceAggregateType<T>>

    /**
     * Group by WorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkExperienceGroupByArgs['orderBy'] }
        : { orderBy?: WorkExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkExperience model
   */
  readonly fields: WorkExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkExperience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobSeekerProfile<T extends JobSeekerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobSeekerProfileDefaultArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkExperience model
   */
  interface WorkExperienceFieldRefs {
    readonly id: FieldRef<"WorkExperience", 'String'>
    readonly jobSeekerProfileId: FieldRef<"WorkExperience", 'String'>
    readonly companyName: FieldRef<"WorkExperience", 'String'>
    readonly position: FieldRef<"WorkExperience", 'String'>
    readonly description: FieldRef<"WorkExperience", 'String'>
    readonly startDate: FieldRef<"WorkExperience", 'DateTime'>
    readonly endDate: FieldRef<"WorkExperience", 'DateTime'>
    readonly isCurrent: FieldRef<"WorkExperience", 'Boolean'>
    readonly createdAt: FieldRef<"WorkExperience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkExperience findUnique
   */
  export type WorkExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience findUniqueOrThrow
   */
  export type WorkExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience findFirst
   */
  export type WorkExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkExperiences.
     */
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience findFirstOrThrow
   */
  export type WorkExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkExperiences.
     */
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience findMany
   */
  export type WorkExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperiences to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkExperiences.
     */
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience create
   */
  export type WorkExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkExperience.
     */
    data: XOR<WorkExperienceCreateInput, WorkExperienceUncheckedCreateInput>
  }

  /**
   * WorkExperience createMany
   */
  export type WorkExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkExperiences.
     */
    data: WorkExperienceCreateManyInput | WorkExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkExperience createManyAndReturn
   */
  export type WorkExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many WorkExperiences.
     */
    data: WorkExperienceCreateManyInput | WorkExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkExperience update
   */
  export type WorkExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkExperience.
     */
    data: XOR<WorkExperienceUpdateInput, WorkExperienceUncheckedUpdateInput>
    /**
     * Choose, which WorkExperience to update.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience updateMany
   */
  export type WorkExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkExperiences.
     */
    data: XOR<WorkExperienceUpdateManyMutationInput, WorkExperienceUncheckedUpdateManyInput>
    /**
     * Filter which WorkExperiences to update
     */
    where?: WorkExperienceWhereInput
    /**
     * Limit how many WorkExperiences to update.
     */
    limit?: number
  }

  /**
   * WorkExperience updateManyAndReturn
   */
  export type WorkExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * The data used to update WorkExperiences.
     */
    data: XOR<WorkExperienceUpdateManyMutationInput, WorkExperienceUncheckedUpdateManyInput>
    /**
     * Filter which WorkExperiences to update
     */
    where?: WorkExperienceWhereInput
    /**
     * Limit how many WorkExperiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkExperience upsert
   */
  export type WorkExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkExperience to update in case it exists.
     */
    where: WorkExperienceWhereUniqueInput
    /**
     * In case the WorkExperience found by the `where` argument doesn't exist, create a new WorkExperience with this data.
     */
    create: XOR<WorkExperienceCreateInput, WorkExperienceUncheckedCreateInput>
    /**
     * In case the WorkExperience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkExperienceUpdateInput, WorkExperienceUncheckedUpdateInput>
  }

  /**
   * WorkExperience delete
   */
  export type WorkExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter which WorkExperience to delete.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience deleteMany
   */
  export type WorkExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkExperiences to delete
     */
    where?: WorkExperienceWhereInput
    /**
     * Limit how many WorkExperiences to delete.
     */
    limit?: number
  }

  /**
   * WorkExperience without action
   */
  export type WorkExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
  }


  /**
   * Model JobSeekerDocument
   */

  export type AggregateJobSeekerDocument = {
    _count: JobSeekerDocumentCountAggregateOutputType | null
    _avg: JobSeekerDocumentAvgAggregateOutputType | null
    _sum: JobSeekerDocumentSumAggregateOutputType | null
    _min: JobSeekerDocumentMinAggregateOutputType | null
    _max: JobSeekerDocumentMaxAggregateOutputType | null
  }

  export type JobSeekerDocumentAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type JobSeekerDocumentSumAggregateOutputType = {
    fileSize: number | null
  }

  export type JobSeekerDocumentMinAggregateOutputType = {
    id: string | null
    jobSeekerProfileId: string | null
    fileName: string | null
    fileUrl: string | null
    mimeType: string | null
    fileSize: number | null
    createdAt: Date | null
  }

  export type JobSeekerDocumentMaxAggregateOutputType = {
    id: string | null
    jobSeekerProfileId: string | null
    fileName: string | null
    fileUrl: string | null
    mimeType: string | null
    fileSize: number | null
    createdAt: Date | null
  }

  export type JobSeekerDocumentCountAggregateOutputType = {
    id: number
    jobSeekerProfileId: number
    fileName: number
    fileUrl: number
    mimeType: number
    fileSize: number
    createdAt: number
    _all: number
  }


  export type JobSeekerDocumentAvgAggregateInputType = {
    fileSize?: true
  }

  export type JobSeekerDocumentSumAggregateInputType = {
    fileSize?: true
  }

  export type JobSeekerDocumentMinAggregateInputType = {
    id?: true
    jobSeekerProfileId?: true
    fileName?: true
    fileUrl?: true
    mimeType?: true
    fileSize?: true
    createdAt?: true
  }

  export type JobSeekerDocumentMaxAggregateInputType = {
    id?: true
    jobSeekerProfileId?: true
    fileName?: true
    fileUrl?: true
    mimeType?: true
    fileSize?: true
    createdAt?: true
  }

  export type JobSeekerDocumentCountAggregateInputType = {
    id?: true
    jobSeekerProfileId?: true
    fileName?: true
    fileUrl?: true
    mimeType?: true
    fileSize?: true
    createdAt?: true
    _all?: true
  }

  export type JobSeekerDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobSeekerDocument to aggregate.
     */
    where?: JobSeekerDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSeekerDocuments to fetch.
     */
    orderBy?: JobSeekerDocumentOrderByWithRelationInput | JobSeekerDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobSeekerDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSeekerDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSeekerDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobSeekerDocuments
    **/
    _count?: true | JobSeekerDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobSeekerDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSeekerDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobSeekerDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobSeekerDocumentMaxAggregateInputType
  }

  export type GetJobSeekerDocumentAggregateType<T extends JobSeekerDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateJobSeekerDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobSeekerDocument[P]>
      : GetScalarType<T[P], AggregateJobSeekerDocument[P]>
  }




  export type JobSeekerDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobSeekerDocumentWhereInput
    orderBy?: JobSeekerDocumentOrderByWithAggregationInput | JobSeekerDocumentOrderByWithAggregationInput[]
    by: JobSeekerDocumentScalarFieldEnum[] | JobSeekerDocumentScalarFieldEnum
    having?: JobSeekerDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobSeekerDocumentCountAggregateInputType | true
    _avg?: JobSeekerDocumentAvgAggregateInputType
    _sum?: JobSeekerDocumentSumAggregateInputType
    _min?: JobSeekerDocumentMinAggregateInputType
    _max?: JobSeekerDocumentMaxAggregateInputType
  }

  export type JobSeekerDocumentGroupByOutputType = {
    id: string
    jobSeekerProfileId: string
    fileName: string
    fileUrl: string
    mimeType: string | null
    fileSize: number | null
    createdAt: Date
    _count: JobSeekerDocumentCountAggregateOutputType | null
    _avg: JobSeekerDocumentAvgAggregateOutputType | null
    _sum: JobSeekerDocumentSumAggregateOutputType | null
    _min: JobSeekerDocumentMinAggregateOutputType | null
    _max: JobSeekerDocumentMaxAggregateOutputType | null
  }

  type GetJobSeekerDocumentGroupByPayload<T extends JobSeekerDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobSeekerDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobSeekerDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobSeekerDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], JobSeekerDocumentGroupByOutputType[P]>
        }
      >
    >


  export type JobSeekerDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobSeekerProfileId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    mimeType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    jobSeekerProfile?: boolean | JobSeekerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobSeekerDocument"]>

  export type JobSeekerDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobSeekerProfileId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    mimeType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    jobSeekerProfile?: boolean | JobSeekerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobSeekerDocument"]>

  export type JobSeekerDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobSeekerProfileId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    mimeType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    jobSeekerProfile?: boolean | JobSeekerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobSeekerDocument"]>

  export type JobSeekerDocumentSelectScalar = {
    id?: boolean
    jobSeekerProfileId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    mimeType?: boolean
    fileSize?: boolean
    createdAt?: boolean
  }

  export type JobSeekerDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobSeekerProfileId" | "fileName" | "fileUrl" | "mimeType" | "fileSize" | "createdAt", ExtArgs["result"]["jobSeekerDocument"]>
  export type JobSeekerDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobSeekerProfile?: boolean | JobSeekerProfileDefaultArgs<ExtArgs>
  }
  export type JobSeekerDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobSeekerProfile?: boolean | JobSeekerProfileDefaultArgs<ExtArgs>
  }
  export type JobSeekerDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobSeekerProfile?: boolean | JobSeekerProfileDefaultArgs<ExtArgs>
  }

  export type $JobSeekerDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobSeekerDocument"
    objects: {
      jobSeekerProfile: Prisma.$JobSeekerProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobSeekerProfileId: string
      fileName: string
      fileUrl: string
      mimeType: string | null
      fileSize: number | null
      createdAt: Date
    }, ExtArgs["result"]["jobSeekerDocument"]>
    composites: {}
  }

  type JobSeekerDocumentGetPayload<S extends boolean | null | undefined | JobSeekerDocumentDefaultArgs> = $Result.GetResult<Prisma.$JobSeekerDocumentPayload, S>

  type JobSeekerDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobSeekerDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobSeekerDocumentCountAggregateInputType | true
    }

  export interface JobSeekerDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobSeekerDocument'], meta: { name: 'JobSeekerDocument' } }
    /**
     * Find zero or one JobSeekerDocument that matches the filter.
     * @param {JobSeekerDocumentFindUniqueArgs} args - Arguments to find a JobSeekerDocument
     * @example
     * // Get one JobSeekerDocument
     * const jobSeekerDocument = await prisma.jobSeekerDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobSeekerDocumentFindUniqueArgs>(args: SelectSubset<T, JobSeekerDocumentFindUniqueArgs<ExtArgs>>): Prisma__JobSeekerDocumentClient<$Result.GetResult<Prisma.$JobSeekerDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobSeekerDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobSeekerDocumentFindUniqueOrThrowArgs} args - Arguments to find a JobSeekerDocument
     * @example
     * // Get one JobSeekerDocument
     * const jobSeekerDocument = await prisma.jobSeekerDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobSeekerDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, JobSeekerDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobSeekerDocumentClient<$Result.GetResult<Prisma.$JobSeekerDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobSeekerDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerDocumentFindFirstArgs} args - Arguments to find a JobSeekerDocument
     * @example
     * // Get one JobSeekerDocument
     * const jobSeekerDocument = await prisma.jobSeekerDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobSeekerDocumentFindFirstArgs>(args?: SelectSubset<T, JobSeekerDocumentFindFirstArgs<ExtArgs>>): Prisma__JobSeekerDocumentClient<$Result.GetResult<Prisma.$JobSeekerDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobSeekerDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerDocumentFindFirstOrThrowArgs} args - Arguments to find a JobSeekerDocument
     * @example
     * // Get one JobSeekerDocument
     * const jobSeekerDocument = await prisma.jobSeekerDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobSeekerDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, JobSeekerDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobSeekerDocumentClient<$Result.GetResult<Prisma.$JobSeekerDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobSeekerDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobSeekerDocuments
     * const jobSeekerDocuments = await prisma.jobSeekerDocument.findMany()
     * 
     * // Get first 10 JobSeekerDocuments
     * const jobSeekerDocuments = await prisma.jobSeekerDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobSeekerDocumentWithIdOnly = await prisma.jobSeekerDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobSeekerDocumentFindManyArgs>(args?: SelectSubset<T, JobSeekerDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSeekerDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobSeekerDocument.
     * @param {JobSeekerDocumentCreateArgs} args - Arguments to create a JobSeekerDocument.
     * @example
     * // Create one JobSeekerDocument
     * const JobSeekerDocument = await prisma.jobSeekerDocument.create({
     *   data: {
     *     // ... data to create a JobSeekerDocument
     *   }
     * })
     * 
     */
    create<T extends JobSeekerDocumentCreateArgs>(args: SelectSubset<T, JobSeekerDocumentCreateArgs<ExtArgs>>): Prisma__JobSeekerDocumentClient<$Result.GetResult<Prisma.$JobSeekerDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobSeekerDocuments.
     * @param {JobSeekerDocumentCreateManyArgs} args - Arguments to create many JobSeekerDocuments.
     * @example
     * // Create many JobSeekerDocuments
     * const jobSeekerDocument = await prisma.jobSeekerDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobSeekerDocumentCreateManyArgs>(args?: SelectSubset<T, JobSeekerDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobSeekerDocuments and returns the data saved in the database.
     * @param {JobSeekerDocumentCreateManyAndReturnArgs} args - Arguments to create many JobSeekerDocuments.
     * @example
     * // Create many JobSeekerDocuments
     * const jobSeekerDocument = await prisma.jobSeekerDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobSeekerDocuments and only return the `id`
     * const jobSeekerDocumentWithIdOnly = await prisma.jobSeekerDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobSeekerDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, JobSeekerDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSeekerDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobSeekerDocument.
     * @param {JobSeekerDocumentDeleteArgs} args - Arguments to delete one JobSeekerDocument.
     * @example
     * // Delete one JobSeekerDocument
     * const JobSeekerDocument = await prisma.jobSeekerDocument.delete({
     *   where: {
     *     // ... filter to delete one JobSeekerDocument
     *   }
     * })
     * 
     */
    delete<T extends JobSeekerDocumentDeleteArgs>(args: SelectSubset<T, JobSeekerDocumentDeleteArgs<ExtArgs>>): Prisma__JobSeekerDocumentClient<$Result.GetResult<Prisma.$JobSeekerDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobSeekerDocument.
     * @param {JobSeekerDocumentUpdateArgs} args - Arguments to update one JobSeekerDocument.
     * @example
     * // Update one JobSeekerDocument
     * const jobSeekerDocument = await prisma.jobSeekerDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobSeekerDocumentUpdateArgs>(args: SelectSubset<T, JobSeekerDocumentUpdateArgs<ExtArgs>>): Prisma__JobSeekerDocumentClient<$Result.GetResult<Prisma.$JobSeekerDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobSeekerDocuments.
     * @param {JobSeekerDocumentDeleteManyArgs} args - Arguments to filter JobSeekerDocuments to delete.
     * @example
     * // Delete a few JobSeekerDocuments
     * const { count } = await prisma.jobSeekerDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobSeekerDocumentDeleteManyArgs>(args?: SelectSubset<T, JobSeekerDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobSeekerDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobSeekerDocuments
     * const jobSeekerDocument = await prisma.jobSeekerDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobSeekerDocumentUpdateManyArgs>(args: SelectSubset<T, JobSeekerDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobSeekerDocuments and returns the data updated in the database.
     * @param {JobSeekerDocumentUpdateManyAndReturnArgs} args - Arguments to update many JobSeekerDocuments.
     * @example
     * // Update many JobSeekerDocuments
     * const jobSeekerDocument = await prisma.jobSeekerDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobSeekerDocuments and only return the `id`
     * const jobSeekerDocumentWithIdOnly = await prisma.jobSeekerDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobSeekerDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, JobSeekerDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSeekerDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobSeekerDocument.
     * @param {JobSeekerDocumentUpsertArgs} args - Arguments to update or create a JobSeekerDocument.
     * @example
     * // Update or create a JobSeekerDocument
     * const jobSeekerDocument = await prisma.jobSeekerDocument.upsert({
     *   create: {
     *     // ... data to create a JobSeekerDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobSeekerDocument we want to update
     *   }
     * })
     */
    upsert<T extends JobSeekerDocumentUpsertArgs>(args: SelectSubset<T, JobSeekerDocumentUpsertArgs<ExtArgs>>): Prisma__JobSeekerDocumentClient<$Result.GetResult<Prisma.$JobSeekerDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobSeekerDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerDocumentCountArgs} args - Arguments to filter JobSeekerDocuments to count.
     * @example
     * // Count the number of JobSeekerDocuments
     * const count = await prisma.jobSeekerDocument.count({
     *   where: {
     *     // ... the filter for the JobSeekerDocuments we want to count
     *   }
     * })
    **/
    count<T extends JobSeekerDocumentCountArgs>(
      args?: Subset<T, JobSeekerDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobSeekerDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobSeekerDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobSeekerDocumentAggregateArgs>(args: Subset<T, JobSeekerDocumentAggregateArgs>): Prisma.PrismaPromise<GetJobSeekerDocumentAggregateType<T>>

    /**
     * Group by JobSeekerDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobSeekerDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobSeekerDocumentGroupByArgs['orderBy'] }
        : { orderBy?: JobSeekerDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobSeekerDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobSeekerDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobSeekerDocument model
   */
  readonly fields: JobSeekerDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobSeekerDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobSeekerDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobSeekerProfile<T extends JobSeekerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobSeekerProfileDefaultArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobSeekerDocument model
   */
  interface JobSeekerDocumentFieldRefs {
    readonly id: FieldRef<"JobSeekerDocument", 'String'>
    readonly jobSeekerProfileId: FieldRef<"JobSeekerDocument", 'String'>
    readonly fileName: FieldRef<"JobSeekerDocument", 'String'>
    readonly fileUrl: FieldRef<"JobSeekerDocument", 'String'>
    readonly mimeType: FieldRef<"JobSeekerDocument", 'String'>
    readonly fileSize: FieldRef<"JobSeekerDocument", 'Int'>
    readonly createdAt: FieldRef<"JobSeekerDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobSeekerDocument findUnique
   */
  export type JobSeekerDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerDocument
     */
    select?: JobSeekerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerDocument
     */
    omit?: JobSeekerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerDocumentInclude<ExtArgs> | null
    /**
     * Filter, which JobSeekerDocument to fetch.
     */
    where: JobSeekerDocumentWhereUniqueInput
  }

  /**
   * JobSeekerDocument findUniqueOrThrow
   */
  export type JobSeekerDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerDocument
     */
    select?: JobSeekerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerDocument
     */
    omit?: JobSeekerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerDocumentInclude<ExtArgs> | null
    /**
     * Filter, which JobSeekerDocument to fetch.
     */
    where: JobSeekerDocumentWhereUniqueInput
  }

  /**
   * JobSeekerDocument findFirst
   */
  export type JobSeekerDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerDocument
     */
    select?: JobSeekerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerDocument
     */
    omit?: JobSeekerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerDocumentInclude<ExtArgs> | null
    /**
     * Filter, which JobSeekerDocument to fetch.
     */
    where?: JobSeekerDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSeekerDocuments to fetch.
     */
    orderBy?: JobSeekerDocumentOrderByWithRelationInput | JobSeekerDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobSeekerDocuments.
     */
    cursor?: JobSeekerDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSeekerDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSeekerDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobSeekerDocuments.
     */
    distinct?: JobSeekerDocumentScalarFieldEnum | JobSeekerDocumentScalarFieldEnum[]
  }

  /**
   * JobSeekerDocument findFirstOrThrow
   */
  export type JobSeekerDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerDocument
     */
    select?: JobSeekerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerDocument
     */
    omit?: JobSeekerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerDocumentInclude<ExtArgs> | null
    /**
     * Filter, which JobSeekerDocument to fetch.
     */
    where?: JobSeekerDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSeekerDocuments to fetch.
     */
    orderBy?: JobSeekerDocumentOrderByWithRelationInput | JobSeekerDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobSeekerDocuments.
     */
    cursor?: JobSeekerDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSeekerDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSeekerDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobSeekerDocuments.
     */
    distinct?: JobSeekerDocumentScalarFieldEnum | JobSeekerDocumentScalarFieldEnum[]
  }

  /**
   * JobSeekerDocument findMany
   */
  export type JobSeekerDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerDocument
     */
    select?: JobSeekerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerDocument
     */
    omit?: JobSeekerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerDocumentInclude<ExtArgs> | null
    /**
     * Filter, which JobSeekerDocuments to fetch.
     */
    where?: JobSeekerDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSeekerDocuments to fetch.
     */
    orderBy?: JobSeekerDocumentOrderByWithRelationInput | JobSeekerDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobSeekerDocuments.
     */
    cursor?: JobSeekerDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSeekerDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSeekerDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobSeekerDocuments.
     */
    distinct?: JobSeekerDocumentScalarFieldEnum | JobSeekerDocumentScalarFieldEnum[]
  }

  /**
   * JobSeekerDocument create
   */
  export type JobSeekerDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerDocument
     */
    select?: JobSeekerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerDocument
     */
    omit?: JobSeekerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a JobSeekerDocument.
     */
    data: XOR<JobSeekerDocumentCreateInput, JobSeekerDocumentUncheckedCreateInput>
  }

  /**
   * JobSeekerDocument createMany
   */
  export type JobSeekerDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobSeekerDocuments.
     */
    data: JobSeekerDocumentCreateManyInput | JobSeekerDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobSeekerDocument createManyAndReturn
   */
  export type JobSeekerDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerDocument
     */
    select?: JobSeekerDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerDocument
     */
    omit?: JobSeekerDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many JobSeekerDocuments.
     */
    data: JobSeekerDocumentCreateManyInput | JobSeekerDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobSeekerDocument update
   */
  export type JobSeekerDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerDocument
     */
    select?: JobSeekerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerDocument
     */
    omit?: JobSeekerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a JobSeekerDocument.
     */
    data: XOR<JobSeekerDocumentUpdateInput, JobSeekerDocumentUncheckedUpdateInput>
    /**
     * Choose, which JobSeekerDocument to update.
     */
    where: JobSeekerDocumentWhereUniqueInput
  }

  /**
   * JobSeekerDocument updateMany
   */
  export type JobSeekerDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobSeekerDocuments.
     */
    data: XOR<JobSeekerDocumentUpdateManyMutationInput, JobSeekerDocumentUncheckedUpdateManyInput>
    /**
     * Filter which JobSeekerDocuments to update
     */
    where?: JobSeekerDocumentWhereInput
    /**
     * Limit how many JobSeekerDocuments to update.
     */
    limit?: number
  }

  /**
   * JobSeekerDocument updateManyAndReturn
   */
  export type JobSeekerDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerDocument
     */
    select?: JobSeekerDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerDocument
     */
    omit?: JobSeekerDocumentOmit<ExtArgs> | null
    /**
     * The data used to update JobSeekerDocuments.
     */
    data: XOR<JobSeekerDocumentUpdateManyMutationInput, JobSeekerDocumentUncheckedUpdateManyInput>
    /**
     * Filter which JobSeekerDocuments to update
     */
    where?: JobSeekerDocumentWhereInput
    /**
     * Limit how many JobSeekerDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobSeekerDocument upsert
   */
  export type JobSeekerDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerDocument
     */
    select?: JobSeekerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerDocument
     */
    omit?: JobSeekerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the JobSeekerDocument to update in case it exists.
     */
    where: JobSeekerDocumentWhereUniqueInput
    /**
     * In case the JobSeekerDocument found by the `where` argument doesn't exist, create a new JobSeekerDocument with this data.
     */
    create: XOR<JobSeekerDocumentCreateInput, JobSeekerDocumentUncheckedCreateInput>
    /**
     * In case the JobSeekerDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobSeekerDocumentUpdateInput, JobSeekerDocumentUncheckedUpdateInput>
  }

  /**
   * JobSeekerDocument delete
   */
  export type JobSeekerDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerDocument
     */
    select?: JobSeekerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerDocument
     */
    omit?: JobSeekerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerDocumentInclude<ExtArgs> | null
    /**
     * Filter which JobSeekerDocument to delete.
     */
    where: JobSeekerDocumentWhereUniqueInput
  }

  /**
   * JobSeekerDocument deleteMany
   */
  export type JobSeekerDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobSeekerDocuments to delete
     */
    where?: JobSeekerDocumentWhereInput
    /**
     * Limit how many JobSeekerDocuments to delete.
     */
    limit?: number
  }

  /**
   * JobSeekerDocument without action
   */
  export type JobSeekerDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerDocument
     */
    select?: JobSeekerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerDocument
     */
    omit?: JobSeekerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerDocumentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    tokenHash: 'tokenHash',
    userId: 'userId',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    lastUsedAt: 'lastUsedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const JobSeekerProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    nik: 'nik',
    birthDate: 'birthDate',
    provinsi: 'provinsi',
    kota: 'kota',
    district: 'district',
    village: 'village',
    rt: 'rt',
    rw: 'rw',
    address: 'address',
    educationLevel: 'educationLevel',
    educationMajor: 'educationMajor',
    skills: 'skills',
    interests: 'interests',
    desiredWorkField: 'desiredWorkField',
    employmentStatus: 'employmentStatus',
    jobSeekingStatus: 'jobSeekingStatus',
    verificationStatus: 'verificationStatus',
    verificationNote: 'verificationNote',
    verifiedAt: 'verifiedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobSeekerProfileScalarFieldEnum = (typeof JobSeekerProfileScalarFieldEnum)[keyof typeof JobSeekerProfileScalarFieldEnum]


  export const WorkExperienceScalarFieldEnum: {
    id: 'id',
    jobSeekerProfileId: 'jobSeekerProfileId',
    companyName: 'companyName',
    position: 'position',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    isCurrent: 'isCurrent',
    createdAt: 'createdAt'
  };

  export type WorkExperienceScalarFieldEnum = (typeof WorkExperienceScalarFieldEnum)[keyof typeof WorkExperienceScalarFieldEnum]


  export const JobSeekerDocumentScalarFieldEnum: {
    id: 'id',
    jobSeekerProfileId: 'jobSeekerProfileId',
    fileName: 'fileName',
    fileUrl: 'fileUrl',
    mimeType: 'mimeType',
    fileSize: 'fileSize',
    createdAt: 'createdAt'
  };

  export type JobSeekerDocumentScalarFieldEnum = (typeof JobSeekerDocumentScalarFieldEnum)[keyof typeof JobSeekerDocumentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'VerificationStatus'
   */
  export type EnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus'>
    


  /**
   * Reference to a field of type 'VerificationStatus[]'
   */
  export type ListEnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    jobSeekerProfile?: XOR<JobSeekerProfileNullableScalarRelationFilter, JobSeekerProfileWhereInput> | null
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobSeekerProfile?: JobSeekerProfileOrderByWithRelationInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    jobSeekerProfile?: XOR<JobSeekerProfileNullableScalarRelationFilter, JobSeekerProfileWhereInput> | null
    sessions?: SessionListRelationFilter
  }, "id" | "phone" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    tokenHash?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    revokedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    lastUsedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    revokedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    lastUsedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tokenHash">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    tokenHash?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type JobSeekerProfileWhereInput = {
    AND?: JobSeekerProfileWhereInput | JobSeekerProfileWhereInput[]
    OR?: JobSeekerProfileWhereInput[]
    NOT?: JobSeekerProfileWhereInput | JobSeekerProfileWhereInput[]
    id?: StringFilter<"JobSeekerProfile"> | string
    userId?: StringFilter<"JobSeekerProfile"> | string
    nik?: StringNullableFilter<"JobSeekerProfile"> | string | null
    birthDate?: DateTimeNullableFilter<"JobSeekerProfile"> | Date | string | null
    provinsi?: StringNullableFilter<"JobSeekerProfile"> | string | null
    kota?: StringNullableFilter<"JobSeekerProfile"> | string | null
    district?: StringNullableFilter<"JobSeekerProfile"> | string | null
    village?: StringNullableFilter<"JobSeekerProfile"> | string | null
    rt?: StringNullableFilter<"JobSeekerProfile"> | string | null
    rw?: StringNullableFilter<"JobSeekerProfile"> | string | null
    address?: StringNullableFilter<"JobSeekerProfile"> | string | null
    educationLevel?: StringNullableFilter<"JobSeekerProfile"> | string | null
    educationMajor?: StringNullableFilter<"JobSeekerProfile"> | string | null
    skills?: StringNullableListFilter<"JobSeekerProfile">
    interests?: StringNullableListFilter<"JobSeekerProfile">
    desiredWorkField?: StringNullableFilter<"JobSeekerProfile"> | string | null
    employmentStatus?: StringNullableFilter<"JobSeekerProfile"> | string | null
    jobSeekingStatus?: StringNullableFilter<"JobSeekerProfile"> | string | null
    verificationStatus?: EnumVerificationStatusFilter<"JobSeekerProfile"> | $Enums.VerificationStatus
    verificationNote?: StringNullableFilter<"JobSeekerProfile"> | string | null
    verifiedAt?: DateTimeNullableFilter<"JobSeekerProfile"> | Date | string | null
    createdAt?: DateTimeFilter<"JobSeekerProfile"> | Date | string
    updatedAt?: DateTimeFilter<"JobSeekerProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    experiences?: WorkExperienceListRelationFilter
    documents?: JobSeekerDocumentListRelationFilter
  }

  export type JobSeekerProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    nik?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    provinsi?: SortOrderInput | SortOrder
    kota?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    village?: SortOrderInput | SortOrder
    rt?: SortOrderInput | SortOrder
    rw?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    educationLevel?: SortOrderInput | SortOrder
    educationMajor?: SortOrderInput | SortOrder
    skills?: SortOrder
    interests?: SortOrder
    desiredWorkField?: SortOrderInput | SortOrder
    employmentStatus?: SortOrderInput | SortOrder
    jobSeekingStatus?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    verificationNote?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    experiences?: WorkExperienceOrderByRelationAggregateInput
    documents?: JobSeekerDocumentOrderByRelationAggregateInput
  }

  export type JobSeekerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    nik?: string
    AND?: JobSeekerProfileWhereInput | JobSeekerProfileWhereInput[]
    OR?: JobSeekerProfileWhereInput[]
    NOT?: JobSeekerProfileWhereInput | JobSeekerProfileWhereInput[]
    birthDate?: DateTimeNullableFilter<"JobSeekerProfile"> | Date | string | null
    provinsi?: StringNullableFilter<"JobSeekerProfile"> | string | null
    kota?: StringNullableFilter<"JobSeekerProfile"> | string | null
    district?: StringNullableFilter<"JobSeekerProfile"> | string | null
    village?: StringNullableFilter<"JobSeekerProfile"> | string | null
    rt?: StringNullableFilter<"JobSeekerProfile"> | string | null
    rw?: StringNullableFilter<"JobSeekerProfile"> | string | null
    address?: StringNullableFilter<"JobSeekerProfile"> | string | null
    educationLevel?: StringNullableFilter<"JobSeekerProfile"> | string | null
    educationMajor?: StringNullableFilter<"JobSeekerProfile"> | string | null
    skills?: StringNullableListFilter<"JobSeekerProfile">
    interests?: StringNullableListFilter<"JobSeekerProfile">
    desiredWorkField?: StringNullableFilter<"JobSeekerProfile"> | string | null
    employmentStatus?: StringNullableFilter<"JobSeekerProfile"> | string | null
    jobSeekingStatus?: StringNullableFilter<"JobSeekerProfile"> | string | null
    verificationStatus?: EnumVerificationStatusFilter<"JobSeekerProfile"> | $Enums.VerificationStatus
    verificationNote?: StringNullableFilter<"JobSeekerProfile"> | string | null
    verifiedAt?: DateTimeNullableFilter<"JobSeekerProfile"> | Date | string | null
    createdAt?: DateTimeFilter<"JobSeekerProfile"> | Date | string
    updatedAt?: DateTimeFilter<"JobSeekerProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    experiences?: WorkExperienceListRelationFilter
    documents?: JobSeekerDocumentListRelationFilter
  }, "id" | "userId" | "nik">

  export type JobSeekerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    nik?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    provinsi?: SortOrderInput | SortOrder
    kota?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    village?: SortOrderInput | SortOrder
    rt?: SortOrderInput | SortOrder
    rw?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    educationLevel?: SortOrderInput | SortOrder
    educationMajor?: SortOrderInput | SortOrder
    skills?: SortOrder
    interests?: SortOrder
    desiredWorkField?: SortOrderInput | SortOrder
    employmentStatus?: SortOrderInput | SortOrder
    jobSeekingStatus?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    verificationNote?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobSeekerProfileCountOrderByAggregateInput
    _max?: JobSeekerProfileMaxOrderByAggregateInput
    _min?: JobSeekerProfileMinOrderByAggregateInput
  }

  export type JobSeekerProfileScalarWhereWithAggregatesInput = {
    AND?: JobSeekerProfileScalarWhereWithAggregatesInput | JobSeekerProfileScalarWhereWithAggregatesInput[]
    OR?: JobSeekerProfileScalarWhereWithAggregatesInput[]
    NOT?: JobSeekerProfileScalarWhereWithAggregatesInput | JobSeekerProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobSeekerProfile"> | string
    userId?: StringWithAggregatesFilter<"JobSeekerProfile"> | string
    nik?: StringNullableWithAggregatesFilter<"JobSeekerProfile"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"JobSeekerProfile"> | Date | string | null
    provinsi?: StringNullableWithAggregatesFilter<"JobSeekerProfile"> | string | null
    kota?: StringNullableWithAggregatesFilter<"JobSeekerProfile"> | string | null
    district?: StringNullableWithAggregatesFilter<"JobSeekerProfile"> | string | null
    village?: StringNullableWithAggregatesFilter<"JobSeekerProfile"> | string | null
    rt?: StringNullableWithAggregatesFilter<"JobSeekerProfile"> | string | null
    rw?: StringNullableWithAggregatesFilter<"JobSeekerProfile"> | string | null
    address?: StringNullableWithAggregatesFilter<"JobSeekerProfile"> | string | null
    educationLevel?: StringNullableWithAggregatesFilter<"JobSeekerProfile"> | string | null
    educationMajor?: StringNullableWithAggregatesFilter<"JobSeekerProfile"> | string | null
    skills?: StringNullableListFilter<"JobSeekerProfile">
    interests?: StringNullableListFilter<"JobSeekerProfile">
    desiredWorkField?: StringNullableWithAggregatesFilter<"JobSeekerProfile"> | string | null
    employmentStatus?: StringNullableWithAggregatesFilter<"JobSeekerProfile"> | string | null
    jobSeekingStatus?: StringNullableWithAggregatesFilter<"JobSeekerProfile"> | string | null
    verificationStatus?: EnumVerificationStatusWithAggregatesFilter<"JobSeekerProfile"> | $Enums.VerificationStatus
    verificationNote?: StringNullableWithAggregatesFilter<"JobSeekerProfile"> | string | null
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"JobSeekerProfile"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobSeekerProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobSeekerProfile"> | Date | string
  }

  export type WorkExperienceWhereInput = {
    AND?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    OR?: WorkExperienceWhereInput[]
    NOT?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    id?: StringFilter<"WorkExperience"> | string
    jobSeekerProfileId?: StringFilter<"WorkExperience"> | string
    companyName?: StringFilter<"WorkExperience"> | string
    position?: StringFilter<"WorkExperience"> | string
    description?: StringNullableFilter<"WorkExperience"> | string | null
    startDate?: DateTimeNullableFilter<"WorkExperience"> | Date | string | null
    endDate?: DateTimeNullableFilter<"WorkExperience"> | Date | string | null
    isCurrent?: BoolFilter<"WorkExperience"> | boolean
    createdAt?: DateTimeFilter<"WorkExperience"> | Date | string
    jobSeekerProfile?: XOR<JobSeekerProfileScalarRelationFilter, JobSeekerProfileWhereInput>
  }

  export type WorkExperienceOrderByWithRelationInput = {
    id?: SortOrder
    jobSeekerProfileId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isCurrent?: SortOrder
    createdAt?: SortOrder
    jobSeekerProfile?: JobSeekerProfileOrderByWithRelationInput
  }

  export type WorkExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    OR?: WorkExperienceWhereInput[]
    NOT?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    jobSeekerProfileId?: StringFilter<"WorkExperience"> | string
    companyName?: StringFilter<"WorkExperience"> | string
    position?: StringFilter<"WorkExperience"> | string
    description?: StringNullableFilter<"WorkExperience"> | string | null
    startDate?: DateTimeNullableFilter<"WorkExperience"> | Date | string | null
    endDate?: DateTimeNullableFilter<"WorkExperience"> | Date | string | null
    isCurrent?: BoolFilter<"WorkExperience"> | boolean
    createdAt?: DateTimeFilter<"WorkExperience"> | Date | string
    jobSeekerProfile?: XOR<JobSeekerProfileScalarRelationFilter, JobSeekerProfileWhereInput>
  }, "id">

  export type WorkExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    jobSeekerProfileId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isCurrent?: SortOrder
    createdAt?: SortOrder
    _count?: WorkExperienceCountOrderByAggregateInput
    _max?: WorkExperienceMaxOrderByAggregateInput
    _min?: WorkExperienceMinOrderByAggregateInput
  }

  export type WorkExperienceScalarWhereWithAggregatesInput = {
    AND?: WorkExperienceScalarWhereWithAggregatesInput | WorkExperienceScalarWhereWithAggregatesInput[]
    OR?: WorkExperienceScalarWhereWithAggregatesInput[]
    NOT?: WorkExperienceScalarWhereWithAggregatesInput | WorkExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkExperience"> | string
    jobSeekerProfileId?: StringWithAggregatesFilter<"WorkExperience"> | string
    companyName?: StringWithAggregatesFilter<"WorkExperience"> | string
    position?: StringWithAggregatesFilter<"WorkExperience"> | string
    description?: StringNullableWithAggregatesFilter<"WorkExperience"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"WorkExperience"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"WorkExperience"> | Date | string | null
    isCurrent?: BoolWithAggregatesFilter<"WorkExperience"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WorkExperience"> | Date | string
  }

  export type JobSeekerDocumentWhereInput = {
    AND?: JobSeekerDocumentWhereInput | JobSeekerDocumentWhereInput[]
    OR?: JobSeekerDocumentWhereInput[]
    NOT?: JobSeekerDocumentWhereInput | JobSeekerDocumentWhereInput[]
    id?: StringFilter<"JobSeekerDocument"> | string
    jobSeekerProfileId?: StringFilter<"JobSeekerDocument"> | string
    fileName?: StringFilter<"JobSeekerDocument"> | string
    fileUrl?: StringFilter<"JobSeekerDocument"> | string
    mimeType?: StringNullableFilter<"JobSeekerDocument"> | string | null
    fileSize?: IntNullableFilter<"JobSeekerDocument"> | number | null
    createdAt?: DateTimeFilter<"JobSeekerDocument"> | Date | string
    jobSeekerProfile?: XOR<JobSeekerProfileScalarRelationFilter, JobSeekerProfileWhereInput>
  }

  export type JobSeekerDocumentOrderByWithRelationInput = {
    id?: SortOrder
    jobSeekerProfileId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    jobSeekerProfile?: JobSeekerProfileOrderByWithRelationInput
  }

  export type JobSeekerDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobSeekerDocumentWhereInput | JobSeekerDocumentWhereInput[]
    OR?: JobSeekerDocumentWhereInput[]
    NOT?: JobSeekerDocumentWhereInput | JobSeekerDocumentWhereInput[]
    jobSeekerProfileId?: StringFilter<"JobSeekerDocument"> | string
    fileName?: StringFilter<"JobSeekerDocument"> | string
    fileUrl?: StringFilter<"JobSeekerDocument"> | string
    mimeType?: StringNullableFilter<"JobSeekerDocument"> | string | null
    fileSize?: IntNullableFilter<"JobSeekerDocument"> | number | null
    createdAt?: DateTimeFilter<"JobSeekerDocument"> | Date | string
    jobSeekerProfile?: XOR<JobSeekerProfileScalarRelationFilter, JobSeekerProfileWhereInput>
  }, "id">

  export type JobSeekerDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    jobSeekerProfileId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: JobSeekerDocumentCountOrderByAggregateInput
    _avg?: JobSeekerDocumentAvgOrderByAggregateInput
    _max?: JobSeekerDocumentMaxOrderByAggregateInput
    _min?: JobSeekerDocumentMinOrderByAggregateInput
    _sum?: JobSeekerDocumentSumOrderByAggregateInput
  }

  export type JobSeekerDocumentScalarWhereWithAggregatesInput = {
    AND?: JobSeekerDocumentScalarWhereWithAggregatesInput | JobSeekerDocumentScalarWhereWithAggregatesInput[]
    OR?: JobSeekerDocumentScalarWhereWithAggregatesInput[]
    NOT?: JobSeekerDocumentScalarWhereWithAggregatesInput | JobSeekerDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobSeekerDocument"> | string
    jobSeekerProfileId?: StringWithAggregatesFilter<"JobSeekerDocument"> | string
    fileName?: StringWithAggregatesFilter<"JobSeekerDocument"> | string
    fileUrl?: StringWithAggregatesFilter<"JobSeekerDocument"> | string
    mimeType?: StringNullableWithAggregatesFilter<"JobSeekerDocument"> | string | null
    fileSize?: IntNullableWithAggregatesFilter<"JobSeekerDocument"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"JobSeekerDocument"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    phone: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobSeekerProfile?: JobSeekerProfileCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobSeekerProfile?: JobSeekerProfileUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobSeekerProfile?: JobSeekerProfileUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobSeekerProfile?: JobSeekerProfileUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    phone: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    lastUsedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    tokenHash: string
    userId: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    lastUsedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    tokenHash: string
    userId: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    lastUsedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobSeekerProfileCreateInput = {
    id?: string
    nik?: string | null
    birthDate?: Date | string | null
    provinsi?: string | null
    kota?: string | null
    district?: string | null
    village?: string | null
    rt?: string | null
    rw?: string | null
    address?: string | null
    educationLevel?: string | null
    educationMajor?: string | null
    skills?: JobSeekerProfileCreateskillsInput | string[]
    interests?: JobSeekerProfileCreateinterestsInput | string[]
    desiredWorkField?: string | null
    employmentStatus?: string | null
    jobSeekingStatus?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationNote?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutJobSeekerProfileInput
    experiences?: WorkExperienceCreateNestedManyWithoutJobSeekerProfileInput
    documents?: JobSeekerDocumentCreateNestedManyWithoutJobSeekerProfileInput
  }

  export type JobSeekerProfileUncheckedCreateInput = {
    id?: string
    userId: string
    nik?: string | null
    birthDate?: Date | string | null
    provinsi?: string | null
    kota?: string | null
    district?: string | null
    village?: string | null
    rt?: string | null
    rw?: string | null
    address?: string | null
    educationLevel?: string | null
    educationMajor?: string | null
    skills?: JobSeekerProfileCreateskillsInput | string[]
    interests?: JobSeekerProfileCreateinterestsInput | string[]
    desiredWorkField?: string | null
    employmentStatus?: string | null
    jobSeekingStatus?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationNote?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    experiences?: WorkExperienceUncheckedCreateNestedManyWithoutJobSeekerProfileInput
    documents?: JobSeekerDocumentUncheckedCreateNestedManyWithoutJobSeekerProfileInput
  }

  export type JobSeekerProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: NullableStringFieldUpdateOperationsInput | string | null
    rw?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    educationMajor?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobSeekerProfileUpdateskillsInput | string[]
    interests?: JobSeekerProfileUpdateinterestsInput | string[]
    desiredWorkField?: NullableStringFieldUpdateOperationsInput | string | null
    employmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    jobSeekingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationNote?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJobSeekerProfileNestedInput
    experiences?: WorkExperienceUpdateManyWithoutJobSeekerProfileNestedInput
    documents?: JobSeekerDocumentUpdateManyWithoutJobSeekerProfileNestedInput
  }

  export type JobSeekerProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: NullableStringFieldUpdateOperationsInput | string | null
    rw?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    educationMajor?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobSeekerProfileUpdateskillsInput | string[]
    interests?: JobSeekerProfileUpdateinterestsInput | string[]
    desiredWorkField?: NullableStringFieldUpdateOperationsInput | string | null
    employmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    jobSeekingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationNote?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiences?: WorkExperienceUncheckedUpdateManyWithoutJobSeekerProfileNestedInput
    documents?: JobSeekerDocumentUncheckedUpdateManyWithoutJobSeekerProfileNestedInput
  }

  export type JobSeekerProfileCreateManyInput = {
    id?: string
    userId: string
    nik?: string | null
    birthDate?: Date | string | null
    provinsi?: string | null
    kota?: string | null
    district?: string | null
    village?: string | null
    rt?: string | null
    rw?: string | null
    address?: string | null
    educationLevel?: string | null
    educationMajor?: string | null
    skills?: JobSeekerProfileCreateskillsInput | string[]
    interests?: JobSeekerProfileCreateinterestsInput | string[]
    desiredWorkField?: string | null
    employmentStatus?: string | null
    jobSeekingStatus?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationNote?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobSeekerProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: NullableStringFieldUpdateOperationsInput | string | null
    rw?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    educationMajor?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobSeekerProfileUpdateskillsInput | string[]
    interests?: JobSeekerProfileUpdateinterestsInput | string[]
    desiredWorkField?: NullableStringFieldUpdateOperationsInput | string | null
    employmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    jobSeekingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationNote?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobSeekerProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: NullableStringFieldUpdateOperationsInput | string | null
    rw?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    educationMajor?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobSeekerProfileUpdateskillsInput | string[]
    interests?: JobSeekerProfileUpdateinterestsInput | string[]
    desiredWorkField?: NullableStringFieldUpdateOperationsInput | string | null
    employmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    jobSeekingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationNote?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceCreateInput = {
    id?: string
    companyName: string
    position: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    createdAt?: Date | string
    jobSeekerProfile: JobSeekerProfileCreateNestedOneWithoutExperiencesInput
  }

  export type WorkExperienceUncheckedCreateInput = {
    id?: string
    jobSeekerProfileId: string
    companyName: string
    position: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    createdAt?: Date | string
  }

  export type WorkExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobSeekerProfile?: JobSeekerProfileUpdateOneRequiredWithoutExperiencesNestedInput
  }

  export type WorkExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobSeekerProfileId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceCreateManyInput = {
    id?: string
    jobSeekerProfileId: string
    companyName: string
    position: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    createdAt?: Date | string
  }

  export type WorkExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobSeekerProfileId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobSeekerDocumentCreateInput = {
    id?: string
    fileName: string
    fileUrl: string
    mimeType?: string | null
    fileSize?: number | null
    createdAt?: Date | string
    jobSeekerProfile: JobSeekerProfileCreateNestedOneWithoutDocumentsInput
  }

  export type JobSeekerDocumentUncheckedCreateInput = {
    id?: string
    jobSeekerProfileId: string
    fileName: string
    fileUrl: string
    mimeType?: string | null
    fileSize?: number | null
    createdAt?: Date | string
  }

  export type JobSeekerDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobSeekerProfile?: JobSeekerProfileUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type JobSeekerDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobSeekerProfileId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobSeekerDocumentCreateManyInput = {
    id?: string
    jobSeekerProfileId: string
    fileName: string
    fileUrl: string
    mimeType?: string | null
    fileSize?: number | null
    createdAt?: Date | string
  }

  export type JobSeekerDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobSeekerDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobSeekerProfileId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type JobSeekerProfileNullableScalarRelationFilter = {
    is?: JobSeekerProfileWhereInput | null
    isNot?: JobSeekerProfileWhereInput | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    lastUsedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    lastUsedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    lastUsedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type WorkExperienceListRelationFilter = {
    every?: WorkExperienceWhereInput
    some?: WorkExperienceWhereInput
    none?: WorkExperienceWhereInput
  }

  export type JobSeekerDocumentListRelationFilter = {
    every?: JobSeekerDocumentWhereInput
    some?: JobSeekerDocumentWhereInput
    none?: JobSeekerDocumentWhereInput
  }

  export type WorkExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobSeekerDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobSeekerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nik?: SortOrder
    birthDate?: SortOrder
    provinsi?: SortOrder
    kota?: SortOrder
    district?: SortOrder
    village?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    address?: SortOrder
    educationLevel?: SortOrder
    educationMajor?: SortOrder
    skills?: SortOrder
    interests?: SortOrder
    desiredWorkField?: SortOrder
    employmentStatus?: SortOrder
    jobSeekingStatus?: SortOrder
    verificationStatus?: SortOrder
    verificationNote?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobSeekerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nik?: SortOrder
    birthDate?: SortOrder
    provinsi?: SortOrder
    kota?: SortOrder
    district?: SortOrder
    village?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    address?: SortOrder
    educationLevel?: SortOrder
    educationMajor?: SortOrder
    desiredWorkField?: SortOrder
    employmentStatus?: SortOrder
    jobSeekingStatus?: SortOrder
    verificationStatus?: SortOrder
    verificationNote?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobSeekerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nik?: SortOrder
    birthDate?: SortOrder
    provinsi?: SortOrder
    kota?: SortOrder
    district?: SortOrder
    village?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    address?: SortOrder
    educationLevel?: SortOrder
    educationMajor?: SortOrder
    desiredWorkField?: SortOrder
    employmentStatus?: SortOrder
    jobSeekingStatus?: SortOrder
    verificationStatus?: SortOrder
    verificationNote?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type JobSeekerProfileScalarRelationFilter = {
    is?: JobSeekerProfileWhereInput
    isNot?: JobSeekerProfileWhereInput
  }

  export type WorkExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    jobSeekerProfileId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isCurrent?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    jobSeekerProfileId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isCurrent?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    jobSeekerProfileId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isCurrent?: SortOrder
    createdAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type JobSeekerDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    jobSeekerProfileId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
  }

  export type JobSeekerDocumentAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type JobSeekerDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    jobSeekerProfileId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
  }

  export type JobSeekerDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    jobSeekerProfileId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
  }

  export type JobSeekerDocumentSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type JobSeekerProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<JobSeekerProfileCreateWithoutUserInput, JobSeekerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: JobSeekerProfileCreateOrConnectWithoutUserInput
    connect?: JobSeekerProfileWhereUniqueInput
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type JobSeekerProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<JobSeekerProfileCreateWithoutUserInput, JobSeekerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: JobSeekerProfileCreateOrConnectWithoutUserInput
    connect?: JobSeekerProfileWhereUniqueInput
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type JobSeekerProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<JobSeekerProfileCreateWithoutUserInput, JobSeekerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: JobSeekerProfileCreateOrConnectWithoutUserInput
    upsert?: JobSeekerProfileUpsertWithoutUserInput
    disconnect?: JobSeekerProfileWhereInput | boolean
    delete?: JobSeekerProfileWhereInput | boolean
    connect?: JobSeekerProfileWhereUniqueInput
    update?: XOR<XOR<JobSeekerProfileUpdateToOneWithWhereWithoutUserInput, JobSeekerProfileUpdateWithoutUserInput>, JobSeekerProfileUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type JobSeekerProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<JobSeekerProfileCreateWithoutUserInput, JobSeekerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: JobSeekerProfileCreateOrConnectWithoutUserInput
    upsert?: JobSeekerProfileUpsertWithoutUserInput
    disconnect?: JobSeekerProfileWhereInput | boolean
    delete?: JobSeekerProfileWhereInput | boolean
    connect?: JobSeekerProfileWhereUniqueInput
    update?: XOR<XOR<JobSeekerProfileUpdateToOneWithWhereWithoutUserInput, JobSeekerProfileUpdateWithoutUserInput>, JobSeekerProfileUncheckedUpdateWithoutUserInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type JobSeekerProfileCreateskillsInput = {
    set: string[]
  }

  export type JobSeekerProfileCreateinterestsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutJobSeekerProfileInput = {
    create?: XOR<UserCreateWithoutJobSeekerProfileInput, UserUncheckedCreateWithoutJobSeekerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobSeekerProfileInput
    connect?: UserWhereUniqueInput
  }

  export type WorkExperienceCreateNestedManyWithoutJobSeekerProfileInput = {
    create?: XOR<WorkExperienceCreateWithoutJobSeekerProfileInput, WorkExperienceUncheckedCreateWithoutJobSeekerProfileInput> | WorkExperienceCreateWithoutJobSeekerProfileInput[] | WorkExperienceUncheckedCreateWithoutJobSeekerProfileInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutJobSeekerProfileInput | WorkExperienceCreateOrConnectWithoutJobSeekerProfileInput[]
    createMany?: WorkExperienceCreateManyJobSeekerProfileInputEnvelope
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
  }

  export type JobSeekerDocumentCreateNestedManyWithoutJobSeekerProfileInput = {
    create?: XOR<JobSeekerDocumentCreateWithoutJobSeekerProfileInput, JobSeekerDocumentUncheckedCreateWithoutJobSeekerProfileInput> | JobSeekerDocumentCreateWithoutJobSeekerProfileInput[] | JobSeekerDocumentUncheckedCreateWithoutJobSeekerProfileInput[]
    connectOrCreate?: JobSeekerDocumentCreateOrConnectWithoutJobSeekerProfileInput | JobSeekerDocumentCreateOrConnectWithoutJobSeekerProfileInput[]
    createMany?: JobSeekerDocumentCreateManyJobSeekerProfileInputEnvelope
    connect?: JobSeekerDocumentWhereUniqueInput | JobSeekerDocumentWhereUniqueInput[]
  }

  export type WorkExperienceUncheckedCreateNestedManyWithoutJobSeekerProfileInput = {
    create?: XOR<WorkExperienceCreateWithoutJobSeekerProfileInput, WorkExperienceUncheckedCreateWithoutJobSeekerProfileInput> | WorkExperienceCreateWithoutJobSeekerProfileInput[] | WorkExperienceUncheckedCreateWithoutJobSeekerProfileInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutJobSeekerProfileInput | WorkExperienceCreateOrConnectWithoutJobSeekerProfileInput[]
    createMany?: WorkExperienceCreateManyJobSeekerProfileInputEnvelope
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
  }

  export type JobSeekerDocumentUncheckedCreateNestedManyWithoutJobSeekerProfileInput = {
    create?: XOR<JobSeekerDocumentCreateWithoutJobSeekerProfileInput, JobSeekerDocumentUncheckedCreateWithoutJobSeekerProfileInput> | JobSeekerDocumentCreateWithoutJobSeekerProfileInput[] | JobSeekerDocumentUncheckedCreateWithoutJobSeekerProfileInput[]
    connectOrCreate?: JobSeekerDocumentCreateOrConnectWithoutJobSeekerProfileInput | JobSeekerDocumentCreateOrConnectWithoutJobSeekerProfileInput[]
    createMany?: JobSeekerDocumentCreateManyJobSeekerProfileInputEnvelope
    connect?: JobSeekerDocumentWhereUniqueInput | JobSeekerDocumentWhereUniqueInput[]
  }

  export type JobSeekerProfileUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type JobSeekerProfileUpdateinterestsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.VerificationStatus
  }

  export type UserUpdateOneRequiredWithoutJobSeekerProfileNestedInput = {
    create?: XOR<UserCreateWithoutJobSeekerProfileInput, UserUncheckedCreateWithoutJobSeekerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobSeekerProfileInput
    upsert?: UserUpsertWithoutJobSeekerProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJobSeekerProfileInput, UserUpdateWithoutJobSeekerProfileInput>, UserUncheckedUpdateWithoutJobSeekerProfileInput>
  }

  export type WorkExperienceUpdateManyWithoutJobSeekerProfileNestedInput = {
    create?: XOR<WorkExperienceCreateWithoutJobSeekerProfileInput, WorkExperienceUncheckedCreateWithoutJobSeekerProfileInput> | WorkExperienceCreateWithoutJobSeekerProfileInput[] | WorkExperienceUncheckedCreateWithoutJobSeekerProfileInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutJobSeekerProfileInput | WorkExperienceCreateOrConnectWithoutJobSeekerProfileInput[]
    upsert?: WorkExperienceUpsertWithWhereUniqueWithoutJobSeekerProfileInput | WorkExperienceUpsertWithWhereUniqueWithoutJobSeekerProfileInput[]
    createMany?: WorkExperienceCreateManyJobSeekerProfileInputEnvelope
    set?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    disconnect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    delete?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    update?: WorkExperienceUpdateWithWhereUniqueWithoutJobSeekerProfileInput | WorkExperienceUpdateWithWhereUniqueWithoutJobSeekerProfileInput[]
    updateMany?: WorkExperienceUpdateManyWithWhereWithoutJobSeekerProfileInput | WorkExperienceUpdateManyWithWhereWithoutJobSeekerProfileInput[]
    deleteMany?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
  }

  export type JobSeekerDocumentUpdateManyWithoutJobSeekerProfileNestedInput = {
    create?: XOR<JobSeekerDocumentCreateWithoutJobSeekerProfileInput, JobSeekerDocumentUncheckedCreateWithoutJobSeekerProfileInput> | JobSeekerDocumentCreateWithoutJobSeekerProfileInput[] | JobSeekerDocumentUncheckedCreateWithoutJobSeekerProfileInput[]
    connectOrCreate?: JobSeekerDocumentCreateOrConnectWithoutJobSeekerProfileInput | JobSeekerDocumentCreateOrConnectWithoutJobSeekerProfileInput[]
    upsert?: JobSeekerDocumentUpsertWithWhereUniqueWithoutJobSeekerProfileInput | JobSeekerDocumentUpsertWithWhereUniqueWithoutJobSeekerProfileInput[]
    createMany?: JobSeekerDocumentCreateManyJobSeekerProfileInputEnvelope
    set?: JobSeekerDocumentWhereUniqueInput | JobSeekerDocumentWhereUniqueInput[]
    disconnect?: JobSeekerDocumentWhereUniqueInput | JobSeekerDocumentWhereUniqueInput[]
    delete?: JobSeekerDocumentWhereUniqueInput | JobSeekerDocumentWhereUniqueInput[]
    connect?: JobSeekerDocumentWhereUniqueInput | JobSeekerDocumentWhereUniqueInput[]
    update?: JobSeekerDocumentUpdateWithWhereUniqueWithoutJobSeekerProfileInput | JobSeekerDocumentUpdateWithWhereUniqueWithoutJobSeekerProfileInput[]
    updateMany?: JobSeekerDocumentUpdateManyWithWhereWithoutJobSeekerProfileInput | JobSeekerDocumentUpdateManyWithWhereWithoutJobSeekerProfileInput[]
    deleteMany?: JobSeekerDocumentScalarWhereInput | JobSeekerDocumentScalarWhereInput[]
  }

  export type WorkExperienceUncheckedUpdateManyWithoutJobSeekerProfileNestedInput = {
    create?: XOR<WorkExperienceCreateWithoutJobSeekerProfileInput, WorkExperienceUncheckedCreateWithoutJobSeekerProfileInput> | WorkExperienceCreateWithoutJobSeekerProfileInput[] | WorkExperienceUncheckedCreateWithoutJobSeekerProfileInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutJobSeekerProfileInput | WorkExperienceCreateOrConnectWithoutJobSeekerProfileInput[]
    upsert?: WorkExperienceUpsertWithWhereUniqueWithoutJobSeekerProfileInput | WorkExperienceUpsertWithWhereUniqueWithoutJobSeekerProfileInput[]
    createMany?: WorkExperienceCreateManyJobSeekerProfileInputEnvelope
    set?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    disconnect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    delete?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    update?: WorkExperienceUpdateWithWhereUniqueWithoutJobSeekerProfileInput | WorkExperienceUpdateWithWhereUniqueWithoutJobSeekerProfileInput[]
    updateMany?: WorkExperienceUpdateManyWithWhereWithoutJobSeekerProfileInput | WorkExperienceUpdateManyWithWhereWithoutJobSeekerProfileInput[]
    deleteMany?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
  }

  export type JobSeekerDocumentUncheckedUpdateManyWithoutJobSeekerProfileNestedInput = {
    create?: XOR<JobSeekerDocumentCreateWithoutJobSeekerProfileInput, JobSeekerDocumentUncheckedCreateWithoutJobSeekerProfileInput> | JobSeekerDocumentCreateWithoutJobSeekerProfileInput[] | JobSeekerDocumentUncheckedCreateWithoutJobSeekerProfileInput[]
    connectOrCreate?: JobSeekerDocumentCreateOrConnectWithoutJobSeekerProfileInput | JobSeekerDocumentCreateOrConnectWithoutJobSeekerProfileInput[]
    upsert?: JobSeekerDocumentUpsertWithWhereUniqueWithoutJobSeekerProfileInput | JobSeekerDocumentUpsertWithWhereUniqueWithoutJobSeekerProfileInput[]
    createMany?: JobSeekerDocumentCreateManyJobSeekerProfileInputEnvelope
    set?: JobSeekerDocumentWhereUniqueInput | JobSeekerDocumentWhereUniqueInput[]
    disconnect?: JobSeekerDocumentWhereUniqueInput | JobSeekerDocumentWhereUniqueInput[]
    delete?: JobSeekerDocumentWhereUniqueInput | JobSeekerDocumentWhereUniqueInput[]
    connect?: JobSeekerDocumentWhereUniqueInput | JobSeekerDocumentWhereUniqueInput[]
    update?: JobSeekerDocumentUpdateWithWhereUniqueWithoutJobSeekerProfileInput | JobSeekerDocumentUpdateWithWhereUniqueWithoutJobSeekerProfileInput[]
    updateMany?: JobSeekerDocumentUpdateManyWithWhereWithoutJobSeekerProfileInput | JobSeekerDocumentUpdateManyWithWhereWithoutJobSeekerProfileInput[]
    deleteMany?: JobSeekerDocumentScalarWhereInput | JobSeekerDocumentScalarWhereInput[]
  }

  export type JobSeekerProfileCreateNestedOneWithoutExperiencesInput = {
    create?: XOR<JobSeekerProfileCreateWithoutExperiencesInput, JobSeekerProfileUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: JobSeekerProfileCreateOrConnectWithoutExperiencesInput
    connect?: JobSeekerProfileWhereUniqueInput
  }

  export type JobSeekerProfileUpdateOneRequiredWithoutExperiencesNestedInput = {
    create?: XOR<JobSeekerProfileCreateWithoutExperiencesInput, JobSeekerProfileUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: JobSeekerProfileCreateOrConnectWithoutExperiencesInput
    upsert?: JobSeekerProfileUpsertWithoutExperiencesInput
    connect?: JobSeekerProfileWhereUniqueInput
    update?: XOR<XOR<JobSeekerProfileUpdateToOneWithWhereWithoutExperiencesInput, JobSeekerProfileUpdateWithoutExperiencesInput>, JobSeekerProfileUncheckedUpdateWithoutExperiencesInput>
  }

  export type JobSeekerProfileCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<JobSeekerProfileCreateWithoutDocumentsInput, JobSeekerProfileUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: JobSeekerProfileCreateOrConnectWithoutDocumentsInput
    connect?: JobSeekerProfileWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JobSeekerProfileUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<JobSeekerProfileCreateWithoutDocumentsInput, JobSeekerProfileUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: JobSeekerProfileCreateOrConnectWithoutDocumentsInput
    upsert?: JobSeekerProfileUpsertWithoutDocumentsInput
    connect?: JobSeekerProfileWhereUniqueInput
    update?: XOR<XOR<JobSeekerProfileUpdateToOneWithWhereWithoutDocumentsInput, JobSeekerProfileUpdateWithoutDocumentsInput>, JobSeekerProfileUncheckedUpdateWithoutDocumentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type JobSeekerProfileCreateWithoutUserInput = {
    id?: string
    nik?: string | null
    birthDate?: Date | string | null
    provinsi?: string | null
    kota?: string | null
    district?: string | null
    village?: string | null
    rt?: string | null
    rw?: string | null
    address?: string | null
    educationLevel?: string | null
    educationMajor?: string | null
    skills?: JobSeekerProfileCreateskillsInput | string[]
    interests?: JobSeekerProfileCreateinterestsInput | string[]
    desiredWorkField?: string | null
    employmentStatus?: string | null
    jobSeekingStatus?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationNote?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    experiences?: WorkExperienceCreateNestedManyWithoutJobSeekerProfileInput
    documents?: JobSeekerDocumentCreateNestedManyWithoutJobSeekerProfileInput
  }

  export type JobSeekerProfileUncheckedCreateWithoutUserInput = {
    id?: string
    nik?: string | null
    birthDate?: Date | string | null
    provinsi?: string | null
    kota?: string | null
    district?: string | null
    village?: string | null
    rt?: string | null
    rw?: string | null
    address?: string | null
    educationLevel?: string | null
    educationMajor?: string | null
    skills?: JobSeekerProfileCreateskillsInput | string[]
    interests?: JobSeekerProfileCreateinterestsInput | string[]
    desiredWorkField?: string | null
    employmentStatus?: string | null
    jobSeekingStatus?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationNote?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    experiences?: WorkExperienceUncheckedCreateNestedManyWithoutJobSeekerProfileInput
    documents?: JobSeekerDocumentUncheckedCreateNestedManyWithoutJobSeekerProfileInput
  }

  export type JobSeekerProfileCreateOrConnectWithoutUserInput = {
    where: JobSeekerProfileWhereUniqueInput
    create: XOR<JobSeekerProfileCreateWithoutUserInput, JobSeekerProfileUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    lastUsedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    lastUsedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JobSeekerProfileUpsertWithoutUserInput = {
    update: XOR<JobSeekerProfileUpdateWithoutUserInput, JobSeekerProfileUncheckedUpdateWithoutUserInput>
    create: XOR<JobSeekerProfileCreateWithoutUserInput, JobSeekerProfileUncheckedCreateWithoutUserInput>
    where?: JobSeekerProfileWhereInput
  }

  export type JobSeekerProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: JobSeekerProfileWhereInput
    data: XOR<JobSeekerProfileUpdateWithoutUserInput, JobSeekerProfileUncheckedUpdateWithoutUserInput>
  }

  export type JobSeekerProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: NullableStringFieldUpdateOperationsInput | string | null
    rw?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    educationMajor?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobSeekerProfileUpdateskillsInput | string[]
    interests?: JobSeekerProfileUpdateinterestsInput | string[]
    desiredWorkField?: NullableStringFieldUpdateOperationsInput | string | null
    employmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    jobSeekingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationNote?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiences?: WorkExperienceUpdateManyWithoutJobSeekerProfileNestedInput
    documents?: JobSeekerDocumentUpdateManyWithoutJobSeekerProfileNestedInput
  }

  export type JobSeekerProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: NullableStringFieldUpdateOperationsInput | string | null
    rw?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    educationMajor?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobSeekerProfileUpdateskillsInput | string[]
    interests?: JobSeekerProfileUpdateinterestsInput | string[]
    desiredWorkField?: NullableStringFieldUpdateOperationsInput | string | null
    employmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    jobSeekingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationNote?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiences?: WorkExperienceUncheckedUpdateManyWithoutJobSeekerProfileNestedInput
    documents?: JobSeekerDocumentUncheckedUpdateManyWithoutJobSeekerProfileNestedInput
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    tokenHash?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    revokedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    lastUsedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    phone: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobSeekerProfile?: JobSeekerProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    phone: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobSeekerProfile?: JobSeekerProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobSeekerProfile?: JobSeekerProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobSeekerProfile?: JobSeekerProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutJobSeekerProfileInput = {
    id?: string
    name: string
    phone: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJobSeekerProfileInput = {
    id?: string
    name: string
    phone: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJobSeekerProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobSeekerProfileInput, UserUncheckedCreateWithoutJobSeekerProfileInput>
  }

  export type WorkExperienceCreateWithoutJobSeekerProfileInput = {
    id?: string
    companyName: string
    position: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    createdAt?: Date | string
  }

  export type WorkExperienceUncheckedCreateWithoutJobSeekerProfileInput = {
    id?: string
    companyName: string
    position: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    createdAt?: Date | string
  }

  export type WorkExperienceCreateOrConnectWithoutJobSeekerProfileInput = {
    where: WorkExperienceWhereUniqueInput
    create: XOR<WorkExperienceCreateWithoutJobSeekerProfileInput, WorkExperienceUncheckedCreateWithoutJobSeekerProfileInput>
  }

  export type WorkExperienceCreateManyJobSeekerProfileInputEnvelope = {
    data: WorkExperienceCreateManyJobSeekerProfileInput | WorkExperienceCreateManyJobSeekerProfileInput[]
    skipDuplicates?: boolean
  }

  export type JobSeekerDocumentCreateWithoutJobSeekerProfileInput = {
    id?: string
    fileName: string
    fileUrl: string
    mimeType?: string | null
    fileSize?: number | null
    createdAt?: Date | string
  }

  export type JobSeekerDocumentUncheckedCreateWithoutJobSeekerProfileInput = {
    id?: string
    fileName: string
    fileUrl: string
    mimeType?: string | null
    fileSize?: number | null
    createdAt?: Date | string
  }

  export type JobSeekerDocumentCreateOrConnectWithoutJobSeekerProfileInput = {
    where: JobSeekerDocumentWhereUniqueInput
    create: XOR<JobSeekerDocumentCreateWithoutJobSeekerProfileInput, JobSeekerDocumentUncheckedCreateWithoutJobSeekerProfileInput>
  }

  export type JobSeekerDocumentCreateManyJobSeekerProfileInputEnvelope = {
    data: JobSeekerDocumentCreateManyJobSeekerProfileInput | JobSeekerDocumentCreateManyJobSeekerProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutJobSeekerProfileInput = {
    update: XOR<UserUpdateWithoutJobSeekerProfileInput, UserUncheckedUpdateWithoutJobSeekerProfileInput>
    create: XOR<UserCreateWithoutJobSeekerProfileInput, UserUncheckedCreateWithoutJobSeekerProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJobSeekerProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJobSeekerProfileInput, UserUncheckedUpdateWithoutJobSeekerProfileInput>
  }

  export type UserUpdateWithoutJobSeekerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJobSeekerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkExperienceUpsertWithWhereUniqueWithoutJobSeekerProfileInput = {
    where: WorkExperienceWhereUniqueInput
    update: XOR<WorkExperienceUpdateWithoutJobSeekerProfileInput, WorkExperienceUncheckedUpdateWithoutJobSeekerProfileInput>
    create: XOR<WorkExperienceCreateWithoutJobSeekerProfileInput, WorkExperienceUncheckedCreateWithoutJobSeekerProfileInput>
  }

  export type WorkExperienceUpdateWithWhereUniqueWithoutJobSeekerProfileInput = {
    where: WorkExperienceWhereUniqueInput
    data: XOR<WorkExperienceUpdateWithoutJobSeekerProfileInput, WorkExperienceUncheckedUpdateWithoutJobSeekerProfileInput>
  }

  export type WorkExperienceUpdateManyWithWhereWithoutJobSeekerProfileInput = {
    where: WorkExperienceScalarWhereInput
    data: XOR<WorkExperienceUpdateManyMutationInput, WorkExperienceUncheckedUpdateManyWithoutJobSeekerProfileInput>
  }

  export type WorkExperienceScalarWhereInput = {
    AND?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
    OR?: WorkExperienceScalarWhereInput[]
    NOT?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
    id?: StringFilter<"WorkExperience"> | string
    jobSeekerProfileId?: StringFilter<"WorkExperience"> | string
    companyName?: StringFilter<"WorkExperience"> | string
    position?: StringFilter<"WorkExperience"> | string
    description?: StringNullableFilter<"WorkExperience"> | string | null
    startDate?: DateTimeNullableFilter<"WorkExperience"> | Date | string | null
    endDate?: DateTimeNullableFilter<"WorkExperience"> | Date | string | null
    isCurrent?: BoolFilter<"WorkExperience"> | boolean
    createdAt?: DateTimeFilter<"WorkExperience"> | Date | string
  }

  export type JobSeekerDocumentUpsertWithWhereUniqueWithoutJobSeekerProfileInput = {
    where: JobSeekerDocumentWhereUniqueInput
    update: XOR<JobSeekerDocumentUpdateWithoutJobSeekerProfileInput, JobSeekerDocumentUncheckedUpdateWithoutJobSeekerProfileInput>
    create: XOR<JobSeekerDocumentCreateWithoutJobSeekerProfileInput, JobSeekerDocumentUncheckedCreateWithoutJobSeekerProfileInput>
  }

  export type JobSeekerDocumentUpdateWithWhereUniqueWithoutJobSeekerProfileInput = {
    where: JobSeekerDocumentWhereUniqueInput
    data: XOR<JobSeekerDocumentUpdateWithoutJobSeekerProfileInput, JobSeekerDocumentUncheckedUpdateWithoutJobSeekerProfileInput>
  }

  export type JobSeekerDocumentUpdateManyWithWhereWithoutJobSeekerProfileInput = {
    where: JobSeekerDocumentScalarWhereInput
    data: XOR<JobSeekerDocumentUpdateManyMutationInput, JobSeekerDocumentUncheckedUpdateManyWithoutJobSeekerProfileInput>
  }

  export type JobSeekerDocumentScalarWhereInput = {
    AND?: JobSeekerDocumentScalarWhereInput | JobSeekerDocumentScalarWhereInput[]
    OR?: JobSeekerDocumentScalarWhereInput[]
    NOT?: JobSeekerDocumentScalarWhereInput | JobSeekerDocumentScalarWhereInput[]
    id?: StringFilter<"JobSeekerDocument"> | string
    jobSeekerProfileId?: StringFilter<"JobSeekerDocument"> | string
    fileName?: StringFilter<"JobSeekerDocument"> | string
    fileUrl?: StringFilter<"JobSeekerDocument"> | string
    mimeType?: StringNullableFilter<"JobSeekerDocument"> | string | null
    fileSize?: IntNullableFilter<"JobSeekerDocument"> | number | null
    createdAt?: DateTimeFilter<"JobSeekerDocument"> | Date | string
  }

  export type JobSeekerProfileCreateWithoutExperiencesInput = {
    id?: string
    nik?: string | null
    birthDate?: Date | string | null
    provinsi?: string | null
    kota?: string | null
    district?: string | null
    village?: string | null
    rt?: string | null
    rw?: string | null
    address?: string | null
    educationLevel?: string | null
    educationMajor?: string | null
    skills?: JobSeekerProfileCreateskillsInput | string[]
    interests?: JobSeekerProfileCreateinterestsInput | string[]
    desiredWorkField?: string | null
    employmentStatus?: string | null
    jobSeekingStatus?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationNote?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutJobSeekerProfileInput
    documents?: JobSeekerDocumentCreateNestedManyWithoutJobSeekerProfileInput
  }

  export type JobSeekerProfileUncheckedCreateWithoutExperiencesInput = {
    id?: string
    userId: string
    nik?: string | null
    birthDate?: Date | string | null
    provinsi?: string | null
    kota?: string | null
    district?: string | null
    village?: string | null
    rt?: string | null
    rw?: string | null
    address?: string | null
    educationLevel?: string | null
    educationMajor?: string | null
    skills?: JobSeekerProfileCreateskillsInput | string[]
    interests?: JobSeekerProfileCreateinterestsInput | string[]
    desiredWorkField?: string | null
    employmentStatus?: string | null
    jobSeekingStatus?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationNote?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: JobSeekerDocumentUncheckedCreateNestedManyWithoutJobSeekerProfileInput
  }

  export type JobSeekerProfileCreateOrConnectWithoutExperiencesInput = {
    where: JobSeekerProfileWhereUniqueInput
    create: XOR<JobSeekerProfileCreateWithoutExperiencesInput, JobSeekerProfileUncheckedCreateWithoutExperiencesInput>
  }

  export type JobSeekerProfileUpsertWithoutExperiencesInput = {
    update: XOR<JobSeekerProfileUpdateWithoutExperiencesInput, JobSeekerProfileUncheckedUpdateWithoutExperiencesInput>
    create: XOR<JobSeekerProfileCreateWithoutExperiencesInput, JobSeekerProfileUncheckedCreateWithoutExperiencesInput>
    where?: JobSeekerProfileWhereInput
  }

  export type JobSeekerProfileUpdateToOneWithWhereWithoutExperiencesInput = {
    where?: JobSeekerProfileWhereInput
    data: XOR<JobSeekerProfileUpdateWithoutExperiencesInput, JobSeekerProfileUncheckedUpdateWithoutExperiencesInput>
  }

  export type JobSeekerProfileUpdateWithoutExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: NullableStringFieldUpdateOperationsInput | string | null
    rw?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    educationMajor?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobSeekerProfileUpdateskillsInput | string[]
    interests?: JobSeekerProfileUpdateinterestsInput | string[]
    desiredWorkField?: NullableStringFieldUpdateOperationsInput | string | null
    employmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    jobSeekingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationNote?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJobSeekerProfileNestedInput
    documents?: JobSeekerDocumentUpdateManyWithoutJobSeekerProfileNestedInput
  }

  export type JobSeekerProfileUncheckedUpdateWithoutExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: NullableStringFieldUpdateOperationsInput | string | null
    rw?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    educationMajor?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobSeekerProfileUpdateskillsInput | string[]
    interests?: JobSeekerProfileUpdateinterestsInput | string[]
    desiredWorkField?: NullableStringFieldUpdateOperationsInput | string | null
    employmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    jobSeekingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationNote?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: JobSeekerDocumentUncheckedUpdateManyWithoutJobSeekerProfileNestedInput
  }

  export type JobSeekerProfileCreateWithoutDocumentsInput = {
    id?: string
    nik?: string | null
    birthDate?: Date | string | null
    provinsi?: string | null
    kota?: string | null
    district?: string | null
    village?: string | null
    rt?: string | null
    rw?: string | null
    address?: string | null
    educationLevel?: string | null
    educationMajor?: string | null
    skills?: JobSeekerProfileCreateskillsInput | string[]
    interests?: JobSeekerProfileCreateinterestsInput | string[]
    desiredWorkField?: string | null
    employmentStatus?: string | null
    jobSeekingStatus?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationNote?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutJobSeekerProfileInput
    experiences?: WorkExperienceCreateNestedManyWithoutJobSeekerProfileInput
  }

  export type JobSeekerProfileUncheckedCreateWithoutDocumentsInput = {
    id?: string
    userId: string
    nik?: string | null
    birthDate?: Date | string | null
    provinsi?: string | null
    kota?: string | null
    district?: string | null
    village?: string | null
    rt?: string | null
    rw?: string | null
    address?: string | null
    educationLevel?: string | null
    educationMajor?: string | null
    skills?: JobSeekerProfileCreateskillsInput | string[]
    interests?: JobSeekerProfileCreateinterestsInput | string[]
    desiredWorkField?: string | null
    employmentStatus?: string | null
    jobSeekingStatus?: string | null
    verificationStatus?: $Enums.VerificationStatus
    verificationNote?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    experiences?: WorkExperienceUncheckedCreateNestedManyWithoutJobSeekerProfileInput
  }

  export type JobSeekerProfileCreateOrConnectWithoutDocumentsInput = {
    where: JobSeekerProfileWhereUniqueInput
    create: XOR<JobSeekerProfileCreateWithoutDocumentsInput, JobSeekerProfileUncheckedCreateWithoutDocumentsInput>
  }

  export type JobSeekerProfileUpsertWithoutDocumentsInput = {
    update: XOR<JobSeekerProfileUpdateWithoutDocumentsInput, JobSeekerProfileUncheckedUpdateWithoutDocumentsInput>
    create: XOR<JobSeekerProfileCreateWithoutDocumentsInput, JobSeekerProfileUncheckedCreateWithoutDocumentsInput>
    where?: JobSeekerProfileWhereInput
  }

  export type JobSeekerProfileUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: JobSeekerProfileWhereInput
    data: XOR<JobSeekerProfileUpdateWithoutDocumentsInput, JobSeekerProfileUncheckedUpdateWithoutDocumentsInput>
  }

  export type JobSeekerProfileUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: NullableStringFieldUpdateOperationsInput | string | null
    rw?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    educationMajor?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobSeekerProfileUpdateskillsInput | string[]
    interests?: JobSeekerProfileUpdateinterestsInput | string[]
    desiredWorkField?: NullableStringFieldUpdateOperationsInput | string | null
    employmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    jobSeekingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationNote?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJobSeekerProfileNestedInput
    experiences?: WorkExperienceUpdateManyWithoutJobSeekerProfileNestedInput
  }

  export type JobSeekerProfileUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: NullableStringFieldUpdateOperationsInput | string | null
    rw?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    educationMajor?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: JobSeekerProfileUpdateskillsInput | string[]
    interests?: JobSeekerProfileUpdateinterestsInput | string[]
    desiredWorkField?: NullableStringFieldUpdateOperationsInput | string | null
    employmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    jobSeekingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verificationNote?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiences?: WorkExperienceUncheckedUpdateManyWithoutJobSeekerProfileNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    lastUsedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceCreateManyJobSeekerProfileInput = {
    id?: string
    companyName: string
    position: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    createdAt?: Date | string
  }

  export type JobSeekerDocumentCreateManyJobSeekerProfileInput = {
    id?: string
    fileName: string
    fileUrl: string
    mimeType?: string | null
    fileSize?: number | null
    createdAt?: Date | string
  }

  export type WorkExperienceUpdateWithoutJobSeekerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceUncheckedUpdateWithoutJobSeekerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceUncheckedUpdateManyWithoutJobSeekerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobSeekerDocumentUpdateWithoutJobSeekerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobSeekerDocumentUncheckedUpdateWithoutJobSeekerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobSeekerDocumentUncheckedUpdateManyWithoutJobSeekerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}