import styles from './index.module.scss';
import { Button } from 'antd';
import { useNavigate } from 'react-router';
import CopyRight from '../../components/CopyRight';

export default function Page2() {
  const navigate = useNavigate();

  return (
    <div className={styles.div}>
      this is Page2 component!
      <Button
        type='primary'
        size='small'
        onClick={() => {
          navigate('/page1');
        }}
      >
        to page1
      </Button>
      <CopyRight text='Talkdesk All' />
    </div>
  );
}
