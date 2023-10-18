import type {
  LocationQuery,
  LocationQueryRaw,
  LocationQueryValue,
  NavigationFailure,
  RouteParams,
  RouteParamsRaw
} from 'vue-router'
import { useRouter } from 'vue-router'

interface NavigationPushInterface {
  name?: string
  params?: RouteParamsRaw
  query?: LocationQueryRaw
}

interface NavigationInterface {
  goBack: () => void
  go: (options: NavigationPushInterface) => Promise<void | NavigationFailure | undefined>
  getQuery: () => LocationQuery
  getParams: () => RouteParams
  getQueryDataAsString(query: LocationQueryValue | LocationQueryValue[]): string
}

class Navigation implements NavigationInterface {
  router = useRouter()
  goBack() {
    this.router.back()
  }
  go(options: NavigationPushInterface): Promise<void | NavigationFailure | undefined> {
    const { name, params, query } = options
    return this.router.push({
      name,
      params,
      query
    })
  }
  getParams() {
    return this.router.currentRoute.value.params
  }

  getQuery() {
    return this.router.currentRoute.value.query
  }

  getQueryDataAsString(query: LocationQueryValue | LocationQueryValue[]): string {
    if (query) {
      if (Array.isArray(query)) {
        return query[0] ?? ''
      }
      return query
    }
    return ''
  }
}

export default Navigation
