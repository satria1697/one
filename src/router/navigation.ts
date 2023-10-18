import type { LocationQuery, LocationQueryValue, RouteParams } from 'vue-router'
import { useRouter } from 'vue-router'

interface NavigationPushInterface {
  name?: string
  params?: object
  query?: object
}

interface NavigationInterface {
  goBack: () => void
  go: (options: NavigationPushInterface) => Future<void>
  getQuery: () => LocationQuery
  getParams: () => RouteParams
  getQueryDataAsString(query: LocationQueryValue | LocationQueryValue[]): string
}

class Navigation implements NavigationInterface {
  router = useRouter()
  goBack() {
    this.router.back()
  }
  go(options: NavigationPushInterface): Future<void> {
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
