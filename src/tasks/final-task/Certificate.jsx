import {
   Page,
   Text,
   View,
   Document,
   StyleSheet,
   Image,
} from "@react-pdf/renderer";

import PortCCLogo from "../../components/PortCC-logo-horizontal-white.png";
import LearningUndefeatedLogo from "./learning_undefeated_logo.png";

// Font.register({ family: 'Courier', src: source, fontStyle: 'normal', fontWeight: 'bold', fonts: [] });

const styles = StyleSheet.create({
   page: {
      flexDirection: "column",
      backgroundColor: "#A4E4A9",
      alignItems: "center",
      justifyContent: "center",
   },
   header: {
      fontSize: 34,
      color: "black",
      fontFamily: "Times-Roman",
      marginBottom: 40,
   },
   mission: {
      fontSize: 48,
      color: "darkgreen",
      fontFamily: "Courier-Bold",
   },
   text: {
      fontSize: 24,
      fontFamily: "Helvetica-Bold",
      color: "#1D648F",
      marginBottom: 5,
      marginTop: 5,
   },
   small: {
      fontSize: 24,
      fontFamily: "Helvetica",
      color: "royalblue",
      marginBottom: 10,
      marginTop: 10,
   },
});

export default function Certificate() {
   return (
      <Document>
         <Page
            size="A4"
            style={styles.page}
            orientation="landscape"
            // width="60%"
            // minWidth="300px"
         >
            <View
               style={{
                  textAlign: "center",
                  borderWidth: 7, 
                  borderColor: "#549459", 
                  borderStyle: "solid", 
                  width: "82%",
                  backgroundColor: "lightyellow", //#E8FEE8
                  padding: 15,
               }}
            >
               <Text style={styles.text}>Learning Undefeated</Text>
               <Text style={styles.header}>Certificate of Completion</Text>
               <Text style={styles.small}>
                  You have successfully completed the
               </Text>
               <Text style={styles.mission}>ENVIRONMENTAL MISSION</Text>
               <Text style={styles.small}>on</Text>
               <Text style={styles.text}>
                  {new Date().toLocaleDateString()}
               </Text>
               <View
                  style={{
                     display: "flex",
                     flexDirection: "row",
                     justifyContent: "space-between",
                     alignItems: "center",
                  }}
               >
                  <Image
                     style={{ width: "190px", marginTop: 50 }}
                     src={LearningUndefeatedLogo}
                  />
                  <Image
                     style={{
                        width: "270px",
                        marginTop: 50,
                        backgroundColor: "royalblue",
                        padding: 10,
                        borderRadius: 5
                     }}
                     src={PortCCLogo}
                  />
               </View>
            </View>
         </Page>
      </Document>
   );
}
