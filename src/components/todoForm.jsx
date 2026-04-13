import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todosSlice';
import { Box, Button, TextField } from '@mui/material';

export default function TodoForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedText = text.trim();
    if (!trimmedText) return;

    dispatch(
      addTodo({
        id: Date.now(),
        text: trimmedText,
        completed: false,
      })
    );

    setText('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mb: 2,
      }}
    >
      <TextField
        fullWidth
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        variant="outlined"
        size="small"
        sx={{
          mb: 1.5,
          backgroundColor: '#fff',
          '& .MuiOutlinedInput-root': {
            borderRadius: '2px',
          },
        }}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: '#28a745',
          color: '#fff',
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: 'none',
          borderRadius: '2px',
          '&:hover': {
            backgroundColor: '#218838',
            boxShadow: 'none',
          },
        }}
      >
        Add Todo
      </Button>
    </Box>
  );
}