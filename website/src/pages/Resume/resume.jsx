import React from 'react';
import { Document, Page } from 'react-pdf';

import resumePDF from '../../assets/resume.pdf'

const Resume = () => {
   return   <Document file={resumePDF}>
            <Page pageNumber={1} />
            </Document>
}

export default Resume;