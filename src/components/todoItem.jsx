import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Typography, TextField } from '@mui/material';
import {
  toggleTodo,
  deleteTodo,
  editTodo,
} from '../redux/slices/todosSlice';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEditStart = () => {
    setIsEditing(true);
    setEditedText(todo.text);
  };

  const handleEditSave = () => {
    const trimmedText = editedText.trim();

    if (trimmedText) {
      dispatch(
        editTodo({
          id: todo.id,
          text: trimmedText,
        })
      );
    }

    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setEditedText(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleEditSave();
    }

    if (event.key === 'Escape') {
      handleEditCancel();
    }
  };

  return (
    <Box
      component="li"
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: { xs: 1, sm: 2 },
        py: 1.2,
        borderBottom: '1px solid #d3d3d3',
        overflow: 'hidden',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <Box sx={{ flex: 1, width: '100%', pr: { xs: 0, sm: 1 } }}>
        {isEditing ? (
          <TextField
            fullWidth
            size="small"
            value={editedText}
            onChange={(event) => setEditedText(event.target.value)}
            onBlur={handleEditSave}
            onKeyDown={handleKeyDown}
            autoFocus
            sx={{
              backgroundColor: '#fff',
              '& .MuiOutlinedInput-root': {
                fontSize: { xs: '0.95rem', sm: '1rem' },
              },
            }}
          />
        ) : (
          <Typography
            onDoubleClick={handleEditStart}
            onClick={handleEditStart}
            sx={{
              width: '100%',
              color: '#222',
              fontSize: { xs: '0.95rem', sm: '1rem' },
              textDecoration: todo.completed ? 'line-through' : 'none',
              opacity: todo.completed ? 0.5 : 1,
              wordBreak: 'break-word',
              overflowWrap: 'anywhere',
              whiteSpace: 'normal',
              cursor: 'pointer',
              userSelect: 'none',
              py: 0.5,
            }}
          >
            {todo.text}
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: 1,
          flexShrink: 0,
          width: { xs: '100%', sm: 'auto' },
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch(toggleTodo(todo.id))}
          sx={{
            minWidth: { xs: '100%', sm: '90px' },
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
            minWidth: { xs: '100%', sm: '90px' },
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
