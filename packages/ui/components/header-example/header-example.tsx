import * as styles from './header-example.module.css'

interface HeaderExampleProps {
  text: string
}

export const HeaderExample = ({ text }: HeaderExampleProps) => (
  <h2 className={styles.header}>{text}</h2>
)
