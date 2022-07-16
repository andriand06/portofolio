import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import cv from "../../cv.pdf";
const ResumePage = () => {
  const url =
    "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf";
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = (numPages) => {
    setNumPages(numPages);
  };
  return (
    <>
      <Document file={cv} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </>
  );
};

export default ResumePage;
