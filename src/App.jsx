import React from "react";
import { Grid2 as Grid, AppBar, Typography, Button, Box } from "@mui/material";
import { Add } from "@mui/icons-material";

import TableTask from "./components/table";
import FormTask from "./components/form";

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [editTask, setEditTask] = React.useState(null);

  const columns = [
    { field: "id", headerName: "#", width: 70 },
    { field: "title", headerName: "Nhiệm vụ", width: 130 },
    { field: "description", headerName: "Mô tả", width: 130 },
    {
      field: "dueDate",
      headerName: "Ngày hết hạn",
      width: 90,
    },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 90,
    },
  ];

  const handleAddTask = (task) => {
    setTasks([...tasks, { id: tasks.length, ...task }]);
    setOpen(false);
  };

  const handleUpdateTask = (task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    setOpen(false);
  };

  const handleOpenForm = () => {
    setOpen(true);
  };
  const handleCloseForm = () => {
    setOpen(false);
  };

  const handleDeleleTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id).map((task, index) => ({
      ...task,
      id: index,
    }));
    setTasks(updatedTasks);
  };

  const handleEditTask = (task) => {
    setEditTask(task);
    setOpen(true);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AppBar
          sx={{
            padding: "10px",
            width: "100vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          position="static"
        >
          <Typography variant="h5">To do list</Typography>
          <Typography variant="body2">Hello, Guest</Typography>
        </AppBar>
      </Grid>
      <Grid item xs={12}>
        <Box position={"absolute"} right={10} top={70}>
          <Button
            startIcon={<Add />}
            variant="contained"
            onClick={handleOpenForm}
          >
            Thêm nhiệm vụ
          </Button>
        </Box>
        <TableTask
          columns={columns}
          tasks={tasks}
          handleDeleleTask={handleDeleleTask}
          handleEditTask={handleEditTask}
        />
        <FormTask
          open={open}
          handleCloseForm={handleCloseForm}
          handleAddTask={handleAddTask}
          editTask={editTask}
          handleUpdateTask={handleUpdateTask}
          setEditTask={setEditTask}
        />
      </Grid>
    </Grid>
  );
}

export default App;
