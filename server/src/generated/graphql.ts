import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
};

export type ApiError = {
  __typename?: 'ApiError';
  message: Scalars['String'];
  statusCode: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addPortfolio: PortfolioResult;
  addStrategy?: Maybe<Strategy>;
  updatePortfolio: PortfolioResult;
};


export type MutationAddPortfolioArgs = {
  name: Scalars['String'];
};


export type MutationAddStrategyArgs = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  portfolioId: Scalars['Int'];
  ticker: Scalars['String'];
};


export type MutationUpdatePortfolioArgs = {
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Portfolio = {
  __typename?: 'Portfolio';
  id: Scalars['Int'];
  name: Scalars['String'];
  strategies?: Maybe<Array<Maybe<Strategy>>>;
};

export type PortfolioResult = ApiError | Portfolio;

export type Query = {
  __typename?: 'Query';
  portfolios?: Maybe<Array<Maybe<Portfolio>>>;
  strategies: Array<Strategy>;
  strategy: StrategyResult;
  trade: TradeResult;
  trades: Array<Trade>;
};


export type QueryStrategiesArgs = {
  portfolioId: Scalars['Int'];
};


export type QueryStrategyArgs = {
  id: Scalars['Int'];
};


export type QueryTradeArgs = {
  id: Scalars['Int'];
};


export type QueryTradesArgs = {
  strategyId?: InputMaybe<Scalars['Int']>;
};

export type Strategy = {
  __typename?: 'Strategy';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  ticker: Scalars['String'];
};

export type StrategyResult = ApiError | Strategy;

export type Trade = {
  __typename?: 'Trade';
  action: Scalars['String'];
  closeDate?: Maybe<Scalars['Date']>;
  closeFee?: Maybe<Scalars['Float']>;
  closePrice?: Maybe<Scalars['Float']>;
  expirationDate?: Maybe<Scalars['Date']>;
  id: Scalars['Int'];
  openDate: Scalars['Date'];
  openFee: Scalars['Float'];
  quantity: Scalars['Float'];
  strikePrice?: Maybe<Scalars['Float']>;
  ticker: Scalars['String'];
  transaction?: Maybe<Scalars['Float']>;
  type: Scalars['String'];
};

export type TradeResult = ApiError | Trade;



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ApiError: ResolverTypeWrapper<ApiError>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Portfolio: ResolverTypeWrapper<Portfolio>;
  PortfolioResult: ResolversTypes['ApiError'] | ResolversTypes['Portfolio'];
  Query: ResolverTypeWrapper<{}>;
  Strategy: ResolverTypeWrapper<Strategy>;
  StrategyResult: ResolversTypes['ApiError'] | ResolversTypes['Strategy'];
  String: ResolverTypeWrapper<Scalars['String']>;
  Trade: ResolverTypeWrapper<Trade>;
  TradeResult: ResolversTypes['ApiError'] | ResolversTypes['Trade'];
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ApiError: ApiError;
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Mutation: {};
  Portfolio: Portfolio;
  PortfolioResult: ResolversParentTypes['ApiError'] | ResolversParentTypes['Portfolio'];
  Query: {};
  Strategy: Strategy;
  StrategyResult: ResolversParentTypes['ApiError'] | ResolversParentTypes['Strategy'];
  String: Scalars['String'];
  Trade: Trade;
  TradeResult: ResolversParentTypes['ApiError'] | ResolversParentTypes['Trade'];
};

export type ApiErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApiError'] = ResolversParentTypes['ApiError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  statusCode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addPortfolio?: Resolver<ResolversTypes['PortfolioResult'], ParentType, ContextType, RequireFields<MutationAddPortfolioArgs, 'name'>>;
  addStrategy?: Resolver<Maybe<ResolversTypes['Strategy']>, ParentType, ContextType, RequireFields<MutationAddStrategyArgs, 'name' | 'portfolioId' | 'ticker'>>;
  updatePortfolio?: Resolver<ResolversTypes['PortfolioResult'], ParentType, ContextType, RequireFields<MutationUpdatePortfolioArgs, 'id' | 'name'>>;
};

export type PortfolioResolvers<ContextType = any, ParentType extends ResolversParentTypes['Portfolio'] = ResolversParentTypes['Portfolio']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  strategies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Strategy']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PortfolioResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PortfolioResult'] = ResolversParentTypes['PortfolioResult']> = {
  __resolveType: TypeResolveFn<'ApiError' | 'Portfolio', ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  portfolios?: Resolver<Maybe<Array<Maybe<ResolversTypes['Portfolio']>>>, ParentType, ContextType>;
  strategies?: Resolver<Array<ResolversTypes['Strategy']>, ParentType, ContextType, RequireFields<QueryStrategiesArgs, 'portfolioId'>>;
  strategy?: Resolver<ResolversTypes['StrategyResult'], ParentType, ContextType, RequireFields<QueryStrategyArgs, 'id'>>;
  trade?: Resolver<ResolversTypes['TradeResult'], ParentType, ContextType, RequireFields<QueryTradeArgs, 'id'>>;
  trades?: Resolver<Array<ResolversTypes['Trade']>, ParentType, ContextType, Partial<QueryTradesArgs>>;
};

export type StrategyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Strategy'] = ResolversParentTypes['Strategy']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ticker?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StrategyResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['StrategyResult'] = ResolversParentTypes['StrategyResult']> = {
  __resolveType: TypeResolveFn<'ApiError' | 'Strategy', ParentType, ContextType>;
};

export type TradeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Trade'] = ResolversParentTypes['Trade']> = {
  action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  closeDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  closeFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  closePrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  expirationDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  openDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  openFee?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  strikePrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ticker?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transaction?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TradeResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['TradeResult'] = ResolversParentTypes['TradeResult']> = {
  __resolveType: TypeResolveFn<'ApiError' | 'Trade', ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ApiError?: ApiErrorResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Portfolio?: PortfolioResolvers<ContextType>;
  PortfolioResult?: PortfolioResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Strategy?: StrategyResolvers<ContextType>;
  StrategyResult?: StrategyResultResolvers<ContextType>;
  Trade?: TradeResolvers<ContextType>;
  TradeResult?: TradeResultResolvers<ContextType>;
};

