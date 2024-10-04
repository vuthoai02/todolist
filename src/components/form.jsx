import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export default function FormTask(props) {
  const {
    open,
    handleCloseForm,
    handleAddTask,
    editTask,
    handleUpdateTask,
    setEditTask,
  } = props;
  const [values, setValues] = React.useState({
    title: "",
    description: "",
    dueDate: "",
    status: 0,
  });

  const fieldList = [
    { label: "Nhiệm vụ", name: "title", type: "text", value: values.title },
    {
      label: "Mô tả",
      name: "description",
      type: "text",
      value: values.description,
    },
    {
      label: "Ngày hết hạn",
      name: "dueDate",
      type: "date",
      value: values.dueDate,
    },
    {
      label: "Trạng thái",
      name: "status",
      type: "select",
      value: values.status,
    },
  ];

  const handleOnchange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    if (editTask) {
      setValues(editTask);
    }
  }, [editTask]);

  return (
    <>
      <Dialog open={open} onClose={handleCloseForm}>
        <DialogTitle>Thêm nhiệm vụ</DialogTitle>
        <DialogContent>
          {fieldList.map((field) => {
            if (field.type === "select") {
              return (
                <FormControl fullWidth key={field.name}>
                  <InputLabel id="demo-simple-select-label">
                    Trạng thái
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name={field.name}
                    value={field.value}
                    label="Trạng thái"
                    onChange={handleOnchange}
                  >
                    <MenuItem value={0} selected>
                      Chưa thực hiện
                    </MenuItem>
                    <MenuItem value={1}>Đang thực hiện</MenuItem>
                    <MenuItem value={2}>Đã hoàn thành</MenuItem>
                  </Select>
                </FormControl>
              );
            }
            return (
              <TextField
                fullWidth
                name={field.name}
                key={field.name}
                label={field.label}
                type={field.type}
                value={field.value}
                onChange={handleOnchange}
                sx={{ my: 2 }}
                InputLabelProps={field.type === "date" ? { shrink: true } : {}}
              />
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm}>Hủy</Button>
          <Button
            variant="contained"
            onClick={() => {
              if (editTask) {
                handleUpdateTask(values);
              } else {
                handleAddTask(values);
              }
              setValues({
                title: "",
                description: "",
                dueDate: "",
                status: 0,
              });
              setEditTask(null);
            }}
          >
            Thêm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
