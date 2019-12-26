import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addProfile} from '../../actions/profileActions';

class Profile extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
    profiles: PropTypes.object.isRequired,
  };

  render() {
    const {id} = this.props.match.params;
    const {profiles} = this.props;
    if (id === undefined || id > parseInt(Object.keys(profiles).pop())) {
      return (
        <div>
          <h2>Профиль чата #{id}</h2>
          <h4>Надо создать</h4>
        </div>
      );
    }
    const {title, description} = profiles[id];
    return (
      <div>
        <h2>Профиль чата #{id}</h2>
        <h3>{title}</h3>
        <h4>{description}</h4>
      </div>
    );
  }
}

const mapStateToProps = ({profileReducer}) => ({
  profiles: profileReducer.profiles,
});

const mapDispatchProps = (dispatch) =>
  bindActionCreators({addProfile}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Profile);
