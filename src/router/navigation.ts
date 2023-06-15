import { useRouter } from 'vue-router'

interface NavigationPushInterface {
  name?: string
  params?: object
}

interface NavigationInterface {
  goBack: () => void
  go: (options: NavigationPushInterface) => Future<void>
}

class Navigation implements NavigationInterface {
  router = useRouter()
  goBack() {
    this.router.back()
  }
  go(options: NavigationPushInterface): Future<void> {
    const { name, params } = options
    return this.router.push({
      name,
      params
    })
  }
  getParams() {
    return this.router.currentRoute.value.params
  }
}

export default Navigation
