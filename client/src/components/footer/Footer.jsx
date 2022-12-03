import "./footer.scss";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import GavelIcon from "@mui/icons-material/Gavel";
import GppGoodIcon from "@mui/icons-material/GppGood";

import React from "react";

function Footer({
  className
}) {
  return (
    <div className={`footer ${className}`} >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {" "}
          <ul type="none">
            <li>
              <Link to="/contacts" className="link" sx={{ color: "#3e4143" }}>
                {" "}
                Contact us{" "}
              </Link>
              <ContactMailIcon sx={{ mb: -1, ml: 1, color: "#3e4143" }} />
            </li>
            <li>
              <Link to="" className="link" sx={{ color: "#3e4143" }}>
                For us
              </Link>
              <Diversity3Icon sx={{ mb: -1, ml: 1, color: "#3e4143" }} />
            </li>
            <li>
              <Link to="" className="link" sx={{ color: "#3e4143" }}>
                Help and support
              </Link>
              <ContactSupportIcon sx={{ mb: -1, ml: 1, color: "#3e4143" }} />
            </li>
          </ul>
        </Grid>

        <Grid item xs={4}>
          <ul type="none">
            <li>
              <Link to="" className="link" sx={{ color: "#3e4143" }}>
                Blog
              </Link>
              <CollectionsBookmarkIcon
                sx={{ mb: -1, ml: 1, color: "#3e4143" }}
              />
            </li>
            <li>
              <Link to="" className="link" sx={{ color: "#3e4143" }}>
                Terms
              </Link>
              <GavelIcon sx={{ mb: -1, ml: 1, color: "#3e4143" }} />
            </li>
            <li>
              <Link to="" className="link" sx={{ color: "#3e4143" }}>
                Privicy policy
              </Link>
              <GppGoodIcon sx={{ mb: -1, ml: 1, color: "#3e4143" }} />
            </li>
          </ul>
        </Grid>
      </Grid>
    </div >
  );
}

export default Footer;
