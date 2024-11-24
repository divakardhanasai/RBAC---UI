import React, { useState } from 'react';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';
import RoleTable from './components/RoleTable';
import RoleForm from './components/RoleForm';
import { Container, Button, Typography, Divider } from '@mui/material';
import styles from './styles/App.module.css';  // Import the CSS module

function App() {
  const [isUserFormOpen, setUserFormOpen] = useState(false);
  const [isRoleFormOpen, setRoleFormOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleUserFormClose = () => {
    setUserFormOpen(false);
    setSelectedUser(null);
  };

  const handleRoleFormClose = () => {
    setRoleFormOpen(false);
    setSelectedRole(null);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setUserFormOpen(true);
  };

  const handleEditRole = (role) => {
    setSelectedRole(role);
    setRoleFormOpen(true);
  };

  return (
    <Container className={styles.appContainer}>
      <Typography variant="h4" gutterBottom className={styles.title}>
        RBAC Admin Dashboard
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setUserFormOpen(true)}
        className={styles.addButton}
      >
        Add User
      </Button>
      <UserTable onEdit={handleEditUser} />
      <UserForm open={isUserFormOpen} onClose={handleUserFormClose} selectedUser={selectedUser} />

      <Divider className={styles.divider} />

      <Button
        variant="contained"
        color="primary"
        onClick={() => setRoleFormOpen(true)}
        className={styles.addButton}
      >
        Add Role
      </Button>
      <RoleTable onEdit={handleEditRole} />
      <RoleForm open={isRoleFormOpen} onClose={handleRoleFormClose} selectedRole={selectedRole} />
    </Container>
  );
}

export default App;
