import PropTypes from 'prop-types';

export const notePropTypes = PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string,
    username: PropTypes.string.isRequired,
    owner: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    likedByMe: PropTypes.bool.isRequired,
    userId: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
});

export const userPropTypes = PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    role: PropTypes.string.isRequired,
});
