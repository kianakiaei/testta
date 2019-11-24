import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
// import tileData from "./tileData";
import image1 from "../img/la.jpg";
import image2 from "../img/ny.jpg";
import image3 from "../img/slide3.jpg";
import image4 from "../img/wallpaper.jpg";
import image5 from "../img/wallpaper4.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 1500,
    flexWrap: "wrap"
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));

const tileData = [
  {
    img: image1,
    title: "Image",
    author: "author",
    cols: 3
  },
  {
    img: image2,
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: image3,
    title: "Image",
    author: "author",
    cols: 2
  },
  {
    img: image4,
    title: "Image",
    author: "author",
    cols: 2
  },
  {
    img: image5,
    title: "Image",
    author: "author",
    cols: 1
  }
];

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  {/* <StarBorderIcon className={classes.title} /> */}
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
