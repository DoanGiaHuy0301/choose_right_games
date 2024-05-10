/**
 * @file App route config

 */

import React from 'react'

export enum RouteKey {
  Home,
  Prize,
  Ranks,
  Rules,
  Setting,
  Countdown,
  Play,
}

export interface RouteConfig {
  id: RouteKey
  name: string
  path: string
  subPath?: string
  icon?: React.ReactElement
  pather?(...args: Array<any>): string
}

export const routeMap: ReadonlyMap<RouteKey, RouteConfig> = new Map(
  [
    {
      id: RouteKey.Home,
      name: 'home',
      path: '/',
    },
    {
      id: RouteKey.Countdown,
      name: 'countdown',
      path: '/countdown',
    },
    {
      id: RouteKey.Play,
      name: 'play',
      path: '/play',
    },
    {
      id: RouteKey.Prize,
      name: 'prize',
      path: '/prize',
    },
    {
      id: RouteKey.Ranks,
      name: 'ranks',
      path: '/ranks',
    },
    {
      id: RouteKey.Rules,
      name: 'rules',
      path: '/rules',
    },
    {
      id: RouteKey.Setting,
      name: 'setting',
      path: '/setting',
    },
  ].map((route) => [route.id, route]),
)

export const rc = (routeKey: RouteKey): RouteConfig => {
  return routeMap.get(routeKey)!
}
export const rcByPath = (routePath: string) => {
  return Array.from(routeMap.values()).find((route) => route.path === routePath)
}
export const isRoute = (routePath: string, routeKey: RouteKey) => {
  return routeMap.get(routeKey)?.path === routePath
}
export const getRouteNameBySubpath = (subpath: string) => {
  const routeArray = Array.from(routeMap.values())
  return routeArray.find((route) =>
    route.subPath ? route.subPath === subpath : route.path === subpath,
  )
}
