import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import GenrePanel from "components/Homepage/GenrePanel";
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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          {genres.slice(0, 6).map((genre, index) => (
            <Tab
              key={genre.id}
              label={genres[index].name}
              {...a11yProps(index)}
            />
          ))}
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
      {genres.slice(0, 6).map((genre, index) => (
        <TabPanel key={genre.id} value={value} index={index}>
          <GenrePanel value={value} genres={genres} comics={comics} />
        </TabPanel>
      ))}
    </Box>
  );
}
