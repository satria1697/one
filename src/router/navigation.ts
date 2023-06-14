import { useRouter } from 'vue-router'

interface NavigationPushInterface {
  name?: string
}

interface NavigationInterface {
  goBack: () => void
  go: (goArgs: NavigationPushInterface) => Future<void>
}

class Navigation implements NavigationInterface {
  router = useRouter()
  goBack() {
    this.router.back()
  }
  go(goArgs: NavigationPushInterface): Future<void> {
    const { name } = goArgs
    return this.router.push({
      name
    })
  }
}

export default Navigation
