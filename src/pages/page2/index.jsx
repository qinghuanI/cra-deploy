import styles from './index.module.scss';

export default function Page2() {
  const handleClick = () => {
    throw Error('hello');
  };

  return (
    <div className={styles.div}>
      this is Page2 component!
      <button onClick={handleClick}>test</button>
    </div>
  );
}
