import moment from "moment";

 export const formatDate = (value) => {
    if (value) {
      return moment(value).format("DD-MM-YYYY");
    } else {
      return "";
    }
  };