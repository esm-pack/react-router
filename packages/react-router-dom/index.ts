let alreadyWarned = false;

if (!alreadyWarned && typeof console !== "undefined") {
  alreadyWarned = true;
  console.warn(
    "The `react-router-dom` package is deprecated in v7, you can change all " +
      "of your imports to load directly from the `react-router` package."
  );
}

export type {
  ActionFunction,
  ActionFunctionArgs,
  AwaitProps,
  DataRouteMatch,
  DataRouteObject,
  unstable_DataStrategyFunction,
  unstable_DataStrategyFunctionArgs,
  unstable_DataStrategyMatch,
  ErrorResponse,
  Fetcher,
  FutureConfig,
  Hash,
  IndexRouteObject,
  IndexRouteProps,
  JsonFunction,
  LayoutRouteProps,
  LazyRouteFunction,
  LoaderFunction,
  LoaderFunctionArgs,
  Location,
  MemoryRouterProps,
  NavigateFunction,
  NavigateOptions,
  NavigateProps,
  Navigation,
  Navigator,
  NonIndexRouteObject,
  OutletProps,
  ParamParseKey,
  Params,
  Path,
  PathMatch,
  PathParam,
  PathPattern,
  PathRouteProps,
  Pathname,
  RedirectFunction,
  RelativeRoutingType,
  RouteMatch,
  RouteObject,
  RouteProps,
  RouterProps,
  RouterProviderProps,
  RoutesProps,
  Search,
  ShouldRevalidateFunction,
  ShouldRevalidateFunctionArgs,
  To,
  UIMatch,
  Blocker,
  BlockerFunction,
  unstable_HandlerResult,
  AgnosticDataIndexRouteObject,
  AgnosticDataNonIndexRouteObject,
  AgnosticDataRouteMatch,
  AgnosticDataRouteObject,
  AgnosticIndexRouteObject,
  AgnosticNonIndexRouteObject,
  AgnosticRouteMatch,
  AgnosticRouteObject,
  HydrationState,
  InitialEntry,
  StaticHandler,
  TrackedPromise,
  UNSAFE_DeferredData,
  FormEncType,
  FormMethod,
  GetScrollRestorationKeyFunction,
  StaticHandlerContext,
  V7_FormMethod,
  BrowserRouterProps,
  HashRouterProps,
  HistoryRouterProps,
  LinkProps,
  NavLinkProps,
  FetcherFormProps,
  FormProps,
  ScrollRestorationProps,
  SetURLSearchParams,
  SubmitFunction,
  FetcherSubmitFunction,
  FetcherWithComponents,
  ParamKeyValuePair,
  SubmitOptions,
  URLSearchParamsInit,
  StaticRouterProps,
  StaticRouterProviderProps,
  HtmlLinkDescriptor,
  ClientActionFunction,
  ClientActionFunctionArgs,
  ClientLoaderFunction,
  ClientLoaderFunctionArgs,
  MetaArgs,
  MetaDescriptor,
  MetaFunction,
  ServerRouterProps,
  RoutesTestStubProps,
} from "react-router";

export {
  AbortedDeferredError,
  Await,
  MemoryRouter,
  Navigate,
  NavigationType,
  Outlet,
  Route,
  Router,
  RouterProvider,
  Routes,
  createMemoryRouter,
  createPath,
  createRoutesFromChildren,
  createRoutesFromChildren as createRoutesFromElements,
  defer,
  generatePath,
  isRouteErrorResponse,
  json,
  matchPath,
  matchRoutes,
  parsePath,
  redirect,
  redirectDocument,
  renderMatches,
  resolvePath,
  useBlocker,
  useActionData,
  useAsyncError,
  useAsyncValue,
  useHref,
  useInRouterContext,
  useLoaderData,
  useLocation,
  useMatch,
  useMatches,
  useNavigate,
  useNavigation,
  useNavigationType,
  useOutlet,
  useOutletContext,
  useParams,
  useResolvedPath,
  useRevalidator,
  useRouteError,
  useRouteLoaderData,
  useRoutes,
  getStaticContextFromError,
  stripBasename,
  UNSAFE_DEFERRED_SYMBOL,
  UNSAFE_convertRoutesToDataRoutes,
  createBrowserRouter,
  createHashRouter,
  BrowserRouter,
  HashRouter,
  Link,
  UNSAFE_ViewTransitionContext,
  UNSAFE_FetchersContext,
  unstable_HistoryRouter,
  NavLink,
  Form,
  ScrollRestoration,
  useLinkClickHandler,
  useSearchParams,
  useSubmit,
  useFormAction,
  useFetcher,
  useFetchers,
  UNSAFE_useScrollRestoration,
  useBeforeUnload,
  unstable_usePrompt,
  unstable_useViewTransitionState,
  createSearchParams,
  createStaticHandler,
  createStaticRouter,
  StaticRouter,
  StaticRouterProvider,
  HydratedRouter,
  Meta,
  Links,
  Scripts,
  PrefetchPageLinks,
  ServerRouter,
  createRoutesStub,
} from "react-router";

///////////////////////////////////////////////////////////////////////////////
// DANGER! PLEASE READ ME!
// We provide these exports as an escape hatch in the event that you need any
// routing data that we don't provide an explicit API for. With that said, we
// want to cover your use case if we can, so if you feel the need to use these
// we want to hear from you. Let us know what you're building and we'll do our
// best to make sure we can support you!
//
// We consider these exports an implementation detail and do not guarantee
// against any breaking changes, regardless of the semver release. Use with
// extreme caution and only if you understand the consequences. Godspeed.
///////////////////////////////////////////////////////////////////////////////

/** @internal */
export type {
  UNSAFE_RouteModules,
  UNSAFE_FutureConfig,
  UNSAFE_AssetsManifest,
  UNSAFE_RemixContextObject,
  UNSAFE_EntryRoute,
  UNSAFE_RouteManifest,
  UNSAFE_SingleFetchRedirectResult,
  UNSAFE_SingleFetchResult,
  UNSAFE_SingleFetchResults,
} from "react-router";

/** @internal */
export {
  UNSAFE_DataRouterContext,
  UNSAFE_DataRouterStateContext,
  UNSAFE_LocationContext,
  UNSAFE_NavigationContext,
  UNSAFE_RouteContext,
  UNSAFE_mapRouteProperties,
  UNSAFE_useRouteId,
  UNSAFE_useRoutesImpl,
  UNSAFE_ErrorResponseImpl,
  UNSAFE_RemixContext,
  UNSAFE_decodeViaTurboStream,
  UNSAFE_SingleFetchRedirectSymbol,
} from "react-router";
