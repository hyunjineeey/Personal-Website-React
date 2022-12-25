import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
}));

export default function Interests() {
  const { t } = useTranslation();
  const GridItem = ({ title, icon, color, sub }) => {
    return (
      <Grid item xs={12} sm={4} sx={{ minWidth: "300px" }}>
        <Item>
          <FontAwesomeIcon icon={icon} size="8x" style={{ color }} />
          <Typography m={2} variant="h5" sx={{ fontWeight: "medium" }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: 14 }}>{sub}</Typography>
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
        <GridItem
          title={t("about:readingAndWriting.title")}
          icon="fa-solid fa-book"
          color="#bb382a"
          sub={t("about:readingAndWriting.sub")}
        />
        <GridItem
          title={t("about:makingVideo.title")}
          icon="fa-solid fa-camera-retro"
          color="#3bb665"
          sub={t("about:makingVideo.sub")}
        />
        <GridItem
          title={t("about:exploreNew.title")}
          icon="fa-solid fa-bolt"
          color="#f3b73b"
          sub={t("about:exploreNew.sub")}
        />
      </Grid>
    </Box>
  );
}
