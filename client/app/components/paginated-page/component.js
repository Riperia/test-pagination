import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Pagination from "react-router-pagination-io/client/app/components/common/pagination";

import PageContent from "../PageContent.js";

const PaginatedPage = ({ pageNumber }) => {
  return (
    <section>
      <h1>Pagination (Page {pageNumber})</h1>
      <Pagination />
      <nav>
        <PageContent pageNumber={pageNumber}></PageContent>
        <p>
          Return to the <Link to="/">index page</Link>.
        </p>
        {pageNumber ? <p>Redux has state for page {pageNumber}.</p> : null}
      </nav>
    </section>
  );
};

PaginatedPage.propTypes = {
  pageNumber: PropTypes.number.isRequired,
};

export default PaginatedPage;
