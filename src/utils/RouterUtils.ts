/**
 * 路由工具类
 */
import router from '@/router/index'

class RouterUtil {
  push(to: string | undefined): void {
    if (to) {
      router.push({ name: to })
    }
  }
}

export default new RouterUtil()
