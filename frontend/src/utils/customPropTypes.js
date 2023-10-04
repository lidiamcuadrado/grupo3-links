import PropTypes from "prop-types";
import urlPropType from "url-prop-type";

export const userPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  role: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
});
export const notesPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  url: urlPropType.isRequired,
  title: PropTypes.string,
  username: PropTypes.string.isRequired,
  owner: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  likedByMe: PropTypes.bool.isRequired,
  userId: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
});
