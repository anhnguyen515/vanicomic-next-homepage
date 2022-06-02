import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import ComicSquareCard from "components/common/ComicSquareCard";
import PropTypes from "prop-types";
import * as React from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box mt={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default function BasicTabs({ comics }) {
  const [value, setValue] = React.useState(() => new Date().getDay() - 1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Thứ Hai" {...a11yProps(0)} />
          <Tab label="Thứ Ba" {...a11yProps(1)} />
          <Tab label="Thứ Tư" {...a11yProps(2)} />
          <Tab label="Thứ Năm" {...a11yProps(3)} />
          <Tab label="Thứ Sáu" {...a11yProps(4)} />
          <Tab label="Thứ Bảy" {...a11yProps(5)} />
          <Tab label="Chủ Nhật" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.comic_weekday === "MO")
            .map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4} xl={2}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.comic_weekday === "TU")
            .map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4} xl={2}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.comic_weekday === "WE")
            .map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4} xl={2}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.comic_weekday === "TH")
            .map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4} xl={2}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.comic_weekday === "FR")
            .map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4} xl={2}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.comic_weekday === "SA")
            .map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4} xl={2}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.comic_weekday === "SU")
            .map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4} xl={2}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
    </Box>
  );
}
