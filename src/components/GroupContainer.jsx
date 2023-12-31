import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MembersList from "./MembersList";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useGetGroups } from "../hooks/useGetGroups";
import { useGetGroupsUsers } from "../hooks/useGetGroupUsers";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

export default function GroupContatiner({ item }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [frequency, setFrequency] = React.useState("");
  const handleFrequency = (event) => {
    setFrequency(event.target.value);
  };
  const [person, setPerson] = React.useState("");
  const handlePerson = (event) => {
    setPerson(event.target.value);
  };

  const { data, isLoading } = useGetGroupsUsers(item);
  if (isLoading) {
    return <div>Loading</div>;
  }
  console.log(data);

  return (
    <>
      <Card sx={{ minWidth: 275, mb: 5 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={9}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Group 1
              </Typography>
              <Typography variant="body2">Descrption </Typography>
            </Grid>
            <Grid item xs={12} sm={2} md={1.5}>
              <Button
                size="big"
                variant="contained"
                color="primary"
                onClick={handleOpen1}
                sx={{ float: "right" }}
              >
                Add tasks
              </Button>
            </Grid>
            <Grid item xs={12} sm={2} md={1.5}>
              <Button
                size="big"
                variant="contained"
                color="secondary"
                onClick={handleOpen}
                sx={{ float: "right" }}
              >
                Add Memebers
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          {data.map((item) => (
            <Tooltip title={item.email} placement="top-start">
            <AccountCircleIcon/>
          </Tooltip>
          ))}
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Group
          </Typography>

          <TextField
            id="standard-basic"
            label="Email"
            variant="outlined"
            helperText="Add email for new members"
            fullWidth
          />

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <MembersList />
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} key="1">
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                sx={{ float: "right" }}
              >
                <Button variant="contained" size="small" color="success">
                  {" "}
                  Submit
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  onClick={handleClose}
                >
                  {" "}
                  Cancel
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Task
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={8}>
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Frequency
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={frequency}
                    label="Frequency"
                    onChange={handleFrequency}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={7}>1 Week</MenuItem>
                    <MenuItem value={14}>2 Weeks</MenuItem>
                    <MenuItem value={30}>1 Month</MenuItem>
                    <MenuItem value={"Custom"}>Custom Days</MenuItem>
                  </Select>
                  <FormHelperText>
                    Choose the staring person for the task
                  </FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Disabled"
                  defaultValue="Hello World"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={8}>
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Start Person
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={person}
                    label="Person"
                    onChange={handlePerson}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Sudan</MenuItem>
                    <MenuItem value={2}>Shuvam</MenuItem>
                  </Select>
                  <FormHelperText>
                    For custom days add number of days
                  </FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Basic date picker"
                  views={["day", "month", "year"]}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12}>
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                sx={{ float: "right" }}
              >
                <Button variant="contained" size="small" color="success">
                  {" "}
                  Submit
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  onClick={handleClose1}
                >
                  {" "}
                  Cancel
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
