import { Counter } from './components/counter/counter'
import styles from './navig-example.module.css'

export const NavigExample = () => {
  return (
    <nav className={styles.main}>
      <a href="/">Home</a> | <a href="/counter">Counter</a>| <a href="/list">List</a>
      <Counter />
    </nav>
  )
}
