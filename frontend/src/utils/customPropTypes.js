import PropTypes from 'prop-types';
// import urlPropType from 'url-prop-type';

export const notesPropTypes = PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    username: PropTypes.string.isRequired,
    owner: PropTypes.bool.isRequired,
    votes: PropTypes.number.isRequired,
    likedByMe: PropTypes.bool.isRequired,
    userId: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    isTrending: PropTypes.bool.isRequired,
});
export const userPropTypes = PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    owner: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
    role: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
});