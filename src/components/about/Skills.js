import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
}));

export default function Skills() {
  const GridItem = ({ name, icon, color }) => {
    return (
      <Grid item xs={6} sm={3}>
        <Item>
          <FontAwesomeIcon icon={icon} size="4x" style={{ color }} />
          <Typography mt={2} sx={{ fontSize: 14 }}>
            {name}
          </Typography>
        </Item>
      </Grid>
    );
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%" }}
    >
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 1, md: 1 }}>
        <GridItem name="React" icon="fa-brands fa-react" color="#5ed4f4" />
        <GridItem name="JavaScript" icon="fa-brands fa-js" color="#d4b52a" />
        <GridItem name="Node.js" icon="fa-brands fa-node" color="#73ad5e" />
        <GridItem name="HTML" icon="fa-brands fa-html5" color="#dd4d26" />
        <GridItem name="CSS" icon="fa-brands fa-css3-alt" color="#146fb1" />
        <GridItem name="GraphQL" icon="fa-solid fa-database" color="#df33a6" />
        <GridItem name="Java" icon="fa-brands fa-java" color="#dc2d29" />
        <GridItem
          name="Spring Boot"
          icon="fa-solid fa-power-off"
          color="#60b141"
        />
        <GridItem name="Python" icon="fa-brands fa-python" color="#749abe" />
        <GridItem name="AWS" icon="fa-brands fa-aws" color="#f69503" />
        <GridItem name="PHP" icon="fa-brands fa-php" color="#697ab2" />
        <GridItem name="Git" icon="fa-brands fa-git" color="#ea4d31" />
        <GridItem name="Jira" icon="fa-brands fa-jira" color="#126be1" />
        <GridItem name="Figma" icon="fa-brands fa-figma" color="#09c87e" />
      </Grid>
    </Box>
  );
}
