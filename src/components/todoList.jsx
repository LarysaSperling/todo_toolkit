import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Paper, Typography } from '@mui/material';
import TodoItem from './todoItem';

export default function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <Paper
      elevation={0}
      sx={{
        maxWidth: 760,
        mx: 'auto',
        mt: 2,
        p: 3,
        backgroundColor: '#f5f5f5',
        border: '1px solid #cfcfcf',
        borderRadius: '6px',
        minHeight: '260px',
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        align="center"
        sx={{
          mb: 4,
          fontWeight: 700,
          fontFamily: 'serif',
          fontSize: '3rem',
          color: '#000',
        }}
      >
        Todo List
      </Typography>

      <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </Box>
    </Paper>
  );
}