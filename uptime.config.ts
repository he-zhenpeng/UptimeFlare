const pageConfig = {
  // Title for your status page
  title: "SkylerHe's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/he-zhenpeng', label: 'GitHub' },
    { link: 'https://skylerhe-qinglong.hf.space/', label: '青龙面板', highlight: true },
    { link: 'https://sunpanel.887178.xyz/', label: 'SunPanel'},
  ],
  // [OPTIONAL] Group your monitors
  // If not specified, all monitors will be shown in a single list
  // If specified, monitors will be grouped and ordered, not-listed monitors will be invisble (but still monitored)
  // group: {
  //   "🌐 Public (example group name)": ['foo_monitor', 'bar_monitor', 'more monitor ids...'],
  //   "🔐 Private": ['test_tcp_monitor'],
  // },
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    {
      id: 'GitHub',
      name: 'GitHub',
      method: 'GET',
      target: 'https://github.com/he-zhenpeng',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://github.com/he-zhenpeng',
      timeout: 10000,
    },
    {
      id: 'qinglong',
      name: '青龙面板',
      method: 'GET',
      target: 'https://skylerhe-qinglong.hf.space/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://skylerhe-qinglong.hf.space/',
      timeout: 10000,
    },
    {
      id: 'SunPanel',
      name: 'SunPanel',
      method: 'GET',
      target: 'https://sunpanel.887178.xyz/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://sunpanel.887178.xyz/',
      timeout: 10000,
    },
    // // Example HTTP Monitor
    // {
    //   // `id` should be unique, history will be kept if the `id` remains constant
    //   id: 'foo_monitor',
    //   // `name` is used at status page and callback message
    //   name: 'My API Monitor',
    //   // `method` should be a valid HTTP Method
    //   method: 'POST',
    //   // `target` is a valid URL
    //   target: 'https://example.com',
    //   // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
    //   tooltip: 'This is a tooltip for this monitor',
    //   // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
    //   statusPageLink: 'https://example.com',
    //   // [OPTIONAL] `hideLatencyChart` will hide status page latency chart if set to true
    //   hideLatencyChart: false,
    //   // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
    //   expectedCodes: [200],
    //   // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
    //   timeout: 10000,
    //   // [OPTIONAL] headers to be sent
    //   headers: {
    //     'User-Agent': 'Uptimeflare',
    //     Authorization: 'Bearer YOUR_TOKEN_HERE',
    //   },
    //   // [OPTIONAL] body to be sent
    //   body: 'Hello, world!',
    //   // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
    //   responseKeyword: 'success',
    //   // [OPTIONAL] if specified, the response must NOT contains the keyword to be considered as operational.
    //   responseForbiddenKeyword: 'bad gateway',
    //   // [OPTIONAL] if specified, the check will run in your specified region,
    //   // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
    //   checkLocationWorkerRoute: 'https://xxx.example.com',
    // },
    // Example TCP Monitor
    // {
    //   id: 'test_tcp_monitor',
    //   name: 'Example TCP Monitor',
    //   // `method` should be `TCP_PING` for tcp monitors
    //   method: 'TCP_PING',
    //   // `target` should be `host:port` for tcp monitors
    //   target: '1.2.3.4:22',
    //   tooltip: 'My production server SSH',
    //   statusPageLink: 'https://example.com',
    //   timeout: 5000,
    // },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.notify.887178.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://7624145331:AAFdr4A12BZi037DC_XNCQ3OsSg0qIxg3zM/6506306782",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
