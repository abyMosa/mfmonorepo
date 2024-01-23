import React, { useRef, useEffect } from 'react';
import { mount } from 'users/UsersApp';

const Users = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  });

  return (
    <div ref={ref} />
  );
};

export default Users;
