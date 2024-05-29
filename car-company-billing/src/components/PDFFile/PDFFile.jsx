import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import Html from "react-pdf-html";

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "gray",
  },
});

const PDFFile = ({ invoice, capitalizeWords }) => {
  return (
    <>
      {" "}
      <Document style={styles.page}>
        <Page style={styles.page}>
          <Html>
            {`
              <html>
              <body style="padding:10px">
                <div>
                 <div style="font-size: 22px; margin-bottom:10px">
                             Invoice #${invoice.invoice_id}
                 </div>
                     <div
                        style="display: flex; flex-direction: row;
                               justify-content: space-between">
                               <div>
                                 <div style="font-size: 10px">
                                   Processed By: ${capitalizeWords(
                                     invoice.salesperson_name
                                   )}
                                 </div>
                                 <div style="font-size: 10px; margin-bottom: 5px">
                                   Employee Id: ${invoice.salesperson_id}
                                 </div>
                                 <div
                                   style="
                                     display: flex;
                                     flex-direction: row;
                                     gap: 100px"
                                 >
                                   <div style="font-size: 10px">
                                     <div>Customer Name:</div>
                                     <div><b>${capitalizeWords(
                                       invoice.customer_name
                                     )}</b></div>
                                   </div>
                                   <div style="font-size: 10px">
                                     <div>VIN_Number:</div>
                                     <div><b>${invoice.vin_number}</b></div>
                                   </div>
                                 </div>
                               </div>
                             <div>
                               <div style="font-size: 10px">Date: ${
                                 invoice.date
                               }</div>
                               <div style="font-size: 10px" >Customer Id: ${
                                 invoice.customer_id
                               }</div>
                               <div style="font-size: 1px">Car Id: ${
                                 invoice.car_id
                               }</div>
                             </div>
                       </div>
                       <table style="margin-top: 40px; font-size:10px">
                         
             <tr style="background-color:black; color:white;padding:2px">
               <th>Make</th>
               <th>Model</th>
               <th>Rate</th>
               <th>Amount</th>
             </tr>
             <tr style="padding:3px">
               <td>${invoice.make}</td>
               <td>${invoice.model}</td>
               <td>CAD ${invoice.price.toFixed(2)}</td>
               <td>CAD ${invoice.on_road_price.toFixed(2)}</td>
             </tr>           
           </table>  

           <br></br>
           <br></br>
           <div style="display:flex; font-size:10px">
           <div style="align-self: flex-end">
            Subtotal: CAD ${invoice.on_road_price.toFixed(2)}<br></br>
            Tax (13%): CAD ${(invoice.on_road_price * 0.13).toFixed(2)}<br></br>
            Total: CAD ${(invoice.on_road_price * 1.13).toFixed(2)}<br></br>
            </div>
           </div>

           <div style="position:fixed; bottom:0;">
           <div style="font-size: 10px">
           Notes : <br></br>
           Complete checks were done and genuine parts were used for replacements. We will be providing free servicing 
           for 3 years for the client.
           </div>

           <div style="font-size: 10px">
            Terms: <br></br>
            If any issues are seen, please contact our service and visit for further inspection and replacement. Warranty 
            will not be valid if customer change/replace the parts by themselves.
           </div>
           </div>

          </body>
           </html>
            `}
          </Html>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber}/${totalPages}`
            }
          ></Text>
        </Page>
      </Document>
    </>
  );
};

export default PDFFile;
