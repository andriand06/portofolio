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
    url: "https://server-portofolio.herokuapp.com/cv.pdf",
    httpHeaders: {
      accept: "*/*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Accept-Encoding": "gzip, deflate, br",
    },
    widthCredentials: true,
  };
  return (
    <>
      <Document file="/cv.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </>
  );
};

export default ResumePage;
