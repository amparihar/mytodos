import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
// Redux Hooks
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from '../../common';
import ManageGroup from './ManageGroup';
import * as actions from '../../store/actions';
import { ConnectedTaskList } from './TaskList';

const GroupList = ({ groups = [], fetchGroups }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const handleAddNewClick = (e) => {
    e.preventDefault();
    //newGroupModalRef.current.show();
    setDisplayModal(true);
  };
  //const newGroupModalRef = useRef();

  useEffect(() => {
    if (groups.length === 0) {
      fetchGroups();
    }
  }, []);

  return (
    <>
      <h4>My Todos</h4>
      <a href="#" onClick={handleAddNewClick} style={{ color: 'blue' }}>
        Add New
      </a>
      <div className="card-columns">
        {groups.map((group) => (
          <div key={group.id}>
            <ConnectedTaskList id={group.id} name={group.name} />
          </div>
        ))}
      </div>
      <Modal display={displayModal}>
        <div className="modal-header">
          <h4>Add New Group</h4>
          <button
            type="button"
            className="close"
            onClick={() => setDisplayModal(false)}
          >
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <ManageGroup onClose={() => setDisplayModal(false)} />
        </div>
      </Modal>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    groups: state.todos.group.groups,
    error: state.todos.group.error,
  };
}

const mapDispatchToProps = {
  fetchGroups: actions.requestGroups,
};

export const ConnectedGroupList = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupList);
