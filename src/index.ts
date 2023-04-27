interface Activity {
  [key: string]: any
  timestamp: number
}

export default class ActivityTracker {
  idleThreshold = 20000
  activities = [] as Activity[]

  constructor(props: { idleThreshold?: number }) {
    this.idleThreshold = props?.idleThreshold || 20000
  }

  get lastActivityTimestamp(): number {
    return this.activities.length > 0 ? this.activities[this.activities.length - 1].timestamp : 0
  }

  get isIdle(): boolean {
    return Date.now() - this.lastActivityTimestamp >= this.idleThreshold
  }

  track(activity: { [key: string]: any }): void {
    this.activities.push({ ...activity, timestamp: Date.now() })
    this.activities = this.activities.filter(activity => activity.timestamp >= Date.now() - this.idleThreshold)
  }

  destroy() {
    this.activities = []
  }
}
