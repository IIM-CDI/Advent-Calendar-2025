function revealSantaRoute(routes: string[][]): string[] {
  if (routes.length === 0) return []
  
  const routeMap = new Map<string, string>()
  for (const [origin, destination] of routes) {
    routeMap.set(origin, destination)
  }
  
  const route: string[] = [routes[0][0]]
  let currentDestination = routes[0][1]
  
  while (routeMap.has(currentDestination)) {
    route.push(currentDestination)
    currentDestination = routeMap.get(currentDestination)!
  }
  
  route.push(currentDestination)
  
  return route
}
