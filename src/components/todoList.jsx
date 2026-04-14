import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Paper, Typography, Button } from '@mui/material';
import TodoItem from './TodoItem';
import { clearCompleted } from '../redux/slices/todosSlice';

export default function TodoList({ filter, setFilter }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;
  const hasCompleted = todos.some((todo) => todo.completed);

  return (
    <Paper
      elevation={0}
      sx={{
        maxWidth: 760,
        width: '100%',
        mx: 'auto',
        mt: 2,
        p: { xs: 1.5, sm: 3 },
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
          mb: { xs: 2.5, sm: 4 },
          fontWeight: 700,
          fontFamily: 'serif',
          fontSize: { xs: '2.2rem', sm: '3rem' },
          color: '#000',
          lineHeight: 1.1,
        }}
      >
        Todo List
      </Typography>

      <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </Box>

      <Box
        sx={{
          mt: 2,
          pt: 1.5,
          borderTop: '1px solid #e0e0e0',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr auto 1fr' },
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: '13px',
            color: '#666',
            justifySelf: { xs: 'center', sm: 'start' },
          }}
        >
          {activeTodosCount} {activeTodosCount === 1 ? 'task' : 'tasks'} left
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            flexWrap: 'wrap',
          }}
        >
          {['all', 'active', 'completed'].map((type) => (
            <Button
              key={type}
              size="small"
              variant={filter === type ? 'outlined' : 'text'}
              onClick={() => setFilter(type)}
              sx={{
                textTransform: 'none',
                fontSize: '12px',
                minWidth: 'auto',
                px: 1.5,
                borderRadius: '4px',
              }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Button>
          ))}
        </Box>

        <Box
          sx={{
            justifySelf: { xs: 'center', sm: 'end' },
            minHeight: '28px',
          }}
        >
          {hasCompleted && (
            <Button
              size="small"
              onClick={() => dispatch(clearCompleted())}
              sx={{
                textTransform: 'none',
                fontSize: '12px',
                color: '#d32f2f',
                '&:hover': {
                  backgroundColor: 'transparent',
                  textDecoration: 'underline',
                },
              }}
            >
              Clear completed
            </Button>
          )}
        </Box>
      </Box>

      <Typography
        sx={{
          mt: 1.5,
          textAlign: 'center',
          fontSize: '12px',
          color: '#777',
        }}
      >
        Double click on a task to edit
      </Typography>
    </Paper>
  );
}