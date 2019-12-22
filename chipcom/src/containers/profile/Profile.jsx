import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class Profile extends React.Component {
  static propTypes = {
    onCloseProfileClick: PropTypes.func,
  };

  render() {
    return (
      <div>
        <div>МОЙ ПРОФИЛЬ</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam facere
          voluptatibus laborum animi ut consequatur impedit aut, quod quisquam sit inventore
          officia deserunt repellat perspiciatis accusantium sequi omnis. Repellat.
        </div>
        <div>
          <Button variant="contained" onClick={ this.props.onCloseProfileClick } color='primary'>Закрыть</Button>
        </div>
      </div>
    )}
}

export default Profile;