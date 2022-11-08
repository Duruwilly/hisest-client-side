import axios from "axios";
import { toast } from "react-toastify";

// *********** Send email
export const SendEmail = async ({
  name,
  email,
  phone,
  subject,
  message,
  setSend,
}) => {
  try {
    const datas = { name, email, phone, subject, message };
    let res = await axios.post(`${process.env.REACT_APP_PRODUCTION_LOCAL}/send`, datas);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};
