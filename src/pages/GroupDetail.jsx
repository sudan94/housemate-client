import React from "react";
import Layout from "../components/Layout";
import { Fab, Grid } from "@mui/material";
import TaskTable from "../components/TaskTable";
import GroupContainer from "../components/GroupContainer";

import AddIcon from '@mui/icons-material/Add';
import { useParams } from "react-router-dom";

const GroupDetail = () => {
  const {id} = useParams()
  // console.log(id)
  return (
    <Layout>
        <GroupContainer item={id}/>
        <TaskTable/>
  </Layout>
  )
}

export default GroupDetail
