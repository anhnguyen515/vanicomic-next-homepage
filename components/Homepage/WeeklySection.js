import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import ComicSquareCard from "components/common/ComicSquareCard";
import PropTypes from "prop-types";
import * as React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Link from "next/link";

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

export default function WeeklySection({ comics }) {
  const [value, setValue] = React.useState(() => new Date().getDay() - 1);

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
          <Tab label="Thứ Hai" {...a11yProps(0)} />
          <Tab label="Thứ Ba" {...a11yProps(1)} />
          <Tab label="Thứ Tư" {...a11yProps(2)} />
          <Tab label="Thứ Năm" {...a11yProps(3)} />
          <Tab label="Thứ Sáu" {...a11yProps(4)} />
          <Tab label="Thứ Bảy" {...a11yProps(5)} />
          <Tab label="Chủ Nhật" {...a11yProps(6)} />
          <Link href={`/lich-phat-hanh`} passHref>
            <Tab
              label="Xem thêm"
              icon={<ArrowRightIcon />}
              iconPosition="end"
              {...a11yProps(7)}
            />
          </Link>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.comic_weekday === "MO")
            .slice(0, 10)
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
            .filter((comic) => comic.comic_weekday === "TU")
            .slice(0, 10)
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
            .filter((comic) => comic.comic_weekday === "WE")
            .slice(0, 10)
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
            .filter((comic) => comic.comic_weekday === "TH")
            .slice(0, 10)
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
            .filter((comic) => comic.comic_weekday === "FR")
            .slice(0, 10)
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
            .filter((comic) => comic.comic_weekday === "SA")
            .slice(0, 10)
            .map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.comic_weekday === "SU")
            .slice(0, 10)
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
