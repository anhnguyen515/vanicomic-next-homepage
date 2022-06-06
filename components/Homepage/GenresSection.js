import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import ComicSquareCard from "components/common/ComicSquareCard";
import Link from "next/link";
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

export default function GenresSection({ comics, genres }) {
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
          <Tab label={genres[0].name} {...a11yProps(0)} />
          <Tab label={genres[1].name} {...a11yProps(1)} />
          <Tab label={genres[2].name} {...a11yProps(2)} />
          <Tab label={genres[3].name} {...a11yProps(3)} />
          <Tab label={genres[4].name} {...a11yProps(4)} />
          <Tab label={genres[5].name} {...a11yProps(5)} />
          <Link href={`/the-loai`} passHref>
            <Tab
              label="Tất cả thể loại"
              icon={<ArrowRightIcon />}
              iconPosition="end"
              {...a11yProps(6)}
            />
          </Link>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography
          variant="h4"
          fontWeight={500}
          textAlign="center"
          color={genres[value].main_color}
          gutterBottom
        >
          {genres[value].name}
        </Typography>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.genre.slug === "drama")
            .slice(0, 5)
            .map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography
          variant="h4"
          fontWeight={500}
          textAlign="center"
          color={genres[value].main_color}
          gutterBottom
        >
          {genres[value].name}
        </Typography>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.genre.slug === "huyen-ao")
            .slice(0, 5)
            .map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography
          variant="h4"
          fontWeight={500}
          textAlign="center"
          color={genres[value].main_color}
          gutterBottom
        >
          {genres[value].name}
        </Typography>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.genre.slug === "hai-huoc")
            .slice(0, 5)
            .map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography
          variant="h4"
          fontWeight={500}
          textAlign="center"
          color={genres[value].main_color}
          gutterBottom
        >
          {genres[value].name}
        </Typography>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.genre.slug === "hanh-dong")
            .slice(0, 5)
            .map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography
          variant="h4"
          fontWeight={500}
          textAlign="center"
          color={genres[value].main_color}
          gutterBottom
        >
          {genres[value].name}
        </Typography>
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
        <Typography
          variant="h4"
          fontWeight={500}
          textAlign="center"
          color={genres[value].main_color}
          gutterBottom
        >
          {genres[value].name}
        </Typography>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.genre.slug === "lang-man")
            .slice(0, 5)
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
