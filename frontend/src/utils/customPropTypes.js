import PropTypes from 'prop-types';
<<<<<<< HEAD
import urlPropType from 'url-prop-type';

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
=======

export const notePropTypes = PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string,
>>>>>>> 755d2833d06213cda5f6fe11d75d87e25ee0d9b4
    username: PropTypes.string.isRequired,
    owner: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    likedByMe: PropTypes.bool.isRequired,
    userId: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
});
<<<<<<< HEAD
=======

export const userPropTypes = PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    role: PropTypes.string.isRequired,
});
>>>>>>> 755d2833d06213cda5f6fe11d75d87e25ee0d9b4
