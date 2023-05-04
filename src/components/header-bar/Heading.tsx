import { useLocation } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import logo from "../images/dont-keep-icon.png";
import { HeadingType, RoutesEnum } from "../common/types/types";

const Heading = () => {
  const location = useLocation();
  console.log("location: ", location);

  const headings: HeadingType[] = [
    { pathname: RoutesEnum.notes, headingText: "Don't Keep" },
    { pathname: RoutesEnum.reminders, headingText: "Reminders" },
    { pathname: RoutesEnum.editLabels, headingText: "Edit labels" },
    { pathname: RoutesEnum.archive, headingText: "Archive" },
    { pathname: RoutesEnum.bin, headingText: "Bin" },
  ];

  return (
    <>
      {headings.map((headingsItem, index) =>
        location.pathname === headingsItem.pathname ||
        location.pathname === `${headingsItem.pathname}/` ? (
          <Box
            key={index}
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            {headingsItem.pathname === RoutesEnum.notes && (
              <img
                src={logo}
                height="38px"
                alt="Don't Keep"
                style={{ marginLeft: "5px" }}
              />
            )}
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "#5A5A5A", marginLeft: "1rem" }}
            >
              {headingsItem.headingText}
            </Typography>
          </Box>
        ) : (
          ""
        )
      )}
    </>
  );
};

export default Heading;
