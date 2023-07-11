import React from 'react'
import Image from 'next/image';
import Users from '../components/Users';

async function fetchUsers() {
  const res = await fetch('https://reqres.in/api/users');
  const data = await res.json();
  return data.data;
}

const IndexPaga = async () => {
  const users = await fetchUsers();
  
  return <Users users={users} />
}

export default IndexPaga