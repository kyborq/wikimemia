import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";
import { classNames } from "../../utils/classNames";

type Props = {
  icon: React.ReactNode;
  path: string;
};

export const Navigation: React.FC<Props> = ({ icon, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        classNames(styles.Navigation, isActive && styles.Active)
      }
    >
      {icon}
    </NavLink>
  );
};
