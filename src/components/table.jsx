import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Button,
} from "@mui/material";

export default function TableTask(props) {
  const { columns, tasks, handleDeleleTask, handleEditTask } = props;
  return (
    <Table
      sx={{ minWidth: 650, width: "60vw", mt: 4, ml: 30 }}
      aria-label="simple table"
    >
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column.field} align="right">
              {column.headerName}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            {columns.map((column) => (
              <TableCell key={column.field} align="right">
                {column.field === "status"
                    ? task[column.field] === 2
                        ? "Hoàn thành"
                        : task[column.field] === 1
                        ? "Đang thực hiện"
                        : "Chưa thực hiện"
                    : task[column.field]}
              </TableCell>
            ))}
            <TableCell align="right">
                <Button variant="contained" color="primary" sx={{mr: 1}} onClick={() => handleEditTask(task)}>Sửa</Button>
                <Button variant="contained" color="secondary" onClick={() => handleDeleleTask(task.id)}>Xóa</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
