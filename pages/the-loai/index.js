import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import HeadPage from "components/common/HeadPage";
import GenrePanel from "components/GenresPage/GenrePanel";
import PropTypes from "prop-types";
import * as React from "react";
import { getAllComics, getAllGenres } from "utility/apis";
import { BRAND_NAME } from "utility/constants";

export async function getServerSideProps() {
  const comics = await getAllComics();
  const genres = await getAllGenres();

  return {
    props: {
      comics,
      genres,
    },
  };
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function AllGenres({ comics, genres }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HeadPage title={`Thể loại - ${BRAND_NAME}`} />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {genres.map((genre, index) => (
            <Tab
              key={genre.id}
              label={genres[index].name}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
        <Box sx={{ width: "100%" }}>
          {genres.map((genre, index) => (
            <TabPanel key={genre.id} value={value} index={index}>
              <GenrePanel value={value} genres={genres} comics={comics} />
            </TabPanel>
          ))}
        </Box>
      </Box>
    </>
  );
}
