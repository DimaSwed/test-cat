import styles from './styles.module.sass'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  isEnabled: boolean
}

export const Button = ({ children, onClick, isEnabled }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={!isEnabled}>
      {children}
    </button>
  )
}
