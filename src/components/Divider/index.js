import glamorous from 'glamorous';
import { Divider } from 'antd';
import { media } from 'utils';

export default glamorous(Divider)({
  [media.sm]: {
    '& .ant-divider-inner-text': {
      fontSize: '1.5rem',
    },
  },
});
