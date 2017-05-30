fs = require("fs");
PDFParser = require("pdf2json");

pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData =>
    console.error(errData.parserError)
);
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile("./01.json", JSON.stringify(pdfData));
    //    fs.writeFile("./01.json", pdfParser.getRawTextContent());
    //    fs.writeFile("./01.json", JSON.stringify(pdfParser.getAllFieldsTypes()));
});

pdfParser.loadPDF("./01.pdf");
