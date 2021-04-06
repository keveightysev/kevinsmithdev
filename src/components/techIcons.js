import React from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import nodejsIcon from "@iconify/icons-logos/nodejs-icon";
import reduxIcon from "@iconify/icons-logos/redux";
import postgresqlIcon from "@iconify/icons-logos/postgresql";
import firebaseIcon from "@iconify/icons-logos/firebase";
import twilioIcon from "@iconify/icons-logos/twilio";
import stripeIcon from "@iconify/icons-logos/stripe";

const icons = {
  react: <Icon icon={reactIcon} width="5rem" />,
  node: <Icon icon={nodejsIcon} width="5rem" />,
  redux: <Icon icon={reduxIcon} width="5rem" />,
  postgresql: <Icon icon={postgresqlIcon} width="5rem" />,
  firebase: <Icon icon={firebaseIcon} width="5rem" />,
  twilio: <Icon icon={twilioIcon} width="5rem" />,
  stripe: <Icon icon={stripeIcon} width="5rem" />,
};

export default icons;
