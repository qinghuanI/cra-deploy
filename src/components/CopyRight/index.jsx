import PropTypes from 'prop-types';

export default function CopyRight({ text }) {
  return <div>{text}</div>;
}

CopyRight.propTypes = {
  text: PropTypes.string,
};
