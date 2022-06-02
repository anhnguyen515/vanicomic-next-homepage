import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import ComicSquareCard from "components/common/ComicSquareCard";
import PropTypes from "prop-types";
import * as React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

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

export default function GenresSection({ comics }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          //   variant="scrollable"
        >
          <Tab label="Drama" {...a11yProps(0)} />
          <Tab label="Huyền Ảo" {...a11yProps(1)} />
          <Tab label="Hài Hước" {...a11yProps(2)} />
          <Tab label="Hành Động" {...a11yProps(3)} />
          <Tab label="Slice of Life" {...a11yProps(4)} />
          <Tab label="Lãng Mạn" {...a11yProps(5)} />
          <Tab
            label="Các thể loại khác"
            icon={<ArrowRightIcon />}
            iconPosition="end"
            {...a11yProps(6)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.genre.slug === "drama")
            .map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.genre.slug === "huyen-ao")
            .map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.genre.slug === "hai-huoc")
            .map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.genre.slug === "hanh-dong")
            .map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.genre.slug === "slice-of-life")
            .map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.genre.slug === "lang-man")
            .map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
    </Box>
  );
}
