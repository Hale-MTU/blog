// The three apps Hale publishes, in the order the blog lists them. A post names
// its app with `app:` in its front matter; a post without one is general Hale news.
export const apps = ['openvitals', 'openwatch', 'openbridge'] as const
export type App = (typeof apps)[number]

export const appInfo: Record<App, { name: string; blurb: string; mark: string; site: string }> = {
  openvitals: {
    name: 'OpenVitals',
    blurb: 'The dashboard: your Health Connect records turned into a daily view, all on the phone.',
    mark: '/apps/openvitals-mark.png',
    site: 'https://hale.ngo/en/openvitals/'
  },
  openwatch: {
    name: 'OpenWatch',
    blurb: 'The devices: Garmin and Wear OS watches and a Xiaomi scale, into Health Connect over Bluetooth.',
    mark: '/apps/openwatch-mark.png',
    site: 'https://hale.ngo/en/openwatch/'
  },
  openbridge: {
    name: 'OpenBridge',
    blurb: 'The way out: an optional app that passes what OpenVitals shares on to online services.',
    mark: '/apps/openbridge-mark.png',
    site: 'https://hale.ngo/en/openbridge/'
  }
}

export function isApp(value: unknown): value is App {
  return typeof value === 'string' && (apps as readonly string[]).includes(value)
}
