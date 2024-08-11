/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const InboxLazyImport = createFileRoute('/inbox')()

// Create/Update Routes

const InboxLazyRoute = InboxLazyImport.update({
  path: '/inbox',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/inbox.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/inbox': {
      id: '/inbox'
      path: '/inbox'
      fullPath: '/inbox'
      preLoaderRoute: typeof InboxLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({ InboxLazyRoute })

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/inbox"
      ]
    },
    "/inbox": {
      "filePath": "inbox.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
