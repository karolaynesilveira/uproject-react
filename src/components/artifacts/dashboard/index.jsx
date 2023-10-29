import React from "react";
import { useLocation, Link } from "react-router-dom";
import MenuWrapper from "../../layout/menuWrapper";
import { BreadCrumbSection, Wrapper } from "./styles";
import { Breadcrumb } from "semantic-ui-react";
import translateWordToPortuguese from "../../../commons/translator";

const Dashboard = (props) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbItems = pathnames.map((path, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
    const isLast = index === pathnames.length - 1;
    return (
      <React.Fragment key={path}>
        <Breadcrumb.Section>
          {isLast ? (
            translateWordToPortuguese(path)
          ) : (
            <Link to={routeTo}>{translateWordToPortuguese(path)}</Link>
          )}
        </Breadcrumb.Section>
        {!isLast && <Breadcrumb.Divider icon="right chevron" />}
      </React.Fragment>
    );
  });

  return (
    <Wrapper>
      <MenuWrapper
        showOptions={props.showOptions}
        optionsMenuVisible={props.options}
        menuItens={props.menuItens}
      >
        <BreadCrumbSection>
          <Breadcrumb>{breadcrumbItems}</Breadcrumb>
        </BreadCrumbSection>
        {props.children}
      </MenuWrapper>
    </Wrapper>
  );
};

export default Dashboard;
