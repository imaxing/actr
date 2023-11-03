interface Activity {
  [key: string]: any
  timestamp: number
}

interface ActivityTrackerProps {
  idleThreshold?: number
  onActive?: (d: Activity) => void
  onIdle?: () => void
}

export default class ActivityTracker {
  timer = null as any
  idleThreshold = 20000
  activities = [] as Activity[]
  onActive = (d: Activity) => {}
  onIdle = () => {}

  constructor(props: ActivityTrackerProps) {
    const { idleThreshold = 10000, onIdle = () => {}, onActive = () => {} } = props
    this.activities = []
    this.idleThreshold = idleThreshold
    this.onIdle = onIdle
    this.onActive = onActive
    this.timer = null
  }

  get lastActivityTimestamp(): number {
    return this.activities.length > 0 ? this.activities[this.activities.length - 1].timestamp : 0
  }

  get isIdle(): boolean {
    return Date.now() - this.lastActivityTimestamp >= this.idleThreshold
  }

  track(name: string): void {
    this.activities.push({ name, timestamp: Date.now() })
    this.activities = this.activities.filter(activity => activity.timestamp >= Date.now() - this.idleThreshold)
    this.onActive?.({ name, timestamp: Date.now() })
    this.timer && clearTimeout(this.timer)
    this.timer = setTimeout(() => this.onIdle?.(), this.idleThreshold)
  }

  destroy() {
    this.activities = []
  }
}
