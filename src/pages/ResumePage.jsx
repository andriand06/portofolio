import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
const ResumePage = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = (numPages) => {
    setNumPages(numPages);
  };
  const url = {
    url: "cv.pdf",
    httpHeaders: {
      Accept: "*/*",
      "Access-Control-Allow-Origin": "*",
    },
    widthCredentials: true,
  };
  return (
    <>
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </>
  );
};

export default ResumePage;
