import Nav from '../../components/Nav';
import styles from '../../styles/Home.module.css';

export default function AboutLayout({ children }) {
  return (
    <div className={styles.container}>
      <Nav />
      <section className='container'>{children}</section>
    </div>
  );
}
