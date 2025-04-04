import styles from './styles.module.sass'
import { Button } from '@/shared/ui/Button'

interface IRefreshButtonProps {
  isEnabled: boolean
  toggleEnabled: () => void
  autoRefresh: boolean
  toggleAutoRefresh: () => void
  onGetCat: () => void
}

export const RefreshButton = ({
  isEnabled,
  toggleEnabled,
  autoRefresh,
  toggleAutoRefresh,
  onGetCat
}: IRefreshButtonProps) => {
  return (
    <div className={styles.controls}>
      <div className={styles.checkboxes}>
        <label>
          <input type="checkbox" checked={isEnabled} onChange={toggleEnabled} />
          <span className={styles.status}>{isEnabled ? 'Enabled' : 'Disabled'}</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={autoRefresh}
            disabled={!isEnabled}
            onChange={toggleAutoRefresh}
          />
          <span className={styles.description}>Auto-refresh every 5 seconds</span>
        </label>
      </div>
      <Button onClick={onGetCat} isEnabled={isEnabled}>
        Get cat
      </Button>
    </div>
  )
}
