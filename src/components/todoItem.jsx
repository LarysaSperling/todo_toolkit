import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { toggleTodo, deleteTodo } from '../redux/slices/todosSlice';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <Box
      component="li"
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 2,
        py: 1.2,
        borderBottom: '1px solid #d3d3d3',
        overflow: 'hidden',
      }}
    >
      <Typography
        sx={{
          flex: 1,
          minWidth: 0,
          color: '#222',
          fontSize: '1rem',
          textDecoration: todo.completed ? 'line-through' : 'none',
          opacity: todo.completed ? 0.5 : 1,
          wordBreak: 'break-word',
          overflowWrap: 'anywhere',
          whiteSpace: 'normal',
        }}
      >
        {todo.text}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: 1,
          flexShrink: 0,
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch(toggleTodo(todo.id))}
          sx={{
            minWidth: '90px',
            textTransform: 'none',
            fontWeight: 600,
            backgroundColor: '#0d6efd',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#0b5ed7',
              boxShadow: 'none',
            },
          }}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </Button>

        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch(deleteTodo(todo.id))}
          sx={{
            minWidth: '90px',
            textTransform: 'none',
            fontWeight: 600,
            backgroundColor: '#dc3545',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#bb2d3b',
              boxShadow: 'none',
            },
          }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}
